import { watches, getWatch } from '@/lib/watches';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EditionSelector } from '@/components/EditionSelector';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return watches.map(w => ({ id: w.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const watch = getWatch(params.id);
  if (!watch) {
    return {
      title: 'Montre Non Trouvée',
    };
  }

  const title = `AVICEN ${watch.name} — ${watch.subtitle} | Haute Horlogerie`;
  const description = `${watch.description} Boîtier 39mm, Mouvement Sellita SW200-2 Swiss Made, Verre saphir bombé double face.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://avicen-watch.vercel.app/collection/${watch.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://avicen-watch.vercel.app/collection/${watch.id}`,
      type: 'website',
      images: [
        {
          url: watch.images[0],
          width: 1200,
          height: 630,
          alt: `Montre AVICEN ${watch.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [watch.images[0]],
    },
  };
}

export default function WatchPage({ params }: { params: { id: string } }) {
  const watch = getWatch(params.id);

  if (!watch) {
    notFound();
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `AVICEN ${watch.name}`,
    image: `https://avicen-watch.vercel.app${watch.images[0]}`,
    description: watch.description,
    sku: watch.ref,
    brand: {
      '@type': 'Brand',
      name: 'AVICEN',
    },
    offers: {
      '@type': 'Offer',
      url: `https://avicen-watch.vercel.app/collection/${watch.id}`,
      priceCurrency: 'EUR',
      price: watch.price.toString(),
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/PreOrder',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://avicen-watch.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Collection',
        item: 'https://avicen-watch.vercel.app/collection',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: watch.name,
        item: `https://avicen-watch.vercel.app/collection/${watch.id}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Safe static structured JSON-LD data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ─── EN-TÊTE FIXE (Retour) ─── */}
      <div className="fixed top-0 left-0 w-full z-40 p-6 flex justify-between items-center bg-gradient-to-b from-[#080808]/90 to-transparent">
        <Link 
          href="/collection" 
          className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-[#C8A84B] transition flex items-center gap-2 pt-20 pl-4"
        >
          <span>←</span> RETOUR À LA COLLECTION
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen pt-24 lg:pt-0">
        
        {/* ─── GAUCHE : VISUEL PRODUIT PRINCIPAL ─── */}
        <div className="w-full lg:w-3/5 lg:min-h-screen flex flex-col items-center justify-center p-8 lg:p-16 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505] border-b lg:border-b-0 lg:border-r border-white/5 relative">
          
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            {/* Halo lumineux subtil */}
            <div 
              className="absolute inset-0 rounded-full blur-[140px] opacity-20 pointer-events-none"
              style={{ background: watch.color }}
            />
            
            <img 
              src={watch.images[0]} 
              alt={`Montre AVICEN ${watch.name} - Cadran 12 civilisations`} 
              className="w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] z-10 transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Badges d'excellence horlogère sous la montre */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-lg mt-8 pt-8 border-t border-white/10 z-10">
            <div className="text-center">
              <div className="text-[10px] text-[#C8A84B] uppercase tracking-widest font-semibold mb-1">Mouvement</div>
              <div className="text-xs text-white/80 font-light">Sellita SW200-2</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-[10px] text-[#C8A84B] uppercase tracking-widest font-semibold mb-1">Verre</div>
              <div className="text-xs text-white/80 font-light">Saphir Double Face</div>
            </div>
            <div className="text-center">
              <div className="text-[10px] text-[#C8A84B] uppercase tracking-widest font-semibold mb-1">Certification</div>
              <div className="text-xs text-white/80 font-light">Swiss Made</div>
            </div>
          </div>
        </div>

        {/* ─── DROITE : INFORMATIONS & SÉLECTEUR ─── */}
        <div className="w-full lg:w-2/5 p-8 lg:p-16 flex flex-col justify-center bg-[#080808] relative">
          
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] tracking-[0.3em] font-semibold" style={{color: watch.color}}>{watch.series.toUpperCase()}</span>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C8A84B] mb-2 font-semibold">AVICEN WATCHES</p>
            <h1 className="font-serif mb-2 text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              {watch.name}
            </h1>
            <h2 className="text-xs tracking-[0.1em] text-white/40 font-light mb-6">
              {watch.subtitle}
            </h2>
            
            <p className="text-white/70 leading-relaxed font-light text-sm mb-10">
              {watch.description}
            </p>

            {/* Spécifications techniques */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-10 bg-white/5 p-6 rounded-xl border border-white/10">
              {watch.specs.map((spec, i) => (
                <div key={i} className="border-b border-white/5 pb-2">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[#C8A84B] mb-0.5">{spec.label}</div>
                  <div className="text-xs font-medium text-white/90">{spec.value}</div>
                </div>
              ))}
            </div>

            {/* Composant interactif de réservation */}
            <EditionSelector watch={watch} />

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
