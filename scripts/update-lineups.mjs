// Syncs Discord → the site.  Node 20+, no dependencies.
//   DISCORD_BOT_TOKEN   (secret)    bot with View Channel + Read Message History on the channels below
//   LINEUPS_CHANNEL_ID  (variable)  lineup channel id(s), comma separated: 111,222  or  f1:111,f2:222,f3:333
//   FIA_CHANNEL_ID      (variable)  FIA announcements channel   -> data/fia.json
//   MEDIA_CHANNEL_ID    (variable)  media channel               -> data/media.json (+ files in /media)
import { readFile, writeFile, mkdir, readdir, rm, access } from 'node:fs/promises';
import { parseLineupText } from './lineup-parser.mjs';

const token = process.env.DISCORD_BOT_TOKEN;
const lineupIds = process.env.LINEUPS_CHANNEL_ID || '';
const fiaId = (process.env.FIA_CHANNEL_ID || '').trim();
const mediaId = (process.env.MEDIA_CHANNEL_ID || '').trim();

const parseAllowedIds = value => new Set(
  (value || '').split(',').map(id => id.trim()).filter(Boolean)
);

const fiaAllowedIds = parseAllowedIds(process.env.FIA_ALLOWED_USER_IDS);
const mediaAllowedIds = parseAllowedIds(process.env.MEDIA_ALLOWED_USER_IDS);
if (!token) { console.log('DISCORD_BOT_TOKEN not set – nothing to do.'); process.exit(0); }

const ROOT = new URL('../', import.meta.url);
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function api(path) {
  const r = await fetch('https://discord.com/api/v10' + path, { headers: { Authorization: `Bot ${token}` } });
  if (r.status === 429) { await sleep(((await r.json()).retry_after || 1) * 1000 + 100); return api(path); }
  if (!r.ok) throw new Error(`Discord ${r.status} on ${path}: ${await r.text()}`);
  return r.json();
}
const readJson = async (rel, fallback) => { try { return JSON.parse(await readFile(new URL(rel, ROOT), 'utf8')); } catch { return fallback; } };
const writeIfChanged = async (rel, value, old) => {
  if (JSON.stringify(value) === JSON.stringify(old)) return false;
  await writeFile(new URL(rel, ROOT), JSON.stringify(value, null, 2) + '\n'); console.log(rel + ' updated'); return true;
};

/* ── mention resolving (users → server nickname, roles → role name) ── */
const guilds = {}, roleColors = {};
async function contextFor(channelId, msgs) {
  const { guild_id: gid } = await api(`/channels/${channelId}`);
  const g = guilds[gid] ||= { roles: Object.fromEntries((await api(`/guilds/${gid}/roles`)).map(r => [r.id, r])), names: {}, fetched: new Set() };
  const fallback = {};
  for (const m of msgs) for (const u of [...(m.mentions || []), m.author].filter(Boolean)) fallback[u.id] ||= u.global_name || u.username;
  const ids = new Set();
  for (const m of msgs) { if (m.author) ids.add(m.author.id); for (const x of (m.content || '').matchAll(/<@!?(\d+)>/g)) ids.add(x[1]); }
  for (const id of ids) {
    if (g.fetched.has(id)) continue; g.fetched.add(id);
    try { const mem = await api(`/guilds/${gid}/members/${id}`); g.names[id] = mem.nick || mem.user.global_name || mem.user.username; } catch { /* left the server */ }
  }
  const name = id => g.names[id] || fallback[id] || 'unknown-user';
  const when = s => new Date(+s * 1000).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZone: 'UTC' }) + ' UTC';
  return {
    gid, name,
    resolve: t => (t || '')
      .replace(/<@&(\d+)>/g, (_, id) => { const r = g.roles[id]; if (!r) return '@unknown-role'; if (r.color) roleColors[r.name] = '#' + r.color.toString(16).padStart(6, '0'); return '@' + r.name; })
      .replace(/<@!?(\d+)>/g, (_, id) => '@' + name(id))
      .replace(/<#\d+>/g, '#channel').replace(/<a?:\w+:\d+>/g, '').replace(/<t:(\d+)(?::\w)?>/g, (_, s) => when(s)),
  };
}

/* ── lineups ── */
async function syncLineups() {
  const entries = lineupIds.split(',').map(x => x.trim()).filter(Boolean).map(x => {
    const m = x.match(/^(?:f([123]):)?(\d+)$/i); if (!m) throw new Error(`Bad channel entry "${x}"`);
    return { series: m[1], id: m[2] };
  });
  if (!entries.length) { console.log('lineups: LINEUPS_CHANNEL_ID not set, skipped'); return; }
  let text = '';
  for (const { series, id } of entries) {
    let msgs = [], before = '';
    for (let i = 0; i < 3; i++) {
      const page = await api(`/channels/${id}/messages?limit=100${before}`);
      msgs = msgs.concat(page); if (page.length < 100) break; before = `&before=${page[page.length - 1].id}`;
    }
    msgs.reverse(); // oldest first, so a re-posted lineup replaces the older one
    const ctx = await contextFor(id, msgs);
    console.log(`lineups: channel ${id}: ${msgs.length} messages`);
    text += (series ? `Formula ${series}\n` : '') + msgs.map(m => ctx.resolve(m.content)).join('\n\n') + '\n\n';
  }
  const current = await readJson('data/lineups.json', {});
  const nameMap = await readJson('data/name-map.json', {});
  const parsed = parseLineupText(text, current, { nameMap, roleColors });
  const next = { ...current };
  for (const s of Object.keys(current)) {
    if (parsed[s].length < Math.ceil(current[s].length / 2)) { console.log(`${s}: found ${parsed[s].length} teams (had ${current[s].length}) – keeping current`); continue; }
    next[s] = parsed[s]; // safety: never replace a series with something that looks broken
  }
  if (!(await writeIfChanged('data/lineups.json', next, current))) console.log('lineups: no changes');
}

/* ── FIA announcements + media feeds ── */
const LIMIT = { image: 10e6, video: 25e6, file: 10e6 };
const kindOf = a => { const t = (a.content_type || '').split(';')[0]; return t.startsWith('image/') ? 'image' : t.startsWith('video/') ? 'video' : 'file'; };
async function download(a, name) {
  const dest = new URL('media/' + name, ROOT);
  try { await access(dest); return true; } catch { /* not downloaded yet */ }
  const r = await fetch(a.url); if (!r.ok) return false;
  await mkdir(new URL('media/', ROOT), { recursive: true });
  await writeFile(dest, Buffer.from(await r.arrayBuffer())); return true;
}
async function buildFeed(channelId, limit) {
  const msgs = (await api(`/channels/${channelId}/messages?limit=${limit}`)).filter(m => m.type === 0 || m.type === 19); // newest first
  const ctx = await contextFor(channelId, msgs);
  const items = [];
  for (const m of msgs) {
    const text = ctx.resolve(m.content).trim();
    const files = []; let i = 0;
    for (const a of m.attachments || []) {
      const type = kindOf(a), ext = (a.filename.match(/\.([a-z0-9]{1,5})$/i) || [, 'bin'])[1].toLowerCase();
      const f = { type, name: a.filename }; i++;
      if (a.size <= LIMIT[type]) {
        const rel = `media/${channelId}-${m.id}-${i}.${ext}`;
        try { if (await download(a, rel.slice(6))) f.path = rel; } catch (e) { console.log('download failed: ' + a.filename); }
      }
      files.push(f); // no path = too big/failed: the site links to the Discord post instead
    }
    const links = [...new Set((m.embeds || []).map(e => e.url).filter(u => u && !text.includes(u)))];
    if (!text && !files.length && !links.length) continue;
    items.push({ id: m.id, date: m.timestamp, author: ctx.name(m.author.id), text, files, links, url: `https://discord.com/channels/${ctx.gid}/${channelId}/${m.id}` });
  }
  return items;
}
async function syncFeed(label, channelId, file, limit) {
  if (!channelId) { console.log(`${label}: channel id not set, skipped`); return; }
  const old = await readJson(file, []);
  const items = await buildFeed(channelId, limit);
  console.log(`${label}: ${items.length} posts`);
  await writeIfChanged(file, items, old);
}
async function cleanMedia() {
  const used = new Set();
  for (const f of ['data/fia.json', 'data/media.json']) for (const it of await readJson(f, [])) for (const x of it.files || []) if (x.path) used.add(x.path.slice(6));
  let names = []; try { names = await readdir(new URL('media/', ROOT)); } catch { return; }
  for (const n of names) if (!used.has(n)) { await rm(new URL('media/' + n, ROOT)); console.log('removed old media ' + n); }
}

await syncLineups();
await syncFeed('FIA', fiaId, 'data/fia.json', 30);
await syncFeed('Media', mediaId, 'data/media.json', 50);
await cleanMedia();
