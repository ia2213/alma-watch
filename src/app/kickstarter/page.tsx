'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

/* ─── DATA ───────────────────────────────────────────────────────────── */

const CIVS = [
  { num:1,  roman:'I',    script:'١',    name:'Arabe',         civ:'Civilisation Islamique',        era:'7e s. ap. J.-C.',  color:'#d4af37' },
  { num:2,  roman:'II',   script:'২',    name:'Bengali',       civ:'Monde Bengali',                 era:'10e s. ap. J.-C.', color:'#c0a060' },
  { num:3,  roman:'III',  script:'3',    name:'Moderne',       civ:'Monde contemporain',            era:'Époque moderne',   color:'#b8b8b8' },
  { num:4,  roman:'IV',   script:'– – – –', name:'Traits',     civ:'Système additif primitif',      era:'Antiquité',        color:'#c8a84b' },
  { num:5,  roman:'V',    script:'ה',    name:'Hébreu',        civ:'Civilisation Juive',            era:'10e s. av. J.-C.', color:'#a8b8d0' },
  { num:6,  roman:'VI',   script:'๖',    name:'Thaï',          civ:'Thaïlande',                     era:'13e s. ap. J.-C.', color:'#70c0a0' },
  { num:7,  roman:'VII',  script:'⴦',    name:'Géorgien',      civ:'Géorgie',                       era:'Antiquité tardive',color:'#c07070' },
  { num:8,  roman:'VIII', script:'፰',    name:"Ge'ez",         civ:'Éthiopie Ancienne',             era:'4e s. ap. J.-C.',  color:'#c8a835' },
  { num:9,  roman:'IX',   script:'Θ',    name:'Grec',          civ:'Grèce Antique',                 era:'8e s. av. J.-C.',  color:'#a0b8d8' },
  { num:10, roman:'X',    script:'十',   name:'Chinois',       civ:'Civilisation Chinoise',         era:'2e s. av. J.-C.',  color:'#e8a060' },
  { num:11, roman:'XI',   script:'𒌋𒁹',  name:'Cunéiforme',    civ:'Sumer & Mésopotamie',           era:'3200 av. J.-C.',   color:'#c880c0' },
  { num:12, roman:'XII',  script:'XII',  name:'Latin',         civ:'Rome & Occident',               era:'7e s. av. J.-C.',  color:'#d4af37' },
];

const SPECS = [
  ['Mouvement',     'Sellita SW200-2 · Remontage manuel · Swiss Made'],
  ['Boîtier',       '39 mm · Épaisseur 11,5 mm · Entre-cornes 20 mm'],
  ['Finition Or Blanc', 'Laiton PVD Or · Cadran blanc champagne'],
  ['Finition Acier Noir', 'Acier 316L · Cadran laque noir ardoise'],
  ['Cristal',       'Saphir bombé double face anti-reflet · 9 Mohs'],
  ['Fond',          'Saphir transparent · Mouvement visible'],
  ['Étanchéité',    '50 m / 5 ATM'],
  ['Bracelet',      'Cuir veau véritable · Largeur 20 mm'],
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
  { date: 'Juillet 2026',       title: 'Lancement Kickstarter',     done: true,  active: false },
  { date: 'Août — Oct. 2026',   title: 'Sourcing & Prototypage',    done: false, active: true  },
  { date: 'Nov. 2026 — Fév. 2027', title: 'Assemblage & Contrôle',  done: false, active: false },
  { date: 'Mars — Avr. 2027',   title: 'Livraison Backers',         done: false, active: false },
  { date: 'Juillet 2027',       title: 'Édition Ouverte',           done: false, active: false },
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

      {/* ═══════ CONCEPT ═══════ */}
      <section style={{ padding: mobile ? '64px 24px' : '100px 48px', background: '#fff' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: 1, height: 48, background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)`, margin: '0 auto 32px' }} />
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: mobile ? '1.8rem' : '2.6rem',
            fontWeight: 400, letterSpacing: '0.04em',
            marginBottom: 20, lineHeight: 1.15,
          }}>
            Le Temps N&apos;Appartient<br />à Aucune Frontière.
          </h2>
          <div style={{ width: 56, height: 1, background: GOLD, margin: '0 auto 24px' }} />
          <p style={{ fontSize: '0.92rem', color: '#666', lineHeight: 1.85, fontWeight: 300, maxWidth: 600, margin: '0 auto' }}>
            BABEL réunit sur un seul cadran les systèmes de numération des plus grandes civilisations :
            Rome, Sumer, le monde arabe, la Chine, l&apos;Éthiopie, la Grèce… Chaque heure raconte une histoire millénaire.
            Mouvement Sellita SW200, assemblé en Suisse, dans un boîtier de 39 mm.
          </p>
        </div>
      </section>

      {/* ═══════ 12 CIVILISATIONS ═══════ */}
      <section style={{ padding: mobile ? '48px 24px 64px' : '80px 48px 100px', background: '#F8F7F5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: GOLD, textTransform: 'uppercase', fontWeight: 600, textAlign: 'center', marginBottom: 8 }}>
            Le Cadran
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: mobile ? '1.6rem' : '2.2rem',
            fontWeight: 400, textAlign: 'center', letterSpacing: '0.04em',
            marginBottom: 48,
          }}>
            Douze Civilisations. Douze Heures.
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: mobile ? 12 : 16,
          }}>
            {CIVS.map(c => (
              <div key={c.num} style={{
                background: '#fff',
                border: `1px solid rgba(184,150,10,0.15)`,
                borderRadius: 8, padding: mobile ? '16px 12px' : '22px 18px',
                textAlign: 'center',
                transition: 'all 0.3s',
                cursor: 'default',
              }}>
                <div style={{ fontSize: mobile ? '1.6rem' : '2rem', marginBottom: 6, fontFamily: "'Playfair Display', Georgia, serif", color: c.color }}>
                  {c.script}
                </div>
                <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', color: '#444', textTransform: 'uppercase', marginBottom: 4 }}>
                  {c.roman} · {c.name}
                </div>
                <div style={{ fontSize: '0.6rem', color: '#999', fontWeight: 300 }}>
                  {c.era}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ LES DEUX ÉDITIONS ═══════ */}
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

      {/* ═══════ RÉSERVATION FONDATEUR ═══════ */}
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
              <div key={i} style={{ position: 'relative', marginBottom: 28 }}>
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
                <div style={{ fontSize: '0.92rem', fontWeight: 600, color: t.active ? '#222' : '#666' }}>
                  {t.title}
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
