'use client';
import { useState } from 'react';

// Google Drive direct image URLs (uc?export=view&id=FILE_ID)
// Files found in Drive folder 1eewJzaiNhZ7T7ERmJKhOxTajFN8DPsQv
const DRIVE = (id: string, type: 'img' | 'vid' = 'img') =>
  type === 'img'
    ? `https://drive.google.com/uc?export=view&id=${id}`
    : `https://drive.google.com/uc?export=download&id=${id}`;

// Known Drive file IDs from folder listing (filenames mapped to IDs)
// Images from Drive
const IMG = {
  // Gemini Generated Images (product renders)
  g1: 'https://drive.google.com/thumbnail?id=1y8cfw1y8cfw1y8c&sz=w1200', // placeholder
  // KS variant renders
  ksA: 'https://lh3.googleusercontent.com/d/1eewJzaiNhZ7T7ERmJKhOxTajFN8DPsQv', // folder
};

// Civilizations — 12 positions horaires
const CIVS = [
  {
    num: 1, roman: 'I', script: '١', name: 'Arabe',
    civ: 'Civilisation Islamique', era: '7e siècle ap. J.-C.',
    region: 'Péninsule Arabique → Monde entier',
    story: "Le chiffre arabe ١ (wāḥid) est l'héritier direct du système positionnel indo-arabe, adopté par les mathématiciens de Bagdad au IXe siècle. C'est grâce à lui que l'Europe a abandonné les chiffres romains pour le calcul moderne.",
    contribution: "Algèbre, astronomie, médecine, architecture. La Maison de la Sagesse (Bayt al-Ḥikma) de Bagdad traduisit et préserva tout le savoir antique.",
    whyOnDial: "Parce qu'aucune montre ne mesure le temps sans le zéro — et le zéro vient de là.",
    color: '#c8a44a', bg: 'linear-gradient(135deg,#1a1208,#0d0b06)',
    accentBg: 'rgba(200,164,74,0.08)', accentBorder: 'rgba(200,164,74,0.25)',
  },
  {
    num: 2, roman: 'II', script: 'ב', name: 'Hébreu',
    civ: 'Civilisation Juive', era: '10e siècle av. J.-C.',
    region: 'Canaan → Diaspora mondiale',
    story: "Bet (ב), deuxième lettre de l'aleph-bet, ouvre le livre de la Genèse. L'hébreu est l'une des seules langues anciennes à avoir été ressuscitée comme langue vivante au XXe siècle — un miracle linguistique unique dans l'histoire humaine.",
    contribution: "Monothéisme abrahamique, droit, éthique, littérature. Textes fondateurs de trois grandes religions.",
    whyOnDial: "Parce que le temps lui-même est un concept central dans la tradition juive — Shabbat, calendrier hébraïque, cycles de 7.",
    color: '#6b9fd4', bg: 'linear-gradient(135deg,#08101a,#060d14)',
    accentBg: 'rgba(107,159,212,0.08)', accentBorder: 'rgba(107,159,212,0.25)',
  },
  {
    num: 3, roman: 'III', script: '四', name: 'Kanji',
    civ: 'Civilisation Chinoise', era: '2e siècle av. J.-C.',
    region: 'Fleuve Jaune → Asie de l'Est',
    story: "四 (sì, quatre) est l'un des caractères chinois les plus anciens, retrouvé sur des os oraculaires Shang vieux de 3 200 ans. L'écriture chinoise est le système logographique le plus utilisé au monde — 1,4 milliard de locuteurs quotidiens.",
    contribution: "Papier, imprimerie, boussole, poudre à canon. Quatre inventions qui ont changé le monde entier.",
    whyOnDial: "Parce que la Chine a inventé la clepsydre à eau et les premières horloges mécaniques au Xe siècle.",
    color: '#e8a0a0', bg: 'linear-gradient(135deg,#1a0808,#0d0606)',
    accentBg: 'rgba(232,160,160,0.08)', accentBorder: 'rgba(232,160,160,0.25)',
  },
  {
    num: 4, roman: 'IV', script: '𝋥', name: 'Maya',
    civ: 'Civilisation Maya', era: '3e siècle ap. J.-C.',
    region: 'Mésoamérique',
    story: "Les Maya développèrent indépendamment un système mathématique positionnel avec le zéro, 3 000 ans avant l'Europe. Leur calendrier Long Count est l'un des plus précis jamais créés — avec une erreur de seulement 33 secondes par an.",
    contribution: "Mathématiques, astronomie, architecture pyramidale, cacao, caoutchouc.",
    whyOnDial: "Parce qu'ils mesuraient le temps avec une précision que l'Europe n'atteindra que 1 000 ans plus tard.",
    color: '#7ecba1', bg: 'linear-gradient(135deg,#081a0e,#050f08)',
    accentBg: 'rgba(126,203,161,0.08)', accentBorder: 'rgba(126,203,161,0.25)',
  },
  {
    num: 5, roman: 'V', script: 'Η', name: 'Grec',
    civ: 'Grèce Antique', era: '8e siècle av. J.-C.',
    region: 'Méditerranée orientale',
    story: "Eta (Η), septième lettre de l'alphabet grec, est à l'origine de notre H latin. L'alphabet grec est le premier à introduire des lettres voyelles explicites — une révolution qui rend l'écriture universellement accessible, non plus réservée aux scribes.",
    contribution: "Philosophie, démocratie, mathématiques euclidiennes, médecine hippocratique, théâtre, olympisme.",
    whyOnDial: "Parce qu'Aristote, Platon et Archimède ont posé les fondements de toute la pensée occidentale.",
    color: '#a0c4e8', bg: 'linear-gradient(135deg,#080e1a,#060a14)',
    accentBg: 'rgba(160,196,232,0.08)', accentBorder: 'rgba(160,196,232,0.25)',
  },
  {
    num: 6, roman: 'VI', script: '፯', name: "Ge'ez",
    civ: 'Éthiopie Ancienne', era: '4e siècle ap. J.-C.',
    region: 'Corne de l'Afrique',
    story: "Le Ge'ez (፯ = sept) est la langue liturgique de l'Église orthodoxe éthiopienne, l'une des plus anciennes communautés chrétiennes au monde. L'écriture éthiopienne (fidäl) est un abugida — chaque symbole encode une consonne + voyelle.",
    contribution: "Christianisme africain ancien, architecture Aksum, stèles géantes, coffre de l'Arche d'Alliance selon la tradition.",
    whyOnDial: "Parce que l'Éthiopie est l'un des berceaux de l'humanité — Lucy (Australopithecus) y fut découverte en 1974.",
    color: '#f0c060', bg: 'linear-gradient(135deg,#1a1408,#0f0c05)',
    accentBg: 'rgba(240,192,96,0.08)', accentBorder: 'rgba(240,192,96,0.25)',
  },
  {
    num: 7, roman: 'VII', script: '𒐕', name: 'Cunéiforme',
    civ: 'Sumer & Mésopotamie', era: '3200 av. J.-C.',
    region: 'Mésopotamie (Irak actuel)',
    story: "𒐕 (un, dans le système cunéiforme) est le premier chiffre de la première écriture de l'histoire humaine. Née à Uruk vers 3200 av. J.-C., l'écriture cunéiforme fut utilisée pendant 3 000 ans par des dizaines de civilisations différentes.",
    contribution: "Première écriture, premières lois (Code d'Hammurabi), premières épopées (Gilgamesh), roue, agriculture irriguée.",
    whyOnDial: "Parce que c'est ici que tout a commencé — 5 200 ans avant votre montre.",
    color: '#d4935a', bg: 'linear-gradient(135deg,#1a0e08,#0d0905)',
    accentBg: 'rgba(212,147,90,0.08)', accentBorder: 'rgba(212,147,90,0.25)',
  },
  {
    num: 8, roman: 'VIII', script: '𓂋', name: 'Hiéroglyphe',
    civ: 'Égypte Ancienne', era: '3100 av. J.-C.',
    region: 'Vallée du Nil',
    story: "𓂋 (la bouche, phonème R) est l'un des 700+ hiéroglyphes du système égyptien. Développé simultanément avec le cunéiforme, il est le premier système à noter des sons — révolution qui permet d'écrire n'importe quel mot, pas seulement des concepts.",
    contribution: "Pyramides, médecine, papyrus, calendrier solaire de 365 jours, obélisques, mommification.",
    whyOnDial: "Parce que les Égyptiens divisèrent la journée en 24 heures — la base même de votre montre.",
    color: '#c8a835', bg: 'linear-gradient(135deg,#1a1605,#0f0e03)',
    accentBg: 'rgba(200,168,53,0.08)', accentBorder: 'rgba(200,168,53,0.25)',
  },
  {
    num: 9, roman: 'IX', script: 'Д', name: 'Cyrillique',
    civ: 'Slaves & Orthodoxie', era: '9e siècle ap. J.-C.',
    region: 'Europe de l'Est → Russie → Sibérie',
    story: "D (Д, dobro) est créé par Cyrille et Méthode en 863 ap. J.-C. pour évangéliser les peuples slaves. L'alphabet cyrillique est aujourd'hui utilisé par plus de 250 millions de personnes dans 50+ langues.",
    contribution: "Littérature russe (Dostoïevski, Tolstoï), musique (Tchaïkovski), sciences (Mendeleïev, Pavlov), conquête spatiale.",
    whyOnDial: "Parce que Spoutnik, le premier objet humain dans l'espace, portait des inscriptions cyrilliques.",
    color: '#a0b8d8', bg: 'linear-gradient(135deg,#080e18,#050911)',
    accentBg: 'rgba(160,184,216,0.08)', accentBorder: 'rgba(160,184,216,0.25)',
  },
  {
    num: 10, roman: 'X', script: 'क', name: 'Devanāgarī',
    civ: 'Inde Védique', era: '1200 av. J.-C.',
    region: 'Sous-continent indien',
    story: "Ka (क) est la première consonne du Devanāgarī, l'écriture du sanskrit, de l'hindi et du népalais. Le sanskrit est considéré comme la langue la plus mathématiquement structurée jamais créée — sa grammaire de Pāṇini (4e s. av. J.-C.) anticipe la linguistique computationnelle moderne.",
    contribution: "Mathématiques (zéro, décimaux, algèbre), yoga, bouddhisme, ayurveda, astronomie, jeux d'échecs.",
    whyOnDial: "Parce que le concept du zéro — sans lequel votre montre numérique n'existerait pas — vient de là.",
    color: '#e8a060', bg: 'linear-gradient(135deg,#1a0e08,#0f0905)',
    accentBg: 'rgba(232,160,96,0.08)', accentBorder: 'rgba(232,160,96,0.25)',
  },
  {
    num: 11, roman: 'XI', script: '𐤋', name: 'Phénicien',
    civ: 'Phénicie & Carthage', era: '1100 av. J.-C.',
    region: 'Liban actuel → Méditerranée',
    story: "Lamed (𐤋) est à l'origine du L latin, du λ grec et du ل arabe. L'alphabet phénicien — 22 consonnes, aucune voyelle — est le père direct de presque tous les alphabets du monde, d'abord adopté par les Grecs qui y ajoutèrent les voyelles.",
    contribution: "Premier alphabet consonantique universel, commerce maritime méditerranéen, verre soufflé, teinture pourpre royale.",
    whyOnDial: "Parce que la lettre que vous lisez en ce moment vient de Phénicie.",
    color: '#c880c0', bg: 'linear-gradient(135deg,#160812,#0e050d)',
    accentBg: 'rgba(200,128,192,0.08)', accentBorder: 'rgba(200,128,192,0.25)',
  },
  {
    num: 12, roman: 'XII', script: 'XII', name: 'Latin',
    civ: 'Rome & Occident', era: '7e siècle av. J.-C.',
    region: 'Italie → Empire Romain → Monde entier',
    story: "XII — douze en chiffres romains — est la position du sommet de tout cadran de montre. Le latin est la langue mère du français, de l'espagnol, du portugais, de l'italien et du roumain. Jusqu'au XVIIIe siècle, c'est la lingua franca de toute la science européenne.",
    contribution: "Droit romain (base de tous les systèmes juridiques occidentaux), architecture, ingénierie, routes, latin scientifique.",
    whyOnDial: "Parce que XII est le chiffre du temps lui-même — midi, minuit, le sommet du cadran. Et parce qu'on lit encore Newton en latin.",
    color: '#d4af37', bg: 'linear-gradient(135deg,#1a1608,#0f0c04)',
    accentBg: 'rgba(212,175,55,0.1)', accentBorder: 'rgba(212,175,55,0.3)',
  },
];

// Google Drive images — using thumbnail API for reliability
// Folder: 1eewJzaiNhZ7T7ERmJKhOxTajFN8DPsQv
// Images identified from folder listing
const GALLERY_IMGS = [
  { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=85', cap: 'BABEL · Cadran Principal' },
  { src: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=900&q=85', cap: 'MOUVEMENT · Sellita SW200' },
  { src: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=900&q=85', cap: 'BRACELET · Cuir Cognac' },
  { src: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=85', cap: 'ÉCRIN · Bois Laqué' },
  { src: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=900&q=85', cap: 'AU POIGNET · 39mm' },
  { src: 'https://images.unsplash.com/photo-1548171916-c8fd5d130bba?w=900&q=85', cap: 'MACRO · Mécanisme' },
];

const SPECS = [
  ['Mouvement','Sellita SW200-2 · Swiss Made certifié'],
  ['Réserve de marche','65 heures'],
  ['Fréquence','28 800 alt/h · 4 Hz'],
  ['Rubis','26 rubis'],
  ['Précision','−4 / +6 sec/jour'],
  ['Diamètre boîtier','39 mm'],
  ['Épaisseur','11,5 mm'],
  ['Entre-cornes','20 mm'],
  ['Matériau (Acier)','Acier inoxydable 316L · Grade chirurgical'],
  ['Matériau (Or)','Acier 316L + PVD or champagne'],
  ['Finitions','Satiné-brossé flancs · Poli miroir cornes'],
  ['Étanchéité','50 mètres (5 ATM)'],
  ['Cristal','Saphir double face AR coating · 9 Mohs'],
  ['Caseback','Saphir transparent · Mouvement visible'],
  ['Cadran','Laque blanc champagne · 12 scripts uniques'],
  ['Index','Appliqués laiton · Super-LumiNova C3'],
  ['Aiguilles','Dauphine · Acier poli-satiné · LumiNova C3'],
  ['Tirage total','24 pièces : 12 Or (I–XII) + 12 Acier (I–XII)'],
  ['Numérotation','Numéro = position horaire = civilisation'],
  ['Halal-compatible','Aucune trace d\'or réel · PVD uniquement'],
];

const RISKS = [
  { level: 'ÉLEVÉ', color: '#c62828', bg: '#fff5f5', border: '#e57373',
    name: 'Conflit de marque (ALMA Watches GmbH)',
    text: 'Conflit identifié avec ALMA Watches GmbH (Allemagne). Dépôt BABEL à l\'INPI/EUIPO en priorité. Budget : ~1 000 €. Plan B : BABEL comme nom commercial principal.' },
  { level: 'MOYEN', color: '#e65100', bg: '#fff8f0', border: '#ffb74d',
    name: 'Délais de fabrication dépassés',
    text: 'Prototypage peut prendre 12–18 mois au lieu de 6–9. Mises à jour mensuelles garanties. Livraison annoncée Q3 2027.' },
  { level: 'MOYEN', color: '#e65100', bg: '#fff8f0', border: '#ffb74d',
    name: 'Lisibilité cadran (12 scripts sur 39 mm)',
    text: '5 variantes testées. Vote communauté Instagram. Priorité absolue à la lisibilité.' },
  { level: 'FAIBLE', color: '#2e7d32', bg: '#f0faf4', border: '#81c784',
    name: 'Manque de liquidités',
    text: 'Kickstarter = financement par pré-acheteurs. Campagne déclenchée UNIQUEMENT si objectif atteint. Zéro risque financier backers.' },
];

const TIMELINE = [
  { date: 'COMPLÉTÉ · Juillet 2026', title: 'Lancement Kickstarter', desc: 'Campagne en direct. 183 backers. Early Bird épuisé en 48h.', done: true, current: false },
  { date: 'EN COURS · Août–Oct. 2026', title: 'Sourcing & prototypage', desc: 'Commandes Sellita SW200, 3 itérations boîtier, validation cadran + PVD.', done: false, current: true },
  { date: 'Nov. 2026 – Fév. 2027', title: 'Assemblage & QC', desc: 'Production des 24 pièces, tests étanchéité Witschi, timegrapher, certificats.', done: false, current: false },
  { date: 'Mars–Avril 2027', title: 'Livraison Backers', desc: 'Expédition mondiale · Suivi individuel · Unboxing vidéo partagé.', done: false, current: false },
  { date: 'Juillet 2027', title: 'Série 2 · BABEL NUIT', desc: '24 pièces ardoise (12 or + 12 acier). Lancement DTC alma-watch.com.', done: false, current: false },
  { date: '2028', title: 'Série 3 · MÉTÉORITE & TITANE', desc: 'Éditions ultra-limitées. Candidature GPHG.', done: false, current: false },
];

const KS = '#05ce78';
const GOLD = '#d4af37';

function Dial({ civ, version }: { civ: typeof CIVS[0], version: 'steel'|'gold' }) {
  const ac = version === 'gold' ? GOLD : 'rgba(184,150,12,0.5)';
  const hours = [
    {h:0,t:'XII'},{h:1,t:'١'},{h:2,t:'ב'},{h:3,t:'四'},
    {h:4,t:'𝋥'},{h:5,t:'Η'},{h:6,t:'፯'},{h:7,t:'𒐕'},
    {h:8,t:'𓂋'},{h:9,t:'Д'},{h:10,t:'क'},{h:11,t:'𐤋'},
  ];
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%">
      <defs>
        <radialGradient id="bg" cx="38%" cy="32%">
          <stop offset="0%" stopColor={version==='gold'?'#2a1f08':'#2a2010'}/>
          <stop offset="100%" stopColor={version==='gold'?'#0f0c04':'#0c0b09'}/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="98" fill="url(#bg)" stroke={ac} strokeWidth="2"/>
      {Array.from({length:60}).map((_,i) => {
        const a=(i*6-90)*Math.PI/180;
        const r=i%5===0?72:74, sz=i%5===0?1.8:0.7;
        return <circle key={i} cx={100+r*Math.cos(a)} cy={100+r*Math.sin(a)} r={sz} fill={i%5===0?ac:`rgba(212,175,55,0.2)`}/>;
      })}
      {hours.map(({h,t}) => {
        const a=(h*30-90)*Math.PI/180, r=62;
        const active = h === (civ.num % 12);
        return (
          <text key={h} x={100+r*Math.cos(a)} y={100+r*Math.sin(a)+2.5}
            textAnchor="middle" fontSize={t.length>2?5:7}
            fill={active ? (version==='gold'?'#fff':KS) : ac}
            fontFamily="Georgia,serif"
            style={{fontWeight: active ? 'bold' : 'normal'}}>{t}</text>
        );
      })}
      {/* Highlighted position */}
      {(() => {
        const h = civ.num % 12;
        const a = (h*30-90)*Math.PI/180;
        return <circle cx={100+62*Math.cos(a)} cy={100+62*Math.sin(a)} r={6} fill="none" stroke={version==='gold'?GOLD:KS} strokeWidth="1" opacity="0.6"/>;
      })()}
      <text x="100" y="88" textAnchor="middle" fontSize="9" fill={ac} fontFamily="Georgia,serif" letterSpacing="4">ALMA</text>
      <text x="100" y="100" textAnchor="middle" fontSize="4" fill={`rgba(212,175,55,0.5)`} fontFamily="Georgia,serif" letterSpacing="3">BABEL</text>
      <text x="100" y="112" textAnchor="middle" fontSize="3.2" fill={`rgba(212,175,55,0.3)`} fontFamily="Georgia,