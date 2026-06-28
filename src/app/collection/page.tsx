'use client';
import Link from 'next/link';

export default function Collection() {
  const watches = [
    {
      name: 'V1 — Météorite Gibeon',
      ref: 'ALMA-MTR-001',
      price: '6 100 €',
      desc: 'Cadran en météorite Gibeon authentique sur boîtier titane grade 5. Édition limitée.',
      features: ['Titane Grade 5', 'Cadran Météorite Gibeon', 'Mouvement Sellita SW200-2', 'Étanchéité 100m'],
      material: 'Titane',
      dial: 'Météorite Gibeon',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80',
      limited: true
    },
    {
      name: 'V2 — Carbone Forgé',
      ref: 'ALMA-CBN-001',
      price: '5 800 €',
      desc: 'Boîtier en carbone forgé avec cadran texture carbone. Ultra-léger et résistant.',
      features: ['Carbone Forgé', 'Cadran Texture Carbone', 'Mouvement Sellita SW200-2', 'Étanchéité 100m'],
      material: 'Carbone',
      dial: 'Carbone Mat',
      image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80',
      limited: true
    },
    {
      name: 'V3 — Acier Blanc',
      ref: 'ALMA-WHT-001',
      price: '4 200 €',
      desc: 'Acier inoxydable 316L avec cadran blanc argenté. Élégance intemporelle.',
      features: ['Acier 316L', 'Cadran Blanc Argenté', 'Mouvement Sellita SW200-2', 'Étanchéité 100m'],
      material: 'Acier 316L',
      dial: 'Blanc Argenté',
      image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80',
      limited: true
    },
    {
      name: 'V4 — Carbone Noir',
      ref: 'ALMA-BLK-001',
      price: '5 500 €',
      desc: 'Carbone noir total avec cadran noir profond. Design furtif et moderne.',
      features: ['Carbone Noir', 'Cadran Noir Mat', 'Mouvement Sellita SW200-2', 'Étanchéité 100m'],
      material: 'Carbone',
      dial: 'Noir Mat',
      image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80',
      limited: true
    },
    {
      name: 'V5 — Nacre & Or Rose',
      ref: 'ALMA-MOP-001',
      price: '8 900 €',
      desc: 'Cadran en nacre naturelle avec boîtier or rose 18 carats. Pièce d\'exception.',
      features: ['Or Rose 18K', 'Cadran Nacre Naturelle', 'Mouvement Sellita SW200-2', 'Étanchéité 100m'],
      material: 'Or Rose 18K',
      dial: 'Nacre Naturelle',
      image: 'https://images.unsplash.com/photo-1611148990726-238cd2fbd2f9?w=800&q=80',
      limited: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/20 via-neutral-950 to-neutral-950"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent">La Collection</span>
          </h1>
          <p className="text-neutral-400 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Cinq variations uniques, une excellence absolue
          </p>
        </div>
      </section>

      {/* MODELES GRID */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {watches.map((watch, idx) => (
              <div key={idx} className="group">
                {/* Image */}
                <div className="aspect-square mb-6 rounded-2xl overflow-hidden relative">
                  <img 
                    src={watch.image} 
                    alt={watch.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {watch.limited && (
                    <div className="absolute top-6 right-6 px-4 py-2 bg-neutral-950/80 backdrop-blur-sm border border-amber-800/50 rounded-full">
                      <span className="text-xs tracking-widest text-amber-200 uppercase">Limitée</span>
                    </div>
                  )}
                </div>
                
                {/* Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl text-amber-200 mb-2">{watch.name}</h3>
                    <p className="text-sm text-neutral-500 font-mono">{watch.ref}</p>
                  </div>
                  
                  <p className="text-neutral-400 leading-relaxed text-sm">{watch.desc}</p>
                  
                  <div className="space-y-2">
                    {watch.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-neutral-500">
                        <div className="w-1 h-1 bg-amber-400/50 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6 flex items-center justify-between border-t border-neutral-800">
                    <div className="font-serif text-3xl text-amber-300">{watch.price}</div>
                    <Link 
                      href="/contact"
                      className="px-6 py-3 bg-gradient-to-r from-amber-900/30 to-yellow-900/30 border border-amber-800/50 text-amber-200 text-xs tracking-widest uppercase hover:bg-amber-900/50 transition-all duration-500 rounded-lg"
                    >
                      Commander
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="py-32 px-6 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent mb-6">Spécifications Techniques</h2>
            <div className="w-16 h-[1px] bg-amber-400/50 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { label: 'Mouvement', value: 'Sellita SW200-2 (Swiss Made)' },
              { label: 'Réserve de marche', value: '38 heures' },
              { label: 'Boîtier', value: '42mm coussin' },
              { label: 'Étanchéité', value: '100m (10 ATM)' },
              { label: 'Verre', value: 'Saphir bombé anti-reflet' },
              { label: 'Garantie', value: '2 ans internationale' },
            ].map((spec, idx) => (
              <div key={idx} className="flex justify-between items-baseline pb-4 border-b border-neutral-800">
                <span className="text-sm tracking-wider text-neutral-500 uppercase">{spec.label}</span>
                <span className="text-amber-200">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
