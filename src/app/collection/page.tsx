import type { Metadata } from 'next';
import CollectionClient from '@/components/CollectionClient';

export const metadata: Metadata = {
  title: 'La Collection AVICEN | Garde-Temps des 12 Civilisations',
  description: 'Découvrez la collection AVICEN La Tolérance : Édition Fondateur 12 pièces exclusives numérotées et éditions classiques Swiss Made Sellita SW200-2.',
  alternates: {
    canonical: 'https://avicen-watch.vercel.app/collection',
  },
  openGraph: {
    title: 'La Collection AVICEN — Garde-Temps des 12 Civilisations',
    description: 'Explorez nos garde-temps d\'exception : Acier Noir, Or Blanc, Acier Blanc, Or Rose Nacre et Or Noir.',
    url: 'https://avicen-watch.vercel.app/collection',
    images: ['/watches/acier-noir.png'],
  },
};

export default function CollectionPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Collection de Montres AVICEN',
    url: 'https://avicen-watch.vercel.app/collection',
    description: 'Collection de montres automatiques suisses réunissant 12 civilisations.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          url: 'https://avicen-watch.vercel.app/collection/v1',
          name: 'LA TOLÉRANCE Acier Noir',
        },
        {
          '@type': 'ListItem',
          position: 2,
          url: 'https://avicen-watch.vercel.app/collection/v3',
          name: 'LA TOLÉRANCE Or Blanc',
        },
        {
          '@type': 'ListItem',
          position: 3,
          url: 'https://avicen-watch.vercel.app/collection/v2',
          name: 'LA TOLÉRANCE Acier Blanc',
        },
      ],
    },
  };

  return (
    <>
      {/* Safe static structured JSON-LD data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <CollectionClient />
    </>
  );
}
