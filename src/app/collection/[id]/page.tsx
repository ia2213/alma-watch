import { watches, getWatch } from '@/lib/watches';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const watchImages: Record<string, string> = {
  v1: 'https://i.imgur.com/2an4xEQ.jpeg',
  v2: 'https://i.imgur.com/Jrthqf8.jpeg',
  v3: 'https://i.imgur.com/ZUtNQWs.jpeg',
  v4: 'https://i.imgur.com/apDtpuG.jpeg',
  v5: 'https://i.imgur.com/R0rEAjj.jpeg',
};

export async function generateStaticParams() {
  return watches.map(w => ({ id: w.id }));
}

export default function WatchPage({ params }: { params: { id: string } }) {
  const watch = getWatch(params.id);
  if (!watch) notFound();

  const currentIndex = watches.findIndex(w => w.id === params.id);
  const prev = watches[currentIndex - 1];
  const next = watches[currentIndex + 1];

  return (
    <div className="min-h-screen" style={{background: '#080808'}}>
      {/* BREADCRUMB */}
      <div className="pt-28 pb-0 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3" style={{color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase'}}>
          <Link href="/collection" className="hover:text-amber-200 transition-colors">Collection</Link>
          <span style={{color: '#C8A84B', opacity: 0.4}}>—</span>
          <span style={{color: '#E8D5A0'}}>{watch.name}</span>
        </div>
      </div>

      {/* HERO PRODUIT */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden" style={{background: '#080808', border: '1px solid rgba(201,168,76,0.1)'}}>
            <img
              src={watchImages[watch.id]}
              alt={watch.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 px-4 py-2" style={{background: 'rgba(8,8,8,0.85)', border: '1px solid rgba(201,168,76,0.3)'}}>
              <span className="nav-link" style={{color: '#C8A84B'}}>{watch.seriesLabel}</span>
            </div>
          </div>

          {/* Infos */}
          <div>
            <p className="nav-link mb-4" style={{color: '#C8A84B', letterSpacing: '0.3em'}}>ALMA WATCHES</p>
            <h1 className="font-serif mb-2 gold-gradient" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 500, lineHeight: 1.1}}>
              {watch.name}
            </h1>
            <p className="font-serif text-xl mb-2" style={{color: '#E8D5A0', opacity: 0.7}}>{watch.subtitle}</p>
            <p className="text-xs mb-10" style={{color: '#666', letterSpacing: '0.1em'}}>{watch.ref}</p>
            <div className="gold-line w-16 mb-10" />
            <p className="text-base leading-relaxed mb-12" style={{color: '#C0B8AF', maxWidth: '44ch'}}>
              {watch.description}
            </p>
            <div className="mb-10">
              <p className="nav-link mb-2" style={{color: 'rgba(255,255,255,0.35)'}}>Prix de vente</p>
              <p className="font-serif text-4xl gold-gradient">{watch.price}</p>
              {watch.priceNote && <p className="text-xs mt-2" style={{color: 'rgba(255,255,255,0.35)'}}>{watch.priceNote}</p>}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
                style={{background: '#C8A84B', color: '#080808'}}
              >
                Réserver mon exemplaire
              </button>
              <Link
                href="/collection"
                className="px-10 py-4 text-xs uppercase tracking-[0.2em] text-center nav-link transition-all duration-300"
                style={{border: '1px solid rgba(201,168,76,0.3)', color: 'rgba(255,255,255,0.6)'}}
              >
                ← Retour collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="py-24 px-8" style={{background: '#0a0a0a', borderTop: '1px solid rgba(201,168,76,0.07)'}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="nav-link mb-4" style={{color: '#C8A84B'}}>FICHE TECHNIQUE</p>
            <h2 className="font-serif text-3xl gold-gradient">Spécifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-20">
            {[
              ['Boîtier', watch.caseMaterial],
              ['Diamètre', watch.caseSize],
              ['Cadran', watch.dial],
              ['Mouvement', watch.movement],
              ['Étanchéité', watch.waterResistance],
              ['Verre', watch.glass],
              ['Bracelet', watch.bracelet],
              ['Édition', watch.limited],
            ].map(([label, value], i) => (
              <div key={i} className="flex justify-between items-baseline py-5" style={{borderBottom: '1px solid rgba(201,168,76,0.1)'}}>
                <span style={{color: 'rgba(255,255,255,0.38)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', flexShrink: 0}}>{label}</span>
                <span style={{color: '#FFFFFF', fontSize: '0.88rem', maxWidth: '58%', textAlign: 'right', fontWeight: 300, letterSpacing: '0.02em'}}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAVIGATION ENTRE MODELES */}
      <section className="py-20 px-8" style={{borderTop: '1px solid rgba(201,168,76,0.07)'}}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {prev ? (
            <Link href={`/collection/${prev.id}`} className="group flex items-center gap-6">
              <span className="nav-link group-hover:text-amber-200 transition-colors" style={{color: 'rgba(255,255,255,0.35)'}}>← Précédent</span>
              <div>
                <p className="text-xs mb-1" style={{color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase'}}>{prev.seriesLabel}</p>
                <p className="font-serif text-xl" style={{color: '#E8D5A0'}}>{prev.name}</p>
              </div>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/collection/${next.id}`} className="group flex items-center gap-6 text-right">
              <div>
                <p className="text-xs mb-1" style={{color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase'}}>{next.seriesLabel}</p>
                <p className="font-serif text-xl" style={{color: '#E8D5A0'}}>{next.name}</p>
              </div>
              <span className="nav-link group-hover:text-amber-200 transition-colors" style={{color: 'rgba(255,255,255,0.35)'}}>Suivant →</span>
            </Link>
          ) : <div />}
        </div>
      </section>
    </div>
  );
}
