// Genera l'HTML dell'admin dashboard a partire da un array di bookings.
// Usato sia dal server Express locale che dalla Netlify Function.

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function renderAdmin(bookings) {
  const total = bookings.length;
  const totalPeople = bookings.reduce((s, b) => s + (b.people || 0), 0);
  const revenue = totalPeople * 25;

  const byLang = {};
  const byDate = {};
  const byWeekday = { Lun: 0, Mar: 0, Mer: 0, Gio: 0, Ven: 0, Sab: 0, Dom: 0 };
  const wdMap = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];
  for (const b of bookings) {
    byLang[b.lang] = (byLang[b.lang] || 0) + 1;
    byDate[b.date] = (byDate[b.date] || 0) + (b.people || 0);
    const d = new Date(b.date + 'T00:00:00');
    if (!isNaN(d)) byWeekday[wdMap[d.getDay()]] += (b.people || 0);
  }

  const topDates = Object.entries(byDate).sort((a, b) => b[1] - a[1]).slice(0, 10);

  const rows = bookings.map(b => `
    <tr>
      <td>${esc(new Date(b.createdAt).toLocaleString('it-IT'))}</td>
      <td>${esc(b.date)}</td>
      <td>${b.people}</td>
      <td>${esc(b.lang)}</td>
    </tr>`).join('');

  const stat = (label, val) =>
    `<div class="stat"><div class="stat-v">${val}</div><div class="stat-l">${label}</div></div>`;
  const kvRows = o => Object.entries(o).sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `<tr><td>${esc(k) || '—'}</td><td>${v}</td></tr>`).join('');

  return `<!DOCTYPE html>
<html lang="it"><head><meta charset="utf-8"/><title>Admin — Bolo Crawl</title>
<style>
body{font-family:system-ui,sans-serif;margin:0;background:#0f0f15;color:#eee}
.wrap{max-width:1200px;margin:0 auto;padding:24px}
h1{margin:0 0 8px}h2{margin:32px 0 12px;font-size:18px;color:#ffb84d}
.bar{display:flex;gap:12px;align-items:center;margin-bottom:16px}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin:16px 0}
.stat{background:#1c1c26;padding:16px;border-radius:10px}
.stat-v{font-size:28px;font-weight:700;color:#ffb84d}
.stat-l{font-size:13px;color:#aaa;margin-top:4px}
table{width:100%;border-collapse:collapse;background:#1c1c26;border-radius:10px;overflow:hidden}
th,td{padding:10px 12px;text-align:left;border-bottom:1px solid #2a2a36;font-size:14px}
th{background:#24242f;color:#ffb84d;font-weight:600}
tr:last-child td{border-bottom:none}
a{color:#ffb84d}.grid2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
@media(max-width:720px){.grid2{grid-template-columns:1fr}}
.btn{background:#ffb84d;color:#111;padding:8px 14px;border-radius:6px;text-decoration:none;font-weight:600}
</style></head>
<body><div class="wrap">
<div class="bar"><h1>🍻 Admin — Bolo Crawl</h1>
<a class="btn" href="/api/export.csv">Export CSV</a></div>
<div class="stats">
  ${stat('Manifestazioni interesse', total)}
  ${stat('Persone totali', totalPeople)}
  ${stat('Revenue potenziale', '€' + revenue)}
  ${stat('Media pax/richiesta', total ? (totalPeople / total).toFixed(1) : '0')}
</div>
<div class="grid2">
  <div><h2>Lingua dei visitatori</h2><table><tr><th>Lingua</th><th>#</th></tr>${kvRows(byLang)}</table></div>
  <div><h2>Interesse per giorno della settimana</h2><table><tr><th>Giorno</th><th>Persone</th></tr>${kvRows(byWeekday)}</table></div>
</div>
<h2>Top 10 date richieste (per numero persone)</h2>
<table><tr><th>Data</th><th>Persone</th></tr>
${topDates.map(([d, n]) => `<tr><td>${esc(d)}</td><td>${n}</td></tr>`).join('') || '<tr><td colspan=2>—</td></tr>'}
</table>
<h2>Tutte le manifestazioni d'interesse</h2>
<table>
<thead><tr><th>Ricevuto</th><th>Data richiesta</th><th>Pax</th><th>Lang</th></tr></thead>
<tbody>${rows || '<tr><td colspan=4>Nessun interesse ancora.</td></tr>'}</tbody>
</table>
</div></body></html>`;
}

function toCsv(bookings) {
  const headers = ['createdAt', 'date', 'people', 'lang'];
  return [
    headers.join(','),
    ...bookings.map(b =>
      headers.map(h => `"${String(b[h] ?? '').replace(/"/g, '""')}"`).join(',')
    )
  ].join('\n');
}

module.exports = { renderAdmin, toCsv, esc };
