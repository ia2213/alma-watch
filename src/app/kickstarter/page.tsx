'use client';
import { useState } from 'react';

// 24 ULTRA-LIMITED PIECES: 12 GOLD (PVD) + 12 STEEL
// Each number = hour position = civilization on the dial
const CIVILIZATIONS = [
  { num: 1,  roman: 'I',    script: '١',    name: 'Arabe',         civ: 'Civilisation Islamique',    era: '7e siècle',      gold: false, steel: false },
  { num: 2,  roman: 'II',   script: 'ב',    name: 'Hébreu',        civ: 'Civilisation Juive',        era: '10e siècle av.',  gold: false, steel: false },
  { num: 3,  roman: 'III',  script: '四',   name: 'Kanji',         civ: 'Civilisation Chinoise',     era: '2e siècle av.',   gold: false, steel: false },
  { num: 4,  roman: 'IV',   script: '𝋥',   name: 'Maya',          civ: 'Civilisation Maya',         era: '3e siècle',      gold: false, steel: false },
  { num: 5,  roman: 'V',    script: 'Η',    name: 'Grec',          civ: 'Grèce Antique',             era: '8e siècle av.',   gold: false, steel: false },
  { num: 6,  roman: 'VI',   script: '፯',   name: "Ge'ez",         civ: 'Éthiopie Ancienne',         era: '4e siècle',      gold: false, steel: false },
  { num: 7,  roman: 'VII',  script: '𒐕',   name: 'Cunéiforme',    civ: 'Sumer & Mésopotamie',       era: '3200 av. J.-C.', gold: false, steel: false },
  { num: 8,  roman: 'VIII', script: '𓂋',   name: 'Hiéroglyphe',   civ: 'Égypte Ancienne',           era: '3100 av. J.-C.', gold: false, steel: false },
  { num: 9,  roman: 'IX',   script: 'Д',    name: 'Cyrillique',    civ: 'Slaves & Orthodoxie',       era: '9e siècle',      gold: false, steel: false },
  { num: 10, roman: 'X',    script: 'क',    name: 'Devanāgarī',    civ: 'Inde Védique',               era: '1200 av. J.-C.', gold: false, steel: false },
  { num: 11, roman: 'XI',   script: '𓇳',   name: 'Phénicien',     civ: 'Phénicie & Carthage',       era: '1100 av. J.-C.', gold: false, steel: false },
  { num: 12, roman: 'XII',  script: 'XII',  name: 'Latin',         civ: 'Rome & Occident',           era: '7e siècle av.',   gold: false, steel: false },
];

const SPECS = [
  ['Mouvement',          'Sellita SW200-2 · Swiss Made certifié'],
  ['Réserve de marche',  '65 heures'],
  ['Fréquence',          '28 800 alt/h · 4 Hz'],
  ['Rubis',              '26 rubis'],
  ['Précision',          '−4 / +6 sec/jour'],
  ['Diamètre boîtier',   '39 mm'],
  ['Épaisseur',          '11,5 mm'],
  ['Entre-cornes',       '20 mm'],
  ['Matériau (Acier)',   'Acier inoxydable 316L · Grade chirurgical'],
  ['Matériau (Or)',      'Acier 316L + PVD or champagne · Aucun or massif'],
  ['Finitions',          'Satiné-brossé flancs · Poli miroir cornes'],
  ['Étanchéité',         '50 mètres (5 ATM)'],
  ['Cristal',            'Saphir double face AR coating · 9 Mohs'],
  ['Caseback',           'Saphir transparent · Mouvement visible'],
  ['Cadran',             'Laque blanc champagne · 12 systèmes d\'écriture uniques'],
  ['Index',              'Appliqués laiton · Super-LumiNova C3'],
  ['Aiguilles',          'Dauphine · Acier poli-satiné · LumiNova C3'],
  ['Bracelet',           'Cuir veau marron cognac (Acier) / Cuir ivoire (Or) · 20 mm'],
  ['Couronne',           'Vissée · Signée ALMA · Position 3h'],
  ['Tirage total',       '24 pièces : 12 version Or (I–XII) + 12 version Acier (I–XII)'],
  ['Numérotation',       'Numéro = position horaire = civilisation du cadran'],
  ['Halal-compatible',   'Aucune trace d\'or réel · PVD uniquement'],
];

const RISKS = [
  { level: 'ÉLEVÉ',  color: '#c62828', bg: '#fff5f5', border: '#e57373',
    name: 'Conflit de marque (ALMA Watches GmbH)',
    text: 'Conflit identifié avec ALMA Watches GmbH (Allemagne) et DeWitt ALMA. Dépôt du nom BABEL à l\'INPI/EUIPO en priorité. Budget : ~1 000 €. Plan B : BABEL comme nom commercial principal.'
  },
  { level: 'MOYEN',  color: '#e65100', bg: '#fff8f0', border: '#ffb74d',
    name: 'Délais de fabrication dépassés',
    text: 'Prototypage et assemblage peuvent prendre 12–18 mois au lieu de 6–9. Mises à jour mensuelles garanties pour tous les backers. Livraison annoncée Q3 2027.'
  },
  { level: 'MOYEN',  color: '#e65100', bg: '#fff8f0', border: '#ffb74d',
    name: 'Lisibilité du cadran (12 scripts sur 39 mm)',
    text: '12 systèmes d\'écriture sur 39 mm = risque de surcharge. 5 variantes testées. Vote communauté Instagram. Priorité absolue à la lisibilité sur l\'exhaustivité.'
  },
  { level: 'MOYEN',  color: '#e65100', bg: '#fff8f0', border: '#ffb74d',
    name: 'Qualité PVD or non conforme',
    text: 'Le traitement PVD or peut varier selon le prestataire. 3 échantillons testés avant validation. Garantie 2 ans sur le traitement de surface incluse.'
  },
  { level: 'FAIBLE', color: '#2e7d32', bg: '#f0faf4', border: '#81c784',
    name: 'Manque de liquidités',
    text: 'Kickstarter = financement par pré-acheteurs avant production. La campagne ne se déclenche QUE si l\'objectif est atteint. Zéro risque financier pour les backers.'
  },
];

const TIMELINE = [
  { date: 'COMPLÉTÉ · Juillet 2026', title: 'Lancement Kickstarter', desc: 'Campagne de financement participatif. Objectif : 42 000 € pour la Série 1.', done: true, current: false },
  { date: 'EN COURS · Août–Oct. 2026', title: 'Sourcing & commandes fournisseurs', desc: 'Commandes mouvements Sellita, prototypage boîtier (3 itérations), validation cadran + PVD or.', done: false, current: true },
  { date: 'Nov. 2026 – Fév. 2027', title: 'Assemblage & contrôle qualité', desc: 'Production des 24 pièces, tests étanchéité Witschi, timegrapher, photos individuelles, certificats.', done: false, current: false },
  { date: 'Mars–Avril 2027', title: 'Livraison Backers Kickstarter', desc: 'Expédition mondiale · Suivi individuel · Unboxing vidéo partagé.', done: false, current: false },
  { date: 'Juillet 2027', title: 'Série 2 · BABEL NUIT', desc: '24 pièces ardoise (12 or + 12 acier). Lancement DTC sur alma-watch.com.', done: false, current: false },
  { date: '2028', title: 'Série 3 · BABEL MÉTÉORITE & TITANE', desc: 'Éditions ultra-limitées. Partenariat institution culturelle (IMA, Louvre). Candidature GPHG.', done: false, current: false },
];

function WatchDial({ version = 'steel' }: { version?: 'steel' | 'gold' }) {
  const goldColor = version === 'gold' ? '#d4af37' : '#b8960c';
  const rimColor  = version === 'gold' ? '#d4af37' : 'rgba(184,150,12,0.4)';
  const bgGrad    = version === 'gold'
    ? 'radial-gradient(circle at 38% 32%, #2a1f08, #0f0c04)'
    : 'radial-gradient(circle at 38% 32%, #2a2010, #0c0b09)';
  const scripts = [
    { h: 0,  t: 'XII', s: 6   },
    { h: 1,  t: '١',  s: 7.5 },
    { h: 2,  t: 'ב',  s: 7   },
    { h: 3,  t: '四', s: 7   },
    { h: 4,  t: '𝋥', s: 7   },
    { h: 5,  t: 'Η',  s: 7.5 },
    { h: 6,  t: '፯', s: 7.5 },
    { h: 7,  t: '𒐕', s: 6   },
    { h: 8,  t: '𓂋', s: 7   },
    { h: 9,  t: 'IX', s: 6   },
    { h: 10, t: 'क',  s: 7   },
    { h: 11, t: '𓇳', s: 7   },
  ];
  return (
    <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
      <circle cx="100" cy="100" r="98" fill={bgGrad.includes('2a1f') ? '#0f0c04' : '#0c0b09'} stroke={rimColor} strokeWidth="2" />
      <circle cx="100" cy="100" r="80" fill="none" stroke={`rgba(${version==='gold'?'212,175,55':'184,150,12'},0.12)`} strokeWidth="0.5" />
      {Array.from({length:60}).map((_,i) => {
        const a=(i*6-90)*(Math.PI/180), r=i%5===0?72:74, sz=i%5===0?1.5:0.7;
        return <circle key={i} cx={100+r*Math.cos(a)} cy={100+r*Math.sin(a)} r={sz} fill={i%5===0?goldColor:`rgba(${version==='gold'?'212,175,55':'184,150,12'},0.3)`} />;
      })}
      {scripts.map(({h,t,s}) => {
        const a=(h*30-90)*(Math.PI/180), r=62;
        const isMain = h===0||h===3||h===6||h===9;
        return (
          <text key={h} x={100+r*Math.cos(a)} y={100+r*Math.sin(a)+s*0.36}
            textAnchor="middle" fontSize={s}
            fill={isMain ? goldColor : `rgba(${version==='gold'?'212,175,55':'212,175,55'},0.8)`}
            fontFamily="Georgia,serif">{t}</text>
        );
      })}
      <text x="100" y="90" textAnchor="middle" fontSize="9" fill={goldColor} fontFamily="Georgia,serif" letterSpacing="4">ALMA</text>
      <text x="100" y="101" textAnchor="middle" fontSize="4" fill={`rgba(${version==='gold'?'212,175,55':'212,175,55'},0.6)`} fontFamily="Georgia,serif" letterSpacing="3">BABEL</text>
      <text x="100" y="113" textAnchor="middle" fontSize="3.5" fill={`rgba(${version==='gold'?'212,175,55':'212,175,55'},0.35)`} fontFamily="Georgia,serif" letterSpacing="2">SWISS MADE</text>
      <line x1="100" y1="100" x2="88" y2="56" stroke={goldColor} strokeWidth="3" strokeLinecap="round"/>
      <line x1="100" y1="100" x2="128" y2="70" stroke="#e8e2d6" strokeWidth="2" strokeLinecap="round"/>
      <line x1="100" y1="100" x2="76" y2="132" stroke="#e05050" strokeWidth="1" strokeLinecap="round"/>
      <circle cx="100" cy="100" r="4" fill={goldColor}/>
      <circle cx="100" cy="100" r="2" fill="#fff"/>
    </svg>
  );
}

const TABS = [
  {id:'story',    label:'HISTOIRE'},
  {id:'concept',  label:'LES 24 PIÈCES'},
  {id:'specs',    label:'SPECS'},
  {id:'timeline', label:'CALENDRIER'},
  {id:'risks',    label:'RISQUES & FAQ'},
];

export default function KickstarterPage() {
  const [tab, setTab]       = useState('story');
  const [lightbox, setLightbox] = useState<string|null>(null);
  const [dialVer, setDialVer]   = useState<'steel'|'gold'>('steel');

  const funded = 28150, goal = 42000, pct = Math.round(funded/goal*100);

  const KS_GREEN = '#05ce78';
  const DARK_BG  = '#f7f7f7';

  return (
    <div style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",background:DARK_BG,minHeight:'100vh',color:'#222'}}>

      {/* ── KS TOP BAR ── */}
      <div style={{background:KS_GREEN,padding:'9px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',fontWeight:700,fontSize:13}}>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <svg width="20" height="20" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="16" fill={KS_GREEN}/>
            <path d="M10 8v16M10 16l5-8 7 8-7 8-5-8z" stroke="#000" strokeWidth="2.5" strokeLinejoin="round"/>
          </svg>
          <span style={{fontSize:15,letterSpacing:'0.03em'}}>Kickstarter</span>
        </div>
        <span style={{fontSize:12}}>Campagne en cours · <strong>14 jours restants</strong></span>
        <a href="#pledge" style={{background:'#000',color:KS_GREEN,padding:'6px 16px',borderRadius:4,textDecoration:'none',fontSize:12,fontWeight:700}}>Soutenir ce projet →</a>
      </div>

      {/* ── KS NAV ── */}
      <nav style={{background:'#fff',borderBottom:'1px solid #e0e0e0',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'sticky',top:0,zIndex:100,boxShadow:'0 1px 4px rgba(0,0,0,0.06)'}}>
        <div style={{display:'flex',alignItems:'center',gap:24}}>
          <span style={{padding:'16px 0',fontWeight:700,fontSize:15,letterSpacing:'0.1em'}}>ALMA WATCH · BABEL</span>
          {['Campagne','Mises à jour (3)','Commentaires (47)','Communauté'].map(l=>(
            <a key={l} href="#" style={{color:l==='Campagne'?'#222':'#888',fontSize:13,textDecoration:'none',padding:'20px 4px',borderBottom:l==='Campagne'?`2px solid ${KS_GREEN}`:'2px solid transparent',fontWeight:l==='Campagne'?700:400,whiteSpace:'nowrap'}}>{l}</a>
          ))}
        </div>
        <a href="#pledge" style={{background:KS_GREEN,color:'#000',fontWeight:700,fontSize:13,padding:'10px 24px',borderRadius:4,textDecoration:'none',letterSpacing:'0.04em'}}>Soutenir ce projet</a>
      </nav>

      {/* ── HERO ── */}
      <div style={{background:'linear-gradient(135deg,#0f0e0a 0%,#1c1608 55%,#0c0b06 100%)',padding:'70px 32px 60px'}}>
        <div style={{maxWidth:1140,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 420px',gap:70,alignItems:'center'}}>
          <div>
            <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(5,206,120,0.1)',border:'1px solid rgba(5,206,120,0.3)',borderRadius:20,padding:'5px 14px',marginBottom:22}}>
              <span style={{width:7,height:7,borderRadius:'50%',background:KS_GREEN,display:'inline-block'}}/>
              <span style={{color:KS_GREEN,fontSize:11,letterSpacing:'0.15em',fontWeight:700}}>KICKSTARTER — CAMPAGNE EN DIRECT</span>
            </div>
            <h1 style={{fontSize:'clamp(3.2rem,6vw,5.2rem)',fontWeight:200,letterSpacing:'0.18em',color:'#d4af37',lineHeight:1.05,marginBottom:10,fontFamily:'Georgia,serif'}}>ALMA<br/>BABEL</h1>
            <p style={{fontSize:17,color:'#ccc',fontWeight:300,letterSpacing:'0.1em',marginBottom:18}}>12 Civilisations. 24 Pièces Ultra-Limitées. 1 Montre.</p>
            <p style={{fontSize:14,color:'#999',lineHeight:1.9,maxWidth:480,marginBottom:16}}>
              La première montre mécanique suisse portant les 12 systèmes d&apos;écriture des plus grandes civilisations de l&apos;humanité.
              <strong style={{color:'#d4af37'}}> 12 versions Or (PVD) + 12 versions Acier</strong> — chaque pièce numérotée correspond
              exactement à la position horaire et à la civilisation gravée sur son cadran.
            </p>
            <p style={{fontSize:13,color:'rgba(212,175,55,0.7)',fontStyle:'italic',marginBottom:28}}>« Ton cadran existait avant la Terre. » — ALMA, Juillet 2026</p>
            <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:28}}>
              <a href="#pledge" style={{background:KS_GREEN,color:'#000',fontWeight:700,fontSize:14,padding:'14px 30px',borderRadius:4,textDecoration:'none',letterSpacing:'0.05em'}}>Réserver ma pièce</a>
              <button onClick={()=>setTab('concept')} style={{background:'transparent',color:'#d4af37',fontWeight:400,fontSize:14,padding:'13px 30px',borderRadius:4,border:'1px solid #d4af37',cursor:'pointer'}}>Voir les 24 pièces</button>
            </div>
            <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
              {['🇨🇭 SWISS MADE','⌚ SELLITA SW200','💎 SAPHIR AR','🔒 HALAL-COMPATIBLE','✍️ 12 CIVILISATIONS'].map(b=>(
                <span key={b} style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:20,padding:'5px 12px',fontSize:10,color:'#888',letterSpacing:'0.1em'}}>{b}</span>
              ))}
            </div>
          </div>

          {/* DIAL TOGGLE */}
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:20}}>
            <div style={{display:'flex',gap:0,background:'rgba(255,255,255,0.06)',borderRadius:6,overflow:'hidden',border:'1px solid rgba(255,255,255,0.1)'}}>
              {(['steel','gold'] as const).map(v=>(
                <button key={v} onClick={()=>setDialVer(v)} style={{padding:'8px 22px',background:dialVer===v?(v==='gold'?'#d4af37':'rgba(255,255,255,0.12)'):'transparent',color:dialVer===v?(v==='gold'?'#000':'#fff'):'#888',border:'none',cursor:'pointer',fontSize:12,fontWeight:700,letterSpacing:'0.1em',transition:'all 0.2s'}}>
                  {v==='steel'?'⚙ ACIER':'✦ OR PVD'}
                </button>
              ))}
            </div>
            <div style={{width:320,height:320,borderRadius:'50%',background:dialVer==='gold'?'radial-gradient(circle at 38% 32%,#2a1f08,#0f0c04)':'radial-gradient(circle at 38% 32%,#2a2010,#0c0b09)',border:`2.5px solid ${dialVer==='gold'?'rgba(212,175,55,0.6)':'rgba(184,150,12,0.35)'}`,boxShadow:dialVer==='gold'?'0 0 80px rgba(212,175,55,0.15),inset 0 0 40px rgba(0,0,0,0.6)':'0 0 60px rgba(184,150,12,0.08),inset 0 0 40px rgba(0,0,0,0.6)',transition:'all 0.4s'}}>
              <WatchDial version={dialVer}/>
            </div>
            <p style={{color:'#666',fontSize:11,letterSpacing:'0.18em',textAlign:'center'}}>
              BABEL {dialVer==='gold'?'OR PVD':'ACIER 316L'} · SÉRIE FONDATEURS<br/>
              <span style={{color:dialVer==='gold'?'#d4af37':'#888',fontWeight:700}}>12 PIÈCES · NUMÉROTÉES I–XII</span>
            </p>
          </div>
        </div>
      </div>

      {/* ── FUNDING BAR ── */}
      <div style={{background:'#fff',borderBottom:'2px solid #f0f0f0',padding:'28px 32px'}}>
        <div style={{maxWidth:1140,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr auto',gap:48,alignItems:'center'}}>
          <div>
            <div style={{display:'flex',gap:48,marginBottom:16,flexWrap:'wrap'}}>
              <div>
                <div style={{fontSize:32,fontWeight:800,color:KS_GREEN}}>{funded.toLocaleString('fr-FR')} €</div>
                <div style={{fontSize:12,color:'#888',letterSpacing:'0.1em',marginTop:2}}>SUR {goal.toLocaleString('fr-FR')} € OBJECTIF</div>
              </div>
              <div>
                <div style={{fontSize:32,fontWeight:800}}>183</div>
                <div style={{fontSize:12,color:'#888',letterSpacing:'0.1em',marginTop:2}}>CONTRIBUTEURS</div>
              </div>
              <div>
                <div style={{fontSize:32,fontWeight:800}}>{pct}%</div>
                <div style={{fontSize:12,color:'#888',letterSpacing:'0.1em',marginTop:2}}>FINANCÉ</div>
              </div>
            </div>
            <div style={{height:7,background:'#f0f0f0',borderRadius:4,overflow:'hidden'}}>
              <div style={{height:'100%',width:`${pct}%`,background:`linear-gradient(90deg,${KS_GREEN},#04b368)`,borderRadius:4,transition:'width 1.5s'}}/>
            </div>
          </div>
          <div style={{textAlign:'right'}}>
            <div style={{fontSize:52,fontWeight:800,lineHeight:1}}>14</div>
            <div style={{fontSize:12,color:'#888',letterSpacing:'0.15em'}}>JOURS RESTANTS</div>
            <div style={{marginTop:10,display:'inline-block',background:'rgba(5,206,120,0.08)',border:`1px solid ${KS_GREEN}`,color:KS_GREEN,fontSize:11,padding:'4px 14px',borderRadius:3,letterSpacing:'0.1em',fontWeight:700}}>● APPROUVÉ KICKSTARTER</div>
          </div>
        </div>
      </div>

      {/* ── MAIN 2-COL ── */}
      <div style={{maxWidth:1140,margin:'0 auto',padding:'0 32px',display:'grid',gridTemplateColumns:'1fr 360px',gap:48,alignItems:'start'}}>

        {/* ── LEFT ── */}
        <div style={{paddingTop:36}}>

          {/* Tabs */}
          <div style={{display:'flex',borderBottom:'2px solid #e8e8e8',marginBottom:40,gap:0,overflowX:'auto'}}>
            {TABS.map(t=>(
              <button key={t.id} onClick={()=>setTab(t.id)} style={{background:'none',border:'none',cursor:'pointer',padding:'13px 20px',fontSize:12,fontWeight:700,letterSpacing:'0.1em',color:tab===t.id?'#222':'#aaa',borderBottom:tab===t.id?`2px solid ${KS_GREEN}`:'2px solid transparent',marginBottom:-2,transition:'all 0.2s',whiteSpace:'nowrap'}}>
                {t.label}
              </button>
            ))}
          </div>

          {/* ════ STORY ════ */}
          {tab==='story' && (
            <div>
              {/* Video hero */}
              <div style={{width:'100%',aspectRatio:'16/9',background:'#111',borderRadius:8,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:14,marginBottom:36,cursor:'pointer',overflow:'hidden',position:'relative'}}>
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=70" alt="Watch" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:0.3}}/>
                <div style={{position:'relative',zIndex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:14}}>
                  <div style={{width:72,height:72,borderRadius:'50%',background:'rgba(255,255,255,0.12)',border:'2px solid rgba(255,255,255,0.5)',display:'flex',alignItems:'center',justifyContent:'center',backdropFilter:'blur(4px)'}}>
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="white"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <p style={{color:'#fff',fontSize:13,letterSpacing:'0.12em',fontWeight:700,textAlign:'center'}}>ALMA WATCH — MAKING-OF & VISION DU FONDATEUR (2:47)</p>
                  <p style={{color:'rgba(255,255,255,0.45)',fontSize:11}}>Cliquez pour regarder</p>
                </div>
              </div>

              <h2 style={{fontSize:26,fontWeight:300,letterSpacing:'0.12em',color:'#111',marginBottom:6,fontFamily:'Georgia,serif'}}>L&apos;Art du Temps Universel</h2>
              <p style={{fontSize:12,color:KS_GREEN,letterSpacing:'0.15em',marginBottom:22,fontWeight:700}}>LA NAISSANCE D&apos;ALMA · JUILLET 2026</p>
              <p style={{fontSize:15,color:'#444',lineHeight:1.9,marginBottom:16}}>ALMA vient de l&apos;araméen et signifie <em>l&apos;éternité</em> ou <em>le monde</em>. Ce nom court, prononçable dans toutes les langues, synthétise l&apos;essence du projet : une montre qui n&apos;appartient pas à une culture, mais à <strong>toutes</strong>. Retenu après comparaison de 20 noms — MERIDIEM, AION, KRONN, NEXUM — ALMA s&apos;est imposé par son universalité.</p>
              <p style={{fontSize:15,color:'#444',lineHeight:1.9,marginBottom:32}}>Le modèle <strong>BABEL</strong> porte les 12 grands systèmes d&apos;écriture sur un seul cadran de 39 mm. Chaque position horaire est un système. Chaque système est une civilisation. Chaque civilisation est un numéro de pièce. <strong style={{color:'#d4af37'}}>24 pièces : 12 Or (PVD) + 12 Acier 316L.</strong></p>

              {/* Gallery */}
              <h3 style={{fontSize:17,fontWeight:700,letterSpacing:'0.06em',marginBottom:16,color:'#111'}}>Galerie</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,marginBottom:36}}>
                {[
                  {url:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',cap:'CADRAN · Vue principale'},
                  {url:'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80',cap:'MOUVEMENT · Sellita SW200'},
                  {url:'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80',cap:'BRACELET · Cuir Cognac'},
                  {url:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',cap:'ÉCRIN · Bois Laqué'},
                  {url:'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&q=80',cap:'AU POIGNET · 39 mm'},
                  {url:'https://images.unsplash.com/photo-1548171916-c8fd5d130bba?w=800&q=80',cap:'MACRO · Mécanisme'},
                ].map((img,i)=>(
                  <div key={i} onClick={()=>setLightbox(img.url)} style={{cursor:'pointer',borderRadius:6,overflow:'hidden',aspectRatio:'1',position:'relative',background:'#111',transition:'transform 0.2s'}}>
                    <img src={img.url} alt={img.cap} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    <div style={{position:'absolute',bottom:0,left:0,right:0,background:'linear-gradient(transparent,rgba(0,0,0,0.82))',padding:'24px 10px 8px',fontSize:10,color:'#fff',letterSpacing:'0.12em',fontWeight:600}}>{img.cap}</div>
                  </div>
                ))}
              </div>

              {/* Video 2 */}
              <div style={{width:'100%',aspectRatio:'16/9',background:'#111',borderRadius:8,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:14,marginBottom:36,cursor:'pointer',overflow:'hidden',position:'relative'}}>
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&q=60" alt="Civilizations" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:0.25}}/>
                <div style={{position:'relative',zIndex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:14}}>
                  <div style={{width:72,height:72,borderRadius:'50%',background:'rgba(212,175,55,0.15)',border:'2px solid #d4af37',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="#d4af37"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <p style={{color:'#d4af37',fontSize:13,letterSpacing:'0.12em',fontWeight:700}}>LES 12 CIVILISATIONS D&apos;ALMA — DOCUMENTAIRE (5:20)</p>
                </div>
              </div>

              {/* Solidarity */}
              <div style={{background:'#f0faf4',border:'1px solid #b2dfdb',borderLeft:'4px solid '+KS_GREEN,borderRadius:6,padding:'24px 28px'}}>
                <h3 style={{fontSize:15,fontWeight:700,letterSpacing:'0.06em',marginBottom:10,color:'#2e7d32'}}>🌍 Engagement Solidaire</h3>
                <p style={{fontSize:14,color:'#444',lineHeight:1.8,margin:0}}>
                  Acheter une montre ALMA, c&apos;est aussi construire un avenir.
                  <strong style={{color:'#2e7d32'}}> 10% des revenus nets</strong> de chaque série sont reversés à une
                  association d&apos;éducation des enfants dans le monde entier. Sur 24 pièces vendues à 4 500 €,
                  cela représente <strong>~10 800 €</strong> reversés par série.
                </p>
              </div>
            </div>
          )}

          {/* ════ LES 24 PIÈCES ════ */}
          {tab==='concept' && (
            <div>
              <h2 style={{fontSize:26,fontWeight:300,letterSpacing:'0.12em',fontFamily:'Georgia,serif',marginBottom:6}}>Les 24 Pièces Ultra-Limitées</h2>
              <p style={{fontSize:12,color:KS_GREEN,letterSpacing:'0.15em',marginBottom:10,fontWeight:700}}>PRINCIPE FONDAMENTAL D&apos;ALMA BABEL</p>
              <div style={{background:'#fff',border:'1px solid #e8e8e8',borderRadius:8,padding:'20px 24px',marginBottom:32}}>
                <p style={{fontSize:15,color:'#333',lineHeight:1.85,margin:0}}>
                  Chaque pièce est identifiée par un <strong>numéro romain</strong> (I à XII).
                  Ce numéro correspond simultanément à :<br/>
                  <strong style={{color:'#d4af37'}}>① La position horaire sur le cadran</strong> —
                  <strong style={{color:KS_GREEN}}> ② La civilisation dont le script est gravé</strong> —
                  <strong style={{color:'#555'}}> ③ Le numéro de série de la pièce physique.</strong><br/><br/>
                  Exemple : la pièce <strong>N° III (Or)</strong> porte le Kanji chinois à la position 3h.
                  Elle est la seule et unique pièce dorée portant ce numéro. Idem pour la version Acier N° III.
                </p>
              </div>

              <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:24,marginBottom:32}}>
                {/* GOLD SERIES */}
                <div style={{background:'linear-gradient(135deg,#1c1608,#0f0c04)',border:'2px solid rgba(212,175,55,0.4)',borderRadius:10,padding:24}}>
                  <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
                    <div style={{width:40,height:40,borderRadius:'50%',background:'#d4af37',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>✦</div>
                    <div>
                      <div style={{color:'#d4af37',fontWeight:700,fontSize:14,letterSpacing:'0.1em'}}>VERSION OR PVD</div>
                      <div style={{color:'rgba(212,175,55,0.5)',fontSize:11,letterSpacing:'0.1em'}}>12 PIÈCES · NUMÉROTÉES I–XII</div>
                    </div>
                  </div>
                  {CIVILIZATIONS.map(c=>(
                    <div key={c.num} style={{display:'flex',alignItems:'center',gap:14,padding:'10px 0',borderBottom:'1px solid rgba(212,175,55,0.08)'}}>
                      <div style={{width:36,height:36,borderRadius:'50%',background:'rgba(212,175,55,0.12)',border:'1px solid rgba(212,175,55,0.3)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                        <span style={{fontSize:c.num===12?9:14,color:'#d4af37',fontFamily:'Georgia,serif'}}>{c.script}</span>
                      </div>
                      <div style={{flex:1}}>
                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                          <span style={{fontSize:12,color:'#d4af37',fontWeight:700,letterSpacing:'0.1em'}}>{c.roman}</span>
                          <span style={{fontSize:10,color:'rgba(212,175,55,0.5)',fontWeight:700,background:'rgba(212,175,55,0.08)',padding:'2px 8px',borderRadius:2}}>OR PVD</span>
                        </div>
                        <div style={{fontSize:12,color:'#ccc',fontWeight:600}}>{c.name} · {c.civ}</div>
                        <div style={{fontSize:10,color:'rgba(255,255,255,0.3)'}}>{c.era}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* STEEL SERIES */}
                <div style={{background:'#fff',border:'1px solid #e8e8e8',borderRadius:10,padding:24}}>
                  <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
                    <div style={{width:40,height:40,borderRadius:'50%',background:'#888',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,color:'#fff'}}>⚙</div>
                    <div>
                      <div style={{color:'#333',fontWeight:700,fontSize:14,letterSpacing:'0.1em'}}>VERSION ACIER 316L</div>
                      <div style={{color:'#999',fontSize:11,letterSpacing:'0.1em'}}>12 PIÈCES · NUMÉROTÉES I–XII</div>
                    </div>
                  </div>
                  {CIVILIZATIONS.map(c=>(
                    <div key={c.num} style={{display:'flex',alignItems:'center',gap:14,padding:'10px 0',borderBottom:'1px solid #f5f5f5'}}>
                      <div style={{width:36,height:36,borderRadius:'50%',background:'#f5f5f5',border:'1px solid #e0e0e0',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                        <span style={{fontSize:c.num===12?9:14,color:'#555',fontFamily:'Georgia,serif'}}>{c.script}</span>
                      </div>
                      <div style={{flex:1}}>
                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                          <span style={{fontSize:12,color:'#333',fontWeight:700,letterSpacing:'0.1em'}}>{c.roman}</span>
                          <span style={{fontSize:10,color:'#888',fontWeight:700,background:'#f0f0f0',padding:'2px 8px',borderRadius:2}}>ACIER</span>
                        </div>
                        <div style={{fontSize:12,color:'#333',fontWeight:600}}>{c.name} · {c.civ}</div>
                        <div style={{fontSize:10,color:'#bbb'}}>{c.era}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{background:'#fffbf0',border:'1px solid #ffe082',borderLeft:'4px solid #d4af37',borderRadius:6,padding:'18px 22px'}}>
                <p style={{fontSize:13,color:'#555',lineHeight:1.75,margin:0}}>
                  <strong style={{color:'#b8860b'}}>⚠ Ultra-Limitation Absolue :</strong> Chaque numéro (I–XII) n&apos;existe qu&apos;en deux exemplaires dans le monde — un Or PVD, un Acier 316L. Une fois les 24 pièces vendues, cette configuration de cadran ne sera plus jamais produite.
                </p>
              </div>
            </div>
          )}

          {/* ════ SPECS ════ */}
          {tab==='specs' && (
            <div>
              <h2 style={{fontSize:26,fontWeight:300,letterSpacing:'0.12em',fontFamily:'Georgia,serif',marginBottom:6}}>Spécifications Techniques</h2>
              <p style={{fontSize:12,color:KS_GREEN,letterSpacing:'0.15em',marginBottom:24,fontWeight:700}}>BABEL V1 — FICHE TECHNIQUE COMPLÈTE</p>
              <div style={{background:'#fff',border:'1px solid #e8e8e8',borderRadius:8,overflow:'hidden',marginBottom:32}}>
                {SPECS.map(([k,v],i)=>(
                  <div key={i} style={{display:'grid',gridTemplateColumns:'38% 1fr',padding:'13px 22px',borderBottom:i<SPECS.length-1?'1px solid #f0f0f0':'none',background:i%2===0?'#fff':'#fafafa'}}>
                    <span style={{fontSize:11,letterSpacing:'0.12em',color:'#999',textTransform:'uppercase',paddingTop:1}}>{k}</span>
                    <span style={{fontSize:14,color:'#333',lineHeight:1.5}}>{v}</span>
                  </div>
                ))}
              </div>
              <h3 style={{fontSize:17,fontWeight:700,letterSpacing:'0.06em',marginBottom:16}}>Fournisseurs Clés</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:10,marginBottom:32}}>
                {[
                  {icon:'🇨🇭',name:'Sellita Watch Co. SA',role:'Mouvement Swiss Made',loc:'La Chaux-de-Fonds'},
                  {icon:'🔵',name:'Combival SA',role:'Cadran haute précision',loc:'La Chaux-de-Fonds'},
                  {icon:'⚙',name:'Acier 316L CNC',role:'Boîtier & couronne',loc:'Europe / Asie sélectionné'},
                  {icon:'💎',name:'Saphir AR coating',role:'Cristal double face',loc:'9 Mohs · Durcissement 100%'},
                  {icon:'✨',name:'PVD Or Champagne',role:'Traitement surface',loc:'Prestataire certifié EU'},
                  {icon:'📦',name:'Bois laqué + velours',role:'Écrin de présentation',loc:'Fabricant dédié FR/CH'},
                ].map((s,i)=>(
                  <div key={i} style={{background:'#fff',border:'1px solid #e8e8e8',borderRadius:6,padding:'16px 18px',display:'flex',gap:14,alignItems:'flex-start'}}>
                    <span style={{fontSize:22,flexShrink:0}}>{s.icon}</span>
                    <div>
                      <div style={{fontSize:13,fontWeight:700,marginBottom:3}}>{s.name}</div>
                      <div style={{fontSize:12,color:KS_GREEN,fontWeight:600,marginBottom:2}}>{s.role}</div>
                      <div style={{fontSize:11,color:'#999'}}>{s.loc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <h3 style={{fontSize:17,fontWeight:700,letterSpacing:'0.06em',marginBottom:16}}>Boîte de Présentation</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10}}>
                {['📦 Écrin bois laqué + velours anthracite','📖 Livret 12 pages — une par civilisation','📜 Certificat numéroté & signé fondateur','🔧 Outil changement bracelet inclus','📱 QR Code → expérience digitale ALMA','🎬 Accès making-of exclusif backers'].map((item,i)=>(
                  <div key={i} style={{background:'#fff',border:'1px solid #e8e8e8',borderRadius:6,padding:'16px 14px',textAlign:'center',fontSize:12,color:'#555',lineHeight:1.6}}>{item}</div>
                ))}
              </div>
            </div>
          )}

          {/* ════ TIMELINE ════ */}
          {tab==='timeline' && (
            <div>
              <h2 style={{fontSize:26,fontWeight:300,letterSpacing:'0.12em',fontFamily:'Georgia,serif',marginBottom:6}}>Calendrier</h2>
              <p style={{fontSize:12,color:KS_GREEN,letterSpacing:'0.15em',marginBottom:32,fontWeight:700}}>ROADMAP 2026–2028</p>
              <div style={{position:'relative',paddingLeft:40}}>
                <div style={{position:'absolute',left:11,top:12,bottom:12,width:1,background:'#e8e8e8'}}/>
                {TIMELINE.map((t,i)=>(
                  <div key={i} style={{position:'relative',marginBottom:28,paddingBottom:i<TIMELINE.length-1?0:0}}>
                    <div style={{position:'absolute',left:-40,top:4,width:22,height:22,borderRadius:'50%',background:t.done?KS_GREEN:t.current?'#d4af37':'#e0e0e0',border:`3px solid ${t.done?KS_GREEN:t.current?'#d4af37':'#e0e0e0'}`,display:'flex',alignItems:'center',justifyContent:'center'}}>
                      {t.done && <span style={{color:'#fff',fontSize:11,fontWeight:700}}>✓</span>}
                      {t.current && <span style={{background:'#fff',width:8,height:8,borderRadius:'50%',display:'block'}}/> }
                    </div>
                    <div style={{background:'#fff',border:`1px solid ${t.current?'#d4af37':t.done?KS_GREEN:'#e8e8e8'}`,borderRadius:6,padding:'16px 20px'}}>
                      <div style={{fontSize:11,color:t.done?KS_GREEN:t.current?'#b8860b':'#aaa',letterSpacing:'0.12em',fontWeight:700,marginBottom:5}}>{t.date}</div>
                      <div style={{fontSize:14,fontWeight:700,marginBottom:6}}>{t.title}</div>
                      <div style={{fontSize:13,color:'#666',lineHeight:1.65}}>{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ════ RISKS ════ */}
          {tab==='risks' && (
            <div>
              <h2 style={{fontSize:26,fontWeight:300,letterSpacing:'0.12em',fontFamily:'Georgia,serif',marginBottom:6}}>Risques & Contingences</h2>
              <p style={{fontSize:12,color:KS_GREEN,letterSpacing:'0.15em',marginBottom:20,fontWeight:700}}>TRANSPARENCE TOTALE — ANALYSE COMPLÈTE</p>
              <p style={{fontSize:14,color:'#555',lineHeight:1.8,marginBottom:28}}>Kickstarter encourage une communication honnête sur les risques. Voici une analyse exhaustive des risques identifiés et des plans de contingence.</p>
              {RISKS.map((r,i)=>(
                <div key={i} style={{background:r.bg,border:`1px solid ${r.border}`,borderLeft:`5px solid ${r.border}`,borderRadius:6,padding:'18px 22px',marginBottom:14}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:8,gap:12}}>
                    <span style={{fontSize:14,fontWeight:700,lineHeight:1.4}}>{r.name}</span>
                    <span style={{background:r.bg,border:`1px solid ${r.border}`,color:r.color,fontSize:10,fontWeight:700,padding:'3px 10px',borderRadius:3,letterSpacing:'0.1em',flexShrink:0}}>{r.level}</span>
                  </div>
                  <p style={{fontSize:13,color:'#555',lineHeight:1.7,margin:0}}>{r.text}</p>
                </div>
              ))}
              <h3 style={{fontSize:17,fontWeight:700,marginTop:36,marginBottom:16}}>FAQ</h3>
              {[
                ['Livraison estimée ?','Livraison prévue Q3 2027. Mises à jour mensuelles garanties à tous les backers.'],
                ['Swiss Made garanti ?','Le mouvement Sellita SW200 est certifié Swiss Made. La désignation finale dépend du lieu d\'assemblage final — cible : atelier suisse certifié.'],
                ['Pourquoi 24 pièces seulement ?','12 Or (PVD) + 12 Acier = une pièce par civilisation par version. L\'ultra-limitation garantit l\'exclusivité absolue : chaque numéro n\'existe qu\'en deux exemplaires dans le monde.'],
                ['La version Or contient de l\'or réel ?','Non. Le traitement PVD (Physical Vapor Deposition) donne la couleur or sans or massif — ce qui rend ALMA Halal-compatible selon certains experts islamiques (à valider individuellement).'],
                ['Puis-je choisir mon numéro ?','Oui — les backers indiquent leur numéro préféré (I–XII) et leur version (Or / Acier) lors de la réservation, sous réserve de disponibilité.'],
              ].map(([q,a],i)=>(
                <div key={i} style={{borderBottom:'1px solid #e8e8e8',padding:'14px 0'}}>
                  <div style={{fontSize:14,fontWeight:700,marginBottom:6,color:'#222'}}>Q : {q}</div>
                  <div style={{fontSize:13,color:'#666',lineHeight:1.7}}>{a}</div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* ── SIDEBAR ── */}
        <aside id="pledge" style={{paddingTop:36,position:'sticky',top:64}}>

          <div style={{fontSize:11,letterSpacing:'0.18em',color:'#999',fontWeight:700,marginBottom:16,paddingBottom:12,borderBottom:'1px solid #e8e8e8'}}>CHOISISSEZ VOTRE SOUTIEN</div>

          {/* GOLD TIER */}
          <div style={{background:'linear-gradient(135deg,#1c1608,#0f0c04)',border:'2px solid rgba(212,175,55,0.5)',borderRadius:10,padding:22,marginBottom:14,position:'relative'}}>
            <div style={{position:'absolute',top:-1,right:12,background:'#d4af37',color:'#000',fontSize:10,fontWeight:700,padding:'3px 12px',borderRadius:'0 0 5px 5px',letterSpacing:'0.1em'}}>POPULAIRE</div>
            <div style={{fontSize:24,fontWeight:800,color:'#d4af37',marginBottom:4}}>4 900 €</div>
            <div style={{fontSize:13,fontWeight:700,color:'#fff',marginBottom:8,letterSpacing:'0.05em'}}>BABEL V1 · Version Or PVD</div>
            <div style={{fontSize:12,color:'rgba(255,255,255,0.5)',lineHeight:1.65,marginBottom:14}}>Acier 316L traitement PVD or champagne · Votre numéro romain (I–XII) = votre civilisation sur le cadran.</div>
            <ul style={{paddingLeft:0,marginBottom:14,listStyle:'none'}}>
              {['BABEL V1 Or PVD · Numérotée I–XII au choix','Mouvement Sellita SW200 · Swiss Made','Cristal saphir double face AR','Écrin bois laqué Or + velours anthracite','Bracelet cuir ivoire 20 mm','Livret 12 civilisations (12 pages)','Certificat Or numéroté & signé','Accès communauté backers privée'].map((item,j)=>(
                <li key={j} style={{fontSize:12,color:'rgba(255,255,255,0.7)',padding:'3px 0',paddingLeft:18,position:'relative'}}>
                  <span style={{position:'absolute',left:0,color:'#d4af37',fontWeight:700}}>✓</span>{item}
                </li>
              ))}
            </ul>
            <div style={{fontSize:11,color:'rgba(212,175,55,0.5)',marginBottom:14,fontWeight:600}}>DISPONIBLES : <strong style={{color:'#d4af37'}}>9 / 12 pièces</strong></div>
            <button style={{width:'100%',background:'#d4af37',color:'#000',fontWeight:700,fontSize:13,padding:13,borderRadius:5,border:'none',cursor:'pointer',letterSpacing:'0.06em'}}>✦ RÉSERVER — VERSION OR</button>
          </div>

          {/* STEEL TIER */}
          <div style={{background:'#fff',border:`2px solid ${KS_GREEN}`,borderRadius:10,padding:22,marginBottom:14,position:'relative'}}>
            <div style={{position:'absolute',top:-1,right:12,background:KS_GREEN,color:'#000',fontSize:10,fontWeight:700,padding:'3px 12px',borderRadius:'0 0 5px 5px',letterSpacing:'0.1em'}}>SÉRIE FONDATEURS</div>
            <div style={{fontSize:24,fontWeight:800,color:KS_GREEN,marginBottom:4}}>4 500 €</div>
            <div style={{fontSize:13,fontWeight:700,color:'#222',marginBottom:8,letterSpacing:'0.05em'}}>BABEL V1 · Version Acier 316L</div>
            <div style={{fontSize:12,color:'#666',lineHeight:1.65,marginBottom:14}}>Acier inoxydable 316L · Votre numéro romain (I–XII) = votre civilisation sur le cadran.</div>
            <ul style={{paddingLeft:0,marginBottom:14,listStyle:'none'}}>
              {['BABEL V1 Acier · Numérotée I–XII au choix','Mouvement Sellita SW200 · Swiss Made','Cristal saphir double face AR','Écrin bois laqué + velours anthracite','Bracelet cuir cognac 20 mm','Livret 12 civilisations (12 pages)','Certificat Acier numéroté & signé','Accès communauté backers privée'].map((item,j)=>(
                <li key={j} style={{fontSize:12,color:'#444',padding:'3px 0',paddingLeft:18,position:'relative'}}>
                  <span style={{position:'absolute',left:0,color:KS_GREEN,fontWeight:700}}>✓</span>{item}
                </li>
              ))}
            </ul>
            <div style={{fontSize:11,color:'#aaa',marginBottom:14,fontWeight:600}}>DISPONIBLES : <strong style={{color:'#222'}}>8 / 12 pièces</strong></div>
            <button style={{width:'100%',background:KS_GREEN,color:'#000',fontWeight:700,fontSize:13,padding:13,borderRadius:5,border:'none',cursor:'pointer',letterSpacing:'0.06em'}}>⚙ RÉSERVER — VERSION ACIER</button>
          </div>

          {/* EARLY BIRD SOLD OUT */}
          <div style={{background:'#f9f9f9',border:'1px solid #e0e0e0',borderRadius:10,padding:22,marginBottom:14,opacity:0.55}}>
            <div style={{display:'inline-block',background:'#ffeaea',border:'1px solid #e57373',color:'#c62828',fontSize:10,fontWeight:700,letterSpacing:'0.1em',padding:'3px 10px',borderRadius:3,marginBottom:8}}>ÉPUISÉ</div>
            <div style={{fontSize:20,fontWeight:800,color:'#999',marginBottom:4}}>4 100 €</div>
            <div style={{fontSize:13,fontWeight:700,color:'#999',marginBottom:6}}>Early Bird · 5 premiers backers</div>
            <div style={{fontSize:12,color:'#bbb',marginBottom:12}}>Épuisé en 48h. Remercions nos 5 premiers aventuriers.</div>
            <button disabled style={{width:'100%',background:'#f0f0f0',color:'#aaa',fontWeight:700,fontSize:13,padding:13,borderRadius:5,border:'none',cursor:'default'}}>ÉPUISÉ</button>
          </div>

          {/* SOUTIEN */}
          <div style={{background:'#fff',border:'1px solid #e8e8e8',borderRadius:10,padding:22,marginBottom:24}}>
            <div style={{fontSize:20,fontWeight:800,color:'#333',marginBottom:4}}>30 €</div>
            <div style={{fontSize:13,fontWeight:700,color:'#222',marginBottom:8}}>Soutien · Communauté ALMA</div>
            <ul style={{paddingLeft:0,marginBottom:14,listStyle:'none'}}>
              {['Votre nom dans le livret ALMA','Newsletter Carnets ALMA','Accès communauté backers','Photos making-of exclusives'].map((item,j)=>(
                <li key={j} style={{fontSize:12,color:'#555',padding:'3px 0',paddingLeft:18,position:'relative'}}>
                  <span style={{position:'absolute',left:0,color:KS_GREEN,fontWeight:700}}>✓</span>{item}
                </li>
              ))}
            </ul>
            <button style={{width:'100%',background:'#222',color:'#fff',fontWeight:700,fontSize:13,padding:12,borderRadius:5,border:'none',cursor:'pointer'}}>SOUTENIR LE PROJET</button>
          </div>

          {/* Updates */}
          <div style={{paddingTop:20,borderTop:'1px solid #e8e8e8'}}>
            <div style={{fontSize:11,letterSpacing:'0.18em',color:'#999',fontWeight:700,marginBottom:14}}>MISES À JOUR</div>
            {[
              {date:'12 JUIL. 2026',title:'🚀 Campagne lancée !',text:'Merci à nos 183 premiers contributeurs. Les 5 Early Bird épuisés en 48h.'},
              {date:'10 JUIL. 2026',title:'✅ Sellita SW200 confirmé',text:'Commande passée via Cousins UK — distributeur agréé.'},
              {date:'5 JUIL. 2026',title:'🎨 Design cadran finalisé',text:'12 scripts validés — lisibilité testée à 39 mm.'},
            ].map((u,i)=>(
              <div key={i} style={{paddingBottom:14,marginBottom:14,borderBottom:'1px solid #f0f0f0'}}>
                <div style={{fontSize:10,color:KS_GREEN,letterSpacing:'0.12em',fontWeight:700,marginBottom:4}}>{u.date}</div>
                <div style={{fontSize:13,fontWeight:700,marginBottom:4}}>{u.title}</div>
                <div style={{fontSize:12,color:'#666',lineHeight:1.6}}>{u.text}</div>
              </div>
            ))}
          </div>

          {/* Backers */}
          <div style={{paddingTop:16,borderTop:'1px solid #e8e8e8'}}>
            <div style={{fontSize:11,letterSpacing:'0.18em',color:'#999',fontWeight:700,marginBottom:14}}>DERNIERS BACKERS</div>
            {[
              {flag:'🇫🇷',name:'Antoine M.',detail:'Paris · Pièce VI (Acier)'},
              {flag:'🇨🇭',name:'Youssef A.',detail:'Genève · Pièce XII (Or)'},
              {flag:'🇦🇪',name:'Khalid R.',detail:'Dubaï · Pièce VIII (Or)'},
              {flag:'🇧🇪',name:'Sophie L.',detail:'Bruxelles · Soutien'},
            ].map((b,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:10,paddingBottom:12,marginBottom:12,borderBottom:'1px solid #f5f5f5'}}>
                <span style={{fontSize:22}}>{b.flag}</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:13,fontWeight:700}}>{b.name}</div>
                  <div style={{fontSize:11,color:'#999'}}>{b.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{background:'#111',color:'#666',textAlign:'center',padding:'48px 24px',marginTop:60}}>
        <div style={{fontSize:24,letterSpacing:'0.45em',color:'#d4af37',marginBottom:8,fontFamily:'Georgia,serif'}}>ALMA</div>
        <div style={{fontSize:12,letterSpacing:'0.22em',marginBottom:8,color:'#555'}}>Le temps appartient à tout le monde.</div>
        <div style={{fontSize:11,color:'rgba(212,175,55,0.4)',letterSpacing:'0.15em',marginBottom:24}}>12 civilisations. 24 pièces. 1 montre.</div>
        <div style={{display:'flex',justifyContent:'center',gap:28,flexWrap:'wrap',marginBottom:20}}>
          {[['Site officiel','https://alma-watch.vercel.app'],['GitHub','https://github.com/ia2213/alma-watch'],['Instagram','#'],['Contact','#']].map(([l,h])=>(
            <a key={l} href={h} style={{color:'#555',fontSize:12,textDecoration:'none',letterSpacing:'0.08em'}}>{l}</a>
          ))}
        </div>
        <div style={{fontSize:11,color:'#333'}}>© 2026 ALMA Watch · SASU en cours de constitution · Siège France · alma-watch.vercel.app</div>
      </footer>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div onClick={()=>setLightbox(null)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.94)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}>
          <img src={lightbox} alt="" style={{maxWidth:'90vw',maxHeight:'90vh',borderRadius:6,boxShadow:'0 20px 80px rgba(0,0,0,0.8)'}}/>
          <div style={{position:'absolute',top:24,right:32,color:'#fff',fontSize:36,cursor:'pointer',lineHeight:1}}>×</div>
        </div>
      )}

      <style>{`* { box-sizing: border-box; } @media(max-width:900px){ .grid-hero { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
