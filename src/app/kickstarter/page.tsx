'use client';
import { useState } from 'react';

const CIVILIZATIONS = [
  { pos: 'XII', script: 'XII', name: 'Latin', civ: 'Rome' },
  { pos: 'I', script: '١', name: 'Arabe', civ: 'Islam' },
  { pos: 'II', script: 'ב', name: 'Hébreu', civ: 'Israël' },
  { pos: 'III', script: '四', name: 'Kanji', civ: 'Chine' },
  { pos: 'IV', script: '𝋥', name: 'Maya', civ: 'Mésoamérique' },
  { pos: 'V', script: 'Η', name: 'Grec', civ: 'Grèce Antique' },
  { pos: 'VI', script: '፯', name: "Ge'ez", civ: 'Éthiopie' },
  { pos: 'VII', script: '𒐕𒐐', name: 'Cunéiforme', civ: 'Sumer' },
  { pos: 'VIII', script: '𓂋', name: 'Hiéroglyphe', civ: 'Égypte' },
  { pos: 'IX', script: 'Д', name: 'Cyrillique', civ: 'Slavs' },
  { pos: 'X', script: 'क', name: 'Devanāgarī', civ: 'Inde' },
  { pos: 'XI', script: 'Ж', name: 'Vieux Slave', civ: 'Europe de l\'Est' },
];

const IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    alt: 'Montre de luxe — vue cadran',
    caption: 'CADRAN — Vue principale',
  },
  {
    url: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80',
    alt: 'Détail mouvement horloger',
    caption: 'MOUVEMENT — Sellita SW200',
  },
  {
    url: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80',
    alt: 'Montre acier bracelet cuir',
    caption: 'BRACELET — Cuir Cognac',
  },
  {
    url: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    alt: 'Boîte montre premium',
    caption: 'ÉCRIN — Bois laqué',
  },
  {
    url: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&q=80',
    alt: 'Montre au poignet',
    caption: 'AU POIGNET — 39 mm',
  },
  {
    url: 'https://images.unsplash.com/photo-1548171916-c8fd5d130bba?w=800&q=80',
    alt: 'Mécanisme horloger macro',
    caption: 'MACRO — Mécanisme',
  },
];

const SPECS = [
  ['Mouvement', 'Sellita SW200-2 · Swiss Made certifié'],
  ['Réserve de marche', '65 heures'],
  ['Fréquence', '28 800 alt/h · 4 Hz'],
  ['Rubis', '26 rubis'],
  ['Précision', '−4 / +6 sec/jour'],
  ['Diamètre boîtier', '39 mm'],
  ['Épaisseur', '11,5 mm'],
  ['Entre-cornes', '20 mm'],
  ['Matériau', 'Acier inoxydable 316L'],
  ['Finitions', 'Satiné-brossé flancs · Poli miroir cornes'],
  ['Étanchéité', '50 mètres (5 ATM)'],
  ['Cristal', 'Saphir double face AR coating · 9 Mohs'],
  ['Caseback', 'Saphir transparent · Mouvement visible'],
  ['Cadran', 'Laque blanc champagne · 12 systèmes d\'écriture'],
  ['Index', 'Appliqués laiton · Super-LumiNova'],
  ['Aiguilles', 'Dauphine · Acier poli-satiné · LumiNova C3'],
  ['Bracelet', 'Cuir veau marron cognac · 20 mm'],
  ['Couronne', 'Vissée · Signée ALMA · Position 3h'],
  ['Tirage', '25 pièces numérotées · KS 01/25 → KS 25/25'],
  ['Halal-compatible', 'Aucune trace d\'or réel'],
];

const TABS = [
  { id: 'story', label: 'HISTOIRE' },
  { id: 'product', label: 'PRODUIT' },
  { id: 'collection', label: 'COLLECTION' },
  { id: 'risks', label: 'RISQUES & FAQ' },
];

const PLEDGES = [
  {
    price: '4 100 €',
    name: 'Early Bird · Série Fondateurs',
    desc: 'Tarif découverte réservé aux 5 premiers backers. Épuisé en 48h.',
    includes: ['BABEL V1 · Blanc Champagne numérotée', 'Boîte premium bois laqué', 'Certificat KS 01–05/25'],
    avail: 0,
    total: 5,
    soldOut: true,
    featured: false,
  },
  {
    price: '4 500 €',
    name: 'BABEL V1 · Série Fondateurs',
    desc: 'La pièce de lancement. Acier 316L · Cadran blanc champagne · 12 civilisations · Sellita Swiss Made.',
    includes: [
      'BABEL V1 · Blanc Champagne numérotée',
      'Mouvement Sellita SW200 · Swiss Made',
      'Verre saphir double face AR',
      'Boîte bois laqué + velours anthracite',
      'Livret 12 civilisations (12 pages)',
      'Certificat d\'authenticité numéroté',
      'Accès communauté backers privée',
    ],
    avail: 8,
    total: 25,
    soldOut: false,
    featured: true,
  },
  {
    price: '4 800 €',
    name: 'BABEL V1 · Édition Collector',
    desc: 'Même montre + bracelet acier maille 3 rangs boucle déployante signée ALMA.',
    includes: [
      'BABEL V1 · Blanc Champagne numérotée',
      'Bracelet acier maille 3 rangs',
      'Boucle déployante signée ALMA',
      'Tout le contenu Série Fondateurs',
      'Numéro de série prioritaire (01–10)',
    ],
    avail: 4,
    total: 10,
    soldOut: false,
    featured: false,
  },
  {
    price: '30 €',
    name: 'Soutien · Communauté ALMA',
    desc: 'Soutenez le projet sans réserver de montre. Votre nom dans le livret des civilisations.',
    includes: [
      'Votre nom dans le livret ALMA',
      'Newsletter Carnets ALMA',
      'Accès communauté backers',
      'Photos making-of exclusives',
    ],
    avail: 999,
    total: 999,
    soldOut: false,
    featured: false,
  },
];

function WatchDial() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Outer ring */}
      <circle cx="100" cy="100" r="98" fill="#0f0e0a" stroke="#b8960c" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="82" fill="none" stroke="rgba(184,150,12,0.15)" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="78" fill="#1a160a" stroke="rgba(184,150,12,0.08)" strokeWidth="0.5" />

      {/* Minute track dots */}
      {Array.from({ length: 60 }).map((_, i) => {
        const a = (i * 6 - 90) * (Math.PI / 180);
        const r = i % 5 === 0 ? 72 : 74;
        const size = i % 5 === 0 ? 1.5 : 0.7;
        return <circle key={i} cx={100 + r * Math.cos(a)} cy={100 + r * Math.sin(a)} r={size} fill={i % 5 === 0 ? '#b8960c' : 'rgba(184,150,12,0.3)'} />;
      })}

      {/* Scripts at each hour position */}
      {[
        { h: 0,  t: 'XII', s: 6.5, fill: '#d4af37' },
        { h: 1,  t: '١',  s: 7.5, fill: 'rgba(212,175,55,0.85)' },
        { h: 2,  t: 'ב',  s: 7,   fill: 'rgba(212,175,55,0.85)' },
        { h: 3,  t: '四', s: 7,   fill: '#d4af37' },
        { h: 4,  t: '𝋥', s: 7,   fill: 'rgba(212,175,55,0.85)' },
        { h: 5,  t: 'Η',  s: 7.5, fill: 'rgba(212,175,55,0.85)' },
        { h: 6,  t: 'VI', s: 6.5, fill: '#d4af37' },
        { h: 7,  t: '፯', s: 7.5, fill: 'rgba(212,175,55,0.85)' },
        { h: 8,  t: '𒐕', s: 6,   fill: 'rgba(212,175,55,0.85)' },
        { h: 9,  t: 'IX', s: 6.5, fill: '#d4af37' },
        { h: 10, t: 'क',  s: 7,   fill: 'rgba(212,175,55,0.85)' },
        { h: 11, t: '𓂋', s: 7,   fill: 'rgba(212,175,55,0.85)' },
      ].map(({ h, t, s, fill }) => {
        const a = (h * 30 - 90) * (Math.PI / 180);
        const r = 62;
        return (
          <text key={h} x={100 + r * Math.cos(a)} y={100 + r * Math.sin(a) + s * 0.38}
            textAnchor="middle" fontSize={s} fill={fill} fontFamily="Georgia, serif">{t}</text>
        );
      })}

      {/* Brand */}
      <text x="100" y="93" textAnchor="middle" fontSize="9" fill="#d4af37" fontFamily="Georgia, serif" letterSpacing="4">ALMA</text>
      <text x="100" y="103" textAnchor="middle" fontSize="4" fill="rgba(212,175,55,0.6)" fontFamily="Georgia, serif" letterSpacing="3">BABEL</text>
      <text x="100" y="115" textAnchor="middle" fontSize="3.5" fill="rgba(212,175,55,0.35)" fontFamily="Georgia, serif" letterSpacing="2">SWISS MADE</text>

      {/* Hour hand */}
      <line x1="100" y1="100" x2="88" y2="58" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" />
      {/* Minute hand */}
      <line x1="100" y1="100" x2="126" y2="72" stroke="#e8e2d6" strokeWidth="2" strokeLinecap="round" />
      {/* Second hand */}
      <line x1="100" y1="100" x2="78" y2="130" stroke="#e05050" strokeWidth="1" strokeLinecap="round" />
      {/* Center cap */}
      <circle cx="100" cy="100" r="4" fill="#b8960c" />
      <circle cx="100" cy="100" r="2" fill="#d4af37" />
    </svg>
  );
}

export default function KickstarterPage() {
  const [activeTab, setActiveTab] = useState('story');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const funded = 28150;
  const goal = 42000;
  const pct = Math.round((funded / goal) * 100);

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", background: '#f7f7f7', minHeight: '100vh', color: '#222' }}>

      {/* ── KS TOP BAR ── */}
      <div style={{ background: '#05ce78', padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 700, fontSize: 13 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="20" height="20" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="16" fill="#05ce78" />
            <path d="M10 8v16M10 16l5-8 7 8-7 8-5-8z" stroke="#000" strokeWidth="2.5" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: 14, letterSpacing: '0.05em' }}>Kickstarter</span>
        </div>
        <span style={{ fontSize: 12 }}>Campagne en cours · <strong>14 jours restants</strong></span>
        <a href="#pledge" style={{ background: '#000', color: '#05ce78', padding: '6px 16px', borderRadius: 4, textDecoration: 'none', fontSize: 12, letterSpacing: '0.05em' }}>Soutenir →</a>
      </div>

      {/* ── KS NAV ── */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #e0e0e0', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ padding: '16px 0', fontWeight: 700, fontSize: 15, letterSpacing: '0.12em', color: '#222' }}>ALMA WATCH</div>
          {['Campagne', 'Mises à jour', 'Commentaires', 'Communauté'].map(l => (
            <a key={l} href="#" style={{ color: '#666', fontSize: 13, textDecoration: 'none', padding: '20px 4px', borderBottom: l === 'Campagne' ? '2px solid #05ce78' : '2px solid transparent', fontWeight: l === 'Campagne' ? 600 : 400 }}>{l}</a>
          ))}
        </div>
        <a href="#pledge" style={{ background: '#05ce78', color: '#000', fontWeight: 700, fontSize: 13, padding: '9px 22px', borderRadius: 4, textDecoration: 'none', letterSpacing: '0.04em' }}>Soutenir ce projet</a>
      </nav>

      {/* ── HERO ── */}
      <div style={{ background: 'linear-gradient(135deg,#0f0e0a 0%,#1a160a 60%,#0c0b06 100%)', padding: '60px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 60, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(5,206,120,0.1)', border: '1px solid rgba(5,206,120,0.3)', borderRadius: 20, padding: '5px 14px', marginBottom: 20 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#05ce78', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              <span style={{ color: '#05ce78', fontSize: 11, letterSpacing: '0.15em', fontWeight: 600 }}>KICKSTARTER — EN DIRECT</span>
            </div>
            <h1 style={{ fontSize: 'clamp(3rem,6vw,5rem)', fontWeight: 200, letterSpacing: '0.18em', color: '#d4af37', lineHeight: 1.05, marginBottom: 8, fontFamily: 'Georgia, serif' }}>ALMA<br />BABEL</h1>
            <p style={{ fontSize: 16, color: '#ccc', fontWeight: 300, letterSpacing: '0.08em', marginBottom: 20 }}>12 Civilisations. 25 Pièces. 1 Montre.</p>
            <p style={{ fontSize: 14, color: '#999', lineHeight: 1.85, maxWidth: 460, marginBottom: 32 }}>La première montre mécanique suisse portant les systèmes d'écriture des douze plus grandes civilisations de l'humanité — de Rome à Sumer, d'Égypte à Maya. Un objet de 5 000 ans d'histoire sur 39 mm de saphir et d'acier.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
              <a href="#pledge" style={{ background: '#05ce78', color: '#000', fontWeight: 700, fontSize: 14, padding: '13px 28px', borderRadius: 4, textDecoration: 'none', letterSpacing: '0.05em' }}>Réserver ma pièce</a>
              <button onClick={() => setActiveTab('product')} style={{ background: 'transparent', color: '#d4af37', fontWeight: 400, fontSize: 14, padding: '12px 28px', borderRadius: 4, border: '1px solid #d4af37', cursor: 'pointer', letterSpacing: '0.05em' }}>Voir les specs</button>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['🇨🇭 Swiss Made', '⌚ Sellita SW200', '💎 Saphir AR', '🔒 Halal-compatible'].map(b => (
                <span key={b} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: '5px 12px', fontSize: 11, color: '#999', letterSpacing: '0.1em' }}>{b}</span>
              ))}
            </div>
          </div>
          {/* Watch */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle at 38% 32%, #2a2010, #0c0b09)', border: '2.5px solid rgba(184,150,12,0.4)', boxShadow: '0 0 80px rgba(184,150,12,0.1), inset 0 0 40px rgba(0,0,0,0.6)' }}>
              <WatchDial />
            </div>
            <p style={{ color: '#666', fontSize: 11, letterSpacing: '0.2em' }}>BABEL V1 · KS 01/25 — SÉRIE FONDATEURS</p>
          </div>
        </div>
      </div>

      {/* ── FUNDING BAR ── */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e0e0e0', padding: '28px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', gap: 40, marginBottom: 16, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: 30, fontWeight: 700, color: '#05ce78' }}>{funded.toLocaleString('fr-FR')} €</div>
                  <div style={{ fontSize: 12, color: '#666', letterSpacing: '0.1em', marginTop: 2 }}>COLLECTÉS SUR {goal.toLocaleString('fr-FR')} €</div>
                </div>
                <div>
                  <div style={{ fontSize: 30, fontWeight: 700 }}>183</div>
                  <div style={{ fontSize: 12, color: '#666', letterSpacing: '0.1em', marginTop: 2 }}>CONTRIBUTEURS</div>
                </div>
                <div>
                  <div style={{ fontSize: 30, fontWeight: 700 }}>{pct}%</div>
                  <div style={{ fontSize: 12, color: '#666', letterSpacing: '0.1em', marginTop: 2 }}>FINANCÉ</div>
                </div>
              </div>
              <div style={{ height: 6, background: '#f0f0f0', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${pct}%`, background: '#05ce78', borderRadius: 3, transition: 'width 1s' }} />
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 48, fontWeight: 700, lineHeight: 1 }}>14</div>
              <div style={{ fontSize: 12, color: '#666', letterSpacing: '0.15em' }}>JOURS RESTANTS</div>
              <div style={{ marginTop: 10, display: 'inline-block', background: 'rgba(5,206,120,0.1)', border: '1px solid #05ce78', color: '#05ce78', fontSize: 11, padding: '4px 12px', borderRadius: 3, letterSpacing: '0.1em', fontWeight: 600 }}>● APPROUVÉ KICKSTARTER</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN 2-COL ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 40, alignItems: 'start' }}>

        {/* LEFT */}
        <div style={{ paddingTop: 32 }}>

          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid #e0e0e0', marginBottom: 40, gap: 2 }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '14px 20px', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', color: activeTab === t.id ? '#222' : '#999', borderBottom: activeTab === t.id ? '2px solid #05ce78' : '2px solid transparent', transition: 'all 0.2s' }}>{t.label}</button>
            ))}
          </div>

          {/* ── STORY ── */}
          {activeTab === 'story' && (
            <div>
              {/* Video hero placeholder */}
              <div style={{ width: '100%', aspectRatio: '16/9', background: '#111', borderRadius: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 32, cursor: 'pointer', overflow: 'hidden', position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=70" alt="Watch" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }} />
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <p style={{ color: '#fff', fontSize: 13, letterSpacing: '0.1em', fontWeight: 600 }}>ALMA WATCH — MAKING-OF & VISION DU FONDATEUR (2:47)</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>Cliquez pour regarder</p>
                </div>
              </div>

              <h2 style={{ fontSize: 24, fontWeight: 300, letterSpacing: '0.12em', color: '#222', marginBottom: 6, fontFamily: 'Georgia, serif' }}>L'Art du Temps Universel</h2>
              <p style={{ fontSize: 12, color: '#05ce78', letterSpacing: '0.15em', marginBottom: 20, fontWeight: 600 }}>LA NAISSANCE D'ALMA · JUILLET 2026</p>
              <p style={{ fontSize: 15, color: '#444', lineHeight: 1.85, marginBottom: 16 }}>ALMA vient de l'araméen et signifie <em>l'éternité</em> ou <em>le monde</em>. Ce nom court, prononçable dans toutes les langues, synthétise l'essence du projet : une montre qui n'appartient pas à une culture, mais à <strong>toutes</strong>.</p>
              <p style={{ fontSize: 15, color: '#444', lineHeight: 1.85, marginBottom: 32 }}>Chaque chiffre horaire — de I à XII — est rendu dans le système d'écriture d'une civilisation différente. Latin, Arabe, Hébreu, Chinois, Maya, Grec, Ge'ez Éthiopien, Cunéiforme, Hiéroglyphe Égyptien, Cyrillique, Devanāgarī et Vieux Slave. Douze langues. Douze histoires. Un seul cadran.</p>

              {/* Image grid */}
              <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: '0.08em', marginBottom: 16 }}>Galerie</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 32 }}>
                {IMAGES.map((img, i) => (
                  <div key={i} onClick={() => setLightboxImg(img.url)} style={{ cursor: 'pointer', borderRadius: 4, overflow: 'hidden', aspectRatio: '1', position: 'relative', background: '#111' }}>
                    <img src={img.url} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent,rgba(0,0,0,0.8))', padding: '20px 10px 8px', fontSize: 10, color: '#fff', letterSpacing: '0.12em' }}>{img.caption}</div>
                  </div>
                ))}
              </div>

              {/* 12 civs */}
              <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: '0.08em', marginBottom: 16 }}>Les 12 Civilisations</h3>
              <p style={{ fontSize: 13, color: '#666', marginBottom: 20 }}>Chaque heure raconte une histoire. Chaque script est authentifié par des experts calligraphiques.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 32 }}>
                {CIVILIZATIONS.map((c, i) => (
                  <div key={i} style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 6, padding: '16px 12px', textAlign: 'center', transition: 'border-color 0.2s', cursor: 'default' }}>
                    <div style={{ fontSize: 28, marginBottom: 6, fontFamily: 'Georgia, serif', color: '#b8960c' }}>{c.script}</div>
                    <div style={{ fontSize: 10, color: '#999', letterSpacing: '0.15em', marginBottom: 4 }}>POS. {c.pos}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#333' }}>{c.name}</div>
                    <div style={{ fontSize: 11, color: '#999' }}>{c.civ}</div>
                  </div>
                ))}
              </div>

              {/* Solidarity */}
              <div style={{ background: '#f0faf4', border: '1px solid #c3e6cb', borderRadius: 6, padding: '24px 28px' }}>
                <h3 style={{ fontSize: 15, fontWeight: 600, letterSpacing: '0.06em', marginBottom: 10, color: '#2e7d32' }}>🌍 Engagement Solidaire</h3>
                <p style={{ fontSize: 14, color: '#444', lineHeight: 1.75 }}>Acheter une montre ALMA, c'est aussi construire un avenir. <strong style={{ color: '#2e7d32' }}>10% des revenus nets</strong> de chaque série sont reversés à une association d'éducation des enfants dans le monde entier. Sur 25 pièces vendues, cela représente <strong>~7 150 €</strong> reversés par série.</p>
              </div>
            </div>
          )}

          {/* ── PRODUCT ── */}
          {activeTab === 'product' && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 300, letterSpacing: '0.12em', marginBottom: 6, fontFamily: 'Georgia, serif' }}>Spécifications Techniques</h2>
              <p style={{ fontSize: 12, color: '#05ce78', letterSpacing: '0.15em', marginBottom: 24, fontWeight: 600 }}>BABEL V1 — FICHE TECHNIQUE COMPLÈTE</p>
              <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 6, overflow: 'hidden', marginBottom: 32 }}>
                {SPECS.map(([k, v], i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '38% 1fr', padding: '12px 20px', borderBottom: i < SPECS.length - 1 ? '1px solid #f0f0f0' : 'none', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                    <span style={{ fontSize: 11, letterSpacing: '0.12em', color: '#999', textTransform: 'uppercase' }}>{k}</span>
                    <span style={{ fontSize: 14, color: '#333' }}>{v}</span>
                  </div>
                ))}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: '0.06em', marginBottom: 16 }}>Boîte de Présentation</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
                {[
                  { icon: '📦', label: 'Écrin bois laqué + velours anthracite' },
                  { icon: '📖', label: 'Livret 12 pages — une par civilisation' },
                  { icon: '📜', label: 'Certificat numéroté & signé' },
                  { icon: '🔧', label: 'Outil changement bracelet inclus' },
                  { icon: '📱', label: 'QR Code → expérience digitale ALMA' },
                  { icon: '🎬', label: 'Accès vidéo making-of exclusif' },
                ].map((item, i) => (
                  <div key={i} style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 6, padding: '18px 14px', textAlign: 'center' }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                    <div style={{ fontSize: 12, color: '#555', lineHeight: 1.5 }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── COLLECTION ── */}
          {activeTab === 'collection' && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 300, letterSpacing: '0.12em', marginBottom: 6, fontFamily: 'Georgia, serif' }}>Éditions BABEL</h2>
              <p style={{ fontSize: 12, color: '#05ce78', letterSpacing: '0.15em', marginBottom: 24, fontWeight: 600 }}>SÉRIE 1 — 2026 · TOUTES LES VARIANTES</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
                {[
                  { name: 'BABEL V1 · Blanc Champagne', price: '4 500 €', desc: 'Acier 316L · Cadran laque blanc champagne · La pièce de lancement. Série Fondateurs numérotée KS 01–25.', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=70', pieces: '25 pièces · Série Fondateurs', featured: true },
                  { name: 'BABEL NUIT · Ardoise', price: '4 800 €', desc: 'Acier 316L · Fond ardoise sombre · Index Super-LumiNova fort.', img: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&q=70', pieces: '25 pièces · Série 2 (2027)', featured: false },
                  { name: 'BABEL MÉTÉORITE · Gibeon', price: '7 500 €', desc: 'Titanium Grade 5 · Cadran en météorite Gibeon authentique (motif Widmanstätten unique).', img: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&q=70', pieces: '12 pièces · Ultra-limitée (2027)', featured: false },
                  { name: 'BABEL TITANE · Grade 5', price: '5 500 €', desc: 'Titane grade 5 · Ultra-léger (−30% vs acier) · Pour les porteurs actifs.', img: 'https://images.unsplash.com/photo-1548171916-c8fd5d130bba?w=400&q=70', pieces: '20 pièces · Série 3 (2028)', featured: false },
                ].map((v, i) => (
                  <div key={i} style={{ background: '#fff', border: v.featured ? '2px solid #05ce78' : '1px solid #e8e8e8', borderRadius: 8, overflow: 'hidden', position: 'relative' }}>
                    {v.featured && <div style={{ position: 'absolute', top: 0, right: 16, background: '#05ce78', color: '#000', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', padding: '3px 10px', borderRadius: '0 0 4px 4px' }}>LANCEMENT</div>}
                    <img src={v.img} alt={v.name} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
                    <div style={{ padding: '18px 18px 20px' }}>
                      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6, letterSpacing: '0.05em' }}>{v.name}</div>
                      <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6, marginBottom: 12 }}>{v.desc}</div>
                      <div style={{ fontSize: 20, fontWeight: 700, color: '#05ce78', marginBottom: 4 }}>{v.price}</div>
                      <div style={{ fontSize: 11, color: '#999', letterSpacing: '0.1em' }}>{v.pieces}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── RISKS ── */}
          {activeTab === 'risks' && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 300, letterSpacing: '0.12em', marginBottom: 6, fontFamily: 'Georgia, serif' }}>Risques & Contingences</h2>
              <p style={{ fontSize: 12, color: '#05ce78', letterSpacing: '0.15em', marginBottom: 20, fontWeight: 600 }}>TRANSPARENCE TOTALE — ANALYSE COMPLÈTE</p>
              <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75, marginBottom: 24 }}>Kickstarter encourage une communication honnête sur les risques. Voici une analyse exhaustive des risques identifiés et des plans de contingence associés.</p>
              {[
                { level: 'ÉLEVÉ', color: '#c62828', bg: '#fff5f5', border: '#e57373', name: 'Conflit de marque (ALMA Watches GmbH)', text: 'Un conflit a été identifié avec ALMA Watches GmbH (Allemagne). Dépôt du nom BABEL à l\'INPI/EUIPO en priorité. Budget alloué : ~1 000 €. Plan B : utilisation du nom BABEL comme nom principal.' },
                { level: 'MOYEN', color: '#e65100', bg: '#fff8f0', border: '#ffb74d', name: 'Délais de fabrication dépassés', text: 'Prototypage et assemblage peuvent prendre 12–18 mois au lieu des 6–9 prévus. Mises à jour mensuelles garanties pour tous les backers. Livraison annoncée : Q3 2027.' },
                { level: 'MOYEN', color: '#e65100', bg: '#fff8f0', border: '#ffb74d', name: 'Lisibilité du cadran', text: '12 systèmes d\'écriture sur 39 mm = risque de surcharge visuelle. 5 variantes testées. Vote communauté Instagram. Priorité à la lisibilité.' },
                { level: 'FAIBLE', color: '#2e7d32', bg: '#f0faf4', border: '#81c784', name: 'Manque de liquidités', text: 'Kickstarter = financement par pré-acheteurs avant production. La campagne ne se déclenche que si l\'objectif est atteint — zéro risque financier pour les backers.' },
              ].map((r, i) => (
                <div key={i} style={{ background: r.bg, border: `1px solid ${r.border}`, borderLeft: `4px solid ${r.border}`, borderRadius: 6, padding: '16px 20px', marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>{r.name}</span>
                    <span style={{ background: r.bg, border: `1px solid ${r.border}`, color: r.color, fontSize: 10, fontWeight: 700, padding: '2px 10px', borderRadius: 3, letterSpacing: '0.1em' }}>{r.level}</span>
                  </div>
                  <p style={{ fontSize: 13, color: '#555', lineHeight: 1.65 }}>{r.text}</p>
                </div>
              ))}
              {/* FAQ */}
              <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: '0.06em', margin: '32px 0 16px' }}>FAQ</h3>
              {[
                ['Livraison estimée ?', 'Livraison prévue Q3 2027. Mises à jour mensuelles garanties.'],
                ['Est-ce réellement Swiss Made ?', 'Le mouvement Sellita SW200 est certifié Swiss Made. La désignation finale dépend du lieu d\'assemblage.'],
                ['Pourquoi 25 pièces seulement ?', 'L\'ultra-limitation garantit l\'exclusivité et permet un contrôle qualité maximal pour le premier lancement.'],
                ['Qu\'est-ce que Halal-compatible ?', 'Aucune version ALMA ne contient d\'or réel. Argument marketing à valider avec un expert islamique.'],
              ].map(([q, a], i) => (
                <div key={i} style={{ borderBottom: '1px solid #e8e8e8', padding: '14px 0' }}>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Q: {q}</div>
                  <div style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{a}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── SIDEBAR ── */}
        <aside id="pledge" style={{ paddingTop: 32, position: 'sticky', top: 70 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.18em', color: '#999', fontWeight: 600, marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid #e8e8e8' }}>CHOISISSEZ VOTRE SOUTIEN</div>
          {PLEDGES.map((p, i) => (
            <div key={i} style={{ background: '#fff', border: p.featured ? '2px solid #05ce78' : p.soldOut ? '1px solid #e8e8e8' : '1px solid #e8e8e8', borderRadius: 8, padding: '20px', marginBottom: 14, opacity: p.soldOut ? 0.5 : 1, position: 'relative', transition: 'border-color 0.2s' }}>
              {p.featured && <div style={{ position: 'absolute', top: -1, right: 12, background: '#05ce78', color: '#000', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: '0 0 4px 4px' }}>POPULAIRE</div>}
              {p.soldOut && <div style={{ background: '#ffeaea', border: '1px solid #e57373', color: '#c62828', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', padding: '3px 10px', borderRadius: 3, display: 'inline-block', marginBottom: 8 }}>ÉPUISÉ</div>}
              <div style={{ fontSize: 22, fontWeight: 700, color: p.soldOut ? '#999' : '#05ce78', marginBottom: 4 }}>{p.price}</div>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, letterSpacing: '0.04em' }}>{p.name}</div>
              <div style={{ fontSize: 12, color: '#666', lineHeight: 1.6, marginBottom: 12 }}>{p.desc}</div>
              <ul style={{ paddingLeft: 0, marginBottom: 14, listStyle: 'none' }}>
                {p.includes.map((item, j) => (
                  <li key={j} style={{ fontSize: 12, color: '#444', padding: '3px 0', paddingLeft: 18, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#05ce78', fontWeight: 700 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              {!p.soldOut && p.total !== 999 && (
                <div style={{ fontSize: 11, color: '#999', marginBottom: 12 }}><strong style={{ color: '#333' }}>{p.avail}</strong> / {p.total} disponibles</div>
              )}
              <button disabled={p.soldOut} style={{ width: '100%', background: p.soldOut ? '#f0f0f0' : p.featured ? '#05ce78' : '#222', color: p.soldOut ? '#999' : p.featured ? '#000' : '#fff', fontWeight: 700, fontSize: 13, padding: 12, borderRadius: 4, border: 'none', cursor: p.soldOut ? 'default' : 'pointer', letterSpacing: '0.06em', transition: 'background 0.2s' }}>
                {p.soldOut ? 'ÉPUISÉ' : 'SOUTENIR CE PROJET'}
              </button>
            </div>
          ))}

          {/* Updates */}
          <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid #e8e8e8' }}>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', color: '#999', fontWeight: 600, marginBottom: 14 }}>MISES À JOUR</div>
            {[
              { date: '12 JUIL. 2026', title: '🚀 Campagne lancée !', text: 'Merci à nos 183 premiers contributeurs. Les 5 Early Bird épuisés en 48h.' },
              { date: '10 JUIL. 2026', title: '✅ Sellita SW200 confirmé', text: 'Commande passée via distributeur agréé Cousins UK.' },
              { date: '5 JUIL. 2026', title: '🎨 Design cadran finalisé', text: '12 systèmes d\'écriture validés — lisibilité testée à 39 mm.' },
            ].map((u, i) => (
              <div key={i} style={{ paddingBottom: 14, marginBottom: 14, borderBottom: '1px solid #f0f0f0' }}>
                <div style={{ fontSize: 10, color: '#05ce78', letterSpacing: '0.12em', fontWeight: 600, marginBottom: 4 }}>{u.date}</div>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{u.title}</div>
                <div style={{ fontSize: 12, color: '#666', lineHeight: 1.6 }}>{u.text}</div>
              </div>
            ))}
          </div>

          {/* Backers */}
          <div style={{ paddingTop: 16, borderTop: '1px solid #e8e8e8' }}>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', color: '#999', fontWeight: 600, marginBottom: 14 }}>DERNIERS BACKERS</div>
            {[
              { flag: '🇫🇷', name: 'Antoine M.', loc: 'Paris', time: 'il y a 2h', tier: 'COLLECTOR' },
              { flag: '🇨🇭', name: 'Youssef A.', loc: 'Genève', time: 'il y a 5h', tier: 'FONDATEURS' },
              { flag: '🇦🇪', name: 'Khalid R.', loc: 'Dubaï', time: 'il y a 8h', tier: 'FONDATEURS' },
              { flag: '🇧🇪', name: 'Sophie L.', loc: 'Bruxelles', time: 'il y a 12h', tier: 'SOUTIEN' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 12, marginBottom: 12, borderBottom: '1px solid #f5f5f5' }}>
                <span style={{ fontSize: 22 }}>{b.flag}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{b.name}</div>
                  <div style={{ fontSize: 11, color: '#999' }}>{b.loc} · {b.time}</div>
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#05ce78', letterSpacing: '0.08em', background: 'rgba(5,206,120,0.08)', padding: '3px 8px', borderRadius: 3 }}>{b.tier}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#222', color: '#999', textAlign: 'center', padding: '40px 24px', marginTop: 60 }}>
        <div style={{ fontSize: 22, letterSpacing: '0.4em', color: '#d4af37', marginBottom: 8, fontFamily: 'Georgia, serif' }}>ALMA</div>
        <div style={{ fontSize: 12, letterSpacing: '0.2em', marginBottom: 20 }}>Le temps appartient à tout le monde.</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 20 }}>
          {[['Site officiel', 'https://alma-watch.vercel.app'], ['GitHub', 'https://github.com/ia2213/alma-watch'], ['Instagram', '#'], ['Contact', '#']].map(([label, href]) => (
            <a key={label} href={href} style={{ color: '#666', fontSize: 12, textDecoration: 'none', letterSpacing: '0.08em' }}>{label}</a>
          ))}
        </div>
        <div style={{ fontSize: 11, color: '#444' }}>© 2026 ALMA Watch · SASU en cours de constitution · 12 civilisations. 25 pièces. 1 montre.</div>
      </footer>

      {/* ── LIGHTBOX ── */}
      {lightboxImg && (
        <div onClick={() => setLightboxImg(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <img src={lightboxImg} alt="" style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 4, boxShadow: '0 20px 80px rgba(0,0,0,0.8)' }} />
          <div style={{ position: 'absolute', top: 20, right: 30, color: '#fff', fontSize: 32, cursor: 'pointer' }}>×</div>
        </div>
      )}

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
