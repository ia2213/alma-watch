import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mentions Légales & Confidentialité',
  description: 'Mentions légales, politique de confidentialité, conformité RGPD et conditions générales du projet horloger AVICEN.',
  alternates: {
    canonical: 'https://avicen-watch.vercel.app/mentions-legales',
  },
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-[#080808] text-white pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8A84B] mb-2 font-semibold">
            INFORMATIONS LÉGALES & CONFORMITÉ
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Mentions Légales & Confidentialité
          </h1>
          <div className="w-16 h-[1px] bg-[#C8A84B]" />
        </div>

        <div className="space-y-12 text-sm leading-relaxed text-white/70 font-light">
          {/* 1. Éditeur */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-xl">
            <h2 className="font-serif text-xl text-white mb-4">1. Présentation et Éditeur du Site</h2>
            <p className="mb-3">
              Le site internet <strong className="text-white">https://avicen-watch.vercel.app</strong> est édité par le projet horloger <strong className="text-white">AVICEN</strong>.
            </p>
            <ul className="space-y-1 text-white/60">
              <li><strong className="text-white/80">Marque & Projet :</strong> AVICEN — L&apos;Art du Temps Universel</li>
              <li><strong className="text-white/80">Contact Conciergerie :</strong> contact@avicen-watch.com</li>
              <li><strong className="text-white/80">Direction de la publication :</strong> Équipe fondatrice AVICEN</li>
            </ul>
          </section>

          {/* 2. Hébergement */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-xl">
            <h2 className="font-serif text-xl text-white mb-4">2. Hébergement</h2>
            <p className="mb-2">Le site est hébergé par la société :</p>
            <p className="text-white/60">
              <strong className="text-white">Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723, États-Unis<br />
              Site internet : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#C8A84B] hover:underline">vercel.com</a>
            </p>
          </section>

          {/* 3. Propriété Intellectuelle */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-xl">
            <h2 className="font-serif text-xl text-white mb-4">3. Propriété Intellectuelle</h2>
            <p>
              L&apos;ensemble des éléments constituant le site AVICEN (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, marques, logos, créations et œuvres protégeables diverses, bases de données) ainsi que le site lui-même, relèvent des législations françaises et internationales sur le droit d&apos;auteur et la propriété intellectuelle.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sans autorisation écrite préalable.
            </p>
          </section>

          {/* 4. Protection des Données (RGPD) */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-xl">
            <h2 className="font-serif text-xl text-white mb-4">4. Données Personnelles (RGPD)</h2>
            <p>
              Dans le cadre de l&apos;utilisation du site, notamment lors de l&apos;inscription à la liste d&apos;attente VIP ou de la pré-réservation, des données personnelles peuvent être collectées (adresse email, prénom, pays).
            </p>
            <p className="mt-3">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/60">
              <li>Vos données sont exclusivement destinées à la gestion des réservations et aux informations relatives au lancement d&apos;AVICEN.</li>
              <li>Vos données ne sont ni vendues, ni louées, ni cédées à des tiers à des fins commerciales.</li>
              <li>Vous disposez d&apos;un droit d&apos;accès, de rectification, de portabilité et de suppression de vos données en écrivant à : <span className="text-[#C8A84B]">contact@avicen-watch.com</span>.</li>
            </ul>
          </section>

          {/* 5. Précommandes et Campagne Participative */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-xl">
            <h2 className="font-serif text-xl text-white mb-4">5. Précommandes & Financement Participatif</h2>
            <p>
              Les montres AVICEN présentées sur ce site font l&apos;objet d&apos;une campagne de pré-lancement et de financement participatif via la plateforme Kickstarter.
            </p>
            <p className="mt-3">
              Les délais de livraison annoncés (estimés au premier trimestre 2027) sont indicatifs et dépendent du calendrier de fabrication suisse et des contrôles qualité stricts opérés par nos ateliers partenaires.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#C8A84B] hover:text-white transition"
          >
            <span>←</span> Retour à l&apos;accueil
          </Link>
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
