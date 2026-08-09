'use client';
import { useState } from 'react';
import { Watch } from '@/lib/watches';
import Link from 'next/link';

export function EditionSelector({ watch }: { watch: Watch }) {
  const [selectedNum, setSelectedNum] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const civs = [
    { num: 1, name: 'Arabe', script: '١', roman: 'I', color: '#d4af37' },
    { num: 2, name: 'Bengali', script: '২', roman: 'II', color: '#c0a060' },
    { num: 3, name: 'Moderne', script: '3', roman: 'III', color: '#b8b8b8' },
    { num: 4, name: 'Traits', script: '– – – –', roman: 'IV', color: '#c8a84b' },
    { num: 5, name: 'Hébreu', script: 'ה', roman: 'V', color: '#a8b8d0' },
    { num: 6, name: 'Thaï', script: '๖', roman: 'VI', color: '#70c0a0' },
    { num: 7, name: 'Géorgien', script: '⴦', roman: 'VII', color: '#c07070' },
    { num: 8, name: "Ge'ez", script: '፰', roman: 'VIII', color: '#c8a835' },
    { num: 9, name: 'Grec', script: 'Θ', roman: 'IX', color: '#a0b8d8' },
    { num: 10, name: 'Chinois', script: '十', roman: 'X', color: '#e8a060' },
    { num: 11, name: 'Cunéiforme', script: '𒌋𒁹', roman: 'XI', color: '#c880c0' },
    { num: 12, name: 'Latin', script: 'XII', roman: 'XII', color: '#d4af37' },
  ];

  const isLimited = watch.series === 'Fondateur';
  const currentCiv = civs.find(c => c.num === selectedNum)!;
  const formattedNum = String(selectedNum).padStart(2, '0');

  const priceToDisplay = watch.series === 'Fondateur' ? '4 500 €' : '1 500 €';

  return (
    <>
      <div className="bg-gradient-to-br from-[#151515] to-[#0a0a0a] border border-white/10 rounded-xl p-8 shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C8A84B] rounded-full blur-[120px] opacity-10" />

        <div className="flex justify-between items-end mb-8 relative z-10">
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-1">
              Prix public
            </div>
            <div className="font-serif text-3xl font-light">
              {priceToDisplay}
            </div>
          </div>
          {isLimited && (
            <div className="text-right">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#C8A84B] mb-1">
                Acompte
              </div>
              <div className="text-xl font-medium">1 700 €</div>
            </div>
          )}
        </div>

        {isLimited && (
          <div className="mb-10 relative z-10">
            <div className="flex justify-between items-center mb-4">
              <label className="text-[10px] uppercase tracking-[0.15em] text-white/60">
                SÉLECTIONNEZ VOTRE NUMÉRO
              </label>
              <span className="text-xs font-serif italic text-white/40">1 à 12</span>
            </div>
            
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mb-4">
              {civs.map(c => (
                <button
                  key={c.num}
                  onClick={() => setSelectedNum(c.num)}
                  className="h-14 flex flex-col items-center justify-center rounded border transition-all duration-300"
                  style={{
                    borderColor: selectedNum === c.num ? c.color : 'rgba(255,255,255,0.08)',
                    background: selectedNum === c.num ? `${c.color}15` : 'rgba(255,255,255,0.02)',
                    color: selectedNum === c.num ? '#fff' : 'rgba(255,255,255,0.3)'
                  }}
                >
                  <span className="font-serif text-lg">{c.script}</span>
                  <span className="text-[8px] tracking-widest">{c.roman}</span>
                </button>
              ))}
            </div>

            {/* Détail sélection */}
            <div className="bg-white/5 border border-white/10 p-4 rounded flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center border" style={{ borderColor: currentCiv.color, color: currentCiv.color, background: `${currentCiv.color}10` }}>
                <span className="font-serif text-xl">{currentCiv.script}</span>
              </div>
              <div>
                <div className="text-xs font-bold text-white mb-1">
                  Pièce N° {formattedNum}/12 — {currentCiv.name}
                </div>
                <div className="text-[10px] text-white/50 tracking-wider">
                  Votre exemplaire portera le numéro {currentCiv.roman} à 6h.
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3 relative z-10">
          <button 
            onClick={() => setShowModal(true)}
            className="w-full py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:opacity-90"
            style={{ background: '#C8A84B', color: '#080808' }}
          >
            ✦ Réserver mon exemplaire ({priceToDisplay})
          </button>
          <Link 
            href="/collection" 
            className="w-full block text-center py-4 text-[10px] tracking-[0.2em] uppercase text-white/50 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
          >
            Voir tous les modèles
          </Link>
        </div>

        <div className="mt-6 text-center text-[9px] text-white/30 leading-relaxed max-w-xs mx-auto">
          Les fonds ne seront collectés que si l'objectif Kickstarter est atteint. 
          Livraison estimée : Premier trimestre 2027.
        </div>
      </div>

      {/* ─── MODAL KICKSTARTER ─── */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-[#0d0d0d] border border-white/10 rounded-xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in-up">
            
            {/* Header Modal */}
            <div className="border-b border-white/10 p-6 flex justify-between items-center bg-black/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#05ce78]/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="16" fill="#05ce78" />
                    <path d="M10 8v16M10 16l5-8 7 8-7 8-5-8z" stroke="#000" strokeWidth="2.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm font-bold tracking-[0.1em] text-white">RÉSERVATION KICKSTARTER</span>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="text-white/40 hover:text-white text-xl p-2"
              >×</button>
            </div>

            {/* Body Modal */}
            <div className="p-8">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-24 h-24 rounded bg-white/5 border border-white/10 p-2 flex-shrink-0">
                  <img src={watch.images[0]} alt={watch.name} className="w-full h-full object-contain filter drop-shadow-lg" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase font-semibold block mb-1" style={{ color: '#C8A84B' }}>
                    RÉSERVATION AVICEN · LA TOLÉRANCE
                  </span>
                  <h4 className="text-xl font-serif font-bold text-white mb-1">
                    {isLimited ? `ÉDITION N° ${formattedNum}/12 — ${currentCiv.name.toUpperCase()}` : watch.name}
                  </h4>
                  <p className="text-xs text-white/50">{watch.subtitle}</p>
                </div>
              </div>

              <div className="bg-[#151515] border border-white/5 rounded-lg p-5 mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{isLimited ? 'Montant de la réservation (acompte) :' : 'Prix de vente :'}</span>
                  <span className="font-serif font-bold text-sm" style={{ color: '#C8A84B' }}>
                    {isLimited ? '1 700 €' : priceToDisplay}
                  </span>
                </div>
              </div>

              <p className="text-sm text-white/70 mb-8 leading-relaxed">
                Vous allez être redirigé vers notre page officielle Kickstarter pour finaliser votre soutien de manière sécurisée.
              </p>

              <button 
                className="w-full py-4 text-sm font-bold tracking-[0.15em] uppercase rounded transition-all duration-300 hover:scale-[1.02]"
                style={{ background: '#05ce78', color: '#000' }}
                onClick={() => window.open('https://kickstarter.com', '_blank')}
              >
                Continuer sur Kickstarter →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}