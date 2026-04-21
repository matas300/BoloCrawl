// Pre-renderizza la landing + articoli long-tail in HTML statico.
// Output in dist/ — pronto per il deploy su Netlify.

const fs = require('fs');
const path = require('path');
const { translations, SUPPORTED_LANGS, DEFAULT_LANG } = require('./translations');
const { renderPage, renderArticle, BASE_URL, articlesByLang } = require('./render');

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
}

// Root fallback: redirect netlify.toml gestisce lato server.
// Questo HTML scatta solo se qualcuno arriva qui con il redirect server non applicato
// (es. preview link diretto, cache CDN stagnante, link esterno hardcoded).
fs.writeFileSync(
  path.join(DIST, 'index.html'),
`<!DOCTYPE html>
<html lang="${DEFAULT_LANG}">
<head>
<meta charset="UTF-8">
<title>Bolo Crawl — Pub Crawl Bologna</title>
<link rel="canonical" href="${BASE_URL}/${DEFAULT_LANG}/">
<meta http-equiv="refresh" content="0; url=/${DEFAULT_LANG}/">
<script>
(function(){
  var supported = ['it','en','es','de','fr'];
  var nav = (navigator.language || navigator.userLanguage || '${DEFAULT_LANG}').slice(0,2).toLowerCase();
  var lang = supported.indexOf(nav) !== -1 ? nav : '${DEFAULT_LANG}';
  window.location.replace('/' + lang + '/');
})();
</script>
</head>
<body></body>
</html>
`);

fs.writeFileSync(path.join(DIST, 'robots.txt'),
`User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/

Sitemap: ${BASE_URL}/sitemap.xml
`);

const homeUrls = SUPPORTED_LANGS.map(lang => {
  const alternates = SUPPORTED_LANGS.map(
    l => `      <xhtml:link rel="alternate" hreflang="${l}" href="${BASE_URL}/${l}/" />`
  ).join('\n');
  return `  <url>
    <loc>${BASE_URL}/${lang}/</loc>
    <changefreq>weekly</changefreq>
    <priority>${lang === DEFAULT_LANG ? '1.0' : '0.9'}</priority>
${alternates}
      <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en/" />
  </url>`;
}).join('\n');

const articleUrls = SUPPORTED_LANGS.flatMap(lang =>
  (articlesByLang[lang] || []).map(a => `  <url>
    <loc>${BASE_URL}/${lang}/${a.slug}/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`)
).join('\n');

fs.writeFileSync(path.join(DIST, 'sitemap.xml'),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${homeUrls}
${articleUrls}
</urlset>
`);

console.log(`\n✅ Build completata in dist/ (BASE_URL=${BASE_URL})`);
