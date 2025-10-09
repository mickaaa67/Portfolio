"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function StageONF() {
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
        {/* img de fond ONF */}
        <div className="absolute inset-0">
          <img
            src="/picture_onf.jpg" // logo ou img de fond
            alt="ONF"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </header>

      {/* CONTENU */}
      <main className="flex-grow px-6 md:px-12 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-8 text-center md:text-left animate-breathe-text">
          Stage à l'ONF — Site de Commande d'Équipements
        </h1>

        {/* Présentation */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">Présentation du projet</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            Ce projet a consisté en la conception et le développement d'un site de commande en ligne destiné aux ouvriers de l'<strong className="text-indigo-400">Office National des Forêts (ONF)</strong>. 
            L'objectif était de fournir une plateforme centralisée et accessible pour la commande de vêtements et d'équipements de protection individuelle (EPI) essentiels à leurs activités professionnelles.
          </p>
        </section>

        {/* Contributions */}
        <section className="mb-12 p-6 bg-[#111827] rounded-xl border border-gray-800 shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Mes contributions au projet</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Au sein d'une équipe de quatre développeurs, j'ai activement participé à toutes les phases du projet. Mes principales responsabilités étaient :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
            <li>Participation à la conception de l'interface utilisateur (UI) et de l'expérience utilisateur (UX).</li>
            <li>Développement front-end en HTML et CSS.</li>
            <li>Développement back-end en PHP pour la gestion des commandes et des stocks.</li>
            <li>Conception et implémentation de la base de données pour stocker utilisateurs, produits et commandes.</li>
            <li>Déploiement et configuration du site sur un serveur OVH, accessible sur PC, tablette et téléphone.</li>
            <li>Utilisation de Trello pour le suivi des tâches et GitHub pour le contrôle de version.</li>
            <li>Participation aux réunions d'équipe pour assurer la coordination et la communication.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Ce projet m’a permis de mettre en pratique mes compétences en développement web dans un contexte réel et collaboratif.
          </p>
        </section>

        {/* Aperçu du MCD */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Aperçu du Modèle Conceptuel de Données (MCD)</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Ce Modèle Conceptuel de Données illustre l’organisation des informations pour le projet ONF. Il met en évidence les entités principales, telles que les Utilisateurs (Ouvriers), les Commandes d’EPI, les Produits, les Fournisseurs, les Catégories, les Tailles et les Lieux de Livraison.
          </p>
          <div className="overflow-hidden rounded-2xl mb-4">
            <img
              src="/mcd onf.png"
              alt="MCD ONF"
              className="w-full h-[58rem] object-cover transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
            />
          </div>
        </section>

        {/* Aperçu du site */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Aperçu du site</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Pour avoir un aperçu visuel des différentes pages et fonctionnalités du site de commande pour l'ONF, veuillez consulter la vidéo de présentation ci-dessous.
          </p>
          <div className="overflow-hidden rounded-2xl mb-4">
            <video 
              src="/captureONF.mp4" 
              controls 
              className="w-full h-[32rem] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* Bilan */}
        <section className="p-8 bg-[#111827] rounded-xl border border-gray-800 shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Bilan de l’expérience</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Ce projet, mené en totale autonomie, a été l’occasion de consolider mon expertise technique en développement web, notamment sur les aspects liés à la conception d’architectures logicielles, à l’intégration front-end (HTML/CSS) et au développement back-end (PHP/MySQL). 
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Travailler seul sur l’ensemble de la plateforme m’a permis de prendre des décisions structurantes, de concevoir l’interface utilisateur, puis d’assurer son implémentation sans dépendre d’un référent technique.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            J’ai également animé régulièrement des réunions d’avancement avec les parties prenantes, ce qui m’a permis de présenter les nouvelles fonctionnalités, de recueillir des retours constructifs, et d’ajuster rapidement le planning.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Enfin, piloter ces réunions et assurer la communication entre les utilisateurs finaux et l’équipe IT a été une expérience particulièrement enrichissante, me confortant dans mon projet professionnel : évoluer dans un rôle de développeur web full-stack impliqué dans toutes les phases d’un projet.
          </p>
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
