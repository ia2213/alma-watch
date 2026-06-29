'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Collection() {
  const watches = [
    {
      name: 'V1 KS Exclusive',
      subtitle: 'Météorite Gibeon',
      ref: 'KS 01/25 à KS 25/25',
      series: 'Série Fondateurs',
      price: '4 000 €',
      desc: 'Cadran en météorite Gibeon authentique, 4 milliards d\'années. Boîtier Full Titane Grade 5. 25 pièces numérotées exclusives.',
      features: ['Titane Grade 5', 'Météorite Gibeon authentique', 'Sellita SW200-2 Swiss Made', 'Étanchéité 100m'],
      material: 'Full Titane Grade 5',
      dial: 'Météorite Gibeon',
      image: 'https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/8576909/c2e5c5f0-8e5a-4f88-8f18-c6de8c5e8b9a/IMG_0528.jpeg',
      limited: true
    },
    {
      name: 'V2 Carbone Météorite',
      subtitle: 'Full Carbone Forgé',
      ref: 'ALMA-CBN-MET',
      series: 'Série Fondateurs',
      price: '4 500 €',
      desc: 'Boîtier Full Carbone forgé avec cadran météorite Gibeon. Design furtif et ultra-léger. Édition limitée 25 pièces.',
      features: ['Carbone Forgé', 'Cadran Météorite Gibeon', 'Sellita SW200-2 Swiss Made', 'Étanchéité 100m'],
      material: 'Full Carbone Forgé',
      dial: 'Météorite Gibeon',
      image: 'https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/8576909/2a7f5e5a-6ec5-4b5a-8f18-f8de8c5e8b9a/IMG_0527.jpeg',
      limited: true
    },
    {
      name: 'V3 Classique Blanc',
      subtitle: 'Blanc Céramique',
      ref: '001/100 à 100/100',
      series: 'Série Limitée',
      price: '6 100 €',
      desc: 'Cadran blanc céramique avec boîtier Full Acier 316L. Élégance intemporelle. 100 pièces numérotées.',
      features: ['Acier 316L Full Silver', 'Cadran Blanc Céramique', 'Sellita SW200-2 Swiss Made', 'Étanchéité 100m'],
      material: 'Full Acier 316L',
      dial: 'Blanc Céramique',
      image: 'https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/8576909/3f8f5e5a-6ec5-4b5a-9f28-h9de8c5e8b9a/IMG_0530.jpeg',
      limited: true
    },
    {
      name: 'V4 Sport-Luxe',
      subtitle: 'Noir Mat',
      ref: '001/100 à 100/100',
      series: 'Série Limitée',
      price: '6 100 €',
      desc: 'Cadran noir mat avec boîtier Full Acier 316L. Design moderne et épuré. 100 pièces numérotées.',
      features: ['Acier 316L Full Silver', 'Cadran Noir Mat', 'Sellita SW200-2 Swiss Made', 'Étanchéité 100m'],
      material: 'Full Acier 316L',
      dial: 'Noir Mat',
      image: 'https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/8576909/4g9g5e5a-7fc5-4c6a-af38-i0ee8d6e8c0a/IMG_0529.jpeg',
      limited: true
    },
    {
      name: 'V5 Élégant',
      subtitle: 'Nacre & Or Rose',
      ref: 'ALMA-MOP-RG',
      series: 'Série Prestige',
      price: 'Sur demande',
      desc: 'Cadran en nacre naturelle (Mother of Pearl) avec boîtier Full Or Rose 18 carats. Pièce d\'exception sur mesure.',
      features: ['Or Rose 18K', 'Cadran Nacre MOP Naturelle', 'Sellita SW200-2 Swiss Made', 'Étanchéité 100m'],
      material: 'Full Or Rose 18K',
      dial: 'Nacre Naturelle (MOP)',
      image: 'https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/8576909/5h0h5f5b-8gd5-4d7b-bg48-j1ff8e7f8d1b/IMG_0531.jpeg',
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
            <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent">La Collection MERIDIEM</span>
          </h1>
          <p className="text-neutral-400 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            12 civilisations • 25 pièces Fondateurs • 100 pièces Limitées
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
                <div className="aspect-square mb-6 rounded-2xl overflow-hidden relative bg-neutral-900">
                  <img 
                    src={watch.image} 
                    alt={watch.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {watch.limited && (
                    <div className="absolute top-6 right-6 px-4 py-2 bg-neutral-950/80 backdrop-blur-sm border border-amber-800/50 rounded-full">
                      <span className="text-xs tracking-widest text-amber-200 uppercase">{watch.series}</span>
                    </div>
                  )}
                </div>
                
                {/* Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl text-amber-200 mb-1">{watch.name}</h3>
                    <p className="text-lg text-amber-300/70 font-serif mb-2">{watch.subtitle}</p>
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
              { label: 'Réserve de marche', value: '72 heures' },
              { label: 'Boîtier', value: '42mm coussin' },
              { label: 'Étanchéité', value: '100m (10 ATM)' },
              { label: 'Verre', value: 'Saphir bombé anti-reflet' },
              { label: 'Garantie', value: '3 ans internationale' },
            ].map((spec, idx) => (
              <div key={idx} className="flex justify-between items-baseline pb-4 border-b border-neutral-800">
                <span className="text-sm tracking-wider text-neutral-500 uppercase">{spec.label}</span>
                <span className="text-amber-200">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 CIVILISATIONS */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent mb-8">
            12 Civilisations, 12 Systèmes de Numérotation
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Chaque cadran MERIDIEM célèbre l'universalité du temps à travers douze systèmes de numérotation issus de grandes civilisations : romain, arabe-indien, bengali, hébreu, thaï, géorgien, éthiopien, grec ancien, sino-japonais, cunéiforme sumérien.
          </p>
        </div>
      </section>
    </div>
  );
}
