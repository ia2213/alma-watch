import { watches, getWatch } from '@/lib/watches';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EditionSelector } from '@/components/EditionSelector';

export default function WatchPage({ params }: { params: { id: string } }) {
  const watch = getWatch(params.id);

  if (!watch) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* ─── EN-TÊTE FIXE (Retour) ─── */}
      <div className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
        <Link href="/collection" className="nav-link text-white/50 hover:text-white transition flex items-center gap-2">
          <span>←</span> RETOUR À LA COLLECTION
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* ─── GAUCHE : IMAGES (Scrollable) ─── */}
        <div className="w-full lg:w-3/5 h-[50vh] lg:h-screen lg:sticky top-0 overflow-y-auto no-scrollbar">
          <div className="flex flex-col">
            {watch.images.map((img, i) => (
              <div key={i} className="h-screen w-full relative flex-shrink-0 flex items-center justify-center p-12 bg-gradient-to-b from-[#111] to-[#050505] border-b border-white/5">
                <img 
                  src={img} 
                  alt={`${watch.name} vue ${i+1}`} 
                  className="w-full h-full object-contain filter drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ─── DROITE : INFORMATIONS & SÉLECTEUR ─── */}
        <div className="w-full lg:w-2/5 p-8 lg:p-16 flex flex-col justify-center bg-[#080808] border-l border-white/5 relative">
          
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] tracking-[0.3em] font-semibold" style={{color: watch.color}}>{watch.series.toUpperCase()}</span>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>

          {/* Infos */}
          <div>
            <p className="nav-link mb-4" style={{color: '#C8A84B', letterSpacing: '0.3em'}}>AVICEN WATCHES</p>
            <h1 className="font-serif mb-2 gold-gradient" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 500, lineHeight: 1.1}}>
              {watch.name}
            </h1>
            <h2 className="text-sm tracking-[0.1em] text-white/40 font-light mb-8">
              {watch.subtitle}
            </h2>
            
            <p className="text-white/60 leading-relaxed font-light mb-12">
              {watch.description}
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-16">
              {watch.specs.map((spec, i) => (
                <div key={i} className="border-b border-white/10 pb-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1">{spec.label}</div>
                  <div className="text-sm font-medium text-white/80">{spec.value}</div>
                </div>
              ))}
            </div>

            {/* Composant interactif de réservation */}
            <EditionSelector watch={watch} />

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}