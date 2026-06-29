'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-black/8 shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="font-serif text-2xl tracking-[0.3em] gold-gradient hover:opacity-80 transition-opacity">
            ALMA
          </Link>
          <div className="hidden md:flex gap-12 text-xs tracking-[0.2em] uppercase font-light">
            <Link href="/collection" className="text-black/70 hover:text-black transition-colors duration-300">Collection</Link>
            <Link href="/histoire" className="text-black/70 hover:text-black transition-colors duration-300">Histoire</Link>
            <Link href="/fabrication" className="text-black/70 hover:text-black transition-colors duration-300">Fabrication</Link>
            <Link href="/contact" className="border border-black/25 px-6 py-2 text-black/70 hover:border-black hover:text-black transition-all duration-300">Contact</Link>
          </div>
        </div>
      </nav>

      {/* HERO FULL SCREEN */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=2400&q=90)',
            filter: 'brightness(0.35) contrast(1.05) grayscale(0.2)',
          }}
        />

        {/* Gradient Overlay — blanc en bas pour transition douce */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 space-y-10">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-amber-400 to-transparent mx-auto" />

          <h1 className="font-serif text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none tracking-[0.1em] gold-gradient">
            ALMA
          </h1>

          <p className="font-serif text-2xl md:text-3xl tracking-[0.15em] font-light italic" style={{color: '#E8D5A3'}}>
            L&apos;Art du Temps Universel
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />

          <p className="text-sm md:text-base max-w-md mx-auto leading-relaxed tracking-[0.1em] font-light" style={{color: '#D0C8B8'}}>
            12 civilisations. 25 pièces. 1 montre.
          </p>

          <div className="pt-6">
            <Link
              href="/collection"
              className="inline-block px-12 py-4 border border-amber-300/50 text-amber-200 tracking-[0.2em] text-xs uppercase hover:bg-amber-400/10 hover:border-amber-300 transition-all duration-500 backdrop-blur-sm"
            >
              Découvrir la Collection
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-amber-400/60 to-transparent" />
        </div>
      </section>

      {/* INTRO SECTION — fond blanc */}
      <section className="relative py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-amber-500 to-transparent mx-auto" />

          <h2 className="font-serif text-4xl md:text-6xl tracking-[0.05em] text-black leading-tight">
            Une Vision.<br/>Douze Civilisations.
          </h2>

          <div className="w-16 h-[1px] bg-amber-500/50 mx-auto" />

          <p className="text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
            ALMA réunit sur un seul cadran les systèmes de numération des plus grandes civilisations de l&apos;humanité. De Rome à Sumer, du monde arabe à l&apos;Asie, chaque heure raconte une histoire millénaire.
          </p>

          <Link
            href="/histoire"
            className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase hover:gap-5 transition-all duration-300"
            style={{color: 'var(--gold)'}}
          >
            <span>En savoir plus</span>
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>

      {/* HIGHLIGHTS — fond légèrement gris */}
      <section className="relative py-32 px-6" style={{background: '#F8F7F5'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { title: 'Swiss Made', desc: 'Mouvement Sellita SW200-2 assemblé en Suisse', icon: '✦' },
              { title: 'Série Limitée', desc: 'Seulement 125 pièces numérotées au monde', icon: '◆' },
              { title: 'Garantie 3 Ans', desc: 'Service après-vente exclusif en Suisse', icon: '✧' },
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-6 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500" style={{color: 'var(--gold)'}}>{item.icon}</div>
                <h3 className="font-serif text-2xl text-black tracking-[0.08em]">{item.title}</h3>
                <div className="w-12 h-[1px] mx-auto" style={{background: 'var(--gold)'}} />
                <p className="text-black/55 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/8 bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-serif text-3xl tracking-[0.3em] gold-gradient">ALMA</div>
            <div className="flex gap-8 text-xs text-black/40 tracking-[0.15em] uppercase">
              <Link href="#" className="hover:text-black transition">Instagram</Link>
              <Link href="#" className="hover:text-black transition">LinkedIn</Link>
              <Link href="#" className="hover:text-black transition">Mentions légales</Link>
            </div>
          </div>
          <div className="text-center mt-12 text-xs text-black/30 tracking-[0.1em]">
            © 2026 ALMA. Tous droits réservés.
          </div>
        </div>
      </footer>
    </>
  );
}
