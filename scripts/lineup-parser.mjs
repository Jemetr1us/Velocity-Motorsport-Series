// Pure parser: turns the lineup channel's text (mentions already resolved to "@Name") into data/lineups.json.
//
// Expected shape of the posts (one or several messages, oldest first):
//   Formula 1                       <- series header (Formula 1 / 2 / 3)
//   @Team Name [🇩🇪]                <- team (a role mention) + flag
//   CEO: @Someone | Title
//   Director: @Someone | Title      <- optional
//   MD1: @Nickname | 🇨🇱 | 19       <- main drivers MD1..MD3, reserves RD1..RD2
//   RD1:                            <- empty seat (also ~~struck-through~~ = empty)

const EMOJI = /[\p{Extended_Pictographic}\u{1F1E6}-\u{1F1FF}\u{FE0F}\u{200D}]/gu;
const SLOT = /^[*_]*(CEO|Director|MD\d|RD\d)[*_]*\s*:[*_]*\s*(.*)$/i;

const segs = v => v.replace(EMOJI, '').split('|').map(s => s.replace(/\s+/g, ' ').trim()).filter(Boolean);
const clean = v => v.replace(/[*_]{2}/g, '').replace(/^@/, '').trim();
const fixQuotes = s => s.replace(/[\u2019\u2018]/g, "'");

export function parseLineupText(text, current = {}, opts = {}) {
  const nameMap = Object.fromEntries(Object.entries(opts.nameMap || {}).map(([k, v]) => [k.toLowerCase(), v]));
  const roleColors = opts.roleColors || {};
  const out = { f1: [], f2: [], f3: [] };
  let series = null, team = null;

  const known = {}, knownTeam = {};
  for (const s of Object.keys(out)) {
    known[s] = {}; knownTeam[s] = {};
    for (const t of current[s] || []) {
      knownTeam[s][t.name.toLowerCase()] = t;
      for (const d of t.drivers || []) if (d.num && d.num !== '—') known[s][d.name.toLowerCase()] = d.num;
    }
  }

  for (const raw of String(text).split(/\r?\n/)) {
    const line = raw.trim(); if (!line) continue;

    const hdr = line.replace(/^[#>\s*_]+|[*_\s]+$/g, '').match(/^formula\s*([123])$/i);
    if (hdr) { series = 'f' + hdr[1]; out[series] = []; team = null; continue; }
    if (!series) continue;

    const slot = line.match(SLOT);
    if (slot && team) {
      const key = slot[1].toUpperCase(), val = slot[2];
      if (key === 'CEO' || key === 'DIRECTOR') {
        const t = segs(clean(val)).join(' | ');
        if (t) (key === 'CEO' ? (team.ceo = t) : (team.director = t));
        continue;
      }
      if (/~~/.test(val)) continue;                 // struck through = vacated
      const s = segs(clean(val)); if (!s.length) continue;
      let name = s[0].normalize('NFKC'), num = null;
      for (const x of s.slice(1)) { const m = x.match(/(\d+)/); if (m) { num = m[1]; break; } }
      if (num === null) { const m = name.match(/\s#(\d+)$/); if (m) { num = m[1]; name = name.replace(/\s#\d+$/, ''); } }
      name = nameMap[name.toLowerCase()] || name;
      if (num === null) num = known[series][name.toLowerCase()] || '—';
      team.drivers.push({ num, code: key, name, pts: 0, wins: 0, pods: 0 });
      continue;
    }

    if (line.startsWith('@') && !slot) {            // team header
      const name = fixQuotes(line.slice(1).replace(/\s*\[[^\]]*\]\s*$/, '').trim());
      const old = knownTeam[series][name.toLowerCase()];
      team = { name, ceo: '', director: '', color: (old && old.color) || roleColors[name] || '#888888', drivers: [] };
      out[series].push(team);
    }
  }

  for (const s of Object.keys(out)) out[s] = out[s].map(t => ({
    name: t.name,
    engine: [t.ceo && 'CEO: ' + t.ceo, t.director && 'Director: ' + t.director].filter(Boolean).join(' · '),
    color: t.color,
    drivers: t.drivers,
  }));
  return out;
}
