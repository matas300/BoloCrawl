const { db } = require('./_firebase');
const { toCsv } = require('../../lib/adminHtml');
const { checkBasicAuth, unauthorizedResponse } = require('../../lib/adminAuth');

exports.handler = async (event) => {
  const auth = event.headers.authorization || event.headers.Authorization;
  if (!checkBasicAuth(auth)) return unauthorizedResponse();

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
