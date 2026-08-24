// Articoli long-tail SEO: landing pages dedicate ad una singola query search.
// Ciascuno linka internamente alla home e viceversa.
// Strutturato per essere renderizzato con renderArticle() in render.js.

const articles = {
  it: [
    {
      key: 'best-pubs',
      slug: 'migliori-pub-bologna',
      title: 'Migliori Pub di Bologna: Guida al Centro Storico 2026',
      description: 'I migliori pub di Bologna: i 5 locali imperdibili del centro storico e la zona universitaria, tra birra artigianale e prezzi da studente.',
      keywords: 'migliori pub bologna, pub centro storico bologna, dove bere bologna, locali bologna universitari, bar zona universitaria bologna, craft beer bologna, birra artigianale bologna',
      h1: 'I migliori pub di Bologna: la guida 2026',
      intro: "Bologna vanta una delle scene di pub e bar più vive d'Italia. Tra il centro storico, i portici e la zona universitaria trovi oltre 100 locali dove bere un buon drink. Ecco la guida ai migliori pub di Bologna, dai più storici alle nuove aperture di craft beer.",
      sections: [
        {
          h2: 'Il centro storico — il cuore dei pub di Bologna',
          p: 'Il centro storico è il cuore della vita notturna bolognese. Nel giro di pochi isolati, tra i portici e le piazze, studenti universitari, Erasmus e turisti si mescolano in una rete di locali che va dalle birrerie storiche ai cocktail bar più nuovi. Attraversare il centro di venerdì sera significa incrociare un fiume di gente: bar, musica dal vivo, gruppi fuori dai locali con il bicchiere in mano, è lo stile della movida bolognese autentica.'
        },
        {
          h2: 'I 5 pub imperdibili del centro',
          p: 'Tra i locali più amati del centro ci sono storiche osterie con birra alla spina a prezzo studentesco, pub inglesi con schermi per eventi sportivi, cocktail bar con terrazze, birrifici artigianali con tap list che cambia ogni settimana, e locali con musica dal vivo tutte le sere. Ogni locale ha il suo pubblico: la bellezza del centro di Bologna è che in una serata li attraversi tutti restando sempre a pochi minuti a piedi.'
        },
        {
          h2: 'Zamboni, Piazza Verdi e la zona universitaria',
          p: 'La zona universitaria (Piazza Verdi e Via Zamboni), a due passi da Piazza 8 Agosto, è il secondo polo della nightlife. Qui i locali sono più piccoli, più economici, e il pubblico è composto quasi esclusivamente da studenti. Nelle sere di apertura dell\'anno accademico la zona si riempie di Erasmus in cerca di compagnia. I prezzi sono tra i più bassi di Bologna.'
        },
        {
          h2: 'Perché partecipare a un Pub Crawl invece di girare da solo',
          p: 'Scegliere il pub giusto a Bologna può essere complicato: i locali cambiano pubblico a seconda della sera, alcuni hanno prezzi turistici, altri sono affollati al punto da non riuscire a entrare. Un pub crawl organizzato risolve il problema: visiti 4 locali selezionati per essere i più vivaci di quella sera, paghi 25€ sul posto (contanti, Revolut o PayPal) che includono shot di benvenuto in ogni locale, beer pong, sconti esclusivi sui drink e ingresso saltafila in discoteca. E in più conosci subito un gruppo di persone da tutto il mondo.'
        }
      ],
      cta: 'Prenota il Pub Crawl Bologna a 25€'
    },

    {
      key: 'night-guide',
      slug: 'cosa-fare-bologna-sera',
      title: 'Cosa Fare a Bologna di Sera: 10 Idee per la Serata',
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
          p: 'Se vuoi conoscere Bologna di notte nel modo più veloce e divertente, il pub crawl è l\'opzione ideale: 4 pub, shot di benvenuto in ogni locale, giochi alcolici come beer pong, sconti sui drink e ingresso gratuito in discoteca. Ritrovo ore 21:00 in Piazza 8 Agosto. Il Pub Crawl Bologna si svolge ogni giovedì, venerdì e sabato a 25€ tutto incluso.'
        },
        {
          h2: '3. Il centro storico a piedi',
          p: "Il centro storico è la zona più vivace della città di notte. Percorrerlo a piedi sotto i portici, da Piazza Maggiore verso la zona universitaria, significa attraversare decine di locali in pochi minuti, con musica, gente fuori dai bar, artisti di strada. Un'esperienza che vale di per sé."
        },
        {
          h2: '4. Cena tipica bolognese',
          p: 'Bologna è la capitale gastronomica d\'Italia. Prima di una serata lunga, cena con tagliatelle al ragù, tortellini in brodo, lasagna verde o una piadina ripiena. I prezzi nei ristoranti della zona universitaria sono più accessibili che nelle piazze principali.'
        },
        {
          h2: '5. Concerti e musica dal vivo',
          p: 'Bologna ha una scena musicale storica: dai jazz club al TPO, dalla Cantina Bentivoglio ai locali del centro con musica dal vivo, ogni sera c\'è qualcosa. Controlla l\'agenda del Locomotiv Club per concerti indie e rock.'
        },
        {
          h2: '6. Discoteche e club',
          p: 'Le discoteche di Bologna si concentrano intorno al centro e nella zona fieristica. Se fai un pub crawl l\'ingresso in discoteca è già incluso, ma in autonomia i locali più frequentati sono intorno ai 15-20€ di ingresso con drink.'
        },
        {
          h2: "7. Le Due Torri e il centro illuminato: la passeggiata gratis",
          p: "Non tutto a Bologna costa. Dopo cena, la passeggiata dalle Due Torri verso Piazza Maggiore, con Palazzo d'Accursio illuminato e i portici mezzi vuoti, è una delle cose più belle da fare in città e non costa nulla. Aggiungi una deviazione alla finestrella di Via Piella, da cui si vede il canale delle Moline: di sera, con la luce giusta, è l'angolo più fotografato di Bologna."
        },
        {
          h2: "8. Street food serale nel Quadrilatero",
          p: "Il Quadrilatero, il reticolo di viuzze dietro Piazza Maggiore, di giorno è il mercato storico e di sera diventa una zona di banchi, gastronomie e osterie aperte fino a tardi. Il Mercato di Mezzo è la tappa più comoda: tre piani di banconi con birra artigianale, crescentine, tigelle e fritto misto, a prezzi ragionevoli e senza bisogno di prenotare."
        },
        {
          h2: "9. Eventi universitari, serate ESN e feste a tema",
          p: "Con oltre 80.000 studenti, Bologna ha un calendario che non si ferma mai: serate ESN per gli Erasmus, feste di facoltà, quiz night in inglese nei pub del centro, karaoke e tornei di beer pong. La maggior parte si annuncia sui gruppi Facebook e Instagram degli studenti pochi giorni prima: conviene cercarli appena arrivi in città."
        },
        {
          h2: "10. Cinema all'aperto in Piazza Maggiore d'estate",
          p: "Da fine giugno ad agosto Piazza Maggiore diventa una sala all'aperto: Sotto le Stelle del Cinema proietta ogni sera classici restaurati e nuove uscite su uno schermo gigante, con centinaia di sedie e ingresso gratuito. È il modo più tipicamente bolognese di passare una sera d'estate, e finisce abbastanza presto da proseguire poi con un giro dei pub."
        }
      ],
      cta: 'Scopri il Pub Crawl Bologna'
    },

    {
      key: 'erasmus',
      slug: 'pub-crawl-bologna-erasmus',
      title: 'Pub Crawl Bologna per Erasmus: Conoscere Gente Subito',
      description: 'Pub crawl per Erasmus a Bologna: come funziona, quanto costa (25€), dove si parte e perché è il modo più veloce per fare amicizia.',
      keywords: 'pub crawl bologna erasmus, erasmus bologna, bologna studenti, conoscere gente bologna, erasmus party bologna, serata erasmus bologna, università bologna vita notturna',
      h1: 'Pub Crawl Bologna per studenti Erasmus',
      intro: 'Sei appena arrivato a Bologna in Erasmus e cerchi il modo più veloce per conoscere gente nuova? Il pub crawl è l\'attività di benvenuto perfetta per studenti internazionali. Ecco come funziona e perché funziona.',
      sections: [
        {
          h2: 'Perché il pub crawl è perfetto per gli Erasmus',
          p: 'Il pub crawl riunisce ogni sera un gruppo eterogeneo di persone — Erasmus, turisti, gente in viaggio, studenti italiani. Non devi conoscere nessuno prima: ti presenti al ritrovo in Piazza 8 Agosto alle 21:00, ti offrono uno shot di benvenuto, parti con il gruppo. Gli shot gratuiti in ogni locale e i giochi alcolici (beer pong, drunk cards) rendono impossibile non fare amicizia. Entro la seconda tappa conoscerai tutto il gruppo per nome.'
        },
        {
          h2: 'Bologna, la città Erasmus per eccellenza',
          p: 'Bologna accoglie ogni anno oltre 2.000 studenti Erasmus da tutta Europa. Con l\'Università più antica del mondo occidentale, la città ha infrastrutture pensate per studenti internazionali: corsi in inglese, eventi di accoglienza ESN (Erasmus Student Network), un centro storico piccolo e walkable, trasporti pubblici economici, alloggi studenteschi diffusi. E soprattutto, una vita notturna che non si ferma mai.'
        },
        {
          h2: 'Quanto costa e cosa è incluso',
          p: 'Il prezzo è 25€ a persona — tutto incluso: shot di benvenuto in ogni locale (4 in totale), ingresso in 4 pub selezionati, giochi alcolici, sconti esclusivi sui drink, ingresso saltafila in discoteca a fine serata. Nessun pagamento online: prenoti ora e paghi dopo, direttamente al ritrovo, in contanti, Revolut o PayPal. Ti basta scegliere data e numero di persone sul sito.'
        },
        {
          h2: 'Cosa aspettarsi dalla serata',
          p: 'Ritrovo 21:00 in Piazza 8 Agosto. Prima tappa: welcome shot e presentazioni. Seconda e terza tappa: beer pong e sconti sui drink, il gruppo inizia a socializzare seriamente. Quarta tappa: ultimo drink insieme. Verso le 00:30-01:00 ci si sposta tutti insieme in discoteca con ingresso gratuito e saltafila. Si finisce verso le 2-3 di notte.'
        },
        {
          h2: 'Lingua: non devi parlare italiano',
          p: 'Le guide parlano inglese, italiano e spagnolo. La maggior parte dei partecipanti parla inglese — è il linguaggio "franco" del pub crawl. Se sei appena arrivato e non sai l\'italiano, non è un problema.'
        }
      ],
      cta: 'Prenota la tua serata Erasmus a 25€'
    }
  ],

  en: [
    {
      key: 'best-pubs',
      slug: 'best-pubs-bologna',
      title: 'Best Pubs in Bologna: Guide to the Old Town Bars 2026',
      description: 'Where to drink in Bologna? Updated guide to the best pubs and bars in the old town and the university district: craft beer, student prices, live music.',
      keywords: 'best pubs bologna, bologna bars, where to drink in bologna, bologna old town bars, craft beer bologna, cheap drinks bologna, bologna university district',
      h1: 'The best pubs in Bologna: the 2026 guide',
      intro: "Bologna has one of the liveliest pub and bar scenes in Italy. Between the old town, the porticoes and the university district you will find more than 100 places to grab a drink. Here is the guide to the best pubs in Bologna, from the historic beer halls to the newest craft beer taprooms.",
      sections: [
        {
          h2: 'The old town — the heart of Bologna nightlife',
          p: "The old town is where the Bologna night happens. Within a few blocks, under the porticoes and around the squares, university students, Erasmus students and travellers mix in a network of venues that goes from historic beer halls to brand new cocktail bars. Walking through the centre on a Friday night means crossing a river of people: bars, live music, groups standing outside with a glass in hand. This is authentic Bolognese nightlife."
        },
        {
          h2: 'The 5 unmissable pubs in the centre',
          p: "The most loved venues in the centre include historic osterie with draught beer at student prices, English style pubs with screens for football, cocktail bars with terraces, craft breweries with a tap list that changes every week, and places with live music every night. Each venue has its own crowd: the beauty of central Bologna is that in one evening you can walk through all of them and never be more than a few minutes away on foot."
        },
        {
          h2: 'Zamboni, Piazza Verdi and the university district',
          p: "The university district around Piazza Verdi and Via Zamboni, a two minute walk from Piazza 8 Agosto, is the second nightlife hub. Venues here are smaller, cheaper, and the crowd is almost entirely made of students. When the academic year starts the area fills up with Erasmus students looking for company. Prices are among the lowest in the city."
        },
        {
          h2: 'Why join a pub crawl instead of going on your own',
          p: "Picking the right pub in Bologna can be tricky: venues change crowd depending on the night, some have tourist prices, others are so packed you cannot get in. An organised pub crawl solves the problem: you visit 4 venues picked for being the liveliest that night, you pay 25 euro on the spot (cash, Revolut or PayPal) and that includes a welcome shot in every bar, beer pong, exclusive drink discounts and skip the line club entry. On top of that you instantly meet a group of people from all over the world."
        }
      ],
      cta: 'Book the Bologna Pub Crawl for 25€'
    },

    {
      key: 'night-guide',
      slug: 'things-to-do-bologna-night',
      title: 'Things to Do in Bologna at Night: 10 Ideas',
      description: 'What to do in Bologna at night? Complete 2026 guide: best bars, pub crawl, clubs, typical dinners, student events and free things to do after dark.',
      keywords: 'things to do bologna night, bologna at night, bologna nightlife, what to do in bologna evening, bologna friday night, bologna saturday night, bologna clubs',
      h1: 'Things to do in Bologna at night: the 2026 guide',
      intro: "You are in Bologna and you do not know what to do tonight? Between pub crawls, clubs, traditional dinners, concerts and aperitivo, the city has plenty of options every night of the week. Here are 10 ideas to make the most of Bologna after dark.",
      sections: [
        {
          h2: '1. Aperitivo in Piazza Maggiore or Piazza Santo Stefano',
          p: "The Bolognese aperitivo is a ritual: at 6:30 PM the bars of the old town fill up with people sipping an Aperol Spritz or a glass of Pignoletto while the squares light up. Piazza Maggiore and Piazza Santo Stefano are the most iconic spots, at around 7 to 10 euro for a drink with snacks included."
        },
        {
          h2: '2. Pub crawl: the most fun way to experience the night',
          p: "If you want to get to know Bologna by night in the fastest and most fun way, the pub crawl is the way to go: 4 pubs, a welcome shot in every venue, drinking games like beer pong, drink discounts and free club entry. Meeting point at 9:00 PM in Piazza 8 Agosto. The Bologna Pub Crawl runs every Thursday, Friday and Saturday for 25 euro, all included."
        },
        {
          h2: '3. The old town on foot',
          p: "The old town is the liveliest area of the city at night. Walking it under the porticoes, from Piazza Maggiore towards the university district, means passing dozens of venues in a few minutes, with music, people outside the bars and street performers. An experience that is worth it on its own."
        },
        {
          h2: '4. A traditional Bolognese dinner',
          p: "Bologna is the food capital of Italy. Before a long night out, have dinner with tagliatelle al ragu, tortellini in brodo, green lasagna or a stuffed piadina. Restaurants in the university district are noticeably cheaper than the ones on the main squares."
        },
        {
          h2: '5. Live music and concerts',
          p: "Bologna has a historic music scene: from jazz clubs to the TPO, from Cantina Bentivoglio to the small venues in the centre with live music, there is something on every night. Check the Locomotiv Club listings for indie and rock gigs."
        },
        {
          h2: '6. Clubs and dancing',
          p: "Bologna clubs are concentrated around the centre and the exhibition area. If you join a pub crawl the club entry is already included, otherwise the busiest venues charge around 15 to 20 euro for entry with a drink."
        },
        {
          h2: "7. The Two Towers and the lit-up old town: the free walk",
          p: "Not everything in Bologna costs money. After dinner, the walk from the Two Towers towards Piazza Maggiore, with Palazzo d'Accursio lit up and the porticoes half empty, is one of the finest things to do in the city and it is free. Add a detour to the little window on Via Piella, where you can see the Moline canal: at night, with the right light, it is the most photographed corner of Bologna."
        },
        {
          h2: "8. Late night street food in the Quadrilatero",
          p: "The Quadrilatero, the grid of narrow lanes behind Piazza Maggiore, is the historic market by day and turns into a strip of food stalls, delis and osterie that stay open late. Mercato di Mezzo is the easiest stop: three floors of counters with craft beer, crescentine, tigelle and fried snacks, at reasonable prices and with no booking needed."
        },
        {
          h2: "9. Student events, ESN nights and themed parties",
          p: "With more than 80,000 students, Bologna has a calendar that never stops: ESN nights for Erasmus students, faculty parties, quiz nights in English in the pubs downtown, karaoke and beer pong tournaments. Most of them are announced on student Facebook and Instagram groups only a few days ahead, so it is worth tracking those down as soon as you arrive."
        },
        {
          h2: "10. Open air cinema in Piazza Maggiore in summer",
          p: "From late June to August, Piazza Maggiore becomes an open air cinema: Sotto le Stelle del Cinema screens restored classics and new releases every night on a giant screen, with hundreds of chairs and free entry. It is the most typically Bolognese way to spend a summer evening, and it ends early enough to carry on with a pub crawl afterwards."
        }
      ],
      cta: 'Discover the Bologna Pub Crawl'
    },

    {
      key: 'erasmus',
      slug: 'bologna-pub-crawl-erasmus',
      title: 'Bologna Pub Crawl for Erasmus: Meet People Fast',
      description: 'Bologna Pub Crawl for Erasmus students: how it works, how much it costs (€25), where it starts and why it is the fastest way to make friends.',
      keywords: 'bologna pub crawl erasmus, erasmus bologna, bologna students nightlife, meet people bologna, erasmus party bologna, bologna international students, university of bologna nightlife',
      h1: 'Bologna Pub Crawl for Erasmus students',
      intro: "You have just arrived in Bologna for your Erasmus and you are looking for the fastest way to meet new people? The pub crawl is the perfect welcome activity for international students. Here is how it works and why it works.",
      sections: [
        {
          h2: 'Why a pub crawl is perfect for Erasmus students',
          p: "Every night the pub crawl brings together a mixed group of people: Erasmus students, travellers, backpackers and Italian students. You do not need to know anyone beforehand. You show up at the meeting point in Piazza 8 Agosto at 9:00 PM, you get a welcome shot and you leave with the group. Free shots in every venue and drinking games like beer pong and drunk cards make it impossible not to make friends. By the second stop you will know everyone in the group by name."
        },
        {
          h2: 'Bologna, the Erasmus city par excellence',
          p: "Bologna welcomes more than 2,000 Erasmus students from all over Europe every year. Home to the oldest university in the western world, the city is built for international students: courses in English, ESN welcome events, a small walkable old town, cheap public transport and student housing everywhere. And above all, a nightlife that never stops."
        },
        {
          h2: 'How much it costs and what is included',
          p: "The price is 25 euro per person, all included: a welcome shot in every venue (4 in total), entry to 4 selected pubs, drinking games, exclusive drink discounts and skip the line club entry at the end of the night. No online payment: you book now and pay later, right at the meeting point, in cash, Revolut or PayPal. All you need to do is pick a date and the number of people on the website."
        },
        {
          h2: 'What to expect from the night',
          p: "Meeting point at 9:00 PM in Piazza 8 Agosto. First stop: welcome shot and introductions. Second and third stop: beer pong and drink discounts, the group really starts to mix. Fourth stop: one last drink together. Around 12:30 to 1:00 AM everyone moves to the club with free skip the line entry. The night ends around 2 or 3 AM."
        },
        {
          h2: 'Language: you do not need to speak Italian',
          p: "The guides speak English, Italian and Spanish. Most participants speak English, which is the lingua franca of the pub crawl. If you have just landed and you do not speak a word of Italian, that is not a problem at all."
        }
      ],
      cta: 'Book your Erasmus night for 25€'
    }
  ],

  es: [
    {
      key: 'best-pubs',
      slug: 'mejores-pubs-bolonia',
      title: 'Mejores Pubs de Bolonia: Guía del Centro Histórico 2026',
      description: 'Dónde tomar algo en Bolonia: los mejores pubs del centro histórico y la zona universitaria, con cerveza artesanal y precios de estudiante.',
      keywords: 'mejores pubs bolonia, bares bolonia, donde beber en bolonia, bolonia centro historico bares, cerveza artesanal bolonia, copas baratas bolonia, zona universitaria bolonia',
      h1: 'Los mejores pubs de Bolonia: la guía 2026',
      intro: "Bolonia tiene una de las escenas de pubs y bares más vivas de Italia. Entre el centro histórico, los pórticos y la zona universitaria hay más de 100 locales donde tomar algo. Esta es la guía de los mejores pubs de Bolonia, desde las cervecerías históricas hasta las nuevas aperturas de cerveza artesanal.",
      sections: [
        {
          h2: 'El centro histórico, el corazón de la noche boloñesa',
          p: "El centro histórico es donde late la noche de Bolonia. En pocas manzanas, entre los pórticos y las plazas, estudiantes universitarios, Erasmus y viajeros se mezclan en una red de locales que va de las cervecerías históricas a los cócteles más nuevos. Cruzar el centro un viernes por la noche significa encontrarse un río de gente: bares, música en directo y grupos fuera de los locales con el vaso en la mano. Así es la movida boloñesa auténtica."
        },
        {
          h2: 'Los 5 pubs imprescindibles del centro',
          p: "Entre los locales más queridos del centro hay osterie históricas con cerveza de barril a precio de estudiante, pubs de estilo inglés con pantallas para el fútbol, coctelerías con terraza, fábricas de cerveza artesanal con una carta que cambia cada semana y locales con música en directo todas las noches. Cada uno tiene su público: lo bonito del centro de Bolonia es que en una sola noche los recorres todos sin alejarte más de unos minutos a pie."
        },
        {
          h2: 'Zamboni, Piazza Verdi y la zona universitaria',
          p: "La zona universitaria de Piazza Verdi y Via Zamboni, a dos pasos de Piazza 8 Agosto, es el segundo polo de la noche. Aquí los locales son más pequeños, más baratos, y el público es casi todo estudiante. Cuando empieza el curso académico la zona se llena de Erasmus buscando compañía. Los precios están entre los más bajos de la ciudad."
        },
        {
          h2: 'Por qué hacer un pub crawl en lugar de ir por libre',
          p: "Elegir el pub adecuado en Bolonia puede ser complicado: los locales cambian de público según la noche, algunos tienen precios turísticos y otros están tan llenos que no consigues entrar. Un pub crawl organizado resuelve el problema: visitas 4 locales elegidos por ser los más animados de esa noche, pagas 25 euros en el momento (efectivo, Revolut o PayPal) e incluye chupito de bienvenida en cada bar, beer pong, descuentos exclusivos en las copas y entrada sin cola a la discoteca. Y además conoces al instante a gente de todo el mundo."
        }
      ],
      cta: 'Reserva el Pub Crawl Bolonia por 25€'
    },

    {
      key: 'night-guide',
      slug: 'que-hacer-bolonia-noche',
      title: 'Qué Hacer en Bolonia por la Noche: 10 Ideas',
      description: '¿Qué hacer en Bolonia por la noche? Guía completa 2026: mejores bares, pub crawl, discotecas, cenas típicas, eventos universitarios y planes gratis.',
      keywords: 'que hacer bolonia noche, bolonia de noche, vida nocturna bolonia, salir en bolonia, bolonia viernes noche, bolonia sabado noche, discotecas bolonia',
      h1: 'Qué hacer en Bolonia por la noche: la guía 2026',
      intro: "¿Estás en Bolonia y no sabes qué hacer esta noche? Entre pub crawl, discotecas, cenas típicas, conciertos y aperitivos, la ciudad ofrece muchísimas opciones cada noche de la semana. Aquí van 10 ideas para vivir Bolonia de noche al máximo.",
      sections: [
        {
          h2: '1. Aperitivo en Piazza Maggiore o Piazza Santo Stefano',
          p: "El aperitivo boloñés es un rito: a las 18:30 los locales del centro histórico se llenan de gente que toma un Aperol Spritz o una copa de Pignoletto mirando las plazas iluminadas. Piazza Maggiore y Piazza Santo Stefano son los sitios más icónicos, con precios de 7 a 10 euros por copa con picoteo incluido."
        },
        {
          h2: '2. Pub crawl: la forma más divertida de vivir la noche',
          p: "Si quieres conocer Bolonia de noche de la forma más rápida y divertida, el pub crawl es la opción ideal: 4 pubs, chupito de bienvenida en cada local, juegos como el beer pong, descuentos en las copas y entrada gratis a la discoteca. Punto de encuentro a las 21:00 en Piazza 8 Agosto. El Pub Crawl Bolonia se hace cada jueves, viernes y sábado por 25 euros, todo incluido."
        },
        {
          h2: '3. El centro histórico a pie',
          p: "El centro histórico es la zona más animada de la ciudad por la noche. Recorrerlo a pie bajo los pórticos, desde Piazza Maggiore hacia la zona universitaria, significa cruzar decenas de locales en pocos minutos, con música, gente fuera de los bares y artistas callejeros. Una experiencia que vale por sí sola."
        },
        {
          h2: '4. Cena típica boloñesa',
          p: "Bolonia es la capital gastronómica de Italia. Antes de una noche larga, cena unas tagliatelle al ragú, tortellini in brodo, lasaña verde o una piadina rellena. Los restaurantes de la zona universitaria son bastante más económicos que los de las plazas principales."
        },
        {
          h2: '5. Conciertos y música en directo',
          p: "Bolonia tiene una escena musical histórica: de los clubes de jazz al TPO, de la Cantina Bentivoglio a los locales del centro con música en vivo, cada noche hay algo. Consulta la agenda del Locomotiv Club para conciertos indie y rock."
        },
        {
          h2: '6. Discotecas y clubes',
          p: "Las discotecas de Bolonia se concentran alrededor del centro y de la zona de la feria. Si haces un pub crawl la entrada ya está incluida, pero por tu cuenta los locales más concurridos cuestan entre 15 y 20 euros de entrada con copa."
        },
        {
          h2: "7. Las Dos Torres y el centro iluminado: el paseo gratis",
          p: "No todo en Bolonia cuesta dinero. Después de cenar, el paseo desde las Dos Torres hacia Piazza Maggiore, con el Palazzo d'Accursio iluminado y los pórticos medio vacíos, es una de las cosas más bonitas que se pueden hacer en la ciudad y no cuesta nada. Añade un desvío a la ventanita de Via Piella, desde donde se ve el canal delle Moline: de noche, con la luz adecuada, es el rincón más fotografiado de Bolonia."
        },
        {
          h2: "8. Comida callejera nocturna en el Quadrilatero",
          p: "El Quadrilatero, la retícula de callejones detrás de Piazza Maggiore, de día es el mercado histórico y de noche se convierte en una zona de puestos, tiendas de comida y osterie abiertas hasta tarde. El Mercato di Mezzo es la parada más cómoda: tres plantas de barras con cerveza artesanal, crescentine, tigelle y fritura, a precios razonables y sin necesidad de reservar."
        },
        {
          h2: "9. Eventos universitarios, noches ESN y fiestas temáticas",
          p: "Con más de 80.000 estudiantes, Bolonia tiene una agenda que no para nunca: noches ESN para los Erasmus, fiestas de facultad, quiz nights en inglés en los pubs del centro, karaoke y torneos de beer pong. La mayoría se anuncia en los grupos de Facebook e Instagram de los estudiantes pocos días antes, así que conviene buscarlos nada más llegar."
        },
        {
          h2: "10. Cine al aire libre en Piazza Maggiore en verano",
          p: "De finales de junio a agosto, Piazza Maggiore se convierte en un cine al aire libre: Sotto le Stelle del Cinema proyecta cada noche clásicos restaurados y estrenos en una pantalla gigante, con cientos de sillas y entrada gratis. Es la forma más típicamente boloñesa de pasar una noche de verano, y acaba lo bastante pronto como para seguir después con una ruta de pubs."
        }
      ],
      cta: 'Descubre el Pub Crawl Bolonia'
    },

    {
      key: 'erasmus',
      slug: 'pub-crawl-bolonia-erasmus',
      title: 'Pub Crawl Bolonia para Erasmus: Conoce Gente Ya',
      description: 'Pub crawl para Erasmus en Bolonia: cómo funciona, cuánto cuesta (25€), dónde empieza y por qué es la forma más rápida de hacer amigos.',
      keywords: 'pub crawl bolonia erasmus, erasmus bolonia, estudiantes bolonia, conocer gente bolonia, fiesta erasmus bolonia, noche erasmus bolonia, universidad bolonia vida nocturna',
      h1: 'Pub Crawl Bolonia para estudiantes Erasmus',
      intro: "¿Acabas de llegar a Bolonia de Erasmus y buscas la forma más rápida de conocer gente nueva? El pub crawl es la actividad de bienvenida perfecta para estudiantes internacionales. Aquí te contamos cómo funciona y por qué funciona.",
      sections: [
        {
          h2: 'Por qué el pub crawl es perfecto para los Erasmus',
          p: "El pub crawl reúne cada noche a un grupo heterogéneo: Erasmus, turistas, gente de viaje y estudiantes italianos. No hace falta conocer a nadie antes: te presentas en el punto de encuentro de Piazza 8 Agosto a las 21:00, te dan un chupito de bienvenida y sales con el grupo. Los chupitos gratis en cada local y los juegos (beer pong, cartas) hacen imposible no hacer amigos. En la segunda parada ya conocerás a todo el grupo por su nombre."
        },
        {
          h2: 'Bolonia, la ciudad Erasmus por excelencia',
          p: "Bolonia acoge cada año a más de 2.000 estudiantes Erasmus de toda Europa. Con la universidad más antigua del mundo occidental, la ciudad está pensada para estudiantes internacionales: cursos en inglés, eventos de acogida de ESN, un centro histórico pequeño y caminable, transporte público barato y alojamiento estudiantil por todas partes. Y sobre todo, una vida nocturna que no para nunca."
        },
        {
          h2: 'Cuánto cuesta y qué incluye',
          p: "El precio es de 25 euros por persona, todo incluido: chupito de bienvenida en cada local (4 en total), entrada a 4 pubs seleccionados, juegos, descuentos exclusivos en las copas y entrada sin cola a la discoteca al final de la noche. Sin pago online: reservas ahora y pagas después, directamente en el punto de encuentro, en efectivo, Revolut o PayPal. Solo tienes que elegir fecha y número de personas en la web."
        },
        {
          h2: 'Qué esperar de la noche',
          p: "Encuentro a las 21:00 en Piazza 8 Agosto. Primera parada: chupito de bienvenida y presentaciones. Segunda y tercera parada: beer pong y descuentos, el grupo empieza a socializar de verdad. Cuarta parada: última copa juntos. Sobre las 00:30 o 01:00 nos movemos todos a la discoteca con entrada gratis y sin cola. La noche acaba sobre las 2 o las 3."
        },
        {
          h2: 'Idioma: no hace falta hablar italiano',
          p: "Los guías hablan inglés, italiano y español. La mayoría de los participantes habla inglés, que es la lengua franca del pub crawl. Si acabas de llegar y no sabes italiano, no es ningún problema."
        }
      ],
      cta: 'Reserva tu noche Erasmus por 25€'
    }
  ],

  de: [
    {
      key: 'best-pubs',
      slug: 'beste-pubs-bologna',
      title: 'Beste Pubs in Bologna: Bars der Altstadt, Guide 2026',
      description: 'Wo trinkt man in Bologna? Die besten Pubs und Bars in der Altstadt und im Universitätsviertel: Craft Beer, Studentenpreise und Live-Musik.',
      keywords: 'beste pubs bologna, bars bologna, wo trinken in bologna, bologna altstadt bars, craft beer bologna, guenstige drinks bologna, universitaetsviertel bologna',
      h1: 'Die besten Pubs in Bologna: der Guide 2026',
      intro: "Bologna hat eine der lebendigsten Pub- und Barszenen Italiens. Zwischen Altstadt, Arkaden und Universitätsviertel gibt es über 100 Lokale, in denen man gut trinken kann. Hier ist der Guide zu den besten Pubs in Bologna, von den historischen Bierhäusern bis zu den neuesten Craft-Beer-Läden.",
      sections: [
        {
          h2: 'Die Altstadt — das Herz der Bologneser Nacht',
          p: "In der Altstadt spielt sich die Nacht von Bologna ab. Innerhalb weniger Straßenzüge, unter den Arkaden und rund um die Plätze, mischen sich Studierende, Erasmus-Studenten und Reisende in einem Netz von Lokalen, das von historischen Bierhäusern bis zu ganz neuen Cocktailbars reicht. Wer am Freitagabend durch das Zentrum läuft, trifft auf einen Strom von Menschen: Bars, Live-Musik, Gruppen mit dem Glas in der Hand vor den Lokalen. Das ist das echte Bologneser Nachtleben."
        },
        {
          h2: 'Die 5 Pubs im Zentrum, die man nicht verpassen darf',
          p: "Zu den beliebtesten Lokalen im Zentrum gehören historische Osterie mit Fassbier zu Studentenpreisen, Pubs im englischen Stil mit Bildschirmen für Fußball, Cocktailbars mit Terrasse, Craft-Brauereien mit wöchentlich wechselnder Zapfliste und Lokale mit Live-Musik an jedem Abend. Jedes Lokal hat sein eigenes Publikum: das Schöne am Zentrum von Bologna ist, dass man an einem Abend alle abklappern kann und nie mehr als ein paar Minuten zu Fuß entfernt ist."
        },
        {
          h2: 'Zamboni, Piazza Verdi und das Universitätsviertel',
          p: "Das Universitätsviertel rund um die Piazza Verdi und die Via Zamboni, nur zwei Schritte von der Piazza 8 Agosto entfernt, ist der zweite Nachtleben-Hotspot. Die Lokale hier sind kleiner, günstiger, und das Publikum besteht fast ausschließlich aus Studierenden. Zu Semesterbeginn füllt sich die Gegend mit Erasmus-Studenten auf der Suche nach Anschluss. Die Preise gehören zu den niedrigsten der Stadt."
        },
        {
          h2: 'Warum ein Pub Crawl besser ist als allein loszuziehen',
          p: "Das richtige Pub in Bologna zu finden, kann knifflig sein: die Lokale wechseln je nach Abend ihr Publikum, manche haben Touristenpreise, andere sind so voll, dass man nicht hineinkommt. Ein organisierter Pub Crawl löst das Problem: du besuchst 4 Lokale, die für diesen Abend als die lebendigsten ausgewählt wurden, zahlst 25 Euro vor Ort (bar, Revolut oder PayPal), und das schließt einen Welcome-Shot in jeder Bar, Beer Pong, exklusive Drink-Rabatte und den Club-Eintritt ohne Anstehen ein. Und du lernst sofort Leute aus aller Welt kennen."
        }
      ],
      cta: 'Buche den Bologna Pub Crawl für 25€'
    },

    {
      key: 'night-guide',
      slug: 'bologna-bei-nacht',
      title: 'Bologna bei Nacht: 10 Ideen für einen unvergesslichen Abend',
      description: 'Was kann man abends in Bologna machen? Kompletter Guide 2026: beste Bars, Pub Crawl, Clubs, typische Abendessen, Studentenevents und kostenlose Ideen.',
      keywords: 'bologna bei nacht, was machen bologna abends, nachtleben bologna, ausgehen bologna, bologna freitagabend, bologna samstagabend, clubs bologna',
      h1: 'Bologna bei Nacht: der Guide 2026',
      intro: "Du bist in Bologna und weißt nicht, was du heute Abend machen sollst? Zwischen Pub Crawl, Clubs, typischen Abendessen, Konzerten und Aperitivo bietet die Stadt an jedem Wochentag jede Menge Möglichkeiten. Hier sind 10 Ideen, um Bologna bei Nacht richtig zu erleben.",
      sections: [
        {
          h2: '1. Aperitivo auf der Piazza Maggiore oder Piazza Santo Stefano',
          p: "Der Bologneser Aperitivo ist ein Ritual: um 18:30 Uhr füllen sich die Lokale der Altstadt mit Leuten, die einen Aperol Spritz oder ein Glas Pignoletto trinken, während die Plätze beleuchtet werden. Piazza Maggiore und Piazza Santo Stefano sind die ikonischsten Orte, mit Preisen um 7 bis 10 Euro pro Drink samt Snacks."
        },
        {
          h2: '2. Pub Crawl: der lustigste Weg durch die Nacht',
          p: "Wenn du Bologna bei Nacht am schnellsten und lustigsten kennenlernen willst, ist der Pub Crawl die ideale Option: 4 Pubs, Welcome-Shot in jedem Lokal, Trinkspiele wie Beer Pong, Drink-Rabatte und freier Club-Eintritt. Treffpunkt um 21:00 Uhr auf der Piazza 8 Agosto. Der Bologna Pub Crawl findet jeden Donnerstag, Freitag und Samstag statt, für 25 Euro alles inklusive."
        },
        {
          h2: '3. Die Altstadt zu Fuß',
          p: "Die Altstadt ist nachts das lebendigste Viertel der Stadt. Sie unter den Arkaden zu durchqueren, von der Piazza Maggiore Richtung Universitätsviertel, heißt in wenigen Minuten an Dutzenden Lokalen vorbeizukommen, mit Musik, Leuten vor den Bars und Straßenkünstlern. Ein Erlebnis für sich."
        },
        {
          h2: '4. Typisch Bologneser Abendessen',
          p: "Bologna ist die Gastronomiehauptstadt Italiens. Vor einer langen Nacht isst du am besten Tagliatelle al ragù, Tortellini in brodo, grüne Lasagne oder eine gefüllte Piadina. Die Restaurants im Universitätsviertel sind deutlich günstiger als die an den Hauptplätzen."
        },
        {
          h2: '5. Konzerte und Live-Musik',
          p: "Bologna hat eine historische Musikszene: von den Jazzclubs bis zum TPO, von der Cantina Bentivoglio bis zu den kleinen Lokalen im Zentrum mit Live-Musik ist jeden Abend etwas los. Schau ins Programm des Locomotiv Club für Indie- und Rockkonzerte."
        },
        {
          h2: '6. Clubs und Diskotheken',
          p: "Die Clubs von Bologna konzentrieren sich rund um das Zentrum und das Messegelände. Beim Pub Crawl ist der Club-Eintritt bereits inbegriffen, auf eigene Faust kosten die beliebtesten Läden etwa 15 bis 20 Euro Eintritt mit Getränk."
        },
        {
          h2: "7. Die Zwei Türme und die beleuchtete Altstadt: der Gratis-Spaziergang",
          p: "Nicht alles in Bologna kostet Geld. Der Spaziergang nach dem Abendessen von den Zwei Türmen zur Piazza Maggiore, mit dem beleuchteten Palazzo d'Accursio und den halbleeren Arkaden, gehört zum Schönsten, was die Stadt zu bieten hat, und ist umsonst. Nimm den Umweg über das kleine Fenster in der Via Piella mit, durch das man den Kanal delle Moline sieht: abends, bei passendem Licht, ist das der meistfotografierte Ort Bolognas."
        },
        {
          h2: "8. Street Food am Abend im Quadrilatero",
          p: "Das Quadrilatero, das Gassennetz hinter der Piazza Maggiore, ist tagsüber der historische Markt und wird abends zu einer Zone aus Ständen, Feinkostläden und Osterie, die bis spät geöffnet haben. Der Mercato di Mezzo ist der bequemste Stopp: drei Etagen Theken mit Craft Beer, Crescentine, Tigelle und Frittiertem, zu vernünftigen Preisen und ohne Reservierung."
        },
        {
          h2: "9. Uni-Events, ESN-Abende und Themenpartys",
          p: "Mit über 80.000 Studierenden hat Bologna einen Kalender, der nie stillsteht: ESN-Abende für Erasmus-Studenten, Fakultätspartys, Quiz Nights auf Englisch in den Pubs im Zentrum, Karaoke und Beer-Pong-Turniere. Das meiste wird nur wenige Tage vorher in den Facebook- und Instagram-Gruppen der Studierenden angekündigt: gleich nach der Ankunft danach zu suchen lohnt sich."
        },
        {
          h2: "10. Open-Air-Kino im Sommer auf der Piazza Maggiore",
          p: "Von Ende Juni bis August wird die Piazza Maggiore zum Freiluftkino: Sotto le Stelle del Cinema zeigt jeden Abend restaurierte Klassiker und Neustarts auf einer riesigen Leinwand, mit Hunderten Stühlen und freiem Eintritt. Bolognesischer kann ein Sommerabend kaum sein, und er endet früh genug, um danach noch durch die Pubs zu ziehen."
        }
      ],
      cta: 'Entdecke den Bologna Pub Crawl'
    },

    {
      key: 'erasmus',
      slug: 'pub-crawl-bologna-erasmus',
      title: 'Pub Crawl Bologna für Erasmus: Schnell Leute treffen',
      description: 'Pub Crawl für Erasmus-Studenten in Bologna: wie es läuft, was es kostet (25€), wo es startet und warum es der schnellste Weg zu Freunden ist.',
      keywords: 'pub crawl bologna erasmus, erasmus bologna, studenten bologna, leute kennenlernen bologna, erasmus party bologna, erasmus abend bologna, universitaet bologna nachtleben',
      h1: 'Pub Crawl Bologna für Erasmus-Studenten',
      intro: "Du bist gerade für dein Erasmus in Bologna angekommen und suchst den schnellsten Weg, neue Leute kennenzulernen? Der Pub Crawl ist die perfekte Welcome-Aktivität für internationale Studierende. So funktioniert es, und darum funktioniert es.",
      sections: [
        {
          h2: 'Warum der Pub Crawl perfekt für Erasmus ist',
          p: "Der Pub Crawl bringt jeden Abend eine bunt gemischte Gruppe zusammen: Erasmus-Studenten, Touristen, Reisende und italienische Studierende. Du musst vorher niemanden kennen: du kommst um 21:00 Uhr zum Treffpunkt auf der Piazza 8 Agosto, bekommst einen Welcome-Shot und ziehst mit der Gruppe los. Die Gratis-Shots in jedem Lokal und die Trinkspiele (Beer Pong, Drunk Cards) machen es unmöglich, keine Freunde zu finden. Spätestens an der zweiten Station kennst du die ganze Gruppe beim Namen."
        },
        {
          h2: 'Bologna, die Erasmus-Stadt schlechthin',
          p: "Bologna nimmt jedes Jahr über 2.000 Erasmus-Studenten aus ganz Europa auf. Mit der ältesten Universität der westlichen Welt ist die Stadt auf internationale Studierende eingestellt: Kurse auf Englisch, ESN-Welcome-Events, eine kleine Altstadt zum Zufußgehen, günstiger Nahverkehr und Studentenwohnheime überall. Und vor allem ein Nachtleben, das nie stillsteht."
        },
        {
          h2: 'Was es kostet und was inbegriffen ist',
          p: "Der Preis liegt bei 25 Euro pro Person, alles inklusive: Welcome-Shot in jedem Lokal (insgesamt 4), Eintritt in 4 ausgewählte Pubs, Trinkspiele, exklusive Drink-Rabatte und Club-Eintritt ohne Anstehen am Ende des Abends. Keine Online-Zahlung: du buchst jetzt und zahlst später, direkt am Treffpunkt, bar, mit Revolut oder PayPal. Du musst nur Datum und Personenzahl auf der Website auswählen."
        },
        {
          h2: 'Was dich am Abend erwartet',
          p: "Treffpunkt 21:00 Uhr auf der Piazza 8 Agosto. Erste Station: Welcome-Shot und Vorstellungsrunde. Zweite und dritte Station: Beer Pong und Drink-Rabatte, die Gruppe kommt richtig ins Gespräch. Vierte Station: der letzte Drink zusammen. Gegen 00:30 bis 01:00 Uhr geht es gemeinsam in den Club, mit freiem Eintritt und ohne Warteschlange. Schluss ist gegen 2 oder 3 Uhr."
        },
        {
          h2: 'Sprache: du musst kein Italienisch können',
          p: "Die Guides sprechen Englisch, Italienisch und Spanisch. Die meisten Teilnehmer sprechen Englisch, die Lingua franca des Pub Crawls. Wenn du gerade erst angekommen bist und kein Italienisch sprichst, ist das überhaupt kein Problem."
        }
      ],
      cta: 'Buche deinen Erasmus-Abend für 25€'
    }
  ],

  fr: [
    {
      key: 'best-pubs',
      slug: 'meilleurs-pubs-bologne',
      title: 'Meilleurs Pubs de Bologne : Guide du Centre 2026',
      description: 'Où boire un verre à Bologne : les meilleurs pubs du centre historique et du quartier universitaire, bière artisanale et prix étudiants.',
      keywords: 'meilleurs pubs bologne, bars bologne, ou boire a bologne, bologne centre historique bars, biere artisanale bologne, verres pas chers bologne, quartier universitaire bologne',
      h1: 'Les meilleurs pubs de Bologne : le guide 2026',
      intro: "Bologne possède une des scènes de pubs et de bars les plus vivantes d'Italie. Entre le centre historique, les arcades et le quartier universitaire, on compte plus de 100 adresses pour boire un verre. Voici le guide des meilleurs pubs de Bologne, des brasseries historiques aux nouvelles adresses de bière artisanale.",
      sections: [
        {
          h2: 'Le centre historique, le coeur de la nuit bolonaise',
          p: "Le centre historique est là où bat la nuit de Bologne. En quelques pâtés de maisons, sous les arcades et autour des places, étudiants, Erasmus et voyageurs se mélangent dans un réseau d'adresses qui va des brasseries historiques aux bars à cocktails les plus récents. Traverser le centre un vendredi soir, c'est croiser un fleuve de monde : bars, musique live, groupes dehors le verre à la main. C'est la vraie vie nocturne bolonaise."
        },
        {
          h2: 'Les 5 pubs incontournables du centre',
          p: "Parmi les adresses les plus aimées du centre, on trouve des osterie historiques avec de la bière pression à prix étudiant, des pubs à l'anglaise avec écrans pour le foot, des bars à cocktails avec terrasse, des brasseries artisanales dont la carte change chaque semaine et des lieux avec de la musique live tous les soirs. Chaque adresse a son public : la beauté du centre de Bologne, c'est qu'en une soirée tu les traverses toutes sans jamais être à plus de quelques minutes à pied."
        },
        {
          h2: 'Zamboni, Piazza Verdi et le quartier universitaire',
          p: "Le quartier universitaire autour de la Piazza Verdi et de la Via Zamboni, à deux pas de la Piazza 8 Agosto, est le second pôle de la nuit. Ici les lieux sont plus petits, moins chers, et le public est presque exclusivement étudiant. À la rentrée universitaire, le quartier se remplit d'Erasmus en quête de compagnie. Les prix sont parmi les plus bas de la ville."
        },
        {
          h2: 'Pourquoi faire un pub crawl plutôt que sortir seul',
          p: "Choisir le bon pub à Bologne peut être compliqué : les lieux changent de public selon le soir, certains pratiquent des prix touristiques, d'autres sont si pleins qu'on n'arrive pas à entrer. Un pub crawl organisé règle le problème : tu visites 4 adresses choisies pour être les plus animées du soir, tu paies 25 euros sur place (espèces, Revolut ou PayPal) et cela comprend un shot de bienvenue dans chaque bar, du beer pong, des réductions exclusives sur les boissons et l'entrée en boîte sans faire la queue. En prime, tu rencontres tout de suite un groupe de gens venus du monde entier."
        }
      ],
      cta: 'Réserve le Pub Crawl Bologne pour 25€'
    },

    {
      key: 'night-guide',
      slug: 'que-faire-bologne-le-soir',
      title: 'Que Faire à Bologne le Soir : 10 Idées de Soirée',
      description: 'Que faire à Bologne le soir ? Guide complet 2026 : meilleurs bars, pub crawl, boîtes de nuit, dîners typiques, événements étudiants et idées gratuites.',
      keywords: 'que faire bologne le soir, bologne la nuit, vie nocturne bologne, sortir a bologne, bologne vendredi soir, bologne samedi soir, boites de nuit bologne',
      h1: 'Que faire à Bologne le soir : le guide 2026',
      intro: "Tu es à Bologne et tu ne sais pas quoi faire ce soir ? Entre pub crawl, boîtes de nuit, dîners typiques, concerts et apéros, la ville propose énormément d'options chaque soir de la semaine. Voici 10 idées pour vivre Bologne le soir au maximum.",
      sections: [
        {
          h2: '1. Apéro Piazza Maggiore ou Piazza Santo Stefano',
          p: "L'apéro bolonais est un rituel : à 18h30 les bars du centre historique se remplissent de gens qui sirotent un Aperol Spritz ou un verre de Pignoletto en regardant les places s'illuminer. Piazza Maggiore et Piazza Santo Stefano sont les endroits les plus emblématiques, autour de 7 à 10 euros le verre avec les amuse-bouches."
        },
        {
          h2: '2. Le pub crawl : la façon la plus fun de vivre la nuit',
          p: "Si tu veux découvrir Bologne la nuit de la manière la plus rapide et la plus amusante, le pub crawl est l'option idéale : 4 pubs, un shot de bienvenue dans chaque bar, des jeux comme le beer pong, des réductions sur les boissons et l'entrée gratuite en boîte. Rendez-vous à 21h00 Piazza 8 Agosto. Le Pub Crawl Bologne a lieu chaque jeudi, vendredi et samedi pour 25 euros, tout compris."
        },
        {
          h2: '3. Le centre historique à pied',
          p: "Le centre historique est le quartier le plus animé de la ville la nuit. Le parcourir à pied sous les arcades, de la Piazza Maggiore vers le quartier universitaire, c'est croiser des dizaines d'adresses en quelques minutes, avec de la musique, du monde devant les bars et des artistes de rue. Une expérience qui vaut le détour à elle seule."
        },
        {
          h2: '4. Un dîner typique bolonais',
          p: "Bologne est la capitale gastronomique de l'Italie. Avant une longue soirée, dîne de tagliatelle al ragù, tortellini in brodo, lasagnes vertes ou d'une piadina garnie. Les restaurants du quartier universitaire sont nettement plus abordables que ceux des places principales."
        },
        {
          h2: '5. Concerts et musique live',
          p: "Bologne a une scène musicale historique : des clubs de jazz au TPO, de la Cantina Bentivoglio aux petites salles du centre avec de la musique live, il y a quelque chose tous les soirs. Consulte le programme du Locomotiv Club pour les concerts indie et rock."
        },
        {
          h2: '6. Boîtes de nuit et clubs',
          p: "Les boîtes de Bologne se concentrent autour du centre et du quartier des foires. Si tu fais un pub crawl, l'entrée en boîte est déjà incluse, sinon les adresses les plus fréquentées demandent entre 15 et 20 euros d'entrée avec une conso."
        },
        {
          h2: "7. Les Deux Tours et le centre illuminé : la balade gratuite",
          p: "Tout n'est pas payant à Bologne. Après le dîner, la balade des Deux Tours vers la Piazza Maggiore, avec le Palazzo d'Accursio illuminé et les arcades à moitié vides, est une des plus belles choses à faire en ville et elle ne coûte rien. Ajoute un détour par la petite fenêtre de la Via Piella, d'où l'on aperçoit le canal delle Moline : le soir, avec la bonne lumière, c'est l'endroit le plus photographié de Bologne."
        },
        {
          h2: "8. Street food nocturne dans le Quadrilatero",
          p: "Le Quadrilatero, le lacis de ruelles derrière la Piazza Maggiore, est le marché historique le jour et devient le soir une zone d'étals, d'épiceries et d'osterie ouvertes tard. Le Mercato di Mezzo est l'arrêt le plus pratique : trois étages de comptoirs avec bière artisanale, crescentine, tigelle et fritures, à des prix raisonnables et sans réservation."
        },
        {
          h2: "9. Soirées étudiantes, ESN et fêtes à thème",
          p: "Avec plus de 80 000 étudiants, Bologne a un calendrier qui ne s'arrête jamais : soirées ESN pour les Erasmus, fêtes de facultés, quiz nights en anglais dans les pubs du centre, karaoké et tournois de beer pong. La plupart s'annoncent sur les groupes Facebook et Instagram étudiants quelques jours avant seulement : ça vaut le coup de les chercher dès ton arrivée."
        },
        {
          h2: "10. Cinéma en plein air Piazza Maggiore l'été",
          p: "De fin juin à août, la Piazza Maggiore se transforme en cinéma en plein air : Sotto le Stelle del Cinema projette chaque soir des classiques restaurés et des nouveautés sur un écran géant, avec des centaines de chaises et l'entrée gratuite. C'est la façon la plus typiquement bolonaise de passer une soirée d'été, et ça se termine assez tôt pour enchaîner avec une tournée des pubs."
        }
      ],
      cta: 'Découvre le Pub Crawl Bologne'
    },

    {
      key: 'erasmus',
      slug: 'pub-crawl-bologne-erasmus',
      title: 'Pub Crawl Bologne pour Erasmus : Rencontrer du Monde',
      description: 'Pub crawl pour Erasmus à Bologne : comment ça marche, prix (25€), point de départ et pourquoi il reste le plus rapide pour se faire des amis.',
      keywords: 'pub crawl bologne erasmus, erasmus bologne, etudiants bologne, rencontrer du monde bologne, soiree erasmus bologne, fete erasmus bologne, universite bologne vie nocturne',
      h1: 'Pub Crawl Bologne pour étudiants Erasmus',
      intro: "Tu viens d'arriver à Bologne en Erasmus et tu cherches le moyen le plus rapide de rencontrer du monde ? Le pub crawl est l'activité de bienvenue parfaite pour les étudiants internationaux. Voici comment ça marche et pourquoi ça marche.",
      sections: [
        {
          h2: 'Pourquoi le pub crawl est parfait pour les Erasmus',
          p: "Chaque soir, le pub crawl réunit un groupe hétérogène : Erasmus, touristes, voyageurs et étudiants italiens. Pas besoin de connaître qui que ce soit avant : tu te présentes au rendez-vous Piazza 8 Agosto à 21h00, on t'offre un shot de bienvenue et tu pars avec le groupe. Les shots gratuits dans chaque bar et les jeux (beer pong, cartes) rendent impossible de ne pas se faire d'amis. Dès la deuxième étape, tu connaîtras tout le groupe par son prénom."
        },
        {
          h2: 'Bologne, la ville Erasmus par excellence',
          p: "Bologne accueille chaque année plus de 2 000 étudiants Erasmus venus de toute l'Europe. Avec la plus ancienne université du monde occidental, la ville est pensée pour les étudiants internationaux : cours en anglais, événements d'accueil ESN, un centre historique petit et parcourable à pied, des transports publics bon marché et des logements étudiants partout. Et surtout, une vie nocturne qui ne s'arrête jamais."
        },
        {
          h2: 'Combien ça coûte et ce qui est inclus',
          p: "Le prix est de 25 euros par personne, tout compris : shot de bienvenue dans chaque bar (4 au total), entrée dans 4 pubs sélectionnés, jeux, réductions exclusives sur les boissons et entrée en boîte sans faire la queue en fin de soirée. Aucun paiement en ligne : tu réserves maintenant et tu paies plus tard, directement au point de rendez-vous, en espèces, Revolut ou PayPal. Il te suffit de choisir la date et le nombre de personnes sur le site."
        },
        {
          h2: 'À quoi ressemble la soirée',
          p: "Rendez-vous à 21h00 Piazza 8 Agosto. Première étape : shot de bienvenue et présentations. Deuxième et troisième étapes : beer pong et réductions, le groupe commence vraiment à se mélanger. Quatrième étape : le dernier verre ensemble. Vers 00h30 ou 01h00, tout le monde part en boîte avec entrée gratuite et coupe-file. La soirée se termine vers 2h ou 3h du matin."
        },
        {
          h2: 'La langue : pas besoin de parler italien',
          p: "Les guides parlent anglais, italien et espagnol. La plupart des participants parlent anglais, la langue commune du pub crawl. Si tu viens d'arriver et que tu ne parles pas italien, ce n'est pas un problème."
        }
      ],
      cta: 'Réserve ta soirée Erasmus pour 25€'
    }
  ]
};

module.exports = articles;
