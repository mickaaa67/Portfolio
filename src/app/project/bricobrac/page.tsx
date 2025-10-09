"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function ProjetBricoBrac() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0c10] text-gray-100 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#0d1117] border-b border-gray-800 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-6">
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-indigo-400 transition"
          >
            Mickael Hoffer
          </Link>
          <nav className="space-x-6 text-sm">
            <Link
              href="/"
              className="text-gray-300 hover:text-indigo-400 transition"
            >
              Accueil
            </Link>
            <Link
              href="/#projects"
              className="text-gray-300 hover:text-indigo-400 transition"
            >
              Projets
            </Link>
            <Link
              href="/#contact"
              className="text-gray-300 hover:text-indigo-400 transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENU */}
      <main className="flex-grow px-6 md:px-12 py-16 max-w-5xl mx-auto">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-8 text-center md:text-left animate-breathe-text">
          Projet Brico’Brac – Site de Vente en Ligne
        </h1>

        {/* Logo du projet */}
        <div className="flex justify-center mb-12">
          <div className="w-56 h-56 bg-[#111318] rounded-2xl flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="/logoBricobrac.png"
              alt="Logo BricoBrac"
              className="object-contain w-3/4 h-3/4 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Présentation */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
            Présentation du projet
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Le projet <span className="text-white font-medium">Brico’Brac</span> est un
            site de vente en ligne pour une chaîne de magasins de bricolage familiale.
            L&apos;objectif était de créer une plateforme permettant à l&apos;entreprise
            d&apos;étendre sa présence au-delà des magasins physiques et d&apos;offrir ses
            produits à une clientèle plus large.
          </p>
        </section>

        {/* Contributions */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
            Mes contributions au projet
          </h2>
          <p className="text-gray-300 mb-4">
            En tant que membre d&apos;une équipe de trois personnes, j&apos;ai participé activement
            au développement de ce projet réalisé en une semaine dans le cadre de notre
            formation. Mes principales contributions ont concerné :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>L’implémentation du système de gestion des droits d’administrateur.</li>
            <li>
              Le développement de l’interface de liste et de gestion du catalogue des
              articles (ajout, modification, suppression).
            </li>
            <li>
              La gestion de l’authentification des utilisateurs et la connexion à la base
              de données.
            </li>
          </ul>
        </section>

        {/* MCD */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-6">
            Aperçu du Modèle Conceptuel des Données
          </h2>
          <div className="overflow-hidden rounded-2xl mb-4 transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="/CaptureBricobrac4.PNG"
              alt="MCD BricoBrac"
              className="w-full h-[35rem] object-contain bg-[#111318]"
            />
          </div>
          <p className="text-gray-300 leading-relaxed">
            La base de données structure les articles, les clients (avec leurs rôles) et
            leurs commandes. Les paniers des clients mènent à la création de commandes.
            Des utilisateurs (clients, gestionnaires, administrateurs) interagissent avec
            le système, et leurs actions sont suivies via des logs.
          </p>
        </section>

        {/* Vidéo */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-6">
            Aperçu du site
          </h2>
          <p className="text-gray-300 mb-6">
            Pour un aperçu visuel des différentes pages et fonctionnalités du site, veuillez
            consulter la vidéo de présentation ci-dessous :
          </p>

          <div className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <video
              src="/captureBricobrac.mp4"
              controls
              className="w-full rounded-2xl"
            />
          </div>
        </section>
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
