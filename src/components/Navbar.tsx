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
    <nav className="fixed top-0 left-0 right-0 z-50" style={{
      background: 'rgba(8,8,8,0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(201,168,76,0.12)'
    }}>
      <div className="max-w-7xl mx-auto px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl tracking-[0.25em] gold-gradient" style={{fontWeight: 500}}>
          ALMA
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`nav-link${isActive ? ' active' : ''}`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/collection"
          className="hidden md:inline-block text-[0.65rem] uppercase tracking-[0.2em] px-6 py-2 font-medium transition-all duration-300"
          style={{
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = 'var(--gold)';
            (e.currentTarget as HTMLElement).style.color = '#080808';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = 'transparent';
            (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
          }}
        >
          Explorer
        </Link>
      </div>
    </nav>
  );
}
