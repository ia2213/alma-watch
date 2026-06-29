export default function Histoire() {
  const civilisations = [
    { heure: 'XII', civ: 'Rome', emoji: '🏛️', symbole: 'Chiffres romains', anecdote: 'Les Romains utilisaient XII pour midi — c’est exactement l’heure que vous lisez maintenant.' },
    { heure: '1', civ: 'Monde Arabe', emoji: '🌙', symbole: 'Chiffres arabes', anecdote: 'Sans les mathématiciens arabes, vos montres numeriques n’existeraient tout simplement pas.' },
    { heure: '2', civ: 'Perse', emoji: '🧱', symbole: 'Calligraphie persane', anecdote: 'La Perse antique inventait l’algèbre pendant que l’Europe dormait encore.' },
    { heure: '3', civ: 'Israël', emoji: '✡️', symbole: 'Lettres hébraïques', anecdote: 'L’alphabet hébreu est l’un des plus anciens systèmes d’écriture encore utilisés aujourd’hui.' },
    { heure: '4', civ: 'Grèce', emoji: '🏛️', symbole: 'Lettres grecques', anecdote: 'Alpha, bêta, pi… la Grèce a littéralement donné son alphabet à la science mondiale.' },
    { heure: '5', civ: 'Mésopotamie', emoji: '🌾', symbole: 'Cunéiforme sumérien', anecdote: 'Les Sumériens ont inventé l’écriture, la roue, et la bière. Les priorités étaient claires.' },
    { heure: '6', civ: 'Égypte', emoji: '🏟️', symbole: 'Hiéroglyphes', anecdote: 'Les Égyptiens mesuraient le temps avec des cadrans solaires 3500 ans avant votre montre.' },
    { heure: '7', civ: 'Inde', emoji: '🕉️', symbole: 'Chiffres indiens', anecdote: 'Le zéro ? Inventé en Inde. Sans lui, vos ordinateurs ne sont que des cailloux.' },
    { heure: '8', civ: 'Chine', emoji: '🏯', symbole: 'Caractères chinois', anecdote: 'La Chine inventait la boussole, l’imprimerie et la poudre à canon en même temps. Show-off.' },
    { heure: '9', civ: 'Océanie', emoji: '🌊', symbole: 'Navigation stellaire', anecdote: 'Les Polynesiens naviguaient sur des milliers de km à la seule lecture des étoiles et des vagues.' },
    { heure: '10', civ: 'Amériques', emoji: '🐍', symbole: 'Calendrier Maya', anecdote: 'Le calendrier maya était plus précis que le calendrier grégorien. Et c’est lui qui l’a évincé.' },
    { heure: '11', civ: 'Afrique', emoji: '🌍', symbole: 'Système Ishângo', anecdote: 'Le bâton d’Ishângo (Congo, -20 000 ans) est le plus ancien outil mathématique connu.' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="flex items-end justify-center pb-24 pt-48 px-6" style={{background: '#F8F7F5'}}>
        <div className="text-center">
          <p className="nav-link mb-4" style={{color: 'var(--gold)'}}>ALMA WATCHES</p>
          <h1 className="font-serif text-black mb-6" style={{fontSize: 'clamp(3.5rem, 9vw, 7rem)', fontWeight: 500, lineHeight: 1.05}}>
            Histoire
          </h1>
          <div className="gold-line w-20 mx-auto mb-6" />
          <p className="text-black/50 text-lg max-w-xl mx-auto leading-relaxed">
            12 civilisations. 12 heures. Une seule montre pour les réunir toutes.
          </p>
        </div>
      </section>

      {/* LES 12 CIVILISATIONS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="nav-link mb-3" style={{color: 'var(--gold)'}}>LE CADRAN</p>
            <h2 className="font-serif text-4xl text-black mb-4">Les Douze Civilisations</h2>
            <div className="gold-line w-16 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {civilisations.map((item, i) => (
              <div
                key={i}
                className="group p-7 border border-black/8 bg-white hover:border-amber-400/40 transition-all duration-400"
                style={{boxShadow: '0 2px 20px rgba(0,0,0,0.03)'}}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="font-serif text-3xl" style={{color: 'var(--gold)', minWidth: '2.5rem'}}>{item.heure}</div>
                  <div>
                    <div className="text-2xl mb-1">{item.emoji}</div>
                    <h3 className="font-serif text-xl text-black">{item.civ}</h3>
                    <p className="text-xs uppercase tracking-widest mt-1" style={{color: 'var(--gold)'}}>{item.symbole}</p>
                  </div>
                </div>
                <div className="gold-line w-full mb-4" />
                <p className="text-sm text-black/55 leading-relaxed italic">
                  {item.anecdote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section className="py-24 px-6" style={{background: '#F8F7F5'}}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="nav-link mb-4" style={{color: 'var(--gold)'}}>VISION</p>
          <h2 className="font-serif text-4xl text-black mb-6">Une Vision Universelle</h2>
          <div className="gold-line w-16 mx-auto mb-8" />
          <p className="text-black/60 text-lg leading-relaxed mb-6">
            Le temps n’appartient à aucune culture, à aucune frontière. Il est le fil invisible qui unit l’humanité dans sa quête d’éternité.
          </p>
          <p className="text-black/45 leading-relaxed">
            ALMA rend hommage à cette universalité en incarnant dans chaque montre les douze piliers de notre civilisation commune. Chaque regard sur l’heure devient ainsi un voyage à travers le temps et l’espace.
          </p>
        </div>
      </section>

      {/* HERITAGE */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="nav-link mb-4" style={{color: 'var(--gold)'}}>SAVOIR-FAIRE</p>
            <h2 className="font-serif text-4xl text-black mb-6">
              L’Héritage Horloger
            </h2>
            <div className="gold-line w-14 mb-8" />
            <p className="text-black/60 leading-relaxed mb-5">
              Depuis des siècles, l’horlogerie suisse incarne l’excellence et la précision. ALMA s’inscrit dans cette tradition tout en la transcendant par une vision multiculturelle du temps.
            </p>
            <p className="text-black/45 leading-relaxed">
              Nos montres sont bien plus que des instruments de mesure : elles sont des gardiens de mémoire, des ponts entre les époques.
            </p>
          </div>
          <div className="flex items-center justify-center" style={{height: '320px', background: '#F8F7F5', border: '1px solid rgba(0,0,0,0.06)'}}>
            <div className="text-center">
              <div className="font-serif mb-4" style={{fontSize: '6rem', color: 'rgba(184,150,10,0.18)', lineHeight: 1}}>XII</div>
              <p className="nav-link" style={{color: '#BBBBBB'}}>Savoir-Faire Suisse</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
