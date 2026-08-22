// Traduzioni per ogni lingua supportata.
// Le chiavi SEO (title, description, ogTitle, ogDescription) sono ottimizzate
// per le query reali che la gente cerca su Google in quella lingua.

const translations = {
  it: {
    lang: 'it',
    locale: 'it_IT',
    title: 'Pub Crawl Bologna | Tour dei Pub con Shot, Giochi Alcolici e Discoteca — 25€',
    description: 'Il miglior Pub Crawl di Bologna: ogni giovedì, venerdì e sabato giro dei pub in Via del Pratello con shot di benvenuto, beer pong, sconti sui drink e ingresso in discoteca. Solo 25€.',
    ogTitle: 'Pub Crawl Bologna — Tour dei Pub e Discoteca | 25€ a persona',
    ogDescription: 'Unisciti al pub crawl più divertente di Bologna. 4 pub, shot di benvenuto, giochi alcolici e discoteca inclusa. Prenota ora, paghi sul posto.',
    keywords: 'pub crawl bologna, pub crawl bologna prezzi, tour dei pub bologna, bologna nightlife, serate bologna, locali bologna, via del pratello, beer pong bologna, discoteca bologna, eventi bologna',
    nav: {
      howItWorks: 'Come funziona',
      includes: 'Cosa include',
      faq: 'FAQ',
      book: 'Prenota'
    },
    hero: {
      badge: 'Da settembre · Gio · Ven · Sab',
      h1: 'Pub Crawl Bologna',
      subtitle: 'Il tour dei pub più divertente della città. 4 locali, shot di benvenuto, giochi alcolici, sconti sui drink e ingresso in discoteca incluso.',
      cta: 'Prenota ora',
      meta: 'Ritrovo ore 21:00 — Piazza 8 Agosto, Bologna',
      payNote: 'Prenota ora, paghi dopo: contanti, Revolut o PayPal direttamente al ritrovo'
    },
    howItWorks: {
      title: 'Come funziona il Pub Crawl',
      subtitle: 'Una notte, 4 locali, tantissime persone da tutto il mondo.',
      steps: [
        { n: '1', t: 'Ritrovo & Welcome Shot', d: 'Ci incontriamo alle 21:00 in Piazza 8 Agosto. Shot di benvenuto offerto per rompere il ghiaccio.' },
        { n: '2', t: '4 Pub, Giochi Alcolici', d: 'Tappe in 4 tra i migliori pub di Bologna con beer pong, giochi di carte alcolici e drink scontati.' },
        { n: '3', t: 'Ingresso in Discoteca', d: 'Finiamo la serata con ingresso gratuito in una delle discoteche più in voga della città.' },
        { n: '4', t: 'Nuovi Amici', d: 'Incontra viaggiatori, Erasmus e locali. È il modo migliore per vivere Bologna di notte.' }
      ]
    },
    includes: {
      title: 'Cosa è incluso nei 25€',
      items: [
        'Shot di benvenuto gratuito',
        'Tour guidato in 4 pub selezionati',
        'Giochi alcolici',
        'Sconti esclusivi sui drink in ogni locale',
        'Ingresso in discoteca incluso (salta la fila)',
        'Guide internazionali che parlano inglese, italiano e spagnolo'
      ]
    },
    faq: {
      title: 'Domande frequenti',
      items: [
        { q: 'Quanto costa il pub crawl?', a: 'Solo 25€ a persona, tutto incluso: welcome shot, 4 pub, giochi, sconti sui drink e ingresso in discoteca.' },
        { q: 'Quando si svolge?', a: 'Ogni giovedì, venerdì e sabato. Ritrovo alle 21:00 in Piazza 8 Agosto. La serata finisce in discoteca verso le 2 di notte.' },
        { q: 'Dove ci si incontra?', a: 'In Piazza 8 Agosto, Bologna. Il punto esatto te lo mandiamo via email o WhatsApp dopo la prenotazione.' },
        { q: 'Devo essere maggiorenne?', a: 'Sì, per partecipare al pub crawl bisogna avere almeno 18 anni. Porta un documento di identità.' },
        { q: 'Posso venire da solo?', a: 'Assolutamente sì! La maggior parte dei partecipanti viene da sola. È il modo perfetto per conoscere gente nuova.' },
        { q: 'Come si prenota?', a: 'Scegli data e numero di persone nel modulo qui sotto: ti basta un click. Nessun pagamento online — prenoti ora e paghi dopo, direttamente al ritrovo.' },
        { q: 'Come si paga?', a: 'Si paga solo di persona, al ritrovo prima di partire: contanti, Revolut o PayPal. Nessun pagamento online e nessun dato della carta da inserire sul sito.' }
      ]
    },
    book: {
      title: 'Prenota il tuo Pub Crawl',
      subtitle: 'Scegli la data e il numero di persone, ci pensiamo noi.',
      date: 'Data del pub crawl',
      dateHelp: 'Prenotazioni da settembre — solo giovedì, venerdì e sabato',
      dateInvalid: 'Puoi scegliere solo giovedì, venerdì o sabato.',
      dateTooEarly: 'Le prenotazioni partono da settembre: scegli una data da settembre in poi.',
      people: 'Numero di persone',
      name: 'Nome e cognome',
      email: 'Email',
      phone: 'Telefono / WhatsApp',
      optional: '(facoltativo)',
      emailHelp: 'Ti scriviamo qui per confermarti il posto e il punto esatto del ritrovo',
      phoneHelp: 'Lo usiamo solo per avvisarti in caso di imprevisti',
      nameInvalid: 'Scrivi il tuo nome.',
      emailInvalid: 'Controlla l\'indirizzo email.',
      privacy: 'Usiamo nome, email e telefono solo per gestire la tua prenotazione.',
      submit: 'Prenota ora',
      sending: 'Invio in corso...',
      error: 'Ops, qualcosa è andato storto. Riprova.',
      payNote: 'Nessun pagamento online: prenoti ora e paghi di persona al ritrovo, in contanti, Revolut o PayPal.'
    },
    modal: {
      title: '🍻 Prenotazione ricevuta!',
      body: 'Ti ricontattiamo a breve via email o WhatsApp per confermarti il posto e darti il punto esatto del ritrovo. Ci vediamo in Piazza 8 Agosto alle 21:00 — paghi lì: contanti, Revolut o PayPal.',
      close: 'Chiudi'
    },
    whatsapp: {
      ask: 'Hai domande prima di prenotare?',
      cta: 'Scrivici su WhatsApp',
      fab: 'Scrivici su WhatsApp',
      message: 'Ciao! Vorrei informazioni sul Pub Crawl Bologna'
    },
    footer: {
      rights: 'Tutti i diritti riservati.',
      tagline: 'Bolo Crawl — la notte è giovane.',
      articles: 'Approfondimenti',
      backHome: '← Torna alla home'
    }
  },

  en: {
    lang: 'en',
    locale: 'en_US',
    title: 'Pub Crawl Bologna | Bar Tour with Welcome Shots, Drinking Games & Club — €25',
    description: 'The best Pub Crawl in Bologna: every Thursday, Friday and Saturday bar-hopping on Via del Pratello with welcome shot, beer pong, drink discounts and free club entry. Only €25.',
    ogTitle: 'Pub Crawl Bologna — Bar Tour & Club Entry | €25 per person',
    ogDescription: 'Join the most fun pub crawl in Bologna. 4 bars, welcome shot, drinking games and free club entry. Book now, pay on the spot.',
    keywords: 'pub crawl bologna, bologna pub crawl, bar tour bologna, bologna nightlife, things to do bologna night, bologna bars, via del pratello, beer pong bologna, bologna party, bologna clubs',
    nav: {
      howItWorks: 'How it works',
      includes: 'What\'s included',
      faq: 'FAQ',
      book: 'Book now'
    },
    hero: {
      badge: 'From September · Thu · Fri · Sat',
      h1: 'Pub Crawl Bologna',
      subtitle: 'The most fun bar tour in town. 4 venues, welcome shot, drinking games, drink discounts and free club entry included.',
      cta: 'Book now',
      meta: 'Meet at 9:00 PM — Piazza 8 Agosto, Bologna',
      payNote: 'Book now, pay later: cash, Revolut or PayPal right at the meeting point'
    },
    howItWorks: {
      title: 'How the Pub Crawl works',
      subtitle: 'One night, 4 bars, lots of people from all over the world.',
      steps: [
        { n: '1', t: 'Meet-up & Welcome Shot', d: 'We meet at 9:00 PM in Piazza 8 Agosto. Free welcome shot to break the ice.' },
        { n: '2', t: '4 Bars, Drinking Games', d: 'Stops in 4 of Bologna\'s best pubs with beer pong, card games and discounted drinks.' },
        { n: '3', t: 'Free Club Entry', d: 'We end the night with free entry to one of the hottest clubs in the city.' },
        { n: '4', t: 'Make New Friends', d: 'Meet travelers, Erasmus students and locals. The best way to experience Bologna by night.' }
      ]
    },
    includes: {
      title: 'What\'s included for €25',
      items: [
        'Free welcome shot',
        'Guided tour through 4 selected pubs',
        'Drinking games',
        'Exclusive drink discounts in every venue',
        'Free club entry (skip the line)',
        'International guides speaking English, Italian and Spanish'
      ]
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'How much does it cost?', a: 'Only €25 per person, all included: welcome shot, 4 pubs, games, drink discounts and club entry.' },
        { q: 'When does it take place?', a: 'Every Thursday, Friday and Saturday. Meet at 9:00 PM in Piazza 8 Agosto. The night ends at the club around 2 AM.' },
        { q: 'Where do we meet?', a: 'Piazza 8 Agosto, Bologna. We send you the exact spot by email or WhatsApp after you book.' },
        { q: 'Do I need to be 18+?', a: 'Yes, you must be at least 18 years old. Please bring a valid ID.' },
        { q: 'Can I come alone?', a: 'Absolutely! Most people come alone. It\'s the perfect way to meet new friends.' },
        { q: 'How do I book?', a: 'Pick the date and number of people in the form below — just one click. No online payment — you book now and pay later, right at the meeting point.' },
        { q: 'How do I pay?', a: 'You pay in person only, at the meeting point before we set off: cash, Revolut or PayPal. No online payment and no card details on the website.' }
      ]
    },
    book: {
      title: 'Book your Pub Crawl',
      subtitle: 'Pick a date and the number of people, we\'ll take care of the rest.',
      date: 'Pub crawl date',
      dateHelp: 'Bookings from September — Thursdays, Fridays and Saturdays only',
      dateInvalid: 'You can only choose a Thursday, Friday or Saturday.',
      dateTooEarly: 'Bookings start in September: please pick a date from September onwards.',
      people: 'Number of people',
      name: 'Full name',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      optional: '(optional)',
      emailHelp: 'We write here to confirm your spot and the exact meeting point',
      phoneHelp: 'Only used to reach you if something changes',
      nameInvalid: 'Please enter your name.',
      emailInvalid: 'Please check your email address.',
      privacy: 'We use your name, email and phone only to manage your booking.',
      submit: 'Book now',
      sending: 'Sending...',
      error: 'Oops, something went wrong. Please try again.',
      payNote: 'No online payment: you book now and pay in person at the meeting point, by cash, Revolut or PayPal.'
    },
    modal: {
      title: '🍻 Booking received!',
      body: 'We will get back to you shortly by email or WhatsApp to confirm your spot and give you the exact meeting point. See you in Piazza 8 Agosto at 9:00 PM — you pay there: cash, Revolut or PayPal.',
      close: 'Close'
    },
    whatsapp: {
      ask: 'Any questions before booking?',
      cta: 'Message us on WhatsApp',
      fab: 'Message us on WhatsApp',
      message: 'Hi! I would like some info about the Pub Crawl Bologna'
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'Bolo Crawl — the night is young.',
      articles: 'Guides',
      backHome: '← Back to home'
    }
  },

  es: {
    lang: 'es',
    locale: 'es_ES',
    title: 'Pub Crawl Bolonia | Tour de Bares con Chupitos, Juegos y Discoteca — 25€',
    description: 'El mejor Pub Crawl de Bolonia: cada jueves, viernes y sábado tour de bares en Via del Pratello con chupito de bienvenida, beer pong, descuentos y entrada gratis a la discoteca. Solo 25€.',
    ogTitle: 'Pub Crawl Bolonia — Tour de Bares y Discoteca | 25€ por persona',
    ogDescription: 'Únete al pub crawl más divertido de Bolonia. 4 bares, chupito de bienvenida, juegos y entrada a discoteca incluida. Reserva ahora, paga en el sitio.',
    keywords: 'pub crawl bolonia, tour de bares bolonia, bolonia noche, que hacer bolonia noche, bares bolonia, via del pratello, beer pong bolonia, discoteca bolonia, fiesta bolonia',
    nav: {
      howItWorks: 'Cómo funciona',
      includes: 'Qué incluye',
      faq: 'FAQ',
      book: 'Reservar'
    },
    hero: {
      badge: 'Desde septiembre · Jue · Vie · Sáb',
      h1: 'Pub Crawl Bolonia',
      subtitle: 'El tour de bares más divertido de la ciudad. 4 locales, chupito de bienvenida, juegos, descuentos y entrada a discoteca incluida.',
      cta: 'Reserva ahora',
      meta: 'Encuentro a las 21:00 — Piazza 8 Agosto, Bolonia',
      payNote: 'Reserva ahora, paga después: efectivo, Revolut o PayPal en el punto de encuentro'
    },
    howItWorks: {
      title: 'Cómo funciona el Pub Crawl',
      subtitle: 'Una noche, 4 bares, gente de todo el mundo.',
      steps: [
        { n: '1', t: 'Encuentro y chupito', d: 'Nos vemos a las 21:00 en Piazza 8 Agosto. Chupito de bienvenida gratis para romper el hielo.' },
        { n: '2', t: '4 bares, juegos alcohólicos', d: 'Paradas en 4 de los mejores pubs de Bolonia con beer pong, juegos de cartas y descuentos.' },
        { n: '3', t: 'Entrada a discoteca', d: 'Terminamos la noche con entrada gratis a una de las discotecas más de moda.' },
        { n: '4', t: 'Nuevos amigos', d: 'Conoce viajeros, Erasmus y locales. La mejor forma de vivir Bolonia de noche.' }
      ]
    },
    includes: {
      title: 'Qué incluye por 25€',
      items: [
        'Chupito de bienvenida gratis',
        'Tour guiado por 4 pubs seleccionados',
        'Juegos alcohólicos',
        'Descuentos exclusivos en cada local',
        'Entrada a discoteca gratis (sin cola)',
        'Guías internacionales en inglés, italiano y español'
      ]
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Cuánto cuesta?', a: 'Solo 25€ por persona, todo incluido: chupito, 4 pubs, juegos, descuentos y entrada a discoteca.' },
        { q: '¿Cuándo es?', a: 'Cada jueves, viernes y sábado. Encuentro a las 21:00 en Piazza 8 Agosto. Termina en discoteca hacia las 2 AM.' },
        { q: '¿Dónde nos vemos?', a: 'Piazza 8 Agosto, Bolonia. Te enviamos el punto exacto por email o WhatsApp tras reservar.' },
        { q: '¿Debo ser mayor de edad?', a: 'Sí, debes tener al menos 18 años. Trae un documento válido.' },
        { q: '¿Puedo ir solo?', a: '¡Por supuesto! La mayoría viene sola. Es la manera perfecta de hacer amigos.' },
        { q: '¿Cómo reservo?', a: 'Elige la fecha y el número de personas en el formulario de abajo, un solo click. Sin pago online: reservas ahora y pagas después, en el punto de encuentro.' },
        { q: '¿Cómo se paga?', a: 'Se paga solo en persona, en el punto de encuentro antes de salir: efectivo, Revolut o PayPal. Sin pago online y sin datos de tarjeta en la web.' }
      ]
    },
    book: {
      title: 'Reserva tu Pub Crawl',
      subtitle: 'Elige la fecha y el número de personas, nosotros nos encargamos.',
      date: 'Fecha del pub crawl',
      dateHelp: 'Reservas desde septiembre — solo jueves, viernes y sábado',
      dateInvalid: 'Solo puedes elegir jueves, viernes o sábado.',
      dateTooEarly: 'Las reservas empiezan en septiembre: elige una fecha a partir de septiembre.',
      people: 'Número de personas',
      name: 'Nombre y apellidos',
      email: 'Email',
      phone: 'Teléfono / WhatsApp',
      optional: '(opcional)',
      emailHelp: 'Aquí te escribimos para confirmar la plaza y el punto exacto de encuentro',
      phoneHelp: 'Solo lo usamos para avisarte si hay algún cambio',
      nameInvalid: 'Escribe tu nombre.',
      emailInvalid: 'Revisa tu dirección de email.',
      privacy: 'Usamos nombre, email y teléfono solo para gestionar tu reserva.',
      submit: 'Reservar ahora',
      sending: 'Enviando...',
      error: 'Ups, algo ha ido mal. Inténtalo de nuevo.',
      payNote: 'Sin pago online: reservas ahora y pagas en persona en el punto de encuentro, en efectivo, Revolut o PayPal.'
    },
    modal: {
      title: '🍻 ¡Reserva recibida!',
      body: 'Te contactamos en breve por email o WhatsApp para confirmarte la plaza y darte el punto exacto de encuentro. Nos vemos en Piazza 8 Agosto a las 21:00 — pagas allí: efectivo, Revolut o PayPal.',
      close: 'Cerrar'
    },
    whatsapp: {
      ask: '¿Tienes dudas antes de reservar?',
      cta: 'Escríbenos por WhatsApp',
      fab: 'Escríbenos por WhatsApp',
      message: '¡Hola! Quería información sobre el Pub Crawl Bolonia'
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      tagline: 'Bolo Crawl — la noche es joven.'
    }
  },

  de: {
    lang: 'de',
    locale: 'de_DE',
    title: 'Pub Crawl Bologna | Bar-Tour mit Shots, Trinkspielen & Club — 25€',
    description: 'Der beste Pub Crawl in Bologna: jeden Donnerstag, Freitag und Samstag Bar-Tour in Via del Pratello mit Welcome-Shot, Beer Pong, Drink-Rabatten und freiem Club-Eintritt. Nur 25€.',
    ogTitle: 'Pub Crawl Bologna — Bar-Tour & Club | 25€ pro Person',
    ogDescription: 'Mach mit beim coolsten Pub Crawl in Bologna. 4 Bars, Welcome-Shot, Trinkspiele und Club-Eintritt inklusive. Jetzt buchen, vor Ort bezahlen.',
    keywords: 'pub crawl bologna, bologna nachtleben, bar tour bologna, bologna party, bologna bars, via del pratello, beer pong bologna, bologna club, bologna ausgehen',
    nav: {
      howItWorks: 'So funktioniert\'s',
      includes: 'Inklusive',
      faq: 'FAQ',
      book: 'Buchen'
    },
    hero: {
      badge: 'Ab September · Do · Fr · Sa',
      h1: 'Pub Crawl Bologna',
      subtitle: 'Die lustigste Bar-Tour der Stadt. 4 Locations, Welcome-Shot, Trinkspiele, Drink-Rabatte und Club-Eintritt inklusive.',
      cta: 'Jetzt buchen',
      meta: 'Treffpunkt 21:00 — Piazza 8 Agosto, Bologna',
      payNote: 'Jetzt buchen, später zahlen: bar, Revolut oder PayPal direkt am Treffpunkt'
    },
    howItWorks: {
      title: 'So läuft der Pub Crawl ab',
      subtitle: 'Eine Nacht, 4 Bars, viele Menschen aus aller Welt.',
      steps: [
        { n: '1', t: 'Treffen & Welcome-Shot', d: 'Wir treffen uns um 21:00 auf der Piazza 8 Agosto. Gratis Welcome-Shot zum Kennenlernen.' },
        { n: '2', t: '4 Bars, Trinkspiele', d: 'Stopps in 4 der besten Pubs Bolognas mit Beer Pong, Kartenspielen und Rabatten.' },
        { n: '3', t: 'Gratis Club-Eintritt', d: 'Wir enden die Nacht mit freiem Eintritt in einen angesagten Club.' },
        { n: '4', t: 'Neue Freunde', d: 'Triff Reisende, Erasmus-Studenten und Locals. Die beste Art Bologna bei Nacht zu erleben.' }
      ]
    },
    includes: {
      title: 'Im 25€-Preis enthalten',
      items: [
        'Gratis Welcome-Shot',
        'Geführte Tour durch 4 ausgewählte Pubs',
        'Trinkspiele',
        'Exklusive Drink-Rabatte in jeder Bar',
        'Freier Club-Eintritt (ohne anstehen)',
        'Internationale Guides auf Englisch, Italienisch und Spanisch'
      ]
    },
    faq: {
      title: 'Häufige Fragen',
      items: [
        { q: 'Wie viel kostet es?', a: 'Nur 25€ pro Person, alles inklusive: Welcome-Shot, 4 Pubs, Spiele, Rabatte und Club-Eintritt.' },
        { q: 'Wann findet es statt?', a: 'Jeden Donnerstag, Freitag und Samstag. Treffpunkt 21:00 auf der Piazza 8 Agosto. Ende im Club gegen 2 Uhr morgens.' },
        { q: 'Wo treffen wir uns?', a: 'Piazza 8 Agosto, Bologna. Den genauen Punkt schicken wir nach der Buchung per E-Mail oder WhatsApp.' },
        { q: 'Muss ich 18+ sein?', a: 'Ja, Mindestalter 18. Bitte einen Ausweis mitbringen.' },
        { q: 'Kann ich alleine kommen?', a: 'Klar! Die meisten kommen alleine. Perfekt um neue Leute kennenzulernen.' },
        { q: 'Wie buche ich?', a: 'Datum und Personenzahl im Formular unten auswählen — ein Klick genügt. Keine Online-Zahlung: du buchst jetzt und zahlst später direkt am Treffpunkt.' },
        { q: 'Wie bezahle ich?', a: 'Bezahlt wird ausschließlich vor Ort, am Treffpunkt vor dem Start: bar, per Revolut oder PayPal. Keine Online-Zahlung und keine Kartendaten auf der Website.' }
      ]
    },
    book: {
      title: 'Pub Crawl buchen',
      subtitle: 'Wähle Datum und Anzahl Personen, wir kümmern uns um den Rest.',
      date: 'Datum',
      dateHelp: 'Buchungen ab September — nur Donnerstag, Freitag und Samstag',
      dateInvalid: 'Du kannst nur Donnerstag, Freitag oder Samstag auswählen.',
      dateTooEarly: 'Buchungen starten im September: bitte wähle ein Datum ab September.',
      people: 'Anzahl Personen',
      name: 'Vor- und Nachname',
      email: 'E-Mail',
      phone: 'Telefon / WhatsApp',
      optional: '(optional)',
      emailHelp: 'Hier schreiben wir dir zur Bestätigung und zum genauen Treffpunkt',
      phoneHelp: 'Nur um dich zu erreichen, falls sich etwas ändert',
      nameInvalid: 'Bitte gib deinen Namen ein.',
      emailInvalid: 'Bitte prüfe deine E-Mail-Adresse.',
      privacy: 'Wir nutzen Name, E-Mail und Telefon nur für deine Buchung.',
      submit: 'Jetzt buchen',
      sending: 'Wird gesendet...',
      error: 'Ups, etwas ist schiefgelaufen. Bitte nochmal versuchen.',
      payNote: 'Keine Online-Zahlung: du buchst jetzt und zahlst persönlich am Treffpunkt, bar, per Revolut oder PayPal.'
    },
    modal: {
      title: '🍻 Buchung eingegangen!',
      body: 'Wir melden uns in Kürze per E-Mail oder WhatsApp, um deinen Platz zu bestätigen und dir den genauen Treffpunkt zu nennen. Wir sehen uns um 21:00 Uhr auf der Piazza 8 Agosto — bezahlt wird dort: bar, Revolut oder PayPal.',
      close: 'Schließen'
    },
    whatsapp: {
      ask: 'Noch Fragen vor der Buchung?',
      cta: 'Schreib uns auf WhatsApp',
      fab: 'Schreib uns auf WhatsApp',
      message: 'Hallo! Ich hätte gerne Infos zum Pub Crawl Bologna'
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      tagline: 'Bolo Crawl — die Nacht ist jung.'
    }
  },

  fr: {
    lang: 'fr',
    locale: 'fr_FR',
    title: 'Pub Crawl Bologne | Tournée des Bars avec Shots, Jeux & Boîte — 25€',
    description: 'Le meilleur Pub Crawl de Bologne : chaque jeudi, vendredi et samedi tournée des bars sur Via del Pratello avec shot de bienvenue, beer pong, réductions et entrée en boîte. Seulement 25€.',
    ogTitle: 'Pub Crawl Bologne — Tournée des Bars et Boîte | 25€ par personne',
    ogDescription: 'Rejoins le pub crawl le plus fun de Bologne. 4 bars, shot de bienvenue, jeux et entrée en boîte incluse. Réserve maintenant, paie sur place.',
    keywords: 'pub crawl bologne, tournée des bars bologne, bologne nuit, que faire bologne soir, bars bologne, via del pratello, beer pong bologne, boîte de nuit bologne, sortir bologne',
    nav: {
      howItWorks: 'Comment ça marche',
      includes: 'Inclus',
      faq: 'FAQ',
      book: 'Réserver'
    },
    hero: {
      badge: 'Dès septembre · Jeu · Ven · Sam',
      h1: 'Pub Crawl Bologne',
      subtitle: 'La tournée des bars la plus fun de la ville. 4 lieux, shot de bienvenue, jeux, réductions et entrée en boîte incluse.',
      cta: 'Réserve maintenant',
      meta: 'Rendez-vous 21h00 — Piazza 8 Agosto, Bologne',
      payNote: 'Réserve maintenant, paie plus tard : espèces, Revolut ou PayPal au rendez-vous'
    },
    howItWorks: {
      title: 'Comment se déroule le Pub Crawl',
      subtitle: 'Une nuit, 4 bars, plein de gens du monde entier.',
      steps: [
        { n: '1', t: 'Rendez-vous & Shot', d: 'On se retrouve à 21h00 sur la Piazza 8 Agosto. Shot de bienvenue offert pour briser la glace.' },
        { n: '2', t: '4 Bars, Jeux d\'alcool', d: 'Étapes dans 4 des meilleurs pubs de Bologne avec beer pong, jeux de cartes et réductions.' },
        { n: '3', t: 'Entrée en Boîte', d: 'On termine la soirée avec une entrée gratuite dans une boîte tendance.' },
        { n: '4', t: 'Nouveaux Amis', d: 'Rencontre voyageurs, Erasmus et locaux. La meilleure façon de vivre Bologne la nuit.' }
      ]
    },
    includes: {
      title: 'Inclus dans les 25€',
      items: [
        'Shot de bienvenue offert',
        'Tour guidé dans 4 pubs sélectionnés',
        'Jeux d\'alcool',
        'Réductions exclusives dans chaque bar',
        'Entrée en boîte gratuite (coupe-file)',
        'Guides internationaux en anglais, italien et espagnol'
      ]
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        { q: 'Combien ça coûte ?', a: 'Seulement 25€ par personne, tout inclus : shot, 4 pubs, jeux, réductions et entrée en boîte.' },
        { q: 'Quand a-t-il lieu ?', a: 'Chaque jeudi, vendredi et samedi. Rendez-vous à 21h00 sur la Piazza 8 Agosto. Fin en boîte vers 2h du matin.' },
        { q: 'Où se retrouve-t-on ?', a: 'Piazza 8 Agosto, Bologne. On envoie le point exact par email ou WhatsApp après la réservation.' },
        { q: 'Faut-il être majeur ?', a: 'Oui, 18 ans minimum. Merci d\'apporter une pièce d\'identité.' },
        { q: 'Puis-je venir seul ?', a: 'Bien sûr ! La plupart viennent seuls. C\'est parfait pour rencontrer du monde.' },
        { q: 'Comment réserver ?', a: 'Choisis la date et le nombre de personnes dans le formulaire, un seul clic. Aucun paiement en ligne : tu réserves maintenant et tu paies plus tard, sur place.' },
        { q: 'Comment payer ?', a: 'Le paiement se fait uniquement sur place, au rendez-vous avant le départ : espèces, Revolut ou PayPal. Aucun paiement en ligne et aucune carte à saisir sur le site.' }
      ]
    },
    book: {
      title: 'Réserve ton Pub Crawl',
      subtitle: 'Choisis la date et le nombre de personnes, on s\'occupe du reste.',
      date: 'Date',
      dateHelp: 'Réservations dès septembre — uniquement jeudi, vendredi et samedi',
      dateInvalid: 'Tu peux choisir seulement jeudi, vendredi ou samedi.',
      dateTooEarly: 'Les réservations commencent en septembre : choisis une date à partir de septembre.',
      people: 'Nombre de personnes',
      name: 'Nom et prénom',
      email: 'Email',
      phone: 'Téléphone / WhatsApp',
      optional: '(facultatif)',
      emailHelp: "On t'écrit ici pour confirmer ta place et le point de rendez-vous exact",
      phoneHelp: 'Utilisé uniquement pour te prévenir en cas de changement',
      nameInvalid: 'Indique ton nom.',
      emailInvalid: 'Vérifie ton adresse email.',
      privacy: 'Nous utilisons nom, email et téléphone uniquement pour gérer ta réservation.',
      submit: 'Réserver',
      sending: 'Envoi...',
      error: 'Oups, une erreur est survenue. Réessaie.',
      payNote: 'Aucun paiement en ligne : tu réserves maintenant et tu paies sur place au rendez-vous, en espèces, Revolut ou PayPal.'
    },
    modal: {
      title: '🍻 Réservation reçue !',
      body: 'On te recontacte très vite par email ou WhatsApp pour confirmer ta place et te donner le point de rendez-vous exact. Rendez-vous Piazza 8 Agosto à 21h00 — tu paies sur place : espèces, Revolut ou PayPal.',
      close: 'Fermer'
    },
    whatsapp: {
      ask: 'Des questions avant de réserver ?',
      cta: 'Écris-nous sur WhatsApp',
      fab: 'Écris-nous sur WhatsApp',
      message: 'Salut ! Je voudrais des infos sur le Pub Crawl Bologne'
    },
    footer: {
      rights: 'Tous droits réservés.',
      tagline: 'Bolo Crawl — la nuit est jeune.'
    }
  }
};

const SUPPORTED_LANGS = ['it', 'en', 'es', 'de', 'fr'];
const DEFAULT_LANG = 'en';

module.exports = { translations, SUPPORTED_LANGS, DEFAULT_LANG };
