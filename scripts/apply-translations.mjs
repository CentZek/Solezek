// Applies reviewed translations (scripts/fixes/decisions-*.json) to the level files.
// Run: node scripts/apply-translations.mjs
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';

const fixesDir = new URL('../scripts/fixes/', import.meta.url);
const decisions = readdirSync(fixesDir)
  .filter((f) => /^decisions-\d+\.json$/.test(f))
  .flatMap((f) => JSON.parse(readFileSync(new URL(f, fixesDir), 'utf8')));

const byId = new Map(decisions.filter((d) => d.changed).map((d) => [d.id, d]));
console.log(`${decisions.length} decisions, ${byId.size} changes to apply`);

const levelsDir = new URL('../src/content/levels/', import.meta.url);
const entryRe = /(id: '([^']+)',\s*\n\s*en: '(?:[^'\\]|\\.)*',\s*\n\s*ckb: )'((?:[^'\\]|\\.)*)'/g;

let applied = 0;
const missing = new Set(byId.keys());

for (const file of readdirSync(levelsDir).filter((f) => /^level\d+\.ts$/.test(f))) {
  const path = new URL(file, levelsDir);
  const src = readFileSync(path, 'utf8');
  const out = src.replace(entryRe, (full, prefix, id) => {
    const d = byId.get(id);
    if (!d) return full;
    applied++;
    missing.delete(id);
    return `${prefix}'${d.ckb.replace(/'/g, "\\'")}'`;
  });
  if (out !== src) writeFileSync(path, out);
}

console.log(`applied: ${applied}`);
if (missing.size) console.log('not found in level files:', [...missing].join(', '));

// Write a human-readable change log for native review.
const log = decisions
  .filter((d) => d.changed)
  .map((d) => `${d.id}\t${d.en}\t${d.ckb}\t${d.reason ?? ''}`)
  .join('\n');
writeFileSync(new URL('../scripts/fixes/applied-changes.tsv', import.meta.url), `id\ten\tckb\treason\n${log}\n`);
