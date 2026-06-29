'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/collection', label: 'Collection' },
  { href: '/histoire', label: 'Histoire' },
  { href: '/fabrication', label: 'Fabrication' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? '#FFFFFF' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      {/* Logo centré */}
      <div className="flex items-center justify-center pt-5 pb-2">
        <Link
          href="/"
          className="font-serif tracking-[0.35em] gold-gradient"
          style={{fontSize: '1.6rem', fontWeight: 500}}
        >
          ALMA
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-10 pb-4">
        {links.map(({ href, label }) => {
          const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className="transition-colors duration-300"
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                fontWeight: 400,
                color: isActive ? 'var(--gold)' : scrolled ? '#888888' : 'rgba(255,255,255,0.75)',
                borderBottom: isActive ? '1px solid var(--gold)' : '1px solid transparent',
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
