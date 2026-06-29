import Link from 'next/link';
import { watches } from '@/lib/watches';

const watchImages: Record<string, string> = {
  v1: 'https://i.imgur.com/2an4xEQ.jpeg',
  v2: 'https://i.imgur.com/Jrthqf8.jpeg',
  v3: 'https://i.imgur.com/ZUtNQWs.jpeg',
  v4: 'https://i.imgur.com/apDtpuG.jpeg',
  v5: 'https://i.imgur.com/R0rEAjj.jpeg',
};

export default function Collection() {
  return (
    <div className="min-h-screen" style={{background: '#FFFFFF'}}>
      {/* HERO */}
      <section className="relative flex items-center justify-center" style={{height: '60vh', background: '#F8F7F5', borderBottom: '1px solid rgba(0,0,0,0.06)'}}>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="nav-link mb-6" style={{color: 'var(--gold)'}}>HAUTE HORLOGERIE</p>
          <h1 className="font-serif mb-6" style={{fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.05, fontWeight: 500, color: '#111111'}}>
            La Collection ALMA
          </h1>
          <div className="gold-line w-24 mx-auto mb-6" />
          <p className="text-lg" style={{color: '#666666', maxWidth: '36ch', margin: '0 auto'}}>
            12 civilisations. 25 pièces Fondateurs. 100 pièces Limitées.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {watches.map((watch) => (
              <Link key={watch.id} href={`/collection/${watch.id}`} className="group block card-luxury overflow-hidden">
                <div className="relative aspect-square overflow-hidden" style={{background: '#F5F5F3'}}>
                  <img
                    src={watchImages[watch.id]}
                    alt={watch.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5" style={{background: 'linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 100%)'}}>
                    <span className="nav-link" style={{color: 'var(--gold)'}}>{watch.seriesLabel}</span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl mb-1" style={{color: '#111111'}}>{watch.name}</h3>
                  <p className="text-sm mb-1" style={{color: '#888888', letterSpacing: '0.08em'}}>{watch.subtitle}</p>
                  <p className="text-xs mb-6" style={{color: '#BBBBBB', letterSpacing: '0.06em'}}>{watch.ref}</p>
                  <div className="gold-line w-full mb-5" />
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xl" style={{color: 'var(--gold)'}}>{watch.price}</span>
                    <span className="nav-link" style={{color: 'var(--gold)'}}>Découvrir →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS COMMUNES */}
      <section className="py-24 px-6" style={{background: '#F8F7F5', borderTop: '1px solid rgba(0,0,0,0.05)'}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="nav-link mb-4" style={{color: 'var(--gold)'}}>ADN TECHNIQUE</p>
            <h2 className="font-serif text-4xl mb-6" style={{color: '#111111'}}>Spécifications communes</h2>
            <div className="gold-line w-20 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-x-20">
            {[
              ['Mouvement', 'Sellita SW200-2 — Swiss Made'],
              ['Réserve de marche', '72 heures'],
              ['Boîtier', '42 mm — coussin'],
              ['Étanchéité', '100 m / 10 ATM'],
              ['Verre', 'Saphir bombé anti-reflet double face'],
              ['Garantie', '3 ans internationale'],
            ].map(([label, value], i) => (
              <div key={i} className="flex justify-between items-baseline py-5" style={{borderBottom: '1px solid rgba(0,0,0,0.06)'}}>
                <span style={{color: '#999999', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase'}}>{label}</span>
                <span style={{color: '#111111', fontSize: '0.9rem'}}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
