import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://avicen-watch.vercel.app'),
  title: {
    default: "AVICEN | L'Art du Temps Universel — Haute Horlogerie Suisse",
    template: '%s | AVICEN',
  },
  description: "Haute horlogerie suisse multiculturelle. La première montre réunissant les systèmes de numération de 12 civilisations majeures sur un cadran d'exception. Mouvement automatique Sellita SW200-2.",
  keywords: [
    'AVICEN',
    'montre de luxe',
    'haute horlogerie',
    'Swiss Made',
    'montre 12 civilisations',
    'Sellita SW200-2',
    'montre multiculturelle',
    'édition fondateur',
    'horlogerie suisse',
    'montre automatique',
  ],
  authors: [{ name: 'AVICEN Horlogerie' }],
  creator: 'AVICEN',
  publisher: 'AVICEN',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://avicen-watch.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://avicen-watch.vercel.app',
    siteName: 'AVICEN',
    title: "AVICEN | L'Art du Temps Universel — Haute Horlogerie",
    description: "Une montre réunissant 12 civilisations. Mouvement Sellita SW200-2 assemblé en Suisse. Éditions limitées numérotées.",
    images: [
      {
        url: '/watches/acier-noir.png',
        width: 1200,
        height: 630,
        alt: 'Montre AVICEN La Tolérance — Cadran 12 Civilisations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AVICEN | L'Art du Temps Universel",
    description: 'Haute horlogerie multiculturelle. 12 civilisations réunies sur un seul cadran.',
    images: ['/watches/acier-noir.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', sizes: 'any' },
    ],
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AVICEN',
    url: 'https://avicen-watch.vercel.app',
    logo: 'https://avicen-watch.vercel.app/favicon.svg',
    description: "Maison horlogère suisse multiculturelle réunissant les systèmes de numération de 12 civilisations majeures.",
    sameAs: [
      'https://www.instagram.com',
      'https://www.linkedin.com',
    ],
  };

  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link 
          href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500&display=swap" 
          rel="stylesheet" 
        />
        {/* Safe static structured JSON-LD data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-[#111111] font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
