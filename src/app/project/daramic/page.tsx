"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Daramic() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
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
        {/* Image de fond ONF */}
        <div className="absolute inset-0">
          <img
            src="/picture_daramic.jpg" // logo ou image de fond
            alt="ONF"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </header>

      {/* --- CONTENU --- */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
          Stage chez Daramic – Optimisation de la Gestion des Services IT
        </h1>
        <br /><br />
        {/* Section images côte à côte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-96 overflow-hidden bg-gray-100 flex items-center justify-center group rounded-2xl shadow-lg">
            <img
              src="/logoServiceNOOOW.png"
              alt="Daramic logo ou site"
              className="w-full h-full object-contain transition-all duration-500 group-hover:brightness-110 group-hover:-translate-y-1"
              style={{ padding: "10px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="relative h-96 overflow-hidden bg-gray-100 flex items-center justify-center group rounded-2xl shadow-lg">
            <img
              src="/logoServiceNow.jpg"
              alt="ServiceNow ou tableau de bord"
              className="w-full h-full object-contain transition-all duration-500 group-hover:brightness-110 group-hover:-translate-y-1"
              style={{ padding: "10px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Présentation */}
        <section>
          <br />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Mon expérience de stage chez Daramic
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Mon premier stage en entreprise s'est déroulé pendant cinq semaines enrichissantes
            chez Daramic, une entreprise située à Sélestat. Daramic est un leader mondial dans
            la fabrication et la fourniture de séparateurs de batterie haute performance pour les
            secteurs automobile, industriel et les applications spéciales.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            L'usine de Sélestat, où j'ai effectué mon stage, joue un rôle clé dans la production
            de ces composants essentiels. J’ai intégré l’équipe IT et participé à un projet
            d’optimisation de la gestion des services informatiques via la plateforme ServiceNow.
          </p>
        </section>

        {/* ServiceNow */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Présentation de ServiceNow</h2>
          <p className="text-gray-700 leading-relaxed">
            ServiceNow est une plateforme cloud puissante conçue pour aider les entreprises à
            gérer et automatiser leurs flux de travail numériques. Principalement connue pour ses
            solutions ITSM, elle offre aussi des outils pour la gestion des services clients, des
            ressources humaines et de la sécurité.
          </p>
          <br /><br />
          <div className="overflow-hidden rounded-2xl mb-4">
            <img
              src="/Capture ServiceNow 1.png"
              alt="MCD ONF"
              className="w-full h-[38rem] object-cover transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
            />
          </div>
        </section>

        {/* Missions */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Missions principales : Analyse et Optimisation des Actifs Applicatifs
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ma mission principale a consisté à contribuer à l’amélioration de la gestion des
            actifs applicatifs de Daramic, un aspect crucial pour assurer l’efficacité et la
            fiabilité des services IT.
          </p>
          <br /><br />
          <div className="overflow-hidden rounded-2xl mb-4">
            <img
              src="/Capture ServiceNow 2.png"
              alt="MCD ONF"
              className="w-full h-[38rem] object-cover transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
            />
          </div>
        </section>

        {/* SquaredUp */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Aperçu de SquaredUp</h2>
          <p className="text-gray-700 leading-relaxed">
            Ma découverte et mon utilisation de l'outil de supervision SquaredUp ont eu lieu
            durant la dernière semaine de mon stage. Mon expérience fut brève, mais elle m’a
            permis d’entrevoir son potentiel pour la supervision SCOM et la visualisation des
            services IT.
          </p>
          <br /><br />
          <div className="overflow-hidden rounded-2xl mb-4">
            <img
              src="/Capture ServiceNow 3.png"
              alt="MCD ONF"
              className="w-full h-[42.5rem] object-cover transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
            />
          </div>
        </section>
        <br /><br />
        {/* Infos complémentaires */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Informations complémentaires
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Pour des raisons de confidentialité, les images de cette page sont des illustrations
            génériques. Ce stage m’a permis de renforcer mes compétences en analyse technique,
            en documentation, et en gestion d’actifs IT dans un contexte industriel.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            J’ai été encadré par Monsieur <strong>Steve Fuchs</strong>, et cette expérience m’a
            aidé à mieux comprendre l’importance d’une gestion précise des actifs IT et des outils
            de supervision comme ServiceNow et SquaredUp.
          </p>
        </section>
      </main>
      <br /><br />
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
