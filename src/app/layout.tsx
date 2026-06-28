import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ALMA — L\'Art du Temps Universel',
  description: '12 civilisations. 25 pi\u00e8ces. 1 montre. ALMA est une montre de luxe multiculturelle born\u00e9e en s\u00e9rie limit\u00e9e, portant les 12 syst\u00e8mes de num\u00e9ration de l\'humanit\u00e9.',
  keywords: ['montre luxe', 'haute horlogerie', 'multiculturel', 'serie limitee', 'Kickstarter', 'ALMA'],
  openGraph: {
    title: 'ALMA — L\'Art du Temps Universel',
    description: '12 civilisations. 25 pi\u00e8ces. 1 montre.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian text-[#f5f0e8] font-sans antialiased">
              {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-serif text-2xl bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent">
            ALMA
          </a>
          <div className="flex gap-8">
            <a href="/" className="text-neutral-400 hover:text-amber-200 transition-colors">Accueil</a>
            <a href="/collection" className="text-neutral-400 hover:text-amber-200 transition-colors">Collection</a>
            <a href="/histoire" className="text-neutral-400 hover:text-amber-200 transition-colors">Histoire</a>
            <a href="/fabrication" className="text-neutral-400 hover:text-amber-200 transition-colors">Fabrication</a>
          </div>
        </div>
      </nav>

        {children}
      </body>
    </html>
  );
}
