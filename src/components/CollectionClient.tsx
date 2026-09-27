'use client';

import { useState } from 'react';
import { watches } from '@/lib/watches';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function CollectionClient() {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistEdition, setWaitlistEdition] = useState('Or Rose Nacre');
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail) return;
    setWaitlistSuccess(true);
  };

  const scrollToPreorder = (editionName?: string) => {
    if (editionName) setWaitlistEdition(editionName);
    const elem = document.getElementById('precommande');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F7F5]">
      {/* HEADER HERO */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#080808]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/watches/acier-noir.png)',
            filter: 'blur(30px) brightness(0.4)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F5] via-transparent to-[#080808]/70" />
        
        <div className="relative z-10 text-center px-6 mt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C8A84B] font-semibold mb-3">
            HAUTE HORLOGERIE SUISSE
          </p>
          <h1 className="font-serif text-4xl md:text-6xl mb-6 text-black" style={{fontWeight: 400}}>
            La Collection <span style={{
              background: 'linear-gradient(135deg, #C8A84B 0%, #D4A843 50%, #99731a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>AVICEN</span>
          </h1>
          <p className="text-sm md:text-base text-black/60 max-w-lg mx-auto font-light leading-relaxed">
            12 civilisations · 24 pièces Fondateurs (numérotées 01/12 à 12/12) · Mouvement Sellita SW200-2 Swiss Made.
          </p>
        </div>
      </section>

      {/* LISTE DES MONTRES DESKTOP */}
      <section id="montres" className="py-16 hidden md:block">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8A84B] font-semibold mb-2">LES MODÈLES</p>
          <h2 className="font-serif text-4xl text-black">Choisissez votre AVICEN</h2>
          <div className="w-20 h-[1px] bg-[#C8A84B] mx-auto mt-4" />
        </div>
        
        <div 
          className="flex overflow-x-auto gap-8 px-12 pb-16 snap-x snap-mandatory"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none'
          }}
        >
          {watches.map(watch => (
            <div 
              key={watch.id}
              className="group flex-shrink-0 w-[380px] snap-center bg-white border shadow-sm hover:shadow-2xl transition-all duration-500 relative flex flex-col justify-between"
              style={{ borderColor: 'rgba(0,0,0,0.06)' }}
            >
              <div className="h-[460px] overflow-hidden relative bg-[#070707] flex items-center justify-center p-6">
                {watch.isTeasing ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10 text-center bg-black/60 backdrop-blur-[2px]">
                    <img 
                      src={watch.images[0]} 
                      alt={watch.name} 
                      className="absolute inset-0 w-full h-full object-contain opacity-25 grayscale blur-[3px]"
                    />
                    <div className="relative z-20 space-y-4">
                      <span className="text-[#C8A84B] text-[10px] uppercase tracking-[0.3em] font-semibold block">En Préparation</span>
                      <span className="text-white font-serif text-3xl block">Édition Secrète</span>
                      <p className="text-xs text-white/60 max-w-xs">{watch.subtitle}</p>
                      <button 
                        type="button"
                        onClick={() => scrollToPreorder(watch.name)}
                        className="text-[10px] text-white tracking-widest border border-[#C8A84B] px-6 py-3 bg-[#C8A84B]/10 hover:bg-[#C8A84B] hover:text-black transition uppercase font-semibold"
                      >
                        Rejoindre la liste d&apos;attente
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link href={`/collection/${watch.id}`} className="w-full h-full flex items-center justify-center">
                    <img 
                      src={watch.images[0]} 
                      alt={watch.name} 
                      className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                    <div 
                      className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)'}}
                    >
                      <span className="text-[10px] uppercase tracking-widest text-[#C8A84B] font-semibold">{watch.series} — 12 PIÈCES</span>
                      <span className="text-xs text-white font-light">Cliquez pour configurer votre numéro</span>
                    </div>
                  </Link>
                )}
              </div>

              <div className="p-8 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] uppercase tracking-widest text-[#C8A84B] font-semibold">{watch.series}</span>
                    <span className="text-[9px] text-black/40 tracking-wider">REF: {watch.ref}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-black mb-2">{watch.name}</h3>
                  <p className="text-xs text-black/50 tracking-wide uppercase mb-6 h-8 line-clamp-2">{watch.subtitle}</p>
                </div>
                
                <div>
                  <div className="w-full h-[1px] bg-black/10 mb-4" />
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xl text-black font-medium">
                      {watch.isTeasing ? 'À VENIR' : `${watch.price.toLocaleString('fr-FR')} €`}
                    </span>
                    {watch.isTeasing ? (
                      <button 
                        type="button"
                        onClick={() => scrollToPreorder(watch.name)}
                        className="text-[10px] uppercase tracking-widest text-[#C8A84B] hover:text-black font-semibold transition"
                      >
                        S&apos;inscrire →
                      </button>
                    ) : (
                      <Link 
                        href={`/collection/${watch.id}`}
                        className="text-[10px] uppercase tracking-widest text-[#C8A84B] hover:text-black font-semibold transition"
                      >
                        Découvrir →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LISTE DES MONTRES MOBILE */}
      <section id="montres-mobile" className="py-12 md:hidden px-4">
        <div className="text-center mb-10">
          <p className="text-[10px] uppercase tracking-widest text-[#C8A84B] font-semibold mb-2">LES MODÈLES</p>
          <h2 className="font-serif text-3xl text-black">Choisissez votre AVICEN</h2>
          <div className="w-16 h-[1px] bg-[#C8A84B] mx-auto mt-4" />
        </div>
        
        <div className="flex flex-col gap-8 pb-12">
          {watches.map(watch => (
            <div 
              key={watch.id}
              className="bg-white border shadow-sm rounded-lg overflow-hidden"
              style={{ borderColor: 'rgba(0,0,0,0.06)' }}
            >
              <div className="h-[360px] overflow-hidden relative bg-[#080808] flex items-center justify-center p-4">
                {watch.isTeasing ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 text-center bg-black/60">
                    <img 
                      src={watch.images[0]} 
                      alt={watch.name} 
                      className="absolute inset-0 w-full h-full object-contain opacity-20 grayscale blur-[2px]"
                    />
                    <div className="relative z-20 space-y-3">
                      <span className="text-white font-serif text-2xl block">Édition Secrète</span>
                      <p className="text-[11px] text-white/60">{watch.subtitle}</p>
                      <button 
                        type="button"
                        onClick={() => scrollToPreorder(watch.name)}
                        className="text-[9px] text-white tracking-widest border border-white/50 px-5 py-2.5 uppercase font-semibold"
                      >
                        Rejoindre la liste d&apos;attente
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link href={`/collection/${watch.id}`} className="w-full h-full flex items-center justify-center">
                    <img 
                      src={watch.images[0]} 
                      alt={watch.name} 
                      className="w-full h-full object-contain filter drop-shadow-xl"
                    />
                  </Link>
                )}
              </div>

              <div className="p-6">
                <span className="text-[9px] uppercase tracking-widest text-[#C8A84B] font-semibold block mb-1">{watch.series}</span>
                <h3 className="font-serif text-xl text-black mb-1">{watch.name}</h3>
                <p className="text-[11px] text-black/50 tracking-wide uppercase mb-4">{watch.subtitle}</p>
                <div className="w-full h-[1px] bg-black/10 mb-4" />
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg text-black font-medium">
                    {watch.isTeasing ? 'À VENIR' : `${watch.price.toLocaleString('fr-FR')} €`}
                  </span>
                  {watch.isTeasing ? (
                    <button 
                      type="button"
                      onClick={() => scrollToPreorder(watch.name)}
                      className="text-[10px] uppercase tracking-widest text-[#C8A84B] font-semibold"
                    >
                      S&apos;inscrire →
                    </button>
                  ) : (
                    <Link 
                      href={`/collection/${watch.id}`}
                      className="text-[10px] uppercase tracking-widest text-[#C8A84B] font-semibold"
                    >
                      Voir →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRE-ORDER SECTION */}
      <section id="precommande" className="py-24 px-6 bg-[#080808] text-white text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C8A84B] font-semibold mb-3">
            LISTE PRIVILÈGE & ÉDITIONS SECRÈTES
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-6 font-light">
            Rejoindre la Liste d&apos;Attente
          </h2>
          <p className="text-white/60 mb-10 font-light text-sm leading-relaxed">
            Les déclinaisons <strong className="text-white">Or Rose Nacre</strong>, <strong className="text-white">Acier Blanc</strong> et <strong className="text-white">Or Noir</strong> sont en cours de finalisation en atelier suisse. 
            Inscrivez-vous pour obtenir une priorité d&apos;attribution dès l&apos;ouverture des précommandes.
          </p>

          {waitlistSuccess ? (
            <div className="bg-white/5 border border-[#05ce78]/40 p-8 rounded-xl max-w-md mx-auto space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#05ce78]/20 text-[#05ce78] flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h3 className="font-serif text-xl text-white">Inscription Enregistrée</h3>
              <p className="text-xs text-white/70">
                Merci ! Votre email <strong className="text-white">{waitlistEmail}</strong> a bien été ajouté à la liste prioritaire pour le modèle <strong className="text-[#C8A84B]">{waitlistEdition}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="space-y-4 max-w-md mx-auto">
              <div>
                <select
                  value={waitlistEdition}
                  onChange={e => setWaitlistEdition(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 px-4 py-3.5 text-xs text-white rounded outline-none focus:border-[#C8A84B] transition mb-3"
                >
                  <option value="LA TOLÉRANCE Or Rose Nacre" className="bg-[#111]">Modèle ciblé : Or Rose Nacre (Nacre de Tahiti)</option>
                  <option value="LA TOLÉRANCE Acier Blanc" className="bg-[#111]">Modèle ciblé : Acier Blanc (Cadran Champagne)</option>
                  <option value="LA TOLÉRANCE Or Noir" className="bg-[#111]">Modèle ciblé : Or Noir (Cadran Noir Laqué)</option>
                  <option value="Toute la collection" className="bg-[#111]">Toutes les éditions secrètes</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  value={waitlistEmail}
                  onChange={e => setWaitlistEmail(e.target.value)}
                  placeholder="Votre adresse e-mail" 
                  className="bg-white/5 border border-white/20 px-5 py-3.5 text-white text-xs rounded outline-none focus:border-[#C8A84B] transition flex-1" 
                  required 
                />
                <button 
                  type="submit" 
                  className="text-black font-bold uppercase tracking-widest text-[10px] px-8 py-3.5 hover:opacity-90 transition rounded"
                  style={{ background: '#C8A84B' }}
                >
                  S&apos;inscrire
                </button>
              </div>
              <p className="text-[10px] text-white/30">Garantie sans spam. Désinscription possible en 1 clic.</p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
