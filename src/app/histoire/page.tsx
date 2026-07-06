import GlobeTerrestreAlma from '@/components/GlobeTerrestreAlma';

export default function Histoire() {
  const civilisations = [
    {
      heure: 'XII',
      civ: 'Rome',
      periode: 'VIIIe s. av. J.-C. — Ve s. apr. J.-C.',
      symbole: 'Chiffres romains',
      description: 'L\'Empire romain a unifié l\'Europe sous une seule langue, un seul droit et un seul système de numération. Les chiffres romains — I, V, X, L, C, D, M — ornaient les cadrans solaires des forums, les arcs de triomphe et les calendriers officiels. XII marquait midi, l\'heure où le Sénat se réunissait.',
      sticker: '/stickers/sticker-romain.png',
      rotate: '-6deg',
    },
    {
      heure: '١',
      civ: 'Monde Arabe',
      periode: 'VIIe — XVe siècle',
      symbole: 'Chiffres arabes',
      description: 'Durant l\'âge d\'or islamique, Bagdad était la capitale mondiale du savoir. Al-Khwarizmi inventa l\'algèbre, Al-Biruni calcula la circonférence de la Terre avec une précision stupéfiante. Les chiffres dits \"arabes\" — ceux que vous utilisez chaque jour — sont en réalité une synthèse du génie indo-arabe qui a révolutionné les mathématiques mondiales.',
      sticker: '/stickers/sticker-arabe.png',
      rotate: '5deg',
    },
    {
      heure: 'Θʹ',
      civ: 'Perse',
      periode: 'VIe s. av. J.-C. — VIIe s. apr. J.-C.',
      symbole: 'Numération persane',
      description: 'L\'empire achéménide, le plus grand de l\'Antiquité, s\'étendait de l\'Égypte à l\'Inde. Les Perses ont codifié la poste, le droit international et les droits de l\'homme — la Charte de Cyrus étant le premier texte de ce type. Leur système de numération, dérivé du grec, utilisait les lettres de l\'alphabet avec des diacritiques distinctifs.',
      sticker: null,
      rotate: '-4deg',
    },
    {
      heure: 'ה',
      civ: 'Israël',
      periode: 'IIe millénaire av. J.-C. — aujourd\'hui',
      symbole: 'Lettres hébraïques',
      description: 'L\'hébreu est l\'une des rares langues anciennes à avoir été ressuscitées comme langue vivante moderne. Dans la tradition juive, chaque lettre de l\'alphabet possède une valeur numérique — le Guématrie. Aleph vaut 1, Bet vaut 2, et ainsi de suite jusqu\'au Tav. Les cinq heures sur le cadran ALMA portent ces lettres comme autant de mémoires millénaires.',
      sticker: '/stickers/sticker-hebreu.png',
      rotate: '7deg',
    },
    {
      heure: 'Δ',
      civ: 'Grèce',
      periode: 'VIIIe — IIe siècle av. J.-C.',
      symbole: 'Lettres grecques',
      description: 'Athènes a inventé la démocratie, la philosophie et le théâtre en moins de deux siècles. Les Grecs numérotaient avec leur alphabet — Alpha pour 1, Beta pour 2 — et calculaient les éclipses avec une précision remarquable. Le mécanisme d\'Anticythère, découvert en 1901, est le premier ordinateur analogique de l\'histoire, vieux de 2100 ans.',
      sticker: '/stickers/sticker-grec.png',
      rotate: '-5deg',
    },
    {
      heure: '𒎙',
      civ: 'Mésopotamie',
      periode: '3500 — 539 av. J.-C.',
      symbole: 'Cunéiforme sumérien',
      description: 'Entre le Tigre et l\'Euphrate naquit la première civilisation urbaine. Les Sumériens inventèrent l\'écriture cunéiforme, la roue, la charrue et le premier code juridique — celui de Hammurabi. Leur système sexagésimal (base 60) nous a légué les 60 secondes d\'une minute, les 60 minutes d\'une heure et les 360 degrés d\'un cercle.',
      sticker: '/stickers/sticker-mesopotamia.png',
      rotate: '6deg',
    },
    {
      heure: '𓏺',
      civ: 'Égypte',
      periode: '3100 — 30 av. J.-C.',
      symbole: 'Hiéroglyphes',
      description: 'Les Égyptiens ont construit les seules Merveilles du monde encore debout et développé un calendrier de 365 jours dès 2500 av. J.-C. Leurs cadrans solaires et clepsydres (horloges à eau) sont les ancêtres directs de nos montres. Les hiéroglyphes numériques — un lotus pour 1000, une grenouille pour 100 000 — témoignent d\'une pensée mathématique extraordinaire.',
      sticker: null,
      rotate: '-7deg',
    },
    {
      heure: '७',
      civ: 'Inde',
      periode: '3e millénaire av. J.-C. — aujourd\'hui',
      symbole: 'Chiffres devanagari',
      description: 'L\'Inde a offert au monde le concept révolutionnaire du zéro — sans lequel ni l\'informatique ni la physique moderne ne seraient possibles. Le mathématicien Brahmagupta codifie ses règles au VIIe siècle. Les chiffres devanagari, précurseurs de nos chiffres actuels, circulaient déjà sur les routes de la soie bien avant l\'Europe médiévale.',
      sticker: null,
      rotate: '4deg',
    },
    {
      heure: '八',
      civ: 'Chine',
      periode: '2e millénaire av. J.-C. — aujourd\'hui',
      symbole: 'Caractères chinois',
      description: 'La Chine a inventé simultanément quatre technologies qui ont changé le monde : le papier, l\'imprimerie, la boussole et la poudre à canon. Les caractères chinois, dont certains remontent à 3500 ans, sont le seul système d\'écriture logographique encore utilisé massivement. 八 (bā) — le chiffre 8 — est le chiffre porte-bonheur de toute l\'Asie orientale.',
      sticker: '/stickers/sticker-chinois.png',
      rotate: '-6deg',
    },
    {
      heure: '৯',
      civ: 'Océanie',
      periode: '3000 av. J.-C. — aujourd\'hui',
      symbole: 'Navigation stellaire',
      description: 'Les navigateurs polynésiens ont accompli les plus grandes migrations maritimes de l\'histoire humaine, colonisant un tiers de la surface du globe sans boussole ni carte. Ils lisaient le temps dans les étoiles, les vagues et le vol des oiseaux. Leur connaissance des constellations — transmise oralement — reste l\'une des sciences de navigation les plus sophistiquées jamais développées.',
      sticker: '/stickers/sticker-oceanie.png',
      rotate: '8deg',
    },
    {
      heure: '፲',
      civ: 'Amériques / Maya',
      periode: '2000 av. J.-C. — XVIe siècle',
      symbole: 'Calendrier Maya',
      description: 'Les Mayas ont développé indépendamment l\'écriture, les mathématiques et l\'astronomie avec une précision vertigineuse. Leur calendrier vénusien calculait les phases de Vénus à 2 heures près sur 500 ans. Ils furent parmi les premiers à inventer le zéro, bien avant l\'Europe. Leurs observatoires permettaient de prédire les éclipses avec une exactitude remarquable.',
      sticker: '/stickers/sticker-maya.webp',
      rotate: '-5deg',
    },
    {
      heure: '፲፩',
      civ: 'Afrique',
      periode: '43 000 av. J.-C. — aujourd\'hui',
      symbole: 'Système Ishângo',
      description: 'Le bâton d\'Ishângo, découvert au Congo et daté de 43 000 ans, est le plus ancien outil mathématique connu de l\'humanité. Ses encoches organisées en groupes suggèrent une connaissance précoce des nombres premiers et des cycles lunaires. L\'Afrique sub-saharienne a posé les premières pierres de l\'édifice mathématique universel.',
      sticker: '/stickers/stickers-afrique.png',
      rotate: '6deg',
    },
  ];

  return (
    <>
      <section className="relative py-40 px-6 text-center overflow-hidden" style={{ background: '#07070a' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(200,168,75,0.08) 0%, transparent 70%)' }} />
        <p className="uppercase mb-6 relative z-10" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'rgba(200,168,75,0.7)' }}>
          ALMA WATCHES
        </p>
        <h1 className="font-serif relative z-10" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', fontWeight: 400, color: '#FFFFFF', letterSpacing: '0.06em' }}>
          Histoire
        </h1>
        <div className="w-14 h-[1px] mx-auto my-8 relative z-10" style={{ background: '#C8A84B' }} />
        <p className="relative z-10 text-sm" style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em' }}>
          12 civilisations. 12 heures. Une seule montre pour les réunir toutes.
        </p>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-6" style={{ background: '#F8F7F5' }}>
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="uppercase mb-4" style={{ fontSize: '0.58rem', letterSpacing: '0.3em', color: '#C8A84B' }}>LE CADRAN</p>
            <h2 className="font-serif text-3xl md:text-5xl text-black tracking-[0.04em]">Les Douze Civilisations</h2>
          </div>

          {/* ── Globe compact visible uniquement sur mobile ── */}
          <div className="xl:hidden mb-8">
            <div className="overflow-hidden rounded-[10px] border shadow-[0_12px_40px_rgba(0,0,0,0.10)]" style={{ borderColor: 'rgba(200,168,75,0.18)', background: '#050505' }}>
              <GlobeTerrestreAlma height="320px" />
            </div>
            <p className="mt-3 text-center text-[0.65rem] uppercase tracking-[0.24em]" style={{ color: 'rgba(0,0,0,0.35)' }}>
              Globe interactif des civilisations
            </p>
          </div>

          {/* ── Layout desktop : liste à gauche | globe sticky à droite ── */}
          <div className="xl:grid xl:grid-cols-[1fr_600px] xl:gap-14 xl:items-start">

            {/* Liste des civilisations */}
            <div className="divide-y" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', borderColor: 'rgba(0,0,0,0.07)' }}>
              {civilisations.map((item, i) => (
                <div key={i} className="py-10 md:py-12">
                  {/* Ligne desktop (md+) */}
                  <div className="hidden md:grid md:grid-cols-[80px_1fr_200px] gap-8 items-center">
                    <div className="text-center">
                      <span className="font-serif" style={{
                        fontSize: '2rem',
                        background: 'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 50%, #BF9733 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: 1,
                      }}>{item.heure}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="font-serif text-[1.7rem] leading-none text-black tracking-[0.03em]">{item.civ}</h3>
                        <span className="inline-flex items-center rounded-full border px-3 py-1" style={{
                          color: '#B9913F', borderColor: 'rgba(185,145,63,0.35)', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase'
                        }}>{item.symbole}</span>
                      </div>
                      <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)' }}>
                        {item.periode}
                      </p>
                      <p className="font-light" style={{ fontSize: '0.96rem', lineHeight: '1.85', color: 'rgba(0,0,0,0.6)', maxWidth: '560px', paddingTop: '6px' }}>
                        {item.description}
                      </p>
                    </div>

                    <div className="flex justify-center items-center">
                      {item.sticker ? (
                        <div style={{ transform: `rotate(${item.rotate})`, transition: 'transform 0.4s ease', filter: 'drop-shadow(3px 6px 14px rgba(0,0,0,0.18))', cursor: 'pointer' }}
                          className="hover:[transform:rotate(0deg)_scale(1.06)]">
                          <div style={{ width: '50px', height: '16px', background: 'rgba(255,243,190,0.8)', borderRadius: '3px', margin: '0 auto -5px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }} />
                          <img src={item.sticker} alt={`Sticker ${item.civ}`}
                            style={{ width: '160px', height: '160px', objectFit: 'contain', display: 'block' }} />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-full border flex items-center justify-center text-2xl"
                          style={{ borderColor: 'rgba(200,168,75,0.2)', background: 'rgba(200,168,75,0.04)' }}>✦</div>
                      )}
                    </div>
                  </div>

                  {/* Ligne mobile */}
                  <div className="md:hidden flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 pt-1 text-center">
                      <span className="font-serif" style={{
                        fontSize: '1.5rem',
                        background: 'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 50%, #BF9733 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: 1,
                      }}>{item.heure}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0 space-y-1">
                          <h3 className="font-serif text-[1.2rem] leading-tight text-black tracking-[0.03em]">{item.civ}</h3>
                          <p style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)' }}>
                            {item.periode}
                          </p>
                          <span className="inline-flex items-center rounded-full border px-2 py-0.5" style={{
                            color: '#B9913F', borderColor: 'rgba(185,145,63,0.35)', fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase'
                          }}>{item.symbole}</span>
                        </div>

                        {item.sticker && (
                          <div className="flex-shrink-0" style={{ transform: `rotate(${item.rotate})`, filter: 'drop-shadow(2px 4px 8px rgba(0,0,0,0.15))' }}>
                            <div style={{ width: '36px', height: '13px', background: 'rgba(255,243,190,0.8)', borderRadius: '2px', margin: '0 auto -4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }} />
                            <img src={item.sticker} alt={`Sticker ${item.civ}`}
                              style={{ width: '90px', height: '90px', objectFit: 'contain', display: 'block' }} />
                          </div>
                        )}
                      </div>

                      <p className="font-light mt-3" style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'rgba(0,0,0,0.58)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Globe sticky — visible uniquement sur xl+ */}
            <div className="hidden xl:block xl:sticky xl:top-24 self-start">
              <div className="overflow-hidden rounded-[10px] border shadow-[0_20px_60px_rgba(0,0,0,0.12)]" style={{ borderColor: 'rgba(200,168,75,0.18)', background: '#050505' }}>
                <GlobeTerrestreAlma height="min(78vh, 860px)" />
              </div>
              <p className="mt-4 text-center text-[0.68rem] uppercase tracking-[0.24em]" style={{ color: 'rgba(0,0,0,0.35)' }}>
                Globe interactif des civilisations
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-32 px-6" style={{ background: '#07070a' }}>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="uppercase" style={{ fontSize: '0.58rem', letterSpacing: '0.3em', color: '#C8A84B' }}>VISION</p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-[0.04em]" style={{ color: '#FFFFFF' }}>
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

      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <p className="uppercase" style={{ fontSize: '0.58rem', letterSpacing: '0.3em', color: '#C8A84B' }}>SAVOIR-FAIRE</p>
            <h2 className="font-serif text-4xl text-black tracking-[0.04em] leading-tight">L&apos;Héritage Horloger</h2>
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
            <div className="relative w-64 h-64 rounded-full flex items-center justify-center border"
              style={{ borderColor: 'rgba(200,168,75,0.3)', background: 'rgba(200,168,75,0.04)' }}>
              <span className="font-serif" style={{
                fontSize: '5rem',
                background: 'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 50%, #BF9733 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>XII</span>
              <div className="absolute bottom-8 text-xs tracking-[0.2em] uppercase" style={{ color: 'rgba(200,168,75,0.7)' }}>
                Savoir-Faire Suisse
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
