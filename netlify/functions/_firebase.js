// Inizializza Firebase Admin SDK (una sola volta per container).
// Le credenziali arrivano da FIREBASE_SERVICE_ACCOUNT (stringa JSON) impostata
// nelle env vars di Netlify.

const admin = require('firebase-admin');

if (!admin.apps.length) {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!raw) {
    throw new Error('Missing env var FIREBASE_SERVICE_ACCOUNT (service account JSON)');
  }
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(raw))
  });
}

const db = admin.firestore();

module.exports = { admin, db };
