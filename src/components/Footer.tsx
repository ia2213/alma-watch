import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t py-16 px-6 bg-[#080808] text-white" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand column */}
        <div className="md:col-span-1 space-y-4">
          <Link 
            href="/"
            className="font-serif text-2xl tracking-[0.3em] inline-block"
            style={{
              background: 'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 35%, #D4A843 60%, #EDD98A 80%, #BF9733 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.38em',
            }}
          >
            AVICEN
          </Link>
          <p className="text-xs text-white/50 leading-relaxed max-w-xs font-light">
            Haute horlogerie multiculturelle. La première montre réunissant les 12 civilisations de l'humanité sur un même cadran.
          </p>
          <div className="text-[10px] text-[#C8A84B] tracking-widest uppercase font-semibold">
            Swiss Made · Mouvement Sellita SW200-2
          </div>
        </div>

        {/* Navigation column */}
        <div className="space-y-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#C8A84B] font-semibold mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs text-white/60">
            <li><Link href="/" className="hover:text-white transition">Accueil</Link></li>
            <li><Link href="/collection" className="hover:text-white transition">La Collection</Link></li>
            <li><Link href="/histoire" className="hover:text-white transition">Les 12 Civilisations</Link></li>
            <li><Link href="/fabrication" className="hover:text-white transition">Fabrication Suisse</Link></li>
            <li><Link href="/kickstarter" className="hover:text-[#C8A84B] transition font-medium">Campagne Kickstarter</Link></li>
          </ul>
        </div>

        {/* Modèles column */}
        <div className="space-y-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#C8A84B] font-semibold mb-4">
            Éditions
          </h4>
          <ul className="space-y-2 text-xs text-white/60">
            <li><Link href="/collection/v1" className="hover:text-white transition">La Tolérance Acier Noir (01-12)</Link></li>
            <li><Link href="/collection/v3" className="hover:text-white transition">La Tolérance Or Blanc (01-12)</Link></li>
            <li><Link href="/collection/v2" className="hover:text-white transition">La Tolérance Acier Blanc</Link></li>
            <li><Link href="/collection/v4" className="hover:text-white transition">La Tolérance Or Rose Nacre</Link></li>
            <li><Link href="/collection/v5" className="hover:text-white transition">La Tolérance Or Noir</Link></li>
          </ul>
        </div>

        {/* Service client & Conciergerie */}
        <div className="space-y-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#C8A84B] font-semibold mb-4">
            Service & Légal
          </h4>
          <ul className="space-y-2 text-xs text-white/60">
            <li><Link href="/contact" className="hover:text-white transition">Conciergerie & Contact</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-white transition">Mentions Légales & Confidentialité</Link></li>
            <li><span className="text-white/40">Garantie Internationale 3 Ans</span></li>
            <li><span className="text-white/40">Livraison Assurée Sécurisée</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 tracking-wider">
        <div>© 2026 AVICEN. Tous droits réservés. Haute Horlogerie Suisse.</div>
        <div className="flex gap-6">
          <Link href="/mentions-legales" className="hover:text-white/60 transition">Mentions Légales</Link>
          <Link href="/contact" className="hover:text-white/60 transition">Contact</Link>
          <Link href="/kickstarter" className="hover:text-white/60 transition">Kickstarter</Link>
        </div>
      </div>
    </footer>
  );
}
