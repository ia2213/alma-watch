'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Vidéo de fond — horloge / temps qui passe */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.28) contrast(1.1) saturate(0.7)' }}
        >
          {/* Aiguilles de montre — Pexels 3764145 */}
          <source src="https://videos.pexels.com/video-files/3764145/3764145-hd_1920_1080_25fps.mp4" type="video/mp4" />
          {/* Mécanisme d’horloge — Pexels 855282 */}
          <source src="https://videos.pexels.com/video-files/855282/855282-hd_1920_1080_25fps.mp4" type="video/mp4" />
          {/* Sablier — Pexels 4473349 */}
          <source src="https://videos.pexels.com/video-files/4473349/4473349-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>

        {/* Fondu vers blanc en bas */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: '240px', background: 'linear-gradient(to bottom, transparent, white)', zIndex: 2 }}
        />

        {/* Contenu */}
        <div className="relative text-center px-6 space-y-8" style={{ zIndex: 3 }}>
          <div className="w-[1px] h-14 bg-gradient-to-b from-transparent via-amber-400 to-transparent mx-auto" />
          <h1
            className="font-serif leading-none tracking-[0.1em]"
            style={{
              fontSize: 'clamp(5rem, 12vw, 11rem)',
              background: 'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 35%, #D4A843 60%, #EDD98A 80%, #BF9733 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ALMA
          </h1>
          <p className="font-serif text-xl md:text-2xl tracking-[0.18em] font-light italic" style={{ color: '#E8D5A3' }}>
            L&apos;Art du Temps Universel
          </p>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          <p className="text-sm tracking-[0.12em] font-light" style={{ color: '#C8C0B0' }}>
            12 civilisations ·  25 pièces ·  1 montre
          </p>
          <div className="pt-4">
            <Link
              href="/collection"
              className="inline-block px-12 py-4 text-xs uppercase tracking-[0.25em] transition-all duration-500"
              style={{ border: '1px solid rgba(232,213,163,0.5)', color: '#E8D5A3' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(232,213,163,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              Découvrir la Collection
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce" style={{ zIndex: 3 }}>
          <div className="w-[1px] h-12 bg-gradient-to-b from-amber-400/50 to-transparent" />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-amber-500 to-transparent mx-auto" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-[0.04em] text-black leading-tight">
            Une Vision.<br/>Douze Civilisations.
          </h2>
          <div className="w-14 h-[1px] mx-auto" style={{ background: 'var(--gold)' }} />
          <p className="text-base md:text-lg text-black/55 leading-relaxed font-light tracking-wide">
            ALMA réunit sur un seul cadran les systèmes de numération des plus grandes civilisations de l&apos;humanité. De Rome à Sumer, du monde arabe à l&apos;Asie, chaque heure raconte une histoire millénaire.
          </p>
          <Link href="/histoire" className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase hover:gap-5 transition-all duration-300" style={{ color: 'var(--gold)' }}>
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
              <div className="text-3xl group-hover:scale-110 transition-transform duration-500" style={{ color: 'var(--gold)' }}>{item.icon}</div>
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
              background: 'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 35%, #D4A843 60%, #EDD98A 80%, #BF9733 100%)',
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
        <div className="text-center mt-10 text-xs text-black/25 tracking-[0.1em]">© 2026 ALMA. Tous droits réservés.</div>
      </footer>
    </>
  );
}
