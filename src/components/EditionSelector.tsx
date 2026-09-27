'use client';
import { useState } from 'react';
import { Watch } from '@/lib/watches';
import Link from 'next/link';

export function EditionSelector({ watch }: { watch: Watch }) {
  const [selectedNum, setSelectedNum] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', country: 'France' });

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
  const priceToDisplay = watch.price ? `${watch.price.toLocaleString('fr-FR')} €` : (watch.series === 'Fondateur' ? '4 500 €' : '1 500 €');

  const handleSubmitReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <div className="font-serif text-3xl font-light text-white">
              {priceToDisplay}
            </div>
          </div>
          {isLimited && (
            <div className="text-right">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#C8A84B] mb-1">
                Acompte Réservation
              </div>
              <div className="text-xl font-medium text-white">1 700 €</div>
            </div>
          )}
        </div>

        {isLimited && (
          <div className="mb-10 relative z-10">
            <div className="flex justify-between items-center mb-4">
              <label className="text-[10px] uppercase tracking-[0.15em] text-white/60">
                SÉLECTIONNEZ VOTRE NUMÉRO FONDATEUR
              </label>
              <span className="text-xs font-serif italic text-[#C8A84B]">Édition 1 à 12</span>
            </div>
            
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mb-4">
              {civs.map(c => (
                <button
                  type="button"
                  key={c.num}
                  onClick={() => setSelectedNum(c.num)}
                  aria-label={`Choisir le numéro ${c.num} civilisation ${c.name}`}
                  className="h-14 flex flex-col items-center justify-center rounded border transition-all duration-300"
                  style={{
                    borderColor: selectedNum === c.num ? c.color : 'rgba(255,255,255,0.08)',
                    background: selectedNum === c.num ? `${c.color}20` : 'rgba(255,255,255,0.02)',
                    color: selectedNum === c.num ? '#fff' : 'rgba(255,255,255,0.35)',
                    transform: selectedNum === c.num ? 'scale(1.04)' : 'scale(1)',
                  }}
                >
                  <span className="font-serif text-lg">{c.script}</span>
                  <span className="text-[8px] tracking-widest">{c.roman}</span>
                </button>
              ))}
            </div>

            {/* Détail sélection */}
            <div className="bg-white/5 border border-white/10 p-4 rounded flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center border flex-shrink-0" style={{ borderColor: currentCiv.color, color: currentCiv.color, background: `${currentCiv.color}15` }}>
                <span className="font-serif text-xl">{currentCiv.script}</span>
              </div>
              <div>
                <div className="text-xs font-bold text-white mb-1">
                  Pièce N° {formattedNum}/12 — {currentCiv.name}
                </div>
                <div className="text-[10px] text-white/50 tracking-wider">
                  Votre exemplaire portera le numéro gravé <strong className="text-white">{currentCiv.roman}</strong> à 6h.
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3 relative z-10">
          <button 
            type="button"
            onClick={() => {
              setSubmitted(false);
              setShowModal(true);
            }}
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
          Campagne officielle de pré-lancement. Livraison estimée : Premier trimestre 2027.
        </div>
      </div>

      {/* ─── MODAL VIP RESERVATION & KICKSTARTER ─── */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/85 backdrop-blur-md" 
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-[#0d0d0d] border border-white/15 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in-up z-10 max-h-[90vh] overflow-y-auto">
            
            {/* Header Modal */}
            <div className="border-b border-white/10 p-6 flex justify-between items-center bg-black/40">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C8A84B]/20 border border-[#C8A84B] flex items-center justify-center text-[#C8A84B] text-xs font-bold">
                  ◆
                </div>
                <span className="text-xs font-bold tracking-[0.15em] text-white uppercase">
                  RÉSERVATION VIP · AVICEN
                </span>
              </div>
              <button 
                type="button"
                onClick={() => setShowModal(false)}
                className="text-white/40 hover:text-white text-2xl p-1 leading-none"
              >×</button>
            </div>

            {/* Body Modal */}
            <div className="p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#05ce78]/20 border border-[#05ce78] text-[#05ce78] text-2xl flex items-center justify-center mx-auto">
                    ✓
                  </div>
                  <h4 className="text-xl font-serif text-white">Priorité Enregistrée</h4>
                  <p className="text-xs text-white/70 leading-relaxed max-w-sm mx-auto">
                    Merci <strong className="text-white">{formData.name}</strong>. Votre pré-réservation pour la pièce <strong className="text-[#C8A84B]">{isLimited ? `N° ${formattedNum}/12 (${currentCiv.name})` : watch.name}</strong> est bien inscrite dans notre registre prioritaire.
                  </p>
                  <p className="text-[11px] text-white/50">
                    Un récapitulatif a été réservé pour <strong className="text-white">{formData.email}</strong>. Vous serez contacté 48h avant l&apos;ouverture publique.
                  </p>
                  <div className="pt-4 flex flex-col gap-3">
                    <Link
                      href="/kickstarter"
                      onClick={() => setShowModal(false)}
                      className="w-full block text-center py-3.5 text-xs font-bold tracking-[0.15em] uppercase rounded bg-[#05ce78] text-black hover:opacity-90 transition"
                    >
                      Voir la page Kickstarter →
                    </Link>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="w-full text-center py-3 text-xs text-white/40 hover:text-white transition"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-start gap-4 mb-6 bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="w-16 h-16 rounded bg-black/40 border border-white/10 p-1 flex-shrink-0 flex items-center justify-center">
                      <img src={watch.images[0]} alt={watch.name} className="w-full h-full object-contain filter drop-shadow-lg" />
                    </div>
                    <div>
                      <span className="text-[9px] tracking-[0.25em] uppercase font-semibold block mb-0.5 text-[#C8A84B]">
                        {watch.series.toUpperCase()} · AVICEN LA TOLÉRANCE
                      </span>
                      <h4 className="text-sm font-serif font-bold text-white mb-0.5">
                        {isLimited ? `ÉDITION N° ${formattedNum}/12 — ${currentCiv.name.toUpperCase()}` : watch.name}
                      </h4>
                      <div className="text-xs font-semibold text-[#C8A84B]">
                        {isLimited ? '4 500 € (Acompte 1 700 €)' : priceToDisplay}
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmitReservation} className="space-y-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-white/60 mb-1.5">
                        Nom & Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alexandre Dupont"
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-xs text-white placeholder-white/25 focus:border-[#C8A84B] outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-white/60 mb-1.5">
                        Adresse Email Professionnelle ou Personnelle *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alexandre@domaine.com"
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-xs text-white placeholder-white/25 focus:border-[#C8A84B] outline-none transition"
                      />
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit"
                        className="w-full py-3.5 text-xs font-bold tracking-[0.15em] uppercase rounded transition-all duration-300 hover:opacity-90"
                        style={{ background: '#C8A84B', color: '#000' }}
                      >
                        ✦ Confirmer ma Pré-Réservation VIP
                      </button>
                    </div>
                  </form>

                  <div className="mt-4 pt-4 border-t border-white/10 text-center">
                    <p className="text-[10px] text-white/40 mb-2">
                      Ou découvrez tous les détails de notre campagne :
                    </p>
                    <Link
                      href="/kickstarter"
                      onClick={() => setShowModal(false)}
                      className="inline-flex items-center gap-2 text-xs text-[#05ce78] hover:underline font-medium"
                    >
                      Consulter la page de présentation Kickstarter →
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
