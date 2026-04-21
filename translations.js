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
    ogDescription: 'Unisciti al pub crawl più divertente di Bologna. 4 pub, shot di benvenuto, giochi alcolici e discoteca inclusa. Prenota online.',
    keywords: 'pub crawl bologna, pub crawl bologna prezzi, tour dei pub bologna, bologna nightlife, serate bologna, locali bologna, via del pratello, beer pong bologna, discoteca bologna, eventi bologna',
    nav: {
      howItWorks: 'Come funziona',
      includes: 'Cosa include',
      faq: 'FAQ',
      book: 'Prenota'
    },
    hero: {
      badge: 'Giovedì · Venerdì · Sabato',
      h1: 'Pub Crawl Bologna',
      subtitle: 'Il tour dei pub più divertente della città. 4 locali, shot di benvenuto, giochi alcolici, sconti sui drink e ingresso in discoteca incluso.',
      cta: 'Prenota a 25€',
      meta: 'Ritrovo ore 21:00 — Via del Pratello, Bologna'
    },
    howItWorks: {
      title: 'Come funziona il Pub Crawl',
      subtitle: 'Una notte, 4 locali, tantissime persone da tutto il mondo.',
      steps: [
        { n: '1', t: 'Ritrovo & Welcome Shot', d: 'Ci incontriamo alle 21:00 in Via del Pratello. Shot di benvenuto offerto per rompere il ghiaccio.' },
        { n: '2', t: '4 Pub, Giochi Alcolici', d: 'Tappe in 4 tra i migliori pub di Bologna con beer pong, giochi di carte alcolici e drink scontati.' },
        { n: '3', t: 'Ingresso in Discoteca', d: 'Finiamo la serata con ingresso gratuito in una delle discoteche più in voga della città.' },
        { n: '4', t: 'Nuovi Amici', d: 'Incontra viaggiatori, Erasmus e locali. È il modo migliore per vivere Bologna di notte.' }
      ]
    },
    includes: {
      title: 'Cosa è incluso nei 25€',
      items: [
        'Shot di benvenuto gratuito in ogni locale',
        'Tour guidato in 4 pub selezionati',
        'Giochi alcolici (beer pong, drunk cards)',
        'Sconti esclusivi sui drink in ogni locale',
        'Ingresso in discoteca incluso (salta la fila)',
        'Guide internazionali che parlano inglese, italiano e spagnolo'
      ]
    },
    faq: {
      title: 'Domande frequenti',
      items: [
        { q: 'Quanto costa il pub crawl?', a: 'Solo 25€ a persona, tutto incluso: welcome shot, 4 pub, giochi, sconti sui drink e ingresso in discoteca.' },
        { q: 'Quando si svolge?', a: 'Ogni giovedì, venerdì e sabato. Ritrovo alle 21:00 in Via del Pratello. La serata finisce in discoteca verso le 2 di notte.' },
        { q: 'Dove ci si incontra?', a: 'In Via del Pratello, Bologna. Il punto esatto ti verrà inviato via email dopo la prenotazione.' },
        { q: 'Devo essere maggiorenne?', a: 'Sì, per partecipare al pub crawl bisogna avere almeno 18 anni. Porta un documento di identità.' },
        { q: 'Posso venire da solo?', a: 'Assolutamente sì! La maggior parte dei partecipanti viene da sola. È il modo perfetto per conoscere gente nuova.' },
        { q: 'Come si prenota?', a: 'Scegli data e numero di persone nel modulo qui sotto: ti basta un click. Nessun dato personale richiesto, nessun pagamento anticipato.' }
      ]
    },
    book: {
      title: 'Prenota il tuo Pub Crawl',
      subtitle: 'Scegli la data e il numero di persone, ci pensiamo noi.',
      date: 'Data del pub crawl',
      dateHelp: 'Disponibile solo giovedì, venerdì e sabato',
      dateInvalid: 'Puoi scegliere solo giovedì, venerdì o sabato.',
      people: 'Numero di persone',
      submit: 'Prenota ora',
      sending: 'Invio in corso...',
      error: 'Ops, qualcosa è andato storto. Riprova.'
    },
    modal: {
      title: '🍻 Grazie per il tuo interesse!',
      body: 'Bolo Crawl sta per nascere! Stiamo organizzando tutto per partire al più presto. Grazie per averci mostrato interesse.',
      close: 'Chiudi'
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
    ogDescription: 'Join the most fun pub crawl in Bologna. 4 bars, welcome shot, drinking games and free club entry. Book online.',
    keywords: 'pub crawl bologna, bologna pub crawl, bar tour bologna, bologna nightlife, things to do bologna night, bologna bars, via del pratello, beer pong bologna, bologna party, bologna clubs',
    nav: {
      howItWorks: 'How it works',
      includes: 'What\'s included',
      faq: 'FAQ',
      book: 'Book now'
    },
    hero: {
      badge: 'Thursday · Friday · Saturday',
      h1: 'Pub Crawl Bologna',
      subtitle: 'The most fun bar tour in town. 4 venues, welcome shot, drinking games, drink discounts and free club entry included.',
      cta: 'Book for €25',
      meta: 'Meet at 9:00 PM — Via del Pratello, Bologna'
    },
    howItWorks: {
      title: 'How the Pub Crawl works',
      subtitle: 'One night, 4 bars, lots of people from all over the world.',
      steps: [
        { n: '1', t: 'Meet-up & Welcome Shot', d: 'We meet at 9:00 PM on Via del Pratello. Free welcome shot to break the ice.' },
        { n: '2', t: '4 Bars, Drinking Games', d: 'Stops in 4 of Bologna\'s best pubs with beer pong, card games and discounted drinks.' },
        { n: '3', t: 'Free Club Entry', d: 'We end the night with free entry to one of the hottest clubs in the city.' },
        { n: '4', t: 'Make New Friends', d: 'Meet travelers, Erasmus students and locals. The best way to experience Bologna by night.' }
      ]
    },
    includes: {
      title: 'What\'s included for €25',
      items: [
        'Free welcome shot in every venue',
        'Guided tour through 4 selected pubs',
        'Drinking games (beer pong, drunk cards)',
        'Exclusive drink discounts in every venue',
        'Free club entry (skip the line)',
        'International guides speaking English, Italian and Spanish'
      ]
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'How much does it cost?', a: 'Only €25 per person, all included: welcome shot, 4 pubs, games, drink discounts and club entry.' },
        { q: 'When does it take place?', a: 'Every Thursday, Friday and Saturday. Meet at 9:00 PM on Via del Pratello. The night ends at the club around 2 AM.' },
        { q: 'Where do we meet?', a: 'Via del Pratello, Bologna. The exact spot will be sent by email after booking.' },
        { q: 'Do I need to be 18+?', a: 'Yes, you must be at least 18 years old. Please bring a valid ID.' },
        { q: 'Can I come alone?', a: 'Absolutely! Most people come alone. It\'s the perfect way to meet new friends.' },
        { q: 'How do I book?', a: 'Pick the date and number of people in the form below — just one click. No personal details required, no upfront payment.' }
      ]
    },
    book: {
      title: 'Book your Pub Crawl',
      subtitle: 'Pick a date and the number of people, we\'ll take care of the rest.',
      date: 'Pub crawl date',
      dateHelp: 'Available only on Thursdays, Fridays and Saturdays',
      dateInvalid: 'You can only choose a Thursday, Friday or Saturday.',
      people: 'Number of people',
      submit: 'Book now',
      sending: 'Sending...',
      error: 'Oops, something went wrong. Please try again.'
    },
    modal: {
      title: '🍻 Thanks for your interest!',
      body: 'Bolo Crawl is launching soon! We\'re organizing everything to start as soon as possible. Thanks for showing interest.',
      close: 'Close'
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
    ogDescription: 'Únete al pub crawl más divertido de Bolonia. 4 bares, chupito de bienvenida, juegos y entrada a discoteca incluida. Reserva online.',
    keywords: 'pub crawl bolonia, tour de bares bolonia, bolonia noche, que hacer bolonia noche, bares bolonia, via del pratello, beer pong bolonia, discoteca bolonia, fiesta bolonia',
    nav: {
      howItWorks: 'Cómo funciona',
      includes: 'Qué incluye',
      faq: 'FAQ',
      book: 'Reservar'
    },
    hero: {
      badge: 'Jueves · Viernes · Sábado',
      h1: 'Pub Crawl Bolonia',
      subtitle: 'El tour de bares más divertido de la ciudad. 4 locales, chupito de bienvenida, juegos, descuentos y entrada a discoteca incluida.',
      cta: 'Reserva por 25€',
      meta: 'Encuentro a las 21:00 — Via del Pratello, Bolonia'
    },
    howItWorks: {
      title: 'Cómo funciona el Pub Crawl',
      subtitle: 'Una noche, 4 bares, gente de todo el mundo.',
      steps: [
        { n: '1', t: 'Encuentro y chupito', d: 'Nos vemos a las 21:00 en Via del Pratello. Chupito de bienvenida gratis para romper el hielo.' },
        { n: '2', t: '4 bares, juegos alcohólicos', d: 'Paradas en 4 de los mejores pubs de Bolonia con beer pong, juegos de cartas y descuentos.' },
        { n: '3', t: 'Entrada a discoteca', d: 'Terminamos la noche con entrada gratis a una de las discotecas más de moda.' },
        { n: '4', t: 'Nuevos amigos', d: 'Conoce viajeros, Erasmus y locales. La mejor forma de vivir Bolonia de noche.' }
      ]
    },
    includes: {
      title: 'Qué incluye por 25€',
      items: [
        'Chupito de bienvenida gratis en cada local',
        'Tour guiado por 4 pubs seleccionados',
        'Juegos alcohólicos (beer pong, drunk cards)',
        'Descuentos exclusivos en cada local',
        'Entrada a discoteca gratis (sin cola)',
        'Guías internacionales en inglés, italiano y español'
      ]
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Cuánto cuesta?', a: 'Solo 25€ por persona, todo incluido: chupito, 4 pubs, juegos, descuentos y entrada a discoteca.' },
        { q: '¿Cuándo es?', a: 'Cada jueves, viernes y sábado. Encuentro a las 21:00 en Via del Pratello. Termina en discoteca hacia las 2 AM.' },
        { q: '¿Dónde nos vemos?', a: 'Via del Pratello, Bolonia. El punto exacto se envía por email tras reservar.' },
        { q: '¿Debo ser mayor de edad?', a: 'Sí, debes tener al menos 18 años. Trae un documento válido.' },
        { q: '¿Puedo ir solo?', a: '¡Por supuesto! La mayoría viene sola. Es la manera perfecta de hacer amigos.' },
        { q: '¿Cómo reservo?', a: 'Elige la fecha y el número de personas en el formulario de abajo, un solo click. Sin datos personales, sin pago anticipado.' }
      ]
    },
    book: {
      title: 'Reserva tu Pub Crawl',
      subtitle: 'Elige la fecha y el número de personas, nosotros nos encargamos.',
      date: 'Fecha del pub crawl',
      dateHelp: 'Disponible solo jueves, viernes y sábado',
      dateInvalid: 'Solo puedes elegir jueves, viernes o sábado.',
      people: 'Número de personas',
      submit: 'Reservar ahora',
      sending: 'Enviando...',
      error: 'Ups, algo ha ido mal. Inténtalo de nuevo.'
    },
    modal: {
      title: '🍻 ¡Gracias por tu interés!',
      body: '¡Bolo Crawl está a punto de lanzarse! Estamos organizando todo para empezar lo antes posible. Gracias por mostrar interés.',
      close: 'Cerrar'
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
    ogDescription: 'Mach mit beim coolsten Pub Crawl in Bologna. 4 Bars, Welcome-Shot, Trinkspiele und Club-Eintritt inklusive. Online buchen.',
    keywords: 'pub crawl bologna, bologna nachtleben, bar tour bologna, bologna party, bologna bars, via del pratello, beer pong bologna, bologna club, bologna ausgehen',
    nav: {
      howItWorks: 'So funktioniert\'s',
      includes: 'Inklusive',
      faq: 'FAQ',
      book: 'Buchen'
    },
    hero: {
      badge: 'Donnerstag · Freitag · Samstag',
      h1: 'Pub Crawl Bologna',
      subtitle: 'Die lustigste Bar-Tour der Stadt. 4 Locations, Welcome-Shot, Trinkspiele, Drink-Rabatte und Club-Eintritt inklusive.',
      cta: 'Für 25€ buchen',
      meta: 'Treffpunkt 21:00 — Via del Pratello, Bologna'
    },
    howItWorks: {
      title: 'So läuft der Pub Crawl ab',
      subtitle: 'Eine Nacht, 4 Bars, viele Menschen aus aller Welt.',
      steps: [
        { n: '1', t: 'Treffen & Welcome-Shot', d: 'Wir treffen uns um 21:00 in der Via del Pratello. Gratis Welcome-Shot zum Kennenlernen.' },
        { n: '2', t: '4 Bars, Trinkspiele', d: 'Stopps in 4 der besten Pubs Bolognas mit Beer Pong, Kartenspielen und Rabatten.' },
        { n: '3', t: 'Gratis Club-Eintritt', d: 'Wir enden die Nacht mit freiem Eintritt in einen angesagten Club.' },
        { n: '4', t: 'Neue Freunde', d: 'Triff Reisende, Erasmus-Studenten und Locals. Die beste Art Bologna bei Nacht zu erleben.' }
      ]
    },
    includes: {
      title: 'Im 25€-Preis enthalten',
      items: [
        'Gratis Welcome-Shot in jeder Bar',
        'Geführte Tour durch 4 ausgewählte Pubs',
        'Trinkspiele (Beer Pong, Drunk Cards)',
        'Exklusive Drink-Rabatte in jeder Bar',
        'Freier Club-Eintritt (ohne anstehen)',
        'Internationale Guides auf Englisch, Italienisch und Spanisch'
      ]
    },
    faq: {
      title: 'Häufige Fragen',
      items: [
        { q: 'Wie viel kostet es?', a: 'Nur 25€ pro Person, alles inklusive: Welcome-Shot, 4 Pubs, Spiele, Rabatte und Club-Eintritt.' },
        { q: 'Wann findet es statt?', a: 'Jeden Donnerstag, Freitag und Samstag. Treffpunkt 21:00 in der Via del Pratello. Ende im Club gegen 2 Uhr morgens.' },
        { q: 'Wo treffen wir uns?', a: 'Via del Pratello, Bologna. Der genaue Punkt kommt nach der Buchung per E-Mail.' },
        { q: 'Muss ich 18+ sein?', a: 'Ja, Mindestalter 18. Bitte einen Ausweis mitbringen.' },
        { q: 'Kann ich alleine kommen?', a: 'Klar! Die meisten kommen alleine. Perfekt um neue Leute kennenzulernen.' },
        { q: 'Wie buche ich?', a: 'Datum und Personenzahl im Formular unten auswählen — ein Klick genügt. Keine persönlichen Daten, keine Vorauszahlung.' }
      ]
    },
    book: {
      title: 'Pub Crawl buchen',
      subtitle: 'Wähle Datum und Anzahl Personen, wir kümmern uns um den Rest.',
      date: 'Datum',
      dateHelp: 'Nur Donnerstag, Freitag und Samstag verfügbar',
      dateInvalid: 'Du kannst nur Donnerstag, Freitag oder Samstag auswählen.',
      people: 'Anzahl Personen',
      submit: 'Jetzt buchen',
      sending: 'Wird gesendet...',
      error: 'Ups, etwas ist schiefgelaufen. Bitte nochmal versuchen.'
    },
    modal: {
      title: '🍻 Danke für dein Interesse!',
      body: 'Bolo Crawl startet bald! Wir organisieren gerade alles, um so schnell wie möglich loszulegen. Danke für dein Interesse.',
      close: 'Schließen'
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
    ogDescription: 'Rejoins le pub crawl le plus fun de Bologne. 4 bars, shot de bienvenue, jeux et entrée en boîte incluse. Réserve en ligne.',
    keywords: 'pub crawl bologne, tournée des bars bologne, bologne nuit, que faire bologne soir, bars bologne, via del pratello, beer pong bologne, boîte de nuit bologne, sortir bologne',
    nav: {
      howItWorks: 'Comment ça marche',
      includes: 'Inclus',
      faq: 'FAQ',
      book: 'Réserver'
    },
    hero: {
      badge: 'Jeudi · Vendredi · Samedi',
      h1: 'Pub Crawl Bologne',
      subtitle: 'La tournée des bars la plus fun de la ville. 4 lieux, shot de bienvenue, jeux, réductions et entrée en boîte incluse.',
      cta: 'Réserver pour 25€',
      meta: 'Rendez-vous 21h00 — Via del Pratello, Bologne'
    },
    howItWorks: {
      title: 'Comment se déroule le Pub Crawl',
      subtitle: 'Une nuit, 4 bars, plein de gens du monde entier.',
      steps: [
        { n: '1', t: 'Rendez-vous & Shot', d: 'On se retrouve à 21h00 sur Via del Pratello. Shot de bienvenue offert pour briser la glace.' },
        { n: '2', t: '4 Bars, Jeux d\'alcool', d: 'Étapes dans 4 des meilleurs pubs de Bologne avec beer pong, jeux de cartes et réductions.' },
        { n: '3', t: 'Entrée en Boîte', d: 'On termine la soirée avec une entrée gratuite dans une boîte tendance.' },
        { n: '4', t: 'Nouveaux Amis', d: 'Rencontre voyageurs, Erasmus et locaux. La meilleure façon de vivre Bologne la nuit.' }
      ]
    },
    includes: {
      title: 'Inclus dans les 25€',
      items: [
        'Shot de bienvenue offert dans chaque bar',
        'Tour guidé dans 4 pubs sélectionnés',
        'Jeux d\'alcool (beer pong, drunk cards)',
        'Réductions exclusives dans chaque bar',
        'Entrée en boîte gratuite (coupe-file)',
        'Guides internationaux en anglais, italien et espagnol'
      ]
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        { q: 'Combien ça coûte ?', a: 'Seulement 25€ par personne, tout inclus : shot, 4 pubs, jeux, réductions et entrée en boîte.' },
        { q: 'Quand a-t-il lieu ?', a: 'Chaque jeudi, vendredi et samedi. Rendez-vous à 21h00 sur Via del Pratello. Fin en boîte vers 2h du matin.' },
        { q: 'Où se retrouve-t-on ?', a: 'Via del Pratello, Bologne. Le point exact est envoyé par email après la réservation.' },
        { q: 'Faut-il être majeur ?', a: 'Oui, 18 ans minimum. Merci d\'apporter une pièce d\'identité.' },
        { q: 'Puis-je venir seul ?', a: 'Bien sûr ! La plupart viennent seuls. C\'est parfait pour rencontrer du monde.' },
        { q: 'Comment réserver ?', a: 'Choisis la date et le nombre de personnes dans le formulaire, un seul clic. Aucune donnée perso, aucun paiement à l\'avance.' }
      ]
    },
    book: {
      title: 'Réserve ton Pub Crawl',
      subtitle: 'Choisis la date et le nombre de personnes, on s\'occupe du reste.',
      date: 'Date',
      dateHelp: 'Disponible uniquement jeudi, vendredi et samedi',
      dateInvalid: 'Tu peux choisir seulement jeudi, vendredi ou samedi.',
      people: 'Nombre de personnes',
      submit: 'Réserver',
      sending: 'Envoi...',
      error: 'Oups, une erreur est survenue. Réessaie.'
    },
    modal: {
      title: '🍻 Merci de ton intérêt !',
      body: 'Bolo Crawl va bientôt voir le jour ! On organise tout pour démarrer au plus vite. Merci d\'avoir montré ton intérêt.',
      close: 'Fermer'
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
