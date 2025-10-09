"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function JungLogistique() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0c10] text-gray-100 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#0d1117] border-b border-gray-800 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-6">
          <Link href="/" className="text-xl font-bold text-white hover:text-indigo-400 transition">
            Mickael Hoffer
          </Link>
          <nav className="space-x-6 text-sm">
            <Link href="/" className="text-gray-300 hover:text-indigo-400 transition">Accueil</Link>
            <Link href="/#projects" className="text-gray-300 hover:text-indigo-400 transition">Projets</Link>
            <Link href="/#contact" className="text-gray-300 hover:text-indigo-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      <header className="relative w-full min-h-screen flex flex-col justify-center px-8 bg-gray-100">
        {/* Image de fond */}
        <div className="absolute inset-0">
        <img
            src="/picture_jung.jpg"
            alt="Background"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </header>

      {/* CONTENU */}
      <main className="flex-grow px-6 md:px-12 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-8 text-center md:text-left animate-breathe-text">
          Alternance — Assistant Projet chez Jung Logistique
        </h1>

        {/* Présentation */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">Présentation</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            Durant mon alternance chez <strong className="text-indigo-400">Jung Logistique</strong>,
            j’ai participé à la refonte de leur extranet logistique. J’ai travaillé
            sur la migration technique d’anciennes vues en <span className="text-blue-400">C# .NET</span>,
            et sur le développement de nouvelles fonctionnalités pour améliorer
            l’efficacité et la performance du système interne.
          </p>
        </section>

        {/* Réalisations Techniques */}
        <section className="mb-12 p-6 bg-[#111827] rounded-xl border border-gray-800 shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Réalisations Techniques</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
            <li>
              <strong className="text-white">Migration Technique :</strong> migration de vues critiques
              depuis <span className="text-gray-400">VBScript</span> vers <span className="text-blue-400">C# .NET</span>.
            </li>
            <li>
              <strong className="text-white">Développement Front/Back :</strong> création de nouvelles interfaces
              de gestion de réceptions (clients <span className="text-green-400">Heineken</span> et{" "}
              <span className="text-green-400">Kronenbourg</span>).
            </li>
            <li>
              <strong className="text-white">Automatisation :</strong> génération et envoi automatique
              d’e-mails aux transpetorteurs avec fichiers <span className="text-gray-400">Excel</span>.
            </li>
            <li>
              <strong className="text-white">Optimisation :</strong> amélioration de la performance
              et réduction des temps de chargement des vues.
            </li>
          </ul>
        </section>

        {/* Détails techniques */}
        <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
                Aperçu des fonctionnalités clés
            </h2>
            {[
                {
                title: "Vue Facturation Kronenbourg",
                content:
                    "Cette vue est une migration depuis l&apos;ancien portail développé en VBscript vers une nouvelle interface en C# .NET. L&apos;utilisateur renseigne une période (entre deux dates) pour visualiser les informations de facturation concernant les réceptions effectuées pour le client Heineken.Le tableau affiché ci-dessous présente différentes informations clés telles que la référence de la réception, l&apos;année du code, le fournisseur, le propriétaire, le motif, l&apos;article, le lot, le nombre de palettes et la somme en valeur logistique (VL). Une fonctionnalité importante de cette vue est la possibilité pour l&apos;utilisateur de télécharger ces données sous forme de fichier Excel (.xlsx) ou CSV (.csv) pour une analyse ou un traitement ultérieur.",
                image: "/Capture Jung 1.png", 
                },
                ].map((view, index) => (
                    <div key={index} className="mb-6 border-l-4 border-indigo-500 pl-4">
                    <h3 className="text-xl font-semibold text-indigo-300 mb-2">{view.title}</h3>
                    {view.image && (
                    <div className="overflow-hidden rounded-lg mb-4">
                    <img
                        src={view.image}
                        alt={view.title}
                        className="w-full h-130 object-cover transition-transform duration-400 ease-in-out hover:scale-105 hover:shadow-xl"
                    />
                    </div>
                )}
                <p className="text-gray-400 leading-relaxed">{view.content}</p>
                </div>
            ))}
            {[
                {
                title: "Vue Prise en Charge Heineken",
                content: "Cette vue permet de visualiser la liste des supports logistiques préparés pour Heineken sur une période donnée, définie par une date de début et une date de fin. Une fonctionnalité clé que j&apos;ai implémentée est la possibilité de filtrer l&apos;affichage des préparations selon leur type d&apos;expédition :",
                image: "/Capture Jung 2.png", 
                },
                ].map((view, index) => (
                    <div key={index} className="mb-6 border-l-4 border-indigo-500 pl-4">
                    <h3 className="text-xl font-semibold text-indigo-300 mb-2">{view.title}</h3>
                    {view.image && (
                    <div className="overflow-hidden rounded-lg mb-4">
                    <img
                        src={view.image}
                        alt={view.title}
                        className="w-full h-130 object-cover transition-transform duration-400 ease-in-out hover:scale-105 hover:shadow-xl"
                    />
                    </div>
                )}
                <p className="text-gray-400 leading-relaxed">{view.content}</p>
                <br />
                    <ul className="text-gray-400 leading-relaxed">
                        <li><strong className="text-white">Toutes les préparations :</strong> Affiche l&apos;ensemble des supports préparés, qu&apos;ils soient destinés à être expédiés par lots ou par messagerie.</li><br />
                        <li><strong className="text-white">Préparations en messagerie :</strong> Concernent les expéditions de plus petite taille, souvent composées de colis individuels ou de petites quantités de marchandises, traitées par des transporteurs de messagerie.</li><br />
                        <li><strong className="text-white">Préparations en lots :</strong> Désigne les expéditions plus importantes, généralement constituées de plusieurs palettes ou d&apos;un volume conséquent de marchandises, souvent transportées par des camions complets ou partiels.</li>
                    </ul>
                <br />
                <p className="text-gray-400 leading-relaxed">L&apos;utilisateur peut ainsi choisir le type de préparation qu&apos;il souhaite consulter en sélectionnant l&apos;option correspondante avant de lancer la recherche. Le tableau résultant affichera ensuite les informations des supports logistiques correspondant au filtre appliqué pour la période spécifiée.</p>
                </div>
            ))}
            {[
                {
                title: "Vue de Statistiques Atex",
                content: "Cette vue dédiée aux statistiques Atex offre quatre méthodes de recherche pour analyser les données :",
                image: "/Capture Jung 3.png", 
                },
                ].map((view, index) => (
                    <div key={index} className="mb-6 border-l-4 border-indigo-500 pl-4">
                    <h3 className="text-xl font-semibold text-indigo-300 mb-2">{view.title}</h3>
                    {view.image && (
                    <div className="overflow-hidden rounded-lg mb-4">
                    <img
                        src={view.image}
                        alt={view.title}
                        className="w-full h-130 object-cover transition-transform duration-400 ease-in-out hover:scale-105 hover:shadow-xl"
                    />
                    </div>
                )}
                <p className="text-gray-400 leading-relaxed">{view.content}</p>
                <br />
                    <ul className="text-gray-400 leading-relaxed">
                        <li>- Entre deux dates de création de préparation.</li>
                        <li>- Entre deux dates de validation de préparation.</li>
                        <li>- Entre deux dates de validation de chargement.</li>
                        <li>- Par code destinataire de préparation.</li>
                    </ul>
                <br />
                <p className="text-gray-400 leading-relaxed">Une fois les critères de recherche sélectionnés et appliqués, un tableau s&apos;affiche avec les informations suivantes pour chaque enregistrement Atex : Année de préparation, Numéro de préparation, Numéro de support, Article, Numéro de série, Destinataire préparation, et Numéro VO.</p>
                </div>
            ))}
            {[
                {
                title: "Vue de l&apos;État des Stocks",
                content: "Cette vue dynamique fournit un aperçu en temps réel de l&apos;état des stocks pour l&apos; activité et le dépôt actuellement sélectionnés, à la date du 2 mai 2025.",
                image: "/Capture Jung 4.png", 
                },
                ].map((view, index) => (
                    <div key={index} className="mb-6 border-l-4 border-indigo-500 pl-4">
                    <h3 className="text-xl font-semibold text-indigo-300 mb-2">{view.title}</h3>
                    {view.image && (
                    <div className="overflow-hidden rounded-lg mb-4">
                    <img
                        src={view.image}
                        alt={view.title}
                        className="w-full h-130 object-cover transition-transform duration-400 ease-in-out hover:scale-105 hover:shadow-xl"
                    />
                    </div>
                )}
                <p className="text-gray-400 leading-relaxed">{view.content}</p> 
                <br />
                <p className="text-gray-400 leading-relaxed">Les informations sont ensuite organisées par type de stockage :</p>
                <br />
                    <ul className="text-gray-400 leading-relaxed">
                        <li><strong className="text-white">Stockage de masse :</strong> Présente les quantités distribuées en vrac ou de manière non individualisée.</li><br />
                        <li><strong className="text-white">Stockage au sol :</strong> Indique les quantités entreposées directement sur le sol.</li><br />
                        <li><strong className="text-white">Stockage standard :</strong> Affiche les quantités stockées sur des supports standardisés, comme des palettes (EURO et 1000x1200).</li><br />
                        <li><strong className="text-white">Stockage picking :</strong> Montre les quantités disponibles pour le prélèvement.</li><br />
                    </ul>
                <br />
                <p className="text-gray-400 leading-relaxed">Pour chaque type de stockage et chaque produit, les informations suivantes sont affichées : Code Propriétaire, Propriétaire, Type de support, Quantité en stock, et <strong className="text-white">Quantité en équiv. EPR 80 </strong>(équivalent EUR palette 80x120). En bas de la page, les totaux pour le dépôt sélectionné sont affichés. L&apos;utilisateur a la possibilité de <strong className="text-white">télécharger ces informations au format Excel (.xlsx) ou CSV (.csv).</strong></p>
                </div>
            ))}
            {[
                {
                title: "Automatisation des Mails aux Transporteur(s)",
                content: "Dans le cadre de mes responsabilités, j&apos;ai conçu et développé une fonctionnalité visant à optimiser la communication avec les transporteurs. Cette interface permet de visualiser l&apos;ensemble des chargements disponibles sous forme de liste. L&apos;utilisateur peut y sélectionner un ou plusieurs transporteurs, ainsi que les chargements correspondants, puis lancer l&apos;envoi automatique d&apos;un e-mail. Chaque transporteur reçoit un message personnalisé accompagné d&apos;un fichier Excel en pièce jointe. *(Note : Cette page n&apos;est pas présentée pour des raisons de confidentialité des données.)*",
                image: "/Capture Jung 5.png", 
                },
                ].map((view, index) => (
                    <div key={index} className="mb-6 border-l-4 border-indigo-500 pl-4">
                    <h3 className="text-xl font-semibold text-indigo-300 mb-2">{view.title}</h3>
                    {view.image && (
                    <div className="overflow-hidden rounded-lg mb-4">
                    <img
                        src={view.image}
                        alt={view.title}
                        className="w-full h-130 object-cover transition-transform duration-400 ease-in-out hover:scale-105 hover:shadow-xl"
                    />
                    </div>
                )}
                <p className="text-gray-400 leading-relaxed">{view.content}</p> 
                </div>
            ))}
        </section>
        {/* Bilan */}
        <section className="p-8 bg-[#111827] rounded-xl border border-gray-800 shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Bilan</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Cette alternance m’a permis d’acquérir une réelle autonomie en développement web,
            d’approfondir mes compétences back-end, et de comprendre les enjeux
            d’un environnement logistique à grande échelle.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>Développement full-stack en C#, PHP, JavaScript.</li>
            <li>Approche agile et collaboration d’équipe.</li>
            <li>Gestion de versions avec Git/GitHub.</li>
            <li>Montée en compétences sur la performance et la sécurité applicative.</li>
          </ul>
        </section>

        {/* Bouton Retour */}
        <div className="text-center">
          <Link
            href="/#projects"
            className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            ← Retour au portfolio
          </Link>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0d1117] border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.linkedin.com/in/mickael-hoffer/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/mickaaa67"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <FaGithub size={22} />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Mickael Hoffer — Tous droits réservés.</p>
      </footer>
    </div>
  );
}
