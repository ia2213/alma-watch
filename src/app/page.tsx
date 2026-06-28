'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-obsidian">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-obsidian/90 backdrop-blur-sm border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="font-serif text-2xl tracking-widest gold-gradient">ALMA</div>
          <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
            <a href="#histoire" className="hover:text-gold-400 transition">Histoire</a>
            <a href="#montres" className="hover:text-gold-400 transition">Montres</a>
            <a href="#series" className="hover:text-gold-400 transition">S\u00e9ries</a>
            <a href="#fabrication" className="hover:text-gold-400 transition">Fabrication</a>
            <a href="#contact" className="hover:text-gold-400 transition">Contact</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gold-400">
            \u2630
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-charcoal to-obsidian opacity-95" />
        <div className="absolute inset-0" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1920)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15}} />
        <div className="relative z-10 text-center px-6 space-y-8 animate-fade-up">
          <div className="inline-block">
            <div className="w-16 h-16 mx-auto mb-4 border border-gold-400 rotate-45 flex items-center justify-center">
              <div className="w-8 h-8 border border-gold-400" />
            </div>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl tracking-widest gold-gradient hero-text-shadow">ALMA</h1>
          <div className="gold-line mx-auto my-6" />
          <p className="font-serif text-2xl md:text-4xl italic text-gold-100 tracking-wide">L\'Art du Temps Universel</p>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed pt-4">
            12 civilisations. 25 pi\u00e8ces. 1 montre.
          </p>
          <a href="#histoire" className="inline-block mt-8 px-10 py-4 luxury-border hover:bg-gold-500/10 transition text-gold-400 tracking-widest uppercase text-sm">D\u00e9couvrir</a>
        </div>
      </section>

      {/* HISTOIRE SECTION */}
      <section id="histoire" className="py-24 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-5xl gold-gradient">L\'Histoire d\'ALMA</h2>
          <div className="gold-line mx-auto" />
          <p className="text-lg text-gray-300 leading-relaxed">
            ALMA est n\u00e9e d\'une vision : unir l\'humanit\u00e9 \u00e0 travers le temps universel. Chaque montre ALMA porte sur son cadran **12 syst\u00e8mes de num\u00e9ration diff\u00e9rents**, repr\u00e9sentant 12 civilisations qui ont forg\u00e9 notre histoire.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Du **romain** au **cun\u00e9iforme sum\u00e9rien**, en passant par l\'**arabe**, le **bengali**, l\'**h\u00e9breu**, le **tha\u00ef**, le **g\u00e9orgien**, l\'**\u00e9thiopien**, le **grec ancien**, le **sino-japonais**, et bien d\'autres... ALMA transcende les fronti\u00e8res et les \u00e9poques.
          </p>
          <blockquote className="font-serif text-2xl italic text-gold-200 border-l-4 border-gold-500 pl-6 my-8">
            \"Une seule fa\u00e7on de lire l\'heure, douze fa\u00e7ons de la dire.\"
          </blockquote>
        </div>
      </section>

      {/* MONTRES SECTION */}
      <section id="montres" className="py-24 px-6 bg-obsidian">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl gold-gradient">Les Montres ALMA</h2>
            <div className="gold-line mx-auto my-6" />
            <p className="text-gray-300 text-lg">Haute horlogerie. Mouvement suisse. Design multiculturel.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Montre 1 */}
            <div className="luxury-border p-8 space-y-6 hover:border-gold-400 transition">
              <div className="aspect-square bg-charcoal rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gold-400 text-6xl">\u25c7</div>
              </div>
              <h3 className="font-serif text-3xl text-gold-300">S\u00e9rie Fondateurs</h3>
              <p className="text-gray-400">25 pi\u00e8ces num\u00e9rot\u00e9es KS 01/25 \u00e0 KS 25/25</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>\u2022 **Mouvement** : Sellita SW200-2 (72h r\u00e9serve)</p>
                <p>\u2022 **Bo\u00eetier** : Acier 316L Full Silver, 42mm</p>
                <p>\u2022 **Cadran** : 12 syst\u00e8mes de num\u00e9ration</p>
                <p>\u2022 **\u00c9tanch\u00e9it\u00e9** : 100m (10 ATM)</p>
              </div>
              <div className="text-gold-400 text-2xl font-serif">4 000 \u20ac</div>
            </div>

            {/* Montre 2 */}
            <div className="luxury-border p-8 space-y-6 hover:border-gold-400 transition">
              <div className="aspect-square bg-charcoal rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gold-400 text-6xl">\u25c7</div>
              </div>
              <h3 className="font-serif text-3xl text-gold-300">S\u00e9rie Limit\u00e9e</h3>
              <p className="text-gray-400">100 pi\u00e8ces num\u00e9rot\u00e9es 001/100 \u00e0 100/100</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>\u2022 **Mouvement** : Sellita SW200-2 (72h r\u00e9serve)</p>
                <p>\u2022 **Bo\u00eetier** : Acier 316L Full Silver, 42mm</p>
                <p>\u2022 **Cadran** : 12 syst\u00e8mes de num\u00e9ration</p>
                <p>\u2022 **\u00c9tanch\u00e9it\u00e9** : 100m (10 ATM)</p>
              </div>
              <div className="text-gold-400 text-2xl font-serif">6 100 \u20ac</div>
            </div>
          </div>
        </div>
      </section>

      {/* FABRICATION SECTION */}
      <section id="fabrication" className="py-24 px-6 bg-charcoal">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-5xl gold-gradient">Fabrication Suisse</h2>
          <div className="gold-line mx-auto" />
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Chaque montre ALMA est assembl\u00e9e en Suisse par des artisans horlogers sp\u00e9cialis\u00e9s dans la haute horlogerie. Le mouvement **Sellita SW200-2** est un calibre suisse reconnu pour sa fiabilit\u00e9 et sa pr\u00e9cision absolue.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-4">
              <div className="text-5xl text-gold-400">\u2726</div>
              <h4 className="font-serif text-xl text-gold-300">Swiss Made</h4>
              <p className="text-gray-400 text-sm">Fabriqu\u00e9 en Suisse selon les standards les plus \u00e9lev\u00e9s</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl text-gold-400">\u2726</div>
              <h4 className="font-serif text-xl text-gold-300">S\u00e9rie Limit\u00e9e</h4>
              <p className="text-gray-400 text-sm">Seulement 125 pi\u00e8ces au total, num\u00e9rot\u00e9es</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl text-gold-400">\u2726</div>
              <h4 className="font-serif text-xl text-gold-300">Garantie 3 ans</h4>
              <p className="text-gray-400 text-sm">Pi\u00e8ces et main d\'\u0153uvre garanties</p>
            </div>
          </div>
        </div>
      </section>

      {/* LES 12 CIVILISATIONS SECTION */}
      <section id="series" className="py-24 px-6 bg-obsidian">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl gold-gradient">Les 12 Civilisations</h2>
            <div className="gold-line mx-auto my-6" />
            <p className="text-gray-300 text-lg">Chaque heure repr\u00e9sente une civilisation</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { h: '12h', sys: 'Romain', char: 'XII' },
              { h: '1h', sys: 'Arabe-Indien', char: '\u0661' },
              { h: '2h', sys: 'Bengali', char: '\u09e8' },
              { h: '3h', sys: 'Arabe occidental', char: '3' },
              { h: '4h', sys: 'ALMA', char: '\u2726' },
              { h: '5h', sys: 'H\u00e9breu', char: '\u05d4' },
              { h: '6h', sys: 'Tha\u00ef', char: '\u0e56' },
              { h: '7h', sys: 'G\u00e9orgien', char: '\u10d6' },
              { h: '8h', sys: '\u00c9thiopien', char: '\u1371' },
              { h: '9h', sys: 'Grec ancien', char: '\u0398\u03b5' },
              { h: '10h', sys: 'Sino-japonais', char: '\u5341' },
              { h: '11h', sys: 'Cun\u00e9iforme', char: '\ud808\udd11' }
            ].map((item, idx) => (
              <div key={idx} className="luxury-border p-6 text-center space-y-3 hover:border-gold-400 transition">
                <div className="text-4xl text-gold-300">{item.char}</div>
                <div className="text-gold-400 font-mono text-sm">{item.h}</div>
                <div className="text-gray-400 text-xs">{item.sys}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / KICKSTARTER SECTION */}
      <section id="contact" className="py-24 px-6 bg-charcoal">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-5xl gold-gradient">Rejoignez l\'Aventure</h2>
          <div className="gold-line mx-auto" />
          <p className="text-lg text-gray-300 leading-relaxed">
            La campagne Kickstarter ALMA sera lanc\u00e9e prochainement. Inscrivez-vous pour \u00eatre inform\u00e9 du lancement et b\u00e9n\u00e9ficier des tarifs **Early Bird** exclusifs.
          </p>
          <form className="space-y-4 max-w-md mx-auto pt-6">
            <input type="email" placeholder="Votre email" className="w-full px-6 py-4 bg-obsidian luxury-border focus:border-gold-400 outline-none text-gray-200" />
            <button className="w-full px-10 py-4 bg-gold-500 hover:bg-gold-600 text-obsidian font-bold tracking-widest uppercase transition">\nMe Tenir Inform\u00e9\n</button>
          </form>
          <p className="text-sm text-gray-500 pt-4">Nous respectons votre vie priv\u00e9e. Aucun spam.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-obsidian border-t border-gold-500/20 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="font-serif text-3xl tracking-widest gold-gradient">ALMA</div>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-gold-400 transition">Instagram</a>
            <a href="#" className="hover:text-gold-400 transition">TikTok</a>
            <a href="#" className="hover:text-gold-400 transition">Kickstarter</a>
            <a href="#" className="hover:text-gold-400 transition">Contact</a>
          </div>
          <p className="text-xs text-gray-600">\u00a9 2026 ALMA. Tous droits r\u00e9serv\u00e9s.</p>
        </div>
      </footer>
    </main>
  );
}
