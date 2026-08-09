import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl md:text-7xl font-light tracking-widest mb-4">AVICEN</h1>
        <h2 className="text-2xl md:text-3xl font-serif italic mb-8">LA TOLÉRANCE</h2>
        <p className="text-lg md:text-xl font-light max-w-2xl mb-12">
          « 12 civilisations. Une montre. L'histoire du monde au poignet. »
        </p>
        <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors duration-300">
          S'inscrire sur la liste d'attente
        </button>
      </section>

      {/* Spécifications Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h3 className="text-3xl font-light mb-12 text-center">Spécifications Techniques</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-xl font-bold mb-4">Boîtier & Cadran</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>• Boîtier 38 mm (Épaisseur ≤11,5 mm)</li>
              <li>• Cristal Saphir double face AR, 9 Mohs</li>
              <li>• Aiguilles Alpha (Lancette)</li>
              <li>• 12 systèmes d'écriture pour chaque heure</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Mouvement & Artisanat</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>• Calibre Sellita SW200-2 Mᵇ Power+</li>
              <li>• Réserve de marche 65h, 28 800 alt/h</li>
              <li>• Bracelet cuir veau ou maille acier</li>
              <li>• Coffret bois avec boîte de transport amovible</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Éditions Section */}
      <section className="py-20 bg-neutral-800 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-light mb-12">Pré-commandes Kickstarter</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 border border-neutral-700 bg-neutral-900">
              <h4 className="text-2xl font-serif mb-2">Édition Standard</h4>
              <p className="text-xl mb-6">1 500 €</p>
              <p className="text-neutral-400 mb-6">Limité à 150 pièces. L'élégance culturelle au quotidien.</p>
            </div>
            <div className="p-8 border border-yellow-600 bg-neutral-900">
              <h4 className="text-2xl font-serif text-yellow-500 mb-2">Édition Fondateurs</h4>
              <p className="text-xl text-yellow-500 mb-6">4 500 €</p>
              <p className="text-neutral-400 mb-6">Limité à 24 pièces numérotées. Laiton PVD Or ou Acier cadran noir.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 text-center text-neutral-500 text-sm">
        <p>© 2026 AVICEN. 10% des revenus nets sont reversés à une association d'éducation.</p>
      </footer>
    </main>
  );
}