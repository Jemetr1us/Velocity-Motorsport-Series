// node scripts/test-parser.mjs [--write]   – parses the sample posts and checks the result.
import { readFile, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { parseLineupText } from './lineup-parser.mjs';

const text = await readFile(new URL('./fixtures/lineups-resolved.txt', import.meta.url), 'utf8');
const current = JSON.parse(await readFile(new URL('../data/lineups.json', import.meta.url), 'utf8'));
const nameMap = JSON.parse(await readFile(new URL('../data/name-map.json', import.meta.url), 'utf8'));
const got = parseLineupText(text, current, { nameMap });

assert.deepEqual(Object.values(got).map(a => a.length), [11, 11, 11]);
const f1 = n => got.f1.find(t => t.name === n);
const drv = (t, code) => t.drivers.find(d => d.code === code);
assert.equal(drv(f1('Scuderia Ferrari'), 'MD1').num, '3');           // number carried over when the nickname has none
assert.equal(drv(f1('Scuderia Ferrari'), 'MD2').name, 'Ageftyg2');   // name-map
assert.equal(drv(f1('Vodafone McLaren'), 'MD2').name, 'Theo');
assert.equal(drv(f1('Vodafone McLaren'), 'MD2').num, '17');          // "theodorable #17🇰🇷"
assert.ok(!drv(f1('Vodafone McLaren'), 'RD2'));                       // struck through
assert.equal(f1('Richard Mille LM Motorsport F1').engine, 'CEO: Mikos | LM CEO · Director: Lawie (gay bitch)');
assert.equal(f1("Tarigy's Motorsport Team F1").engine, "CEO: Flande | Tarigy's CEO");
assert.equal(drv(got.f2.find(t => t.name === 'Vanguard Sabre Racing'), 'MD2').name, 'Nahim');
assert.equal(drv(got.f2.find(t => t.name === 'Vanguard Sabre Racing'), 'RD1').num, '41');
assert.equal(got.f3[0].name, 'LMP');
console.log('parser OK:', Object.entries(got).map(([s, a]) => `${s} ${a.length} teams / ${a.reduce((n, t) => n + t.drivers.length, 0)} drivers`).join(' · '));
if (process.argv.includes('--write')) { await writeFile(new URL('../data/lineups.json', import.meta.url), JSON.stringify(got, null, 2) + '\n'); console.log('wrote data/lineups.json'); }
