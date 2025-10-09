"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function ProjetEcolotri() {
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

      {/* CONTENU */}
      <main className="flex-grow px-6 md:px-12 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-8 text-center md:text-left animate-breathe-text">
          Projet Ecolotri — Application de Suivi des Collectes
        </h1>
        <div className="relative h-96 overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
            src="/logoEcolotri.jpg"
            alt="Logo Ecolotri"
            className="w-full h-full object-contain transition-transform duration-300"
            style={{ padding: "10px" }}
            />
        </div>
        <br />
        {/* Présentation */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">Présentation du projet</h2>
          <p className="text-gray-300 leading-relaxed text-justify mb-4">
            Le projet Ecolotri est un site web développé en binôme, durant un atelier de professionnalisation de 4 heures en première année de BTS SIO. L’objectif principal était de créer une plateforme pour le suivi et la gestion des données de pesée des déchets collectés par la société Ecolotri.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Le site propose plusieurs fonctionnalités clés pour différents types d&apos;utilisateurs :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
            <li><strong>Authentification :</strong> Connexion sécurisée pour transporteurs et administrateurs.</li>
            <li><strong>Ajout de pesée :</strong> Les transporteurs peuvent enregistrer de nouvelles données de pesée.</li>
            <li><strong>Gestion des pesées :</strong> Les administrateurs peuvent consulter, modifier ou supprimer des entrées.</li>
            <li><strong>Statistiques :</strong> Rapports : Liste des syndicats par type de déchet, total des déchets par syndicat et par type, total sur une période.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Le site distingue deux rôles principaux : Transporteurs et Administrateurs, chacun avec des droits spécifiques.
          </p>
        </section>

        {/* Mes contributions */}
        <section className="mb-12 p-6 bg-[#111827] rounded-xl border border-gray-800 shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Mes contributions au projet</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
            <li>Développement de la liste des pesées pour les administrateurs.</li>
            <li>Implémentation des fonctionnalités de modification et suppression des pesées.</li>
            <li>Création du menu statistique et des rapports associés.</li>
            <li>Développement de la fonctionnalité d&apos;ajout de nouvelles pesées.</li>
            <li>Gestion globale de la partie administrative du site.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Mon binôme s&apos;est concentré sur la base de données, le CSS et le système d&apos;authentification.
          </p>
        </section>

        {/* Aperçu du MCD */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Aperçu du Modèle Conceptuel de Données (MCD)</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Ce MCD organise les données d&apos;Ecolotri autour de trois éléments : Syndicats, Pesées et Types de Déchets. Chaque pesée est liée à un syndicat et à un type de déchet. Cela structure les informations pour suivre les collectes par syndicat et type.
          </p>
          <div className="overflow-hidden rounded-2xl mb-4">
            <img
              src="/mcd ecolotri.png"
              alt="MCD Ecolotri"
              className="w-full h-[15rem] object-cover transition-shadow duration-500 ease-in-out hover:shadow-2xl"
            />
          </div>
        </section>

        {/* Aperçu du site */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Aperçu du site Ecolotri</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Découvrez les différentes pages et fonctionnalités du site Ecolotri dans la vidéo ci-dessous.
          </p>
          <div className="overflow-hidden rounded-2xl mb-4">
            <video 
              src="/captureEcolotri.mp4" 
              controls 
              className="w-full h-[32rem] object-cover rounded-2xl shadow-lg"
            />
          </div>
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
