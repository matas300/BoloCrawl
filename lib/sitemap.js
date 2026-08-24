// Generazione della sitemap XML, condivisa tra build.js (dist/sitemap.xml)
// e server.js (/sitemap.xml). Prima erano due copie divergenti: quella del
// server locale non elencava le pagine privacy.

const { SUPPORTED_LANGS, DEFAULT_LANG } = require('../translations');
const { BASE_URL, articlesByLang, articleSlugFor } = require('../render');

function homeUrls() {
  return SUPPORTED_LANGS.map(lang => {
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
}

function articleUrls() {
  return SUPPORTED_LANGS.flatMap(lang =>
    (articlesByLang[lang] || []).map(a => {
      // stesso articolo nelle altre lingue: slug diverso, stessa chiave
      const alternates = SUPPORTED_LANGS
        .map(l => ({ l, slug: articleSlugFor(l, a.key) }))
        .filter(entry => entry.slug)
        .map(entry => `      <xhtml:link rel="alternate" hreflang="${entry.l}" href="${BASE_URL}/${entry.l}/${entry.slug}/" />`)
        .join('\n');
      return `  <url>
    <loc>${BASE_URL}/${lang}/${a.slug}/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
${alternates}
  </url>`;
    })
  ).join('\n');
}

function privacyUrls() {
  return SUPPORTED_LANGS.map(lang => `  <url>
    <loc>${BASE_URL}/${lang}/privacy/</loc>
    <changefreq>yearly</changefreq>
    <priority>0.2</priority>
  </url>`).join('\n');
}

function buildSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${homeUrls()}
${articleUrls()}
${privacyUrls()}
</urlset>
`;
}

module.exports = { buildSitemap };
