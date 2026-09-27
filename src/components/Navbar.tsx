'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/collection', label: 'Collection' },
  { href: '/histoire', label: 'Histoire' },
  { href: '/fabrication', label: 'Fabrication' },
  { href: '/kickstarter', label: 'Kickstarter' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    // reset au changement de page
    setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // Sur accueil : transparent → blanc/sombre au scroll
  const isTransparent = isHome && !scrolled;

  const navBg = isTransparent ? 'transparent' : '#080808';
  const navBorder = isTransparent ? '1px solid transparent' : '1px solid rgba(255,255,255,0.08)';
  const navShadow = isTransparent ? 'none' : '0 4px 30px rgba(0,0,0,0.5)';

  // Couleur des liens selon contexte
  const linkColor = (isActive: boolean) => {
    if (isActive) return '#C8A84B';
    if (isTransparent) return 'rgba(255,255,255,0.85)';
    return 'rgba(255,255,255,0.7)';
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md"
      style={{ background: navBg, borderBottom: navBorder, boxShadow: navShadow }}
    >
      {/* Logo centré */}
      <div className="flex items-center justify-center pt-5 pb-2">
        <Link
          href="/"
          className="font-serif tracking-[0.35em]"
          style={{
            fontSize: '1.6rem',
            fontWeight: 500,
            background: 'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 35%, #D4A843 60%, #EDD98A 80%, #BF9733 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.38em',
          }}
        >
          AVICEN
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 md:gap-10 pb-4 overflow-x-auto px-4 no-scrollbar">
        {links.map(({ href, label }) => {
          const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className="transition-all duration-300 hover:text-[#C8A84B] whitespace-nowrap"
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: linkColor(isActive),
                borderBottom: isActive ? '1px solid #C8A84B' : '1px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
