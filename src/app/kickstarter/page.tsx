'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

/* ─── DATA ───────────────────────────────────────────────────────────── */

const CIVS = [
  {
    num: 1,
    roman: 'I',
    script: '١',
    name: 'Arabe',
    civ: 'Civilisation Islamique',
    era: 'VIIe — XVe siècle',
    color: '#d4af37',
    description: "Durant l'âge d'or islamique, Bagdad était la capitale mondiale du savoir. Al-Khwarizmi inventa l'algèbre, Al-Biruni calcula la circonférence de la Terre avec une précision stupéfiante. Les chiffres dits \"arabes\" — ceux que vous utilisez chaque jour — sont en réalité une synthèse du génie indo-arabe qui a révolutionné les mathématiques mondiales."
  },
  {
    num: 2,
    roman: 'II',
    script: '২',
    name: 'Bengali',
    civ: 'Monde Bengali',
    era: 'Xe s. ap. J.-C.',
    color: '#c0a060',
    description: "Le chiffre 2 en numération bengalie (২), marquant la 2e heure sur le cadran de l'édition N° 02/12. Elle témoigne de la richesse littéraire, spirituelle et scientifique du delta du Gange."
  },
  {
    num: 3,
    roman: 'III',
    script: '3',
    name: 'Moderne',
    civ: 'Monde contemporain',
    era: 'Époque moderne',
    color: '#b8b8b8',
    description: "Le chiffre 3 moderne, aboutissement universel marquant la 3e heure sur le cadran de l'édition N° 03/12. Il symbolise notre époque globale et la convergence moderne des savoirs."
  },
  {
    num: 4,
    roman: 'IV',
    script: '– – – –',
    name: 'Traits',
    civ: 'Système additif primitif',
    era: 'Antiquité',
    color: '#c8a84b',
    description: "Quatre traits additifs primitifs, rappelant les premières encoches humaines marquant le passage des jours et des lunes sur l'os ou le bois. L'aube de la numération."
  },
  {
    num: 5,
    roman: 'V',
    script: 'ה',
    name: 'Hébreu',
    civ: 'Civilisation Juive',
    era: 'Xe s. av. J.-C. — Présent',
    color: '#a8b8d0',
    description: "L'hébreu est l'une des rares langues anciennes à avoir été ressuscitées comme langue vivante moderne. Dans la tradition juive, chaque lettre de l'alphabet possède une valeur numérique — la Guématrie. La lettre He (ה) incarne le chiffre 5 sur le cadran."
  },
  {
    num: 6,
    roman: 'VI',
    script: '๖',
    name: 'Thaï',
    civ: 'Thaïlande',
    era: 'XIIIe s. ap. J.-C.',
    color: '#70c0a0',
    description: "Le chiffre 6 en écriture thaï (๖), marquant la 6e heure. Une esthétique unique issue du royaume de Sukhothaï, célébrant l'identité et l'art de l'Asie du Sud-Est."
  },
  {
    num: 7,
    roman: 'VII',
    script: '⴦',
    name: 'Géorgien',
    civ: 'Géorgie',
    era: 'Antiquité tardive',
    color: '#c07070',
    description: "Le chiffre 7 en alphabet géorgien (⴦). Un peuple à l'écriture et à la langue uniques, gardien d'une culture caucasienne chrétienne extrêmement ancienne."
  },
  {
    num: 8,
    roman: 'VIII',
    script: '፰',
    name: "Ge'ez",
    civ: 'Éthiopie Ancienne',
    era: 'IVe s. ap. J.-C.',
    color: '#c8a835',
    description: "Le chiffre 8 en écriture éthiopienne Ge'ez (፰). L'Éthiopie a conservé une tradition écrite continue parmi les plus anciennes du continent africain."
  },
  {
    num: 9,
    roman: 'IX',
    script: 'Θ',
    name: 'Grec',
    civ: 'Grèce Antique',
    era: 'VIIIe — IIe s. av. J.-C.',
    color: '#a0b8d8',
    description: "Athènes a inventé la démocratie, la philosophie et le théâtre en moins de deux siècles. Le symbole grec Theta (Θ) représente ici la 9e heure, évoquant les géomètres d'Euclide."
  },
  {
    num: 10,
    roman: 'X',
    script: '十',
    name: 'Chinois',
    civ: 'Civilisation Chinoise',
    era: 'IIe millénaire av. J.-C.',
    color: '#e8a060',
    description: "La Chine a inventé simultanément quatre technologies majeures : le papier, l'imprimerie, la boussole et la poudre à canon. Le caractère 十 représente le chiffre 10 avec force et pureté."
  },
  {
    num: 11,
    roman: 'XI',
    script: '𒌋𒁹',
    name: 'Cunéiforme',
    civ: 'Sumer & Mésopotamie',
    era: '3500 — 539 av. J.-C.',
    color: '#c880c0',
    description: "Entre le Tigre et l'Euphrate naquit la première civilisation urbaine et l'écriture cunéiforme. Leur système sexagésimal (base 60) nous a légué les 60 minutes d'une heure. Le nombre 11 s'écrit avec 10 (𒌋) et 1 (𒁹) : 𒌋𒁹."
  },
  {
    num: 12,
    roman: 'XII',
    script: 'XII',
    name: 'Latin',
    civ: 'Rome & Occident',
    era: 'VIIIe s. av. J.-C. — Ve s. ap. J.-C.',
    color: '#d4af37',
    description: "L'Empire romain a unifié l'Europe sous une seule langue et un seul droit. Les chiffres romains ornaient les cadrans solaires des forums. XII marque midi, l'apogée du cadran."
  },
];

const SPECS = [
  ['Mouvement',     'Sellita SW200-2 Mᵇ Power+ · Remontage manuel · Swiss Made'],
  ['Boîtier',       '39 mm · Épaisseur 11,5 mm · Entre-cornes 20 mm'],
  ['Finition Or Blanc', 'Laiton PVD Or Blanc · Cadran blanc champagne laqué'],
  ['Finition Acier Noir', 'Acier 316L Noir · Cadran laque noir ardoise'],
  ['Cristal',       'Saphir bombé double face anti-reflet · Dureté 9 Mohs'],
  ['Fond',          'Saphir transparent · Mouvement visible de l\'arrière'],
  ['Étanchéité',    '50 m / 5 ATM · Résiste aux éclaboussures quotidiennes'],
  ['Bracelet',      'Cuir veau véritable · Largeur 20 mm · Boucle ardillon'],
  ['Tirage limité', '24 exemplaires numérotés : 12 Or Blanc + 12 Acier Noir'],
  ['Édition ouverte', 'Or Blanc & Acier Noir · Sans limite · 1 500 €'],
];

const FAQ = [
  {
    q: 'Quand serai-je livré ?',
    a: 'Livraison estimée au premier trimestre 2027. Chaque backer recevra un suivi individuel avec mises à jour mensuelles pendant toute la phase de production.',
  },
  {
    q: 'Les fonds sont-ils sécurisés ?',
    a: 'Oui. Kickstarter fonctionne sur le principe du tout-ou-rien : les fonds ne sont collectés que si l\'objectif est atteint. Zéro risque financier pour les contributeurs.',
  },
  {
    q: 'Quelle est la différence entre Édition Fondateur et Édition Ouverte ?',
    a: 'L\'Édition Fondateur est limitée à 24 pièces numérotées (12 Or Blanc + 12 Acier Noir). Chaque pièce porte un numéro lié à une civilisation (I à XII). L\'Édition Ouverte propose les mêmes finitions sans numérotation ni limitation.',
  },
  {
    q: 'La montre est-elle halal-compatible ?',
    a: 'Oui. Aucun composant n\'utilise d\'or massif. Le revêtement PVD offre un éclat similaire tout en respectant les exigences éthiques de la collection.',
  },
  {
    q: 'Puis-je choisir mon numéro de pièce ?',
    a: 'Absolument. L\'Édition Fondateur vous permet de réserver un numéro spécifique de I à XII. Chaque numéro correspond à une civilisation unique gravée sur le cadran.',
  },
];

const TIMELINE = [
  { date: 'Juillet 2026',       title: 'Lancement Kickstarter',     desc: 'Présentation officielle et ouverture des réservations.', done: true,  active: false },
  { date: 'Août — Oct. 2026',   title: 'Sourcing & Prototypage',    desc: 'Commandes des mouvements Sellita et validation finale des cadrans laqués.', done: false, active: true  },
  { date: 'Nov. 2026 — Fév. 2027', title: 'Assemblage & Contrôle',  desc: 'Assemblage manuel par nos horlogers partenaires et contrôles chronométriques.', done: false, active: false },
  { date: 'Mars — Avr. 2027',   title: 'Livraison Backers',         desc: 'Expédition mondiale sécurisée avec écrins et certificats.', done: false, active: false },
  { date: 'Juillet 2027',       title: 'Édition Ouverte',           desc: 'Lancement officiel de la collection continue non limitée.', done: false, active: false },
];

const PRODS = [
  { nom: 'Sellita', sp: 'Mouvements mécaniques', lieu: 'La Chaux-de-Fonds' },
  { nom: 'Bryek', sp: 'Boîtiers de haute précision', lieu: 'Genève' },
  { nom: 'Combettes', sp: 'Cadrans d\'exception laqués', lieu: 'Jura suisse' },
];

/* ─── STYLES ─────────────────────────────────────────────────────────── */

const GOLD_GRADIENT = 'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 35%, #D4A843 60%, #BF9733 100%)';
const GOLD = '#C8A84B';

/* ─── COMPONENT ──────────────────────────────────────────────────────── */

export default function KickstarterPage() {
  const [selectedNum, setSelectedNum] = useState(1);
  const [version, setVersion] = useState<'or-blanc' | 'acier-noir'>('or-blanc');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const civ = CIVS[selectedNum - 1];
  const watchImage = version === 'or-blanc' ? '/watches/or-blanc.png' : '/watches/acier-noir.png';

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#FFFFFF', color: '#111', minHeight: '100vh' }}>

      {/* ═══════ HERO ═══════ */}
      <section
        style={{
          position: 'relative',
          minHeight: mobile ? '85vh' : '100vh',
          background: 'linear-gradient(135deg, #0f0e0a 0%, #1c1608 55%, #0c0b06 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Radial glow */}
        <div style={{
          position: 'absolute', width: '800px', height: '800px',
          borderRadius: '50%', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(200,168,75,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative', zIndex: 1,
          maxWidth: 1100, width: '100%',
          padding: mobile ? '120px 24px 60px' : '0 48px',
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
          gap: mobile ? 32 : 64,
          alignItems: 'center',
        }}>
          {/* Left — Text */}
          <div>
            <p style={{
              fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'rgba(220,190,120,0.8)', marginBottom: 20,
            }}>
              Campagne Kickstarter · En Direct
            </p>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: mobile ? '2.4rem' : '3.6rem',
              lineHeight: 1.05, fontWeight: 400, color: '#fff',
              letterSpacing: '0.02em', marginBottom: 20,
            }}>
              ALMA<br />
              <em style={{
                fontStyle: 'italic',
                background: GOLD_GRADIENT,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                BABEL
              </em>
            </h1>
            <p style={{
              fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.8, maxWidth: 440, marginBottom: 32, fontWeight: 300,
            }}>
              12 civilisations. 24 pièces numérotées. Une montre Swiss Made qui réunit
              les plus grands systèmes de numération de l&apos;humanité sur un seul cadran.
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: mobile ? 24 : 40, marginBottom: 32 }}>
              {[
                { value: '28 150 €', label: 'Collectés' },
                { value: '183',      label: 'Backers' },
                { value: '67%',      label: 'Financé' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: mobile ? '1.3rem' : '1.6rem', fontWeight: 700, color: '#fff' }}>{s.value}</div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div style={{ height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 2, marginBottom: 32, maxWidth: 340 }}>
              <div style={{ width: '67%', height: '100%', background: GOLD_GRADIENT, borderRadius: 2 }} />
            </div>

            <a
              href="#pledge"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                background: GOLD_GRADIENT, color: '#111',
                padding: '14px 36px', borderRadius: 4,
                fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Soutenir le Projet →
            </a>
          </div>

          {/* Right — Watch image */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/watches/or-blanc.png"
              alt="ALMA BABEL Or Blanc"
              style={{
                width: mobile ? '70vw' : '380px',
                maxWidth: 400,
                filter: 'drop-shadow(0 20px 60px rgba(200,168,75,0.15))',
              }}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 28, left: '50%',
          transform: 'translateX(-50%)', zIndex: 10,
        }}>
          <div style={{
            width: 1, height: 40,
            background: 'linear-gradient(to bottom, rgba(200,168,75,0.6), transparent)',
          }} />
        </div>
      </section>

      {/* ═══════ CONCEPT & HISTOIRE DU PROJET ═══════ */}
      <section style={{ padding: mobile ? '64px 24px' : '100px 48px', background: '#fff' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ width: 1, height: 48, background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)`, margin: '0 auto 32px' }} />
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.3em', color: GOLD, textTransform: 'uppercase', fontWeight: 700, marginBottom: 12 }}>
              Le Manifeste ALMA
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: mobile ? '1.8rem' : '2.8rem',
              fontWeight: 400, letterSpacing: '0.04em',
              lineHeight: 1.15, color: '#111',
            }}>
              L&apos;Art du Temps Sans Frontière
            </h2>
            <div style={{ width: 56, height: 1, background: GOLD, margin: '24px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 40, fontSize: '0.9rem', color: '#555', lineHeight: 1.8, fontWeight: 300 }}>
            <div>
              <p style={{ marginBottom: 20 }}>
                Depuis des siècles, la haute horlogerie conçoit le temps à travers un prisme unique, principalement européen ou occidental. Les cadrans classiques affichent des chiffres romains ou arabes standardisés, effaçant la richesse des autres cultures.
              </p>
              <p>
                <strong>ALMA BABEL</strong> est née d&apos;un défi simple mais audacieux : concevoir un cadran universel qui rende hommage aux plus grands esprits mathématiques et scripturaux de l&apos;humanité. De la première notation cunéiforme de Sumer aux caractères traditionnels d&apos;Asie de l&apos;Est, chaque heure est une porte ouverte sur une époque et un génie spécifiques.
              </p>
            </div>
            <div>
              <p style={{ marginBottom: 20 }}>
                Ce projet n&apos;est pas seulement une pièce d&apos;horlogerie de prestige, c&apos;est un manifeste culturel à votre poignet. Nous croyons que la mesure du temps appartient à toute l&apos;humanité. En portant cette montre, vous portez l&apos;héritage de douze civilisations qui ont, chacune à leur façon, façonné notre science et notre philosophie actuelles.
              </p>
              <p>
                Pour garantir une intégrité totale et un respect des convictions de chacun, toutes les versions sont garanties <strong>sans or massif (halal-compatible)</strong> grâce à un revêtement de placage PVD de pointe, et sont assemblées en Suisse avec des mouvements de manufacture prestigieuse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ L'HISTOIRE DÉTAILLÉE DES 12 CIVILISATIONS ═══════ */}
      <section style={{ padding: mobile ? '64px 24px' : '100px 48px', background: '#F8F7F5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: GOLD, textTransform: 'uppercase', fontWeight: 600, marginBottom: 8 }}>
              Le Cadran Philosophique
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: mobile ? '1.6rem' : '2.4rem',
              fontWeight: 400, letterSpacing: '0.04em', color: '#111',
            }}>
              L&apos;Histoire de Chaque Heure
            </h2>
            <div style={{ width: 40, height: 1, background: GOLD, margin: '16px auto 0' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {CIVS.map(c => (
              <div
                key={c.num}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.05)',
                  borderRadius: 10,
                  padding: mobile ? '24px 20px' : '32px 40px',
                  display: 'grid',
                  gridTemplateColumns: mobile ? '1fr' : '80px 1fr',
                  gap: mobile ? 20 : 32,
                  alignItems: 'start',
                }}
              >
                {/* Symbol/Heure */}
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  borderRight: mobile ? 'none' : '1px solid rgba(0,0,0,0.06)',
                  paddingRight: mobile ? 0 : 32,
                }}>
                  <span style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '2.2rem', fontWeight: 400, color: c.color,
                    lineHeight: 1, marginBottom: 6,
                  }}>
                    {c.script}
                  </span>
                  <span style={{ fontSize: '0.65rem', color: '#999', letterSpacing: '0.05em', fontWeight: 600 }}>
                    HEURE {c.roman}
                  </span>
                </div>

                {/* Lore / Description */}
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.25rem', fontWeight: 500, margin: 0, color: '#111' }}>
                      {c.civ}
                    </h3>
                    <span style={{ fontSize: '0.72rem', color: GOLD, fontWeight: 500, letterSpacing: '0.04em' }}>
                      ({c.era})
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SAVOIR-FAIRE & PARTENAIRES HORLOGERS ═══════ */}
      <section style={{ padding: mobile ? '64px 24px' : '100px 48px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: GOLD, textTransform: 'uppercase', fontWeight: 600, marginBottom: 8 }}>
              Artisanat & Technique
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: mobile ? '1.6rem' : '2.4rem',
              fontWeight: 400, letterSpacing: '0.04em', color: '#111',
            }}>
              L&apos;Excellence du Swiss Made
            </h2>
            <div style={{ width: 40, height: 1, background: GOLD, margin: '16px auto 0' }} />
          </div>

          <p style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.85, fontWeight: 300, textAlign: 'center', maxWidth: 700, margin: '0 auto 48px' }}>
            Pour faire honneur à l&apos;histoire de ces civilisations, nous avons refusé tout compromis sur la qualité. Chaque montre est manufacturée et réglée dans le Jura suisse par des artisans de confiance.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr 1fr', gap: 20, marginBottom: 56 }}>
            {PRODS.map((p, i) => (
              <div
                key={i}
                style={{
                  background: '#F8F7F5', border: '1px solid rgba(0,0,0,0.04)',
                  borderRadius: 8, padding: 24, textAlign: 'center',
                }}
              >
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.4rem', color: GOLD, marginBottom: 8,
                }}>
                  {p.nom}
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#333', marginBottom: 4 }}>
                  {p.sp}
                </div>
                <div style={{ fontSize: '0.7rem', color: '#888', fontWeight: 300 }}>
                  {p.lieu}
                </div>
              </div>
            ))}
          </div>

          {/* Fabrication Steps */}
          <div style={{ background: '#F8F7F5', borderRadius: 12, padding: mobile ? 24 : 40 }}>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.25rem', fontWeight: 500, marginBottom: 24, textAlign: 'center' }}>
              Les Étapes de Conception
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { step: '1', title: 'Usinage des boîtiers', desc: 'Réalisé à Genève par Bryek, offrant des tolérances au centième de millimètre pour le boîtier coussin de 39 mm.' },
                { step: '2', title: 'Laquage du cadran', desc: 'Chaque cadran reçoit plusieurs couches de laque polie miroir pour une profondeur unique qui sublime les index.' },
                { step: '3', title: 'Assemblage & Calibrage', desc: 'Le mouvement mécanique Sellita est emboîté à la main, suivi d\'un contrôle de marche de 72 heures sur chronocomparateur.' },
              ].map((s, idx) => (
                <div key={idx} style={{ display: 'flex', gap: 20, alignItems: 'start' }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%', background: GOLD, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem',
                    fontWeight: 700, flexShrink: 0,
                  }}>
                    {s.step}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 600, margin: '0 0 4px 0', color: '#111' }}>{s.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: '#666', margin: 0, fontWeight: 300, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ RESERVATION / CONFIGURATEUR ═══════ */}
      <section id="pledge" style={{
        padding: mobile ? '64px 24px' : '100px 48px',
        background: 'linear-gradient(135deg, #0f0e0a 0%, #1c1608 55%, #0c0b06 100%)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: GOLD, textTransform: 'uppercase', fontWeight: 600, textAlign: 'center', marginBottom: 8 }}>
            Édition Fondateur · 24 Pièces
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: mobile ? '1.6rem' : '2.2rem',
            fontWeight: 400, textAlign: 'center', letterSpacing: '0.04em',
            color: '#fff', marginBottom: 12,
          }}>
            Réservez Votre Numéro
          </h2>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginBottom: 48, fontWeight: 300 }}>
            Choisissez la civilisation qui vous parle — votre numéro vous sera réservé.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: mobile ? '1fr' : '1fr 420px',
            gap: mobile ? 32 : 64,
            alignItems: 'start',
          }}>
            {/* Left — Number grid */}
            <div>
              <p style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>
                Sélectionnez votre numéro (I – XII)
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: mobile ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
                gap: 10,
                marginBottom: 32,
              }}>
                {CIVS.map(c => (
                  <button
                    key={c.num}
                    onClick={() => setSelectedNum(c.num)}
                    style={{
                      height: 64, borderRadius: 8,
                      border: selectedNum === c.num ? `2px solid ${c.color}` : '1px solid rgba(255,255,255,0.08)',
                      background: selectedNum === c.num ? `${c.color}18` : 'rgba(255,255,255,0.03)',
                      color: selectedNum === c.num ? '#fff' : 'rgba(255,255,255,0.4)',
                      cursor: 'pointer', transition: 'all 0.2s',
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center', gap: 2,
                    }}
                  >
                    <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontWeight: 500 }}>{c.script}</span>
                    <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em', opacity: 0.6 }}>{c.roman}</span>
                  </button>
                ))}
              </div>

              {/* Version selector */}
              <p style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 600 }}>
                Finition
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 32 }}>
                {(['or-blanc', 'acier-noir'] as const).map(v => (
                  <button
                    key={v}
                    onClick={() => setVersion(v)}
                    style={{
                      padding: '14px 0', borderRadius: 6,
                      border: version === v ? `2px solid ${v === 'or-blanc' ? GOLD : '#aaa'}` : '1px solid rgba(255,255,255,0.08)',
                      background: version === v ? (v === 'or-blanc' ? 'rgba(200,168,75,0.1)' : 'rgba(255,255,255,0.06)') : 'transparent',
                      color: version === v ? '#fff' : 'rgba(255,255,255,0.4)',
                      cursor: 'pointer', fontSize: '0.7rem', fontWeight: 600,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      transition: 'all 0.2s',
                    }}
                  >
                    {v === 'or-blanc' ? '✦ Or Blanc' : '⚙ Acier Noir'}
                  </button>
                ))}
              </div>

              {/* Selected info */}
              <div style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8, padding: 20,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                  <div style={{
                    width: 50, height: 50, borderRadius: '50%',
                    background: `${civ.color}20`, border: `2px solid ${civ.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.3rem', color: civ.color,
                  }}>
                    {civ.script}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>
                      Pièce {civ.roman} · {civ.name}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)' }}>
                      {civ.civ} · {civ.era} · {version === 'or-blanc' ? 'Or Blanc' : 'Acier Noir'}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <span style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.5rem', color: '#fff',
                    }}>4 500 €</span>
                    <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', marginLeft: 10 }}>Acompte 1 700 €</span>
                  </div>
                  <span style={{ fontSize: '0.6rem', color: GOLD, letterSpacing: '0.1em', fontWeight: 700 }}>
                    N° {String(civ.num).padStart(2, '0')}/12
                  </span>
                </div>
              </div>
            </div>

            {/* Right — Watch image */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <div style={{
                borderRadius: '50%',
                border: `1px solid ${version === 'or-blanc' ? 'rgba(200,168,75,0.2)' : 'rgba(255,255,255,0.08)'}`,
                padding: 20,
              }}>
                <img
                  src={watchImage}
                  alt={`ALMA BABEL ${version === 'or-blanc' ? 'Or Blanc' : 'Acier Noir'}`}
                  style={{
                    width: mobile ? '60vw' : 320,
                    maxWidth: 340,
                    filter: `drop-shadow(0 20px 60px ${version === 'or-blanc' ? 'rgba(200,168,75,0.15)' : 'rgba(0,0,0,0.4)'})`,
                    transition: 'all 0.4s',
                  }}
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.6rem', letterSpacing: '0.2em',
                  background: GOLD_GRADIENT,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 700,
                }}>
                  BABEL · {version === 'or-blanc' ? 'OR BLANC' : 'ACIER NOIR'}
                </div>
                <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', marginTop: 4 }}>
                  PIÈCE {civ.roman} · {civ.name} · {civ.era}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CONTREPARTIES ET GRILLES DE PRIX ═══════ */}
      <section style={{ padding: mobile ? '64px 24px' : '100px 48px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: GOLD, textTransform: 'uppercase', fontWeight: 600, textAlign: 'center', marginBottom: 8 }}>
            Les Récompenses
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: mobile ? '1.6rem' : '2.2rem',
            fontWeight: 400, textAlign: 'center', letterSpacing: '0.04em',
            marginBottom: 48,
          }}>
            Choisissez Votre Édition
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
            gap: 32,
          }}>
            {/* CARD 1 — Fondateur */}
            <div style={{
              background: 'linear-gradient(135deg, #0f0e0a 0%, #1a1508 100%)',
              border: '1px solid rgba(200,168,75,0.2)',
              borderRadius: 12, padding: mobile ? 28 : 40,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: GOLD_GRADIENT }} />
              <p style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: GOLD, textTransform: 'uppercase', fontWeight: 700, marginBottom: 16 }}>
                ◆ Édition Fondateur · 24 Pièces
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '2.4rem', fontWeight: 400, color: '#fff',
                }}>4 500 €</span>
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}>/ pièce</span>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', marginBottom: 8 }}>
                Acompte de réservation : <strong style={{ color: GOLD }}>1 700 €</strong>
              </p>
              <div style={{ width: 40, height: 1, background: 'rgba(200,168,75,0.3)', marginBottom: 20 }} />

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0' }}>
                {[
                  '12 exemplaires Or Blanc + 12 Acier Noir',
                  'Numéro de pièce réservé (I → XII)',
                  'Sellita SW200 · Swiss Made',
                  'Cristal saphir bombé double face AR',
                  'Écrin bois laqué + velours',
                  'Livret des 12 civilisations',
                  'Certificat numéroté & signé',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', padding: '5px 0 5px 20px', position: 'relative', fontWeight: 300 }}>
                    <span style={{ position: 'absolute', left: 0, color: GOLD }}>✓</span>{item}
                  </li>
                ))}
              </ul>

              <a href="#pledge" style={{
                display: 'block', textAlign: 'center',
                background: GOLD_GRADIENT, color: '#111',
                padding: '13px 0', borderRadius: 4,
                fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                textDecoration: 'none',
              }}>
                Réserver Mon Numéro →
              </a>
            </div>

            {/* CARD 2 — Édition Ouverte */}
            <div style={{
              background: '#FAFAF8',
              border: '1px solid rgba(184,150,10,0.2)',
              borderRadius: 12, padding: mobile ? 28 : 40,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #e0e0e0, #ccc, #e0e0e0)' }} />
              <p style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#999', textTransform: 'uppercase', fontWeight: 700, marginBottom: 16 }}>
                ∞ Édition Ouverte · Sans Limite
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '2.4rem', fontWeight: 400, color: '#222',
                }}>1 500 €</span>
                <span style={{ fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.08em' }}>/ pièce</span>
              </div>
              <p style={{ fontSize: '0.72rem', color: '#999', marginBottom: 8 }}>
                Disponible en Or Blanc & Acier Noir
              </p>
              <div style={{ width: 40, height: 1, background: 'rgba(0,0,0,0.08)', marginBottom: 20 }} />

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0' }}>
                {[
                  'Finitions Or Blanc & Acier Noir',
                  'Production sans limite de tirage',
                  'Sans numérotation I — XII',
                  'Sellita SW200 · Swiss Made',
                  'Cristal saphir bombé double face AR',
                  'Livret des 12 civilisations',
                  'Accès communauté backers',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.78rem', color: '#666', padding: '5px 0 5px 20px', position: 'relative', fontWeight: 300 }}>
                    <span style={{ position: 'absolute', left: 0, color: GOLD }}>✓</span>{item}
                  </li>
                ))}
              </ul>

              <a href="#pledge" style={{
                display: 'block', textAlign: 'center',
                background: '#222', color: '#fff',
                padding: '13px 0', borderRadius: 4,
                fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                textDecoration: 'none',
              }}>
                Commander · Édition Ouverte →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SPÉCIFICATIONS ═══════ */}
      <section style={{ padding: mobile ? '64px 24px' : '100px 48px', background: '#fff' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: GOLD, textTransform: 'uppercase', fontWeight: 600, textAlign: 'center', marginBottom: 8 }}>
            Détails Techniques
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: mobile ? '1.6rem' : '2.2rem',
            fontWeight: 400, textAlign: 'center', letterSpacing: '0.04em',
            marginBottom: 40,
          }}>
            Spécifications
          </h2>

          <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            {SPECS.map(([label, value], i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: mobile ? '1fr' : '200px 1fr',
                padding: '16px 0',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
                gap: mobile ? 2 : 0,
              }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#444', letterSpacing: '0.04em' }}>{label}</span>
                <span style={{ fontSize: '0.78rem', color: '#888', fontWeight: 300 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TIMELINE ═══════ */}
      <section style={{ padding: mobile ? '64px 24px' : '100px 48px', background: '#F8F7F5' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: GOLD, textTransform: 'uppercase', fontWeight: 600, textAlign: 'center', marginBottom: 8 }}>
            Calendrier
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: mobile ? '1.6rem' : '2.2rem',
            fontWeight: 400, textAlign: 'center', letterSpacing: '0.04em',
            marginBottom: 48,
          }}>
            Roadmap 2026 — 2027
          </h2>

          <div style={{ position: 'relative', paddingLeft: mobile ? 24 : 40 }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: mobile ? 6 : 14, top: 0, bottom: 0,
              width: 1, background: 'rgba(184,150,10,0.2)',
            }} />

            {TIMELINE.map((t, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: 32 }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: mobile ? -21 : -29,
                  top: 4, width: 10, height: 10, borderRadius: '50%',
                  background: t.done ? GOLD : (t.active ? '#fff' : '#ddd'),
                  border: t.active ? `2px solid ${GOLD}` : 'none',
                  boxShadow: t.active ? `0 0 12px rgba(200,168,75,0.4)` : 'none',
                }} />
                <div style={{ fontSize: '0.6rem', color: t.done ? GOLD : '#aaa', letterSpacing: '0.12em', fontWeight: 700, marginBottom: 4, textTransform: 'uppercase' }}>
                  {t.date}
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 600, color: t.active ? '#222' : '#666', marginBottom: 2 }}>
                  {t.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#888', fontWeight: 300, lineHeight: 1.5 }}>
                  {t.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section style={{ padding: mobile ? '64px 24px' : '100px 48px', background: '#fff' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: GOLD, textTransform: 'uppercase', fontWeight: 600, textAlign: 'center', marginBottom: 8 }}>
            Questions Fréquentes
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: mobile ? '1.6rem' : '2.2rem',
            fontWeight: 400, textAlign: 'center', letterSpacing: '0.04em',
            marginBottom: 48,
          }}>
            FAQ
          </h2>

          {FAQ.map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '0.88rem', fontWeight: 500, color: '#333', textAlign: 'left',
                }}
              >
                <span>{item.q}</span>
                <span style={{
                  fontSize: '1.2rem', color: GOLD,
                  transform: openFaq === i ? 'rotate(45deg)' : 'none',
                  transition: 'transform 0.3s',
                }}>+</span>
              </button>
              {openFaq === i && (
                <p style={{ fontSize: '0.82rem', color: '#777', lineHeight: 1.8, fontWeight: 300, paddingBottom: 20 }}>
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ CTA FINAL ═══════ */}
      <section style={{
        padding: mobile ? '64px 24px' : '100px 48px',
        background: 'linear-gradient(135deg, #0f0e0a 0%, #1c1608 55%, #0c0b06 100%)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.6rem', letterSpacing: '0.35em',
            background: GOLD_GRADIENT,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 20,
          }}>
            ALMA
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: mobile ? '1.6rem' : '2rem',
            fontWeight: 400, color: '#fff',
            letterSpacing: '0.04em', marginBottom: 16, lineHeight: 1.3,
          }}>
            Le temps de l&apos;humanité,<br />à votre poignet.
          </h2>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginBottom: 36, fontWeight: 300, lineHeight: 1.7 }}>
            Rejoignez les 183 backers qui ont déjà réservé leur pièce.<br />
            24 exemplaires numérotés. 12 civilisations. Swiss Made.
          </p>
          <a
            href="#pledge"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              background: GOLD_GRADIENT, color: '#111',
              padding: '14px 40px', borderRadius: 4,
              fontSize: '0.68rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Soutenir le Projet →
          </a>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer style={{ borderTop: '1px solid rgba(0,0,0,0.07)', padding: '56px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
          <div style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.6rem', letterSpacing: '0.3em',
            background: GOLD_GRADIENT,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            ALMA
          </div>
          <div style={{ display: 'flex', gap: 32, fontSize: '0.65rem', color: 'rgba(0,0,0,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Accueil</Link>
            <Link href="/collection" style={{ textDecoration: 'none', color: 'inherit' }}>Collection</Link>
            <Link href="/histoire" style={{ textDecoration: 'none', color: 'inherit' }}>Histoire</Link>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 40, fontSize: '0.65rem', color: 'rgba(0,0,0,0.2)', letterSpacing: '0.1em' }}>
          © 2026 ALMA. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
