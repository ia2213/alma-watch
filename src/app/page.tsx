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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-obsidian/95 backdrop-blur-xl border-b border-gold-500/10' : 'bg-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="font-serif text-2xl tracking-[0.3em] gold-gradient hover:opacity-80 transition-opacity">ALMA</Link>
          <div className="hidden md:flex gap-12 text-xs tracking-[0.2em] uppercase font-light">
            <Link href="/collection" className="hover:text-gold-400 transition-colors duration-300">Collection</Link>
            <Link href="/histoire" className="hover:text-gold-400 transition-colors duration-300">Histoire</Link>
            <Link href="/fabrication" className="hover:text-gold-400 transition-colors duration-300">Fabrication</Link>
            <Link href="/contact" className="border border-gold-500/30 px-6 py-2 hover:bg-gold-500/10 transition-all duration-300">Contact</Link>
          </div>
        </div>
      </nav>

      {/* HERO FULL SCREEN */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[2s]"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=2400&q=90)',
            filter: 'brightness(0.25) contrast(1.1)',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-transparent to-obsidian/90" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 space-y-12 animate-fade-up">
          {/* Decorative Element */}
          <div className="inline-block mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-transparent via-gold-400 to-transparent mx-auto" />
          </div>
          
          {/* Main Title */}
          <h1 className="font-serif text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none tracking-[0.1em] gold-gradient">
            ALMA
          </h1>
          
          {/* Subtitle */}
          <p className="font-serif text-2xl md:text-3xl text-gold-200/90 tracking-[0.15em] font-light italic">
            L\'Art du Temps Universel
          </p>
          
          {/* Divider */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-8" />
          
          {/* Description */}
          <p className="text-sm md:text-base text-gray-400 max-w-md mx-auto leading-relaxed tracking-[0.1em] font-light">
            12 civilisations. 25 pièces. 1 montre.
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Link 
              href="/collection"
              className="inline-block px-12 py-4 border border-gold-400/40 text-gold-300 tracking-[0.2em] text-xs uppercase hover:bg-gold-400/5 hover:border-gold-400/80 transition-all duration-500 backdrop-blur-sm"
            >
              Découvrir la Collection
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold-400/50 to-transparent" />
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-obsidian via-charcoal to-obsidian">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="inline-block">
            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-gold-400 to-transparent mx-auto mb-8" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-6xl tracking-[0.1em] text-gold-100 leading-tight">
            Une Vision.<br/>Douze Civilisations.
          </h2>
          
          <div className="w-16 h-[1px] bg-gold-400/50 mx-auto" />
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
            ALMA réunit sur un seul cadran les systèmes de numération des plus grandes civilisations de l\'humanité. De Rome à Sumer, du monde arabe à l\'Asie, chaque heure raconte une histoire millénaire.
          </p>
          
          <div className="pt-8">
            <Link 
              href="/histoire"
              className="inline-flex items-center gap-3 text-gold-400 text-sm tracking-[0.15em] uppercase hover:gap-5 transition-all duration-300"
            >
              <span>En savoir plus</span>
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="relative py-32 px-6 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: 'Swiss Made',
                desc: 'Mouvement Sellita SW200-2 assemblé en Suisse',
                icon: '✦'
              },
              {
                title: 'Série Limitée',
                desc: 'Seulement 125 pièces numérotées au monde',
                icon: '◆'
              },
              {
                title: 'Garantie 3 Ans',
                desc: 'Service après-vente exclusif en Suisse',
                icon: '✧'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-6 group">
                <div className="text-5xl text-gold-400 mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h3 className="font-serif text-2xl text-gold-300 tracking-[0.1em]">{item.title}</h3>
                <div className="w-12 h-[1px] bg-gold-400/30 mx-auto" />
                <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold-500/10 bg-obsidian py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-serif text-3xl tracking-[0.3em] gold-gradient">ALMA</div>
            <div className="flex gap-8 text-xs text-gray-500 tracking-[0.15em] uppercase">
              <Link href="#" className="hover:text-gold-400 transition">Instagram</Link>
              <Link href="#" className="hover:text-gold-400 transition">LinkedIn</Link>
              <Link href="#" className="hover:text-gold-400 transition">Mentions légales</Link>
            </div>
          </div>
          <div className="text-center mt-12 text-xs text-gray-600 tracking-[0.1em]">
            © 2026 ALMA. Tous droits réservés.
          </div>
        </div>
      </footer>
    </>
  );
}
