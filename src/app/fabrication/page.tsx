import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fabrication & Savoir-Faire Suisse | AVICEN Horlogerie',
  description: 'Excellence horlogère suisse : Mouvement Sellita SW200-2, boîtier acier 316L, verre saphir bombé double face et assemblage de précision.',
  alternates: {
    canonical: 'https://avicen-watch.vercel.app/fabrication',
  },
  openGraph: {
    title: 'Fabrication & Savoir-Faire Suisse — AVICEN Horlogerie',
    description: 'Mouvement automatique Sellita SW200-2, boîtier coussin 39mm et certification Swiss Made.',
    url: 'https://avicen-watch.vercel.app/fabrication',
    images: ['/watches/acier-noir.png'],
  },
};

export default function Fabrication() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="flex items-end justify-center pb-24 pt-48 px-6" style={{background: '#F8F7F5'}}>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{color: '#C8A84B'}}>
            AVICEN WATCHES · SUISSE
          </p>
          <h1 className="font-serif text-black mb-6" style={{fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 500, lineHeight: 1.05}}>
            Fabrication & Savoir-Faire
          </h1>
          <div className="w-20 h-[1px] bg-[#C8A84B] mx-auto mb-6" />
          <p className="text-black/60 text-base md:text-lg max-w-xl mx-auto font-light">
            L’Excellence de la Haute Horlogerie Suisse
          </p>
        </div>
      </section>

      {/* SAVOIR-FAIRE */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{color: '#C8A84B'}}>TECHNIQUE & MATÉRIAUX</p>
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">Savoir-Faire Suisse</h2>
            <div className="w-16 h-[1px] bg-[#C8A84B] mx-auto" />
          </div>

          <p className="text-black/60 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-16 font-light">
            Chaque montre AVICEN est le fruit d’un savoir-faire horloger d&apos;exception, assemblée et réglée en Suisse dans le respect des traditions les plus exigeantes.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { num: '01', titre: 'Mouvement Automatique', texte: 'Mouvement Sellita SW200-2 Swiss Made, réputé pour sa robustesse et sa précision chronométrique. Fréquence 28 800 A/h (4Hz), 26 rubis, remontage automatique bidirectionnel.' },
              { num: '02', titre: 'Boîtier Coussin 39mm', texte: 'Boîtier coussin 39mm en acier inoxydable 316L ou laiton traité PVD or. Étanchéité 50m (5 ATM). Verre saphir bombé traité anti-reflet double face.' },
              { num: '03', titre: 'Cadran des 12 Civilisations', texte: 'Cadrans en laque ardoise profonde, blanc champagne ou nacre véritable. Index des 12 écritures appliqués avec précision micrométrique.' },
              { num: '04', titre: 'Bracelet Cuir Façonné Main', texte: 'Bracelets en cuir veau véritable grainé ou nappa avec surpiqûres sellier. Boucle ardillon dorée ou acier brossé signée AVICEN.' },
            ].map((item, i) => (
              <div key={i} className="p-8 border border-black/10 bg-white hover:border-[#C8A84B] transition-all duration-300 rounded-xl" style={{boxShadow: '0 4px 24px rgba(0,0,0,0.03)'}}>
                <div className="font-serif text-4xl mb-4" style={{color: '#C8A84B'}}>{item.num}</div>
                <h3 className="font-serif text-2xl text-black mb-3">{item.titre}</h3>
                <div className="w-12 h-[1px] bg-[#C8A84B] mb-4" />
                <p className="text-black/60 leading-relaxed font-light text-sm">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="py-24 px-6 bg-[#F8F7F5]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{color: '#C8A84B'}}>PROCESSUS HORLOGER</p>
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">Étapes de Fabrication</h2>
            <div className="w-16 h-[1px] bg-[#C8A84B] mx-auto" />
          </div>
          <div className="space-y-10">
            {[
              { etape: 'Conception & Prototypage', desc: 'Design tridimensionnel et prototypage micrométrique. Chaque angle de boîtier et chaque graphie de chiffre est validé.' },
              { etape: 'Usinage Haute Précision', desc: 'Fabrication des composants avec des centres d\'usinage CNC suisses. Tolérances inférieures au centième de millimètre.' },
              { etape: 'Assemblage Manuel', desc: 'Montage méticuleux du calibre Sellita par des horlogers qualifiés. Lubrification de précision et pose des aiguilles.' },
              { etape: 'Contrôle & Réglage 5 Positions', desc: 'Test chronométrique et réglage d\'isochronisme pendant plus de 72 heures consécutives.' },
              { etape: 'Certification Swiss Made', desc: 'Contrôle d\'étanchéité sous pression et apposition du marquage Swiss Made officiel.' },
            ].map((p, i) => (
              <div key={i} className="flex gap-6 items-start bg-white p-6 rounded-xl border border-black/5 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border rounded-full" style={{borderColor: '#C8A84B', color: '#C8A84B', background: 'rgba(200,168,75,0.06)'}}>
                  <span className="font-serif text-lg font-bold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-black mb-1">{p.etape}</h3>
                  <p className="text-black/60 leading-relaxed font-light text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SWISS MADE */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-8 py-3 mb-8 rounded" style={{border: '1px solid rgba(200,168,75,0.5)', background: 'rgba(200,168,75,0.04)'}}>
            <span className="font-serif text-2xl" style={{color: '#C8A84B'}}>Certification Swiss Made</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">L&apos;Engagement de Précision</h2>
          <div className="w-16 h-[1px] bg-[#C8A84B] mx-auto mb-8" />
          <p className="text-black/70 text-base leading-relaxed mb-4 font-light">
            Le label Swiss Made est mondialement reconnu comme le sommet de l&apos;exigence horlogère. Il certifie que le mouvement est suisse, assemblé en Suisse et contrôlé selon les standards de la fédération horlogère suisse.
          </p>
          <div className="mt-8">
            <Link
              href="/collection"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#080808] text-white hover:bg-[#C8A84B] hover:text-black transition-all duration-300 text-xs uppercase tracking-[0.2em] font-semibold rounded"
            >
              Découvrir les Modèles AVICEN →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
