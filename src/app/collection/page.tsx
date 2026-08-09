'use client';
import { watches } from '@/lib/watches';
import Link from 'next/link';

export default function Collection() {
  return (
    <main className="min-h-screen bg-[#F8F7F5]">
      {/* HEADER HERO */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=2400&q=90)',
            filter: 'brightness(0.3) contrast(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F5] via-transparent to-[#080808]/50" />
        
        <div className="relative z-10 text-center px-6 mt-16">
          <p className="nav-link mb-4" style={{color: '#C8A84B', letterSpacing: '0.3em'}}>
            LA COLLECTION
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6" style={{fontWeight: 400}}>
            <em style={{
              fontStyle: 'normal',
              background: 'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 35%, #D4A843 60%, #BF9733 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>AVICEN</em>
          </h1>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em', maxWidth: '440px', lineHeight: 1.7, margin: '0 auto 2rem auto' }}>
            12 civilisations · 24 pièces Fondateurs (numéro au choix 01/12 — 12/12) · Éditions en continu à partir de 1 500 €
          </p>
        </div>
      </section>

      {/* LISTE DES MONTRES DESKTOP */}
      <section id="montres" className="py-16 hidden md:block">
        <div className="text-center mb-12">
          <p className="nav-link mb-3" style={{color: '#C8A84B'}}>LES MODÈLES</p>
          <h2 className="font-serif text-4xl text-black">Choisissez votre AVICEN</h2>
          <div className="w-20 h-[1px] bg-[#C8A84B] mx-auto mt-4" />
        </div>
        <div 
          className="flex justify-center flex-wrap gap-8 px-12 pb-16"
        >
          {watches.map(watch => (
            <Link 
              key={watch.id} 
              href={watch.isTeasing ? "#precommande" : `/collection/${watch.id}`}
              className="group flex-shrink-0 w-[380px] bg-white border shadow-sm hover:shadow-xl transition-all duration-500 relative"
              style={{ borderColor: 'rgba(0,0,0,0.06)' }}
            >
              <div className="h-[460px] overflow-hidden relative bg-[#050505] flex items-center justify-center">
                {watch.isTeasing ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 text-center bg-black/40">
                    <img 
                      src={watch.images[0]} 
                      alt={watch.name} 
                      className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale blur-sm"
                    />
                    <div className="relative z-20">
                      <span className="text-white font-serif text-3xl block mb-4">Édition Secrète</span>
                      <span className="text-[10px] text-white/90 tracking-widest border border-white/50 px-6 py-3 hover:bg-white hover:text-black transition uppercase">Rejoindre la liste d'attente</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <img 
                      src={watch.images[0]} 
                      alt={watch.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div 
                      className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{background: 'linear-gradient(to top, rgba(255,255,255,0.92) 0%, transparent 100%)'}}
                    >
                      <span className="nav-link text-[10px] uppercase tracking-widest" style={{color: '#C8A84B'}}>{watch.series}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-black mb-2">{watch.name}</h3>
                <p className="text-xs text-black/50 tracking-widest uppercase mb-6 h-8">{watch.subtitle}</p>
                <div className="w-full h-[1px] bg-black/10 mb-4" />
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl text-black">
                    {watch.isTeasing ? 'À VENIR' : (watch.series === 'Fondateur' ? '4 500 €' : 'À partir de 1 500 €')}
                  </span>
                  <span className="nav-link text-[10px] uppercase tracking-widest" style={{color: '#C8A84B'}}>
                    {watch.isTeasing ? "S'inscrire →" : "Découvrir →"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* LISTE DES MONTRES MOBILE */}
      <section id="montres-mobile" className="py-12 md:hidden">
        <div className="text-center mb-10">
          <p className="nav-link mb-3 text-[10px] uppercase tracking-widest" style={{color: '#C8A84B'}}>LES MODÈLES</p>
          <h2 className="font-serif text-3xl text-black">Choisissez votre AVICEN</h2>
          <div className="w-16 h-[1px] bg-[#C8A84B] mx-auto mt-4" />
        </div>
        <div className="flex flex-col gap-8 px-6 pb-12">
          {watches.map(watch => (
            <Link 
              key={watch.id} 
              href={watch.isTeasing ? "#precommande" : `/collection/${watch.id}`}
              className="block bg-white border shadow-sm relative"
              style={{ borderColor: 'rgba(0,0,0,0.06)' }}
            >
              <div className="h-[380px] overflow-hidden relative bg-[#050505]">
                {watch.isTeasing ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 text-center bg-black/40">
                    <img 
                      src={watch.images[0]} 
                      alt={watch.name} 
                      className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale blur-sm"
                    />
                    <div className="relative z-20">
                      <span className="text-white font-serif text-2xl block mb-4">Édition Secrète</span>
                      <span className="text-[10px] text-white/90 tracking-widest border border-white/50 px-5 py-3 uppercase">Rejoindre la liste d'attente</span>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={watch.images[0]} 
                    alt={watch.name} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-black mb-1">{watch.name}</h3>
                <p className="text-[10px] text-black/50 tracking-widest uppercase mb-4">{watch.subtitle}</p>
                <div className="w-full h-[1px] bg-black/10 mb-4" />
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg text-black">
                    {watch.isTeasing ? 'À VENIR' : (watch.series === 'Fondateur' ? '4 500 €' : 'À partir de 1 500 €')}
                  </span>
                  <span className="nav-link text-[10px] uppercase tracking-widest" style={{color: '#C8A84B'}}>
                    {watch.isTeasing ? "S'inscrire →" : "Voir →"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PRE-ORDER SECTION */}
      <section id="precommande" className="py-24 px-6 bg-[#080808] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="nav-link mb-4 text-[10px] uppercase tracking-widest" style={{color: '#C8A84B'}}>LISTE D'ATTENTE</p>
          <h2 className="font-serif text-4xl mb-6">Éditions Secrètes</h2>
          <p className="text-white/60 mb-10 font-light leading-relaxed">
            Les éditions <strong className="text-white">Or Rose Nacre</strong>, <strong className="text-white">Acier Blanc</strong> et <strong className="text-white">Or Noir</strong> sont actuellement en cours de développement. 
            Inscrivez-vous pour être informé en priorité de leur sortie et réserver votre numéro.
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Votre adresse e-mail" 
              className="bg-white/5 border border-white/20 px-6 py-4 text-white text-sm outline-none focus:border-[#C8A84B] transition flex-1 max-w-sm" 
              required 
            />
            <button 
              type="button" 
              onClick={() => alert('Merci ! Vous êtes sur la liste pour les éditions secrètes.')}
              className="text-black font-bold uppercase tracking-widest text-[10px] px-8 py-4 hover:bg-white transition"
              style={{ background: '#C8A84B' }}
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}