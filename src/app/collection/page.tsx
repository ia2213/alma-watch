'use client';
import Link from 'next/link';

export default function Collection() {
  const watches = [
    {
      id: 'v1',
      name: 'V1 KS Exclusive',
      subtitle: 'Météorite Gibeon',
      ref: 'KS 01/25 à KS 25/25',
      series: 'Série Fondateurs',
      price: '4 000 €',
      material: 'Full Titane Grade 5',
      dial: 'Météorite Gibeon',
      image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=90'
    },
    {
      id: 'v2',
      name: 'V2 Carbone Météorite',
      subtitle: 'Full Carbone Forgé',
      ref: 'ALMA-CBN-MET',
      series: 'Série Fondateurs',
      price: '4 500 €',
      material: 'Full Carbone Forgé',
      dial: 'Météorite Gibeon',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=90'
    },
    {
      id: 'v3',
      name: 'V3 Classique Blanc',
      subtitle: 'Blanc Céramique',
      ref: '001/100 à 100/100',
      series: 'Série Limitée',
      price: '6 100 €',
      material: 'Full Acier 316L',
      dial: 'Blanc Céramique',
      image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=90'
    },
    {
      id: 'v4',
      name: 'V4 Sport-Luxe',
      subtitle: 'Noir Mat',
      ref: '001/100 à 100/100',
      series: 'Série Limitée',
      price: '6 100 €',
      material: 'Full Acier 316L',
      dial: 'Noir Mat',
      image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=90'
    },
    {
      id: 'v5',
      name: 'V5 Élégant',
      subtitle: 'Nacre & Or Rose',
      ref: 'ALMA-MOP-RG',
      series: 'Série Prestige',
      price: 'Sur demande',
      material: 'Full Or Rose 18K',
      dial: 'Nacre Naturelle (MOP)',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=90'
    }
  ];

  return (
    <div className="min-h-screen" style={{background: '#0a0a0a'}}>
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.05) 0%, rgba(10,10,10,1) 70%)'}}></div>
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="font-serif text-6xl md:text-8xl mb-6 gold-gradient" style={{letterSpacing: '0.02em'}}>
            La Collection MERIDIEM
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{color: '#f4e4c1'}}>
            12 civilisations • 25 pièces Fondateurs • 100 pièces Limitées
          </p>
          <div className="w-24 h-px mx-auto" style={{background: 'linear-gradient(90deg, transparent, #d4af37, transparent)'}}></div>
        </div>
      </section>

      {/* GRID MODELES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {watches.map((watch, idx) => (
              <Link key={idx} href={`/collection/${watch.id}`}>
                <div className="group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative aspect-square mb-6 rounded-lg overflow-hidden" style={{background: '#1a1a1a'}}>
                    <img 
                      src={watch.image} 
                      alt={watch.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{opacity: 0.95}}
                    />
                    <div className="absolute top-4 right-4 px-4 py-2 backdrop-luxury rounded-full">
                      <span className="text-xs uppercase" style={{color: '#d4af37', letterSpacing: '0.1em'}}>{watch.series}</span>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-serif text-2xl mb-1" style={{color: '#d4af37'}}>{watch.name}</h3>
                      <p className="text-lg font-serif mb-2" style={{color: '#f4e4c1', opacity: 0.8}}>{watch.subtitle}</p>
                      <p className="text-sm font-mono" style={{color: '#888', letterSpacing: '0.05em'}}>{watch.ref}</p>
                    </div>
                    
                    <div className="pt-4 flex items-center justify-between" style={{borderTop: '1px solid rgba(212,175,55,0.15)'}}>
                      <div className="font-serif text-2xl" style={{color: '#d4af37'}}>{watch.price}</div>
                      <div className="text-xs uppercase" style={{color: '#d4af37', letterSpacing: '0.15em'}}>
                        Découvrir →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="py-24 px-6" style={{background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4 gold-gradient">Spécifications Techniques</h2>
            <div className="w-20 h-px mx-auto" style={{background: 'linear-gradient(90deg, transparent, #d4af37, transparent)'}}></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
            {[
              { label: 'Mouvement', value: 'Sellita SW200-2 (Swiss Made)' },
              { label: 'Réserve de marche', value: '72 heures' },
              { label: 'Boîtier', value: '42mm coussin' },
              { label: 'Étanchéité', value: '100m (10 ATM)' },
              { label: 'Verre', value: 'Saphir bombé anti-reflet' },
              { label: 'Garantie', value: '3 ans internationale' },
            ].map((spec, idx) => (
              <div key={idx} className="flex justify-between items-baseline pb-4" style={{borderBottom: '1px solid rgba(212,175,55,0.1)'}}>
                <span className="text-sm uppercase" style={{color: '#888', letterSpacing: '0.1em'}}>{spec.label}</span>
                <span style={{color: '#f4e4c1'}}>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 CIVILISATIONS */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-6 gold-gradient">
            12 Civilisations, 12 Systèmes de Numérotation
          </h2>
          <p className="text-lg leading-relaxed" style={{color: '#c0c0c0'}}>
            Chaque cadran MERIDIEM célèbre l'universalité du temps à travers douze systèmes de numérotation issus de grandes civilisations : romain, arabe-indien, bengali, hébreu, thaï, géorgien, éthiopien, grec ancien, sino-japonais, cunéiforme sumérien.
          </p>
        </div>
      </section>
    </div>
  );
}
