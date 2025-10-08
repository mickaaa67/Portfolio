"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function ProjetFormatech() {
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
          Projet FormaTech – Application Web de Gestion de Formations
        </h1>

        {/* Logo du projet */}
        <div className="flex justify-center mb-12">
          <div className="w-56 h-56 bg-[#111318] rounded-2xl flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="/LogoFormaTech.png"
              alt="Logo FormaTech"
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
            Le projet <span className="text-white font-medium">FormaTech</span> est une
            application web conçue pour la gestion complète des formations, des modules et
            des cours au sein d’un organisme de formation. L’objectif principal était de
            simplifier et d’optimiser l’administration des différents aspects liés aux
            formations.
          </p>
        </section>

        {/* Contributions */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
            Mes contributions au projet
          </h2>
          <p className="text-gray-300 mb-4">
            En tant que membre d’une équipe de deux personnes, j’ai activement participé au
            développement de cette application web réalisée en une semaine dans le cadre de
            notre formation. Mes principales contributions ont concerné :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              La gestion complète (création, modification, suppression/ajout) des
              utilisateurs, formations, modules et intervenants, incluant la conception
              initiale de la base de données.
            </li>
            <li>
              La création de la base de données nécessaire au fonctionnement de
              l’application, en suivant le Modèle Conceptuel de Données (MCD) préétabli.
            </li>
            <li>
              L’insertion des valeurs initiales dans les différentes tables pour
              initialiser l’application.
            </li>
            <li>
              L’utilisation d’outils collaboratifs comme Trello et GitHub pour la gestion
              du projet, simulant un environnement de travail professionnel.
            </li>
          </ul>
        </section>

        {/* Image principale */}
        <section className="mb-10">
          <div className="overflow-hidden rounded-2xl mb-6 transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="/trelloFormatech.png"
              alt="Application FormaTech"
              className="w-full h-[35rem] object-contain bg-[#111318]"
            />
          </div>
        </section>

        {/* Diagramme de classe */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-6">
            Aperçu du Diagramme de Classe
          </h2>
          <div className="overflow-hidden rounded-2xl mb-4 transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="/diagrammeFormaTech.PNG"
              alt="Diagramme de Classe FormaTech"
              className="w-full h-[35rem] object-contain bg-[#111318]"
            />
          </div>
          <p className="text-gray-300 leading-relaxed">
            Ce diagramme de classes représente un système de gestion de formations. Il
            distingue plusieurs entités clés : les Employés gèrent les Étudiants, les
            Intervenants proposent des Modules qui composent des Formations. Les Sessions
            sont des instances de ces modules qui se déroulent dans des Salles et sont
            suivies par des Étudiants regroupés en Promotions. Les classes “Gestion…”
            indiquent les opérations possibles sur ces entités.
          </p>
        </section>

        {/* Vidéo */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-6">
            Aperçu de l’application
          </h2>
          <p className="text-gray-300 mb-6">
            Pour un aperçu visuel des différentes fonctionnalités de gestion auxquelles
            j’ai contribué au sein de l’application web FormaTech, veuillez consulter la
            vidéo de présentation ci-dessous :
          </p>

          <div className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <video
              src="/captureFormaTech.mp4"
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
