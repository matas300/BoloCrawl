const { db } = require('./_firebase');
const { renderAdmin } = require('../../lib/adminHtml');

function checkAuth(event) {
  const user = process.env.ADMIN_USER || 'admin';
  const pass = process.env.ADMIN_PASS || 'pratello2026';
  const h = event.headers.authorization || event.headers.Authorization || '';
  const [scheme, b64] = h.split(' ');
  if (scheme === 'Basic' && b64) {
    const [u, p] = Buffer.from(b64, 'base64').toString().split(':');
    if (u === user && p === pass) return true;
  }
  return false;
}

// Il form di cancellazione arriva come application/x-www-form-urlencoded.
function parseForm(event) {
  const raw = event.isBase64Encoded
    ? Buffer.from(event.body || '', 'base64').toString('utf8')
    : (event.body || '');
  return Object.fromEntries(new URLSearchParams(raw));
}

exports.handler = async (event) => {
  if (!checkAuth(event)) {
    return {
      statusCode: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Pub Crawl Admin"' },
      body: 'Authentication required.'
    };
  }

  try {
    if (event.httpMethod === 'POST') {
      const { deleteId } = parseForm(event);
      if (deleteId) {
        await db.collection('bookings').doc(String(deleteId)).delete();
        console.log('booking deleted', deleteId);
      }
      // Redirect dopo il POST: evita la ri-cancellazione al refresh della pagina.
      return { statusCode: 303, headers: { Location: '/admin' }, body: '' };
    }

    const snap = await db.collection('bookings').orderBy('createdAt', 'desc').get();
    const bookings = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: renderAdmin(bookings)
    };
  } catch (err) {
    console.error('admin error', err);
    return { statusCode: 500, body: 'Server error' };
  }
};
