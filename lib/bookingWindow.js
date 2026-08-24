// Finestra di apertura delle prenotazioni e calcolo della prossima serata utile.
// Unica fonte di verità per server.js, netlify/functions/book.js e render.js.
// Il corrispettivo lato browser sta in public/js/app.js (non può usare require).

// Le prenotazioni aprono a settembre 2026.
const BOOKING_OPENS = '2026-09-01';

// Il pub crawl si svolge giovedì (4), venerdì (5) e sabato (6).
const EVENT_DAYS = [4, 5, 6];

// Orari della serata, ora locale di Bologna.
const EVENT_START_TIME = '21:00:00';
const EVENT_END_TIME = '02:00:00';

function ymd(date) {
  return date.toISOString().slice(0, 10);
}

function todayYmd(now = new Date()) {
  return ymd(new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())));
}

// true quando la data odierna ha superato l'apertura delle prenotazioni:
// i testi "da settembre" vanno nascosti da lì in poi.
function bookingsOpen(now = new Date()) {
  return todayYmd(now) >= BOOKING_OPENS;
}

// Prima serata valida: un gio/ven/sab, mai prima dell'apertura delle prenotazioni.
// Restituisce 'YYYY-MM-DD'.
function firstEventDate(now = new Date()) {
  const today = todayYmd(now);
  const d = new Date((today > BOOKING_OPENS ? today : BOOKING_OPENS) + 'T00:00:00Z');
  for (let i = 0; i < 7 && !EVENT_DAYS.includes(d.getUTCDay()); i++) {
    d.setUTCDate(d.getUTCDate() + 1);
  }
  return ymd(d);
}

// Il giorno dopo una data 'YYYY-MM-DD' (la serata finisce alle 02:00 del giorno seguente).
function nextDay(ymdStr) {
  const d = new Date(ymdStr + 'T00:00:00Z');
  d.setUTCDate(d.getUTCDate() + 1);
  return ymd(d);
}

// Ultima domenica di un mese (month 0-based), in UTC.
function lastSunday(year, month) {
  const d = new Date(Date.UTC(year, month + 1, 0));
  d.setUTCDate(d.getUTCDate() - d.getUTCDay());
  return d;
}

// Offset di Europe/Rome per una data: +02:00 in ora legale, +01:00 altrimenti.
// L'ora legale va dall'ultima domenica di marzo all'ultima domenica di ottobre,
// entrambe alle 01:00 UTC.
function romeOffset(ymdStr) {
  const t = Date.parse(ymdStr + 'T12:00:00Z');
  const year = new Date(t).getUTCFullYear();
  const dstStart = Date.UTC(year, 2, lastSunday(year, 2).getUTCDate(), 1);
  const dstEnd = Date.UTC(year, 9, lastSunday(year, 9).getUTCDate(), 1);
  return t >= dstStart && t < dstEnd ? '+02:00' : '+01:00';
}

module.exports = {
  BOOKING_OPENS,
  EVENT_DAYS,
  EVENT_START_TIME,
  EVENT_END_TIME,
  bookingsOpen,
  firstEventDate,
  nextDay,
  romeOffset,
  todayYmd
};
