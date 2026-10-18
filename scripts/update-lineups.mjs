// Reads the #lineups channel on Discord and rewrites data/lineups.json.  Node 20+, no dependencies.
//   DISCORD_BOT_TOKEN   (secret)    bot with View Channel + Read Message History on #lineups
//   LINEUPS_CHANNEL_ID  (variable)  id of the #lineups channel
import { readFile, writeFile } from 'node:fs/promises';
import { parseLineupText } from './lineup-parser.mjs';

const token = process.env.DISCORD_BOT_TOKEN, channelId = process.env.LINEUPS_CHANNEL_ID;
if (!token || !channelId) { console.log('DISCORD_BOT_TOKEN / LINEUPS_CHANNEL_ID not set – nothing to do.'); process.exit(0); }

const sleep = ms => new Promise(r => setTimeout(r, ms));
async function api(path) {
  const r = await fetch('https://discord.com/api/v10' + path, { headers: { Authorization: `Bot ${token}` } });
  if (r.status === 429) { await sleep(((await r.json()).retry_after || 1) * 1000 + 100); return api(path); }
  if (!r.ok) throw new Error(`Discord ${r.status} on ${path}: ${await r.text()}`);
  return r.json();
}

// newest → oldest, up to 300 messages
let msgs = [], before = '';
for (let i = 0; i < 3; i++) {
  const page = await api(`/channels/${channelId}/messages?limit=100${before}`);
  msgs = msgs.concat(page); if (page.length < 100) break; before = `&before=${page[page.length - 1].id}`;
}
msgs.reverse(); // oldest first, so a re-posted lineup replaces the older one

const { guild_id } = await api(`/channels/${channelId}`);
const roles = Object.fromEntries((await api(`/guilds/${guild_id}/roles`)).map(r => [r.id, r]));
const people = {}; // user id -> server nickname
for (const m of msgs) for (const u of m.mentions || []) people[u.id] ||= u.global_name || u.username;
const ids = new Set(); for (const m of msgs) for (const x of (m.content || '').matchAll(/<@!?(\d+)>/g)) ids.add(x[1]);
for (const id of ids) {
  try { const mem = await api(`/guilds/${guild_id}/members/${id}`); people[id] = mem.nick || mem.user.global_name || mem.user.username; }
  catch { /* member left: keep the fallback name from the message */ }
}

const roleColors = {};
const text = msgs.map(m => (m.content || '')
  .replace(/<@&(\d+)>/g, (_, id) => { const r = roles[id]; if (!r) return '@unknown-role'; if (r.color) roleColors[r.name] = '#' + r.color.toString(16).padStart(6, '0'); return '@' + r.name; })
  .replace(/<@!?(\d+)>/g, (_, id) => '@' + (people[id] || 'unknown-user'))
  .replace(/<a?:\w+:\d+>/g, '')).join('\n\n');

const FILE = new URL('../data/lineups.json', import.meta.url);
const current = JSON.parse(await readFile(FILE, 'utf8'));
const nameMap = JSON.parse(await readFile(new URL('../data/name-map.json', import.meta.url), 'utf8'));
const parsed = parseLineupText(text, current, { nameMap, roleColors });

const next = { ...current };
for (const s of Object.keys(current)) {
  // safety: never replace a series with something that looks broken
  if (parsed[s].length < Math.ceil(current[s].length / 2)) { console.log(`${s}: found ${parsed[s].length} teams (had ${current[s].length}) – keeping current`); continue; }
  next[s] = parsed[s];
}

if (JSON.stringify(next) !== JSON.stringify(current)) { await writeFile(FILE, JSON.stringify(next, null, 2) + '\n'); console.log('lineups.json updated'); }
else console.log('No lineup changes.');
