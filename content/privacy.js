// Informativa privacy, una versione per lingua.
// Descrive esattamente ciò che il sito fa: modulo di prenotazione (nome, email,
// telefono), salvataggio su Firestore, email di notifica via Resend, nessun
// cookie di profilazione e nessuno strumento di analisi.
// Renderizzata da renderPrivacy() in render.js su /<lang>/privacy/.

const CONTACT_PHONE = '+39 345 643 3446';

module.exports = {
  it: {
    title: 'Privacy Policy — Bolo Crawl | Pub Crawl Bologna',
    description: 'Come Bolo Crawl tratta i dati di chi prenota il Pub Crawl Bologna: quali raccogliamo, dove sono conservati e come cancellarli.',
    h1: 'Privacy Policy',
    updated: 'Ultimo aggiornamento: 24 agosto 2026',
    intro: `Questa pagina spiega come trattiamo i dati di chi prenota il Pub Crawl Bologna. È scritta in modo semplice, senza formule inutili: se qualcosa non ti è chiaro, scrivici su WhatsApp al ${CONTACT_PHONE}.`,
    sections: [
      {
        h2: 'Chi tratta i tuoi dati',
        p: `I dati raccolti da questo sito sono trattati da Bolo Crawl, che organizza il Pub Crawl Bologna. Per qualsiasi questione relativa ai tuoi dati puoi contattarci su WhatsApp al ${CONTACT_PHONE}.`
      },
      {
        h2: 'Quali dati raccogliamo',
        p: 'Soltanto quelli che inserisci nel modulo di prenotazione: nome, indirizzo email, numero di telefono (facoltativo), data scelta e numero di persone. Insieme alla prenotazione registriamo la lingua del sito e il browser che hai usato, per motivi tecnici e statistici. Non raccogliamo dati di pagamento, perché si paga di persona al ritrovo: nessun numero di carta passa da questo sito.'
      },
      {
        h2: 'Perché li usiamo',
        p: 'Esclusivamente per gestire la tua prenotazione: confermarti il posto, darti il punto esatto del ritrovo e contattarti in caso di imprevisti, come un cambio di programma o il maltempo. Il trattamento è necessario per fornirti il servizio che hai richiesto. Non mandiamo newsletter e non cediamo i tuoi dati a nessuno per finalità pubblicitarie.'
      },
      {
        h2: 'Dove sono conservati',
        p: 'Le prenotazioni sono salvate su Google Firebase (Firestore) e le email di servizio vengono inviate tramite Resend. Entrambi i fornitori trattano i dati per nostro conto, in qualità di responsabili del trattamento, e possono conservarli su server situati anche fuori dall\'Unione Europea nel rispetto delle garanzie previste dalla normativa.'
      },
      {
        h2: 'Per quanto tempo',
        p: 'Conserviamo le prenotazioni per il tempo necessario a gestire il servizio e ad assolvere gli obblighi contabili e fiscali, poi le cancelliamo. Puoi chiederne la cancellazione anche prima, in qualsiasi momento.'
      },
      {
        h2: 'I tuoi diritti',
        p: `Puoi chiedere di accedere ai tuoi dati, correggerli, cancellarli, limitarne l'uso od opporti al trattamento: scrivici su WhatsApp al ${CONTACT_PHONE} e ti rispondiamo entro 30 giorni. Se ritieni che i tuoi dati non siano trattati correttamente, puoi rivolgerti al Garante per la protezione dei dati personali.`
      },
      {
        h2: 'Cookie e strumenti di analisi',
        p: 'Questo sito non usa cookie di profilazione, non ha strumenti di statistica e non traccia i visitatori a fini pubblicitari. Il calendario delle prenotazioni carica una piccola libreria (Pikaday) dalla rete di distribuzione jsDelivr: in quel momento il tuo indirizzo IP è tecnicamente visibile a quel fornitore, come accade per qualunque risorsa caricata da internet.'
      }
    ]
  },

  en: {
    title: 'Privacy Policy — Bolo Crawl | Pub Crawl Bologna',
    description: 'How Bolo Crawl handles the data of people booking the Pub Crawl Bologna: what we collect, why, where it is stored and how to ask for its deletion.',
    h1: 'Privacy Policy',
    updated: 'Last updated: 24 August 2026',
    intro: `This page explains how we handle the data of people who book the Pub Crawl Bologna. It is written in plain language: if anything is unclear, message us on WhatsApp at ${CONTACT_PHONE}.`,
    sections: [
      {
        h2: 'Who handles your data',
        p: `The data collected through this website is handled by Bolo Crawl, which runs the Pub Crawl Bologna. For anything concerning your data you can message us on WhatsApp at ${CONTACT_PHONE}.`
      },
      {
        h2: 'What we collect',
        p: 'Only what you type into the booking form: name, email address, phone number (optional), the date you pick and the number of people. Along with the booking we also store the language of the site and the browser you used, for technical and statistical reasons. We never collect payment data, because you pay in person at the meeting point: no card number goes through this website.'
      },
      {
        h2: 'Why we use it',
        p: 'Purely to handle your booking: confirming your spot, giving you the exact meeting point and reaching you if something changes, such as a schedule change or bad weather. Processing is necessary to provide the service you asked for. We do not send newsletters and we never sell or share your data for advertising.'
      },
      {
        h2: 'Where it is stored',
        p: 'Bookings are stored on Google Firebase (Firestore) and service emails are sent through Resend. Both providers process the data on our behalf, as data processors, and may store it on servers located outside the European Union under the safeguards required by law.'
      },
      {
        h2: 'How long we keep it',
        p: 'We keep bookings for as long as we need them to run the service and to meet accounting and tax obligations, then we delete them. You can ask us to delete them earlier, at any time.'
      },
      {
        h2: 'Your rights',
        p: `You can ask to access, correct or delete your data, restrict its use or object to the processing: message us on WhatsApp at ${CONTACT_PHONE} and we will reply within 30 days. If you believe your data is not handled properly, you can lodge a complaint with your national data protection authority.`
      },
      {
        h2: 'Cookies and analytics',
        p: 'This website uses no profiling cookies, no analytics tools and no advertising trackers. The booking calendar loads a small library (Pikaday) from the jsDelivr content delivery network: at that moment your IP address is technically visible to that provider, as happens with any resource loaded from the internet.'
      }
    ]
  },

  es: {
    title: 'Política de Privacidad — Bolo Crawl | Pub Crawl Bolonia',
    description: 'Cómo trata Bolo Crawl los datos de quien reserva el Pub Crawl Bolonia: qué datos recogemos, por qué, dónde se guardan y cómo pedir su eliminación.',
    h1: 'Política de Privacidad',
    updated: 'Última actualización: 24 de agosto de 2026',
    intro: `Esta página explica cómo tratamos los datos de quien reserva el Pub Crawl Bolonia. Está escrita en lenguaje sencillo: si algo no te queda claro, escríbenos por WhatsApp al ${CONTACT_PHONE}.`,
    sections: [
      {
        h2: 'Quién trata tus datos',
        p: `Los datos recogidos en esta web son tratados por Bolo Crawl, que organiza el Pub Crawl Bolonia. Para cualquier cuestión relativa a tus datos puedes contactarnos por WhatsApp en el ${CONTACT_PHONE}.`
      },
      {
        h2: 'Qué datos recogemos',
        p: 'Solo los que escribes en el formulario de reserva: nombre, dirección de email, número de teléfono (opcional), la fecha elegida y el número de personas. Junto con la reserva guardamos también el idioma de la web y el navegador que has usado, por motivos técnicos y estadísticos. No recogemos datos de pago, porque se paga en persona en el punto de encuentro: ningún número de tarjeta pasa por esta web.'
      },
      {
        h2: 'Para qué los usamos',
        p: 'Únicamente para gestionar tu reserva: confirmarte la plaza, darte el punto exacto de encuentro y contactarte si surge algún imprevisto, como un cambio de programa o mal tiempo. El tratamiento es necesario para prestarte el servicio que has solicitado. No enviamos newsletters ni cedemos tus datos a nadie con fines publicitarios.'
      },
      {
        h2: 'Dónde se guardan',
        p: 'Las reservas se guardan en Google Firebase (Firestore) y los emails de servicio se envían mediante Resend. Ambos proveedores tratan los datos por cuenta nuestra, como encargados del tratamiento, y pueden conservarlos en servidores situados también fuera de la Unión Europea con las garantías previstas por la normativa.'
      },
      {
        h2: 'Cuánto tiempo',
        p: 'Conservamos las reservas el tiempo necesario para gestionar el servicio y cumplir las obligaciones contables y fiscales, y después las eliminamos. Puedes pedir su eliminación antes, en cualquier momento.'
      },
      {
        h2: 'Tus derechos',
        p: `Puedes pedir acceder a tus datos, corregirlos, eliminarlos, limitar su uso u oponerte al tratamiento: escríbenos por WhatsApp al ${CONTACT_PHONE} y te respondemos en un plazo de 30 días. Si crees que tus datos no se tratan correctamente, puedes acudir a la autoridad de protección de datos de tu país.`
      },
      {
        h2: 'Cookies y analítica',
        p: 'Esta web no usa cookies de perfilado, no tiene herramientas de estadística y no rastrea a los visitantes con fines publicitarios. El calendario de reservas carga una pequeña librería (Pikaday) desde la red de distribución jsDelivr: en ese momento tu dirección IP es técnicamente visible para ese proveedor, como ocurre con cualquier recurso cargado desde internet.'
      }
    ]
  },

  de: {
    title: 'Datenschutzerklärung — Bolo Crawl | Pub Crawl Bologna',
    description: 'Wie Bolo Crawl die Daten der Pub-Crawl-Bologna-Buchungen behandelt: welche wir erheben, wo sie liegen und wie du sie löschen lässt.',
    h1: 'Datenschutzerklärung',
    updated: 'Letzte Aktualisierung: 24. August 2026',
    intro: `Diese Seite erklärt, wie wir mit den Daten derjenigen umgehen, die den Pub Crawl Bologna buchen. Sie ist bewusst einfach geschrieben: wenn etwas unklar ist, schreib uns per WhatsApp unter ${CONTACT_PHONE}.`,
    sections: [
      {
        h2: 'Wer deine Daten verarbeitet',
        p: `Die über diese Website erhobenen Daten werden von Bolo Crawl verarbeitet, dem Veranstalter des Pub Crawl Bologna. Bei allen Fragen zu deinen Daten kannst du uns über WhatsApp unter ${CONTACT_PHONE} kontaktieren.`
      },
      {
        h2: 'Welche Daten wir erheben',
        p: 'Nur die, die du im Buchungsformular einträgst: Name, E-Mail-Adresse, Telefonnummer (optional), das gewählte Datum und die Personenzahl. Zusammen mit der Buchung speichern wir aus technischen und statistischen Gründen auch die Sprache der Website und den verwendeten Browser. Zahlungsdaten erheben wir nicht, denn bezahlt wird persönlich am Treffpunkt: keine Kartennummer läuft über diese Website.'
      },
      {
        h2: 'Wozu wir sie nutzen',
        p: 'Ausschließlich zur Abwicklung deiner Buchung: um dir deinen Platz zu bestätigen, dir den genauen Treffpunkt mitzuteilen und dich zu erreichen, falls sich etwas ändert, etwa bei einer Programmänderung oder schlechtem Wetter. Die Verarbeitung ist erforderlich, um dir die gewünschte Leistung zu erbringen. Wir versenden keine Newsletter und geben deine Daten nicht zu Werbezwecken weiter.'
      },
      {
        h2: 'Wo sie gespeichert werden',
        p: 'Buchungen werden auf Google Firebase (Firestore) gespeichert, Service-E-Mails über Resend versendet. Beide Anbieter verarbeiten die Daten in unserem Auftrag als Auftragsverarbeiter und können sie auch auf Servern außerhalb der Europäischen Union speichern, unter den gesetzlich vorgesehenen Garantien.'
      },
      {
        h2: 'Wie lange',
        p: 'Wir bewahren Buchungen so lange auf, wie es für die Durchführung des Service und für buchhalterische und steuerliche Pflichten nötig ist, danach löschen wir sie. Du kannst die Löschung jederzeit auch früher verlangen.'
      },
      {
        h2: 'Deine Rechte',
        p: `Du kannst Auskunft über deine Daten verlangen, sie berichtigen oder löschen lassen, ihre Nutzung einschränken oder der Verarbeitung widersprechen: schreib uns per WhatsApp unter ${CONTACT_PHONE}, wir antworten innerhalb von 30 Tagen. Wenn du der Meinung bist, dass deine Daten nicht korrekt verarbeitet werden, kannst du dich an die zuständige Datenschutzbehörde wenden.`
      },
      {
        h2: 'Cookies und Analyse',
        p: 'Diese Website verwendet keine Profiling-Cookies, keine Statistik-Tools und kein Werbe-Tracking. Der Buchungskalender lädt eine kleine Bibliothek (Pikaday) über das Content-Delivery-Netzwerk jsDelivr: dabei ist deine IP-Adresse technisch für diesen Anbieter sichtbar, wie bei jeder aus dem Internet geladenen Ressource.'
      }
    ]
  },

  fr: {
    title: 'Confidentialité — Bolo Crawl | Pub Crawl Bologne',
    description: 'Comment Bolo Crawl traite les données de réservation du Pub Crawl Bologne : quelles données, où elles sont conservées et comment les supprimer.',
    h1: 'Politique de Confidentialité',
    updated: 'Dernière mise à jour : 24 août 2026',
    intro: `Cette page explique comment nous traitons les données des personnes qui réservent le Pub Crawl Bologne. Elle est écrite simplement : si quelque chose n'est pas clair, écris-nous sur WhatsApp au ${CONTACT_PHONE}.`,
    sections: [
      {
        h2: 'Qui traite tes données',
        p: `Les données collectées sur ce site sont traitées par Bolo Crawl, qui organise le Pub Crawl Bologne. Pour toute question concernant tes données, tu peux nous contacter sur WhatsApp au ${CONTACT_PHONE}.`
      },
      {
        h2: 'Quelles données nous collectons',
        p: "Uniquement celles que tu saisis dans le formulaire de réservation : nom, adresse email, numéro de téléphone (facultatif), la date choisie et le nombre de personnes. Avec la réservation, nous enregistrons aussi la langue du site et le navigateur utilisé, pour des raisons techniques et statistiques. Nous ne collectons aucune donnée de paiement, puisque le paiement se fait sur place au rendez-vous : aucun numéro de carte ne transite par ce site."
      },
      {
        h2: 'Pourquoi nous les utilisons',
        p: "Exclusivement pour gérer ta réservation : confirmer ta place, te donner le point de rendez-vous exact et te joindre en cas d'imprévu, comme un changement de programme ou une météo défavorable. Ce traitement est nécessaire pour te fournir le service demandé. Nous n'envoyons pas de newsletters et ne cédons jamais tes données à des fins publicitaires."
      },
      {
        h2: 'Où elles sont conservées',
        p: "Les réservations sont enregistrées sur Google Firebase (Firestore) et les emails de service sont envoyés via Resend. Ces deux prestataires traitent les données pour notre compte, en tant que sous-traitants, et peuvent les conserver sur des serveurs situés hors de l'Union européenne, avec les garanties prévues par la réglementation."
      },
      {
        h2: 'Combien de temps',
        p: 'Nous conservons les réservations le temps nécessaire à la gestion du service et au respect des obligations comptables et fiscales, puis nous les supprimons. Tu peux en demander la suppression à tout moment.'
      },
      {
        h2: 'Tes droits',
        p: `Tu peux demander à accéder à tes données, à les corriger, à les supprimer, à en limiter l'usage ou t'opposer au traitement : écris-nous sur WhatsApp au ${CONTACT_PHONE}, nous répondons sous 30 jours. Si tu estimes que tes données ne sont pas traitées correctement, tu peux saisir l'autorité de protection des données de ton pays.`
      },
      {
        h2: 'Cookies et mesure d\'audience',
        p: "Ce site n'utilise aucun cookie de profilage, aucun outil de statistiques et aucun traceur publicitaire. Le calendrier de réservation charge une petite bibliothèque (Pikaday) depuis le réseau de distribution jsDelivr : à ce moment-là, ton adresse IP est techniquement visible par ce prestataire, comme pour toute ressource chargée depuis internet."
      }
    ]
  }
};
