const express = require('express');
const path = require('path');
const fs = require('fs');
const { translations, SUPPORTED_LANGS, DEFAULT_LANG } = require('./translations');
const { renderPage, renderArticle, BASE_URL, articlesByLang } = require('./render');
const { renderAdmin, toCsv } = require('./lib/adminHtml');

const PORT = process.env.PORT || 3000;
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'pratello2026';
const BOOKINGS_FILE = path.join(__dirname, 'bookings.json');

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '32kb' }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1h' }));

// --- Language detection & routing ---------------------------------------

function detectLang(req) {
  const header = (req.headers['accept-language'] || '').toLowerCase();
  for (const part of header.split(',')) {
    const code = part.trim().slice(0, 2);
    if (SUPPORTED_LANGS.includes(code)) return code;
  }
  return DEFAULT_LANG;
}

app.get('/', (req, res) => {
  res.redirect(302, `/${detectLang(req)}/`);
});

for (const lang of SUPPORTED_LANGS) {
  app.get(`/${lang}/`, (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(renderPage(translations[lang]));
  });
  app.get(`/${lang}`, (req, res) => res.redirect(301, `/${lang}/`));

  for (const article of (articlesByLang[lang] || [])) {
    app.get(`/${lang}/${article.slug}/`, (req, res) => {
      res.set('Content-Type', 'text/html; charset=utf-8');
      res.send(renderArticle(translations[lang], article));
    });
    app.get(`/${lang}/${article.slug}`, (req, res) =>
      res.redirect(301, `/${lang}/${article.slug}/`));
  }
}

// --- SEO files ----------------------------------------------------------

app.get('/robots.txt', (req, res) => {
  res.type('text/plain').send(
`User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/

Sitemap: ${BASE_URL}/sitemap.xml
`);
});

app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml').send(buildSitemap());
});

function buildSitemap() {
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

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${homeUrls}
${articleUrls}
</urlset>
`;
}

// --- Booking API --------------------------------------------------------

function readBookings() {
  try {
    if (!fs.existsSync(BOOKINGS_FILE)) return [];
    return JSON.parse(fs.readFileSync(BOOKINGS_FILE, 'utf8') || '[]');
  } catch (e) {
    console.error('readBookings error:', e.message);
    return [];
  }
}

function writeBookings(list) {
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(list, null, 2), 'utf8');
}

function clean(v, max = 200) {
  if (v == null) return '';
  return String(v).trim().slice(0, max);
}

app.post('/api/book', (req, res) => {
  const b = req.body || {};
  const date = clean(b.date, 20);
  const people = parseInt(b.people, 10);
  const lang = SUPPORTED_LANGS.includes(b.lang) ? b.lang : DEFAULT_LANG;

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return res.status(400).json({ error: 'date' });
  const dayOfWeek = new Date(date + 'T00:00:00').getDay();
  if (![4, 5, 6].includes(dayOfWeek)) return res.status(400).json({ error: 'date_weekday' });
  if (!Number.isFinite(people) || people < 1 || people > 50) {
    return res.status(400).json({ error: 'people' });
  }

  const bookings = readBookings();
  bookings.push({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    createdAt: new Date().toISOString(),
    date, people, lang,
    userAgent: clean(req.headers['user-agent'], 300)
  });
  writeBookings(bookings);
  res.json({ ok: true });
});

// --- Admin --------------------------------------------------------------

function basicAuth(req, res, next) {
  const h = req.headers.authorization || '';
  const [scheme, b64] = h.split(' ');
  if (scheme === 'Basic' && b64) {
    const [u, p] = Buffer.from(b64, 'base64').toString().split(':');
    if (u === ADMIN_USER && p === ADMIN_PASS) return next();
  }
  res.set('WWW-Authenticate', 'Basic realm="Pub Crawl Admin"');
  res.status(401).send('Authentication required.');
}

app.get('/admin', basicAuth, (req, res) => {
  const bookings = readBookings().slice().reverse();
  res.set('Content-Type', 'text/html; charset=utf-8');
  res.send(renderAdmin(bookings));
});

app.get('/api/export.csv', basicAuth, (req, res) => {
  const bookings = readBookings();
  res.set('Content-Type', 'text/csv; charset=utf-8');
  res.set('Content-Disposition', 'attachment; filename="bookings.csv"');
  res.send(toCsv(bookings));
});

// --- Start --------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`🍻 Pub Crawl Bologna running: http://localhost:${PORT}`);
  console.log(`   Admin:  http://localhost:${PORT}/admin  (user: ${ADMIN_USER} / pass: ${ADMIN_PASS})`);
});
