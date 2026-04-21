const { db } = require('./_firebase');

const SUPPORTED = ['it', 'en', 'es', 'de', 'fr'];

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    const b = JSON.parse(event.body || '{}');
    const date = String(b.date || '').trim().slice(0, 20);
    const people = parseInt(b.people, 10);
    const lang = SUPPORTED.includes(b.lang) ? b.lang : 'en';

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return { statusCode: 400, body: JSON.stringify({ error: 'date' }) };
    }
    const dayOfWeek = new Date(date + 'T00:00:00').getDay();
    if (![4, 5, 6].includes(dayOfWeek)) {
      return { statusCode: 400, body: JSON.stringify({ error: 'date_weekday' }) };
    }
    if (!Number.isFinite(people) || people < 1 || people > 50) {
      return { statusCode: 400, body: JSON.stringify({ error: 'people' }) };
    }

    await db.collection('bookings').add({
      createdAt: new Date().toISOString(),
      date,
      people,
      lang,
      userAgent: String(event.headers['user-agent'] || '').slice(0, 300)
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true })
    };
  } catch (err) {
    console.error('book error', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'server' }) };
  }
};
