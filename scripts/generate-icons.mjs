// Generates the PNG icons iOS/Android require (apple-touch-icon must be PNG,
// Android launchers prefer PNG, maskable icons get a padded safe zone).
// Run: node scripts/generate-icons.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';

const svg = readFileSync(new URL('../public/icon.svg', import.meta.url), 'utf8');

function render(width, { padding = 0, background = null } = {}) {
  const inner = width - padding * 2;
  const bgRect = background ? `<rect width="${width}" height="${width}" fill="${background}"/>` : '';
  const wrapped = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${width}" viewBox="0 0 ${width} ${width}">
  ${bgRect}
  <g transform="translate(${padding},${padding}) scale(${inner / 512})">${svg.replace(/<svg[^>]*>/, '').replace('</svg>', '')}</g>
</svg>`;
  const resvg = new Resvg(wrapped, {
    fitTo: { mode: 'width', value: width },
    font: { loadSystemFonts: true, defaultFontFamily: 'sans-serif' },
  });
  return resvg.render().asPng();
}

const out = new URL('../public/', import.meta.url);
writeFileSync(new URL('icon-180.png', out), render(180));
writeFileSync(new URL('icon-192.png', out), render(192));
writeFileSync(new URL('icon-512.png', out), render(512));
// Maskable: 20% safe-zone padding on the brand background.
writeFileSync(new URL('icon-maskable-512.png', out), render(512, { padding: 52, background: '#2F9E5F' }));
console.log('icons written to public/');
