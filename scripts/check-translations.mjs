// Compares the app's vocab translations against the Behdini dictionary
// (reference/behdini-dictionary.csv) and reports matches/mismatches/gaps.
// Run: node scripts/check-translations.mjs [--apply]
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';

const dictRows = readFileSync(new URL('../reference/behdini-dictionary.csv', import.meta.url), 'utf8')
  .split('\n')
  .slice(1);

const dict = new Map(); // normalized english -> kurdish arabic script
for (const line of dictRows) {
  // CSV: English,Kurdish (Latin),Kurdish (Arabic Script),Arabic,Transliteration
  // Kurdish fields may contain commas inside quotes — parse minimally.
  const m = line.match(/^("(?:[^"]|"")*"|[^,]*),("(?:[^"]|"")*"|[^,]*),("(?:[^"]|"")*"|[^,]*),/);
  if (!m) continue;
  const unq = (s) => s.replace(/^"|"$/g, '').replace(/""/g, '"').trim();
  const en = unq(m[1]).toLowerCase().replace(/[.!?]$/g, '');
  const ckb = unq(m[3]);
  if (en && ckb && !dict.has(en)) dict.set(en, ckb);
}

const levelsDir = new URL('../src/content/levels/', import.meta.url);
const files = readdirSync(levelsDir).filter((f) => /^level\d+\.ts$/.test(f));

const entryRe = /id: '([^']+)',\s*\n\s*en: '((?:[^'\\]|\\.)*)',\s*\n\s*ckb: '((?:[^'\\]|\\.)*)',/g;

// Orthography-insensitive comparison: same word in different spelling
// conventions (ک/ك, ھ/ه, ە/ه, ZWNJ variants) counts as a match.
const canon = (s) =>
  s
    .replace(/[\u200c\u200d]/g, '') // ZWNJ/ZWJ
    .replace(/ك/g, 'ک')
    .replace(/[ھەه]/g, 'ه')
    .replace(/ي/g, 'ی')
    .replace(/ڕ/g, 'ر')
    .replace(/[ڵل]/g, 'ل')
    .replace(/\s+/g, ' ')
    .trim();

const report = { match: [], mismatch: [], notFound: [] };
const apply = process.argv.includes('--apply');

for (const file of files) {
  const path = new URL(file, levelsDir);
  let src = readFileSync(path, 'utf8');
  let changed = false;
  const entries = [...src.matchAll(entryRe)];
  for (const e of entries) {
    const [full, id, enRaw, ckb] = e;
    const en = enRaw.replace(/\\'/g, "'");
    const key = en.toLowerCase().replace(/[.!?]$/g, '');
    let hit = dict.get(key);
    if (!hit && !key.includes(' ') && key.endsWith('s')) hit = dict.get(key.slice(0, -1));
    if (!hit) {
      report.notFound.push({ id, en, ckb });
      continue;
    }
    if (canon(hit) === canon(ckb)) {
      report.match.push({ id, en, ckb });
    } else {
      report.mismatch.push({ id, en, current: ckb, dictionary: hit });
      if (apply) {
        src = src.replace(full, full.replace(`ckb: '${ckb}'`, `ckb: '${hit.replace(/'/g, "\\'")}'`));
        changed = true;
      }
    }
  }
  if (apply && changed) writeFileSync(path, src);
}

console.log(`MATCH (already correct): ${report.match.length}`);
console.log(`MISMATCH (current vs dictionary): ${report.mismatch.length}`);
console.log(`NOT IN DICTIONARY: ${report.notFound.length}`);
console.log('\n--- MISMATCHES ---');
for (const m of report.mismatch) {
  console.log(`${m.id} | ${m.en} | current: ${m.current} | dict: ${m.dictionary}`);
}
writeFileSync(new URL('./translation-report.json', import.meta.url), JSON.stringify(report, null, 2));
