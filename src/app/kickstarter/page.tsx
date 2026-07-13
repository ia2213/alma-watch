'use client';
import { useState, useEffect } from 'react';

const CIVS = [
  { num:1,  roman:'I',    script:'١', name:'Arabe',        civ:'Civilisation Islamique',       era:'7e s. ap. J.-C.',    region:'Péninsule Arabique → Monde',         color:'#c8a44a', bg:'#1a1208', story:"Le chiffre arabe ١ (wāḥid) est l'héritier du système positionnel indo-arabe adopté par les mathématiciens de Bagdad au IXe siècle.",          contribution:"Algèbre, astronomie, médecine, architecture.",                                                                     whyOnDial:"Parce qu'aucune montre ne mesure le temps sans le zéro — et le zéro vient de là." },
  { num:2,  roman:'II',   script:'২', name:'Bengali',      civ:'Monde Bengali',                era:'10e s. ap. J.-C.',   region:'Bengale',                             color:'#6b9fd4', bg:'#08101a', story:"২ est la forme bengalie du chiffre 2, héritière de la tradition numérique indo-arabe.",                                                    contribution:"Littérature, poésie, mathématiques, culture savante du sous-continent indien.",                                       whyOnDial:"Parce que les chiffres indiens ont voyagé et donné naissance à de multiples formes vivantes aujourd'hui." },
  { num:3,  roman:'III',  script:'3', name:'Chiffre mod.', civ:'Monde contemporain',            era:'Époque moderne',     region:'Usage universel',                     color:'#e8a0a0', bg:'#1a0808', story:"Le 3 moderne est l'aboutissement d'une longue évolution graphique venue des traditions numériques d'Asie du Sud.",                          contribution:"Standardisation universelle des nombres, lisibilité globale, transmission scientifique.",                               whyOnDial:"Parce que certains signes dépassent leur civilisation d'origine pour devenir universels." },
  { num:4,  roman:'IV',   script:'– – – –', name:'Traits', civ:'Système additif primitif',    era:'Antiquité',          region:'Usage pluriel',                       color:'#7ecba1', bg:'#081a0e', story:"Quatre traits rappellent les systèmes additifs les plus anciens où compter revenait à répéter des marques simples.",                      contribution:"Naissance du comptage, mémoire matérielle, premières notations quantitatives.",                                        whyOnDial:"Parce que toute numération commence par le geste le plus simple : tracer un signe." },
  { num:5,  roman:'V',    script:'ה', name:'Hébreu',       civ:'Civilisation Juive',           era:'10e s. av. J.-C.',   region:'Canaan → Diaspora mondiale',          color:'#a0c4e8', bg:'#080e1a', story:"ה (hé) porte une grande charge symbolique dans la tradition hébraïque. L'écriture hébraïque traverse les siècles comme langue sacrée, érudite puis nationale retrouvée.", contribution:"Monothéisme, droit, éthique, littérature, exégèse et transmission textuelle.",                                           whyOnDial:"Parce que le temps, les cycles et le calendrier occupent une place centrale dans la tradition juive." },
  { num:6,  roman:'VI',   script:'๖', name:'Thaï',         civ:'Thaïlande',                    era:'13e s. ap. J.-C.',   region:'Asie du Sud-Est',                     color:'#f0c060', bg:'#1a1408', story:"๖ est le chiffre thaï pour 6, issu des grandes familles graphiques du monde indien diffusées en Asie du Sud-Est.",                          contribution:"Culture lettrée siamoise, bouddhisme theravāda, architecture, arts de cour.",                                          whyOnDial:"Parce que le temps universel mérite aussi les formes vivantes de l'Asie du Sud-Est." },
  { num:7,  roman:'VII',  script:'⴦', name:'Géorgien',     civ:'Géorgie',                      era:'Antiquité tardive',  region:'Caucase',                             color:'#d4935a', bg:'#1a0e08', story:"⴦ appartient à l'alphabet géorgien, l'un des systèmes d'écriture les plus singuliers du monde.",                                         contribution:"Christianisme caucasien, littérature, manuscrits, culture savante du Caucase.",                                        whyOnDial:"Parce que le cadran doit célébrer les alphabets rares qui ont survécu aux empires." },
  { num:8,  roman:'VIII', script:'፰', name:"Ge'ez",        civ:'Éthiopie Ancienne',            era:'4e s. ap. J.-C.',    region:"Corne de l'Afrique",                  color:'#c8a835', bg:'#1a1605', story:"፰ est le chiffre éthiopien pour 8 en Ge'ez. L'Éthiopie a conservé une tradition écrite continue parmi les plus anciennes du continent africain.", contribution:"Christianisme africain ancien, architecture Aksum, manuscrits, tradition liturgique continue.",                          whyOnDial:"Parce que l'Éthiopie relie antiquité, foi, écriture et mémoire humaine sur la longue durée." },
  { num:9,  roman:'IX',   script:'Θ', name:'Grec',          civ:'Grèce Antique',                era:'8e s. av. J.-C.',    region:'Méditerranée orientale',              color:'#a0b8d8', bg:'#080e18', story:"Theta (Θ) appartient au système grec qui a tant marqué la philosophie, les mathématiques et la science.",                               contribution:"Philosophie, démocratie, mathématiques euclidiennes, médecine hippocratique, théâtre.",                                 whyOnDial:"Parce que la pensée grecque a structuré notre manière de mesurer, nommer et raisonner." },
  { num:10, roman:'X',    script:'十', name:'Chinois',      civ:'Civilisation Chinoise',        era:'2e s. av. J.-C.',    region:"Fleuve Jaune → Asie de l'Est",       color:'#e8a060', bg:'#1a0e08', story:"十 signifie dix en chinois. Un seul signe exprime la force de concision d'une écriture logographique parmi les plus anciennes et vivantes du monde.", contribution:"Papier, imprimerie, boussole, poudre à canon, administration savante, cosmologie.",                                     whyOnDial:"Parce que la Chine a transformé notre rapport au savoir, au temps et à la transmission." },
  { num:11, roman:'XI',   script:'𒐫𒄹', name:'Cunéiforme',  civ:'Sumer & Mésopotamie',         era:'3200 av. J.-C.',     region:'Mésopotamie (Irak actuel)',            color:'#c880c0', bg:'#160812', story:"𒐫𒄹 évoque la notation numérique cunéiforme issue de la première grande civilisation de l'écrit.",                                    contribution:"Première écriture, premières lois, premières comptabilités complexes, villes et archives.",                              whyOnDial:"Parce que c'est là que l'humanité a commencé à écrire, compter et conserver le temps." },
  { num:12, roman:'XII',  script:'XII', name:'Latin',       civ:'Rome & Occident',              era:'7e s. av. J.-C.',    region:'Italie → Empire Romain → Monde',      color:'#d4af37', bg:'#1a1608', story:"XII — douze en chiffres romains — est la forme emblématique du sommet du cadran.",                                                   contribution:"Droit romain, architecture, ingénierie, routes, latin scientifique universel.",                                         whyOnDial:"Parce que XII est le chiffre du temps lui-même — midi, minuit, le sommet du cadran." },
];

const GALLERY = [
  { src:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=85', cap:'CADRAN · Vue principale' },
  { src:'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=900&q=85',  cap:'MOUVEMENT · Sellita SW200' },
  { src:'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=900&q=85', cap:'BRACELET · Cuir Cognac' },
  { src:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=85', cap:'ÉCRIN · Bois Laqué' },
  { src:'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=900&q=85', cap:'AU POIGNET · 39mm' },
  { src:'https://images.unsplash.com/photo-1548171916-c8fd5d130bba?w=900&q=85',  cap:'MACRO · Mécanisme' },
];

const SPECS = [
  ['Mouvement',        'Sellita SW200-2 · Swiss Made'],
  ['Réserve de marche','65 heures'],
  ['Fréquence',        '28 800 alt/h · 4 Hz'],
  ['Rubis',            '26 rubis'],
  ['Précision',        '−4 / +6 sec/jour'],
  ['Diamètre',         '39 mm'],
  ['Épaisseur',        '11,5 mm'],
  ['Entre-cornes',     '20 mm'],
  ['Matériau Acier',   '316L · Grade chirurgical'],
  ['Matériau Or',      '316L + PVD or champagne · Halal-compatible'],
  ['Étanchéité',       '50 m (5 ATM)'],
  ['Cristal',          'Saphir double face AR · 9 Mohs'],
  ['Caseback',         'Saphir transparent · Mouvement visible'],
  ['Cadran',           'Laque blanc champagne · 12 scripts uniques'],
  ['Tirage',           '24 pièces limitées + reward édition ouverte'],
  ['Numérotation',     'N° pièce = position horaire = civilisation'],
];

const RISKS = [
  { level:'ÉLEVÉ',  color:'#c62828', bg:'#fff5f5', border:'#e57373', name:'Conflit de marque (ALMA Watches GmbH)', text:"Conflit identifié avec ALMA Watches GmbH (DE). Dépôt BABEL à l'INPI/EUIPO en cours. Budget ~1 000 €. Plan B : BABEL comme nom principal." },
  { level:'MOYEN',  color:'#e65100', bg:'#fff8f0', border:'#ffb74d', name:'Délais de fabrication dépassés',         text:"Prototypage peut prendre 12–18 mois. Mises à jour mensuelles garanties. Livraison cible : Q3 2027." },
  { level:'MOYEN',  color:'#e65100', bg:'#fff8f0', border:'#ffb74d', name:'Lisibilité cadran (12 scripts/39 mm)',   text:"5 variantes testées. Vote communauté Instagram. Priorité absolue : lisibilité sur exhaustivité." },
  { level:'FAIBLE', color:'#2e7d32', bg:'#f0faf4', border:'#81c784', name:'Risque financier backers',               text:"Kickstarter = fonds collectés SEULEMENT si objectif atteint. Zéro risque pour les contributeurs." },
];

const TIMELINE = [
  { done:true,  cur:false, date:'Juillet 2026',          title:'Lancement Kickstarter',          desc:'183 backers. Early Bird épuisé en 48h.' },
  { done:false, cur:true,  date:'Août–Oct. 2026',         title:'Sourcing & prototypage',         desc:'Commandes Sellita, 3 itérations boîtier, validation cadran + PVD.' },
  { done:false, cur:false, date:'Nov. 2026–Fév. 2027',    title:'Assemblage & QC',                desc:'24 pièces, tests Witschi, timegrapher, certificats numérotés.' },
  { done:false, cur:false, date:'Mars–Avr. 2027',         title:'Livraison Backers',              desc:'Expédition mondiale · Suivi individuel · Unboxing vidéo.' },
  { done:false, cur:false, date:'Juil. 2027',             title:'Édition ouverte',                desc:'Ouverture du reward sans limite avec cadran BABEL standardisé.' },
  { done:false, cur:false, date:'2028',                   title:'Série 3 · MÉTÉORITE & TITANE',  desc:'Ultra-limitées. Candidature GPHG.' },
];

const KS   = '#05ce78';
const GOLD = '#d4af37';
const TABS = [
  { id:'story',    label:'HISTOIRE' },
  { id:'pieces',   label:'LES 24 PIÈCES' },
  { id:'specs',    label:'SPECS' },
  { id:'timeline', label:'CALENDRIER' },
  { id:'risks',    label:'RISQUES & FAQ' },
];

function Dial({ civ, version }: { civ: typeof CIVS[0]; version: 'steel' | 'gold' }) {
  const ac = version === 'gold' ? GOLD : 'rgba(184,150,12,0.55)';
  const hrs = [
    { h:0,  t:'XII' }, { h:1,  t:'١' },    { h:2,  t:'২' },
    { h:3,  t:'3' },   { h:4,  t:'– – – –' }, { h:5,  t:'ה' },
    { h:6,  t:'๖' },   { h:7,  t:'⴦' },    { h:8,  t:'፰' },
    { h:9,  t:'Θ' },   { h:10, t:'十' },   { h:11, t:'𒐫𒄹' },
  ];
  const activePosH = civ.num === 12 ? 0 : civ.num;
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%">
      <defs>
        <radialGradient id={`bg-${version}`} cx="38%" cy="32%">
          <stop offset="0%"   stopColor={version === 'gold' ? '#2a1f08' : '#252018'} />
          <stop offset="100%" stopColor={version === 'gold' ? '#0f0c04' : '#0c0b09'} />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="98" fill={`url(#bg-${version})`} stroke={ac} strokeWidth="2" />
      {Array.from({ length: 60 }).map((_, i) => {
        const a = (i * 6 - 90) * Math.PI / 180;
        const r = i % 5 === 0 ? 72 : 74;
        return <circle key={i} cx={100 + r * Math.cos(a)} cy={100 + r * Math.sin(a)} r={i % 5 === 0 ? 1.8 : 0.7} fill={i % 5 === 0 ? ac : 'rgba(212,175,55,0.2)'} />;
      })}
      {hrs.map(({ h, t }) => {
        const a = (h * 30 - 90) * Math.PI / 180;
        const isActive = h === activePosH;
        const fs = t.length > 5 ? 3.2 : t.length > 3 ? 4.2 : t.length > 2 ? 5 : 7;
        return (
          <g key={h}>
            {isActive && <circle cx={100 + 62 * Math.cos(a)} cy={100 + 62 * Math.sin(a)} r={8} fill={version === 'gold' ? 'rgba(212,175,55,0.2)' : 'rgba(5,206,120,0.15)'} stroke={version === 'gold' ? GOLD : KS} strokeWidth="1" />}
            <text x={100 + 62 * Math.cos(a)} y={100 + 62 * Math.sin(a) + 2.8} textAnchor="middle" fontSize={fs}
              fill={isActive ? (version === 'gold' ? '#fff' : KS) : ac}
              fontFamily="Georgia,serif" fontWeight={isActive ? 'bold' : 'normal'}>{t}</text>
          </g>
        );
      })}
      <text x="100" y="87"  textAnchor="middle" fontSize="9" fill={ac}                        fontFamily="Georgia,serif" letterSpacing="4">ALMA</text>
      <text x="100" y="99"  textAnchor="middle" fontSize="4" fill="rgba(212,175,55,0.45)"    fontFamily="Georgia,serif" letterSpacing="3">BABEL</text>
      <text x="100" y="111" textAnchor="middle" fontSize="3" fill="rgba(212,175,55,0.25)"    fontFamily="Georgia,serif" letterSpacing="2">SWISS MADE</text>
      <line x1="100" y1="100" x2="88"  y2="55"  stroke={GOLD}     strokeWidth="3" strokeLinecap="round" />
      <line x1="100" y1="100" x2="130" y2="70"  stroke="#e8e2d6" strokeWidth="2" strokeLinecap="round" />
      <line x1="100" y1="100" x2="75"  y2="135" stroke="#e05050" strokeWidth="1" strokeLinecap="round" />
      <circle cx="100" cy="100" r="4" fill={GOLD} />
      <circle cx="100" cy="100" r="2" fill="#fff" />
    </svg>
  );
}

function VideoPlaceholder({ label }: { label: string }) {
  return (
    <div style={{ width:'100%', aspectRatio:'16/9', borderRadius:12, background:'linear-gradient(135deg,#0f0e0a 0%,#1c1608 50%,#0c0b06 100%)', border:'1px solid rgba(212,175,55,0.2)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12 }}>
      <div style={{ width:56, height:56, borderRadius:'50%', background:'rgba(212,175,55,0.08)', border:'1.5px solid rgba(212,175,55,0.3)', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <polygon points="6,4 20,12 6,20" fill={GOLD} opacity="0.7" />
        </svg>
      </div>
      <div style={{ fontSize:10, letterSpacing:'0.2em', color:'rgba(212,175,55,0.5)', fontWeight:700 }}>{label}</div>
      <div style={{ fontSize:10, color:'rgba(255,255,255,0.2)', letterSpacing:'0.1em' }}>VIDÉO À VENIR</div>
    </div>
  );
}

function GalleryPlaceholder({ cap }: { cap: string }) {
  return (
    <div style={{ width:'100%', aspectRatio:'4/3', borderRadius:8, background:'linear-gradient(135deg,#181510,#222016)', border:'1px solid rgba(212,175,55,0.12)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:8 }}>
      <div style={{ fontSize:9, letterSpacing:'0.18em', color:'rgba(212,175,55,0.35)', fontWeight:700 }}>{cap}</div>
      <div style={{ fontSize:9, color:'rgba(255,255,255,0.15)', letterSpacing:'0.08em' }}>IMAGE À VENIR</div>
    </div>
  );
}

export default function KickstarterPage() {
  const [tab,    setTab]    = useState('story');
  const [num,    setNum]    = useState(1);
  const [ver,    setVer]    = useState<'steel' | 'gold'>('steel');
  const [reward, setReward] = useState<'limited' | 'open'>('limited');
  const [lbx,    setLbx]   = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const civ      = CIVS[num - 1];
  const funded   = 28150, goal = 42000, pct = Math.round(funded / goal * 100);
  const price    = reward === 'open' ? 1900 : (ver === 'gold' ? 4900 : 4500);
  const dialSize = mobile ? 'min(74vw, 280px)' : '300px';
  const px       = mobile ? 16 : 32;

  return (
    <div style={{ fontFamily:"'Helvetica Neue',Arial,sans-serif", background:'#f7f7f7', minHeight:'100vh', color:'#222' }}>

      {/* TOP BAR */}
      <div style={{ background:KS, padding:mobile ? '8px 16px' : '9px 24px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:8 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8, fontWeight:700, fontSize:14 }}>
          <svg width="18" height="18" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill={KS} /><path d="M10 8v16M10 16l5-8 7 8-7 8-5-8z" stroke="#000" strokeWidth="2.5" strokeLinejoin="round" /></svg>
          Kickstarter
        </div>
        {!mobile && <span style={{ fontSize:12, fontWeight:600 }}>Campagne en cours · <strong>14 jours restants</strong></span>}
        <a href="#pledge" style={{ background:'#000', color:KS, padding:'6px 16px', borderRadius:4, textDecoration:'none', fontSize:12, fontWeight:700, whiteSpace:'nowrap' }}>Soutenir →</a>
      </div>

      {/* NAV */}
      <nav style={{ background:'#fff', borderBottom:'1px solid #e0e0e0', padding:mobile ? '0 16px' : '0 32px', display:'flex', alignItems:'center', justifyContent:'space-between', position:'sticky', top:0, zIndex:100, boxShadow:'0 1px 4px rgba(0,0,0,0.06)', overflowX:'auto' }}>
        <div style={{ display:'flex', alignItems:'center', gap:mobile ? 12 : 24, flexShrink:0 }}>
          <span style={{ padding:'14px 0', fontWeight:700, fontSize:mobile ? 13 : 15, letterSpacing:'0.08em', whiteSpace:'nowrap' }}>ALMA · BABEL</span>
          {!mobile && ['Campagne', 'Mises à jour (3)', 'Commentaires (47)'].map(l => (
            <a key={l} href="#" style={{ color:l === 'Campagne' ? '#222' : '#888', fontSize:13, textDecoration:'none', padding:'20px 4px', borderBottom:l === 'Campagne' ? `2px solid ${KS}` : '2px solid transparent', fontWeight:l === 'Campagne' ? 700 : 400, whiteSpace:'nowrap' }}>{l}</a>
          ))}
        </div>
        <a href="#pledge" style={{ background:KS, color:'#000', fontWeight:700, fontSize:12, padding:'9px 18px', borderRadius:4, textDecoration:'none', whiteSpace:'nowrap', flexShrink:0 }}>Soutenir</a>
      </nav>

      {/* HERO */}
      <div style={{ background:'linear-gradient(135deg,#0f0e0a,#1c1608 55%,#0c0b06)', padding:mobile ? '40px 16px 36px' : `64px ${px}px 56px` }}>
        <div style={{ maxWidth:1140, margin:'0 auto', display:'grid', gridTemplateColumns:mobile ? '1fr' : '1fr 380px', gap:mobile ? 32 : 64, alignItems:'center' }}>
          <div>
            <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(5,206,120,0.1)', border:'1px solid rgba(5,206,120,0.3)', borderRadius:20, padding:'5px 14px', marginBottom:18 }}>
              <span style={{ width:7, height:7, borderRadius:'50%', background:KS, display:'inline-block' }} />
              <span style={{ color:KS, fontSize:10, letterSpacing:'0.15em', fontWeight:700 }}>KICKSTARTER — EN DIRECT</span>
            </div>
            <h1 style={{ fontSize:mobile ? 'clamp(2.6rem,11vw,4rem)' : 'clamp(3rem,5.5vw,5rem)', fontWeight:200, letterSpacing:'0.18em', color:GOLD, lineHeight:1.05, marginBottom:8, fontFamily:'Georgia,serif' }}>ALMA<br />BABEL</h1>
            <p style={{ fontSize:mobile ? 14 : 17, color:'#ccc', fontWeight:300, letterSpacing:'0.08em', marginBottom:14 }}>12 Civilisations. 24 Pièces. 1 Édition Ouverte.</p>
            <p style={{ fontSize:mobile ? 13 : 14, color:'#999', lineHeight:1.9, maxWidth:520, marginBottom:24 }}>
              La première montre mécanique suisse portant les 12 scripts sélectionnés pour BABEL.
              <strong style={{ color:GOLD }}> 24 pièces limitées</strong> numérotées +
              un reward <strong style={{ color:KS }}>édition ouverte</strong> sans limite.
            </p>
            <div style={{ display:'flex', gap:10, flexDirection:mobile ? 'column' : 'row' }}>
              <a href="#pledge" style={{ background:KS, color:'#000', fontWeight:700, fontSize:13, padding:'14px 28px', borderRadius:4, textDecoration:'none', textAlign:'center' }}>Réserver</a>
              <button onClick={() => setTab('pieces')} style={{ background:'transparent', color:GOLD, fontSize:13, padding:'13px 28px', borderRadius:4, border:`1px solid ${GOLD}`, cursor:'pointer' }}>Voir les pièces</button>
            </div>
          </div>

          {/* DIAL */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:16 }}>
            {reward === 'limited' && (
              <div style={{ display:'flex', gap:0, background:'rgba(255,255,255,0.06)', borderRadius:6, overflow:'hidden', border:'1px solid rgba(255,255,255,0.1)' }}>
                {(['steel', 'gold'] as const).map(v => (
                  <button key={v} onClick={() => setVer(v)} style={{ padding:'8px 18px', background:ver === v ? (v === 'gold' ? GOLD : 'rgba(255,255,255,0.12)') : 'transparent', color:ver === v ? (v === 'gold' ? '#000' : '#fff') : '#888', border:'none', cursor:'pointer', fontSize:10, fontWeight:700, letterSpacing:'0.1em' }}>
                    {v === 'steel' ? '⚙ ACIER' : '✦ OR PVD'}
                  </button>
                ))}
              </div>
            )}
            <div style={{ width:dialSize, height:dialSize, borderRadius:'50%', border:`2px solid ${reward === 'open' ? KS : (ver === 'gold' ? 'rgba(212,175,55,0.55)' : 'rgba(184,150,12,0.3)')}`, boxShadow:reward === 'open' ? '0 0 60px rgba(5,206,120,0.15)' : (ver === 'gold' ? '0 0 60px rgba(212,175,55,0.12)' : '0 0 40px rgba(0,0,0,0.4)'), transition:'all 0.4s' }}>
              <Dial civ={civ} version={reward === 'open' ? 'steel' : ver} />
            </div>
            <div style={{ textAlign:'center' }}>
              <div style={{ color:reward === 'open' ? KS : GOLD, fontSize:10, letterSpacing:'0.18em', fontWeight:700 }}>BABEL {reward === 'open' ? 'ÉDITION OUVERTE' : (ver === 'gold' ? 'OR PVD' : 'ACIER 316L')}</div>
              <div style={{ color:'#555', fontSize:10, letterSpacing:'0.1em', marginTop:3 }}>{reward === 'open' ? 'SANS NUMÉRO FIXE · SANS LIMITE' : ('PIÈCE ' + civ.roman + ' · ' + civ.name + ' · ' + civ.era)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* FUNDING BAR */}
      <div style={{ background:'#fff', borderBottom:'2px solid #f0f0f0', padding:mobile ? '18px 16px' : `24px ${px}px` }}>
        <div style={{ maxWidth:1140, margin:'0 auto' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:mobile ? 12 : 48, alignItems:'center', marginBottom:14 }}>
            <div><div style={{ fontSize:mobile ? 20 : 30, fontWeight:800, color:KS }}>{funded.toLocaleString('fr-FR')} €</div><div style={{ fontSize:10, color:'#888', letterSpacing:'0.08em' }}>SUR {goal.toLocaleString('fr-FR')} €</div></div>
            <div><div style={{ fontSize:mobile ? 20 : 30, fontWeight:800 }}>183</div><div style={{ fontSize:10, color:'#888', letterSpacing:'0.08em' }}>BACKERS</div></div>
            <div><div style={{ fontSize:mobile ? 20 : 30, fontWeight:800 }}>{pct}%</div><div style={{ fontSize:10, color:'#888', letterSpacing:'0.08em' }}>FINANCÉ</div></div>
          </div>
          <div style={{ height:6, background:'#f0f0f0', borderRadius:3, overflow:'hidden' }}>
            <div style={{ height:'100%', width:`${pct}%`, background:`linear-gradient(90deg,${KS},#04b368)`, borderRadius:3 }} />
          </div>
          <div style={{ marginTop:10, fontSize:12, color:'#888', textAlign:'center' }}><strong style={{ color:'#222', fontSize:16 }}>14</strong> jours restants</div>
        </div>
      </div>

      {/* GALERIE */}
      <div style={{ background:'#111', padding:mobile ? '32px 16px' : '48px 32px' }}>
        <div style={{ maxWidth:1140, margin:'0 auto' }}>
          <div style={{ marginBottom:20 }}>
            <p style={{ fontSize:10, color:GOLD, letterSpacing:'0.2em', fontWeight:700, marginBottom:4 }}>GALERIE PRODUIT</p>
            <h2 style={{ fontSize:mobile ? 18 : 22, fontWeight:300, letterSpacing:'0.1em', color:'#eee', fontFamily:'Georgia,serif' }}>ALMA BABEL · Vues</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:mobile ? '1fr 1fr' : '1fr 1fr 1fr', gap:mobile ? 10 : 14 }}>
            {GALLERY.map((g, i) => (
              g.src ? (
                <div key={i} onClick={() => setLbx(g.src)}
                  style={{ cursor:'pointer', borderRadius:8, overflow:'hidden', aspectRatio:'4/3', background:'#1a1a1a', border:'1px solid rgba(255,255,255,0.06)', position:'relative', transition:'transform 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <img src={g.src} alt={g.cap} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                  <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(transparent,rgba(0,0,0,0.7))', padding:'20px 10px 8px' }}>
                    <span style={{ fontSize:9, color:'rgba(212,175,55,0.8)', letterSpacing:'0.15em', fontWeight:700 }}>{g.cap}</span>
                  </div>
                </div>
              ) : (
                <GalleryPlaceholder key={i} cap={g.cap} />
              )
            ))}
          </div>
        </div>
      </div>

      {/* VIDÉO */}
      <div style={{ background:'#0d0c09', padding:mobile ? '32px 16px' : '48px 32px' }}>
        <div style={{ maxWidth:1140, margin:'0 auto' }}>
          <div style={{ marginBottom:20 }}>
            <p style={{ fontSize:10, color:KS, letterSpacing:'0.2em', fontWeight:700, marginBottom:4 }}>FILM DE CAMPAGNE</p>
            <h2 style={{ fontSize:mobile ? 18 : 22, fontWeight:300, letterSpacing:'0.1em', color:'#eee', fontFamily:'Georgia,serif' }}>Voir ALMA BABEL en mouvement</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:mobile ? '1fr' : '1fr 1fr', gap:mobile ? 16 : 20 }}>
            <VideoPlaceholder label="FILM DE CAMPAGNE" />
            <VideoPlaceholder label="MOUVEMENT · MAKING-OF" />
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div style={{ maxWidth:1140, margin:'0 auto', padding:mobile ? '0 16px' : `0 ${px}px`, display:'grid', gridTemplateColumns:mobile ? '1fr' : '1fr 340px', gap:mobile ? 24 : 48, alignItems:'start' }}>

        {/* CONTENT */}
        <div style={{ paddingTop:28 }}>
          <div style={{ display:'flex', borderBottom:'2px solid #e8e8e8', marginBottom:28, gap:0, overflowX:'auto' }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{ background:'none', border:'none', cursor:'pointer', padding:mobile ? '10px 12px' : '12px 18px', fontSize:mobile ? 10 : 11, fontWeight:700, letterSpacing:'0.08em', color:tab === t.id ? '#222' : '#aaa', borderBottom:tab === t.id ? `2px solid ${KS}` : '2px solid transparent', marginBottom:-2, whiteSpace:'nowrap' }}>{t.label}</button>
            ))}
          </div>

          {/* HISTOIRE */}
          {tab === 'story' && (
            <div>
              <h2 style={{ fontSize:mobile ? 20 : 24, fontWeight:300, letterSpacing:'0.12em', fontFamily:'Georgia,serif', marginBottom:4 }}>L&apos;Art du Temps Universel</h2>
              <p style={{ fontSize:10, color:KS, letterSpacing:'0.15em', marginBottom:20, fontWeight:700 }}>LA NAISSANCE D&apos;ALMA · JUILLET 2026</p>
              <p style={{ fontSize:mobile ? 14 : 15, color:'#444', lineHeight:1.9, marginBottom:14 }}>ALMA vient de l&apos;araméen et signifie <em>l&apos;éternité</em> ou <em>le monde</em>. BABEL rassemble une sélection singulière de chiffres et signes du monde, du XII romain au 𒐫𒄹 cunéiforme.</p>
              <p style={{ fontSize:mobile ? 14 : 15, color:'#444', lineHeight:1.9, marginBottom:28 }}>La campagne propose deux voies : les <strong style={{ color:GOLD }}>24 pièces limitées</strong> numérotées et un reward <strong style={{ color:KS }}>édition ouverte</strong>, accessible sans limite de tirage.</p>
              <div style={{ background:'#f0faf4', border:'1px solid #b2dfdb', borderLeft:`4px solid ${KS}`, borderRadius:6, padding:'18px 20px' }}>
                <h3 style={{ fontSize:13, fontWeight:700, marginBottom:8, color:'#2e7d32' }}>🌍 Engagement Solidaire</h3>
                <p style={{ fontSize:13, color:'#444', lineHeight:1.8, margin:0 }}><strong style={{ color:'#2e7d32' }}>10% des revenus nets</strong> de chaque série sont reversés à une association d&apos;éducation des enfants dans le monde.</p>
              </div>
            </div>
          )}

          {/* LES 24 PIÈCES */}
          {tab === 'pieces' && (
            <div>
              <h2 style={{ fontSize:mobile ? 20 : 24, fontWeight:300, letterSpacing:'0.12em', fontFamily:'Georgia,serif', marginBottom:4 }}>Choisissez Votre Numéro</h2>
              <p style={{ fontSize:10, color:KS, letterSpacing:'0.15em', marginBottom:20, fontWeight:700 }}>XII · ١ · ২ · 3 · ––––  · ה · ๖ · ⴦ · ፰ · Θ · 十 · 𒐫𒄹</p>
              <div style={{ background:'#fff', border:'1px solid #e8e8e8', borderRadius:10, padding:mobile ? 16 : 24, marginBottom:24 }}>
                <p style={{ fontSize:11, color:'#888', marginBottom:14, fontWeight:600 }}>Sélectionnez votre numéro (I–XII) :</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:mobile ? 6 : 8, marginBottom:16 }}>
                  {CIVS.map(c => (
                    <button key={c.num} onClick={() => { setNum(c.num); setReward('limited'); }} style={{ width:mobile ? 44 : 52, height:mobile ? 44 : 52, borderRadius:8, border:`2px solid ${num === c.num && reward === 'limited' ? c.color : '#e0e0e0'}`, background:num === c.num && reward === 'limited' ? `${c.color}18` : '#fafafa', color:num === c.num && reward === 'limited' ? c.color : '#888', fontSize:12, fontWeight:700, cursor:'pointer', transition:'all 0.15s', fontFamily:'Georgia,serif' }}>{c.roman}</button>
                  ))}
                </div>
                <div style={{ display:'flex', gap:8, marginBottom:8, flexDirection:mobile ? 'column' : 'row' }}>
                  {(['steel', 'gold'] as const).map(v => (
                    <button key={v} onClick={() => { setVer(v); setReward('limited'); }} style={{ flex:1, padding:'10px', borderRadius:6, border:`2px solid ${reward === 'limited' && ver === v ? (v === 'gold' ? GOLD : KS) : '#e0e0e0'}`, background:reward === 'limited' && ver === v ? (v === 'gold' ? `${GOLD}12` : `${KS}10`) : '#fafafa', color:reward === 'limited' && ver === v ? (v === 'gold' ? '#b8860b' : '#047a4a') : '#888', fontWeight:700, fontSize:11, cursor:'pointer', letterSpacing:'0.06em' }}>
                      {v === 'gold' ? '✦ VERSION OR PVD — 4 900 €' : '⚙ VERSION ACIER 316L — 4 500 €'}
                    </button>
                  ))}
                </div>
                <button onClick={() => setReward('open')} style={{ width:'100%', padding:'12px', borderRadius:6, border:`2px solid ${reward === 'open' ? KS : '#e0e0e0'}`, background:reward === 'open' ? `${KS}12` : '#fafafa', color:reward === 'open' ? '#047a4a' : '#666', fontWeight:800, fontSize:11, cursor:'pointer', letterSpacing:'0.08em' }}>
                  ∞ REWARD ÉDITION OUVERTE — 1 900 € — SANS LIMITE
                </button>
              </div>

              {reward === 'limited' ? (
                <div style={{ background:civ.bg, border:`1px solid ${civ.color}30`, borderRadius:12, overflow:'hidden', marginBottom:20 }}>
                  <div style={{ display:'grid', gridTemplateColumns:mobile ? '1fr' : '1fr 180px' }}>
                    <div style={{ padding:mobile ? 18 : 28 }}>
                      <div style={{ display:'flex', alignItems:'flex-start', gap:14, marginBottom:18 }}>
                        <div style={{ width:52, height:52, borderRadius:'50%', background:`${civ.color}20`, border:`2px solid ${civ.color}40`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                          <span style={{ fontSize:20, color:civ.color, fontFamily:'Georgia,serif' }}>{civ.script}</span>
                        </div>
                        <div>
                          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4 }}>
                            <span style={{ fontSize:20, fontWeight:700, color:civ.color, fontFamily:'Georgia,serif' }}>{civ.roman}</span>
                            <span style={{ fontSize:11, color:civ.color, fontWeight:700, background:`${civ.color}15`, padding:'3px 10px', borderRadius:3, letterSpacing:'0.1em' }}>{ver === 'gold' ? 'OR PVD' : 'ACIER 316L'}</span>
                          </div>
                          <div style={{ fontSize:15, fontWeight:700, color:'#fff', marginBottom:2 }}>{civ.name}</div>
                          <div style={{ fontSize:11, color:'rgba(255,255,255,0.5)' }}>{civ.civ} · {civ.era}</div>
                        </div>
                      </div>
                      <div style={{ marginBottom:14 }}>
                        <div style={{ fontSize:9, color:civ.color, letterSpacing:'0.15em', fontWeight:700, marginBottom:5 }}>HISTOIRE</div>
                        <p style={{ fontSize:mobile ? 12 : 13, color:'rgba(255,255,255,0.8)', lineHeight:1.8, margin:0 }}>{civ.story}</p>
                      </div>
                      <div style={{ marginBottom:14 }}>
                        <div style={{ fontSize:9, color:civ.color, letterSpacing:'0.15em', fontWeight:700, marginBottom:5 }}>CONTRIBUTION À L&apos;HUMANITÉ</div>
                        <p style={{ fontSize:mobile ? 12 : 13, color:'rgba(255,255,255,0.7)', lineHeight:1.7, margin:0 }}>{civ.contribution}</p>
                      </div>
                      <div style={{ background:`${civ.color}10`, border:`1px solid ${civ.color}25`, borderRadius:6, padding:'12px 14px' }}>
                        <div style={{ fontSize:9, color:civ.color, letterSpacing:'0.15em', fontWeight:700, marginBottom:5 }}>POURQUOI SUR LE CADRAN ?</div>
                        <p style={{ fontSize:mobile ? 12 : 13, color:civ.color, lineHeight:1.65, margin:0, fontStyle:'italic' }}>{civ.whyOnDial}</p>
                      </div>
                    </div>
                    {!mobile && (
                      <div style={{ background:`${civ.color}08`, borderLeft:`1px solid ${civ.color}20`, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:16, gap:10 }}>
                        <div style={{ width:140, height:140, borderRadius:'50%', border:`2px solid ${civ.color}40` }}>
                          <Dial civ={civ} version={ver} />
                        </div>
                        <div style={{ fontSize:9, color:'rgba(255,255,255,0.35)', textAlign:'center', letterSpacing:'0.1em', lineHeight:1.6 }}>PIÈCE {civ.roman}<br />{ver === 'gold' ? 'OR PVD' : 'ACIER 316L'}</div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div style={{ background:'#f0faf4', border:`1px solid ${KS}`, borderRadius:12, padding:mobile ? 18 : 28, marginBottom:20 }}>
                  <div style={{ fontSize:10, color:KS, letterSpacing:'0.16em', fontWeight:800, marginBottom:8 }}>∞ REWARD ÉDITION OUVERTE</div>
                  <h3 style={{ fontSize:mobile ? 18 : 24, fontWeight:700, marginBottom:8 }}>BABEL · Open Edition</h3>
                  <p style={{ fontSize:13, color:'#4b4b4b', lineHeight:1.8, marginBottom:12 }}>Une version sans limite de tirage, sans numéro de pièce réservé, pensée pour rendre BABEL plus accessible.</p>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
                    <ul style={{ listStyle:'none', padding:0, margin:0 }}>
                      {['Design BABEL standardisé', 'Sans numérotation I–XII', 'Production non limitée', "Prix d'accès Kickstarter", 'Livret inclus'].map((item, i) => (
                        <li key={i} style={{ fontSize:12, color:'#555', padding:'3px 0 3px 16px', position:'relative' }}><span style={{ position:'absolute', left:0, color:KS, fontWeight:700 }}>✓</span>{item}</li>
                      ))}
                    </ul>
                    <div style={{ textAlign:'right' }}>
                      <div style={{ fontSize:28, fontWeight:800, color:KS }}>1 900 €</div>
                      <div style={{ fontSize:10, color:'#666', letterSpacing:'0.1em' }}>SANS LIMITE</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SPECS */}
          {tab === 'specs' && (
            <div>
              <h2 style={{ fontSize:mobile ? 20 : 24, fontWeight:300, letterSpacing:'0.12em', fontFamily:'Georgia,serif', marginBottom:4 }}>Spécifications Techniques</h2>
              <p style={{ fontSize:10, color:KS, letterSpacing:'0.15em', marginBottom:24, fontWeight:700 }}>BABEL V1 — FICHE TECHNIQUE</p>
              <div style={{ background:'#fff', border:'1px solid #e8e8e8', borderRadius:8, overflow:'hidden', marginBottom:28 }}>
                {SPECS.map(([k, v], i) => (
                  <div key={i} style={{ display:'grid', gridTemplateColumns:mobile ? '1fr' : '38% 1fr', padding:mobile ? '10px 14px' : '12px 20px', borderBottom:i < SPECS.length - 1 ? '1px solid #f0f0f0' : 'none', background:i % 2 === 0 ? '#fff' : '#fafafa', gap:mobile ? 2 : 0 }}>
                    <span style={{ fontSize:mobile ? 9 : 10, letterSpacing:'0.12em', color:'#999', textTransform:'uppercase' }}>{k}</span>
                    <span style={{ fontSize:mobile ? 12 : 13, color:'#333' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CALENDRIER */}
          {tab === 'timeline' && (
            <div>
              <h2 style={{ fontSize:mobile ? 20 : 24, fontWeight:300, letterSpacing:'0.12em', fontFamily:'Georgia,serif', marginBottom:4 }}>Calendrier</h2>
              <p style={{ fontSize:10, color:KS, letterSpacing:'0.15em', marginBottom:24, fontWeight:700 }}>ROADMAP 2026–2028</p>
              {TIMELINE.map((t, i) => (
                <div key={i} style={{ background:'#fff', border:`1px solid ${t.cur ? GOLD : t.done ? KS : '#e8e8e8'}`, borderRadius:6, padding:mobile ? '12px 14px' : '14px 18px', marginBottom:10 }}>
                  <div style={{ fontSize:10, color:t.done ? KS : t.cur ? '#b8860b' : '#aaa', letterSpacing:'0.1em', fontWeight:700, marginBottom:3 }}>{t.date}</div>
                  <div style={{ fontSize:13, fontWeight:700, marginBottom:3 }}>{t.title}</div>
                  <div style={{ fontSize:12, color:'#666', lineHeight:1.6 }}>{t.desc}</div>
                </div>
              ))}
            </div>
          )}

          {/* RISQUES */}
          {tab === 'risks' && (
            <div>
              <h2 style={{ fontSize:mobile ? 20 : 24, fontWeight:300, letterSpacing:'0.12em', fontFamily:'Georgia,serif', marginBottom:4 }}>Risques & FAQ</h2>
              <p style={{ fontSize:10, color:KS, letterSpacing:'0.15em', marginBottom:20, fontWeight:700 }}>TRANSPARENCE TOTALE</p>
              {RISKS.map((r, i) => (
                <div key={i} style={{ background:r.bg, border:`1px solid ${r.border}`, borderLeft:`5px solid ${r.border}`, borderRadius:6, padding:mobile ? '14px 16px' : '16px 20px', marginBottom:10 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6, gap:10 }}>
                    <span style={{ fontSize:13, fontWeight:700 }}>{r.name}</span>
                    <span style={{ background:r.bg, border:`1px solid ${r.border}`, color:r.color, fontSize:9, fontWeight:700, padding:'2px 8px', borderRadius:3, letterSpacing:'0.1em', flexShrink:0 }}>{r.level}</span>
                  </div>
                  <p style={{ fontSize:12, color:'#555', lineHeight:1.7, margin:0 }}>{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <aside id="pledge" style={{ paddingTop:28, position:mobile ? 'static' : 'sticky', top:64 }}>
          <div style={{ fontSize:10, letterSpacing:'0.18em', color:'#999', fontWeight:700, marginBottom:12, paddingBottom:12, borderBottom:'1px solid #e8e8e8' }}>VOTRE SÉLECTION</div>
          <div style={{ display:'grid', gap:8, marginBottom:12 }}>
            <button onClick={() => setReward('limited')} style={{ padding:mobile ? '13px 12px' : '11px 12px', borderRadius:8, border:`2px solid ${reward === 'limited' ? GOLD : '#e0e0e0'}`, background:reward === 'limited' ? `${GOLD}12` : '#fff', fontWeight:800, fontSize:mobile ? 12 : 11, letterSpacing:'0.06em', cursor:'pointer', color:reward === 'limited' ? '#8d6b00' : '#666' }}>24 PIÈCES LIMITÉES</button>
            <button onClick={() => setReward('open')} style={{ padding:mobile ? '13px 12px' : '11px 12px', borderRadius:8, border:`2px solid ${reward === 'open' ? KS : '#e0e0e0'}`, background:reward === 'open' ? `${KS}12` : '#fff', fontWeight:800, fontSize:mobile ? 12 : 11, letterSpacing:'0.06em', cursor:'pointer', color:reward === 'open' ? '#047a4a' : '#666' }}>ÉDITION OUVERTE · SANS LIMITE</button>
          </div>

          <div style={{ background:reward === 'open' ? '#f0faf4' : (ver === 'gold' ? '#0f0c04' : '#fff'), border:`2px solid ${reward === 'open' ? KS : (ver === 'gold' ? `${GOLD}50` : KS)}`, borderRadius:10, padding:mobile ? 16 : 18, marginBottom:12 }}>
            {reward === 'limited' ? (
              <>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
                  <div style={{ width:42, height:42, borderRadius:'50%', background:ver === 'gold' ? `${GOLD}20` : `${KS}15`, border:`2px solid ${ver === 'gold' ? GOLD : KS}`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <span style={{ fontSize:15, color:ver === 'gold' ? GOLD : KS, fontFamily:'Georgia,serif', fontWeight:700 }}>{civ.roman}</span>
                  </div>
                  <div>
                    <div style={{ fontSize:13, fontWeight:700, color:ver === 'gold' ? '#fff' : '#222' }}>{civ.name}</div>
                    <div style={{ fontSize:10, color:ver === 'gold' ? 'rgba(255,255,255,0.4)' : '#aaa' }}>{civ.era} · {ver === 'gold' ? 'Or PVD' : 'Acier 316L'}</div>
                  </div>
                </div>
                <div style={{ fontSize:mobile ? 24 : 22, fontWeight:800, color:ver === 'gold' ? GOLD : KS, marginBottom:4 }}>{price.toLocaleString('fr-FR')} €</div>
                <div style={{ fontSize:10, color:ver === 'gold' ? 'rgba(255,255,255,0.4)' : '#888', marginBottom:12 }}>PIÈCE N° {civ.roman} · {ver === 'gold' ? 'OR PVD' : 'ACIER 316L'}</div>
                <ul style={{ paddingLeft:0, marginBottom:12, listStyle:'none' }}>
                  {['Sellita SW200 · Swiss Made', 'Cristal saphir double face AR', 'Écrin bois laqué + velours', 'Livret 12 civilisations', 'Certificat numéroté & signé', 'Accès communauté backers'].map((item, j) => (
                    <li key={j} style={{ fontSize:11, color:ver === 'gold' ? 'rgba(255,255,255,0.7)' : '#555', padding:'3px 0', paddingLeft:16, position:'relative' }}>
                      <span style={{ position:'absolute', left:0, color:ver === 'gold' ? GOLD : KS, fontWeight:700 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <button style={{ width:'100%', background:ver === 'gold' ? GOLD : KS, color:'#000', fontWeight:700, fontSize:13, padding:mobile ? 14 : 12, borderRadius:5, border:'none', cursor:'pointer', letterSpacing:'0.06em' }}>
                  {ver === 'gold' ? `✦ RÉSERVER — OR N° ${civ.roman}` : `⚙ RÉSERVER — ACIER N° ${civ.roman}`}
                </button>
                <p style={{ fontSize:10, color:ver === 'gold' ? 'rgba(255,255,255,0.3)' : '#bbb', textAlign:'center', marginTop:8, lineHeight:1.5 }}>Fonds collectés uniquement si l&apos;objectif est atteint.</p>
              </>
            ) : (
              <>
                <div style={{ fontSize:10, color:KS, letterSpacing:'0.16em', fontWeight:800, marginBottom:8 }}>∞ REWARD ÉDITION OUVERTE</div>
                <div style={{ fontSize:mobile ? 24 : 22, fontWeight:800, color:KS, marginBottom:4 }}>{price.toLocaleString('fr-FR')} €</div>
                <div style={{ fontSize:10, color:'#666', marginBottom:12 }}>SANS NUMÉRO FIXE · SANS LIMITE</div>
                <ul style={{ paddingLeft:0, marginBottom:12, listStyle:'none' }}>
                  {['Design BABEL standardisé', 'Sans sélection I–XII', 'Production ouverte', 'Livret inclus', 'Accès communauté'].map((item, j) => (
                    <li key={j} style={{ fontSize:11, color:'#555', padding:'3px 0', paddingLeft:16, position:'relative' }}>
                      <span style={{ position:'absolute', left:0, color:KS, fontWeight:700 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <button style={{ width:'100%', background:KS, color:'#000', fontWeight:700, fontSize:13, padding:mobile ? 14 : 12, borderRadius:5, border:'none', cursor:'pointer', letterSpacing:'0.06em' }}>
                  ∞ RÉSERVER — ÉDITION OUVERTE
                </button>
              </>
            )}
          </div>

          <div style={{ background:'#fff', border:'1px solid #e8e8e8', borderRadius:10, padding:mobile ? 14 : 16, marginBottom:20 }}>
            <div style={{ fontSize:18, fontWeight:800, color:'#333', marginBottom:3 }}>30 €</div>
            <div style={{ fontSize:12, fontWeight:700, color:'#222', marginBottom:8 }}>Soutien · Communauté ALMA</div>
            <ul style={{ paddingLeft:0, marginBottom:12, listStyle:'none' }}>
              {['Votre nom dans le livret', 'Newsletter Carnets ALMA', 'Photos making-of exclusives'].map((item, j) => (
                <li key={j} style={{ fontSize:11, color:'#555', padding:'2px 0', paddingLeft:16, position:'relative' }}><span style={{ position:'absolute', left:0, color:KS, fontWeight:700 }}>✓</span>{item}</li>
              ))}
            </ul>
            <button style={{ width:'100%', background:'#222', color:'#fff', fontWeight:700, fontSize:12, padding:mobile ? 12 : 10, borderRadius:5, border:'none', cursor:'pointer' }}>SOUTENIR LE PROJET</button>
          </div>
        </aside>
      </div>

      {/* LIGHTBOX */}
      {lbx && (
        <div onClick={() => setLbx(null)} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.95)', zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', padding:16 }}>
          <img src={lbx} alt="" style={{ maxWidth:'90vw', maxHeight:'90vh', borderRadius:8, boxShadow:'0 0 80px rgba(0,0,0,0.8)' }} />
          <div style={{ position:'absolute', top:20, right:24, color:'#fff', fontSize:28, cursor:'pointer', lineHeight:1 }}>×</div>
        </div>
      )}

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }
        @media (max-width: 900px) { ::-webkit-scrollbar { display: none; } }
      `}</style>
    </div>
  );
}
