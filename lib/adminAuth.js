// Autenticazione Basic condivisa dall'admin: server Express locale,
// netlify/functions/admin.js e netlify/functions/export.js.
//
// Nessun fallback sulla password: se ADMIN_PASS non è impostata nelle env vars
// l'accesso viene negato. Il repository è pubblico, una password di default
// scritta nel codice equivale a non avere autenticazione.

const crypto = require('crypto');

const REALM = 'Basic realm="Pub Crawl Admin"';

// Confronto a tempo costante. Gli hash normalizzano la lunghezza:
// timingSafeEqual richiede buffer della stessa dimensione e la lunghezza
// del segreto non deve trapelare.
function safeEqual(a, b) {
  const ha = crypto.createHash('sha256').update(String(a), 'utf8').digest();
  const hb = crypto.createHash('sha256').update(String(b), 'utf8').digest();
  return crypto.timingSafeEqual(ha, hb);
}

// authorization: valore grezzo dell'header HTTP, es. "Basic dXNlcjpwYXNz".
function checkBasicAuth(authorization) {
  const expectedUser = process.env.ADMIN_USER || 'admin';
  const expectedPass = process.env.ADMIN_PASS;

  if (!expectedPass) {
    console.error('[admin] ADMIN_PASS non impostata: accesso negato. Configurala nelle environment variables.');
    return false;
  }

  const [scheme, b64] = String(authorization || '').split(' ');
  if (scheme !== 'Basic' || !b64) return false;

  const decoded = Buffer.from(b64, 'base64').toString('utf8');
  const sep = decoded.indexOf(':');
  if (sep === -1) return false;

  // Niente short-circuit: entrambi i confronti vengono sempre eseguiti.
  const okUser = safeEqual(decoded.slice(0, sep), expectedUser);
  const okPass = safeEqual(decoded.slice(sep + 1), expectedPass);
  return okUser && okPass;
}

// Risposta 401 pronta per le Netlify Functions.
function unauthorizedResponse() {
  return {
    statusCode: 401,
    headers: { 'WWW-Authenticate': REALM },
    body: 'Authentication required.'
  };
}

module.exports = { checkBasicAuth, unauthorizedResponse, REALM };
