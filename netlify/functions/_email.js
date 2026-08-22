// Invio email transazionali via Resend (HTTP API, nessuna dipendenza npm).
//
// Comportamento attuale: ad ogni prenotazione parte SOLO la notifica interna.
// La conferma automatica al cliente è disattivata — la manda a mano chi gestisce
// le prenotazioni, rispondendo alla notifica.
//
// Env vars:
//   RESEND_API_KEY            — API key di resend.com (senza, non si invia nulla)
//   BOOKING_TO                — destinatario delle notifiche (default: matas300@gmail.com)
//   BOOKING_FROM              — mittente (default: onboarding@resend.dev)
//   BOOKING_CONFIRM_CUSTOMER  — 'true' per riattivare la conferma automatica al cliente
//
// Perché è disattivata: con il mittente di default onboarding@resend.dev, Resend
// consente l'invio solo verso l'indirizzo del proprietario dell'account. Per
// scrivere ai clienti serve un dominio verificato su resend.com; una volta fatto,
// basta impostare BOOKING_FROM (es. "Bolo Crawl <prenotazioni@tuodominio.it>")
// e BOOKING_CONFIRM_CUSTOMER=true — il template multilingua è già pronto qui sotto.

const https = require('https');

const API_URL = 'https://api.resend.com/emails';
const DEFAULT_TO = 'matas300@gmail.com';
const DEFAULT_FROM = 'Bolo Crawl <onboarding@resend.dev>';
const PRICE_PER_PERSON = 25;
const WHATSAPP_DISPLAY = '+39 345 643 3446';
const WHATSAPP_LINK = 'https://wa.me/393456433446';

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function formatDate(date, lang) {
  try {
    return new Intl.DateTimeFormat(lang, {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    }).format(new Date(date + 'T00:00:00'));
  } catch (e) {
    return date;
  }
}

// --- Testi della conferma al cliente, per lingua -------------------------

const TEXTS = {
  it: {
    subject: 'Prenotazione confermata — Pub Crawl Bologna',
    hi: name => `Ciao ${name},`,
    intro: 'la tua prenotazione al Pub Crawl Bologna è registrata. Ecco il riepilogo:',
    date: 'Data', people: 'Persone', meet: 'Ritrovo', total: 'Totale',
    meetValue: 'Piazza 8 Agosto, Bologna — ore 21:00',
    payTitle: 'Come si paga',
    payBody: 'Non serve nessun pagamento online: paghi di persona al ritrovo, in contanti, con Revolut o PayPal.',
    tips: 'Porta un documento di identità (il pub crawl è riservato ai maggiorenni) e presentati qualche minuto prima delle 21:00.',
    change: 'Se hai un imprevisto o devi cambiare data, rispondi a questa email o scrivici su WhatsApp:',
    bye: 'Ci vediamo lì! 🍻'
  },
  en: {
    subject: 'Booking confirmed — Pub Crawl Bologna',
    hi: name => `Hi ${name},`,
    intro: 'your Pub Crawl Bologna booking is registered. Here is the summary:',
    date: 'Date', people: 'People', meet: 'Meeting point', total: 'Total',
    meetValue: 'Piazza 8 Agosto, Bologna — 9:00 PM',
    payTitle: 'How to pay',
    payBody: 'No online payment needed: you pay in person at the meeting point, by cash, Revolut or PayPal.',
    tips: 'Bring a valid ID (the pub crawl is 18+) and get there a few minutes before 9:00 PM.',
    change: 'If something comes up or you need to change the date, reply to this email or message us on WhatsApp:',
    bye: 'See you there! 🍻'
  },
  es: {
    subject: 'Reserva confirmada — Pub Crawl Bolonia',
    hi: name => `Hola ${name}:`,
    intro: 'tu reserva del Pub Crawl Bolonia está registrada. Este es el resumen:',
    date: 'Fecha', people: 'Personas', meet: 'Punto de encuentro', total: 'Total',
    meetValue: 'Piazza 8 Agosto, Bolonia — 21:00',
    payTitle: 'Cómo se paga',
    payBody: 'No hace falta ningún pago online: pagas en persona en el punto de encuentro, en efectivo, con Revolut o PayPal.',
    tips: 'Trae un documento de identidad (el pub crawl es para mayores de 18) y llega unos minutos antes de las 21:00.',
    change: 'Si te surge un imprevisto o necesitas cambiar la fecha, responde a este email o escríbenos por WhatsApp:',
    bye: '¡Nos vemos allí! 🍻'
  },
  de: {
    subject: 'Buchung bestätigt — Pub Crawl Bologna',
    hi: name => `Hallo ${name},`,
    intro: 'deine Buchung für den Pub Crawl Bologna ist registriert. Hier die Übersicht:',
    date: 'Datum', people: 'Personen', meet: 'Treffpunkt', total: 'Gesamt',
    meetValue: 'Piazza 8 Agosto, Bologna — 21:00 Uhr',
    payTitle: 'Bezahlung',
    payBody: 'Keine Online-Zahlung nötig: du zahlst persönlich am Treffpunkt, bar, per Revolut oder PayPal.',
    tips: 'Bring einen Ausweis mit (Mindestalter 18) und sei ein paar Minuten vor 21:00 Uhr da.',
    change: 'Falls etwas dazwischenkommt oder du das Datum ändern musst, antworte auf diese E-Mail oder schreib uns auf WhatsApp:',
    bye: 'Bis bald! 🍻'
  },
  fr: {
    subject: 'Réservation confirmée — Pub Crawl Bologne',
    hi: name => `Salut ${name},`,
    intro: 'ta réservation au Pub Crawl Bologne est enregistrée. Voici le récapitulatif :',
    date: 'Date', people: 'Personnes', meet: 'Rendez-vous', total: 'Total',
    meetValue: 'Piazza 8 Agosto, Bologne — 21h00',
    payTitle: 'Comment payer',
    payBody: 'Aucun paiement en ligne : tu paies sur place au rendez-vous, en espèces, avec Revolut ou PayPal.',
    tips: "Apporte une pièce d'identité (le pub crawl est réservé aux 18 ans et plus) et arrive quelques minutes avant 21h00.",
    change: "En cas d'imprévu ou si tu dois changer de date, réponds à cet email ou écris-nous sur WhatsApp :",
    bye: 'À bientôt ! 🍻'
  }
};

const WRAP = (body) => `<!DOCTYPE html>
<html><body style="margin:0;padding:24px;background:#0d0b14;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;color:#f4f1ea">
  <div style="max-width:560px;margin:0 auto;background:#1e1a2b;border-radius:14px;padding:28px">
    ${body}
    <p style="margin:28px 0 0;padding-top:16px;border-top:1px solid #2f2a3f;color:#a39cb0;font-size:12px">
      Bolo Crawl — Pub Crawl Bologna · Piazza 8 Agosto, Bologna
    </p>
  </div>
</body></html>`;

const row = (label, value) => `
  <tr>
    <td style="padding:6px 0;color:#a39cb0;font-size:14px">${esc(label)}</td>
    <td style="padding:6px 0;text-align:right;font-size:15px;font-weight:600">${esc(value)}</td>
  </tr>`;

function customerEmail(b) {
  const t = TEXTS[b.lang] || TEXTS.en;
  const total = b.people * PRICE_PER_PERSON;
  const html = WRAP(`
    <h1 style="margin:0 0 16px;font-size:22px;color:#ffb84d">🍻 ${esc(t.subject.split('—')[0].trim())}</h1>
    <p style="margin:0 0 8px;font-size:15px">${esc(t.hi(b.name))}</p>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.6">${esc(t.intro)}</p>
    <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
      ${row(t.date, formatDate(b.date, b.lang))}
      ${row(t.people, b.people)}
      ${row(t.meet, t.meetValue)}
      ${row(t.total, '€' + total)}
    </table>
    <div style="background:#15121f;border-left:3px solid #ff6b35;border-radius:8px;padding:14px 16px;margin-bottom:20px">
      <strong style="display:block;margin-bottom:6px;font-size:14px;color:#ffb84d">💸 ${esc(t.payTitle)}</strong>
      <span style="font-size:14px;line-height:1.6;color:#d9d4e0">${esc(t.payBody)}</span>
    </div>
    <p style="margin:0 0 12px;font-size:14px;line-height:1.6;color:#d9d4e0">${esc(t.tips)}</p>
    <p style="margin:0 0 20px;font-size:14px;line-height:1.6;color:#d9d4e0">${esc(t.change)}
      <a href="${WHATSAPP_LINK}" style="color:#25d366;font-weight:600;text-decoration:none">${esc(WHATSAPP_DISPLAY)}</a>
    </p>
    <p style="margin:0;font-size:15px;font-weight:600">${esc(t.bye)}</p>`);
  return { subject: t.subject, html };
}

function notifyEmail(b) {
  const total = b.people * PRICE_PER_PERSON;
  const html = WRAP(`
    <h1 style="margin:0 0 16px;font-size:22px;color:#ffb84d">🍻 Nuova prenotazione</h1>
    <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
      ${row('Nome', b.name)}
      ${row('Email', b.email)}
      ${row('Telefono', b.phone || '—')}
      ${row('Data', formatDate(b.date, 'it') + ' (' + b.date + ')')}
      ${row('Persone', b.people)}
      ${row('Incasso previsto', '€' + total)}
      ${row('Lingua sito', b.lang)}
    </table>
    <div style="background:#15121f;border-left:3px solid #ffb84d;border-radius:8px;padding:14px 16px">
      <strong style="display:block;margin-bottom:6px;font-size:14px;color:#ffb84d">👉 Conferma tu al cliente</strong>
      <span style="font-size:14px;line-height:1.6;color:#d9d4e0">Rispondi a questa email: la risposta arriva direttamente a ${esc(b.email)}.${b.phone ? ` Oppure scrivigli su <a href="https://wa.me/${String(b.phone).replace(/[^0-9]/g, '')}" style="color:#25d366;font-weight:600;text-decoration:none">WhatsApp (${esc(b.phone)})</a>.` : ''} Ricordagli il ritrovo alle 21:00 in Piazza 8 Agosto e che si paga sul posto.</span>
    </div>`);
  return { subject: `Nuova prenotazione — ${b.people} pax il ${b.date} (${b.name})`, html };
}

// --- Invio ---------------------------------------------------------------

// https nativo invece di fetch: funziona anche su Node < 18 (server locale).
function sendEmail({ to, subject, html, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Promise.reject(new Error('Missing env var RESEND_API_KEY'));

  const payload = {
    from: process.env.BOOKING_FROM || DEFAULT_FROM,
    to: [to],
    subject,
    html
  };
  if (replyTo) payload.reply_to = replyTo;

  const body = Buffer.from(JSON.stringify(payload), 'utf8');
  const url = new URL(API_URL);

  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: url.hostname,
      path: url.pathname,
      method: 'POST',
      timeout: 10000,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Content-Length': body.length
      }
    }, (res) => {
      let raw = '';
      res.setEncoding('utf8');
      res.on('data', chunk => { raw += chunk; });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try { resolve(JSON.parse(raw)); } catch (e) { resolve({ raw }); }
        } else {
          reject(new Error(`Resend ${res.statusCode}: ${raw.slice(0, 300)}`));
        }
      });
    });
    req.on('timeout', () => req.destroy(new Error('Resend timeout')));
    req.on('error', reject);
    req.end(body);
  });
}

// Invia la notifica interna (e, solo se riattivata, la conferma al cliente).
// Non lancia mai: una prenotazione salvata non deve fallire per colpa dell'email.
async function sendBookingEmails(booking) {
  const confirmCustomer = process.env.BOOKING_CONFIRM_CUSTOMER === 'true';
  const result = { notify: false, customer: false, customerSkipped: !confirmCustomer };

  const notify = notifyEmail(booking);
  try {
    await sendEmail({
      to: process.env.BOOKING_TO || DEFAULT_TO,
      subject: notify.subject,
      html: notify.html,
      replyTo: booking.email
    });
    result.notify = true;
  } catch (err) {
    console.error('email notify failed:', err.message);
  }

  if (!confirmCustomer) return result;

  const customer = customerEmail(booking);
  try {
    await sendEmail({
      to: booking.email,
      subject: customer.subject,
      html: customer.html,
      replyTo: process.env.BOOKING_TO || DEFAULT_TO
    });
    result.customer = true;
  } catch (err) {
    console.error('email customer failed:', err.message);
  }

  return result;
}

module.exports = { sendBookingEmails, sendEmail, customerEmail, notifyEmail, formatDate };
