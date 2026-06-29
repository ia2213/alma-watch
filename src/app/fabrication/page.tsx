export default function Fabrication() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="flex items-end justify-center pb-24 pt-48 px-6" style={{background: '#F8F7F5'}}>
        <div className="text-center">
          <p className="nav-link mb-4" style={{color: 'var(--gold)'}}>ALMA WATCHES</p>
          <h1 className="font-serif text-black mb-6" style={{fontSize: 'clamp(3.5rem, 9vw, 7rem)', fontWeight: 500, lineHeight: 1.05}}>
            Fabrication
          </h1>
          <div className="gold-line w-20 mx-auto mb-6" />
          <p className="text-black/50 text-lg max-w-xl mx-auto">
            L’Excellence Horlogère Suisse
          </p>
        </div>
      </section>

      {/* SAVOIR-FAIRE */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="nav-link mb-3" style={{color: 'var(--gold)'}}>TECHNIQUE</p>
            <h2 className="font-serif text-4xl text-black mb-4">Savoir-Faire Suisse</h2>
            <div className="gold-line w-16 mx-auto" />
          </div>

          <p className="text-black/55 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-16">
            Chaque montre ALMA est le fruit d’un savoir-faire horloger transmis de génération en génération, fabriquée en Suisse dans le respect des traditions les plus exigeantes.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { num: '01', titre: 'Mouvement', texte: 'Mouvement automatique Sellita SW200-2, manufacturié suisse réputé pour sa précision. Réserve de marche de 72 heures.' },
              { num: '02', titre: 'Boîtier', texte: 'Boîtier coussin 42mm en titane grade 5, acier 316L ou carbone forgé. Étanchéité 100m. Glace saphir bombée anti-reflet.' },
              { num: '03', titre: 'Cadran', texte: 'Cadrans en météorite Gibeon authentique, nacre naturelle ou carbone. Aiguilles en or rose 18 carats ou acier poli.' },
              { num: '04', titre: 'Bracelet', texte: 'Bracelets en cuir Shell Cordovan, alligator ou veau velours. Boucle déployante en titane ou or rose. Finitions main.' },
            ].map((item, i) => (
              <div key={i} className="p-8 border border-black/8 bg-white hover:border-amber-400/40 transition-all duration-300" style={{boxShadow: '0 2px 20px rgba(0,0,0,0.03)'}}>
                <div className="font-serif text-4xl mb-4" style={{color: 'var(--gold)'}}>{item.num}</div>
                <h3 className="font-serif text-2xl text-black mb-3">{item.titre}</h3>
                <div className="gold-line w-12 mb-4" />
                <p className="text-black/55 leading-relaxed">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATELIERS */}
      <section className="py-24 px-6" style={{background: '#F8F7F5'}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="nav-link mb-3" style={{color: 'var(--gold)'}}>PARTENAIRES</p>
            <h2 className="font-serif text-4xl text-black mb-4">Les Ateliers Partenaires</h2>
            <div className="gold-line w-16 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { nom: 'Sellita', sp: 'Mouvements automatiques', lieu: 'La Chaux-de-Fonds' },
              { nom: 'Bryek', sp: 'Boîtiers titane & acier', lieu: 'Genève' },
              { nom: 'Combettes', sp: 'Cadrans d’exception', lieu: 'Jura' },
            ].map((a, i) => (
              <div key={i} className="p-8 text-center border border-black/8 bg-white hover:border-amber-400/40 transition-all duration-300">
                <h3 className="font-serif text-2xl mb-2" style={{color: 'var(--gold)'}}>{a.nom}</h3>
                <p className="text-black/70 mb-1">{a.sp}</p>
                <p className="text-black/35 text-sm">{a.lieu}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="nav-link mb-3" style={{color: 'var(--gold)'}}>PROCESSUS</p>
            <h2 className="font-serif text-4xl text-black mb-4">Fabrication</h2>
            <div className="gold-line w-16 mx-auto" />
          </div>
          <div className="space-y-10">
            {[
              { etape: 'Conception', desc: 'Design et prototypage avec les meilleurs ateliers suisses. Chaque détail est pensé pour l’excellence.' },
              { etape: 'Usinage', desc: 'Fabrication des boîtiers et composants avec des machines CNC de haute précision. Tolérances au centième de millimètre.' },
              { etape: 'Assemblage', desc: 'Montage manuel du mouvement par des horlogers qualifiés. Contrôle qualité à chaque étape.' },
              { etape: 'Finition', desc: 'Polissage, sertissage et réglage final. Chaque montre est testée pendant 72 heures minimum.' },
              { etape: 'Certification', desc: 'Contrôle final et certification Swiss Made. Garantie internationale de 3 ans.' },
            ].map((p, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border" style={{border: '1px solid rgba(184,150,10,0.3)'}}>
                  <span className="font-serif text-xl" style={{color: 'var(--gold)'}}>{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-black mb-2">{p.etape}</h3>
                  <p className="text-black/50 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SWISS MADE */}
      <section className="py-24 px-6 text-center" style={{background: '#F8F7F5'}}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-8 py-3 mb-8" style={{border: '1px solid rgba(184,150,10,0.4)'}}>
            <span className="font-serif text-2xl" style={{color: 'var(--gold)'}}>Swiss Made</span>
          </div>
          <h2 className="font-serif text-4xl text-black mb-6">La Garantie Suisse</h2>
          <div className="gold-line w-16 mx-auto mb-8" />
          <p className="text-black/60 text-lg leading-relaxed mb-4">
            Le label Swiss Made garantit que 60% minimum de la valeur est produite en Suisse, que le mouvement est suisse et que l’assemblage final est réalisé en Suisse.
          </p>
          <p className="text-black/40 leading-relaxed">
            ALMA va au-delà : 85% de nos composants sont fabriqués en Suisse.
          </p>
        </div>
      </section>
    </main>
  );
}
