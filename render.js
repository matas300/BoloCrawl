// Rendering server-side della landing in HTML per lingua.
// SSR puro: Google indicizza il testo subito, gli hreflang puntano a URL reali.

const { SUPPORTED_LANGS } = require('./translations');
const whySection = require('./content/whySection');
const articlesByLang = require('./content/articles');

const BASE_URL = process.env.BASE_URL || 'https://pubcrawlbologna.it';

// Contatto WhatsApp: numero in formato internazionale senza spazi né '+' per wa.me.
const WHATSAPP_NUMBER = '393456433446';
const WHATSAPP_DISPLAY = '+39 345 643 3446';

const WA_ICON = (size) =>
  `<svg viewBox="0 0 448 512" width="${size}" height="${size}" aria-hidden="true" focusable="false"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 110.9L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>`;

function waHref(t) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsapp.message)}`;
}

function renderWhatsAppFab(t) {
  return `<a class="wa-fab" href="${waHref(t)}" target="_blank" rel="noopener" aria-label="${escapeHtml(t.whatsapp.fab)}">
        ${WA_ICON(24)}
        <span class="wa-fab-label">${escapeHtml(t.whatsapp.fab)}</span>
    </a>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function hreflangTags() {
  const tags = SUPPORTED_LANGS.map(
    lang => `<link rel="alternate" hreflang="${lang}" href="${BASE_URL}/${lang}/" />`
  ).join('\n    ');
  return `${tags}\n    <link rel="alternate" hreflang="x-default" href="${BASE_URL}/en/" />`;
}

function localBusinessLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Bolo Crawl',
    alternateName: 'Pub Crawl Bologna',
    description: 'Tour guidato dei pub di Bologna con shot di benvenuto, giochi alcolici, sconti e ingresso in discoteca.',
    url: BASE_URL,
    image: `${BASE_URL}/og-image.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Piazza 8 Agosto',
      addressLocality: 'Bologna',
      addressRegion: 'BO',
      postalCode: '40126',
      addressCountry: 'IT'
    },
    geo: { '@type': 'GeoCoordinates', latitude: 44.4989, longitude: 11.3455 },
    telephone: WHATSAPP_DISPLAY,
    priceRange: '€€',
    touristType: ['Students', 'Young adults', 'Backpackers', 'Erasmus students'],
    availableLanguage: ['Italian', 'English', 'Spanish', 'German', 'French']
  };
}

function eventLd(t) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Bolo Crawl — Pub Crawl Bologna',
    description: t.description,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    startDate: new Date().toISOString().split('T')[0] + 'T21:00:00+02:00',
    image: `${BASE_URL}/og-image.svg`,
    location: {
      '@type': 'Place',
      name: 'Piazza 8 Agosto',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Piazza 8 Agosto',
        addressLocality: 'Bologna',
        addressRegion: 'BO',
        postalCode: '40126',
        addressCountry: 'IT'
      }
    },
    offers: {
      '@type': 'Offer',
      price: '25.00',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/${t.lang}/#book`
    },
    organizer: { '@type': 'Organization', name: 'Bolo Crawl', url: BASE_URL }
  };
}

function faqLd(t) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  };
}

function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url
    }))
  };
}

function articleLd(t, article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.h1,
    description: article.description,
    inLanguage: t.lang,
    author: { '@type': 'Organization', name: 'Bolo Crawl' },
    publisher: { '@type': 'Organization', name: 'Bolo Crawl' },
    mainEntityOfPage: `${BASE_URL}/${t.lang}/${article.slug}/`,
    image: `${BASE_URL}/og-image.svg`
  };
}

function jsonLdScripts(objs) {
  return objs
    .map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`)
    .join('\n    ');
}

function langSwitcher(currentLang, slug) {
  const names = { it: 'IT', en: 'EN', es: 'ES', de: 'DE', fr: 'FR' };
  return SUPPORTED_LANGS.map(lang => {
    const active = lang === currentLang ? ' active' : '';
    // Article pages exist only in some langs → link to home for others
    const href = slug && articleExists(lang, slug) ? `/${lang}/${slug}/` : `/${lang}/`;
    return `<a href="${href}" class="lang-link${active}" hreflang="${lang}">${names[lang]}</a>`;
  }).join('');
}

function articleExists(lang, slug) {
  const arr = articlesByLang[lang] || [];
  return arr.some(a => a.slug === slug);
}

function renderHead({ t, title, description, keywords, canonical, ogTitle, ogDescription, ldObjects, slug }) {
  return `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="keywords" content="${escapeHtml(keywords)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="author" content="Bolo Crawl" />
    <link rel="canonical" href="${canonical}" />
    ${slug ? '' : hreflangTags()}

    <meta property="og:type" content="${slug ? 'article' : 'website'}" />
    <meta property="og:site_name" content="Bolo Crawl" />
    <meta property="og:title" content="${escapeHtml(ogTitle)}" />
    <meta property="og:description" content="${escapeHtml(ogDescription)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:locale" content="${t.locale}" />
    <meta property="og:image" content="${BASE_URL}/og-image.svg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(ogTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(ogDescription)}" />
    <meta name="twitter:image" content="${BASE_URL}/og-image.svg" />

    <meta name="geo.region" content="IT-BO" />
    <meta name="geo.placename" content="Bologna" />
    <meta name="geo.position" content="44.4949;11.3293" />
    <meta name="ICBM" content="44.4949, 11.3293" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pikaday@1.8.2/css/pikaday.min.css" />
    <link rel="stylesheet" href="/css/style.css" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

    ${jsonLdScripts(ldObjects)}`;
}

function renderHeader(t, articleSlug) {
  return `<header class="site-header">
        <div class="container header-inner">
            <a href="/${t.lang}/" class="logo" aria-label="Bolo Crawl">
                <svg class="logo-mark" viewBox="0 0 56 40" aria-hidden="true">
                    <defs>
                        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="#ff6b35"/>
                            <stop offset="100%" stop-color="#ffb84d"/>
                        </linearGradient>
                    </defs>
                    <rect x="12" y="14" width="10" height="24" rx="1.5" fill="url(#logoGrad)" transform="rotate(-5 17 26)"/>
                    <rect x="30" y="4" width="10" height="34" rx="1.5" fill="url(#logoGrad)" transform="rotate(4 35 21)"/>
                    <rect x="15" y="20" width="3.5" height="3.5" fill="#0d0b14" opacity="0.55" transform="rotate(-5 17 22)"/>
                    <rect x="33" y="12" width="3.5" height="3.5" fill="#0d0b14" opacity="0.55" transform="rotate(4 35 14)"/>
                    <rect x="33" y="22" width="3.5" height="3.5" fill="#0d0b14" opacity="0.55" transform="rotate(4 35 24)"/>
                </svg>
                <span class="logo-text"><strong>Bolo</strong> Crawl</span>
            </a>
            <nav class="main-nav">
                <a href="/${t.lang}/#how">${escapeHtml(t.nav.howItWorks)}</a>
                <a href="/${t.lang}/#includes">${escapeHtml(t.nav.includes)}</a>
                <a href="/${t.lang}/#faq">${escapeHtml(t.nav.faq)}</a>
                <a href="/${t.lang}/#book" class="nav-cta">${escapeHtml(t.nav.book)}</a>
            </nav>
            <div class="lang-switcher">${langSwitcher(t.lang, articleSlug)}</div>
        </div>
    </header>`;
}

function renderFooter(t) {
  const arts = articlesByLang[t.lang] || [];
  const links = arts.length
    ? `<nav class="footer-articles">
        <span class="footer-articles-label">${escapeHtml(t.footer.articles)}</span>
        ${arts.map(a => `<a href="/${t.lang}/${a.slug}/">${escapeHtml(a.h1)}</a>`).join('')}
      </nav>`
    : '';
  return `<footer class="site-footer">
        <div class="container">
            ${links}
            <p>${escapeHtml(t.footer.tagline)}</p>
            <p class="small">© ${new Date().getFullYear()} Bolo Crawl. ${escapeHtml(t.footer.rights)}</p>
        </div>
    </footer>
    ${renderWhatsAppFab(t)}`;
}

function renderPage(t) {
  const canonical = `${BASE_URL}/${t.lang}/`;
  const why = whySection[t.lang];
  const ldObjects = [
    eventLd(t),
    localBusinessLd(),
    faqLd(t),
    breadcrumbLd([{ name: 'Home', url: canonical }])
  ];

  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>${renderHead({
    t,
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    canonical,
    ogTitle: t.ogTitle,
    ogDescription: t.ogDescription,
    ldObjects
  })}
</head>
<body>
    ${renderHeader(t)}

    <main>
        <section class="hero">
            <div class="container">
                <span class="badge">${escapeHtml(t.hero.badge)}</span>
                <h1>${escapeHtml(t.hero.h1)}</h1>
                <p class="hero-sub">${escapeHtml(t.hero.subtitle)}</p>
                <a href="#book" class="btn btn-primary btn-lg">${escapeHtml(t.hero.cta)}</a>
                <p class="hero-pay">💸 ${escapeHtml(t.hero.payNote)}</p>
                <p class="hero-meta">📍 ${escapeHtml(t.hero.meta)}</p>
            </div>
        </section>

        <section id="how" class="section">
            <div class="container">
                <h2>${escapeHtml(t.howItWorks.title)}</h2>
                <p class="section-sub">${escapeHtml(t.howItWorks.subtitle)}</p>
                <div class="steps">
                    ${t.howItWorks.steps.map(s => `
                    <article class="step">
                        <div class="step-num">${escapeHtml(s.n)}</div>
                        <h3>${escapeHtml(s.t)}</h3>
                        <p>${escapeHtml(s.d)}</p>
                    </article>`).join('')}
                </div>
            </div>
        </section>

        <section id="includes" class="section section-alt">
            <div class="container">
                <h2>${escapeHtml(t.includes.title)}</h2>
                <ul class="includes-list">
                    ${t.includes.items.map(i => `<li>✓ ${escapeHtml(i)}</li>`).join('')}
                </ul>
                <div class="price-tag">
                    <span class="price">€25</span>
                    <span class="price-label">all inclusive</span>
                </div>
                <a href="#book" class="btn btn-primary btn-lg">${escapeHtml(t.hero.cta)}</a>
                <p class="pay-note">💸 ${escapeHtml(t.hero.payNote)}</p>
            </div>
        </section>

        <section id="why" class="section">
            <div class="container container-narrow">
                <h2>${escapeHtml(why.title)}</h2>
                <p class="section-sub">${escapeHtml(why.subtitle)}</p>
                <div class="why-blocks">
                    ${why.blocks.map(b => `
                    <article class="why-block">
                        <h3>${escapeHtml(b.h3)}</h3>
                        <p>${escapeHtml(b.p)}</p>
                    </article>`).join('')}
                </div>
            </div>
        </section>

        <section id="faq" class="section section-alt">
            <div class="container container-narrow">
                <h2>${escapeHtml(t.faq.title)}</h2>
                <div class="faq">
                    ${t.faq.items.map(i => `
                    <details class="faq-item">
                        <summary>${escapeHtml(i.q)}</summary>
                        <p>${escapeHtml(i.a)}</p>
                    </details>`).join('')}
                </div>
            </div>
        </section>

        <section id="book" class="section">
            <div class="container container-narrow">
                <h2>${escapeHtml(t.book.title)}</h2>
                <p class="section-sub">${escapeHtml(t.book.subtitle)}</p>
                <form id="book-form" class="book-form" novalidate>
                    <input type="hidden" name="lang" value="${t.lang}" />
                    <div class="form-row two-cols">
                        <label>${escapeHtml(t.book.date)} *
                            <input type="date" name="date" required data-invalid-msg="${escapeHtml(t.book.dateInvalid)}" data-early-msg="${escapeHtml(t.book.dateTooEarly)}" />
                            <small class="form-help">${escapeHtml(t.book.dateHelp)}</small>
                        </label>
                        <label>${escapeHtml(t.book.people)} *
                            <input type="number" name="people" required min="1" max="50" value="1" />
                        </label>
                    </div>
                    <div class="form-row">
                        <label>${escapeHtml(t.book.name)} *
                            <input type="text" name="name" required autocomplete="name" maxlength="80" data-invalid-msg="${escapeHtml(t.book.nameInvalid)}" />
                        </label>
                    </div>
                    <div class="form-row two-cols">
                        <label>${escapeHtml(t.book.email)} *
                            <input type="email" name="email" required autocomplete="email" maxlength="120" data-invalid-msg="${escapeHtml(t.book.emailInvalid)}" />
                            <small class="form-help">${escapeHtml(t.book.emailHelp)}</small>
                        </label>
                        <label>${escapeHtml(t.book.phone)} <span class="opt">${escapeHtml(t.book.optional)}</span>
                            <input type="tel" name="phone" autocomplete="tel" maxlength="30" />
                            <small class="form-help">${escapeHtml(t.book.phoneHelp)}</small>
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg" data-label="${escapeHtml(t.book.submit)}" data-sending="${escapeHtml(t.book.sending)}">${escapeHtml(t.book.submit)}</button>
                    <p class="pay-note">💸 ${escapeHtml(t.book.payNote)}</p>
                    <p class="form-msg" data-error="${escapeHtml(t.book.error)}"></p>
                    <p class="form-privacy">${escapeHtml(t.book.privacy)}</p>
                </form>

                <p class="wa-inline">${escapeHtml(t.whatsapp.ask)}
                    <a href="${waHref(t)}" target="_blank" rel="noopener">${WA_ICON(16)} ${escapeHtml(t.whatsapp.cta)}</a>
                </p>

                <div id="modal" class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden>
                    <div class="modal-backdrop" data-close></div>
                    <div class="modal-card">
                        <button class="modal-x" data-close aria-label="${escapeHtml(t.modal.close)}">×</button>
                        <h3 id="modal-title">${escapeHtml(t.modal.title)}</h3>
                        <p>${escapeHtml(t.modal.body)}</p>
                        <button class="btn btn-primary" data-close>${escapeHtml(t.modal.close)}</button>
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${renderFooter(t)}

    <script src="https://cdn.jsdelivr.net/npm/pikaday@1.8.2/pikaday.min.js"></script>
    <script src="/js/app.js"></script>
</body>
</html>`;
}

function renderArticle(t, article) {
  const canonical = `${BASE_URL}/${t.lang}/${article.slug}/`;
  const home = `${BASE_URL}/${t.lang}/`;
  const ldObjects = [
    articleLd(t, article),
    localBusinessLd(),
    breadcrumbLd([
      { name: 'Home', url: home },
      { name: article.h1, url: canonical }
    ])
  ];

  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>${renderHead({
    t,
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    canonical,
    ogTitle: article.title,
    ogDescription: article.description,
    ldObjects,
    slug: article.slug
  })}
</head>
<body>
    ${renderHeader(t, article.slug)}

    <main>
        <article class="article">
            <div class="container container-narrow">
                <nav class="breadcrumb">
                    <a href="/${t.lang}/">${escapeHtml(t.footer.backHome.replace(/^← /, ''))}</a>
                    <span>/</span>
                    <span>${escapeHtml(article.h1)}</span>
                </nav>
                <h1>${escapeHtml(article.h1)}</h1>
                <p class="article-intro">${escapeHtml(article.intro)}</p>
                ${article.sections.map(s => `
                <section class="article-section">
                    <h2>${escapeHtml(s.h2)}</h2>
                    <p>${escapeHtml(s.p)}</p>
                </section>`).join('')}
                <div class="article-cta">
                    <a href="/${t.lang}/#book" class="btn btn-primary btn-lg">${escapeHtml(article.cta)}</a>
                    <p><a href="/${t.lang}/" class="back-home">${escapeHtml(t.footer.backHome)}</a></p>
                </div>
            </div>
        </article>
    </main>

    ${renderFooter(t)}
</body>
</html>`;
}

module.exports = { renderPage, renderArticle, BASE_URL, articlesByLang };
