// Articoli long-tail SEO: landing pages dedicate ad una singola query search.
// Ciascuno linka internamente alla home e viceversa.
// Strutturato per essere renderizzato con renderArticle() in render.js.

const articles = {
  it: [
    {
      slug: 'migliori-pub-bologna',
      title: 'I Migliori Pub di Bologna — Guida ai Locali di Via del Pratello (2026)',
      description: 'Quali sono i migliori pub di Bologna? Guida aggiornata ai 10 locali imperdibili di Via del Pratello e zona universitaria: birra artigianale, craft beer, drink economici.',
      keywords: 'migliori pub bologna, pub bologna via del pratello, dove bere bologna, locali bologna universitari, bar zona universitaria bologna, craft beer bologna, birra artigianale bologna',
      h1: 'I migliori pub di Bologna: la guida 2026',
      intro: 'Bologna vanta una delle scene di pub e bar più vive d\'Italia. Tra Via del Pratello, la zona universitaria e il centro storico trovi oltre 100 locali dove bere un buon drink. Ecco la guida ai migliori pub di Bologna, dai più storici alle nuove aperture di craft beer.',
      sections: [
        {
          h2: 'Via del Pratello — la via dei pub a Bologna',
          p: 'Via del Pratello è il centro della vita notturna bolognese. La zona è nata come quartiere popolare e oggi è il posto dove studenti universitari, Erasmus e turisti si mescolano in una striscia di locali che va dalle birrerie storiche ai cocktail bar più nuovi. Camminare il Pratello di venerdì sera significa attraversare un fiume di gente: bar, musica dal vivo, gruppi fuori dai locali con il bicchiere in mano, è lo stile della movida bolognese autentica.'
        },
        {
          h2: 'I 5 pub imperdibili del Pratello',
          p: 'Tra i locali più amati del Pratello ci sono storiche osterie con birra alla spina a prezzo studentesco, pub inglesi con schermi per eventi sportivi, cocktail bar con terrazze, birrifici artigianali con tap list che cambia ogni settimana, e locali con musica dal vivo tutte le sere. Ogni locale ha il suo pubblico: la bellezza del Pratello è che in una serata li attraversi tutti senza mai spostarti di più di 300 metri.'
        },
        {
          h2: 'Fuori dal Pratello: Zamboni, Piazza Verdi, Zona universitaria',
          p: 'Oltre al Pratello, la zona universitaria (Piazza Verdi e Via Zamboni) è il secondo polo della nightlife. Qui i locali sono più piccoli, più economici, e il pubblico è composto quasi esclusivamente da studenti. Nelle sere di apertura dell\'anno accademico la zona si riempie di Erasmus in cerca di compagnia. I prezzi sono tra i più bassi di Bologna.'
        },
        {
          h2: 'Perché partecipare a un Pub Crawl invece di girare da solo',
          p: 'Scegliere il pub giusto a Bologna può essere complicato: i locali cambiano pubblico a seconda della sera, alcuni hanno prezzi turistici, altri sono affollati al punto da non riuscire a entrare. Un pub crawl organizzato risolve il problema: visiti 4 locali selezionati per essere i più vivaci di quella sera, paghi 25€ che includono shot di benvenuto in ogni locale, beer pong, sconti esclusivi sui drink e ingresso saltafila in discoteca. E in più conosci subito un gruppo di persone da tutto il mondo.'
        }
      ],
      cta: 'Prenota il Pub Crawl Bologna a 25€'
    },

    {
      slug: 'cosa-fare-bologna-sera',
      title: 'Cosa Fare a Bologna di Sera: 10 Idee per una Serata Indimenticabile',
      description: 'Cosa fare a Bologna la sera? Guida completa 2026: migliori locali, pub crawl, discoteche, cene tipiche, eventi universitari e cose gratis da fare.',
      keywords: 'cosa fare bologna sera, cosa fare bologna stasera, bologna di sera, serata bologna, uscire bologna, bologna venerdì sera, bologna sabato sera',
      h1: 'Cosa fare a Bologna di sera: la guida 2026',
      intro: 'Sei a Bologna e non sai cosa fare stasera? Tra pub crawl, discoteche, cene tipiche, concerti e aperitivi, la città offre tantissime opzioni ogni sera della settimana. Ecco 10 idee per vivere Bologna di sera al meglio.',
      sections: [
        {
          h2: '1. Aperitivo in Piazza Maggiore o Piazza Santo Stefano',
          p: 'L\'aperitivo bolognese è un rito: alle 18:30 i locali del centro storico si riempiono di gente che sorseggia un Aperol Spritz o un Pignoletto guardando le piazze illuminate. Piazza Maggiore e Piazza Santo Stefano sono i posti più iconici, con prezzi intorno ai 7-10€ per drink + stuzzichini.'
        },
        {
          h2: '2. Pub Crawl: il modo più divertente per vivere la notte',
          p: 'Se vuoi conoscere Bologna di notte nel modo più veloce e divertente, il pub crawl è l\'opzione ideale: 4 pub, shot di benvenuto in ogni locale, giochi alcolici come beer pong, sconti sui drink e ingresso gratuito in discoteca. Ritrovo ore 21:00 in Via del Pratello. Il Pub Crawl Bologna si svolge ogni giovedì, venerdì e sabato a 25€ tutto incluso.'
        },
        {
          h2: '3. Via del Pratello a piedi',
          p: 'Via del Pratello è la strada più vivace della città di notte. Percorrerla a piedi da Porta San Felice verso il centro significa attraversare 20+ locali in 500 metri, con musica, gente fuori dai bar, artisti di strada. Un\'esperienza che vale di per sé.'
        },
        {
          h2: '4. Cena tipica bolognese',
          p: 'Bologna è la capitale gastronomica d\'Italia. Prima di una serata lunga, cena con tagliatelle al ragù, tortellini in brodo, lasagna verde o una piadina ripiena. I prezzi nei ristoranti vicino al Pratello sono più accessibili che in centro.'
        },
        {
          h2: '5. Concerti e musica dal vivo',
          p: 'Bologna ha una scena musicale storica: dai jazz club al TPO, dalla Cantina Bentivoglio ai locali del Pratello con musica dal vivo, ogni sera c\'è qualcosa. Controlla l\'agenda del Locomotiv Club per concerti indie e rock.'
        },
        {
          h2: '6. Discoteche e club',
          p: 'Le discoteche di Bologna si concentrano intorno al centro e nella zona fieristica. Se fai un pub crawl l\'ingresso in discoteca è già incluso, ma in autonomia i locali più frequentati sono intorno ai 15-20€ di ingresso con drink.'
        }
      ],
      cta: 'Scopri il Pub Crawl Bologna'
    },

    {
      slug: 'pub-crawl-bologna-erasmus',
      title: 'Pub Crawl Bologna per Erasmus: Come Conoscere Gente la Prima Settimana',
      description: 'Sei uno studente Erasmus a Bologna? Guida al pub crawl per Erasmus: come funziona, quanto costa (25€), dove si parte, perché è il modo più veloce per fare amicizie.',
      keywords: 'pub crawl bologna erasmus, erasmus bologna, bologna studenti, conoscere gente bologna, erasmus party bologna, serata erasmus bologna, università bologna vita notturna',
      h1: 'Pub Crawl Bologna per studenti Erasmus',
      intro: 'Sei appena arrivato a Bologna in Erasmus e cerchi il modo più veloce per conoscere gente nuova? Il pub crawl è l\'attività di benvenuto perfetta per studenti internazionali. Ecco come funziona e perché funziona.',
      sections: [
        {
          h2: 'Perché il pub crawl è perfetto per gli Erasmus',
          p: 'Il pub crawl riunisce ogni sera un gruppo eterogeneo di persone — Erasmus, turisti, gente in viaggio, studenti italiani. Non devi conoscere nessuno prima: ti presenti al ritrovo in Via del Pratello alle 21:00, ti offrono uno shot di benvenuto, parti con il gruppo. Gli shot gratuiti in ogni locale e i giochi alcolici (beer pong, drunk cards) rendono impossibile non fare amicizia. Entro la seconda tappa conoscerai tutto il gruppo per nome.'
        },
        {
          h2: 'Bologna, la città Erasmus per eccellenza',
          p: 'Bologna accoglie ogni anno oltre 2.000 studenti Erasmus da tutta Europa. Con l\'Università più antica del mondo occidentale, la città ha infrastrutture pensate per studenti internazionali: corsi in inglese, eventi di accoglienza ESN (Erasmus Student Network), un centro storico piccolo e walkable, trasporti pubblici economici, alloggi studenteschi diffusi. E soprattutto, una vita notturna che non si ferma mai.'
        },
        {
          h2: 'Quanto costa e cosa è incluso',
          p: 'Il prezzo è 25€ a persona — tutto incluso: shot di benvenuto in ogni locale (4 in totale), ingresso in 4 pub selezionati, giochi alcolici, sconti esclusivi sui drink, ingresso saltafila in discoteca a fine serata. Nessun dato personale richiesto, nessun pagamento anticipato: scegli data e numero di persone sul sito e sei a posto.'
        },
        {
          h2: 'Cosa aspettarsi dalla serata',
          p: 'Ritrovo 21:00 in Via del Pratello. Prima tappa: welcome shot e presentazioni. Seconda e terza tappa: beer pong e sconti sui drink, il gruppo inizia a socializzare seriamente. Quarta tappa: ultimo drink insieme. Verso le 00:30-01:00 ci si sposta tutti insieme in discoteca con ingresso gratuito e saltafila. Si finisce verso le 2-3 di notte.'
        },
        {
          h2: 'Lingua: non devi parlare italiano',
          p: 'Le guide parlano inglese, italiano e spagnolo. La maggior parte dei partecipanti parla inglese — è il linguaggio "franco" del pub crawl. Se sei appena arrivato e non sai l\'italiano, non è un problema.'
        }
      ],
      cta: 'Prenota la tua serata Erasmus a 25€'
    }
  ]
};

module.exports = articles;
