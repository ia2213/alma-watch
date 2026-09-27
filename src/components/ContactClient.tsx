'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'reservation',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[#080808] text-white pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8A84B] mb-3 font-semibold">
            CONCIERGERIE & RELATIONS PRIVÉES
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light mb-4">
            Prendre Contact
          </h1>
          <div className="w-16 h-[1px] bg-[#C8A84B] mx-auto mb-6" />
          <p className="text-white/60 text-sm max-w-lg mx-auto font-light leading-relaxed">
            Notre conciergerie est à votre disposition pour toute demande concernant les réservations de pièces fondateurs, questions techniques ou partenariats.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
            <div className="text-2xl text-[#C8A84B] mb-2">✉</div>
            <h3 className="font-serif text-lg text-white mb-1">Email Privé</h3>
            <p className="text-xs text-white/50 mb-3">Réponse garantie sous 24h</p>
            <a href="mailto:contact@avicen-watch.com" className="text-xs text-[#C8A84B] hover:underline">
              contact@avicen-watch.com
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
            <div className="text-2xl text-[#C8A84B] mb-2">◆</div>
            <h3 className="font-serif text-lg text-white mb-1">Édition Fondateur</h3>
            <p className="text-xs text-white/50 mb-3">Attribution 01/12 à 12/12</p>
            <Link href="/collection/v1" className="text-xs text-[#C8A84B] hover:underline">
              Sélectionner mon numéro →
            </Link>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
            <div className="text-2xl text-[#C8A84B] mb-2">✦</div>
            <h3 className="font-serif text-lg text-white mb-1">Financement</h3>
            <p className="text-xs text-white/50 mb-3">Campagne Kickstarter</p>
            <Link href="/kickstarter" className="text-xs text-[#C8A84B] hover:underline">
              Découvrir la campagne →
            </Link>
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          {status === 'success' ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#05ce78]/20 border border-[#05ce78] text-[#05ce78] text-2xl flex items-center justify-center mx-auto">
                ✓
              </div>
              <h3 className="font-serif text-2xl text-white">Message Transmis avec Succès</h3>
              <p className="text-sm text-white/60 max-w-md mx-auto">
                Merci {formData.name || 'cher client'}. Notre équipe conciergerie a bien reçu votre demande et reviendra vers vous à l&apos;adresse <strong className="text-white">{formData.email}</strong> dans les plus brefs délais.
              </p>
              <button
                onClick={() => {
                  setStatus('idle');
                  setFormData({ name: '', email: '', type: 'reservation', message: '' });
                }}
                className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-[#C8A84B] hover:text-white transition"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-white/60 mb-2">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alexandre Dupont"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3.5 text-sm text-white placeholder-white/25 focus:border-[#C8A84B] outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-white/60 mb-2">
                    Adresse Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alexandre@exemple.com"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3.5 text-sm text-white placeholder-white/25 focus:border-[#C8A84B] outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-white/60 mb-2">
                  Objet de votre demande
                </label>
                <select
                  value={formData.type}
                  onChange={e => setFormData({ ...formData, type: e.target.value })}
                  className="w-full bg-[#151515] border border-white/15 rounded-lg px-4 py-3.5 text-sm text-white focus:border-[#C8A84B] outline-none transition"
                >
                  <option value="reservation">Réservation d&apos;une pièce Fondateur (numéro 1 à 12)</option>
                  <option value="technical">Question technique (Mouvement Sellita, Boîtier, Matériaux)</option>
                  <option value="kickstarter">Informations sur la campagne Kickstarter</option>
                  <option value="press">Presse, Médias & Partenariats</option>
                  <option value="other">Autre demande</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-white/60 mb-2">
                  Votre Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Bonjour, je souhaiterais obtenir des informations sur..."
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3.5 text-sm text-white placeholder-white/25 focus:border-[#C8A84B] outline-none transition"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-90 rounded"
                  style={{ background: '#C8A84B', color: '#080808' }}
                >
                  {status === 'submitting' ? 'Transmission en cours...' : 'Envoyer ma demande à la Conciergerie'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
