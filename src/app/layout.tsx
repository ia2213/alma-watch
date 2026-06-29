import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'ALMA — L\'Art du Temps Universel',
  description: '12 civilisations. 25 pièces. 1 montre. ALMA, montre de haute horlogerie suisse multiculturelle en série limitée.',
  keywords: ['montre luxe', 'haute horlogerie', 'multiculturel', 'serie limitee', 'Kickstarter', 'ALMA'],
  openGraph: {
    title: 'ALMA — L\'Art du Temps Universel',
    description: '12 civilisations. 25 pièces. 1 montre.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080808] text-[#F8F3EC] font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
