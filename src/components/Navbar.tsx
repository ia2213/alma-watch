'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/collection', label: 'Collection' },
  { href: '/histoire', label: 'Histoire' },
  { href: '/fabrication', label: 'Fabrication' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/8">
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

      {/* Navigation en dessous */}
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
                color: isActive ? 'var(--gold)' : '#888888',
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
