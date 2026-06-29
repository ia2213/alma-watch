import Link from 'next/link';
import { watches } from '@/lib/watches';

const watchImages: Record<string, string> = {
  v1: 'https://i.imgur.com/placeholder1.jpg',
  v2: 'https://i.imgur.com/placeholder2.jpg',
  v3: 'https://i.imgur.com/placeholder3.jpg',
  v4: 'https://i.imgur.com/yf8UndZ.jpeg',
  v5: 'https://i.imgur.com/placeholder5.jpg',
};

export default function Collection() {
  return (
    <div className="min-h-screen" style={{background: '#080808'}}>
      <section className="relative flex items-center justify-center" style={{height: '100svh'}}>
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, #080808 70%)'}} />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="nav-link mb-8" style={{color: 'var(--gold)', letterSpacing: '0.3em'}}>HAUTE HORLOGERIE</p>
          <h1 className="font-serif mb-8 gold-gradient" style={{fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 1.05, fontWeight: 500}}>La Collection<br />ALMA</h1>
          <div className="gold-line w-24 mx-auto mb-8" />
          <p className="text-lg" style={{color: 'var(--text-muted)', letterSpacing: '0.05em', maxWidth: '36ch', margin: '0 auto'}}>12 civilisations. 25 pièces Fondateurs. 100 pièces Limitées.</p>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {watches.map((watch) => (
              <Link key={watch.id} href={`/collection/${watch.id}`} className="group block card-luxury overflow-hidden">
                <div className="relative aspect-square overflow-hidden" style={{background: '#0d0d0d'}}>
                  <img src={watchImages[watch.id]} alt={watch.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute bottom-0 left-0 right-0 p-5" style={{background: 'linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 100%)'}}>
                    <span className="nav-link" style={{color: 'var(--gold)'}}>{watch.seriesLabel}</span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl mb-1" style={{color: 'var(--gold-light)'}}>{watch.name}</h3>
                  <p className="text-sm mb-1" style={{color: 'var(--text-muted)', letterSpacing: '0.08em'}}>{watch.subtitle}</p>
                  <p className="text-xs mb-6" style={{color: '#555', letterSpacing: '0.06em'}}>{watch.ref}</p>
                  <div className="gold-line w-full mb-5" />
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xl" style={{color: 'var(--gold)'}}>{watch.price}</span>
                    <span className="nav-link" style={{color: 'var(--gold-light)'}}>Découvrir →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6" style={{background: '#0d0d0d', borderTop: '1px solid rgba(201,168,76,0.08)'}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="nav-link mb-4" style={{color: 'var(--gold)'}}>ADN TECHNIQUE</p>
            <h2 className="font-serif text-4xl gold-gradient mb-6">Spécifications communes</h2>
            <div className="gold-line w-20 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-x-20">
            {[['Mouvement','Sellita SW200-2 — Swiss Made'],['Réserve de marche','72 heures'],['Boîtier','42 mm — coussin'],['Tanchéité','100 m / 10 ATM'],['Verre','Saphir bombé anti-reflet double face'],['Garantie','3 ans internationale']].map(([label, value], i) => (
              <div key={i} className="flex justify-between items-baseline py-5" style={{borderBottom: '1px solid rgba(201,168,76,0.08)'}}>
                <span style={{color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase'}}>{label}</span>
                <span style={{color: 'var(--ivory)', fontSize: '0.9rem'}}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
