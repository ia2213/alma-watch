export default function Fabrication() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/20 via-neutral-950 to-neutral-950"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent">Fabrication</span>
          </h1>
          <p className="text-neutral-400 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            L'Excellence Horlogère Suisse
          </p>
        </div>
      </section>

      {/* Savoir-Faire Suisse */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-16 text-center bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent">
            Savoir-Faire Suisse
          </h2>
          
          <div className="prose prose-invert prose-lg max-w-4xl mx-auto">
            <p className="text-neutral-300 text-xl leading-relaxed mb-12">
              Chaque montre ALMA est le fruit d'un savoir-faire horloger transmis de génération en génération. Fabriquées en Suisse dans le respect des traditions les plus exigeantes, nos garde-temps incarnent la perfection technique et l'art de la haute horlogerie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <div className="space-y-8">
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-neutral-800/50 hover:border-amber-900/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-500/5 rounded-2xl transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="text-amber-200 text-5xl font-serif mb-4">01</div>
                  <h3 className="font-serif text-2xl text-neutral-100 mb-4">Mouvement</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Mouvement automatique Sellita SW200-2, manufacturier suisse réputé pour sa précision et sa fiabilité. Réserve de marche de 38 heures.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-neutral-800/50 hover:border-amber-900/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-500/5 rounded-2xl transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="text-amber-200 text-5xl font-serif mb-4">02</div>
                  <h3 className="font-serif text-2xl text-neutral-100 mb-4">Boîtier</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Boîtier coussin de 42mm en titane grade 5, acier inoxydable 316L ou carbone forgé. Étanchéité 100m (10 ATM). Glace saphir bombée avec traitement anti-reflet.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-neutral-800/50 hover:border-amber-900/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-500/5 rounded-2xl transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="text-amber-200 text-5xl font-serif mb-4">03</div>
                  <h3 className="font-serif text-2xl text-neutral-100 mb-4">Cadran</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Cadrans en météorite Gibeon authentique, nacre naturelle, ou carbone texture. Aiguilles en or rose 18 carats ou acier poli. Index gravés au laser.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-neutral-800/50 hover:border-amber-900/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-500/5 rounded-2xl transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="text-amber-200 text-5xl font-serif mb-4">04</div>
                  <h3 className="font-serif text-2xl text-neutral-100 mb-4">Bracelet</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Bracelets en cuir Shell Cordovan, alligator ou veau velours. Boucle déployante en titane ou or rose. Finitions main.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les Ateliers */}
      <section className="py-32 px-6 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-16 text-center bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent">
            Les Ateliers Partenaires
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { nom: 'Sellita', spécialité: 'Mouvements automatiques', lieu: 'La Chaux-de-Fonds' },
              { nom: 'Bryek', spécialité: 'Boîtiers titane & acier', lieu: 'Genève' },
              { nom: 'Combettes', spécialité: 'Cadrans d’exception', lieu: 'Jura' },
            ].map((atelier, index) => (
              <div key={index} className="group relative p-8 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-neutral-800/50 hover:border-amber-900/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-500/5 rounded-2xl transition-all duration-500"></div>
                <div className="relative z-10 text-center">
                  <h3 className="font-serif text-3xl text-amber-200 mb-4">{atelier.nom}</h3>
                  <p className="text-neutral-300 text-lg mb-2">{atelier.spécialité}</p>
                  <p className="text-neutral-500 text-sm">{atelier.lieu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-16 text-center bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent">
            Processus de Fabrication
          </h2>

          <div className="space-y-12">
            {[
              { étape: 'Conception', description: 'Design et prototypage avec les meilleurs ateliers suisses. Chaque détail est pensé pour l’excellence.' },
              { étape: 'Usinage', description: 'Fabrication des boîtiers et composants avec des machines CNC de haute précision. Tolérances au centième de millimètre.' },
              { étape: 'Assemblage', description: 'Montage manuel du mouvement et des composants par des horlogers qualifiés. Contrôle qualité à chaque étape.' },
              { étape: 'Finition', description: 'Polissage, sertissage et réglage final. Chaque montre est testée pendant 72 heures minimum.' },
              { étape: 'Certification', description: 'Contrôle final et certification Swiss Made. Garantie internationale de 2 ans.' },
            ].map((process, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-amber-900/30 to-yellow-900/30 border border-amber-800/50 flex items-center justify-center">
                  <span className="font-serif text-3xl text-amber-200">{index + 1}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-serif text-2xl text-neutral-100 mb-3">{process.étape}</h3>
                  <p className="text-neutral-400 leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Swiss Made */}
      <section className="py-32 px-6 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-8 px-8 py-4 rounded-full border-2 border-amber-800/50 bg-gradient-to-r from-amber-950/30 to-yellow-950/30">
            <span className="font-serif text-3xl text-amber-200">Swiss Made</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent">
            La Garantie Suisse
          </h2>
          <p className="text-neutral-300 text-xl leading-relaxed mb-6">
            Le label Swiss Made garantit que 60% minimum de la valeur de nos montres est produite en Suisse, que le mouvement est suisse et que l'assemblage final est réalisé en Suisse.
          </p>
          <p className="text-neutral-400 text-lg leading-relaxed">
            ALMA va au-delà de ces exigences : 85% de nos composants sont fabriqués en Suisse, garantissant une qualité et une traçabilité exceptionnelles.
          </p>
        </div>
      </section>
    </main>
  )
}
