const { db } = require('./_firebase');
const { sendBookingEmails } = require('./_email');

const SUPPORTED = ['it', 'en', 'es', 'de', 'fr'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    const b = JSON.parse(event.body || '{}');
    const date = String(b.date || '').trim().slice(0, 20);
    const people = parseInt(b.people, 10);
    const lang = SUPPORTED.includes(b.lang) ? b.lang : 'en';
    const name = String(b.name || '').trim().slice(0, 80);
    const email = String(b.email || '').trim().slice(0, 120);
    const phone = String(b.phone || '').trim().slice(0, 30);

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
    if (name.length < 2) {
      return { statusCode: 400, body: JSON.stringify({ error: 'name' }) };
    }
    if (!EMAIL_RE.test(email)) {
      return { statusCode: 400, body: JSON.stringify({ error: 'email' }) };
    }

    const booking = {
      createdAt: new Date().toISOString(),
      date,
      people,
      lang,
      name,
      email,
      phone,
      userAgent: String(event.headers['user-agent'] || '').slice(0, 300)
    };

    await db.collection('bookings').add(booking);

    // L'email non deve mai far fallire una prenotazione già salvata.
    const mail = await sendBookingEmails(booking);
    if (!mail.notify) console.error('booking saved but notify email not sent', { date, email });

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
