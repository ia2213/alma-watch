'use client';
import { useState, useEffect } from 'react';

const CIVS = [
  { num:1,  roman:'I',    script:'\u0661', name:'Arabe',       civ:'Civilisation Islamique',  era:'7e s. ap. J.-C.',   region:'P\u00e9ninsule Arabique \u2192 Monde',    color:'#c8a44a', bg:'#1a1208', story:"Le chiffre arabe \u0661 (w\u0101\u1e25id) est l\u2019h\u00e9ritier du syst\u00e8me positionnel indo-arabe adopt\u00e9 par les math\u00e9maticiens de Bagdad au IXe si\u00e8cle.", contribution:"Alg\u00e8bre, astronomie, m\u00e9decine, architecture.", whyOnDial:"Parce qu\u2019aucune montre ne mesure le temps sans le z\u00e9ro \u2014 et le z\u00e9ro vient de l\u00e0." },
  { num:2,  roman:'II',   script:'\u09e8', name:'Bengali',     civ:'Monde Bengali',          era:'10e s. ap. J.-C.',  region:'Bengale',                                 color:'#6b9fd4', bg:'#08101a', story:"\u09e8 est la forme bengalie du chiffre 2, h\u00e9riti\u00e8re de la tradition num\u00e9rique indo-arabe.", contribution:"Litt\u00e9rature, po\u00e9sie, math\u00e9matiques, culture savante du sous-continent indien.", whyOnDial:"Parce que les chiffres indiens ont voyag\u00e9 et donn\u00e9 naissance \u00e0 de multiples formes vivantes aujourd\u2019hui." },
  { num:3,  roman:'III',  script:'3',     name:'Chiffre mod.', civ:'Monde contemporain',     era:'\u00c9poque moderne', region:'Usage universel',                          color:'#e8a0a0', bg:'#1a0808', story:"Le 3 moderne est l\u2019aboutissement d\u2019une longue \u00e9volution graphique venue des traditions num\u00e9riques d\u2019Asie du Sud.", contribution:"Standardisation universelle des nombres, lisibilit\u00e9 globale, transmission scientifique.", whyOnDial:"Parce que certains signes d\u00e9passent leur civilisation d\u2019origine pour devenir universels." },
  { num:4,  roman:'IV',   script:'\u2013 \u2013 \u2013 \u2013', name:'Traits', civ:'Syst\u00e8me additif primitif', era:'Antiquit\u00e9', region:'Usage pluriel', color:'#7ecba1', bg:'#081a0e', story:"Quatre traits rappellent les syst\u00e8mes additifs les plus anciens o\u00f9 compter revenait \u00e0 r\u00e9p\u00e9ter des marques simples.", contribution:"Naissance du comptage, m\u00e9moire mat\u00e9rielle, premi\u00e8res notations quantitatives.", whyOnDial:"Parce que toute num\u00e9ration commence par le geste le plus simple : tracer un signe." },
  { num:5,  roman:'V',    script:'\u05d4', name:'H\u00e9breu',   civ:'Civilisation Juive',     era:'10e s. av. J.-C.', region:'Canaan \u2192 Diaspora mondiale',          color:'#a0c4e8', bg:'#080e1a', story:"\u05d4 (h\u00e9) porte une grande charge symbolique dans la tradition h\u00e9bra\u00efque. L\u2019\u00e9criture h\u00e9bra\u00efque traverse les si\u00e8cles comme langue sacr\u00e9e, \u00e9rudite puis nationale retrouv\u00e9e.", contribution:"Monoth\u00e9isme, droit, \u00e9thique, litt\u00e9rature, ex\u00e9g\u00e8se et transmission textuelle.", whyOnDial:"Parce que le temps, les cycles et le calendrier occupent une place centrale dans la tradition juive." },
  { num:6,  roman:'VI',   script:'\u0e56', name:'Tha\u00ef',     civ:'Tha\u00eflande',          era:'13e s. ap. J.-C.', region:'Asie du Sud-Est',                          color:'#f0c060', bg:'#1a1408', story:"\u0e56 est le chiffre tha\u00ef pour 6, issu des grandes familles graphiques du monde indien diffus\u00e9es en Asie du Sud-Est.", contribution:"Culture lettr\u00e9e siamoise, bouddhisme therav\u0101da, architecture, arts de cour.", whyOnDial:"Parce que le temps universel m\u00e9rite aussi les formes vivantes de l\u2019Asie du Sud-Est." },
  { num:7,  roman:'VII',  script:'\u10d6', name:'G\u00e9orgien',  civ:'G\u00e9orgie',            era:'Antiquit\u00e9 tardive', region:'Caucase',                             color:'#d4935a', bg:'#1a0e08', story:"\u10d6 appartient \u00e0 l\u2019alphabet g\u00e9orgien, l\u2019un des syst\u00e8mes d\u2019\u00e9criture les plus singuliers du monde.", contribution:"Christianisme caucasien, litt\u00e9rature, manuscrits, culture savante du Caucase.", whyOnDial:"Parce que le cadran doit c\u00e9l\u00e9brer les alphabets rares qui ont surv\u00e9cu aux empires." },
  { num:8,  roman:'VIII', script:'\u1370', name:"Ge\u2019ez",    civ:'\u00c9thiopie Ancienne', era:'4e s. ap. J.-C.',  region:'Corne de l\u2019Afrique',                  color:'#c8a835', bg:'#1a1605', story:"\u1370 est le chiffre \u00e9thiopien pour 8 en Ge\u2019ez. L\u2019\u00c9thiopie a conserv\u00e9 une tradition \u00e9crite continue parmi les plus anciennes du continent africain.", contribution:"Christianisme africain ancien, architecture Aksum, manuscrits, tradition liturgique continue.", whyOnDial:"Parce que l\u2019\u00c9thiopie relie antiquit\u00e9, foi, \u00e9criture et m\u00e9moire humaine sur la longue dur\u00e9e." },
  { num:9,  roman:'IX',   script:'\u0398', name:'Grec',         civ:'Gr\u00e8ce Antique',      era:'8e s. av. J.-C.', region:'M\u00e9diterran\u00e9e orientale',             color:'#a0b8d8', bg:'#080e18', story:"Theta (\u0398) appartient au syst\u00e8me grec qui a tant marqu\u00e9 la philosophie, les math\u00e9matiques et la science.", contribution:"Philosophie, d\u00e9mocratie, math\u00e9matiques euclidiennes, m\u00e9decine hippocratique, th\u00e9\u00e2tre.", whyOnDial:"Parce que la pens\u00e9e grecque a structur\u00e9 notre mani\u00e8re de mesurer, nommer et raisonner." },
  { num:10, roman:'X',    script:'\u5341', name:'Chinois',      civ:'Civilisation Chinoise',  era:'2e s. av. J.-C.', region:'Fleuve Jaune \u2192 Asie de l\u2019Est',      color:'#e8a060', bg:'#1a0e08', story:"\u5341 signifie dix en chinois. Un seul signe exprime la force de concision d\u2019une \u00e9criture logographique parmi les plus anciennes et vivantes du monde.", contribution:"Papier, imprimerie, boussole, poudre \u00e0 canon, administration savante, cosmologie.", whyOnDial:"Parce que la Chine a transform\u00e9 notre rapport au savoir, au temps et \u00e0 la transmission." },
  { num:11, roman:'XI',   script:'\ud808\udf0b\ud808\udc79', name:'Cun\u00e9iforme', civ:'Sumer & M\u00e9sopotamie', era:'3200 av. J.-C.', region:'M\u00e9sopotamie (Irak actuel)', color:'#c880c0', bg:'#160812', story:"\ud808\udf0b\ud808\udc79 \u00e9voque la notation num\u00e9rique cun\u00e9iforme issue de la premi\u00e8re grande civilisation de l\u2019\u00e9crit.", contribution:"Premi\u00e8re \u00e9criture, premi\u00e8res lois, premi\u00e8res comptabilit\u00e9s complexes, villes et archives.", whyOnDial:"Parce que c\u2019est l\u00e0 que l\u2019humanit\u00e9 a commenc\u00e9 \u00e0 \u00e9crire, compter et conserver le temps." },
  { num:12, roman:'XII',  script:'XII',   name:'Latin',        civ:'Rome & Occident',        era:'7e s. av. J.-C.', region:'Italie \u2192 Empire Romain \u2192 Monde',    color:'#d4af37', bg:'#1a1608', story:"XII \u2014 douze en chiffres romains \u2014 est la forme embl\u00e9matique du sommet du cadran.", contribution:"Droit romain, architecture, ing\u00e9nierie, routes, latin scientifique universel.", whyOnDial:"Parce que XII est le chiffre du temps lui-m\u00eame \u2014 midi, minuit, le sommet du cadran." },
];

const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=85', cap: 'CADRAN \u00b7 Vue principale' },
  { src: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=900&q=85',  cap: 'MOUVEMENT \u00b7 Sellita SW200' },
  { src: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=900&q=85', cap: 'BRACELET \u00b7 Cuir Cognac' },
  { src: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=85', cap: '\u00c9CRIN \u00b7 Bois Laqu\u00e9' },
  { src: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=900&q=85', cap: 'AU POIGNET \u00b7 39mm' },
  { src: 'https://images.unsplash.com/photo-1548171916-c8fd5d130bba?w=900&q=85',  cap: 'MACRO \u00b7 M\u00e9canisme' },
];

const SPECS = [
  ['Mouvement','Sellita SW200-2 \u00b7 Swiss Made'],
  ['R\u00e9serve de marche','65 heures'],
  ['Fr\u00e9quence','28 800 alt/h \u00b7 4 Hz'],
  ['Rubis','26 rubis'],
  ['Pr\u00e9cision','\u22124 / +6 sec/jour'],
  ['Diam\u00e8tre','39 mm'],
  ['\u00c9paisseur','11,5 mm'],
  ['Entre-cornes','20 mm'],
  ['Mat\u00e9riau Acier','316L \u00b7 Grade chirurgical'],
  ['Mat\u00e9riau Or','316L + PVD or champagne \u00b7 Halal-compatible'],
  ['\u00c9tanch\u00e9it\u00e9','50 m (5 ATM)'],
  ['Cristal','Saphir double face AR \u00b7 9 Mohs'],
  ['Caseback','Saphir transparent \u00b7 Mouvement visible'],
  ['Cadran','Laque blanc champagne \u00b7 12 scripts uniques'],
  ['Tirage','24 pi\u00e8ces limit\u00e9es + reward \u00e9dition ouverte'],
  ['Num\u00e9rotation','N\u00b0 pi\u00e8ce = position horaire = civilisation'],
];

const RISKS = [
  { level:'\u00c9LEV\u00c9',  color:'#c62828', bg:'#fff5f5', border:'#e57373', name:'Conflit de marque (ALMA Watches GmbH)', text:"Conflit identifi\u00e9 avec ALMA Watches GmbH (DE). D\u00e9p\u00f4t BABEL \u00e0 l\u2019INPI/EUIPO en cours. Budget ~1 000 \u20ac. Plan B : BABEL comme nom principal." },
  { level:'MOYEN',  color:'#e65100', bg:'#fff8f0', border:'#ffb74d', name:'D\u00e9lais de fabrication d\u00e9pass\u00e9s',        text:"Prototypage peut prendre 12\u201318 mois. Mises \u00e0 jour mensuelles garanties. Livraison cible : Q3 2027." },
  { level:'MOYEN',  color:'#e65100', bg:'#fff8f0', border:'#ffb74d', name:'Lisibilit\u00e9 cadran (12 scripts/39 mm)',   text:"5 variantes test\u00e9es. Vote communaut\u00e9 Instagram. Priorit\u00e9 absolue : lisibilit\u00e9 sur exhaustivit\u00e9." },
  { level:'FAIBLE', color:'#2e7d32', bg:'#f0faf4', border:'#81c784', name:'Risque financier backers',              text:"Kickstarter = fonds collect\u00e9s SEULEMENT si objectif atteint. Z\u00e9ro risque pour les contributeurs." },
];

const TIMELINE = [
  { done:true,  cur:false, date:'Juillet 2026',         title:'Lancement Kickstarter',         desc:'183 backers. Early Bird \u00e9puis\u00e9 en 48h.' },
  { done:false, cur:true,  date:'Ao\u00fbt\u2013Oct. 2026',     title:'Sourcing & prototypage',        desc:'Commandes Sellita, 3 it\u00e9rations bo\u00eetier, validation cadran + PVD.' },
  { done:false, cur:false, date:'Nov. 2026\u2013F\u00e9v. 2027', title:'Assemblage & QC',               desc:'24 pi\u00e8ces, tests Witschi, timegrapher, certificats num\u00e9rot\u00e9s.' },
  { done:false, cur:false, date:'Mars\u2013Avr. 2027',         title:'Livraison Backers',             desc:'Exp\u00e9dition mondiale \u00b7 Suivi individuel \u00b7 Unboxing vid\u00e9o.' },
  { done:false, cur:false, date:'Juil. 2027',                  title:'\u00c9dition ouverte',           desc:'Ouverture du reward sans limite avec cadran BABEL standardis\u00e9.' },
  { done:false, cur:false, date:'2028',                        title:'S\u00e9rie 3 \u00b7 M\u00c9T\u00c9ORITE & TITANE', desc:'Ultra-limit\u00e9es. Candidature GPHG.' },
];

const KS   = '#05ce78';
const GOLD = '#d4af37';
const TABS = [
  {id:'story',    label:'HISTOIRE'},
  {id:'pieces',   label:'LES 24 PI\u00c8CES'},
  {id:'specs',    label:'SPECS'},
  {id:'timeline', label:'CALENDRIER'},
  {id:'risks',    label:'RISQUES & FAQ'},
];

function Dial({ civ, version }: { civ: typeof CIVS[0]; version: 'steel'|'gold' }) {
  const ac = version === 'gold' ? GOLD : 'rgba(184,150,12,0.55)';
  const hrs = [
    {h:0,  t:'XII'},{h:1,t:'\u0661'},{h:2,t:'\u09e8'},{h:3,t:'3'},
    {h:4,t:'\u2013 \u2013 \u2013 \u2013'},{h:5,t:'\u05d4'},{h:6,t:'\u0e56'},
    {h:7,t:'\u10d6'},{h:8,t:'\u1370'},{h:9,t:'\u0398'},
    {h:10,t:'\u5341'},{h:11,t:'\ud808\udf0b\ud808\udc79'},
  ];
  const activePosH = civ.num === 12 ? 0 : civ.num;
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%">
      <defs>
        <radialGradient id={`bg-${version}`} cx="38%" cy="32%">
          <stop offset="0%" stopColor={version==='gold' ? '#2a1f08' : '#252018'}/>
          <stop offset="100%" stopColor={version==='gold' ? '#0f0c04' : '#0c0b09'}/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="98" fill={`url(#bg-${version})`} stroke={ac} strokeWidth="2"/>
      {Array.from({length:60}).map((_,i) => {
        const a=(i*6-90)*Math.PI/180, r=i%5===0?72:74;
        return <circle key={i} cx={100+r*Math.cos(a)} cy={100+r*Math.sin(a)} r={i%5===0?1.8:0.7} fill={i%5===0?ac:'rgba(212,175,55,0.2)'}/>;
      })}
      {hrs.map(({h,t}) => {
        const a=(h*30-90)*Math.PI/180;
        const isActive=h===activePosH;
        const fs=t.length>5?3.2:t.length>3?4.2:t.length>2?5:7;
        return (
          <g key={h}>
            {isActive && <circle cx={100+62*Math.cos(a)} cy={100+62*Math.sin(a)} r={8} fill={version==='gold'?'rgba(212,175,55,0.2)':'rgba(5,206,120,0.15)'} stroke={version==='gold'?GOLD:KS} strokeWidth="1"/>}
            <text x={100+62*Math.cos(a)} y={100+62*Math.sin(a)+2.8} textAnchor="middle" fontSize={fs}
              fill={isActive?(version==='gold'?'#fff':KS):ac} fontFamily="Georgia,serif" fontWeight={isActive?'bold':'normal'}>{t}</text>
          </g>
        );
      })}
      <text x="100" y="87"  textAnchor="middle" fontSize="9" fill={ac} fontFamily="Georgia,serif" letterSpacing="4">ALMA</text>
      <text x="100" y="99"  textAnchor="middle" fontSize="4" fill="rgba(212,175,55,0.45)" fontFamily="Georgia,serif" letterSpacing="3">BABEL</text>
      <text x="100" y="111" textAnchor="middle" fontSize="3" fill="rgba(212,175,55,0.25)" fontFamily="Georgia,serif" letterSpacing="2">SWISS MADE</text>
      <line x1="100" y1="100" x2="88"  y2="55"  stroke={GOLD}     strokeWidth="3" strokeLinecap="round"/>
      <line x1="100" y1="100" x2="130" y2="70"  stroke="#e8e2d6" strokeWidth="2" strokeLinecap="round"/>
      <line x1="100" y1="100" x2="75"  y2="135" stroke="#e05050" strokeWidth="1" strokeLinecap="round"/>
      <circle cx="100" cy="100" r="4" fill={GOLD}/>
      <circle cx="100" cy="100" r="2" fill="#fff"/>
    </svg>
  );
}

function VideoPlaceholder({ label }: { label: string }) {
  return (
    <div style={{
      width:'100%', aspectRatio:'16/9', borderRadius:12,
      background:'linear-gradient(135deg,#0f0e0a 0%,#1c1608 50%,#0c0b06 100%)',
      border:'1px solid rgba(212,175,55,0.2)',
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12,
    }}>
      <div style={{
        width:56, height:56, borderRadius:'50%',
        background:'rgba(212,175,55,0.08)', border:'1.5px solid rgba(212,175,55,0.3)',
        display:'flex', alignItems:'center', justifyContent:'center',
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <polygon points="6,4 20,12 6,20" fill={GOLD} opacity="0.7"/>
        </svg>
      </div>
      <div style={{fontSize:10, letterSpacing:'0.2em', color:'rgba(212,175,55,0.5)', fontWeight:700}}>{label}</div>
      <div style={{fontSize:10, color:'rgba(255,255,255,0.2)', letterSpacing:'0.1em'}}>VID\u00c9O \u00c0 VENIR</div>
    </div>
  );
}

function GalleryPlaceholder({ cap }: { cap: string }) {
  return (
    <div style={{
      width:'100%', aspectRatio:'4/3', borderRadius:8,
      background:'linear-gradient(135deg,#181510,#222016)',
      border:'1px solid rgba(212,175,55,0.12)',
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:8,
    }}>
      <div style={{fontSize:9, letterSpacing:'0.18em', color:'rgba(212,175,55,0.35)', fontWeight:700}}>{cap}</div>
      <div style={{fontSize:9, color:'rgba(255,255,255,0.15)', letterSpacing:'0.08em'}}>IMAGE \u00c0 VENIR</div>
    </div>
  );
}

export default function KickstarterPage() {
  const [tab,    setTab]    = useState('story');
  const [num,    setNum]    = useState(1);
  const [ver,    setVer]    = useState<'steel'|'gold'>('steel');
  const [reward, setReward] = useState<'limited'|'open'>('limited');
  const [lbx,    setLbx]   = useState<string|null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const civ = CIVS[num - 1];
  const funded=28150, goal=42000, pct=Math.round(funded/goal*100);
  const priceGold=4900, priceSteel=4500, priceOpen=1900;
  const price = reward==='open' ? priceOpen : (ver==='gold' ? priceGold : priceSteel);

  const dialSize   = mobile ? 'min(74vw, 280px)' : '300px';
  const heroGrid   = mobile ? '1fr'              : '1fr 380px';
  const mainGrid   = mobile ? '1fr'              : '1fr 340px';
  const galGrid    = mobile ? '1fr 1fr'          : '1fr 1fr 1fr';
  const px         = mobile ? 16 : 32;

  return (
    <div style={{fontFamily:"'Helvetica Neue',Arial,sans-serif", background:'#f7f7f7', minHeight:'100vh', color:'#222'}}>

      {/* KS TOP BAR */}
      <div style={{background:KS, padding:mobile?'8px 16px':'9px 24px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:8}}>
        <div style={{display:'flex', alignItems:'center', gap:8, fontWeight:700, fontSize:14}}>
          <svg width="18" height="18" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill={KS}/><path d="M10 8v16M10 16l5-8 7 8-7 8-5-8z" stroke="#000" strokeWidth="2.5" strokeLinejoin="round"/></svg>
          Kickstarter
        </div>
        {!mobile && <span style={{fontSize:12, fontWeight:600}}>Campagne en cours \u00b7 <strong>14 jours restants</strong></span>}
        <a href="#pledge" style={{background:'#000', color:KS, padding:'6px 16px', borderRadius:4, textDecoration:'none', fontSize:12, fontWeight:700, whiteSpace:'nowrap'}}>Soutenir \u2192</a>
      </div>

      {/* NAV */}
      <nav style={{background:'#fff', borderBottom:'1px solid #e0e0e0', padding:mobile?'0 16px':'0 32px', display:'flex', alignItems:'center', justifyContent:'space-between', position:'sticky', top:0, zIndex:100, boxShadow:'0 1px 4px rgba(0,0,0,0.06)', overflowX:'auto'}}>
        <div style={{display:'flex', alignItems:'center', gap:mobile?12:24, flexShrink:0}}>
          <span style={{padding:'14px 0', fontWeight:700, fontSize:mobile?13:15, letterSpacing:'0.08em', whiteSpace:'nowrap'}}>ALMA \u00b7 BABEL</span>
          {!mobile && ['Campagne','Mises \u00e0 jour (3)','Commentaires (47)'].map(l => (
            <a key={l} href="#" style={{color:l==='Campagne'?'#222':'#888', fontSize:13, textDecoration:'none', padding:'20px 4px', borderBottom:l==='Campagne'?`2px solid ${KS}`:'2px solid transparent', fontWeight:l==='Campagne'?700:400, whiteSpace:'nowrap'}}>{l}</a>
          ))}
        </div>
        <a href="#pledge" style={{background:KS, color:'#000', fontWeight:700, fontSize:12, padding:'9px 18px', borderRadius:4, textDecoration:'none', whiteSpace:'nowrap', flexShrink:0}}>Soutenir</a>
      </nav>

      {/* HERO */}
      <div style={{background:'linear-gradient(135deg,#0f0e0a,#1c1608 55%,#0c0b06)', padding:mobile?'40px 16px 36px':`64px ${px}px 56px`}}>
        <div style={{maxWidth:1140, margin:'0 auto', display:'grid', gridTemplateColumns:heroGrid, gap:mobile?32:64, alignItems:'center'}}>
          <div>
            <div style={{display:'inline-flex', alignItems:'center', gap:8, background:'rgba(5,206,120,0.1)', border:'1px solid rgba(5,206,120,0.3)', borderRadius:20, padding:'5px 14px', marginBottom:18}}>
              <span style={{width:7, height:7, borderRadius:'50%', background:KS, display:'inline-block'}}/>
              <span style={{color:KS, fontSize:10, letterSpacing:'0.15em', fontWeight:700}}>KICKSTARTER \u2014 EN DIRECT</span>
            </div>
            <h1 style={{fontSize:mobile?'clamp(2.6rem,11vw,4rem)':'clamp(3rem,5.5vw,5rem)', fontWeight:200, letterSpacing:'0.18em', color:GOLD, lineHeight:1.05, marginBottom:8, fontFamily:'Georgia,serif'}}>ALMA<br/>BABEL</h1>
            <p style={{fontSize:mobile?14:17, color:'#ccc', fontWeight:300, letterSpacing:'0.08em', marginBottom:14}}>12 Civilisations. 24 Pi\u00e8ces. 1 \u00c9dition Ouverte.</p>
            <p style={{fontSize:mobile?13:14, color:'#999', lineHeight:1.9, maxWidth:520, marginBottom:24}}>
              La premi\u00e8re montre m\u00e9canique suisse portant les 12 scripts s\u00e9lectionn\u00e9s pour BABEL.
              <strong style={{color:GOLD}}> 24 pi\u00e8ces limit\u00e9es</strong> num\u00e9rot\u00e9es +
              un reward <strong style={{color:KS}}>\u00e9dition ouverte</strong> sans limite.
            </p>
            <div style={{display:'flex', gap:10, flexDirection:mobile?'column':'row'}}>
              <a href="#pledge" style={{background:KS, color:'#000', fontWeight:700, fontSize:13, padding:'14px 28px', borderRadius:4, textDecoration:'none', textAlign:'center'}}>R\u00e9server</a>
              <button onClick={() => setTab('pieces')} style={{background:'transparent', color:GOLD, fontSize:13, padding:'13px 28px', borderRadius:4, border:`1px solid ${GOLD}`, cursor:'pointer'}}>Voir les pi\u00e8ces</button>
            </div>
          </div>

          {/* DIAL */}
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:16}}>
            {reward==='limited' && (
              <div style={{display:'flex', gap:0, background:'rgba(255,255,255,0.06)', borderRadius:6, overflow:'hidden', border:'1px solid rgba(255,255,255,0.1)'}}>
                {(['steel','gold'] as const).map(v => (
                  <button key={v} onClick={() => setVer(v)} style={{padding:'8px 18px', background:ver===v?(v==='gold'?GOLD:'rgba(255,255,255,0.12)'):'transparent', color:ver===v?(v==='gold'?'#000':'#fff'):'#888', border:'none', cursor:'pointer', fontSize:10, fontWeight:700, letterSpacing:'0.1em'}}>
                    {v==='steel' ? '\u2699 ACIER' : '\u2726 OR PVD'}
                  </button>
                ))}
              </div>
            )}
            <div style={{width:dialSize, height:dialSize, borderRadius:'50%', border:`2px solid ${reward==='open'?KS:(ver==='gold'?'rgba(212,175,55,0.55)':'rgba(184,150,12,0.3)')}`, boxShadow:reward==='open'?'0 0 60px rgba(5,206,120,0.15)':(ver==='gold'?'0 0 60px rgba(212,175,55,0.12)':'0 0 40px rgba(0,0,0,0.4)'), transition:'all 0.4s'}}>
              <Dial civ={civ} version={reward==='open'?'steel':ver}/>
            </div>
            <div style={{textAlign:'center'}}>
              <div style={{color:reward==='open'?KS:GOLD, fontSize:10, letterSpacing:'0.18em', fontWeight:700}}>BABEL {reward==='open'?'\u00c9DITION OUVERTE':(ver==='gold'?'OR PVD':'ACIER 316L')}</div>
              <div style={{color:'#555', fontSize:10, letterSpacing:'0.1em', marginTop:3}}>{reward==='open'?'SANS NUM\u00c9RO FIXE \u00b7 SANS LIMITE':('PI\u00c8CE '+civ.roman+' \u00b7 '+civ.name+' \u00b7 '+civ.era)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* FUNDING BAR */}
      <div style={{background:'#fff', borderBottom:'2px solid #f0f0f0', padding:mobile?'18px 16px':`24px ${px}px`}}>
        <div style={{maxWidth:1140, margin:'0 auto'}}>
          <div style={{display:'grid', gridTemplateColumns:mobile?'1fr 1fr 1fr':'1fr 1fr 1fr auto', gap:mobile?12:48, alignItems:'center', marginBottom:14}}>
            <div><div style={{fontSize:mobile?20:30, fontWeight:800, color:KS}}>{funded.toLocaleString('fr-FR')} \u20ac</div><div style={{fontSize:10, color:'#888', letterSpacing:'0.08em'}}>SUR {goal.toLocaleString('fr-FR')} \u20ac</div></div>
            <div><div style={{fontSize:mobile?20:30, fontWeight:800}}>183</div><div style={{fontSize:10, color:'#888', letterSpacing:'0.08em'}}>BACKERS</div></div>
            <div><div style={{fontSize:mobile?20:30, fontWeight:800}}>{pct}%</div><div style={{fontSize:10, color:'#888', letterSpacing:'0.08em'}}>FINANC\u00c9</div></div>
            {!mobile && <div style={{textAlign:'right'}}><div style={{fontSize:48, fontWeight:800, lineHeight:1}}>14</div><div style={{fontSize:11, color:'#888', letterSpacing:'0.15em'}}>JOURS RESTANTS</div></div>}
          </div>
          <div style={{height:6, background:'#f0f0f0', borderRadius:3, overflow:'hidden'}}>
            <div style={{height:'100%', width:`${pct}%`, background:`linear-gradient(90deg,${KS},#04b368)`, borderRadius:3}}/>
          </div>
          {mobile && <div style={{marginTop:10, fontSize:12, color:'#888', textAlign:'center'}}><strong style={{color:'#222', fontSize:16}}>14</strong> jours restants</div>}
        </div>
      </div>

      {/* GALERIE */}
      <div style={{background:'#111', padding:mobile?'32px 16px':'48px 32px'}}>
        <div style={{maxWidth:1140, margin:'0 auto'}}>
          <div style={{marginBottom:20}}>
            <p style={{fontSize:10, color:GOLD, letterSpacing:'0.2em', fontWeight:700, marginBottom:4}}>GALERIE PRODUIT</p>
            <h2 style={{fontSize:mobile?18:22, fontWeight:300, letterSpacing:'0.1em', color:'#eee', fontFamily:'Georgia,serif'}}>ALMA BABEL \u00b7 Vues</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:galGrid, gap:mobile?10:14}}>
            {GALLERY.map((g,i) => (
              g.src ? (
                <div key={i} onClick={() => setLbx(g.src)}
                  style={{cursor:'pointer', borderRadius:8, overflow:'hidden', aspectRatio:'4/3', background:'#1a1a1a', border:'1px solid rgba(255,255,255,0.06)', position:'relative', transition:'transform 0.2s'}}
                  onMouseEnter={e => (e.currentTarget.style.transform='scale(1.02)')}
                  onMouseLeave={e => (e.currentTarget.style.transform='scale(1)')}
                >
                  <img src={g.src} alt={g.cap} style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
                  <div style={{position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(transparent,rgba(0,0,0,0.7))', padding:'20px 10px 8px'}}>
                    <span style={{fontSize:9, color:'rgba(212,175,55,0.8)', letterSpacing:'0.15em', fontWeight:700}}>{g.cap}</span>
                  </div>
                </div>
              ) : (
                <GalleryPlaceholder key={i} cap={g.cap} />
              )
            ))}
          </div>
        </div>
      </div>

      {/* VIDEO */}
      <div style={{background:'#0d0c09', padding:mobile?'32px 16px':'48px 32px'}}>
        <div style={{maxWidth:1140, margin:'0 auto'}}>
          <div style={{marginBottom:20}}>
            <p style={{fontSize:10, color:KS, letterSpacing:'0.2em', fontWeight:700, marginBottom:4}}>FILM DE CAMPAGNE</p>
            <h2 style={{fontSize:mobile?18:22, fontWeight:300, letterSpacing:'0.1em', color:'#eee', fontFamily:'Georgia,serif'}}>Voir ALMA BABEL en mouvement</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:mobile?'1fr':' 1fr 1fr', gap:mobile?16:20}}>
            <VideoPlaceholder label="FILM DE CAMPAGNE" />
            <VideoPlaceholder label="MOUVEMENT \u00b7 MAKING-OF" />
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div style={{maxWidth:1140, margin:'0 auto', padding:mobile?`0 16px`:`0 ${px}px`, display:'grid', gridTemplateColumns:mainGrid, gap:mobile?24:48, alignItems:'start'}}>

        {/* CONTENT */}
        <div style={{paddingTop:28}}>
          <div style={{display:'flex', borderBottom:'2px solid #e8e8e8', marginBottom:28, gap:0, overflowX:'auto', WebkitOverflowScrolling:'touch' as 'touch'}}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{background:'none', border:'none', cursor:'pointer', padding:mobile?'10px 12px':'12px 18px', fontSize:mobile?10:11, fontWeight:700, letterSpacing:'0.08em', color:tab===t.id?'#222':'#aaa', borderBottom:tab===t.id?`2px solid ${KS}`:'2px solid transparent', marginBottom:-2, whiteSpace:'nowrap'}}>{t.label}</button>
            ))}
          </div>

          {/* HISTOIRE */}
          {tab==='story' && (
            <div>
              <h2 style={{fontSize:mobile?20:24, fontWeight:300, letterSpacing:'0.12em', fontFamily:'Georgia,serif', marginBottom:4}}>L&apos;Art du Temps Universel</h2>
              <p style={{fontSize:10, color:KS, letterSpacing:'0.15em', marginBottom:20, fontWeight:700}}>LA NAISSANCE D&apos;ALMA \u00b7 JUILLET 2026</p>
              <p style={{fontSize:mobile?14:15, color:'#444', lineHeight:1.9, marginBottom:14}}>ALMA vient de l&apos;aram\u00e9en et signifie <em>l&apos;\u00e9ternit\u00e9</em> ou <em>le monde</em>. BABEL rassemble une s\u00e9lection singuli\u00e8re de chiffres et signes du monde, du XII romain au \ud808\udf0b\ud808\udc79 cun\u00e9iforme.</p>
              <p style={{fontSize:mobile?14:15, color:'#444', lineHeight:1.9, marginBottom:28}}>La campagne propose deux voies : les <strong style={{color:GOLD}}>24 pi\u00e8ces limit\u00e9es</strong> num\u00e9rot\u00e9es et un reward <strong style={{color:KS}}>\u00e9dition ouverte</strong>, accessible sans limite de tirage.</p>
              <div style={{background:'#f0faf4', border:'1px solid #b2dfdb', borderLeft:`4px solid ${KS}`, borderRadius:6, padding:'18px 20px'}}>
                <h3 style={{fontSize:13, fontWeight:700, marginBottom:8, color:'#2e7d32'}}>\ud83c\udf0d Engagement Solidaire</h3>
                <p style={{fontSize:13, color:'#444', lineHeight:1.8, margin:0}}><strong style={{color:'#2e7d32'}}>10% des revenus nets</strong> de chaque s\u00e9rie sont revers\u00e9s \u00e0 une association d\u2019\u00e9ducation des enfants dans le monde.</p>
              </div>
            </div>
          )}

          {/* LES 24 PIECES */}
          {tab==='pieces' && (
            <div>
              <h2 style={{fontSize:mobile?20:24, fontWeight:300, letterSpacing:'0.12em', fontFamily:'Georgia,serif', marginBottom:4}}>Choisissez Votre Num\u00e9ro</h2>
              <p style={{fontSize:10, color:KS, letterSpacing:'0.15em', marginBottom:20, fontWeight:700}}>XII \u00b7 \u0661 \u00b7 \u09e8 \u00b7 3 \u00b7 \u2013\u2013\u2013\u2013 \u00b7 \u05d4 \u00b7 \u0e56 \u00b7 \u10d6 \u00b7 \u1370 \u00b7 \u0398 \u00b7 \u5341 \u00b7 \ud808\udf0b\ud808\udc79</p>
              <div style={{background:'#fff', border:'1px solid #e8e8e8', borderRadius:10, padding:mobile?16:24, marginBottom:24}}>
                <p style={{fontSize:11, color:'#888', marginBottom:14, fontWeight:600}}>S\u00e9lectionnez votre num\u00e9ro (I\u2013XII) :</p>
                <div style={{display:'flex', flexWrap:'wrap', gap:mobile?6:8, marginBottom:16}}>
                  {CIVS.map(c => (
                    <button key={c.num} onClick={() => { setNum(c.num); setReward('limited'); }} style={{width:mobile?44:52, height:mobile?44:52, borderRadius:8, border:`2px solid ${num===c.num&&reward==='limited'?c.color:'#e0e0e0'}`, background:num===c.num&&reward==='limited'?`${c.color}18`:'#fafafa', color:num===c.num&&reward==='limited'?c.color:'#888', fontSize:12, fontWeight:700, cursor:'pointer', transition:'all 0.15s', fontFamily:'Georgia,serif'}}>{c.roman}</button>
                  ))}
                </div>
                <div style={{display:'flex', gap:8, marginBottom:8, flexDirection:mobile?'column':'row'}}>
                  {(['steel','gold'] as const).map(v => (
                    <button key={v} onClick={() => { setVer(v); setReward('limited'); }} style={{flex:1, padding:'10px', borderRadius:6, border:`2px solid ${reward==='limited'&&ver===v?(v==='gold'?GOLD:KS):'#e0e0e0'}`, background:reward==='limited'&&ver===v?(v==='gold'?`${GOLD}12`:`${KS}10`):'#fafafa', color:reward==='limited'&&ver===v?(v==='gold'?'#b8860b':'#047a4a'):'#888', fontWeight:700, fontSize:11, cursor:'pointer', letterSpacing:'0.06em'}}>
                      {v==='gold' ? '\u2726 VERSION OR PVD \u2014 4 900 \u20ac' : '\u2699 VERSION ACIER 316L \u2014 4 500 \u20ac'}
                    </button>
                  ))}
                </div>
                <button onClick={() => setReward('open')} style={{width:'100%', padding:'12px', borderRadius:6, border:`2px solid ${reward==='open'?KS:'#e0e0e0'}`, background:reward==='open'?`${KS}12`:'#fafafa', color:reward==='open'?'#047a4a':'#666', fontWeight:800, fontSize:11, cursor:'pointer', letterSpacing:'0.08em'}}>
                  \u221e REWARD \u00c9DITION OUVERTE \u2014 1 900 \u20ac \u2014 SANS LIMITE
                </button>
              </div>

              {reward==='limited' ? (
                <div style={{background:civ.bg, border:`1px solid ${civ.color}30`, borderRadius:12, overflow:'hidden', marginBottom:20}}>
                  <div style={{display:'grid', gridTemplateColumns:mobile?'1fr':'1fr 180px'}}>
                    <div style={{padding:mobile?18:28}}>
                      <div style={{display:'flex', alignItems:'flex-start', gap:14, marginBottom:18}}>
                        <div style={{width:52, height:52, borderRadius:'50%', background:`${civ.color}20`, border:`2px solid ${civ.color}40`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>
                          <span style={{fontSize:20, color:civ.color, fontFamily:'Georgia,serif'}}>{civ.script}</span>
                        </div>
                        <div>
                          <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:4}}>
                            <span style={{fontSize:20, fontWeight:700, color:civ.color, fontFamily:'Georgia,serif'}}>{civ.roman}</span>
                            <span style={{fontSize:11, color:civ.color, fontWeight:700, background:`${civ.color}15`, padding:'3px 10px', borderRadius:3, letterSpacing:'0.1em'}}>{ver==='gold'?'OR PVD':'ACIER 316L'}</span>
                          </div>
                          <div style={{fontSize:15, fontWeight:700, color:'#fff', marginBottom:2}}>{civ.name}</div>
                          <div style={{fontSize:11, color:'rgba(255,255,255,0.5)'}}>{civ.civ} \u00b7 {civ.era}</div>
                        </div>
                      </div>
                      <div style={{marginBottom:14}}>
                        <div style={{fontSize:9, color:civ.color, letterSpacing:'0.15em', fontWeight:700, marginBottom:5}}>HISTOIRE</div>
                        <p style={{fontSize:mobile?12:13, color:'rgba(255,255,255,0.8)', lineHeight:1.8, margin:0}}>{civ.story}</p>
                      </div>
                      <div style={{marginBottom:14}}>
                        <div style={{fontSize:9, color:civ.color, letterSpacing:'0.15em', fontWeight:700, marginBottom:5}}>CONTRIBUTION \u00c0 L&apos;HUMANIT\u00c9</div>
                        <p style={{fontSize:mobile?12:13, color:'rgba(255,255,255,0.7)', lineHeight:1.7, margin:0}}>{civ.contribution}</p>
                      </div>
                      <div style={{background:`${civ.color}10`, border:`1px solid ${civ.color}25`, borderRadius:6, padding:'12px 14px'}}>
                        <div style={{fontSize:9, color:civ.color, letterSpacing:'0.15em', fontWeight:700, marginBottom:5}}>POURQUOI SUR LE CADRAN ?</div>
                        <p style={{fontSize:mobile?12:13, color:civ.color, lineHeight:1.65, margin:0, fontStyle:'italic'}}>{civ.whyOnDial}</p>
                      </div>
                    </div>
                    {!mobile && (
                      <div style={{background:`${civ.color}08`, borderLeft:`1px solid ${civ.color}20`, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:16, gap:10}}>
                        <div style={{width:140, height:140, borderRadius:'50%', border:`2px solid ${civ.color}40`}}>
                          <Dial civ={civ} version={ver}/>
                        </div>
                        <div style={{fontSize:9, color:'rgba(255,255,255,0.35)', textAlign:'center', letterSpacing:'0.1em', lineHeight:1.6}}>PI\u00c8CE {civ.roman}<br/>{ver==='gold'?'OR PVD':'ACIER 316L'}</div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div style={{background:'#f0faf4', border:`1px solid ${KS}`, borderRadius:12, padding:mobile?18:28, marginBottom:20}}>
                  <div style={{fontSize:10, color:KS, letterSpacing:'0.16em', fontWeight:800, marginBottom:8}}>\u221e REWARD \u00c9DITION OUVERTE</div>
                  <h3 style={{fontSize:mobile?18:24, fontWeight:700, marginBottom:8}}>BABEL \u00b7 Open Edition</h3>
                  <p style={{fontSize:13, color:'#4b4b4b', lineHeight:1.8, marginBottom:12}}>Une version sans limite de tirage, sans num\u00e9ro de pi\u00e8ce r\u00e9serv\u00e9, pens\u00e9e pour rendre BABEL plus accessible.</p>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12}}>
                    <ul style={{listStyle:'none', padding:0, margin:0}}>
                      {['Design BABEL standardis\u00e9','Sans num\u00e9rotation I\u2013XII','Production non limit\u00e9e','Prix d\u2019acc\u00e8s Kickstarter','Livret inclus'].map((item,i) => (
                        <li key={i} style={{fontSize:12, color:'#555', padding:'3px 0 3px 16px', position:'relative'}}><span style={{position:'absolute', left:0, color:KS, fontWeight:700}}>\u2713</span>{item}</li>
                      ))}
                    </ul>
                    <div style={{textAlign:'right'}}>
                      <div style={{fontSize:28, fontWeight:800, color:KS}}>1 900 \u20ac</div>
                      <div style={{fontSize:10, color:'#666', letterSpacing:'0.1em'}}>SANS LIMITE</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SPECS */}
          {tab==='specs' && (
            <div>
              <h2 style={{fontSize:mobile?20:24, fontWeight:300, letterSpacing:'0.12em', fontFamily:'Georgia,serif', marginBottom:4}}>Sp\u00e9cifications Techniques</h2>
              <p style={{fontSize:10, color:KS, letterSpacing:'0.15em', marginBottom:24, fontWeight:700}}>BABEL V1 \u2014 FICHE TECHNIQUE</p>
              <div style={{background:'#fff', border:'1px solid #e8e8e8', borderRadius:8, overflow:'hidden', marginBottom:28}}>
                {SPECS.map(([k,v],i) => (
                  <div key={i} style={{display:'grid', gridTemplateColumns:mobile?'1fr':'38% 1fr', padding:mobile?'10px 14px':'12px 20px', borderBottom:i<SPECS.length-1?'1px solid #f0f0f0':'none', background:i%2===0?'#fff':'#fafafa', gap:mobile?2:0}}>
                    <span style={{fontSize:mobile?9:10, letterSpacing:'0.12em', color:'#999', textTransform:'uppercase'}}>{k}</span>
                    <span style={{fontSize:mobile?12:13, color:'#333'}}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TIMELINE */}
          {tab==='timeline' && (
            <div>
              <h2 style={{fontSize:mobile?20:24, fontWeight:300, letterSpacing:'0.12em', fontFamily:'Georgia,serif', marginBottom:4}}>Calendrier</h2>
              <p style={{fontSize:10, color:KS, letterSpacing:'0.15em', marginBottom:24, fontWeight:700}}>ROADMAP 2026\u20132028</p>
              {TIMELINE.map((t,i) => (
                <div key={i} style={{background:'#fff', border:`1px solid ${t.cur?GOLD:t.done?KS:'#e8e8e8'}`, borderRadius:6, padding:mobile?'12px 14px':'14px 18px', marginBottom:10}}>
                  <div style={{fontSize:10, color:t.done?KS:t.cur?'#b8860b':'#aaa', letterSpacing:'0.1em', fontWeight:700, marginBottom:3}}>{t.date}</div>
                  <div style={{fontSize:mobile?13:13, fontWeight:700, marginBottom:3}}>{t.title}</div>
                  <div style={{fontSize:12, color:'#666', lineHeight:1.6}}>{t.desc}</div>
                </div>
              ))}
            </div>
          )}

          {/* RISKS */}
          {tab==='risks' && (
            <div>
              <h2 style={{fontSize:mobile?20:24, fontWeight:300, letterSpacing:'0.12em', fontFamily:'Georgia,serif', marginBottom:4}}>Risques & FAQ</h2>
              <p style={{fontSize:10, color:KS, letterSpacing:'0.15em', marginBottom:20, fontWeight:700}}>TRANSPARENCE TOTALE</p>
              {RISKS.map((r,i) => (
                <div key={i} style={{background:r.bg, border:`1px solid ${r.border}`, borderLeft:`5px solid ${r.border}`, borderRadius:6, padding:mobile?'14px 16px':'16px 20px', marginBottom:10}}>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6, gap:10}}>
                    <span style={{fontSize:13, fontWeight:700}}>{r.name}</span>
                    <span style={{background:r.bg, border:`1px solid ${r.border}`, color:r.color, fontSize:9, fontWeight:700, padding:'2px 8px', borderRadius:3, letterSpacing:'0.1em', flexShrink:0}}>{r.level}</span>
                  </div>
                  <p style={{fontSize:12, color:'#555', lineHeight:1.7, margin:0}}>{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <aside id="pledge" style={{paddingTop:28, position:mobile?'static':'sticky', top:64}}>
          <div style={{fontSize:10, letterSpacing:'0.18em', color:'#999', fontWeight:700, marginBottom:12, paddingBottom:12, borderBottom:'1px solid #e8e8e8'}}>VOTRE S\u00c9LECTION</div>
          <div style={{display:'grid', gap:8, marginBottom:12}}>
            <button onClick={() => setReward('limited')} style={{padding:mobile?'13px 12px':'11px 12px', borderRadius:8, border:`2px solid ${reward==='limited'?GOLD:'#e0e0e0'}`, background:reward==='limited'?`${GOLD}12`:'#fff', fontWeight:800, fontSize:mobile?12:11, letterSpacing:'0.06em', cursor:'pointer', color:reward==='limited'?'#8d6b00':'#666'}}>24 PI\u00c8CES LIMIT\u00c9ES</button>
            <button onClick={() => setReward('open')} style={{padding:mobile?'13px 12px':'11px 12px', borderRadius:8, border:`2px solid ${reward==='open'?KS:'#e0e0e0'}`, background:reward==='open'?`${KS}12`:'#fff', fontWeight:800, fontSize:mobile?12:11, letterSpacing:'0.06em', cursor:'pointer', color:reward==='open'?'#047a4a':'#666'}}>\u00c9DITION OUVERTE \u00b7 SANS LIMITE</button>
          </div>

          <div style={{background:reward==='open'?'#f0faf4':(ver==='gold'?'#0f0c04':'#fff'), border:`2px solid ${reward==='open'?KS:(ver==='gold'?`${GOLD}50`:KS)}`, borderRadius:10, padding:mobile?16:18, marginBottom:12}}>
            {reward==='limited' ? (
              <>
                <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:12}}>
                  <div style={{width:42, height:42, borderRadius:'50%', background:ver==='gold'?`${GOLD}20`:`${KS}15`, border:`2px solid ${ver==='gold'?GOLD:KS}`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>
                    <span style={{fontSize:15, color:ver==='gold'?GOLD:KS, fontFamily:'Georgia,serif', fontWeight:700}}>{civ.roman}</span>
                  </div>
                  <div>
                    <div style={{fontSize:13, fontWeight:700, color:ver==='gold'?'#fff':'#222'}}>{civ.name}</div>
                    <div style={{fontSize:10, color:ver==='gold'?'rgba(255,255,255,0.4)':'#aaa'}}>{civ.era} \u00b7 {ver==='gold'?'Or PVD':'Acier 316L'}</div>
                  </div>
                </div>
                <div style={{fontSize:mobile?24:22, fontWeight:800, color:ver==='gold'?GOLD:KS, marginBottom:4}}>{price.toLocaleString('fr-FR')} \u20ac</div>
                <div style={{fontSize:10, color:ver==='gold'?'rgba(255,255,255,0.4)':'#888', marginBottom:12}}>PI\u00c8CE N\u00b0 {civ.roman} \u00b7 {ver==='gold'?'OR PVD':'ACIER 316L'}</div>
                <ul style={{paddingLeft:0, marginBottom:12, listStyle:'none'}}>
                  {['Sellita SW200 \u00b7 Swiss Made','Cristal saphir double face AR','\u00c9crin bois laqu\u00e9 + velours','Livret 12 civilisations','Certificat num\u00e9rot\u00e9 & sign\u00e9','Acc\u00e8s communaut\u00e9 backers'].map((item,j) => (
                    <li key={j} style={{fontSize:11, color:ver==='gold'?'rgba(255,255,255,0.7)':'#555', padding:'3px 0', paddingLeft:16, position:'relative'}}>
                      <span style={{position:'absolute', left:0, color:ver==='gold'?GOLD:KS, fontWeight:700}}>\u2713</span>{item}
                    </li>
                  ))}
                </ul>
                <button style={{width:'100%', background:ver==='gold'?GOLD:KS, color:'#000', fontWeight:700, fontSize:13, padding:mobile?14:12, borderRadius:5, border:'none', cursor:'pointer', letterSpacing:'0.06em'}}>
                  {ver==='gold'?`\u2726 R\u00c9SERVER \u2014 OR N\u00b0 ${civ.roman}`:`\u2699 R\u00c9SERVER \u2014 ACIER N\u00b0 ${civ.roman}`}
                </button>
                <p style={{fontSize:10, color:ver==='gold'?'rgba(255,255,255,0.3)':'#bbb', textAlign:'center', marginTop:8, lineHeight:1.5}}>Fonds collect\u00e9s uniquement si l&apos;objectif est atteint.</p>
              </>
            ) : (
              <>
                <div style={{fontSize:10, color:KS, letterSpacing:'0.16em', fontWeight:800, marginBottom:8}}>\u221e REWARD \u00c9DITION OUVERTE</div>
                <div style={{fontSize:mobile?24:22, fontWeight:800, color:KS, marginBottom:4}}>{price.toLocaleString('fr-FR')} \u20ac</div>
                <div style={{fontSize:10, color:'#666', marginBottom:12}}>SANS NUM\u00c9RO FIXE \u00b7 SANS LIMITE</div>
                <ul style={{paddingLeft:0, marginBottom:12, listStyle:'none'}}>
                  {['Design BABEL standardis\u00e9','Sans s\u00e9lection I\u2013XII','Production ouverte','Livret inclus','Acc\u00e8s communaut\u00e9'].map((item,j) => (
                    <li key={j} style={{fontSize:11, color:'#555', padding:'3px 0', paddingLeft:16, position:'relative'}}>
                      <span style={{position:'absolute', left:0, color:KS, fontWeight:700}}>\u2713</span>{item}
                    </li>
                  ))}
                </ul>
                <button style={{width:'100%', background:KS, color:'#000', fontWeight:700, fontSize:13, padding:mobile?14:12, borderRadius:5, border:'none', cursor:'pointer', letterSpacing:'0.06em'}}>
                  \u221e R\u00c9SERVER \u2014 \u00c9DITION OUVERTE
                </button>
              </>
            )}
          </div>

          <div style={{background:'#fff', border:'1px solid #e8e8e8', borderRadius:10, padding:mobile?14:16, marginBottom:20}}>
            <div style={{fontSize:18, fontWeight:800, color:'#333', marginBottom:3}}>30 \u20ac</div>
            <div style={{fontSize:12, fontWeight:700, color:'#222', marginBottom:8}}>Soutien \u00b7 Communaut\u00e9 ALMA</div>
            <ul style={{paddingLeft:0, marginBottom:12, listStyle:'none'}}>
              {['Votre nom dans le livret','Newsletter Carnets ALMA','Photos making-of exclusives'].map((item,j) => (
                <li key={j} style={{fontSize:11, color:'#555', padding:'2px 0', paddingLeft:16, position:'relative'}}><span style={{position:'absolute', left:0, color:KS, fontWeight:700}}>\u2713</span>{item}</li>
              ))}
            </ul>
            <button style={{width:'100%', background:'#222', color:'#fff', fontWeight:700, fontSize:12, padding:mobile?12:10, borderRadius:5, border:'none', cursor:'pointer'}}>SOUTENIR LE PROJET</button>
          </div>
        </aside>
      </div>

      {/* LIGHTBOX */}
      {lbx && (
        <div onClick={() => setLbx(null)} style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.95)', zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', padding:16}}>
          <img src={lbx} alt="" style={{maxWidth:'90vw', maxHeight:'90vh', borderRadius:8, boxShadow:'0 0 80px rgba(0,0,0,0.8)'}}/>
          <div style={{position:'absolute', top:20, right:24, color:'#fff', fontSize:28, cursor:'pointer', lineHeight:1}}>\u00d7</div>
        </div>
      )}

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }
        @media (max-width: 900px) {
          ::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </div>
  );
}
