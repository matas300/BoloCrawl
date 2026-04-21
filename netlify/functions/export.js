const { db } = require('./_firebase');
const { toCsv } = require('../../lib/adminHtml');

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

exports.handler = async (event) => {
  if (!checkAuth(event)) {
    return {
      statusCode: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Pub Crawl Admin"' },
      body: 'Authentication required.'
    };
  }

  try {
    const snap = await db.collection('bookings').orderBy('createdAt', 'desc').get();
    const bookings = snap.docs.map(d => d.data());
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="bookings.csv"'
      },
      body: toCsv(bookings)
    };
  } catch (err) {
    console.error('export error', err);
    return { statusCode: 500, body: 'Server error' };
  }
};
