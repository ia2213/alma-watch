import type { Metadata } from 'next';
import ContactClient from '@/components/ContactClient';

export const metadata: Metadata = {
  title: 'Conciergerie & Relations Privées | AVICEN Horlogerie',
  description: 'Contactez la conciergerie privée AVICEN pour toute réservation de pièce fondateur numérotée, renseignement technique ou demande presse.',
  alternates: {
    canonical: 'https://avicen-watch.vercel.app/contact',
  },
  openGraph: {
    title: 'Conciergerie & Relations Privées — AVICEN Horlogerie',
    description: 'Service client dédié aux acquéreurs et passionnés de haute horlogerie.',
    url: 'https://avicen-watch.vercel.app/contact',
    images: ['/watches/acier-noir.png'],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
