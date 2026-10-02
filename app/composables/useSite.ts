export type LocaleCode = 'fr' | 'de' | 'en'

export interface SiteCopy {
  topAnnounce: string
  navAccount: string
  navDemand: string
  navHome: string
  navAbout: string
  navServices: string
  navDevis: string
  navSurvival: string
  navJoin: string
  navContact: string
  searchPlaceholder: string
  mobileCta: string
  heroTag: string
  heroTitle: string
  heroLead: string
  heroMotto: string
  heroMottoAuthor: string
  heroCta1: string
  heroCta2: string
  call112: string
  call112hint: string
  chips: string[]
  contextTitle: string
  contexts: { title: string; text: string; detail: string }[]
  aboutEyebrow: string
  aboutTitle: string
  aboutDesc: string
  projectLabel: string
  projectText: string
  presentationLabel: string
  presentationText: string
  translationLabel: string
  translationText: string
  pillars: { title: string; text: string }[]
  aboutCta: string
  limitTitle: string
  limitText: string
  servicesEyebrow: string
  servicesTitle: string
  servicesLead: string
  services: { title: string; subtitle: string; filter: string; text: string }[]
  guideEyebrow: string
  guideTitle: string
  guideLead: string
  steps: { title: string; text: string }[]
  calcBadge: string
  calcTitle: string
  calcIntro: string
  calcEventType: string
  eventTypes: { value: string; label: string }[]
  calcAudience: string
  people: string
  calcHours: string
  calcLocation: string
  calcLocationPlaceholder: string
  calcEquipment: string
  calcDae: string
  calcTent: string
  calcResultTitle: string
  calcRespondersLabel: string
  responders: string
  calcEquipLabel: string
  calcCategoryLabel: string
  calcSubmit: string
  calcDisclaimer: string
  catSmall: string
  catMid: string
  catLarge: string
  equipSmall: string
  equipMid: string
  equipLarge: string
  equipSmallNoDae: string
  equipMidNoDae: string
  equipLargeNoDae: string
  equipTent: string
  survivalEyebrow: string
  survivalTitle: string
  survivalLead: string
  stats: { figure: string; text: string; source: string }[]
  chain: { title: string; text: string }[]
  volunteerBadge: string
  volunteerTitle: string
  volunteerText: string
  volunteerCta: string
  volunteerPoints: string[]
  faqEyebrow: string
  faqTitle: string
  faqs: { q: string; a: string }[]
  footerBlurb: string
  footerNavTitle: string
  footerServices: string
  footerLegalTitle: string
  legalStatus: string
  legalRegistry: string
  legalSeat: string
  legalLink: string
  footerContactTitle: string
  sourcesTitle: string
  copyright: string
  footerTagline: string
  volunteerModalTitle: string
  volunteerModalText: string
  volunteerName: string
  volunteerEmail: string
  volunteerPhone: string
  volunteerSubmit: string
  volunteerSuccess: string
  accountTitle: string
  accountText: string
  accountId: string
  accountPassword: string
  accountSubmit: string
  accountSuccess: string
  searchEmpty: string
  searchToast: string
  categoryToast: string
  langToast: string
  quoteToast: string
  mentionsTitle: string
  mentionsLead: string
  mentionsBlocks: { title: string; text: string }[]
}

const messages: Record<LocaleCode, SiteCopy> = {
  fr: {
    topAnnounce: 'Présence bénévole sur votre manifestation. Urgence vitale : appelez le 112.',
    navAccount: 'Espace membre',
    navDemand: 'Demander une présence',
    navHome: 'Accueil',
    navAbout: 'Mission',
    navServices: 'Services',
    navDevis: 'Organiser',
    navSurvival: 'Gestes qui sauvent',
    navJoin: 'Bénévoles',
    navContact: 'Contact',
    searchPlaceholder: 'Poste, DAE, bénévolat, 112, Echternach…',
    mobileCta: 'Demander une présence',
    heroTag: 'Echternach · Annuaire de l’Agence du Bénévolat',
    heroTitle: 'Des secouristes bénévoles, là où le public se rassemble.',
    heroLead: 'Le projet publié est d’assurer bénévolement les premiers secours sur des manifestations de toute nature au Luxembourg. Cette présence ne remplace pas les secours publics.',
    heroMotto: '« Unser Verein leistet ehrenamtlich Erste Hilfe auf Veranstaltungen aller Art und sind im Notfall für die Menschen da um zu helfen. »',
    heroMottoAuthor: 'Présentation publiée sur benevolat.lu',
    heroCta1: 'Préparer une demande',
    heroCta2: 'Rejoindre l’équipe',
    call112: '112',
    call112hint: 'Numéro unique des secours au Luxembourg',
    chips: ['Santé', 'Secours', 'Tout public'],
    contextTitle: 'Repères publics',
    contexts: [
      { title: 'Annuaire national', text: 'Recensée par l’Agence du Bénévolat.', detail: 'Santé · Secours · Tout public' },
      { title: 'Siège à Echternach', text: '8, rue des Romains, L-6478 Echternach', detail: '+352 621 387 104' },
      { title: 'Secours publics', text: 'Le 112 est reçu par le central du CGDIS.', detail: 'B.P.S.T.L. n’est pas ce central.' },
    ],
    aboutEyebrow: 'La mission',
    aboutTitle: 'Être là, bénévolement, quand une manifestation a besoin de premiers secours.',
    aboutDesc: 'Le projet publié par l’association est d’assurer bénévolement les premiers secours lors de manifestations de toute nature au Luxembourg, et d’aider les personnes qui en ont besoin en cas d’urgence.',
    projectLabel: 'Projet associatif',
    projectText: 'Unser Vereinsprojekt ist : dass wir ehrenamtlich auf verschiedenen Veranstaltungen aller Art hier in Luxemburg ehrenamtlich für die Erste Hilfe im Falle eines Notfalls sorgen und leisten um den Menschen zu helfen die Hilfe brauchen.',
    presentationLabel: 'Présentation',
    presentationText: 'Unser Verein leistet ehrenamtlich Erste Hilfe auf Veranstaltungen aller Art und sind im Notfall für die Menschen da um zu helfen.',
    translationLabel: 'Lecture en français',
    translationText: 'L’association porte secours bénévolement sur des événements de toute sorte et se tient aux côtés des personnes en cas d’urgence.',
    pillars: [
      { title: 'Présence sur site', text: 'Une équipe visible, avant que la situation n’exige le 112.' },
      { title: 'Événements variés', text: 'Culture, sport, fêtes locales : le projet vise les manifestations de toute nature.' },
      { title: 'Tout public', text: 'La fiche d’annuaire classe l’association en Santé, Secours et Tout public.' },
      { title: 'Relais vers le 112', text: 'Dès qu’un cas dépasse les premiers secours, les secours publics sont alertés.' },
    ],
    aboutCta: 'Voir ce que l’équipe apporte',
    limitTitle: 'Ce que cette présence n’est pas',
    limitText: 'B.P.S.T.L. n’est ni une ambulance, ni le SAMU, ni le dispositif officiel du CGDIS. Pour les manifestations qui comportent un risque particulier, la loi charge le CGDIS des dispositifs prévisionnels de secours. L’organisateur déclare l’événement ; le CGDIS décide du dispositif.',
    servicesEyebrow: 'Sur le terrain',
    servicesTitle: 'Une présence adaptée à la manifestation',
    servicesLead: 'La fiche d’annuaire ne publie pas de catalogue. Elle indique des premiers secours bénévoles sur des manifestations de toute nature. Les points ci-dessous sont des éléments courants d’une présence de secours, à confirmer au +352 621 387 104.',
    services: [
      { title: 'Poste de secours', subtitle: 'Point fixe', filter: 'Poste de secours', text: 'Un endroit identifiable où le public trouve une équipe pour un malaise, une plaie ou une première prise en charge.' },
      { title: 'Défibrillateur', subtitle: 'DAE', filter: 'DAE', text: 'Selon la commune de Mertzig, un DAE installé dans un lieu public au Luxembourg peut être utilisé par toute personne. La carte nationale est sur reagis.lu. Qu’un DAE soit apporté par B.P.S.T.L. se confirme par téléphone.' },
      { title: 'Tente de soins', subtitle: 'À confirmer', filter: 'Tente', text: 'Un abri est parfois utile pour soigner à l’écart du public. La fiche ne dit pas que l’association en possède un.' },
      { title: 'Sacs d’urgence', subtitle: 'À confirmer', filter: 'Matériel', text: 'Le matériel emporté se précise au téléphone. La fiche n’en publie pas la liste.' },
      { title: 'Équipe pédestre', subtitle: 'À confirmer', filter: 'Patrouille', text: 'Circuler dans le public dépend du site. La fiche ne le mentionne pas.' },
      { title: 'Formation', subtitle: 'Non publiée', filter: 'Formation', text: 'La fiche d’annuaire ne publie pas de calendrier de formations ouvertes au public. Les cours de premiers secours du CGDIS sont annoncés sur cours.cgdis.lu.' },
    ],
    guideEyebrow: 'Pour les organisateurs',
    guideTitle: 'Comment demander une présence',
    guideLead: 'Plus la date est connue tôt, plus l’équipe peut dire si elle est disponible. La présence se confirme par téléphone. Ce n’est pas une prescription du CGDIS.',
    steps: [
      { title: 'Décrire la manifestation', text: 'Type, commune, horaire, public attendu, et si le site est étendu ou concentré.' },
      { title: 'Préparer l’appel', text: 'Notez le type de manifestation, la commune, l’horaire et le public attendu. L’équipe en discute au téléphone.' },
      { title: 'Déclarer au CGDIS si nécessaire', text: 'Pour un dispositif de secours, le CGDIS demande une déclaration au moins un mois avant la date et peut refuser une demande hors délai. Il fixe le dispositif. Le 112 peut aussi envoyer cette équipe vers une urgence extérieure à la manifestation. Contact : manifestation@cgdis.lu.' },
      { title: 'Appeler B.P.S.T.L.', text: 'La présence bénévole se confirme par téléphone au +352 621 387 104.' },
    ],
    calcBadge: 'Aide à la planification',
    calcTitle: 'Estimer une présence bénévole',
    calcIntro: 'Ordre de grandeur pour une équipe de secouristes bénévoles. Le résultat change avec le public, le type d’événement et le matériel coché.',
    calcEventType: 'Type de manifestation',
    eventTypes: [
      { value: 'sports', label: 'Sport (trail, cyclisme, course)' },
      { value: 'concert', label: 'Concert ou festival' },
      { value: 'local', label: 'Fête, brocante, fête de village' },
      { value: 'gala', label: 'Soirée privée ou gala' },
    ],
    calcAudience: 'Public et participants estimés',
    people: 'personnes',
    calcHours: 'Durée (heures)',
    calcLocation: 'Canton ou commune',
    calcLocationPlaceholder: 'Echternach, Mersch…',
    calcEquipment: 'Matériel à prévoir',
    calcDae: 'Défibrillateur DAE',
    calcTent: 'Tente de soins',
    calcResultTitle: 'Estimation',
    calcRespondersLabel: 'Secouristes',
    responders: 'secouristes',
    calcEquipLabel: 'Matériel',
    calcCategoryLabel: 'Envergure indicative',
    calcSubmit: 'Appeler le +352 621 387 104',
    calcDisclaimer: 'Ordre de grandeur proposé par ce site pour préparer un appel. Ce ne sont pas des effectifs publiés par B.P.S.T.L., ni le dispositif du CGDIS. Lorsqu’une déclaration au CGDIS est requise, elle doit être introduite au moins un mois avant la date.',
    catSmall: 'Petite envergure',
    catMid: 'Envergure moyenne',
    catLarge: 'Grande envergure',
    equipSmall: '1 sac d’urgence + 1 DAE',
    equipMid: '2 sacs d’urgence + 2 DAE',
    equipLarge: '2 postes fixes + 3 DAE',
    equipSmallNoDae: '1 sac d’urgence',
    equipMidNoDae: '2 sacs d’urgence',
    equipLargeNoDae: '2 postes fixes',
    equipTent: ' + tente de soins',
    survivalEyebrow: 'Ce que disent les sources publiques',
    survivalTitle: 'Les premières minutes comptent avant l’arrivée des secours.',
    survivalLead: 'Ces repères viennent du CGDIS, de la loi organisant les secours et de l’information publique sur les défibrillateurs. Ils expliquent pourquoi une présence formée sur une manifestation a un sens.',
    stats: [
      { figure: '600+', text: 'personnes sont victimes d’un arrêt cardiaque chaque année au Luxembourg.', source: 'CGDIS, formation DAE' },
      { figure: '70 %', text: 'de ces arrêts surviennent devant un ou plusieurs témoins.', source: 'CGDIS, formation DAE' },
      { figure: '4 sur 5', text: 'des personnes qui survivent ont reçu des gestes simples d’un témoin.', source: 'Commune de Mertzig' },
      { figure: '1 mois', text: 'au minimum pour déclarer un dispositif de secours au CGDIS.', source: '112.public.lu' },
    ],
    chain: [
      { title: 'Sécuriser et alerter', text: 'Le 112 est le numéro unique. Le Central des secours d’urgence du CGDIS est l’organe national qui reçoit et régule ces appels.' },
      { title: 'Massuer et défibriller', text: 'Le massage cardiaque et un DAE utilisé tôt augmentent les chances. Un DAE mis à disposition du public peut être employé par toute personne, sans être secouriste.' },
      { title: 'Trouver un DAE', text: 'La commune de Mertzig renvoie vers reagis.lu pour consulter la carte nationale des défibrillateurs.' },
      { title: 'Laisser le CGDIS décider du dispositif officiel', text: 'La loi du 27 mars 2018 confie au CGDIS les dispositifs prévisionnels de secours des manifestations qui comportent un risque particulier.' },
    ],
    volunteerBadge: 'Rejoindre l’équipe',
    volunteerTitle: 'Le seul contact publié est le téléphone.',
    volunteerText: 'La fiche d’annuaire ne publie ni critères de candidature, ni liste de matériel, ni adresse e-mail. Pour une présence sur une manifestation ou pour proposer son aide, appelez le +352 621 387 104.',
    volunteerCta: 'Appeler le +352 621 387 104',
    volunteerPoints: [
      'Téléphone indiqué : +352 621 387 104.',
      'Adresse indiquée : 8, rue des Romains, L-6478 Echternach.',
      'Aucun e-mail n’est publié sur la fiche de l’Agence du Bénévolat.',
    ],
    faqEyebrow: 'Questions fréquentes',
    faqTitle: 'Avant d’appeler',
    faqs: [
      { q: 'Pouvez-vous remplacer une ambulance ?', a: 'Non. En urgence vitale, appelez le 112. L’équipe bénévole assure des premiers secours sur une manifestation et passe le relais aux secours publics dès que c’est nécessaire.' },
      { q: 'Une présence bénévole remplace-t-elle la déclaration au CGDIS ?', a: 'Non. Lorsqu’un dispositif officiel est requis, c’est le CGDIS qui le décide après déclaration de la manifestation.' },
      { q: 'Où êtes-vous basés ?', a: 'À Echternach, 8, rue des Romains, L-6478. Le projet publié vise des manifestations de toute nature au Luxembourg, pas uniquement la commune du siège.' },
      { q: 'Faut-il déjà être secouriste pour candidater ?', a: 'Le site de l’association ne fixe pas de diplôme préalable. La candidature se discute directement avec l’équipe, au +352 621 387 104.' },
      { q: 'Comment transmettre une demande ou une candidature ?', a: 'Par téléphone, au +352 621 387 104. Ce site n’enregistre pas de formulaire.' },
    ],
    footerBlurb: 'Bénévoles Premiers Secours Team Luxembourg — association recensée dans l’annuaire de l’Agence du Bénévolat, siège à Echternach.',
    footerNavTitle: 'Pages',
    footerServices: 'Services',
    footerLegalTitle: 'Cadre',
    legalStatus: 'Fiche : Benevolle Premiers Secours Team Luxembourg (B.P.S.T.L)',
    legalRegistry: 'Annuaire : Agence du Bénévolat',
    legalSeat: 'Siège : Echternach, Luxembourg',
    legalLink: 'Mentions et sources',
    footerContactTitle: 'Contact',
    sourcesTitle: 'Sources',
    copyright: '© 2026 Bénévoles Premiers Secours Team Luxembourg (B.P.S.T.L.).',
    footerTagline: 'Urgence vitale : 112',
    volunteerModalTitle: 'Candidature bénévole',
    volunteerModalText: 'Ces informations restent sur votre écran. Appelez ensuite l’association pour les transmettre.',
    volunteerName: 'Nom et prénom',
    volunteerEmail: 'E-mail',
    volunteerPhone: 'Téléphone',
    volunteerSubmit: 'Préparer le message',
    volunteerSuccess: 'Candidature notée sur cet écran seulement. Appelez le +352 621 387 104 pour la transmettre.',
    accountTitle: 'Espace membre',
    accountText: 'L’accès en ligne des secouristes n’est pas ouvert sur ce site.',
    accountId: 'Identifiant',
    accountPassword: 'Mot de passe',
    accountSubmit: 'Continuer',
    accountSuccess: 'Aucun compte n’est connecté ici. Contactez l’équipe au +352 621 387 104.',
    searchEmpty: 'Indiquez un mot-clé.',
    searchToast: 'Recherche : « {query} »',
    categoryToast: 'Section liée : {cat}',
    langToast: 'Langue : {lang}',
    quoteToast: 'Estimation notée. Pour la transmettre, appelez le +352 621 387 104. Ce site n’envoie pas la demande.',
    mentionsTitle: 'Mentions et sources',
    mentionsLead: 'Les faits propres à l’association viennent de sa fiche d’annuaire. Le cadre des secours au Luxembourg vient des textes et pages publics cités ci-dessous.',
    mentionsBlocks: [
      { title: 'Éditeur de ces pages', text: 'Bénévoles Premiers Secours Team Luxembourg (B.P.S.T.L.), 8, rue des Romains, L-6478 Echternach. Téléphone +352 621 387 104. Fiche d’annuaire : benevolat.lu.' },
      { title: 'Contact', text: 'Les demandes et les candidatures se font par téléphone au +352 621 387 104. Ce site n’enregistre pas de formulaire.' },
      { title: 'Urgences', text: 'Ce site n’est pas un canal d’alerte. En cas d’urgence, appelez le 112.' },
    ],
  },
  de: {
    topAnnounce: 'Ehrenamtliche Präsenz auf Ihrer Veranstaltung. Lebensbedrohlicher Notfall: 112 anrufen.',
    navAccount: 'Mitgliederbereich',
    navDemand: 'Präsenz anfragen',
    navHome: 'Start',
    navAbout: 'Auftrag',
    navServices: 'Leistungen',
    navDevis: 'Veranstalten',
    navSurvival: 'Lebensrettende Hilfe',
    navJoin: 'Ehrenamt',
    navContact: 'Kontakt',
    searchPlaceholder: 'Posten, AED, Ehrenamt, 112, Echternach…',
    mobileCta: 'Präsenz anfragen',
    heroTag: 'Echternach · Verzeichnis der Agence du Bénévolat',
    heroTitle: 'Ehrenamtliche Ersthelfer, dort wo Menschen zusammenkommen.',
    heroLead: 'Das veröffentlichte Projekt ist ehrenamtliche Erste Hilfe auf Veranstaltungen aller Art in Luxemburg. Diese Präsenz ersetzt die öffentlichen Rettungsdienste nicht.',
    heroMotto: '« Unser Verein leistet ehrenamtlich Erste Hilfe auf Veranstaltungen aller Art und sind im Notfall für die Menschen da um zu helfen. »',
    heroMottoAuthor: 'Vorstellung auf benevolat.lu',
    heroCta1: 'Anfrage vorbereiten',
    heroCta2: 'Mitmachen',
    call112: '112',
    call112hint: 'Einheitliche Notrufnummer in Luxemburg',
    chips: ['Gesundheit', 'Rettung', 'Für alle'],
    contextTitle: 'Öffentliche Anker',
    contexts: [
      { title: 'Nationales Verzeichnis', text: 'Eingetragen bei der Agence du Bénévolat.', detail: 'Gesundheit · Rettung · für alle' },
      { title: 'Sitz in Echternach', text: '8, rue des Romains, L-6478 Echternach', detail: '+352 621 387 104' },
      { title: 'Öffentliche Rettung', text: 'Die 112 nimmt die Notrufzentrale des CGDIS entgegen.', detail: 'B.P.S.T.L. ist diese Zentrale nicht.' },
    ],
    aboutEyebrow: 'Der Auftrag',
    aboutTitle: 'Ehrenamtlich da sein, wenn eine Veranstaltung Erste Hilfe braucht.',
    aboutDesc: 'Das veröffentlichte Vereinsprojekt ist, auf Veranstaltungen aller Art in Luxemburg ehrenamtlich Erste Hilfe zu leisten und Menschen im Notfall zu helfen.',
    projectLabel: 'Vereinsprojekt',
    projectText: 'Unser Vereinsprojekt ist : dass wir ehrenamtlich auf verschiedenen Veranstaltungen aller Art hier in Luxemburg ehrenamtlich für die Erste Hilfe im Falle eines Notfalls sorgen und leisten um den Menschen zu helfen die Hilfe brauchen.',
    presentationLabel: 'Vorstellung',
    presentationText: 'Unser Verein leistet ehrenamtlich Erste Hilfe auf Veranstaltungen aller Art und sind im Notfall für die Menschen da um zu helfen.',
    translationLabel: 'Auf Deutsch zusammengefasst',
    translationText: 'Der Verein leistet auf Veranstaltungen aller Art ehrenamtlich Erste Hilfe und ist im Notfall für die Menschen da.',
    pillars: [
      { title: 'Präsenz vor Ort', text: 'Ein sichtbares Team, bevor die Lage die 112 erfordert.' },
      { title: 'Unterschiedliche Events', text: 'Kultur, Sport, lokale Feste: das Projekt gilt für Veranstaltungen aller Art.' },
      { title: 'Für alle', text: 'Im Verzeichnis steht der Verein unter Gesundheit, Rettung und für alle.' },
      { title: 'Übergabe an die 112', text: 'Geht ein Fall über die Erste Hilfe hinaus, werden die öffentlichen Rettungsdienste alarmiert.' },
    ],
    aboutCta: 'Was das Team mitbringt',
    limitTitle: 'Was diese Präsenz nicht ist',
    limitText: 'B.P.S.T.L. ist kein Rettungswagen, kein SAMU und nicht der offizielle CGDIS-Dienst. Für Veranstaltungen mit besonderem Risiko liegen die vorausschauenden Sanitätsdienste gesetzlich beim CGDIS. Der Veranstalter meldet das Event, der CGDIS legt den Dienst fest.',
    servicesEyebrow: 'Vor Ort',
    servicesTitle: 'Eine Präsenz, die zur Veranstaltung passt',
    servicesLead: 'Der Verzeichniseintrag nennt keinen Leistungskatalog. Er beschreibt ehrenamtliche Erste Hilfe auf Veranstaltungen aller Art. Die Punkte unten sind übliche Bestandteile einer Sanitätspräsenz und unter +352 621 387 104 zu bestätigen.',
    services: [
      { title: 'Sanitätsposten', subtitle: 'Fester Punkt', filter: 'Sanitätsposten', text: 'Ein erkennbarer Ort, an dem das Publikum bei Unwohlsein, Wunden oder der ersten Versorgung ein Team findet.' },
      { title: 'Defibrillator', subtitle: 'AED', filter: 'AED', text: 'Nach Angaben der Gemeinde Mertzig darf ein öffentlich zugänglicher AED in Luxemburg von jeder Person benutzt werden. Die nationale Karte steht auf reagis.lu. Ob B.P.S.T.L. einen AED mitbringt, ist telefonisch zu klären.' },
      { title: 'Versorgungszelt', subtitle: 'Zu bestätigen', filter: 'Zelt', text: 'Ein Unterstand ist manchmal sinnvoll. Der Verzeichniseintrag sagt nicht, dass der Verein eines besitzt.' },
      { title: 'Notfalltaschen', subtitle: 'Zu bestätigen', filter: 'Material', text: 'Das mitgeführte Material wird am Telefon geklärt. Eine Liste ist nicht veröffentlicht.' },
      { title: 'Fußstreife', subtitle: 'Zu bestätigen', filter: 'Streife', text: 'Ob Helfer durch das Publikum gehen, hängt vom Gelände ab. Der Eintrag erwähnt das nicht.' },
      { title: 'Ausbildung', subtitle: 'Nicht veröffentlicht', filter: 'Ausbildung', text: 'Der Eintrag nennt keine öffentlichen Kurstermine. Erste-Hilfe-Kurse des CGDIS stehen auf cours.cgdis.lu.' },
    ],
    guideEyebrow: 'Für Veranstalter',
    guideTitle: 'So fragen Sie eine Präsenz an',
    guideLead: 'Je früher das Datum feststeht, desto klarer kann das Team sagen, ob es verfügbar ist. Die Präsenz wird telefonisch bestätigt. Das ist keine Vorgabe des CGDIS.',
    steps: [
      { title: 'Die Veranstaltung beschreiben', text: 'Art, Gemeinde, Uhrzeit, erwartetes Publikum und ob das Gelände weitläufig oder kompakt ist.' },
      { title: 'Das Gespräch vorbereiten', text: 'Notieren Sie Art, Gemeinde, Uhrzeit und erwartetes Publikum. Das Team bespricht das am Telefon.' },
      { title: 'Beim CGDIS melden, wenn nötig', text: 'Für einen Sanitätsdienst verlangt der CGDIS die Meldung mindestens einen Monat vorher und kann eine verspätete Anfrage ablehnen. Er legt den Dienst fest. Die 112 kann diese Mannschaft auch zu einem Notfall außerhalb der Veranstaltung schicken. Kontakt: manifestation@cgdis.lu.' },
      { title: 'B.P.S.T.L. anrufen', text: 'Die ehrenamtliche Präsenz wird telefonisch unter +352 621 387 104 bestätigt.' },
    ],
    calcBadge: 'Planungshilfe',
    calcTitle: 'Eine ehrenamtliche Präsenz schätzen',
    calcIntro: 'Größenordnung für ein Team ehrenamtlicher Ersthelfer. Das Ergebnis hängt von Publikum, Eventart und angekreuztem Material ab.',
    calcEventType: 'Art der Veranstaltung',
    eventTypes: [
      { value: 'sports', label: 'Sport (Trail, Radsport, Lauf)' },
      { value: 'concert', label: 'Konzert oder Festival' },
      { value: 'local', label: 'Fest, Flohmarkt, Dorffest' },
      { value: 'gala', label: 'Private Feier oder Gala' },
    ],
    calcAudience: 'Geschätztes Publikum und Teilnehmer',
    people: 'Personen',
    calcHours: 'Dauer (Stunden)',
    calcLocation: 'Kanton oder Gemeinde',
    calcLocationPlaceholder: 'Echternach, Mersch…',
    calcEquipment: 'Vorzusehendes Material',
    calcDae: 'Defibrillator AED',
    calcTent: 'Versorgungszelt',
    calcResultTitle: 'Schätzung',
    calcRespondersLabel: 'Ersthelfer',
    responders: 'Ersthelfer',
    calcEquipLabel: 'Material',
    calcCategoryLabel: 'Ungefähre Größe',
    calcSubmit: 'Anrufen: +352 621 387 104',
    calcDisclaimer: 'Größenordnung dieser Website zur Vorbereitung eines Anrufs. Das sind keine vom Verein veröffentlichten Stärken und nicht der CGDIS-Dienst. Eine erforderliche Meldung beim CGDIS muss mindestens einen Monat vor dem Termin eingehen.',
    catSmall: 'Kleiner Umfang',
    catMid: 'Mittlerer Umfang',
    catLarge: 'Großer Umfang',
    equipSmall: '1 Notfalltasche + 1 AED',
    equipMid: '2 Notfalltaschen + 2 AED',
    equipLarge: '2 feste Posten + 3 AED',
    equipSmallNoDae: '1 Notfalltasche',
    equipMidNoDae: '2 Notfalltaschen',
    equipLargeNoDae: '2 feste Posten',
    equipTent: ' + Versorgungszelt',
    survivalEyebrow: 'Was öffentliche Quellen sagen',
    survivalTitle: 'Die ersten Minuten zählen, bevor die Rettung eintrifft.',
    survivalLead: 'Diese Anker stammen vom CGDIS, aus dem Rettungsgesetz und aus der öffentlichen Information zu Defibrillatoren. Sie erklären, warum eine ausgebildete Präsenz auf einer Veranstaltung sinnvoll ist.',
    stats: [
      { figure: '600+', text: 'Menschen erleiden in Luxemburg jedes Jahr einen Herzstillstand.', source: 'CGDIS, AED-Schulung' },
      { figure: '70 %', text: 'dieser Fälle geschehen vor einem oder mehreren Zeugen.', source: 'CGDIS, AED-Schulung' },
      { figure: '4 von 5', text: 'Überlebenden haben einfache Hilfe von einem Zeugen erhalten.', source: 'Gemeinde Mertzig' },
      { figure: '1 Monat', text: 'mindestens, um einen Sanitätsdienst beim CGDIS anzumelden.', source: '112.public.lu' },
    ],
    chain: [
      { title: 'Sichern und alarmieren', text: 'Die 112 ist die einheitliche Nummer. Die Notrufzentrale des CGDIS ist die nationale Stelle, die diese Anrufe annimmt und steuert.' },
      { title: 'Drücken und defibrillieren', text: 'Herzdruckmassage und ein früh eingesetzter AED erhöhen die Chancen. Ein öffentlich zugänglicher AED darf von jeder Person bedient werden.' },
      { title: 'Einen AED finden', text: 'Die Gemeinde Mertzig verweist für die nationale Defibrillatorkarte auf reagis.lu.' },
      { title: 'Den offiziellen Dienst dem CGDIS überlassen', text: 'Das Gesetz vom 27. März 2018 überträgt dem CGDIS die vorausschauenden Sanitätsdienste bei Veranstaltungen mit besonderem Risiko.' },
    ],
    volunteerBadge: 'Mitmachen',
    volunteerTitle: 'Der einzige veröffentlichte Kontakt ist das Telefon.',
    volunteerText: 'Der Verzeichniseintrag nennt weder Bewerbungskriterien noch eine Materialliste noch eine E-Mail. Für eine Präsenz oder um Hilfe anzubieten, rufen Sie +352 621 387 104 an.',
    volunteerCta: 'Anrufen: +352 621 387 104',
    volunteerPoints: [
      'Angegebene Telefonnummer: +352 621 387 104.',
      'Angegebene Adresse: 8, rue des Romains, L-6478 Echternach.',
      'Im Eintrag der Agence du Bénévolat steht keine E-Mail.',
    ],
    faqEyebrow: 'Häufige Fragen',
    faqTitle: 'Bevor Sie anrufen',
    faqs: [
      { q: 'Können Sie einen Rettungswagen ersetzen?', a: 'Nein. Im lebensbedrohlichen Notfall wählen Sie die 112. Das ehrenamtliche Team leistet Erste Hilfe auf einer Veranstaltung und übergibt an die öffentlichen Rettungsdienste, sobald das nötig ist.' },
      { q: 'Ersetzt eine ehrenamtliche Präsenz die Meldung beim CGDIS?', a: 'Nein. Wo ein offizieller Dienst erforderlich ist, legt ihn der CGDIS nach der Meldung fest.' },
      { q: 'Wo ist der Sitz?', a: 'In Echternach, 8, rue des Romains, L-6478. Das veröffentlichte Projekt gilt für Veranstaltungen aller Art in Luxemburg, nicht nur für die Sitzgemeinde.' },
      { q: 'Muss ich schon Ersthelfer sein?', a: 'Die Vereinsseite nennt keinen vorausgesetzten Abschluss. Die Bewerbung wird direkt mit dem Team besprochen, unter +352 621 387 104.' },
      { q: 'Wie sende ich eine Anfrage oder Bewerbung?', a: 'Telefonisch unter +352 621 387 104. Diese Website speichert kein Formular.' },
    ],
    footerBlurb: 'Bénévoles Premiers Secours Team Luxembourg — Verein im Verzeichnis der Agence du Bénévolat, Sitz in Echternach.',
    footerNavTitle: 'Seiten',
    footerServices: 'Leistungen',
    footerLegalTitle: 'Rahmen',
    legalStatus: 'Eintrag: Benevolle Premiers Secours Team Luxembourg (B.P.S.T.L)',
    legalRegistry: 'Verzeichnis: Agence du Bénévolat',
    legalSeat: 'Sitz: Echternach, Luxemburg',
    legalLink: 'Impressum und Quellen',
    footerContactTitle: 'Kontakt',
    sourcesTitle: 'Quellen',
    copyright: '© 2026 Bénévoles Premiers Secours Team Luxembourg (B.P.S.T.L.).',
    footerTagline: 'Lebensbedrohlicher Notfall: 112',
    volunteerModalTitle: 'Ehrenamtliche Bewerbung',
    volunteerModalText: 'Diese Angaben bleiben auf Ihrem Bildschirm. Rufen Sie danach den Verein an, um sie weiterzugeben.',
    volunteerName: 'Name und Vorname',
    volunteerEmail: 'E-Mail',
    volunteerPhone: 'Telefon',
    volunteerSubmit: 'Nachricht vorbereiten',
    volunteerSuccess: 'Nur auf diesem Bildschirm notiert. Zum Übermitteln +352 621 387 104 anrufen.',
    accountTitle: 'Mitgliederbereich',
    accountText: 'Ein Online-Zugang für Ersthelfer ist auf dieser Website nicht geöffnet.',
    accountId: 'Kennung',
    accountPassword: 'Passwort',
    accountSubmit: 'Weiter',
    accountSuccess: 'Hier wird kein Konto verbunden. Kontaktieren Sie das Team unter +352 621 387 104.',
    searchEmpty: 'Geben Sie ein Stichwort ein.',
    searchToast: 'Suche: „{query}“',
    categoryToast: 'Passender Abschnitt: {cat}',
    langToast: 'Sprache: {lang}',
    quoteToast: 'Schätzung notiert. Zum Übermitteln +352 621 387 104 anrufen. Diese Website sendet die Anfrage nicht.',
    mentionsTitle: 'Impressum und Quellen',
    mentionsLead: 'Angaben zum Verein stammen aus seinem Verzeichniseintrag. Der Rahmen der Rettung in Luxemburg stammt aus den unten genannten öffentlichen Texten.',
    mentionsBlocks: [
      { title: 'Herausgeber dieser Seiten', text: 'Bénévoles Premiers Secours Team Luxembourg (B.P.S.T.L.), 8, rue des Romains, L-6478 Echternach. Telefon +352 621 387 104. Verzeichniseintrag: benevolat.lu.' },
      { title: 'Kontakt', text: 'Anfragen und Bewerbungen laufen über das Telefon +352 621 387 104. Diese Website speichert kein Formular.' },
      { title: 'Notfälle', text: 'Diese Website ist kein Alarmierungsweg. Im Notfall die 112 anrufen.' },
    ],
  },
  en: {
    topAnnounce: 'Volunteer cover for your event. Life-threatening emergency: call 112.',
    navAccount: 'Member area',
    navDemand: 'Request cover',
    navHome: 'Home',
    navAbout: 'Mission',
    navServices: 'Services',
    navDevis: 'Organisers',
    navSurvival: 'Life-saving care',
    navJoin: 'Volunteers',
    navContact: 'Contact',
    searchPlaceholder: 'Post, AED, volunteering, 112, Echternach…',
    mobileCta: 'Request cover',
    heroTag: 'Echternach · Agence du Bénévolat directory',
    heroTitle: 'Volunteer first-aiders, where the public gathers.',
    heroLead: 'The published project is voluntary first aid at events of all kinds in Luxembourg. That presence does not replace the public emergency services.',
    heroMotto: '« Our association provides voluntary first aid at events of all kinds and is there to help people in an emergency. »',
    heroMottoAuthor: 'Profile published on benevolat.lu',
    heroCta1: 'Prepare a request',
    heroCta2: 'Join the team',
    call112: '112',
    call112hint: 'Luxembourg’s single emergency number',
    chips: ['Health', 'Rescue', 'Open to all'],
    contextTitle: 'Public reference points',
    contexts: [
      { title: 'National directory', text: 'Listed by the Agence du Bénévolat.', detail: 'Health · Rescue · Open to all' },
      { title: 'Seat in Echternach', text: '8, rue des Romains, L-6478 Echternach', detail: '+352 621 387 104' },
      { title: 'Public rescue', text: '112 is answered by the CGDIS call centre.', detail: 'B.P.S.T.L. is not that centre.' },
    ],
    aboutEyebrow: 'The mission',
    aboutTitle: 'To be there, as volunteers, when an event needs first aid.',
    aboutDesc: 'The project the association has published is to provide voluntary first aid at events of all kinds in Luxembourg, and to help people who need it in an emergency.',
    projectLabel: 'Association project',
    projectText: 'Unser Vereinsprojekt ist : dass wir ehrenamtlich auf verschiedenen Veranstaltungen aller Art hier in Luxemburg ehrenamtlich für die Erste Hilfe im Falle eines Notfalls sorgen und leisten um den Menschen zu helfen die Hilfe brauchen.',
    presentationLabel: 'Published presentation',
    presentationText: 'Unser Verein leistet ehrenamtlich Erste Hilfe auf Veranstaltungen aller Art und sind im Notfall für die Menschen da um zu helfen.',
    translationLabel: 'In English',
    translationText: 'The association provides voluntary first aid at events of all kinds and is there to help people in an emergency.',
    pillars: [
      { title: 'On-site presence', text: 'A visible team, before a situation requires 112.' },
      { title: 'Many kinds of events', text: 'Culture, sport, local fêtes: the project covers events of all kinds.' },
      { title: 'Open to all', text: 'The directory lists the association under Health, Rescue and Open to all.' },
      { title: 'Handover to 112', text: 'When a case goes beyond first aid, the public emergency services are called.' },
    ],
    aboutCta: 'What the team brings',
    limitTitle: 'What this presence is not',
    limitText: 'B.P.S.T.L. is not an ambulance, not the SAMU, and not the CGDIS official cover. For events with a particular risk, the law gives planned emergency cover to the CGDIS. The organiser declares the event; the CGDIS decides the device.',
    servicesEyebrow: 'On the ground',
    servicesTitle: 'Cover shaped to the event',
    servicesLead: 'The directory profile does not publish a service list. It states voluntary first aid at events of all kinds. The items below are usual parts of event cover, to be confirmed on +352 621 387 104.',
    services: [
      { title: 'First-aid post', subtitle: 'Fixed point', filter: 'First-aid post', text: 'A recognisable place where the public finds a team for illness, wounds or initial care.' },
      { title: 'Defibrillator', subtitle: 'AED', filter: 'AED', text: 'The Commune of Mertzig states that a public AED in Luxembourg may be used by anyone. The national map is on reagis.lu. Whether B.P.S.T.L. brings an AED is confirmed by phone.' },
      { title: 'Treatment tent', subtitle: 'To confirm', filter: 'Tent', text: 'A shelter is sometimes useful. The directory profile does not say the association owns one.' },
      { title: 'Emergency bags', subtitle: 'To confirm', filter: 'Equipment', text: 'What is carried is settled on the phone. The profile publishes no kit list.' },
      { title: 'Foot patrol', subtitle: 'To confirm', filter: 'Patrol', text: 'Moving through the crowd depends on the site. The profile does not mention it.' },
      { title: 'Training', subtitle: 'Not published', filter: 'Training', text: 'The profile does not publish public course dates. CGDIS first-aid courses are listed on cours.cgdis.lu.' },
    ],
    guideEyebrow: 'For organisers',
    guideTitle: 'How to request cover',
    guideLead: 'The earlier the date is known, the sooner the team can say whether it is free. Cover is confirmed by phone. It is not a CGDIS prescription.',
    steps: [
      { title: 'Describe the event', text: 'Type, commune, hours, expected public, and whether the site is spread out or compact.' },
      { title: 'Prepare the call', text: 'Note the event type, commune, hours and expected public. The team discusses that by phone.' },
      { title: 'Declare to the CGDIS when required', text: 'For emergency cover, the CGDIS asks for a declaration at least one month before the date and may refuse a late request. It sets the device. 112 may also send that crew to an emergency outside the event. Contact: manifestation@cgdis.lu.' },
      { title: 'Call B.P.S.T.L.', text: 'Volunteer cover is confirmed by phone on +352 621 387 104.' },
    ],
    calcBadge: 'Planning aid',
    calcTitle: 'Estimate volunteer cover',
    calcIntro: 'An order of magnitude for a team of volunteer first-aiders. The result changes with the crowd, the event type and the kit you tick.',
    calcEventType: 'Event type',
    eventTypes: [
      { value: 'sports', label: 'Sport (trail, cycling, race)' },
      { value: 'concert', label: 'Concert or festival' },
      { value: 'local', label: 'Fête, brocante, village festival' },
      { value: 'gala', label: 'Private evening or gala' },
    ],
    calcAudience: 'Estimated public and participants',
    people: 'people',
    calcHours: 'Duration (hours)',
    calcLocation: 'Canton or commune',
    calcLocationPlaceholder: 'Echternach, Mersch…',
    calcEquipment: 'Kit to plan for',
    calcDae: 'AED defibrillator',
    calcTent: 'Treatment tent',
    calcResultTitle: 'Estimate',
    calcRespondersLabel: 'First-aiders',
    responders: 'first-aiders',
    calcEquipLabel: 'Kit',
    calcCategoryLabel: 'Indicative scale',
    calcSubmit: 'Call +352 621 387 104',
    calcDisclaimer: 'An order of magnitude from this website, to prepare a call. These are not staffing figures published by B.P.S.T.L., and not the CGDIS device. When a CGDIS declaration is required, it must be filed at least one month before the date.',
    catSmall: 'Small scale',
    catMid: 'Medium scale',
    catLarge: 'Large scale',
    equipSmall: '1 emergency bag + 1 AED',
    equipMid: '2 emergency bags + 2 AED',
    equipLarge: '2 fixed posts + 3 AED',
    equipSmallNoDae: '1 emergency bag',
    equipMidNoDae: '2 emergency bags',
    equipLargeNoDae: '2 fixed posts',
    equipTent: ' + treatment tent',
    survivalEyebrow: 'What public sources say',
    survivalTitle: 'The first minutes matter before the emergency services arrive.',
    survivalLead: 'These points come from the CGDIS, the law that organises rescue services, and public information on defibrillators. They explain why a trained presence at an event matters.',
    stats: [
      { figure: '600+', text: 'people suffer a cardiac arrest in Luxembourg each year.', source: 'CGDIS, AED training' },
      { figure: '70%', text: 'of those arrests happen in front of one or more witnesses.', source: 'CGDIS, AED training' },
      { figure: '4 in 5', text: 'survivors had received simple help from a bystander.', source: 'Commune of Mertzig' },
      { figure: '1 month', text: 'minimum to declare emergency cover to the CGDIS.', source: '112.public.lu' },
    ],
    chain: [
      { title: 'Make safe and call', text: '112 is the single number. The CGDIS emergency call centre is the national body that receives and manages those calls.' },
      { title: 'Compress and defibrillate', text: 'Chest compressions and an early AED improve the chances. A defibrillator placed for the public may be used by anyone, not only by a first-aider.' },
      { title: 'Find an AED', text: 'The Commune of Mertzig points to reagis.lu for the national defibrillator map.' },
      { title: 'Leave the official device to the CGDIS', text: 'The law of 27 March 2018 gives the CGDIS planned emergency cover for events that carry a particular risk.' },
    ],
    volunteerBadge: 'Join the team',
    volunteerTitle: 'The only published contact is the phone.',
    volunteerText: 'The directory profile publishes no application criteria, no kit list and no email. To request cover or to offer help, call +352 621 387 104.',
    volunteerCta: 'Call +352 621 387 104',
    volunteerPoints: [
      'Listed phone: +352 621 387 104.',
      'Listed address: 8, rue des Romains, L-6478 Echternach.',
      'No email is published on the Agence du Bénévolat profile.',
    ],
    faqEyebrow: 'Common questions',
    faqTitle: 'Before you call',
    faqs: [
      { q: 'Can you replace an ambulance?', a: 'No. In a life-threatening emergency, call 112. The volunteer team provides first aid at an event and hands over to the public emergency services as soon as that is needed.' },
      { q: 'Does volunteer cover replace a CGDIS declaration?', a: 'No. Where official cover is required, the CGDIS decides it after the event is declared.' },
      { q: 'Where are you based?', a: 'In Echternach, 8, rue des Romains, L-6478. The published project covers events of all kinds in Luxembourg, not only the commune of the seat.' },
      { q: 'Do I already need to be a first-aider to apply?', a: 'The association’s public profile does not set a prior diploma. Applications are discussed directly with the team on +352 621 387 104.' },
      { q: 'How do I send a request or an application?', a: 'By phone, on +352 621 387 104. This site does not store a form.' },
    ],
    footerBlurb: 'Bénévoles Premiers Secours Team Luxembourg — association listed in the Agence du Bénévolat directory, seated in Echternach.',
    footerNavTitle: 'Pages',
    footerServices: 'Services',
    footerLegalTitle: 'Framework',
    legalStatus: 'Profile: Benevolle Premiers Secours Team Luxembourg (B.P.S.T.L)',
    legalRegistry: 'Directory: Agence du Bénévolat',
    legalSeat: 'Seat: Echternach, Luxembourg',
    legalLink: 'Notice and sources',
    footerContactTitle: 'Contact',
    sourcesTitle: 'Sources',
    copyright: '© 2026 Bénévoles Premiers Secours Team Luxembourg (B.P.S.T.L.).',
    footerTagline: 'Life-threatening emergency: 112',
    volunteerModalTitle: 'Volunteer application',
    volunteerModalText: 'These details stay on your screen. Then call the association to pass them on.',
    volunteerName: 'First and last name',
    volunteerEmail: 'Email',
    volunteerPhone: 'Phone',
    volunteerSubmit: 'Prepare the message',
    volunteerSuccess: 'Noted on this screen only. Call +352 621 387 104 to pass it on.',
    accountTitle: 'Member area',
    accountText: 'Online access for responders is not open on this site.',
    accountId: 'Identifier',
    accountPassword: 'Password',
    accountSubmit: 'Continue',
    accountSuccess: 'No account is connected here. Contact the team on +352 621 387 104.',
    searchEmpty: 'Enter a keyword.',
    searchToast: 'Search: “{query}”',
    categoryToast: 'Related section: {cat}',
    langToast: 'Language: {lang}',
    quoteToast: 'Estimate noted. To pass it on, call +352 621 387 104. This site does not send the request.',
    mentionsTitle: 'Notice and sources',
    mentionsLead: 'Facts about the association come from its directory profile. The Luxembourg rescue framework comes from the public texts cited below.',
    mentionsBlocks: [
      { title: 'Publisher of these pages', text: 'Bénévoles Premiers Secours Team Luxembourg (B.P.S.T.L.), 8, rue des Romains, L-6478 Echternach. Phone +352 621 387 104. Directory profile: benevolat.lu.' },
      { title: 'Contact', text: 'Requests and applications are made by phone on +352 621 387 104. This site does not store a form.' },
      { title: 'Emergencies', text: 'This site is not an alerting channel. In an emergency, call 112.' },
    ],
  },
}

export function useLocale() {
  const locale = useState<LocaleCode>('locale', () => 'fr')
  const t = computed(() => messages[locale.value])

  function setLocale(code: LocaleCode) {
    locale.value = code
  }

  return { locale, t, setLocale }
}

export function useToast() {
  const message = useState('toast-message', () => '')
  const visible = useState('toast-visible', () => false)
  let timer: ReturnType<typeof setTimeout> | undefined

  function showToast(text: string) {
    message.value = text
    visible.value = true
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      visible.value = false
    }, 5200)
  }

  return { message, visible, showToast }
}

export function useModals() {
  const volunteerOpen = useState('modal-volunteer', () => false)
  const accountOpen = useState('modal-account', () => false)

  function openVolunteer() {
    volunteerOpen.value = true
  }

  function openAccount() {
    accountOpen.value = true
  }

  function closeModals() {
    volunteerOpen.value = false
    accountOpen.value = false
  }

  return { volunteerOpen, accountOpen, openVolunteer, openAccount, closeModals }
}

export function fill(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, value),
    template,
  )
}

export function useLogoSrc() {
  const config = useRuntimeConfig()
  return computed(() => {
    const base = config.app.baseURL || '/'
    return `${base.endsWith('/') ? base : `${base}/`}logo.png`
  })
}

export function useDoodle(name: string) {
  const config = useRuntimeConfig()
  return computed(() => {
    const base = config.app.baseURL || '/'
    return `${base.endsWith('/') ? base : `${base}/`}doodles/${name}.png`
  })
}

export function useAsset(path: string) {
  const config = useRuntimeConfig()
  const base = config.app.baseURL || '/'
  return `${base.endsWith('/') ? base : `${base}/`}${path.replace(/^\//, '')}`
}

export function useSources() {
  return sourceLinks
}

const sourceLinks = [
  {
    href: 'https://benevolat.lu/annuaire-associations/benevolle-premiers-secours-team-luxembourg',
    label: 'Agence du Bénévolat — fiche B.P.S.T.L.',
  },
  {
    href: 'https://112.public.lu/fr/urgences/ambulances.html',
    label: 'CGDIS — déclaration d’une manifestation',
  },
  {
    href: 'https://112.public.lu/fr/formation/premiersecours/reanimation-mit-aed/defibrillateurautomatiseexternefr.html',
    label: 'CGDIS — utilisation du DAE',
  },
  {
    href: 'https://legilux.public.lu/eli/etat/leg/loi/2018/03/27/a221/jo',
    label: 'Loi du 27 mars 2018 portant organisation de la sécurité civile',
  },
  {
    href: 'https://www.reagis.lu/',
    label: 'reagis.lu — carte nationale des défibrillateurs',
  },
  {
    href: 'https://www.mertzig.lu/fr/vie-communale/cours-formations/premiers-secours-defibrillateurs',
    label: 'Commune de Mertzig — premiers secours et DAE',
  },
]
