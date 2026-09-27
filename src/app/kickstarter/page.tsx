import type { Metadata } from 'next';
import KickstarterClient from '@/components/KickstarterClient';

export const metadata: Metadata = {
  title: 'Campagne Kickstarter & Éditions Fondateur | AVICEN Horlogerie',
  description: 'Rejoignez l\'avant-première Kickstarter de la montre AVICEN La Tolérance : 24 pièces Fondateur numérotées, mouvement automatique Sellita SW200-2 Swiss Made.',
  alternates: {
    canonical: 'https://avicen-watch.vercel.app/kickstarter',
  },
  openGraph: {
    title: 'Campagne Kickstarter — AVICEN La Tolérance',
    description: 'Une montre réunissant 12 civilisations sur un seul cadran d\'exception. Précommandes exclusives Fondateur.',
    url: 'https://avicen-watch.vercel.app/kickstarter',
    images: ['/watches/acier-noir.png'],
  },
};

export default function KickstarterPage() {
  return <KickstarterClient />;
}
