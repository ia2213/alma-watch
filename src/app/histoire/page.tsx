export default function Histoire() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/20 via-neutral-950 to-neutral-950"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent">Histoire</span>
          </h1>
          <p className="text-neutral-400 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            L'Art du Temps Universel
          </p>
        </div>
      </section>

      {/* Les Douze Civilisations */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-16 text-center bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent">
            Les Douze Civilisations
          </h2>
          
          <div className="prose prose-invert prose-lg max-w-4xl mx-auto">
            <p className="text-neutral-300 text-xl leading-relaxed mb-12">
              ALMA célèbre l'universalité du temps à travers douze grandes civilisations qui ont marqué l'histoire de l'humanité. Chaque index horaire de nos garde-temps incarne l'esprit et le génie d'une culture millénaire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {[
              { heure: 'I', civilisation: 'Égypte Antique', symbole: 'Pyramides et éternité' },
              { heure: 'II', civilisation: 'Mésopotamie', symbole: 'Écriture cunéiforme' },
              { heure: 'III', civilisation: 'Grèce Antique', symbole: 'Philosophie et démocratie' },
              { heure: 'IV', civilisation: 'Rome', symbole: 'Droit et architecture' },
              { heure: 'V', civilisation: 'Perse', symbole: 'Art et poésie' },
              { heure: 'VI', civilisation: 'Inde', symbole: 'Spiritualité et mathématiques' },
              { heure: 'VII', civilisation: 'Chine', symbole: 'Sagesse et innovation' },
              { heure: 'VIII', civilisation: 'Japon', symbole: 'Harmonie et précision' },
              { heure: 'IX', civilisation: 'Afrique', symbole: 'Oralité et arts' },
              { heure: 'X', civilisation: 'Amériques', symbole: 'Nature et astronomie' },
              { heure: 'XI', civilisation: 'Islam', symbole: 'Sciences et architecture' },
              { heure: 'XII', civilisation: 'Europe', symbole: 'Renaissance et horlogerie' },
            ].map((item, index) => (
              <div key={index} className="group relative p-8 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-neutral-800/50 hover:border-amber-900/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-500/5 rounded-2xl transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="font-serif text-4xl text-amber-200 mb-4">{item.heure}</div>
                  <h3 className="font-serif text-2xl text-neutral-100 mb-2">{item.civilisation}</h3>
                  <p className="text-neutral-400 text-sm">{item.symbole}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section className="py-32 px-6 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl mb-12 bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent">
            Une Vision Universelle
          </h2>
          <p className="text-neutral-300 text-xl leading-relaxed mb-8">
            Le temps n'appartient à aucune culture, à aucune frontière. Il est le fil invisible qui unit l'humanité dans sa quête d'éternité.
          </p>
          <p className="text-neutral-400 text-lg leading-relaxed">
            ALMA rend hommage à cette universalité en incarnant dans chaque montre les douze piliers de notre civilisation commune. Chaque regard sur l'heure devient ainsi un voyage à travers le temps et l'espace, une célébration de notre héritage collectif.
          </p>
        </div>
      </section>

      {/* Heritage */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent">
                L'Héritage Horloger
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Depuis des siècles, l'horlogerie suisse incarne l'excellence et la précision. ALMA s'inscrit dans cette tradition tout en la transcendant par une vision multiculturelle du temps.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Nos montres sont bien plus que des instruments de mesure : elles sont des gardiens de mémoire, des ponts entre les époques, des témoins silencieux de notre grandeur commune.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-yellow-900/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-serif text-8xl text-amber-200/30 mb-4">XII</div>
                  <p className="text-neutral-400 text-sm uppercase tracking-widest">Savoir-Faire Suisse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
