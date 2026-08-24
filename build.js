// Pre-renderizza la landing + articoli long-tail in HTML statico.
// Output in dist/ — pronto per il deploy su Netlify.

const fs = require('fs');
const path = require('path');
const { translations, SUPPORTED_LANGS, DEFAULT_LANG } = require('./translations');
const { renderPage, renderArticle, renderPrivacy, render404, BASE_URL, articlesByLang } = require('./render');
const { buildSitemap } = require('./lib/sitemap');

const DIST = path.join(__dirname, 'dist');

function mkdirp(p) { fs.mkdirSync(p, { recursive: true }); }

function copyDir(src, dest) {
  mkdirp(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

fs.rmSync(DIST, { recursive: true, force: true });
mkdirp(DIST);

copyDir(path.join(__dirname, 'public'), DIST);

for (const lang of SUPPORTED_LANGS) {
  const dir = path.join(DIST, lang);
  mkdirp(dir);
  fs.writeFileSync(path.join(dir, 'index.html'), renderPage(translations[lang]));
  console.log(`  → dist/${lang}/index.html`);

  for (const article of (articlesByLang[lang] || [])) {
    const articleDir = path.join(dir, article.slug);
    mkdirp(articleDir);
    fs.writeFileSync(path.join(articleDir, 'index.html'), renderArticle(translations[lang], article));
    console.log(`  → dist/${lang}/${article.slug}/index.html`);
  }

  const privacyDir = path.join(dir, 'privacy');
  mkdirp(privacyDir);
  fs.writeFileSync(path.join(privacyDir, 'index.html'), renderPrivacy(translations[lang]));
  console.log(`  → dist/${lang}/privacy/index.html`);
}

// Root redirect gestito interamente da netlify.toml (301 → /en/).
// NON generare dist/index.html: se presente, Netlify serve l'HTML invece di
// applicare la regola redirect, causando problemi di indicizzazione su Google.

fs.writeFileSync(path.join(DIST, 'robots.txt'),
  `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/

Sitemap: ${BASE_URL}/sitemap.xml
`);

// Pagina 404: Netlify la serve in automatico per gli URL inesistenti.
// È una sola per tutto il sito, quindi la generiamo nella lingua di default
// ma con i link a tutte e cinque.
fs.writeFileSync(path.join(DIST, '404.html'), render404(translations[DEFAULT_LANG]));
console.log('  → dist/404.html');

fs.writeFileSync(path.join(DIST, 'sitemap.xml'), buildSitemap());

console.log(`\n✅ Build completata in dist/ (BASE_URL=${BASE_URL})`);