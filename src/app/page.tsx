"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ContactForm from './ContactForm';
import React, { useState } from 'react';



export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 550,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <main className="bg-gray-100">

      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
      <h1 className="text-2xl font-bold text-gray-800">Mickael Hoffer</h1>
      <nav className="space-x-6">
        <a href="#about" className="text-gray-600 hover:text-gray-800 font-medium">Accueil</a>
        <a href="#services" className="text-gray-600 hover:text-gray-800 font-medium">Projets</a>
        <a href="#lancement" className="text-gray-600 hover:text-gray-800 font-medium">Expérience</a>
        <a href="#lancement" className="text-gray-600 hover:text-gray-800 font-medium">Compétences</a>
        <a href="#lancement" className="text-gray-600 hover:text-gray-800 font-medium">Formation</a>
        <a href="#lancement" className="text-gray-600 hover:text-gray-800 font-medium">Contact</a>
      </nav>
    </div>
  </header>

  {/* ================== HERO EN HAUT ================== */}
  <header className="relative w-full min-h-screen flex flex-col justify-center px-8 bg-gray-100">
  {/* Image de fond */}
  <div className="absolute inset-0">
    <img
      src="/picture_presentation.jpg" // <-- ton image de fond ici
      alt="Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30"></div> {/* overlay léger */}
  </div>

  {/* Contenu hero */}
  <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
    
    {/* Texte à gauche */}
    <div className="md:w-3/5 md:mr-12" data-aos="fade-right">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        Mickael Hoffer
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-8">
        Développeur Web Full Stack Junior
      </h2>
      <p className="mt-4 text-lg text-gray-200 leading-relaxed text-justify">
        Passionné par le développement web, j’aime transformer des idées en
        applications modernes et performantes. Grâce à mon parcours en BTS SIO
        et à mes expériences en projets concrets, je conçois des solutions
        adaptées, élégantes et évolutives. J’accorde une attention particulière
        à la qualité du code et à l’expérience utilisateur.
      </p>

      {/* Boutons */}
      <div className="mt-8 flex justify-center md:justify-start gap-6">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 font-semibold"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition-transform transform hover:scale-105 font-semibold"
        >
          Me contacter
        </a>
      </div>
    </div>

    {/* Image à droite */}
    <div className="mt-4 md:mt-0 md:w-2/5 flex justify-center md:ml-50" data-aos="fade-left">
      <div className="relative w-full max-w-sm overflow-hidden rounded-xl shadow-lg group">
        {/* Overlay dégradé */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent z-10"></div>

        {/* Image */}
        <img
          src="/about_me.webp" // <-- image originale à droite
          alt="Jeune développeur passionné travaillant sur un ordinateur"
          className="w-full rounded-xl group-hover:scale-110 transition-transform duration-300"
        />

        {/* Contenu par-dessus (optionnel) */}
        <div className="absolute inset-0 flex items-center justify-center p-4 z-20"></div>
      </div>
    </div>
  </div>
</header>


      {/* ================== Services Section ================== */}
      <section id="A propos" className="py-20 bg-white w-full px-8 mt-12">
        <div className="text-center max-w-4xl mx-auto mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-gray-800">A propos de moi</h2>
          <p className="mt-4 text-lg text-gray-600">
            En quelques mots
          </p>
          <br /><br />
          <p className="mt-4 text-lg text-gray-600">
            Jeune développeur de 22 ans, passionné par le développement web, titulaire d'un BTS Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers qui m'a permis de structuré mes compétences.
          </p>
          <p className="mt-4 text-lg text-gray-600">
          Fort de plusieurs réalisations qui témoignent de ma motivation, je recherche activement un poste de développeur web en alternance pour octobre 2025 et pour une durée de 1 an, dans le cadre de ma préparation à la Licence professionnelle Développement Web Communication et Apprentissages.
          </p>
        </div>

        {/* Section Site Web */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2 flex justify-center" data-aos="fade-right">
            <div className="relative overflow-hidden rounded-xl shadow-xl group transform transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent z-10"></div>
              <img
                src="/responsive_picture.jpg"
                alt="Image de démonstration d'un site web réactif sur différents appareils"
                className="w-full rounded-xl"
              />
            </div>
          </div>

          <div className="md:w-1/2 text-center md:text-left" data-aos="fade-left">
            <h3 className="text-3xl font-bold text-gray-800">Sites Web</h3>
            <p className="mt-2 text-xl text-gray-600">
              Créez une présence en ligne impactante avec des sites web modernes et performants.
            </p>
            <div className="mt-8">
              <h4 className="text-2xl font-semibold text-gray-800">Sites Vitrines</h4>
              <p className="mt-4 text-gray-700">
                Un site vitrine est bien plus qu'une simple page web ; c'est votre carte de visite numérique. 
                Pour votre entreprise, il représente l'opportunité de présenter vos produits ou services, 
                de partager votre histoire, de bâtir la confiance avec vos clients et d'être visible 24h/24. 
                C'est l'outil essentiel pour attirer de nouveaux prospects et consolider votre image de marque.
              </p>
            </div>
          </div>
        </div>

        {/* Section Site responsive */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
            <h3 className="text-3xl font-bold text-gray-800">Site responsive</h3>
            <p className="mt-2 text-xl text-gray-600">
              Application mobile responsive design, lisible sur tous les appareils : PC, Android, iOS, tablette.
            </p>
            <div className="mt-6 space-y-4">
              <div data-aos="fade-up" data-aos-delay="200">
                <h5 className="text-xl font-bold text-gray-800">Applications natives</h5>
                <p className="mt-1 text-gray-700">
                  Développement natif pour des performances optimales.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <h5 className="text-xl font-bold text-gray-800">Sécurité Avancée</h5>
                <p className="mt-1 text-gray-700">
                  Protection des données et authentification robuste.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <h5 className="text-xl font-bold text-gray-800">Engagement Utilisateur</h5>
                <p className="mt-1 text-gray-700">
                  Notifications push et fonctionnalités interactives.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
            <div className="relative overflow-hidden rounded-xl shadow-xl group transform transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent z-10"></div>
              <img
                src="/mobile_software.jpg"
                alt="Image de démonstration d'une application mobile"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================== Lancer votre projet ================== */}
      <section id="lancement" className="py-20 bg-white w-full px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800" data-aos="fade-up" data-aos-delay="100">
          Prêt à lancer votre projet ?
        </h2>
        <p className="mt-2 text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">
          Découvrez nos tarifs ou contactez-nous pour en discuter
        </p>
        <div className="mt-12 md:mt-16 flex justify-center gap-8" data-aos="fade-up" data-aos-delay="300">
          <Link href="/tarif" className="px-8 py-5 bg-blue-600 text-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-700 font-semibold">
            Demander un Devis
          </Link>
          <Link href="#btn-contact" className="px-8 py-5 bg-gray-800 text-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-900 font-semibold">
            Nous contacter
          </Link>
        </div>
        <div className="flex justify-center mt-12" data-aos="fade-right">
          <div className="relative w-full max-w-[1100px] overflow-hidden rounded-xl shadow-xl group transform transition-transform duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent z-10"></div>
            <img
              src="/project_digitales.jpg"
              alt="Image de démonstration d'un site web réactif sur différents appareils"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ================== Mes Projets ================== */}
      <section id="projects" className="py-20 bg-white w-full px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
          Mes Projets
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Projet ONF */}
          <div
            className="bg-white rounded-xl shadow-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src="/logoONF.jpg"
                alt="Site e-commerce ONF"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Site e-commerce pour l'ONF</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Site de vente de vêtements et d'équipements de protection individuelle (EPI).
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["PHP", "MySQL", "JavaScript", "Bootstrap", "GitHub"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                Voir le projet
              </button>
            </div>
          </div>

          {/* Projet Jung Logistique */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105" data-aos="fade-up">
            <div className="relative h-48 overflow-hidden">
              <img src="/logoJungLogistique.jpg" alt="Optimisation back-end Jung Logistique" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Optimisation back-end chez Jung Logistique</h3>
              <p className="mt-2 text-gray-600 text-sm">Optimisation de l'architecture back-end/front-end de l'extranet de l'entreprise.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["C#", "JavaScript", "GitHub"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full">{tech}</span>
                ))}
              </div>
              <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">Voir le projet</button>
            </div>
          </div>

          {/* Projet Écolotri */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105" data-aos="fade-up">
            <div className="relative h-48 overflow-hidden">
              <img src="/logoEcolotri.jpg" alt="Écolotri" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Écolotri</h3>
              <p className="mt-2 text-gray-600 text-sm">Site web pour la gestion et le suivi des pesées de déchets collectés.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["HTML", "CSS", "PHP", "MySQL", "GitHub"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full">{tech}</span>
                ))}
              </div>
              <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">Voir le projet</button>
            </div>
          </div>

          {/* Projet ServiceNow */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105" data-aos="fade-up">
            <div className="relative h-48 overflow-hidden">
              <img src="/logoServiceNOOOW.png" alt="ServiceNow" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">ServiceNow</h3>
              <p className="mt-2 text-gray-600 text-sm">Optimisation de la gestion des actifs applicatifs et découverte de la supervision IT (SquaredUp, SCOM).</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["ServiceNow", "SquaredUp", "SCOM", "Excel"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full">{tech}</span>
                ))}
              </div>
              <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">Voir le projet</button>
            </div>
          </div>

          {/* Projet BricoBrac */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105" data-aos="fade-up">
            <div className="relative h-48 overflow-hidden">
              <img src="/logoBricoBrac.png" alt="BricoBrac" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">BricoBrac</h3>
              <p className="mt-2 text-gray-600 text-sm">Site web pour une chaîne de magasins de bricolage familial.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["HTML", "CSS", "PHP", "MySQL", "JavaScript", "Trello", "GitHub"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full">{tech}</span>
                ))}
              </div>
              <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">Voir le projet</button>
            </div>
          </div>

          {/* Projet Formatech */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105" data-aos="fade-up">
            <div className="relative h-48 overflow-hidden">
              <img src="/LogoFormaTech.png" alt="Formatech" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Formatech</h3>
              <p className="mt-2 text-gray-600 text-sm">Site web pour la gestion des formations, modules et cours au sein d'un organisme de formation.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["HTML", "CSS", "PHP", "MySQL", "JavaScript", "Trello", "GitHub"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full">{tech}</span>
                ))}
              </div>
              <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">Voir le projet</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================== Mon Expérience ================== */}
      <section id="experience" className="py-20 bg-gray-50 w-full px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
          Mon parcours
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col space-y-12">

          {/* ================== EXPÉRIENCES ================== */}
          <h3 className="text-3xl font-bold text-gray-800 mb-6" data-aos="fade-up">Expériences Professionnelles</h3>

          {/* Stage S2i Evolution */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8" data-aos="fade-up">
            <div className="md:w-1/3 flex flex-col items-start md:items-end space-y-3 order-2 md:order-1">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">Stage Informatique</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">S2i Evolution</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">1 mois</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">Octobre - Novembre 2024</span>
            </div>
            <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-6 order-1 md:order-2">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Création de sites web</h4>
              <p className="text-gray-600 mb-4">Développement et mise en ligne de sites web pour différents clients, participation à toutes les étapes de conception.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Analyse des besoins clients et conception fonctionnelle.</li>
                <li>Développement front-end et intégration responsive.</li>
                <li>Maintenance et optimisation des sites existants.</li>
              </ul>
            </div>
          </div>

          {/* Assistant Projet Jung Logistique */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8" data-aos="fade-up">
            <div className="md:w-1/3 flex flex-col items-start md:items-end space-y-3 order-2 md:order-1">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">Assistant Projet en Alternance</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">Jung Logistique</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">1 an</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">Septembre 2023 - Septembre 2024</span>
            </div>
            <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-6 order-1 md:order-2">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Optimisation back-end / Front-end</h4>
              <p className="text-gray-600 mb-4">Projet d'optimisation de l'architecture back-end/front-end de l'extranet de l'entreprise.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Refonte des processus back-end pour améliorer la performance.</li>
                <li>Collaboration avec l’équipe front-end pour la compatibilité des modules.</li>
                <li>Gestion des versions et suivi sur GitHub.</li>
              </ul>
            </div>
          </div>

          {/* Stage L'ONF */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8" data-aos="fade-up">
            <div className="md:w-1/3 flex flex-col items-start md:items-end space-y-3 order-2 md:order-1">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">Stage Informatique</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">L'ONF</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">3 mois</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">Février - Avril 2023</span>
            </div>
            <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-6 order-1 md:order-2">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Gestion des forêts</h4>
              <p className="text-gray-600 mb-4">Participation à la digitalisation de la gestion forestière et au suivi des projets internes.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Création et maintenance de bases de données.</li>
                <li>Suivi et analyse des pesées et stocks forestiers.</li>
                <li>Développement de scripts pour automatiser certaines tâches.</li>
              </ul>
            </div>
          </div>

          {/* Stage Daramic */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8" data-aos="fade-up">
            <div className="md:w-1/3 flex flex-col items-start md:items-end space-y-3 order-2 md:order-1">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">Stage Informatique</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">Daramic</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">3 mois</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">Mai - Juillet 2022</span>
            </div>
            <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-6 order-1 md:order-2">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Optimisation gestion actifs applicatifs</h4>
              <p className="text-gray-600 mb-4">Découverte de la supervision IT et contribution à l'optimisation des outils internes.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Analyse des flux existants et amélioration sur ServiceNow.</li>
                <li>Découverte des outils de supervision IT : SquaredUp, SCOM.</li>
                <li>Création de rapports automatisés et centralisation des informations.</li>
              </ul>
            </div>
          </div>

          {/* ================== FORMATIONS ================== */}
          <h3 className="text-3xl font-bold text-gray-800 mt-16 mb-6" data-aos="fade-up">Formations</h3>

          {/* Formation BTS Alternance */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8" data-aos="fade-up">
            <div className="md:w-1/3 flex flex-col items-start md:items-end space-y-3 order-2 md:order-1">
              <span className="px-4 py-2 bg-green-600 text-white rounded-full font-semibold">BTS SIO - Alternance</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">IRIS MediaSchool, Strasbourg</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">Septembre 2023 - Juillet 2024</span>
            </div>
            <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-6 order-1 md:order-2">
              <p className="text-gray-600 mb-4">Brevet de Technicien Supérieur Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers en Alternance.</p>
            </div>
          </div>

          {/* Formation BTS Initial */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8" data-aos="fade-up">
            <div className="md:w-1/3 flex flex-col items-start md:items-end space-y-3 order-2 md:order-1">
              <span className="px-4 py-2 bg-green-600 text-white rounded-full font-semibold">BTS SIO - Initial</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">Lycée Camille Sée, Colmar</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">Septembre 2021 - Juillet 2023</span>
            </div>
            <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-6 order-1 md:order-2">
              <p className="text-gray-600 mb-4">Brevet de Technicien Supérieur Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers en Initial.</p>
            </div>
          </div>

          {/* Formation Bac Technologique */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8" data-aos="fade-up">
            <div className="md:w-1/3 flex flex-col items-start md:items-end space-y-3 order-2 md:order-1">
              <span className="px-4 py-2 bg-green-600 text-white rounded-full font-semibold">Baccalauréat Technologique</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">Lycée Jean-Baptiste Schwilgué, Sélestat</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">Septembre 2018 - Juillet 2021</span>
            </div>
            <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-6 order-1 md:order-2">
              <p className="text-gray-600 mb-4">Sciences et Technologies de l'Industrie et du Développement Durable option Systèmes d'Information et Numérique.</p>
            </div>
          </div>

        </div>
      </section>
      {/* ================== Mes compétences ================== */}
      <section id="competences" className="py-20 bg-white w-full px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2" data-aos="fade-up">
          Mes Compétences Techniques
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10" data-aos="fade-up">
          Technologies et outils que j'utilise
        </p>

        {/* 1. FRONT-END */}
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-3xl font-semibold text-gray-700 border-l-4 border-purple-500 pl-4 mb-8" data-aos="fade-right">
            Front-End 
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            
            {/* HTML5 */}
            <div className="bg-gradient-to-tr from-purple-700 to-purple-900 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/html5.svg" alt="HTML5" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">HTML5</h3>
              <p className="text-purple-200 text-sm mt-1">Avancé</p>
            </div>

            {/* CSS3 */}
            <div className="bg-gradient-to-tr from-blue-700 to-blue-900 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/css3.png" alt="CSS3" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">CSS3</h3>
              <p className="text-blue-200 text-sm mt-1">Avancé</p>
            </div>

            {/* JavaScript */}
            <div className="bg-gradient-to-tr from-yellow-500 to-yellow-700 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/javascript.png" alt="JavaScript" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">JavaScript</h3>
              <p className="text-yellow-200 text-sm mt-1">Solide</p>
            </div>
            
          </div>
        </div>


        {/* 2. BACK-END & Langages SGBD */}
        <div className="max-w-6xl mx-auto mb-12 pt-8">
          <h3 className="text-3xl font-semibold text-gray-700 border-l-4 border-green-500 pl-4 mb-8" data-aos="fade-right" data-aos-delay="300">
            Back-End & Langages SGBD
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            
            {/* PHP */}
            <div className="bg-gradient-to-tr from-indigo-500 to-indigo-700 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="400">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/php.png" alt="PHP" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">PHP</h3>
              <p className="text-indigo-200 text-sm mt-1">Solide</p>
            </div>

            {/* C# (Nouvelle couleur) */}
            <div className="bg-gradient-to-tr from-fuchsia-700 to-fuchsia-900 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="450">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/csharp.png" alt="C#" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">C#</h3>
              <p className="text-fuchsia-200 text-sm mt-1">Pratique</p>
            </div>

            {/* Java (Nouvelle couleur) */}
            <div className="bg-gradient-to-tr from-orange-600 to-orange-800 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="500">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/java.png" alt="Java" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">Java</h3>
              <p className="text-orange-200 text-sm mt-1">Pratique</p>
            </div>

            {/* Python (Nouvelle couleur) */}
            <div className="bg-gradient-to-tr from-yellow-500 to-blue-700 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="550">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/python.png" alt="Python" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">Python</h3>
              <p className="text-yellow-200 text-sm mt-1">Pratique</p>
            </div>

            {/* SQL (SGBD Language) */}
            <div className="bg-gradient-to-tr from-red-600 to-red-800 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="600">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/sql.png" alt="SQL" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">SQL</h3>
              <p className="text-red-200 text-sm mt-1">Avancé</p>
            </div>

          </div>
        </div>


        {/* 3. FRAMEWORKS */}
        <div className="max-w-6xl mx-auto mb-12 pt-8">
          <h3 className="text-3xl font-semibold text-gray-700 border-l-4 border-red-500 pl-4 mb-8" data-aos="fade-right" data-aos-delay="650">
            Frameworks
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            
            {/* React.js (Framework) */}
            <div className="bg-gradient-to-tr from-cyan-500 to-blue-700 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="700">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/reactJS.png" alt="React" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">React.js</h3>
              <p className="text-cyan-200 text-sm mt-1">Solide</p>
            </div>

            {/* Bootstrap (Nouvelle couleur) */}
            <div className="bg-gradient-to-tr from-violet-700 to-violet-900 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="750">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/bootstrap.png" alt="Bootstrap" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">Bootstrap</h3>
              <p className="text-violet-200 text-sm mt-1">Solide</p>
            </div>

            {/* .NET (Nouvelle couleur) */}
            <div className="bg-gradient-to-tr from-teal-500 to-green-700 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="800">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/net.png" alt=".NET" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">.NET</h3>
              <p className="text-teal-200 text-sm mt-1">Pratique</p>
            </div>

            {/* Laravel (Nouvelle couleur) */}
            <div className="bg-gradient-to-tr from-red-500 to-orange-700 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="850">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/laravel.png" alt="Laravel" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">Laravel</h3>
              <p className="text-red-200 text-sm mt-1">Pratique</p>
            </div>
          </div>
        </div>

        
        {/* 4. OUTILS & ENVIRONNEMENT (Pas de changement de couleur dans cette section) */}
        <div className="max-w-6xl mx-auto pt-8">
          <h3 className="text-3xl font-semibold text-gray-700 border-l-4 border-cyan-500 pl-4 mb-8" data-aos="fade-right" data-aos-delay="900">
            Outils & Environnement
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            
            {/* Git */}
            <div className="bg-gradient-to-tr from-gray-700 to-gray-900 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="1000">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/git.png" alt="Git/GitHub" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">Git</h3>
              <p className="text-gray-300 text-sm mt-1">Versionning</p>
            </div>

            {/* GitHub */}
            <div className="bg-gradient-to-tr from-gray-700 to-gray-900 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="1100">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/github.png" alt="Git/GitHub" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">GitHub</h3>
              <p className="text-gray-300 text-sm mt-1">Versionning</p>
            </div>

            {/* Visual Studio Code */}
            <div className="bg-gradient-to-tr from-blue-600 to-blue-800 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="1200">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/vscode.png" alt="VS Code" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">VS Code</h3>
              <p className="text-blue-300 text-sm mt-1">IDE</p>
            </div>

            {/* Yarn / npm */}
            <div className="bg-gradient-to-tr from-red-500 to-red-700 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="1300">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/npm.png" alt="Yarn/npm" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">npm</h3>
              <p className="text-red-200 text-sm mt-1">Gestion Paquets</p>
            </div>
            
            {/* SQL Server */}
            <div className="bg-gradient-to-tr from-orange-600 to-orange-800 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="1400">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/sqlserver.png" alt="SQL Server" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">SQL Server</h3>
              <p className="text-orange-200 text-sm mt-1">Outil SGBD</p>
            </div>

            {/* Docker */}
            <div className="bg-gradient-to-tr from-sky-600 to-sky-800 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="1500">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/docker.png" alt="Docker" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">Docker</h3>
              <p className="text-sky-200 text-sm mt-1">Conteneurisation</p>
            </div>
            
            {/* Trello */}
            <div className="bg-gradient-to-tr from-teal-500 to-teal-700 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="1600">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/trello.png" alt="Trello" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">Trello</h3>
              <p className="text-teal-200 text-sm mt-1">Gestion Projet</p>
            </div>

            {/* Wordpress */}
            <div className="bg-gradient-to-tr from-yellow-600 to-yellow-800 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="1700">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/wordpress.png" alt="Wordpress" className="w-12 h-12" />
              </div>
              <h3 className="text-white font-bold text-lg">Wordpress</h3>
              <p className="text-yellow-200 text-sm mt-1">CMS</p>
            </div>
            
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-gradient-to-br from-[#0a0f1c] via-[#1a103d] to-[#2a1a4a]">  
        {/* En-tête de la section */}
        <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 text-transparent bg-clip-text inline-block">Me Contacter</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Vous avez un projet en tête ou vous souhaitez simplement discuter ?
            </p>
        </div>
        <br /><br />

        {/* Contenu principal (Coordonnées à gauche, Formulaire à droite) */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
            
            {/* Infos de contact (Gauche) - Style d'origine conservé */}
            <div className="bg-[#141f3a] rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">Informations de contact</h3>
                <ul className="space-y-5">
                    {/* Email */}
                    <li>
                        <a
                            href="mailto:mickael.hoffer@gmail.com"
                            className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-[#1f2a4d] hover:scale-105"
                        >
                            <span className="bg-blue-600 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916v-.243" /></svg>
                            </span>
                            <div>
                                <p className="font-semibold">Email</p>
                                <p className="text-gray-300 text-sm">mickael.hoffer@gmail.com</p>
                            </div>
                        </a>
                    </li>

                    {/* Localisation */}
                    <li>
                        <a
                            href="https://www.google.com/maps/place/Sélestat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-[#1f2a4d] hover:scale-105"
                        >
                            <span className="bg-green-600 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                            </span>
                            <div>
                                <p className="font-semibold">Localisation</p>
                                <p className="text-gray-300 text-sm">Thanvillé, Grand-Est, France</p>
                            </div>
                        </a>
                    </li>

                    {/* Téléphone */}
                    <li>
                        <a
                            href="tel:+33781270680"
                            className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-[#1f2a4d] hover:scale-105"
                        >
                            <span className="bg-orange-600 p-2 rounded-full shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.58.57 1 1 0 011 1v3.5a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.21 1.11l-2.24 2.1z"/></svg>
                            </span>
                            <div>
                                <p className="font-semibold">Téléphone</p>
                                <p className="text-gray-300 text-sm">+33 07 66 19 16 33</p>
                            </div>
                        </a>
                    </li>

                    {/* CV */}
                    <li>
                        <a
                            href="/cv.pdf"
                            download
                            className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-[#1f2a4d] hover:scale-105"
                        >
                            <span className="bg-purple-600 p-2 rounded-full">📄</span>
                            <div>
                                <p className="font-semibold">CV</p>
                                <p className="text-gray-300 text-sm">Télécharger mon CV</p>
                            </div>
                        </a>
                    </li>
                </ul>
                
                {/* Réseaux sociaux */}
                <div className="mt-6">
                    <p className="font-semibold text-lg mb-3 text-white">Réseaux sociaux</p>
                    <div className="flex gap-6">
                        
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/mickaelhoffer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-blue-700 hover:bg-blue-800 transition-all duration-300 hover:scale-110"
                            title="LinkedIn"
                        >
                            <FaLinkedin size={24} /> {/* Utilisation de FaLinkedin pour plus de clarté */}
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/mickaelhoffer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[#1f2a4d] hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                            title="GitHub"
                        >
                            <FaGithub size={24} /> {/* Utilisation de FaGithub pour plus de clarté */}
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Formulaire (Droite) - Intégration du composant fonctionnel */}
            <div>
                <ContactForm /> 
            </div>
        </div>
      </section>                
      {/* ================== Footer ================== */}
      <section>
        <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Bloc gauche : présentation */}
            <div>
              <h2 className="text-2xl font-bold text-white">Mickael Hoffer</h2>
              <p className="mt-2 text-gray-400 text-sm">
                Développeur Web passionné par la création d’expériences numériques
                modernes, intuitives et performantes.
              </p>
            </div>

            {/* Bloc centre : navigation */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-white transition">Accueil</a></li>
                <li><a href="#projects" className="hover:text-white transition">Projets</a></li>
                <li><a href="#experience" className="hover:text-white transition">Expérience</a></li>
                <li><a href="#skills" className="hover:text-white transition">Compétences</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Bloc droit : réseaux sociaux */}
            <div className="flex flex-col items-center md:items-end">
              <h3 className="text-lg font-semibold text-white mb-3">Réseaux sociaux</h3>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/mickaelhoffer"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-blue-500 transform hover:scale-125 transition"
                >
                  <FaLinkedin color="w-7 h-7" />
                </a>
                <a
                  href="https://github.com/mickaelhoffer"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transform hover:scale-125 transition"
                >
                  <FaGithub color="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Ligne séparation + copyright */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Mickael Hoffer — Tous droits réservés.
          </div>
        </footer>
      </section>
    </main>
  );
}
