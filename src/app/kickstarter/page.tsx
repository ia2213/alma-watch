'use client';
import { useState } from 'react';

const CIVS = [
  { num:1,  roman:'I',    script:'١',   name:'Arabe',       civ:'Civilisation Islamique',   era:'7e s. ap. J.-C.',      region:'Péninsule Arabique → Monde',         color:'#c8a44a', bg:'#1a1208', story:"Le chiffre arabe ١ (wāḥid) est l'héritier du système positionnel indo-arabe adopté par les mathématiciens de Bagdad au IXe siècle. C'est grâce à lui que l'Europe abandonna les chiffres romains pour le calcul moderne.", contribution:"Algèbre, astronomie, médecine, architecture. La Maison de la Sagesse (Bayt al-Ḥikma) préserva tout le savoir antique.", whyOnDial:"Parce qu'aucune montre ne mesure le temps sans le zéro — et le zéro vient de là." },
  { num:2,  roman:'II',   script:'ב',   name:'Hébreu',      civ:'Civilisation Juive',       era:'10e s. av. J.-C.',     region:'Canaan → Diaspora mondiale',          color:'#6b9fd4', bg:'#08101a', story:"Bet (ב), deuxième lettre de l'aleph-bet, ouvre la Genèse. L'hébreu est l'une des seules langues mortes ressuscitées comme langue vivante — un miracle linguistique unique dans l'histoire humaine.", contribution:"Monothéisme abrahamique, droit, éthique, littérature. Textes fondateurs de trois grandes religions.", whyOnDial:"Parce que le temps est central dans la tradition juive : Shabbat, calendrier hébraïque, cycles de 7." },
  { num:3,  roman:'III',  script:'四',  name:'Kanji',       civ:'Civilisation Chinoise',    era:'2e s. av. J.-C.',      region:'Fleuve Jaune → Asie de l\'Est',       color:'#e8a0a0', bg:'#1a0808', story:"四 (sì, quatre) figure sur des os oraculaires Shang vieux de 3 200 ans. L'écriture chinoise est le système logographique le plus utilisé : 1,4 milliard de locuteurs quotidiens.", contribution:"Papier, imprimerie, boussole, poudre à canon — quatre inventions qui changèrent le monde.", whyOnDial:"Parce que la Chine a inventé la clepsydre à eau et les premières horloges mécaniques au Xe siècle." },
  { num:4,  roman:'IV',   script:'𝋥',  name:'Maya',        civ:'Civilisation Maya',        era:'3e s. ap. J.-C.',      region:'Mésoamérique',                        color:'#7ecba1', bg:'#081a0e', story:"Les Maya développèrent indépendamment un système mathématique positionnel avec le zéro, 3 000 ans avant l'Europe. Leur calendrier Long Count n'a qu'une erreur de 33 secondes par an.", contribution:"Mathématiques, astronomie, architecture pyramidale, cacao, caoutchouc.", whyOnDial:"Parce qu'ils mesuraient le temps avec une précision que l'Europe n'atteindra que 1 000 ans plus tard." },
  { num:5,  roman:'V',    script:'Η',   name:'Grec',        civ:'Grèce Antique',            era:'8e s. av. J.-C.',      region:'Méditerranée orientale',              color:'#a0c4e8', bg:'#080e1a', story:"Eta (Η), 7e lettre grecque, est à l'origine du H latin. L'alphabet grec est le premier à noter explicitement les voyelles — révolution qui rend l'écriture universellement accessible.", contribution:"Philosophie, démocratie, mathématiques euclidiennes, médecine hippocratique, théâtre, olympisme.", whyOnDial:"Parce qu'Aristote, Platon et Archimède ont posé les fondements de toute la pensée occidentale." },
  { num:6,  roman:'VI',   script:'፯',  name:"Ge'ez",       civ:'Éthiopie Ancienne',        era:'4e s. ap. J.-C.',      region:'Corne de l\'Afrique',                 color:'#f0c060', bg:'#1a1408', story:"Le Ge'ez (፯ = sept) est la langue liturgique de l'Église orthodoxe éthiopienne, l'une des plus anciennes communautés chrétiennes. Son écriture (fidäl) encode consonne + voyelle en un seul symbole.", contribution:"Christianisme africain ancien, architecture Aksum, stèles géantes, tradition de l'Arche d'Alliance.", whyOnDial:"Parce que l'Éthiopie est l'un des berceaux de l'humanité — Lucy (Australopithecus) y fut découverte en 1974." },
  { num:7,  roman:'VII',  script:'𒐕', name:'Cunéiforme',  civ:'Sumer & Mésopotamie',     era:'3200 av. J.-C.',       region:'Mésopotamie (Irak actuel)',            color:'#d4935a', bg:'#1a0e08', story:"𒐕 est le premier chiffre de la première écriture humaine, née à Uruk vers 3200 av. J.-C. Utilisée pendant 3 000 ans par des dizaines de civilisations différentes.", contribution:"Première écriture, Code d'Hammurabi, épopée de Gilgamesh, roue, agriculture irriguée.", whyOnDial:"Parce que c'est ici que tout a commencé — 5 200 ans avant votre montre." },
  { num:8,  roman:'VIII', script:'𓂋', name:'Hiéroglyphe', civ:'Égypte Ancienne',          era:'3100 av. J.-C.',       region:'Vallée du Nil',                       color:'#c8a835', bg:'#1a1605', story:"𓂋 (la bouche, phonème R) est l'un des 700+ hiéroglyphes égyptiens. Premier système à noter des sons — révolution qui permet d'écrire n'importe quel mot.", contribution:"Pyramides, médecine, papyrus, calendrier solaire de 365 jours, momification.", whyOnDial:"Parce que les Égyptiens divisèrent la journée en 24 heures — la base même de votre montre." },
  { num:9,  roman:'IX',   script:'Д',   name:'Cyrillique',  civ:'Slaves & Orthodoxie',     era:'9e s. ap. J.-C.',      region:'Europe de l\'Est → Sibérie',          color:'#a0b8d8', bg:'#080e18', story:"Д (dobro) créé par Cyrille et Méthode en 863 pour évangéliser les Slaves. L'alphabet cyrillique est utilisé par 250+ millions de personnes dans 50+ langues.", contribution:"Littérature russe (Dostoïevski, Tolstoï), musique (Tchaïkovski), Mendeleïev, conquête spatiale.", whyOnDial:"Parce que Spoutnik, le premier objet humain dans l'espace, portait des inscriptions cyrilliques." },
  { num:10, roman:'X',    script:'क',   name:'Devanāgarī', civ:'Inde Védique',             era:'1200 av. J.-C.',       region:'Sous-continent indien',               color:'#e8a060', bg:'#1a0e08', story:"Ka (क) est la première consonne du Devanāgarī, écriture du sanskrit. Sa grammaire de Pāṇini (4e s. av. J.-C.) anticipe la linguistique computationnelle moderne.", contribution:"Zéro, décimaux, algèbre, yoga, bouddhisme, ayurveda, astronomie, échecs.", whyOnDial:"Parce que le zéro — sans lequel votre montre numérique n'existerait pas — vient de là." },
  { num:11, roman:'XI',   script:'𐤋',  name:'Phénicien',   civ:'Phénicie & Carthage',     era:'1100 av. J.-C.',       region:'Liban actuel → Méditerranée',         color:'#c880c0', bg:'#160812', story:"Lamed (𐤋) est à l'origine du L latin, du λ grec et du ل arabe. L'alphabet phénicien — 22 consonnes — est le père de presque tous les alphabets du monde.", contribution:"Premier alphabet consonantique universel, commerce maritime méditerranéen, verre soufflé, teinture pourpre royale.", whyOnDial:"Parce que la lettre que vous lisez en ce moment vient de Phénicie." },
  { num:12, roman:'XII',  script:'XII', name:'Latin',       civ:'Rome & Occident',          era:'7e s. av. J.-C.',      region:'Italie → Empire Romain → Monde',     color:'#d4af37', bg:'#1a1608', story:"XII — douze en chiffres romains — est la position du sommet de tout cadran. Le latin est la langue mère du français, espagnol, portugais, italien et roumain.", contribution:"Droit romain, architecture, ingénierie, routes, latin scientifique universel.", whyOnDial:"Parce que XII est le chiffre du temps lui-même — midi, minuit, le sommet du cadran." },
];

const GALLERY = [
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=85',
  'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=900&q=85',
  'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=900&q=85',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=85',
  'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=900&q=85',
  'https://images.unsplash.com/photo-1548171916-c8fd5d130bba?w=900&q=85',
];

const GALLERY_CAPS = ['CADRAN · Vue principale','MOUVEMENT · Sellita SW200','BRACELET · Cuir Cognac','ÉCRIN · Bois Laqué','AU POIGNET · 39mm','MACRO · Mécanisme'];

const SPECS = [
  ['Mouvement','Sellita SW200-2 · Swiss Made'],
  ['Réserve de marche','65 heures'],
  ['Fréquence','28 800 alt/h · 4 Hz'],
  ['Rubis','26 rubis'],
  ['Précision','−4 / +6 sec/jour'],
  ['Diamètre','39 mm'],
  ['Épaisseur','11,5 mm'],
  ['Entre-cornes','20 mm'],
  ['Matériau Acier','316L · Grade chirurgical'],
  ['Matériau Or','316L + PVD or champagne · Halal-compatible'],
  ['Étanchéité','50 m (5 ATM)'],
  ['Cristal','Saphir double face AR · 9 Mohs'],
  ['Caseback','Saphir transparent · Mouvement visible'],
  ['Cadran','Laque blanc champagne · 12 scripts uniques'],
  ['Tirage','24 pièces : 12 Or (I–XII) + 12 Acier (I–XII)'],
  ['Numérotation','N° pièce = position horaire = civilisation'],
];

const RISKS = [
  { level:'ÉLEVÉ',  color:'#c62828', bg:'#fff5f5', border:'#e57373', name:'Conflit de marque (ALMA Watches GmbH)', text:'Conflit identifié avec ALMA Watches GmbH (DE). Dépôt BABEL à l\'INPI/EUIPO en cours. Budget ~1 000 €. Plan B : BABEL comme nom principal.' },
  { level:'MOYEN',  color:'#e65100', bg:'#fff8f0', border:'#ffb74d', name:'Délais de fabrication dépassés',        text:'Prototypage peut prendre 12–18 mois. Mises à jour mensuelles garanties. Livraison cible : Q3 2027.' },
  { level:'MOYEN',  color:'#e65100', bg:'#fff8f0', border:'#ffb74d', name:'Lisibilité cadran (12 scripts/39 mm)',   text:'5 variantes testées. Vote communauté Instagram. Priorité absolue : lisibilité sur exhaustivité.' },
  { level:'FAIBLE', color:'#2e7d32', bg:'#f0faf4', border:'#81c784', name:'Risque financier backers',              text:'Kickstarter = fonds collectés SEULEMENT si objectif atteint. Zéro risque pour les contributeurs.' },
];

const TIMELINE = [
  { done:true,  cur:false, date:'Juillet 2026',      title:'Lancement Kickstarter',     desc:'183 backers. Early Bird épuisé en 48h.' },
  { done:false, cur:true,  date:'Août–Oct. 2026',    title:'Sourcing & prototypage',    desc:'Commandes Sellita, 3 itérations boîtier, validation cadran + PVD.' },
  { done:false, cur:false, date:'Nov. 2026–Fév. 2027',title:'Assemblage & QC',          desc:'24 pièces, tests Witschi, timegrapher, certificats numérotés.' },
  { done:false, cur:false, date:'Mars–Avr. 2027',    title:'Livraison Backers',         desc:'Expédition mondiale · Suivi individuel · Unboxing vidéo.' },
  { done:false, cur:false, date:'Juil. 2027',         title:'Série 2 · BABEL NUIT',      desc:'24 pièces ardoise (12 or + 12 acier). Lancement DTC.' },
  { done:false, cur:false, date:'2028',               title:'Série 3 · MÉTÉORITE & TITANE', desc:'Ultra-limitées. Candidature GPHG.' },
];

const KS = '#05ce78';
const GOLD = '#d4af37';
const TABS = [{id:'story',label:'HISTOIRE'},{id:'pieces',label:'LES 24 PIÈCES'},{id:'specs',label:'SPECS'},{id:'timeline',label:'CALENDRIER'},{id:'risks',label:'RISQUES & FAQ'}];

function Dial({ civ, version }: { civ: typeof CIVS[0]; version: 'steel'|'gold' }) {
  const ac = version === 'gold' ? GOLD : 'rgba(184,150,12,0.55)';
  const hrs = [
    {h:0,t:'XII'},{h:1,t:'١'},{h:2,t:'ב'},{h:3,t:'四'},
    {h:4,t:'𝋥'},{h:5,t:'Η'},{h:6,t:'፯'},{h:7,t:'𒐕'},
    {h:8,t:'𓂋'},{h:9,t:'Д'},{h:10,t:'क'},{h:11,t:'𐤋'},
  ];
  const activePosH = civ.num === 12 ? 0 : civ.num;
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%">
      <defs>
        <radialGradient id={`bg-${version}`} cx="38%" cy="32%">
          <stop offset="0%" stopColor={version==='gold'?'#2a1f08':'#252018'}/>
          <stop offset="100%" stopColor={version==='gold'?'#0f0c04':'#0c0b09'}/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="98" fill={`url(#bg-${version})`} stroke={ac} strokeWidth="2"/>
      {Array.from({length:60}).map((_,i)=>{
        const a=(i*6-90)*Math.PI/180,r=i%5===0?72:74;
        return <circle key={i} cx={100+r*Math.cos(a)} cy={100+r*Math.sin(a)} r={i%5===0?1.8:0.7} fill={i%5===0?ac:'rgba(212,175,55,0.2)'}/>;
      })}
      {hrs.map(({h,t})=>{
        const a=(h*30-90)*Math.PI/180, isActive=h===activePosH;
        return (
          <g key={h}>
            {isActive && <circle cx={100+62*Math.cos(a)} cy={100+62*Math.sin(a)} r={8} fill={version==='gold'?'rgba(212,175,55,0.2)':'rgba(5,206,120,0.15)'} stroke={version==='gold'?GOLD:KS} strokeWidth="1"/>}
            <text x={100+62*Math.cos(a)} y={100+62*Math.sin(a)+2.8}
              textAnchor="middle" fontSize={t.length>2?5:7}
              fill={isActive?(version==='gold'?'#fff':KS):ac}
              fontFamily="Georgia,serif"
              fontWeight={isActive?'bold':'normal'}>{t}</text>
          </g>
        );
      })}
      <text x="100" y="87" textAnchor="middle" fontSize="9" fill={ac} fontFamily="Georgia,serif" letterSpacing="4">ALMA</text>
      <text x="100" y="99" textAnchor="middle" fontSize="4" fill="rgba(212,175,55,0.45)" fontFamily="Georgia,serif" letterSpacing="3">BABEL</text>
      <text x="100" y="111" textAnchor="middle" fontSize="3" fill="rgba(212,175,55,0.25)" fontFamily="Georgia,serif" letterSpacing="2">SWISS MADE</text>
      <line x1="100" y1="100" x2="88" y2="55" stroke={GOLD} strokeWidth="3" strokeLinecap="round"/>
      <line x1="100" y1="100" x2="130" y2="70" stroke="#e8e2d6" strokeWidth="2" strokeLinecap="round"/>
      <line x1="100" y1="100" x2="75" y2="135" stroke="#e05050" strokeWidth="1" strokeLinecap="round"/>
      <circle cx="100" cy="100" r="4" fill={GOLD}/>
      <circle cx="100" cy="100" r="2" fill="#fff"/>
    </svg>
  );
}

export default function KickstarterPage() {
  const [tab,   setTab]   = useState('story');
  const [num,   setNum]   = useState(1);
  const [ver,   setVer]   = useState<'steel'|'gold'>('steel');
  const [lbx,   setLbx]   = useState<string|null>(null);
  const civ = CIVS[num - 1];
  const funded=28150, goal=42000, pct=Math.round(funded/goal*100);
  const priceGold=4900, priceSteel=4500;
  const price = ver==='gold' ? priceGold : priceSteel;

  const pill = (label: string, active: boolean, onClick: ()=>void, activeColor='#fff', activeBg='#333') => (
    <button onClick={onClick} style={{padding:'8px 16px',borderRadius:20,border:`1px solid ${active?activeBg:'#e0e0e0'}`,background:active?activeBg:'#fff',color:active?activeColor:'#888',fontSize:12,fontWeight:700,cursor:'pointer',letterSpacing:'0.06em',transition:'all 0.15s'}}>
      {label}
    </button>
  );

  return (
    <div style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",background:'#f7f7f7',minHeight:'100vh',color:'#222'}}>

      {/* KS TOP BAR */}
      <div style={{background:KS,padding:'9px 24px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:8,fontWeight:700,fontSize:15}}>
          <svg width="20" height="20" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="16" fill={KS}/>
            <path d="M10 8v16M10 16l5-8 7 8-7 8-5-8z" stroke="#000" strokeWidth="2.5" strokeLinejoin="round"/>
          </svg>
          Kickstarter
        </div>
        <span style={{fontSize:12,fontWeight:600}}>Campagne en cours · <strong>14 jours restants</strong></span>
        <a href="#pledge" style={{background:'#000',color:KS,padding:'6px 18px',borderRadius:4,textDecoration:'none',fontSize:12,fontWeight:700}}>Soutenir ce projet →</a>
      </div>

      {/* KS NAV */}
      <nav style={{background:'#fff',borderBottom:'1px solid #e0e0e0',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'sticky',top:0,zIndex:100,boxShadow:'0 1px 4px rgba(0,0,0,0.06)'}}>
        <div style={{display:'flex',alignItems:'center',gap:24}}>
          <span style={{padding:'16px 0',fontWeight:700,fontSize:15,letterSpacing:'0.08em'}}>ALMA WATCH · BABEL</span>
          {['Campagne','Mises à jour (3)','Commentaires (47)','Communauté'].map(l=>(
            <a key={l} href="#" style={{color:l==='Campagne'?'#222':'#888',fontSize:13,textDecoration:'none',padding:'20px 4px',borderBottom:l==='Campagne'?`2px solid ${KS}`:'2px solid transparent',fontWeight:l==='Campagne'?700:400}}>{l}</a>
          ))}
        </div>
        <a href="#pledge" style={{background:KS,color:'#000',fontWeight:700,fontSize:13,padding:'10px 24px',borderRadius:4,textDecoration:'none'}}>Soutenir</a>
      </nav>

      {/* HERO */}
      <div style={{background:'linear-gradient(135deg,#0f0e0a,#1c1608 55%,#0c0b06)',padding:'64px 32px 56px'}}>
        <div style={{maxWidth:1140,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 380px',gap:64,alignItems:'center'}}>
          <div>
            <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(5,206,120,0.1)',border:'1px solid rgba(5,206,120,0.3)',borderRadius:20,padding:'5px 14px',marginBottom:20}}>
              <span style={{width:7,height:7,borderRadius:'50%',background:KS,display:'inline-block'}}/>
              <span style={{color:KS,fontSize:11,letterSpacing:'0.15em',fontWeight:700}}>KICKSTARTER — CAMPAGNE EN DIRECT</span>
            </div>
            <h1 style={{fontSize:'clamp(3rem,5.5vw,5rem)',fontWeight:200,letterSpacing:'0.18em',color:GOLD,lineHeight:1.05,marginBottom:8,fontFamily:'Georgia,serif'}}>ALMA<br/>BABEL</h1>
            <p style={{fontSize:17,color:'#ccc',fontWeight:300,letterSpacing:'0.08em',marginBottom:16}}>12 Civilisations. 24 Pièces Ultra-Limitées. 1 Montre.</p>
            <p style={{fontSize:14,color:'#999',lineHeight:1.9,maxWidth:480,marginBottom:24}}>La première montre mécanique suisse portant les 12 systèmes d&apos;écriture des plus grandes civilisations. <strong style={{color:GOLD}}>12 Or PVD + 12 Acier 316L</strong> — chaque pièce numérotée correspond exactement à la position horaire et à la civilisation gravée sur son cadran.</p>
            <p style={{fontSize:13,color:'rgba(212,175,55,0.6)',fontStyle:'italic',marginBottom:28}}>« Ton cadran existait avant la Terre. » — ALMA, Juillet 2026</p>
            <div style={{display:'flex',gap:12}}>
              <a href="#pledge" style={{background:KS,color:'#000',fontWeight:700,fontSize:13,padding:'13px 28px',borderRadius:4,textDecoration:'none'}}>Réserver ma pièce</a>
              <button onClick={()=>setTab('pieces')} style={{background:'transparent',color:GOLD,fontSize:13,padding:'12px 28px',borderRadius:4,border:`1px solid ${GOLD}`,cursor:'pointer'}}>Voir les 24 pièces</button>
            </div>
          </div>
          {/* DIAL */}
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:16}}>
            <div style={{display:'flex',gap:0,background:'rgba(255,255,255,0.06)',borderRadius:6,overflow:'hidden',border:'1px solid rgba(255,255,255,0.1)'}}>
              {(['steel','gold'] as const).map(v=>(
                <button key={v} onClick={()=>setVer(v)} style={{padding:'8px 22px',background:ver===v?(v==='gold'?GOLD:'rgba(255,255,255,0.12)'):'transparent',color:ver===v?(v==='gold'?'#000':'#fff'):'#888',border:'none',cursor:'pointer',fontSize:11,fontWeight:700,letterSpacing:'0.1em'}}>
                  {v==='steel'?'⚙ ACIER':'✦ OR PVD'}
                </button>
              ))}
            </div>
            <div style={{width:300,height:300,borderRadius:'50%',border:`2px solid ${ver==='gold'?'rgba(212,175,55,0.55)':'rgba(184,150,12,0.3)'}`,boxShadow:ver==='gold'?'0 0 60px rgba(212,175,55,0.12)':'0 0 40px rgba(0,0,0,0.4)',transition:'all 0.4s'}}>
              <Dial civ={civ} version={ver}/>
            </div>
            <div style={{textAlign:'center'}}>
              <div style={{color:GOLD,fontSize:11,letterSpacing:'0.18em',fontWeight:700}}>BABEL {ver==='gold'?'OR PVD':'ACIER 316L'}</div>
              <div style={{color:'#555',fontSize:10,letterSpacing:'0.12em',marginTop:3}}>PIÈCE {civ.roman} · {civ.name} · {civ.era}</div>
            </div>
          </div>
        </div>
      </div>

      {/* FUNDING */}
      <div style={{background:'#fff',borderBottom:'2px solid #f0f0f0',padding:'24px 32px'}}>
        <div style={{maxWidth:1140,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr auto',gap:48,alignItems:'center'}}>
          <div>
            <div style={{display:'flex',gap:48,marginBottom:14}}>
              <div><div style={{fontSize:30,fontWeight:800,color:KS}}>{funded.toLocaleString('fr-FR')} €</div><div style={{fontSize:11,color:'#888',letterSpacing:'0.1em'}}>SUR {goal.toLocaleString('fr-FR')} € OBJECTIF</div></div>
              <div><div style={{fontSize:30,fontWeight:800}}>183</div><div style={{fontSize:11,color:'#888',letterSpacing:'0.1em'}}>CONTRIBUTEURS</div></div>
              <div><div style={{fontSize:30,fontWeight:800}}>{pct}%</div><div style={{fontSize:11,color:'#888',letterSpacing:'0.1em'}}>FINANCÉ</div></div>
            </div>
            <div style={{height:6,background:'#f0f0f0',borderRadius:3,overflow:'hidden'}}>
              <div style={{height:'100%',width:`${pct}%`,background:`linear-gradient(90deg,${KS},#04b368)`,borderRadius:3}}/>
            </div>
          </div>
          <div style={{textAlign:'right'}}>
            <div style={{fontSize:48,fontWeight:800,lineHeight:1}}>14</div>
            <div style={{fontSize:11,color:'#888',letterSpacing:'0.15em'}}>JOURS RESTANTS</div>
            <div style={{marginTop:8,display:'inline-block',background:`rgba(5,206,120,0.08)`,border:`1px solid ${KS}`,color:KS,fontSize:10,padding:'3px 12px',borderRadius:3,letterSpacing:'0.1em',fontWeight:700}}>● APPROUVÉ KICKSTARTER</div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div style={{maxWidth:1140,margin:'0 auto',padding:'0 32px',display:'grid',gridTemplateColumns:'1fr 340px',gap:48,alignItems:'start'}}>

        {/* LEFT */}
        <div style={{paddingTop:32}}>
          {/* TABS */}
          <div style={{display:'flex',borderBottom:'2px solid #e8e8e8',marginBottom:36,gap:0,overflowX:'auto'}}>
            {TABS.map(t=>(
              <button key={t.id} onClick={()=>setTab(t.id)} style={{background:'none',border:'none',cursor:'pointer',padding:'12px 18px',fontSize:11,fontWeight:700,letterSpacing:'0.1em',color:tab===t.id?'#222':'#aaa',borderBottom:tab===t.id?`2px solid ${KS}`:'2px solid transparent',marginBottom:-2,whiteSpace:'nowrap'}}>{t.label}</button>
            ))}
          </div>

          {/* ===== HISTOIRE ===== */}
          {tab==='story' && (
            <div>
              {/* VIDEO HERO */}
              <div style={{width:'100%',aspectRatio:'16/9',borderRadius:10,overflow:'hidden',position:'relative',marginBottom:32,cursor:'pointer',background:'#111'}}>
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=70" alt="ALMA BABEL" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:0.35}}/>
                <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:12}}>
                  <div style={{width:68,height:68,borderRadius:'50%',background:'rgba(255,255,255,0.12)',border:'2px solid rgba(255,255,255,0.5)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <p style={{color:'#fff',fontSize:13,letterSpacing:'0.1em',fontWeight:700}}>ALMA WATCH · MAKING-OF & VISION DU FONDATEUR</p>
                  <p style={{color:'rgba(255,255,255,0.4)',fontSize:11}}>Disponible dès la campagne</p>
                </div>
              </div>

              <h2 style={{fontSize:24,fontWeight:300,letterSpacing:'0.12em',fontFamily:'Georgia,serif',marginBottom:4}}>L&apos;Art du Temps Universel</h2>
              <p style={{fontSize:11,color:KS,letterSpacing:'0.15em',marginBottom:20,fontWeight:700}}>LA NAISSANCE D&apos;ALMA · JUILLET 2026</p>
              <p style={{fontSize:15,color:'#444',lineHeight:1.9,marginBottom:14}}>ALMA vient de l&apos;araméen et signifie <em>l&apos;éternité</em> ou <em>le monde</em>. Retenu parmi 20 candidats — MERIDIEM, AION, KRONN, NEXUM — ALMA s&apos;impose par son universalité : court, prononçable dans toutes les langues, sans connotation culturelle unique.</p>
              <p style={{fontSize:15,color:'#444',lineHeight:1.9,marginBottom:28}}>Le modèle <strong>BABEL</strong> porte les 12 grands systèmes d&apos;écriture sur un cadran de 39 mm. Chaque position horaire est une civilisation. Chaque civilisation est un numéro de pièce. <strong style={{color:GOLD}}>24 pièces : 12 Or PVD + 12 Acier 316L.</strong></p>

              {/* GALLERY */}
              <h3 style={{fontSize:15,fontWeight:700,letterSpacing:'0.06em',marginBottom:14}}>Galerie</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8,marginBottom:32}}>
                {GALLERY.map((src,i)=>(
                  <div key={i} onClick={()=>setLbx(src)} style={{cursor:'pointer',borderRadius:6,overflow:'hidden',aspectRatio:'1',position:'relative'}}>
                    <img src={src} alt={GALLERY_CAPS[i]} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
                    <div style={{position:'absolute',bottom:0,left:0,right:0,background:'linear-gradient(transparent,rgba(0,0,0,0.8)',padding:'20px 8px 7px',fontSize:9,color:'#fff',letterSpacing:'0.1em',fontWeight:700}}>{GALLERY_CAPS[i]}</div>
                  </div>
                ))}
              </div>

              {/* VIDEO 2 */}
              <div style={{width:'100%',aspectRatio:'16/9',borderRadius:10,overflow:'hidden',position:'relative',marginBottom:28,cursor:'pointer',background:'#111'}}>
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&q=60" alt="Civilisations" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:0.2}}/>
                <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:12}}>
                  <div style={{width:68,height:68,borderRadius:'50%',background:'rgba(212,175,55,0.12)',border:`2px solid ${GOLD}`,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg viewBox="0 0 24 24" width="28" height="28" fill={GOLD}><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <p style={{color:GOLD,fontSize:13,letterSpacing:'0.1em',fontWeight:700}}>LES 12 CIVILISATIONS D&apos;ALMA — DOCUMENTAIRE</p>
                </div>
              </div>

              {/* SOLIDARITY */}
              <div style={{background:'#f0faf4',border:'1px solid #b2dfdb',borderLeft:`4px solid ${KS}`,borderRadius:6,padding:'20px 24px'}}>
                <h3 style={{fontSize:14,fontWeight:700,marginBottom:8,color:'#2e7d32'}}>🌍 Engagement Solidaire</h3>
                <p style={{fontSize:13,color:'#444',lineHeight:1.8,margin:0}}><strong style={{color:'#2e7d32'}}>10% des revenus nets</strong> de chaque série sont reversés à une association d&apos;éducation des enfants dans le monde. Sur 24 pièces à ~4 700 € moy., cela représente <strong>~11 280 €</strong> par série.</p>
              </div>
            </div>
          )}

          {/* ===== LES 24 PIÈCES ===== */}
          {tab==='pieces' && (
            <div>
              <h2 style={{fontSize:24,fontWeight:300,letterSpacing:'0.12em',fontFamily:'Georgia,serif',marginBottom:4}}>Choisissez Votre Numéro</h2>
              <p style={{fontSize:11,color:KS,letterSpacing:'0.15em',marginBottom:20,fontWeight:700}}>CHAQUE NUMÉRO = 1 POSITION HORAIRE = 1 CIVILISATION = 1 PIÈCE PAR VERSION</p>

              {/* NUMBER PICKER */}
              <div style={{background:'#fff',border:'1px solid #e8e8e8',borderRadius:10,padding:24,marginBottom:28}}>
                <p style={{fontSize:12,color:'#888',marginBottom:16,fontWeight:600}}>Sélectionnez votre numéro (I–XII) :</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:20}}>
                  {CIVS.map(c=>(
                    <button key={c.num} onClick={()=>setNum(c.num)} style={{width:52,height:52,borderRadius:8,border:`2px solid ${num===c.num?c.color:'#e0e0e0'}`,background:num===c.num?`${c.color}18`:'#fafafa',color:num===c.num?c.color:'#888',fontSize:13,fontWeight:700,cursor:'pointer',transition:'all 0.15s',fontFamily:'Georgia,serif'}}>
                      {c.roman}
                    </button>
                  ))}
                </div>
                {/* Version toggle */}
                <div style={{display:'flex',gap:8,marginBottom:0}}>
                  {(['steel','gold'] as const).map(v=>(
                    <button key={v} onClick={()=>setVer(v)} style={{flex:1,padding:'10px',borderRadius:6,border:`2px solid ${ver===v?(v==='gold'?GOLD:KS):'#e0e0e0'}`,background:ver===v?(v==='gold'?`${GOLD}12`:`${KS}10`):'#fafafa',color:ver===v?(v==='gold'?'#b8860b':'#047a4a'):'#888',fontWeight:700,fontSize:12,cursor:'pointer',letterSpacing:'0.06em'}}>
                      {v==='gold'?'✦ VERSION OR PVD — 4 900 €':'⚙ VERSION ACIER 316L — 4 500 €'}
                    </button>
                  ))}
                </div>
              </div>

              {/* CIVILIZATION CARD */}
              <div style={{background:civ.bg,border:`1px solid ${civ.color}30`,borderRadius:12,overflow:'hidden',marginBottom:24}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 180px',gap:0}}>
                  <div style={{padding:28}}>
                    {/* Header */}
                    <div style={{display:'flex',alignItems:'flex-start',gap:16,marginBottom:20}}>
                      <div style={{width:56,height:56,borderRadius:'50%',background:`${civ.color}20`,border:`2px solid ${civ.color}40`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                        <span style={{fontSize:22,color:civ.color,fontFamily:'Georgia,serif'}}>{civ.script}</span>
                      </div>
                      <div>
                        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:4}}>
                          <span style={{fontSize:22,fontWeight:700,color:civ.color,fontFamily:'Georgia,serif'}}>{civ.roman}</span>
                          <span style={{fontSize:12,color:civ.color,fontWeight:700,background:`${civ.color}15`,padding:'3px 10px',borderRadius:3,letterSpacing:'0.1em'}}>{ver==='gold'?'OR PVD':'ACIER 316L'}</span>
                        </div>
                        <div style={{fontSize:16,fontWeight:700,color:'#fff',marginBottom:2}}>{civ.name}</div>
                        <div style={{fontSize:12,color:'rgba(255,255,255,0.5)'}}>{civ.civ} · {civ.era}</div>
                        <div style={{fontSize:11,color:'rgba(255,255,255,0.35)',marginTop:2}}>{civ.region}</div>
                      </div>
                    </div>
                    {/* Story */}
                    <div style={{marginBottom:16}}>
                      <div style={{fontSize:10,color:civ.color,letterSpacing:'0.15em',fontWeight:700,marginBottom:6}}>HISTOIRE</div>
                      <p style={{fontSize:13,color:'rgba(255,255,255,0.8)',lineHeight:1.8,margin:0}}>{civ.story}</p>
                    </div>
                    <div style={{marginBottom:16}}>
                      <div style={{fontSize:10,color:civ.color,letterSpacing:'0.15em',fontWeight:700,marginBottom:6}}>CONTRIBUTION À L&apos;HUMANITÉ</div>
                      <p style={{fontSize:13,color:'rgba(255,255,255,0.7)',lineHeight:1.7,margin:0}}>{civ.contribution}</p>
                    </div>
                    <div style={{background:`${civ.color}10`,border:`1px solid ${civ.color}25`,borderRadius:6,padding:'12px 16px'}}>
                      <div style={{fontSize:10,color:civ.color,letterSpacing:'0.15em',fontWeight:700,marginBottom:5}}>POURQUOI SUR LE CADRAN ?</div>
                      <p style={{fontSize:13,color:civ.color,lineHeight:1.65,margin:0,fontStyle:'italic'}}>{civ.whyOnDial}</p>
                    </div>
                  </div>
                  {/* Mini dial */}
                  <div style={{background:`${civ.color}08`,borderLeft:`1px solid ${civ.color}20`,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:16,gap:10}}>
                    <div style={{width:140,height:140,borderRadius:'50%',border:`2px solid ${civ.color}40`}}>
                      <Dial civ={civ} version={ver}/>
                    </div>
                    <div style={{fontSize:10,color:'rgba(255,255,255,0.35)',textAlign:'center',letterSpacing:'0.1em',lineHeight:1.6}}>PIÈCE {civ.roman}<br/>{ver==='gold'?'OR PVD':'ACIER 316L'}</div>
                  </div>
                </div>
              </div>

              {/* AVAILABILITY GRID */}
              <h3 style={{fontSize:14,fontWeight:700,letterSpacing:'0.08em',marginBottom:14}}>Disponibilité — Toutes les 24 Pièces</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:10,marginBottom:24}}>
                {/* Gold */}
                <div style={{background:'linear-gradient(135deg,#1c1608,#0f0c04)',border:'1px solid rgba(212,175,55,0.2)',borderRadius:8,padding:16}}>
                  <div style={{fontSize:10,color:GOLD,letterSpacing:'0.15em',fontWeight:700,marginBottom:12}}>✦ VERSION OR PVD</div>
                  {CIVS.map(c=>{
                    const sold=[1,3,5].includes(c.num);
                    const sel=num===c.num&&ver==='gold';
                    return (
                      <div key={c.num} onClick={()=>{setNum(c.num);setVer('gold');}} style={{display:'flex',alignItems:'center',gap:8,padding:'6px 0',borderBottom:'1px solid rgba(212,175,55,0.06)',cursor:'pointer'}}>
                        <span style={{width:28,fontSize:9,fontWeight:700,color:sel?'#fff':GOLD,fontFamily:'Georgia,serif'}}>{c.roman}</span>
                        <span style={{width:20,fontSize:12,textAlign:'center'}}>{c.script==='XII'?'XII':c.script}</span>
                        <span style={{flex:1,fontSize:11,color:sold?'rgba(255,255,255,0.2)':'rgba(255,255,255,0.6)',textDecoration:sold?'line-through':''}}>{c.name}</span>
                        <span style={{fontSize:9,fontWeight:700,color:sold?'#c62828':KS,background:sold?'rgba(198,40,40,0.1)':'rgba(5,206,120,0.1)',padding:'2px 7px',borderRadius:3}}>{sold?'VENDU':'DISPO'}</span>
                      </div>
                    );
                  })}
                </div>
                {/* Steel */}
                <div style={{background:'#fff',border:'1px solid #e8e8e8',borderRadius:8,padding:16}}>
                  <div style={{fontSize:10,color:'#555',letterSpacing:'0.15em',fontWeight:700,marginBottom:12}}>⚙ VERSION ACIER 316L</div>
                  {CIVS.map(c=>{
                    const sold=[2,7].includes(c.num);
                    const sel=num===c.num&&ver==='steel';
                    return (
                      <div key={c.num} onClick={()=>{setNum(c.num);setVer('steel');}} style={{display:'flex',alignItems:'center',gap:8,padding:'6px 0',borderBottom:'1px solid #f5f5f5',cursor:'pointer'}}>
                        <span style={{width:28,fontSize:9,fontWeight:700,color:sel?'#111':'#333',fontFamily:'Georgia,serif'}}>{c.roman}</span>
                        <span style={{width:20,fontSize:12,textAlign:'center'}}>{c.script==='XII'?'XII':c.script}</span>
                        <span style={{flex:1,fontSize:11,color:sold?'#ccc':'#555',textDecoration:sold?'line-through':''}}>{c.name}</span>
                        <span style={{fontSize:9,fontWeight:700,color:sold?'#c62828':KS,background:sold?'rgba(198,40,40,0.08)':'rgba(5,206,120,0.08)',padding:'2px 7px',borderRadius:3}}>{sold?'VENDU':'DISPO'}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{background:'#fffbf0',border:'1px solid #ffe082',borderLeft:`4px solid ${GOLD}`,borderRadius:6,padding:'14px 18px'}}>
                <p style={{fontSize:12,color:'#555',lineHeight:1.7,margin:0}}><strong style={{color:'#b8860b'}}>⚠ Ultra-Limitation Absolue :</strong> Chaque numéro (I–XII) n&apos;existe qu&apos;en deux exemplaires dans le monde — un Or PVD, un Acier 316L. Une fois les 24 pièces vendues, cette configuration ne sera plus jamais produite.</p>
              </div>
            </div>
          )}

          {/* ===== SPECS ===== */}
          {tab==='specs' && (
            <div>
              <h2 style={{fontSize:24,fontWeight:300,letterSpacing:'0.12em',fontFamily:'Georgia,serif',marginBottom:4}}>Spécifications Techniques</h2>
              <p style={{fontSize:11,color:KS,letterSpacing:'0.15em',marginBottom:24,fontWeight:700}}>BABEL V1 — FICHE TECHNIQUE COMPLÈTE</p>
              <div style={{background:'#fff',border:'1px solid #e8e8e8',borderRadius:8,overflow:'hidden',marginBottom:28}}>
                {SPECS.map(([k,v],i)=>(
                  <div key={i} style={{display:'grid',gridTemplateColumns:'38% 1fr',padding:'12px 20px',borderBottom:i<SPECS.length-1?'1px solid #f0f0f0':'none',background:i%2===0?'#fff':'#fafafa'}}>
                    <span style={{fontSize:10,letterSpacing:'0.12em',color:'#999',textTransform:'uppercase'}}>{k}</span>
                    <span style={{fontSize:13,color:'#333'}}>{v}</span>
                  </div>
                ))}
              </div>
              <h3 style={{fontSize:15,fontWeight:700,marginBottom:14}}>Fournisseurs Clés</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:10,marginBottom:28}}>
                {[{i:'🇨🇭',n:'Sellita Watch Co. SA',r:'Mouvement Swiss Made',l:'La Chaux-de-Fonds'},{i:'🔵',n:'Combival SA',r:'Cadran haute précision',l:'La Chaux-de-Fonds'},{i:'⚙',n:'Boîtier CNC Acier 316L',r:'Boîtier & couronne',l:'Europe sélectionné'},{i:'💎',n:'Saphir AR coating',r:'Cristal double face',l:'9 Mohs · 100% durci'},{i:'✨',n:'PVD Or Champagne',r:'Traitement surface',l:'Prestataire certifié EU'},{i:'📦',n:'Écrin bois laqué',r:'Présentation premium',l:'Fabricant FR/CH dédié'}].map((s,i)=>(
                  <div key={i} style={{background:'#fff',border:'1px solid #e8e8e8',borderRadius:6,padding:'14px 16px',display:'flex',gap:12,alignItems:'flex-start'}}>
                    <span style={{fontSize:20}}>{s.i}</span>
                    <div><div style={{fontSize:12,fontWeight:700,marginBottom:2}}>{s.n}</div><div style={{fontSize:11,color:KS,fontWeight:600,marginBottom:2}}>{s.r}</div><div style={{fontSize:11,color:'#999'}}>{s.l}</div></div>
                  </div>
                ))}
              </div>
              <h3 style={{fontSize:15,fontWeight:700,marginBottom:14}}>Boîte de Présentation</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8}}>
                {['📦 Écrin bois laqué + velours anthracite','📖 Livret 12 pages — une par civilisation','📜 Certificat numéroté & signé fondateur','🔧 Outil changement bracelet inclus','📱 QR Code → expérience digitale ALMA','🎬 Accès making-of exclusif backers'].map((item,i)=>(
                  <div key={i} style={{background:'#fff',border:'1px solid #e8e8e8',borderRadius:6,padding:'14px 12px',textAlign:'center',fontSize:12,color:'#555',lineHeight:1.6}}>{item}</div>
                ))}
              </div>
            </div>
          )}

          {/* ===== TIMELINE ===== */}
          {tab==='timeline' && (
            <div>
              <h2 style={{fontSize:24,fontWeight:300,letterSpacing:'0.12em',fontFamily:'Georgia,serif',marginBottom:4}}>Calendrier</h2>
              <p style={{fontSize:11,color:KS,letterSpacing:'0.15em',marginBottom:28,fontWeight:700}}>ROADMAP 2026–2028</p>
              <div style={{position:'relative',paddingLeft:36}}>
                <div style={{position:'absolute',left:10,top:12,bottom:12,width:1,background:'#e8e8e8'}}/>
                {TIMELINE.map((t,i)=>(
                  <div key={i} style={{position:'relative',marginBottom:22}}>
                    <div style={{position:'absolute',left:-36,top:4,width:20,height:20,borderRadius:'50%',background:t.done?KS:t.cur?GOLD:'#e0e0e0',display:'flex',alignItems:'center',justifyContent:'center'}}>
                      {t.done&&<span style={{color:'#fff',fontSize:10,fontWeight:700}}>✓</span>}
                      {t.cur&&<span style={{background:'#fff',width:7,height:7,borderRadius:'50%',display:'block'}}/>}
                    </div>
                    <div style={{background:'#fff',border:`1px solid ${t.cur?GOLD:t.done?KS:'#e8e8e8'}`,borderRadius:6,padding:'14px 18px'}}>
                      <div style={{fontSize:10,color:t.done?KS:t.cur?'#b8860b':'#aaa',letterSpacing:'0.12em',fontWeight:700,marginBottom:4}}>{t.date}</div>
                      <div style={{fontSize:13,fontWeight:700,marginBottom:4}}>{t.title}</div>
                      <div style={{fontSize:12,color:'#666',lineHeight:1.6}}>{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== RISKS ===== */}
          {tab==='risks' && (
            <div>
              <h2 style={{fontSize:24,fontWeight:300,letterSpacing:'0.12em',fontFamily:'Georgia,serif',marginBottom:4}}>Risques & FAQ</h2>
              <p style={{fontSize:11,color:KS,letterSpacing:'0.15em',marginBottom:20,fontWeight:700}}>TRANSPARENCE TOTALE</p>
              <p style={{fontSize:13,color:'#555',lineHeight:1.8,marginBottom:24}}>Kickstarter encourage une communication honnête. Voici l&apos;analyse exhaustive des risques identifiés et les plans de contingence.</p>
              {RISKS.map((r,i)=>(
                <div key={i} style={{background:r.bg,border:`1px solid ${r.border}`,borderLeft:`5px solid ${r.border}`,borderRadius:6,padding:'16px 20px',marginBottom:12}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:6,gap:12}}>
                    <span style={{fontSize:13,fontWeight:700}}>{r.name}</span>
                    <span style={{background:r.bg,border:`1px solid ${r.border}`,color:r.color,fontSize:9,fontWeight:700,padding:'2px 9px',borderRadius:3,letterSpacing:'0.1em',flexShrink:0}}>{r.level}</span>
                  </div>
                  <p style={{fontSize:12,color:'#555',lineHeight:1.7,margin:0}}>{r.text}</p>
                </div>
              ))}
              <h3 style={{fontSize:15,fontWeight:700,marginTop:32,marginBottom:14}}>FAQ</h3>
              {[['Livraison estimée ?','Q3 2027. Mises à jour mensuelles garanties à tous les backers sans exception.'],['Swiss Made garanti ?','Le mouvement Sellita SW200 est certifié Swiss Made. La désignation finale dépend du lieu d\'assemblage — cible : atelier suisse certifié.'],['Pourquoi 24 pièces seulement ?','12 Or + 12 Acier = une pièce par civilisation par version. Chaque numéro n\'existe qu\'en 2 exemplaires dans le monde.'],['La version Or contient de l\'or réel ?','Non. Traitement PVD (Physical Vapor Deposition) — couleur or sans métal précieux. Halal-compatible selon plusieurs autorités islamiques.'],['Puis-je choisir mon numéro ?','Oui — vous indiquez votre numéro préféré (I–XII) et votre version (Or/Acier) lors de la réservation, sous réserve de disponibilité.'],].map(([q,a],i)=>(
                <div key={i} style={{borderBottom:'1px solid #e8e8e8',padding:'12px 0'}}>
                  <div style={{fontSize:13,fontWeight:700,marginBottom:5,color:'#222'}}>Q : {q}</div>
                  <div style={{fontSize:12,color:'#666',lineHeight:1.7}}>{a}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ===== SIDEBAR ===== */}
        <aside id="pledge" style={{paddingTop:32,position:'sticky',top:64}}>
          <div style={{fontSize:10,letterSpacing:'0.18em',color:'#999',fontWeight:700,marginBottom:14,paddingBottom:12,borderBottom:'1px solid #e8e8e8'}}>VOTRE SÉLECTION</div>

          {/* Selected piece display */}
          <div style={{background:ver==='gold'?'linear-gradient(135deg,#1c1608,#0f0c04)':'#fff',border:`2px solid ${ver==='gold'?`${GOLD}50`:KS}`,borderRadius:10,padding:18,marginBottom:14}}>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
              <div style={{width:44,height:44,borderRadius:'50%',background:ver==='gold'?`${GOLD}20`:`${KS}15`,border:`2px solid ${ver==='gold'?GOLD:KS}`,display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span style={{fontSize:16,color:ver==='gold'?GOLD:KS,fontFamily:'Georgia,serif',fontWeight:700}}>{civ.roman}</span>
              </div>
              <div>
                <div style={{fontSize:13,fontWeight:700,color:ver==='gold'?'#fff':'#222'}}>{civ.name} · {civ.civ}</div>
                <div style={{fontSize:11,color:ver==='gold'?'rgba(255,255,255,0.4)':'#aaa'}}>{civ.era} · {ver==='gold'?'Or PVD':'Acier 316L'}</div>
              </div>
            </div>
            <div style={{fontSize:22,fontWeight:800,color:ver==='gold'?GOLD:KS,marginBottom:4}}>{price.toLocaleString('fr-FR')} €</div>
            <div style={{fontSize:11,color:ver==='gold'?'rgba(255,255,255,0.4)':'#888',marginBottom:14}}>PIÈCE N° {civ.roman} · {ver==='gold'?'VERSION OR PVD':'VERSION ACIER 316L'} · 1/12</div>
            <ul style={{paddingLeft:0,marginBottom:14,listStyle:'none'}}>
              {['Mouvement Sellita SW200 · Swiss Made','Cristal saphir double face AR','Écrin bois laqué + velours','Livret 12 civilisations','Certificat numéroté & signé','Accès communauté backers'].map((item,j)=>(
                <li key={j} style={{fontSize:11,color:ver==='gold'?'rgba(255,255,255,0.7)':'#555',padding:'3px 0',paddingLeft:16,position:'relative'}}>
                  <span style={{position:'absolute',left:0,color:ver==='gold'?GOLD:KS,fontWeight:700}}>✓</span>{item}
                </li>
              ))}
            </ul>
            <button style={{width:'100%',background:ver==='gold'?GOLD:KS,color:'#000',fontWeight:700,fontSize:13,padding:12,borderRadius:5,border:'none',cursor:'pointer',letterSpacing:'0.06em'}}>
              {ver==='gold'?`✦ RÉSERVER — OR N° ${civ.roman}`:`⚙ RÉSERVER — ACIER N° ${civ.roman}`}
            </button>
            <p style={{fontSize:10,color:ver==='gold'?'rgba(255,255,255,0.3)':'#bbb',textAlign:'center',marginTop:8,lineHeight:1.5}}>Fonds collectés uniquement si l&apos;objectif est atteint. Remboursement garanti sinon.</p>
          </div>

          {/* Soutien */}
          <div style={{background:'#fff',border:'1px solid #e8e8e8',borderRadius:10,padding:16,marginBottom:20}}>
            <div style={{fontSize:18,fontWeight:800,color:'#333',marginBottom:3}}>30 €</div>
            <div style={{fontSize:12,fontWeight:700,color:'#222',marginBottom:8}}>Soutien · Communauté ALMA</div>
            <ul style={{paddingLeft:0,marginBottom:12,listStyle:'none'}}>
              {['Votre nom dans le livret ALMA','Newsletter Carnets ALMA','Photos making-of exclusives'].map((item,j)=>(
                <li key={j} style={{fontSize:11,color:'#555',padding:'2px 0',paddingLeft:16,position:'relative'}}><span style={{position:'absolute',left:0,color:KS,fontWeight:700}}>✓</span>{item}</li>
              ))}
            </ul>
            <button style={{width:'100%',background:'#222',color:'#fff',fontWeight:700,fontSize:12,padding:10,borderRadius:5,border:'none',cursor:'pointer'}}>SOUTENIR LE PROJET</button>
          </div>

          {/* Updates */}
          <div style={{paddingTop:16,borderTop:'1px solid #e8e8e8',marginBottom:16}}>
            <div style={{fontSize:10,letterSpacing:'0.18em',color:'#999',fontWeight:700,marginBottom:12}}>MISES À JOUR</div>
            {[{d:'12 JUIL. 2026',t:'🚀 Campagne lancée !',x:'183 backers. Early Bird épuisé en 48h.'},{d:'10 JUIL. 2026',t:'✅ Sellita SW200 confirmé',x:'Commande via Cousins UK — distributeur agréé.'},{d:'5 JUIL. 2026',t:'🎨 Design cadran finalisé',x:'12 scripts validés — lisibilité testée à 39 mm.'}].map((u,i)=>(
              <div key={i} style={{paddingBottom:12,marginBottom:12,borderBottom:'1px solid #f0f0f0'}}>
                <div style={{fontSize:9,color:KS,letterSpacing:'0.12em',fontWeight:700,marginBottom:3}}>{u.d}</div>
                <div style={{fontSize:12,fontWeight:700,marginBottom:3}}>{u.t}</div>
                <div style={{fontSize:11,color:'#666',lineHeight:1.5}}>{u.x}</div>
              </div>
            ))}
          </div>

          {/* Backers */}
          <div style={{paddingTop:14,borderTop:'1px solid #e8e8e8'}}>
            <div style={{fontSize:10,letterSpacing:'0.18em',color:'#999',fontWeight:700,marginBottom:12}}>DERNIERS BACKERS</div>
            {[{f:'🇫🇷',n:'Antoine M.',d:'Paris · Pièce VI (Acier)'},{f:'🇨🇭',n:'Youssef A.',d:'Genève · Pièce XII (Or)'},{f:'🇦🇪',n:'Khalid R.',d:'Dubaï · Pièce VIII (Or)'},{f:'🇧🇪',n:'Sophie L.',d:'Bruxelles · Soutien'}].map((b,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:10,paddingBottom:10,marginBottom:10,borderBottom:'1px solid #f5f5f5'}}>
                <span style={{fontSize:20}}>{b.f}</span>
                <div><div style={{fontSize:12,fontWeight:700}}>{b.n}</div><div style={{fontSize:10,color:'#999'}}>{b.d}</div></div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* FOOTER */}
      <footer style={{background:'#111',color:'#666',textAlign:'center',padding:'44px 24px',marginTop:56}}>
        <div style={{fontSize:22,letterSpacing:'0.45em',color:GOLD,marginBottom:6,fontFamily:'Georgia,serif'}}>ALMA</div>
        <div style={{fontSize:11,letterSpacing:'0.2em',marginBottom:6,color:'#555'}}>Le temps appartient à tout le monde.</div>
        <div style={{fontSize:10,color:'rgba(212,175,55,0.35)',letterSpacing:'0.14em',marginBottom:20}}>12 civilisations · 24 pièces · 1 montre</div>
        <div style={{display:'flex',justifyContent:'center',gap:24,flexWrap:'wrap',marginBottom:16}}>
          {[['Site','https://alma-watch.vercel.app'],['GitHub','https://github.com/ia2213/alma-watch'],['Instagram','#'],['Contact','#']].map(([l,h])=>(
            <a key={l} href={h} style={{color:'#555',fontSize:11,textDecoration:'none',letterSpacing:'0.08em'}}>{l}</a>
          ))}
        </div>
        <div style={{fontSize:10,color:'#333'}}>© 2026 ALMA Watch · SASU en cours de constitution · France · alma-watch.vercel.app</div>
      </footer>

      {/* LIGHTBOX */}
      {lbx && (
        <div onClick={()=>setLbx(null)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.94)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}>
          <img src={lbx} alt="" style={{maxWidth:'90vw',maxHeight:'90vh',borderRadius:6}}/>
          <div style={{position:'absolute',top:20,right:28,color:'#fff',fontSize:32,cursor:'pointer'}}>×</div>
        </div>
      )}

      <style>{`* { box-sizing: border-box; margin: 0; padding: 0; } body { margin: 0; }`}</style>
    </div>
  );
}
