'use client';
import Link from 'next/link';

const CIVILIZATIONS = [
  { pos: 1,  char: '١' },
  { pos: 2,  char: '২' },
  { pos: 3,  char: '3' },
  { pos: 4,  char: '- -' },
  { pos: 5,  char: 'ה' },
  { pos: 6,  char: '๖' },
  { pos: 7,  char: 'ზ' },
  { pos: 8,  char: '፰' },
  { pos: 9,  char: 'Θʹ' },
  { pos: 10, char: '十' },
  { pos: 11, char: '𒎙𒁹' },
  { pos: 12, char: 'XII' },
];

function AnimatedClock() {
  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(90vw, 90vh)',
        height: 'min(90vw, 90vh)',
        opacity: 0.62,
        pointerEvents: 'none',
      }}
    >
      <defs>
        <radialGradient id="faceGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#1c1808" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#050504" stopOpacity="0.9" />
        </radialGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <style>{`
          @keyframes rotSec  { from { transform: rotate(0deg); }  to { transform: rotate(360deg); } }
          @keyframes rotMin  { from { transform: rotate(0deg); }  to { transform: rotate(360deg); } }
          @keyframes rotHour { from { transform: rotate(30deg); } to { transform: rotate(390deg); } }
          .hand-s { transform-origin: 250px 250px; animation: rotSec  10s  linear infinite; }
          .hand-m { transform-origin: 250px 250px; animation: rotMin  60s  linear infinite; }
          .hand-h { transform-origin: 250px 250px; animation: rotHour 720s linear infinite; }
        `}</style>
      </defs>

      <circle cx="250" cy="250" r="238" fill="url(#faceGrad)" />

      <circle cx="250" cy="250" r="238" fill="none" stroke="#C8A84B" strokeWidth="1.5" opacity="0.4" />
      <circle cx="250" cy="250" r="232" fill="none" stroke="#F0DFA0" strokeWidth="0.5" opacity="0.3" />
      <circle cx="250" cy="250" r="225" fill="none" stroke="#C8A84B" strokeWidth="3"   opacity="0.7" />
      <circle cx="250" cy="250" r="218" fill="none" stroke="#8B6914" strokeWidth="1"   opacity="0.4" />

      {Array.from({ length: 60 }, (_, i) => {
        const angle = (i * 6 * Math.PI) / 180;
        const isHour = i % 5 === 0;
        const r1 = isHour ? 192 : 208;
        const r2 = 220;
        const x1 = 250 + r1 * Math.sin(angle);
        const y1 = 250 - r1 * Math.cos(angle);
        const x2 = 250 + r2 * Math.sin(angle);
        const y2 = 250 - r2 * Math.cos(angle);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={isHour ? '#C8A84B' : '#6a5020'}
            strokeWidth={isHour ? 3 : 1}
            opacity={isHour ? 1 : 0.6}
          />
        );
      })}

      {CIVILIZATIONS.map(({ pos, char }) => {
        const angle = ((pos * 30 - 90) * Math.PI) / 180;
        const r = 168;
        const x = 250 + r * Math.cos(angle);
        const y = 250 + r * Math.sin(angle);
        return (
          <text
            key={pos}
            x={x} y={y}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#D4A843"
            fontSize={pos === 12 ? '16' : char === '- -' ? '14' : '20'}
            fontFamily="Georgia, 'Times New Roman', serif"
            letterSpacing={char === '- -' ? '0.1em' : '0'}
            opacity="0.95"
            filter="url(#softGlow)"
          >
            {char}
          </text>
        );
      })}

      <circle cx="250" cy="250" r="80" fill="none" stroke="#C8A84B" strokeWidth="0.5" opacity="0.3" />

      <g className="hand-h">
        <line x1="250" y1="250" x2="250" y2="132" stroke="#C8A84B" strokeWidth="7" strokeLinecap="round" filter="url(#glow)" />
        <line x1="250" y1="250" x2="250" y2="280" stroke="#8B6914" strokeWidth="7" strokeLinecap="round" />
      </g>
      <g className="hand-m">
        <line x1="250" y1="250" x2="250" y2="100" stroke="#D4A843" strokeWidth="5" strokeLinecap="round" filter="url(#glow)" />
        <line x1="250" y1="250" x2="250" y2="285" stroke="#7a5c10" strokeWidth="5" strokeLinecap="round" />
      </g>
      <g className="hand-s">
        <line x1="250" y1="250" x2="250" y2="76"  stroke="#F0DFA0" strokeWidth="2" strokeLinecap="round" filter="url(#glow)" />
        <line x1="250" y1="250" x2="250" y2="295" stroke="#c84030" strokeWidth="2" strokeLinecap="round" />
      </g>

      <circle cx="250" cy="250" r="12" fill="#C8A84B" />
      <circle cx="250" cy="250" r="6"  fill="#F0DFA0" />
      <circle cx="250" cy="250" r="2.5" fill="#ffffff" opacity="0.8" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <section
        className="relative w-full overflow-hidden"
        style={{ height: '100dvh', minHeight: '600px', background: '#07070a' }}
      >
        <AnimatedClock />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.05) 55%, rgba(0,0,0,0.15) 100%)',
            pointerEvents: 'none',
          }}
        />
        <div className="absolute" style={{ bottom: '80px', left: '5vw', right: '5vw', zIndex: 10 }}>
          <p className="uppercase mb-5" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'rgba(220,190,120,0.75)' }}>
            Haute Horlogerie Multiculturelle
          </p>
          <h1 className="font-serif mb-5" style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', lineHeight: 1.02, fontWeight: 400, color: '#FFFFFF', letterSpacing: '0.02em' }}>
            L&apos;Art du<br />
            <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 40%, #D4A843 70%, #BF9733 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Temps Universel
            </em>
          </h1>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em', maxWidth: '400px', lineHeight: 1.7, marginBottom: '2rem' }}>
            12 civilisations. 25 pièces. 1 montre pour réunir les grandes cultures de l&apos;humanité.
          </p>
          <Link href="/collection" className="inline-flex items-center gap-4" style={{ color: '#FFFFFF', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
            <span style={{ display: 'inline-block', width: '40px', height: '1px', background: 'linear-gradient(to right, #C8A84B, #F0DFA0)' }} />
            Découvrir la Collection
          </Link>
        </div>
        <div className="absolute animate-bounce" style={{ bottom: '28px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(200,168,75,0.6), transparent)', margin: '0 auto' }} />
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-amber-500 to-transparent mx-auto" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-[0.04em] text-black leading-tight">
            Une Vision.<br />Douze Civilisations.
          </h2>
          <div className="w-14 h-[1px] mx-auto" style={{ background: '#C8A84B' }} />
          <p className="text-base md:text-lg text-black/55 leading-relaxed font-light tracking-wide">
            ALMA réunit sur un seul cadran les systèmes de numération des plus grandes civilisations de l&apos;humanité. De Rome à Sumer, du monde arabe à l&apos;Asie, chaque heure raconte une histoire millénaire.
          </p>
          <Link href="/histoire" className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase hover:gap-5 transition-all duration-300" style={{ color: '#C8A84B' }}>
            <span>En savoir plus</span><span>→</span>
          </Link>
        </div>
      </section>

      <section className="py-28 px-6" style={{ background: '#F8F7F5' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
          {[
            { title: 'Swiss Made',    desc: 'Mouvement Sellita SW200-2 assemblé en Suisse', icon: '✦' },
            { title: 'Série Limitée', desc: 'Seulement 125 pièces numérotées au monde',     icon: '◆' },
            { title: 'Garantie 3 Ans',desc: 'Service après-vente exclusif en Suisse',       icon: '✧' },
          ].map((item, idx) => (
            <div key={idx} className="text-center space-y-5 group">
              <div className="text-3xl group-hover:scale-110 transition-transform duration-500" style={{ color: '#C8A84B' }}>{item.icon}</div>
              <h3 className="font-serif text-xl text-black tracking-[0.06em]">{item.title}</h3>
              <div className="w-10 h-[1px] mx-auto" style={{ background: '#C8A84B', opacity: 0.5 }} />
              <p className="text-black/50 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t py-14 px-6 bg-white" style={{ borderColor: 'rgba(0,0,0,0.07)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl tracking-[0.3em]" style={{ background: 'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 35%, #D4A843 60%, #BF9733 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            ALMA
          </div>
          <div className="flex gap-8 text-xs text-black/35 tracking-[0.15em] uppercase">
            <Link href="#" className="hover:text-black transition">Instagram</Link>
            <Link href="#" className="hover:text-black transition">LinkedIn</Link>
            <Link href="#" className="hover:text-black transition">Mentions légales</Link>
          </div>
        </div>
        <div className="text-center mt-10 text-xs text-black/25 tracking-[0.1em]">© 2026 ALMA. Tous droits réservés.</div>
      </footer>
    </>
  );
}
