export default function Histoire() {
  const civilisations = [
    {
      heure: 'XII', civ: 'Rome', emoji: '🏛️', symbole: 'Chiffres romains',
      anecdote: 'Les Romains utilisaient XII pour midi — c\'est exactement l\'heure que vous lisez maintenant.',
      sticker: '/stickers/sticker-romain.jpg',
    },
    {
      heure: '1', civ: 'Monde Arabe', emoji: '🌙', symbole: 'Chiffres arabes',
      anecdote: 'Sans les mathématiciens arabes, vos montres numériques n\'existeraient tout simplement pas.',
      sticker: '/stickers/sticker-arabe.jpg',
    },
    {
      heure: '2', civ: 'Perse', emoji: '🧱', symbole: 'Calligraphie persane',
      anecdote: 'La Perse antique inventait l\'algèbre pendant que l\'Europe dormait encore.',
      sticker: null,
    },
    {
      heure: '3', civ: 'Israël', emoji: '✡️', symbole: 'Lettres hébraïques',
      anecdote: 'L\'alphabet hébreu est l\'un des plus anciens systèmes d\'écriture encore utilisés aujourd\'hui.',
      sticker: '/stickers/sticker-hebreu.jpg',
    },
    {
      heure: '4', civ: 'Grèce', emoji: '🏛️', symbole: 'Lettres grecques',
      anecdote: 'Alpha, bêta, pi… la Grèce a littéralement donné son alphabet à la science mondiale.',
      sticker: '/stickers/sticker-grec.jpg',
    },
    {
      heure: '5', civ: 'Mésopotamie', emoji: '🌾', symbole: 'Cunéiforme sumérien',
      anecdote: 'Les Sumériens ont inventé l\'écriture, la roue, et la bière. Les priorités étaient claires.',
      sticker: '/stickers/sticker-mesopotamia.jpg',
    },
    {
      heure: '6', civ: 'Égypte', emoji: '𓂀', symbole: 'Hiéroglyphes',
      anecdote: 'Les Égyptiens mesuraient le temps avec des cadrans solaires 3500 ans avant votre montre.',
      sticker: null,
    },
    {
      heure: '7', civ: 'Inde', emoji: '🕉️', symbole: 'Chiffres indiens',
      anecdote: 'Le zéro ? Inventé en Inde. Sans lui, vos ordinateurs ne sont que des cailloux.',
      sticker: null,
    },
    {
      heure: '8', civ: 'Chine', emoji: '🏯', symbole: 'Caractères chinois',
      anecdote: 'La Chine inventait la boussole, l\'imprimerie et la poudre à canon en même temps. Show-off.',
      sticker: '/stickers/sticker-chinois.jpg',
    },
    {
      heure: '9', civ: 'Océanie', emoji: '🌊', symbole: 'Navigation stellaire',
      anecdote: 'Les Polynésiens naviguaient sur des milliers de km à la seule lecture des étoiles et des vagues.',
      sticker: '/stickers/sticker-oceanie.jpg',
    },
    {
      heure: '10', civ: 'Amériques / Maya', emoji: '🐍', symbole: 'Calendrier Maya',
      anecdote: 'Le calendrier maya était plus précis que le calendrier grégorien. Et c\'est lui qui l\'a précédé.',
      sticker: '/stickers/sticker-maya.jpg',
    },
    {
      heure: '11', civ: 'Afrique', emoji: '🌍', symbole: 'Système Ishângo',
      anecdote: 'Le bâton d\'Ishângo (Congo, -20 000 ans) est le plus ancien outil mathématique connu.',
      sticker: '/stickers/sticker-afrique.jpg',
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative py-40 px-6 text-center overflow-hidden"
        style={{ background: '#07070a' }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(200,168,75,0.08) 0%, transparent 70%)',
          }}
        />
        <p
          className="uppercase mb-6 relative z-10"
          style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'rgba(200,168,75,0.7)' }}
        >
          ALMA WATCHES
        </p>
        <h1
          className="font-serif relative z-10"
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 400,
            color: '#FFFFFF',
            letterSpacing: '0.06em',
          }}
        >
          Histoire
        </h1>
        <div className="w-14 h-[1px] mx-auto my-8 relative z-10" style={{ background: '#C8A84B' }} />
        <p
          className="relative z-10 text-sm"
          style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em' }}
        >
          12 civilisations. 12 heures. Une seule montre pour les réunir toutes.
        </p>
      </section>

      {/* LES 12 CIVILISATIONS */}
      <section className="py-28 px-6" style={{ background: '#F8F7F5' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p
              className="uppercase mb-4"
              style={{ fontSize: '0.58rem', letterSpacing: '0.3em', color: '#C8A84B' }}
            >
              LE CADRAN
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-black tracking-[0.04em]">
              Les Douze Civilisations
            </h2>
          </div>

          <div className="space-y-0">
            {civilisations.map((item, i) => (
              <div
                key={i}
                className="group grid md:grid-cols-[80px_1fr_160px] gap-8 items-center py-10 border-b"
                style={{ borderColor: 'rgba(0,0,0,0.07)' }}
              >
                {/* Heure */}
                <div className="text-center hidden md:block">
                  <span
                    className="font-serif"
                    style={{
                      fontSize: '2rem',
                      background:
                        'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 50%, #BF9733 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {item.heure}
                  </span>
                </div>

                {/* Texte */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-2xl">{item.emoji}</span>
                    <h3 className="font-serif text-xl text-black tracking-[0.05em]">
                      {item.civ}
                    </h3>
                    <span
                      className="text-xs uppercase tracking-[0.15em] px-2 py-0.5 border"
                      style={{
                        color: '#C8A84B',
                        borderColor: 'rgba(200,168,75,0.4)',
                        fontSize: '0.55rem',
                      }}
                    >
                      {item.symbole}
                    </span>
                  </div>
                  <p className="text-sm text-black/50 leading-relaxed font-light italic">
                    {item.anecdote}
                  </p>
                </div>

                {/* Sticker */}
                <div className="flex justify-center items-center">
                  {item.sticker ? (
                    <img
                      src={item.sticker}
                      alt={`Sticker ${item.civ}`}
                      width={128}
                      height={128}
                      className="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-500"
                      style={{
                        filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.18))',
                      }}
                    />
                  ) : (
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-2xl border"
                      style={{
                        borderColor: 'rgba(200,168,75,0.2)',
                        background: 'rgba(200,168,75,0.04)',
                      }}
                    >
                      {item.emoji}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section className="py-32 px-6" style={{ background: '#07070a' }}>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p
            className="uppercase"
            style={{ fontSize: '0.58rem', letterSpacing: '0.3em', color: '#C8A84B' }}
          >
            VISION
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl tracking-[0.04em]"
            style={{ color: '#FFFFFF' }}
          >
            Une Vision Universelle
          </h2>
          <div className="w-14 h-[1px] mx-auto" style={{ background: '#C8A84B' }} />
          <p className="text-base text-white/45 leading-relaxed font-light tracking-wide">
            Le temps n&apos;appartient à aucune culture, à aucune frontière. Il est le fil invisible
            qui unit l&apos;humanité dans sa quête d&apos;éternité.
          </p>
          <p className="text-base text-white/45 leading-relaxed font-light tracking-wide">
            ALMA rend hommage à cette universalité en incarnant dans chaque montre les douze
            piliers de notre civilisation commune. Chaque regard sur l&apos;heure devient ainsi un
            voyage à travers le temps et l&apos;espace.
          </p>
        </div>
      </section>

      {/* HERITAGE */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <p
              className="uppercase"
              style={{ fontSize: '0.58rem', letterSpacing: '0.3em', color: '#C8A84B' }}
            >
              SAVOIR-FAIRE
            </p>
            <h2 className="font-serif text-4xl text-black tracking-[0.04em] leading-tight">
              L&apos;Héritage Horloger
            </h2>
            <div className="w-10 h-[1px]" style={{ background: '#C8A84B' }} />
            <p className="text-sm text-black/50 leading-relaxed font-light">
              Depuis des siècles, l&apos;horlogerie suisse incarne l&apos;excellence et la précision.
              ALMA s&apos;inscrit dans cette tradition tout en la transcendant par une vision
              multiculturelle du temps.
            </p>
            <p className="text-sm text-black/50 leading-relaxed font-light">
              Nos montres sont bien plus que des instruments de mesure : elles sont des gardiens
              de mémoire, des ponts entre les époques.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="relative w-64 h-64 rounded-full flex items-center justify-center border"
              style={{
                borderColor: 'rgba(200,168,75,0.3)',
                background: 'rgba(200,168,75,0.04)',
              }}
            >
              <span
                className="font-serif"
                style={{
                  fontSize: '5rem',
                  background:
                    'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 50%, #BF9733 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                XII
              </span>
              <div
                className="absolute bottom-8 text-xs tracking-[0.2em] uppercase"
                style={{ color: 'rgba(200,168,75,0.7)' }}
              >
                Savoir-Faire Suisse
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
