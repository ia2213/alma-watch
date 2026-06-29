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
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="flex items-end justify-center pb-20 pt-48 px-6" style={{background: '#F8F7F5'}}>
        <div className="text-center">
          <p className="nav-link mb-4" style={{color: 'var(--gold)'}}>HAUTE HORLOGERIE</p>
          <h1 className="font-serif text-black mb-6" style={{fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 500, lineHeight: 1.05}}>
            La Collection ALMA
          </h1>
          <div className="gold-line w-24 mx-auto mb-6" />
          <p className="text-black/50 text-lg">
            12 civilisations · 25 pièces Fondateurs · 100 pièces Limitées
          </p>
        </div>
      </section>

      {/* CARROUSEL — DESKTOP */}
      <section className="py-16 hidden md:block">
        <div
          className="flex gap-6 overflow-x-auto px-8"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {watches.map((watch) => (
            <Link
              key={watch.id}
              href={`/collection/${watch.id}`}
              className="group flex-shrink-0 card-luxury overflow-hidden"
              style={{width: '340px', scrollSnapAlign: 'center'}}
            >
              <div className="relative overflow-hidden" style={{height: '340px', background: '#F5F5F3'}}>
                <img
                  src={watchImages[watch.id]}
                  alt={watch.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{background: 'linear-gradient(to top, rgba(255,255,255,0.92) 0%, transparent 100%)'}}
                >
                  <span className="nav-link" style={{color: 'var(--gold)'}}>{watch.seriesLabel}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-1" style={{color: '#111111'}}>{watch.name}</h3>
                <p className="text-xs mb-4" style={{color: '#999999', letterSpacing: '0.08em'}}>{watch.subtitle}</p>
                <div className="gold-line w-full mb-4" />
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg" style={{color: 'var(--gold)'}}>{watch.price}</span>
                  <span className="nav-link" style={{color: 'var(--gold)'}}>Voir →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-center mt-6 text-xs" style={{color: '#CCCCCC', letterSpacing: '0.15em'}}>FAIRE DÉFILER →</p>
      </section>

      {/* CARROUSEL — MOBILE : snap-center parfait */}
      <section className="py-12 md:hidden">
        <div
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory"
          style={{
            paddingLeft: 'calc(50vw - 145px)',
            paddingRight: 'calc(50vw - 145px)',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {watches.map((watch) => (
            <Link
              key={watch.id}
              href={`/collection/${watch.id}`}
              className="snap-center flex-shrink-0 overflow-hidden rounded-2xl border border-black/8"
              style={{width: '290px', background: '#FAFAF9'}}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{height: '290px', background: '#F0EFED'}}>
                <img
                  src={watchImages[watch.id]}
                  alt={watch.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-3"
                  style={{background: 'linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 100%)'}}
                >
                  <span style={{fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)'}}>
                    {watch.seriesLabel}
                  </span>
                </div>
              </div>

              {/* Infos */}
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-serif text-[1.15rem] leading-tight text-black">{watch.name}</h3>
                  <p className="text-[0.72rem] mt-1" style={{color: '#999', letterSpacing: '0.08em'}}>{watch.subtitle}</p>
                </div>
                <div className="gold-line w-full" />
                <div className="flex items-center justify-between">
                  <span className="font-serif text-base" style={{color: 'var(--gold)'}}>{watch.price}</span>
                  <span style={{fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)'}}>Voir →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-center mt-5 text-[0.65rem] tracking-[0.2em] uppercase" style={{color: '#CCC'}}>
          ← Faire défiler →
        </p>
      </section>

      {/* SPECS COMMUNES */}
      <section className="py-24 px-6" style={{background: '#F8F7F5', borderTop: '1px solid rgba(0,0,0,0.05)'}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="nav-link mb-3" style={{color: 'var(--gold)'}}>ADN TECHNIQUE</p>
            <h2 className="font-serif text-4xl text-black mb-4">Spécifications communes</h2>
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
                <span style={{color: '#999', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase'}}>{label}</span>
                <span style={{color: '#111', fontSize: '0.9rem'}}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
