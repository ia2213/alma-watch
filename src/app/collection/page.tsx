'use client';
import Link from 'next/link';

export default function Collection() {
  const watches = [
    {
      name: 'Série Fondateurs',
      ref: 'KS 01/25 à KS 25/25',
      price: '4 000 €',
      desc: '25 pièces numérotées en acier 316L, mouvement Sellita SW200-2',
      features: ['Acier 316L Full Silver', 'Cadran 12 civilisations', 'Réserve 72h', 'Étanchéité 100m'],
      limited: true
    },
    {
      name: 'Série Limitée',
      ref: '001/100 à 100/100',
      price: '6 100 €',
      desc: '100 pièces numérotées en acier 316L, mouvement Sellita SW200-2',
      features: ['Acier 316L Full Silver', 'Cadran 12 civilisations', 'Réserve 72h', 'Étanchéité 100m'],
      limited: true
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-obsidian/95 backdrop-blur-xl border-b border-gold-500/10">
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="font-serif text-2xl tracking-[0.3em] gold-gradient hover:opacity-80 transition-opacity">ALMA</Link>
          <div className="hidden md:flex gap-12 text-xs tracking-[0.2em] uppercase font-light">
            <Link href="/collection" className="text-gold-400">Collection</Link>
            <Link href="/histoire" className="hover:text-gold-400 transition-colors duration-300">Histoire</Link>
            <Link href="/fabrication" className="hover:text-gold-400 transition-colors duration-300">Fabrication</Link>
            <Link href="/contact" className="border border-gold-500/30 px-6 py-2 hover:bg-gold-500/10 transition-all duration-300">Contact</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block">
            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-gold-400 to-transparent mx-auto mb-6" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl tracking-[0.15em] gold-gradient">La Collection</h1>
          <div className="w-20 h-[1px] bg-gold-400/50 mx-auto" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Chaque montre ALMA est une œuvre unique, assemblée en Suisse et limitée à 125 exemplaires au total.
          </p>
        </div>
      </section>

      {/* WATCHES GRID */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {watches.map((watch, idx) => (
              <div key={idx} className="group">
                {/* Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-charcoal via-smoke to-charcoal rounded-sm overflow-hidden mb-8 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gold-400/20 text-[8rem] font-serif group-hover:scale-110 transition-transform duration-700">
                    ◇
                  </div>
                  {watch.limited && (
                    <div className="absolute top-6 right-6 px-4 py-2 bg-gold-500/10 border border-gold-400/30 backdrop-blur-sm">
                      <span className="text-xs tracking-[0.2em] text-gold-300 uppercase">Série Limitée</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-3xl text-gold-200 tracking-[0.1em] mb-2">{watch.name}</h3>
                    <p className="text-sm text-gray-500 tracking-[0.1em] font-mono">{watch.ref}</p>
                  </div>

                  <p className="text-gray-400 leading-relaxed font-light">{watch.desc}</p>

                  <div className="space-y-2">
                    {watch.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                        <div className="w-1 h-1 bg-gold-400/50" />
                        <span className="font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 flex items-center justify-between border-t border-gold-500/10">
                    <div className="font-serif text-3xl text-gold-300">{watch.price}</div>
                    <Link 
                      href="/contact"
                      className="px-8 py-3 border border-gold-400/40 text-gold-300 text-xs tracking-[0.2em] uppercase hover:bg-gold-400/5 hover:border-gold-400/80 transition-all duration-500"
                    >
                      Réserver
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS SECTION */}
      <section className="relative py-24 px-6 bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl gold-gradient tracking-[0.1em] mb-6">Spécifications Techniques</h2>
            <div className="w-16 h-[1px] bg-gold-400/50 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { label: 'Mouvement', value: 'Sellita SW200-2 (Swiss Made)' },
              { label: 'Réserve de marche', value: '72 heures' },
              { label: 'Boîtier', value: 'Acier 316L Full Silver, 42mm' },
              { label: 'Étanchéité', value: '100m (10 ATM)' },
              { label: 'Verre', value: 'Saphir bombé anti-reflet' },
              { label: 'Garantie', value: '3 ans pièces et main d\\\'œuvre' },
            ].map((spec, idx) => (
              <div key={idx} className="flex justify-between items-baseline border-b border-gold-500/10 pb-4">
                <span className="text-sm tracking-[0.1em] text-gray-500 uppercase">{spec.label}</span>
                <span className="text-gold-200 font-light">{spec.value}</span>
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
    </div>
  );
}
