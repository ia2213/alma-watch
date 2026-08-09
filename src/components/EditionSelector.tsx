'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Watch } from '@/lib/watches';

export interface CivEdition {
  num: number;
  roman: string;
  script: string;
  name: string;
  civ: string;
  era: string;
  desc: string;
}

export const CIVS_DATA: CivEdition[] = [
  {
    num: 1,
    roman: 'I',
    script: '١',
    name: 'Arabe',
    civ: 'Civilisation Islamique',
    era: '7e s. ap. J.-C.',
    desc: "Le chiffre 1 en numération arabe (١), marquant la 1re heure sur le cadran de l'édition N° 01/12."
  },
  {
    num: 2,
    roman: 'II',
    script: '২',
    name: 'Bengali',
    civ: 'Monde Bengali',
    era: '10e s. ap. J.-C.',
    desc: "Le chiffre 2 en numération bengalie (২), marquant la 2e heure sur le cadran de l'édition N° 02/12."
  },
  {
    num: 3,
    roman: 'III',
    script: '3',
    name: 'Chiffre moderne',
    civ: 'Monde contemporain',
    era: 'Époque moderne',
    desc: "Le chiffre 3 moderne, aboutissement universel marquant la 3e heure sur le cadran de l'édition N° 03/12."
  },
  {
    num: 4,
    roman: 'IV',
    script: '– – – –',
    name: 'Traits',
    civ: 'Système additif primitif',
    era: 'Antiquité',
    desc: "Quatre traits additifs primitifs, marquant la 4e heure sur le cadran de l'édition N° 04/12."
  },
  {
    num: 5,
    roman: 'V',
    script: 'ה',
    name: 'Hébreu',
    civ: 'Civilisation Juive',
    era: '10e s. av. J.-C.',
    desc: "Le chiffre 5 en hébreu (la lettre He ה, valeur numérique 5 dans la Guématrie), marquant la 5e heure sur le cadran de l'édition N° 05/12."
  },
  {
    num: 6,
    roman: 'VI',
    script: '๖',
    name: 'Thaï',
    civ: 'Thaïlande',
    era: '13e s. ap. J.-C.',
    desc: "Le chiffre 6 en écriture thaï (๖), marquant la 6e heure sur le cadran de l'édition N° 06/12."
  },
  {
    num: 7,
    roman: 'VII',
    script: '⴦',
    name: 'Géorgien',
    civ: 'Géorgie',
    era: 'Antiquité tardive',
    desc: "Le chiffre 7 en alphabet géorgien (⴦), marquant la 7e heure sur le cadran de l'édition N° 07/12."
  },
  {
    num: 8,
    roman: 'VIII',
    script: '፰',
    name: "Ge'ez",
    civ: 'Éthiopie Ancienne',
    era: '4e s. ap. J.-C.',
    desc: "Le chiffre 8 en écriture éthiopienne Ge'ez (፰), marquant la 8e heure sur le cadran de l'édition N° 08/12."
  },
  {
    num: 9,
    roman: 'IX',
    script: 'Θ',
    name: 'Grec',
    civ: 'Grèce Antique',
    era: '8e s. av. J.-C.',
    desc: "Le symbole grec Theta (Θ), marquant la 9e heure sur le cadran de l'édition N° 09/12."
  },
  {
    num: 10,
    roman: 'X',
    script: '十',
    name: 'Chinois',
    civ: 'Civilisation Chinoise',
    era: '2e s. av. J.-C.',
    desc: "Le caractère chinois dix (十), marquant la 10e heure sur le cadran de l'édition N° 10/12."
  },
  {
    num: 11,
    roman: 'XI',
    script: '𒌋𒁹',
    name: 'Cunéiforme',
    civ: 'Sumer & Mésopotamie',
    era: '3200 av. J.-C.',
    desc: "Le nombre 11 en écriture cunéiforme (𒌋 = 10, 𒁹 = 1 : 𒌋𒁹), marquant la 11e heure sur le cadran de l'édition N° 11/12."
  },
  {
    num: 12,
    roman: 'XII',
    script: 'XII',
    name: 'Latin',
    civ: 'Rome & Occident',
    era: '7e s. av. J.-C.',
    desc: "Le chiffre romain XII, marquant le sommet du cadran à midi et minuit de l'édition N° 12/12."
  }
];

export function EditionSelector({ watch }: { watch: Watch }) {
  const isLimited = watch.series === 'Fondateur' || watch.limited.includes('12 pièces') || watch.id === 'v1' || watch.id === 'v3';

  // Default to number 1 (#01 - Arabe ١) when arriving on the page
  const [selectedNum, setSelectedNum] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const currentCiv = CIVS_DATA[selectedNum - 1] || CIVS_DATA[0]; // fallback to Arabe #1
  const formattedNum = String(selectedNum).padStart(2, '0');

  return (
    <div className="w-full">
      {isLimited ? (
        <div 
          className="mb-8 p-6 rounded-lg border transition-all duration-300"
          style={{
            background: 'linear-gradient(145deg, rgba(26,23,18,0.7) 0%, rgba(14,13,10,0.9) 100%)',
            borderColor: 'rgba(200, 168, 75, 0.35)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
          }}
        >
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4 pb-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold block mb-1" style={{ color: '#C8A84B' }}>
                ÉDITION FONDATEUR — SÉRIE LIMITÉE (12 PIÈCES)
              </span>
              <h3 className="font-serif text-lg text-white">
                RÉSERVER VOTRE NUMÉRO (01/12 — 12/12)
              </h3>
            </div>
            <div 
              className="px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase"
              style={{ background: 'rgba(200, 168, 75, 0.15)', color: '#F0DFA0', border: '1px solid rgba(200, 168, 75, 0.4)' }}
            >
              NUMÉRO SÉLECTIONNÉ : {formattedNum}/12
            </div>
          </div>

          {/* Number Selector Grid */}
          <div className="mb-6">
            <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Sélectionnez votre numéro d&apos;exemplaire. Chaque numéro affiche le chiffre dans son écriture d&apos;origine :
            </p>
            <div className="grid grid-cols-6 sm:grid-cols-12 gap-2">
              {CIVS_DATA.map((item) => {
                const isSelected = selectedNum === item.num;
                const numLabel = String(item.num).padStart(2, '0');
                return (
                  <button
                    key={item.num}
                    onClick={() => setSelectedNum(item.num)}
                    type="button"
                    className="h-14 flex flex-col items-center justify-center p-1 rounded transition-all duration-200 group"
                    style={{
                      background: isSelected ? 'rgba(200, 168, 75, 0.22)' : 'rgba(255,255,255,0.03)',
                      border: `1.5px solid ${isSelected ? '#C8A84B' : 'rgba(255,255,255,0.12)'}`,
                      boxShadow: isSelected ? '0 0 14px rgba(200, 168, 75, 0.3)' : 'none',
                      transform: isSelected ? 'scale(1.05)' : 'scale(1)'
                    }}
                  >
                    <span 
                      className="text-[10px] font-semibold tracking-tighter mb-1 leading-none transition-colors"
                      style={{ color: isSelected ? '#F0DFA0' : 'rgba(255,255,255,0.5)' }}
                    >
                      {numLabel}
                    </span>
                    <span 
                      className="text-base leading-none font-serif font-bold transition-colors flex items-center justify-center h-5"
                      style={{ 
                        color: isSelected ? '#C8A84B' : 'rgba(255,255,255,0.8)',
                        fontFamily: 'Georgia, serif'
                      }}
                    >
                      {item.script}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Civilization Display Box */}
          <div 
            className="p-5 rounded-lg border mb-6 flex items-center gap-5 flex-col sm:flex-row text-center sm:text-left"
            style={{
              background: 'rgba(0,0,0,0.45)',
              borderColor: 'rgba(200, 168, 75, 0.25)'
            }}
          >
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 border-2"
              style={{
                background: 'radial-gradient(circle, rgba(200, 168, 75, 0.25) 0%, rgba(15,13,10,0.8) 100%)',
                borderColor: '#C8A84B',
                boxShadow: '0 0 25px rgba(200, 168, 75, 0.25)'
              }}
            >
              <span 
                className="text-4xl font-serif font-bold gold-gradient"
                style={{ lineHeight: 1, fontFamily: 'Georgia, serif' }}
              >
                {currentCiv.script}
              </span>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap mb-1">
                <span className="text-sm font-bold uppercase tracking-widest text-white">
                  EXEMPLAIRE N° {formattedNum} / 12 — {currentCiv.name.toUpperCase()}
                </span>
                <span 
                  className="text-[11px] px-2 py-0.5 rounded uppercase tracking-wider"
                  style={{ background: 'rgba(200, 168, 75, 0.2)', color: '#F0DFA0' }}
                >
                  {currentCiv.roman} ({currentCiv.script})
                </span>
              </div>
              <div className="text-xs font-medium mb-2" style={{ color: '#C8A84B' }}>
                {currentCiv.civ} · {currentCiv.era}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {currentCiv.desc}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex-1 py-4 px-6 text-xs uppercase tracking-[0.18em] font-bold transition-all duration-300 rounded text-center flex items-center justify-center gap-2 group"
              style={{
                background: 'linear-gradient(135deg, #C8A84B 0%, #F0DFA0 50%, #C8A84B 100%)',
                color: '#080808',
                boxShadow: '0 4px 20px rgba(200, 168, 75, 0.4)'
              }}
            >
              <span>✦ RÉSERVER N° {formattedNum}/12 — {currentCiv.name.toUpperCase()} ({currentCiv.script}) · ACOMPTE 1 700 €</span>
            </button>
            <Link
              href="/collection"
              className="px-8 py-4 text-xs uppercase tracking-[0.2em] text-center nav-link transition-all duration-300 rounded flex items-center justify-center"
              style={{ border: '1px solid rgba(200, 168, 75, 0.3)', color: 'rgba(255,255,255,0.7)' }}
            >
              ← Retour collection
            </Link>
          </div>
        </div>
      ) : (
        /* Non-limited edition (e.g. 1500€ collection) */
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded"
            style={{ background: '#C8A84B', color: '#080808' }}
          >
            ✦ Réserver mon exemplaire ({watch.price})
          </button>
          <Link
            href="/collection"
            className="px-10 py-4 text-xs uppercase tracking-[0.2em] text-center nav-link transition-all duration-300 rounded"
            style={{ border: '1px solid rgba(201,168,76,0.3)', color: 'rgba(255,255,255,0.6)' }}
          >
            ← Retour collection
          </Link>
        </div>
      )}

      {/* Reservation Confirmation Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
        >
          <div 
            className="w-full max-w-md p-7 rounded-xl border relative shadow-2xl"
            style={{
              background: 'linear-gradient(145deg, #181510 0%, #0d0c09 100%)',
              borderColor: '#C8A84B',
              boxShadow: '0 0 50px rgba(200, 168, 75, 0.25)'
            }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              type="button"
              className="absolute top-4 right-4 text-xl font-bold transition-colors"
              style={{ color: 'rgba(255,255,255,0.4)' }}
              aria-label="Fermer"
            >
              ×
            </button>

            <div className="text-center mb-6">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center border-2"
                style={{
                  background: 'rgba(200, 168, 75, 0.15)',
                  borderColor: '#C8A84B'
                }}
              >
                <span className="text-3xl font-serif gold-gradient font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                  {isLimited ? currentCiv.script : '✦'}
                </span>
              </div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold block mb-1" style={{ color: '#C8A84B' }}>
                RÉSERVATION AVICEN · LA TOLÉRANCE
              </span>
              <h4 className="text-xl font-serif font-bold text-white mb-1">
                {isLimited ? `ÉDITION N° ${formattedNum}/12 — ${currentCiv.name.toUpperCase()}` : watch.name}
              </h4>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {isLimited ? `${currentCiv.civ} · Symbole ${currentCiv.script}` : 'Édition en continu — Sans limite'}
              </p>
            </div>

            <div 
              className="p-4 rounded-lg border mb-6 text-xs space-y-2"
              style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.1)' }}
            >
              <div className="flex justify-between">
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>Modèle :</span>
                <span className="font-semibold text-white">{watch.name}</span>
              </div>
              {isLimited && (
                <>
                  <div className="flex justify-between">
                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>Numéro réservé :</span>
                    <span className="font-semibold" style={{ color: '#F0DFA0' }}>
                      N° {formattedNum} / 12 ({currentCiv.name} — {currentCiv.script})
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>Série :</span>
                    <span className="text-white">Édition Fondateur (12 pièces)</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>Prix total du modèle :</span>
                    <span className="font-semibold text-white">4 500 €</span>
                  </div>
                </>
              )}
              <div className="flex justify-between pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>{isLimited ? 'Montant de la réservation (acompte) :' : 'Prix de vente :'}</span>
                <span className="font-serif font-bold text-sm" style={{ color: '#C8A84B' }}>
                  {isLimited ? '1 700 €' : watch.price}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/kickstarter"
                onClick={() => setIsModalOpen(false)}
                className="w-full py-3.5 px-6 rounded text-xs uppercase tracking-[0.18em] font-bold text-center block"
                style={{
                  background: '#C8A84B',
                  color: '#080808'
                }}
              >
                {isLimited ? 'Confirmer ma réservation (1 700 €) →' : 'Confirmer ma commande →'}
              </Link>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-full py-2.5 text-xs uppercase tracking-[0.15em] transition-colors"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Continuer ma visite
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
