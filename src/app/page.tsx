'use client';
import Link from 'next/link';

// Horloge SVG animée 100% CSS — aucune dépendance externe
function AnimatedClock() {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.18,
      }}
    >
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1408" />
          <stop offset="100%" stopColor="#050505" />
        </radialGradient>
        <radialGradient id="faceGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1c1810" />
          <stop offset="100%" stopColor="#0d0b07" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style>{`
          @keyframes rotateSecond {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes rotateMinute {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes rotateHour {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          .hand-second {
            transform-origin: 200px 200px;
            animation: rotateSecond 10s linear infinite;
          }
          .hand-minute {
            transform-origin: 200px 200px;
            animation: rotateMinute 60s linear infinite;
          }
          .hand-hour {
            transform-origin: 200px 200px;
            animation: rotateHour 720s linear infinite;
          }
        `}</style>
      </defs>

      {/* Fond */}
      <rect width="400" height="400" fill="url(#bgGrad)" />

      {/* Anneau extérieur or */}
      <circle cx="200" cy="200" r="180" fill="none" stroke="#C8A84B" strokeWidth="3" opacity="0.6" />
      <circle cx="200" cy="200" r="174" fill="none" stroke="#8B6914" strokeWidth="1" opacity="0.4" />

      {/* Face cadran */}
      <circle cx="200" cy="200" r="172" fill="url(#faceGrad)" />

      {/* 60 graduations */}
      {Array.from({ length: 60 }, (_, i) => {
        const angle = (i * 6 * Math.PI) / 180;
        const isHour = i % 5 === 0;
        const r1 = isHour ? 148 : 158;
        const r2 = 170;
        const x1 = 200 + r1 * Math.sin(angle);
        const y1 = 200 - r1 * Math.cos(angle);
        const x2 = 200 + r2 * Math.sin(angle);
        const y2 = 200 - r2 * Math.cos(angle);
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={isHour ? '#C8A84B' : '#5a4a1a'}
            strokeWidth={isHour ? 3 : 1}
            opacity={isHour ? 0.9 : 0.5}
          />
        );
      })}

      {/* Chiffres romains aux 12 positions */}
      {[
        { n: 'XII', angle: 0,   r: 128 },
        { n: 'III', angle: 90,  r: 128 },
        { n: 'VI',  angle: 180, r: 128 },
        { n: 'IX',  angle: 270, r: 128 },
      ].map(({ n, angle, r }) => {
        const rad = (angle * Math.PI) / 180;
        const x = 200 + r * Math.sin(rad);
        const y = 200 - r * Math.cos(rad);
        return (
          <text
            key={n}
            x={x} y={y}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#C8A84B"
            fontSize="18"
            fontFamily="Georgia, serif"
            opacity="0.8"
          >
            {n}
          </text>
        );
      })}

      {/* Aiguille des heures */}
      <g className="hand-hour">
        <line
          x1="200" y1="200"
          x2="200" y2="110"
          stroke="#C8A84B" strokeWidth="6" strokeLinecap="round"
          filter="url(#glow)"
        />
        <line
          x1="200" y1="200"
          x2="200" y2="225"
          stroke="#8B6914" strokeWidth="6" strokeLinecap="round"
        />
      </g>

      {/* Aiguille des minutes */}
      <g className="hand-minute">
        <line
          x1="200" y1="200"
          x2="200" y2="80"
          stroke="#D4A843" strokeWidth="4" strokeLinecap="round"
          filter="url(#glow)"
        />
        <line
          x1="200" y1="200"
          x2="200" y2="230"
          stroke="#7a5c10" strokeWidth="4" strokeLinecap="round"
        />
      </g>

      {/* Aiguille des secondes */}
      <g className="hand-second">
        <line
          x1="200" y1="200"
          x2="200" y2="60"
          stroke="#F0DFA0" strokeWidth="2" strokeLinecap="round"
          filter="url(#glow)"
        />
        <line
          x1="200" y1="200"
          x2="200" y2="240"
          stroke="#c84030" strokeWidth="2" strokeLinecap="round"
        />
      </g>

      {/* Centre */}
      <circle cx="200" cy="200" r="8" fill="#C8A84B" />
      <circle cx="200" cy="200" r="4" fill="#F0DFA0" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: '100dvh', minHeight: '600px', background: '#07070a' }}
      >
        {/* Horloge SVG animée en fond — 100% inline, 0 dépendance externe */}
        <AnimatedClock />

        {/* Overlay dégradé pour assombrir davantage */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(15,12,5,0.55) 0%, rgba(5,5,8,0.82) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.3) 100%)',
          }}
        />

        {/* TEXTE — bas gauche style maison horlogère */}
        <div
          className="absolute"
          style={{ bottom: '80px', left: '5vw', right: '5vw', zIndex: 10 }}
        >
          <p
            className="uppercase mb-5"
            style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'rgba(220,190,120,0.75)' }}
          >
            Haute Horlogerie Multiculturelle
          </p>

          <h1
            className="font-serif mb-5"
            style={{
              fontSize: 'clamp(3rem, 7vw, 6.5rem)',
              lineHeight: 1.02,
              fontWeight: 400,
              color: '#FFFFFF',
              letterSpacing: '0.02em',
            }}
          >
            L&apos;Art du<br />
            <em
              style={{
                fontStyle: 'italic',
                background:
                  'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 40%, #D4A843 70%, #BF9733 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Temps Universel
            </em>
          </h1>

          <p
            style={{
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.55)',
              letterSpacing: '0.04em',
              maxWidth: '400px',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            12 civilisations. 25 pièces. 1 montre pour réunir les grandes cultures de l&apos;humanité.
          </p>

          <Link
            href="/collection"
            className="inline-flex items-center gap-4 group"
            style={{
              color: '#FFFFFF',
              fontSize: '0.68rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '40px',
                height: '1px',
                background: 'linear-gradient(to right, #C8A84B, #F0DFA0)',
              }}
            />
            Découvrir la Collection
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute animate-bounce"
          style={{ bottom: '28px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
        >
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, rgba(200,168,75,0.6), transparent)',
              margin: '0 auto',
            }}
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-amber-500 to-transparent mx-auto" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-[0.04em] text-black leading-tight">
            Une Vision.<br />Douze Civilisations.
          </h2>
          <div className="w-14 h-[1px] mx-auto" style={{ background: 'var(--gold)' }} />
          <p className="text-base md:text-lg text-black/55 leading-relaxed font-light tracking-wide">
            ALMA réunit sur un seul cadran les systèmes de numération des plus grandes civilisations
            de l&apos;humanité. De Rome à Sumer, du monde arabe à l&apos;Asie, chaque heure raconte
            une histoire millénaire.
          </p>
          <Link
            href="/histoire"
            className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase hover:gap-5 transition-all duration-300"
            style={{ color: 'var(--gold)' }}
          >
            <span>En savoir plus</span><span>→</span>
          </Link>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-28 px-6" style={{ background: '#F8F7F5' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
          {[
            { title: 'Swiss Made', desc: 'Mouvement Sellita SW200-2 assemblé en Suisse', icon: '✦' },
            { title: 'Série Limitée', desc: 'Seulement 125 pièces numérotées au monde', icon: '◆' },
            { title: 'Garantie 3 Ans', desc: 'Service après-vente exclusif en Suisse', icon: '✧' },
          ].map((item, idx) => (
            <div key={idx} className="text-center space-y-5 group">
              <div
                className="text-3xl group-hover:scale-110 transition-transform duration-500"
                style={{ color: 'var(--gold)' }}
              >
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-black tracking-[0.06em]">{item.title}</h3>
              <div className="w-10 h-[1px] mx-auto" style={{ background: 'var(--gold)', opacity: 0.5 }} />
              <p className="text-black/50 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-14 px-6 bg-white" style={{ borderColor: 'rgba(0,0,0,0.07)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div
            className="font-serif text-2xl tracking-[0.3em]"
            style={{
              background:
                'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 35%, #D4A843 60%, #BF9733 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ALMA
          </div>
          <div className="flex gap-8 text-xs text-black/35 tracking-[0.15em] uppercase">
            <Link href="#" className="hover:text-black transition">Instagram</Link>
            <Link href="#" className="hover:text-black transition">LinkedIn</Link>
            <Link href="#" className="hover:text-black transition">Mentions légales</Link>
          </div>
        </div>
        <div className="text-center mt-10 text-xs text-black/25 tracking-[0.1em]">
          © 2026 ALMA. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}
