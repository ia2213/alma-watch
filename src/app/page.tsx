'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // autoplay blocked — vidéo reste invisible, le fond noir prend le relais
      });
    }
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          height: '100dvh',
          minHeight: '600px',
          // Fond sombre garanti si vidéo absente
          background: '#0A0A0A',
        }}
      >
        {/* Image fallback sombre — toujours visible en fond */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=2400&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.35) contrast(1.1) saturate(0.6)',
          }}
        />

        {/* Vidéo locale — par-dessus l’image, même filtre */}
        {/* Pour activer : déposer un fichier hero.mp4 dans /public/ */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{filter: 'brightness(0.38) contrast(1.08) saturate(0.7)'}}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay gradient bas → haut pour lisibilité du texte */}
        <div
          className="absolute inset-0"
          style={{background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)'}}
        />

        {/* TEXTE — bas gauche, style maison horlogère */}
        <div
          className="absolute"
          style={{bottom: '80px', left: '5vw', right: '5vw', zIndex: 10}}
        >
          <p
            className="uppercase mb-5"
            style={{fontSize: '0.6rem', letterSpacing: '0.3em', color: 'rgba(220,190,120,0.75)'}}
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
                background: 'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 40%, #D4A843 70%, #BF9733 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Temps Universel
            </em>
          </h1>

          <p
            className="mb-8"
            style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em', maxWidth: '400px', lineHeight: 1.7}}
          >
            12 civilisations. 25 pièces. 1 montre pour réunir les grandes cultures de l’humanité.
          </p>

          <Link
            href="/collection"
            className="inline-flex items-center gap-4 transition-all duration-400 group"
            style={{color: '#FFFFFF', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase'}}
          >
            <span
              className="inline-block h-[1px] transition-all duration-500 group-hover:w-16"
              style={{width: '40px', background: 'linear-gradient(to right, #C8A84B, #F0DFA0)'}}
            />
            Découvrir la Collection
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute"
          style={{bottom: '28px', left: '50%', transform: 'translateX(-50%)', zIndex: 10}}
        >
          <div
            className="animate-bounce"
            style={{width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(200,168,75,0.6), transparent)', margin: '0 auto'}}
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-amber-500 to-transparent mx-auto" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-[0.04em] text-black leading-tight">
            Une Vision.<br/>Douze Civilisations.
          </h2>
          <div className="w-14 h-[1px] mx-auto" style={{background: 'var(--gold)'}} />
          <p className="text-base md:text-lg text-black/55 leading-relaxed font-light tracking-wide">
            ALMA réunit sur un seul cadran les systèmes de numération des plus grandes civilisations de l&apos;humanité. De Rome à Sumer, du monde arabe à l&apos;Asie, chaque heure raconte une histoire millénaire.
          </p>
          <Link href="/histoire" className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase hover:gap-5 transition-all duration-300" style={{color: 'var(--gold)'}}>
            <span>En savoir plus</span><span>→</span>
          </Link>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-28 px-6" style={{background: '#F8F7F5'}}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
          {[
            { title: 'Swiss Made', desc: 'Mouvement Sellita SW200-2 assemblé en Suisse', icon: '✦' },
            { title: 'Série Limitée', desc: 'Seulement 125 pièces numérotées au monde', icon: '◆' },
            { title: 'Garantie 3 Ans', desc: 'Service après-vente exclusif en Suisse', icon: '✧' },
          ].map((item, idx) => (
            <div key={idx} className="text-center space-y-5 group">
              <div className="text-3xl group-hover:scale-110 transition-transform duration-500" style={{color: 'var(--gold)'}}>{item.icon}</div>
              <h3 className="font-serif text-xl text-black tracking-[0.06em]">{item.title}</h3>
              <div className="w-10 h-[1px] mx-auto" style={{background: 'var(--gold)', opacity: 0.5}} />
              <p className="text-black/50 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-14 px-6 bg-white" style={{borderColor: 'rgba(0,0,0,0.07)'}}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl tracking-[0.3em]" style={{
            background: 'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 35%, #D4A843 60%, #BF9733 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>ALMA</div>
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
