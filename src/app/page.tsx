"use client"; 
import React, { useState, useEffect } from "react"; 
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ContactForm from './ContactForm';

export default function Home() {
  useEffect(() => {
    // Initialisation AOS restaurée avec vos paramètres
    AOS.init({
      offset: 200,
      duration: 550,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

// Définition du composant TimelineItem (La logique reste la même pour la couleur et le style)
interface TimelineItemProps {
  title: React.ReactNode;
  date: string;
  description: React.ReactNode;
  details: string[];
  color: 'purple' | 'green';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, description, details, color }) => {
  // Classes dynamiques pour la couleur
  const dotColorClass = color === 'purple' ? 'bg-purple-500 border-purple-800' : 'bg-green-500 border-green-800';
  const dateBgColorClass = color === 'purple' ? 'bg-purple-600' : 'bg-green-600';

  // Alignement responsive : la carte garde un décalage sur md (pour la timeline)
  const cardMarginClass = 'ml-0 md:ml-16';
  const dotPositionClass = 'left-1/2 -ml-3 md:left-6';

  return (
    <div className="relative flex items-start w-full" data-aos="fade-up">
      {/* Point centré sur la ligne */}
      <div
        className={`absolute ${dotPositionClass} top-0 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 ${dotColorClass}`}
      ></div>

      {/* Carte --- on met 'relative' ici pour que la date absolute soit positionnée par rapport à la carte */}
      <div
        className={`w-full ${cardMarginClass} relative bg-white/10 backdrop-blur-sm text-white rounded-xl p-6 shadow-md transition-transform transform hover:scale-[1.02] hover:shadow-2xl duration-300`}
      >
        {/* En-tête (title + date). La date devient absolute sur md+ pour rester en haut à droite */}
        <div className="mb-3">
          <h3 className="text-xl font-bold mb-2 md:mb-0 pr-0 md:pr-28">{title}</h3>

          {/* Date : statique sur mobile, absolute en md+ */}
          <span
            className={`inline-block px-4 py-1 text-white text-sm rounded-full shadow-md font-semibold ${dateBgColorClass}
                        md:absolute md:top-4 md:right-4`}
            // md:top-4/md:right-4 -> ajuste ici si tu veux remonter/descendre ou décaler horizontalement
          >
            {date}
          </span>
        </div>

        {/* description */}
        <p className="text-gray-200 mb-3">{description}</p>

        {/* détails : list-disc avec padding-left pour hanging indent propre */}
        {details && details.length > 0 && (
          <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
            {details.map((detail, index) => (
              <li key={index} className="whitespace-pre-line">{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

  function onNavigate(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <main className="bg-gray-100 ">

      <header 
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-black/30 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          
          {/* Nom/Logo - Le texte est BLANC pour contraster avec le fond sombre */}
          <h1 className="text-2xl font-bold text-white tracking-wider hover:text-indigo-400 transition duration-300">
            Mickael Hoffer
          </h1>
          
          {/* Navigation (Masquée sur Mobile, Visible sur MD) */}
          <nav className="hidden md:flex space-x-8">
            {/* ⚠️ CORRECTION DES LIENS (href) APPLIQUÉE ICI */}
            <a href="#about" className="text-gray-200 hover:text-indigo-400 font-medium transition duration-300">
              Accueil
            </a>
            <a href="#about" className="text-gray-200 hover:text-indigo-400 font-medium transition duration-300">
              À propos
            </a>
            <a href="#projects" className="text-gray-200 hover:text-indigo-400 font-medium transition duration-300">
              Projets
            </a>
            <a href="#parcours" className="text-gray-200 hover:text-indigo-400 font-medium transition duration-300">
              Parcours
            </a>
            <a href="#competences" className="text-gray-200 hover:text-indigo-400 font-medium transition duration-300">
              Compétences
            </a>
            {/* Bouton de contact mis en évidence */}
            <a 
              href="#contact" 
              className="text-white bg-indigo-600 px-3 py-1 rounded-full text-sm font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg"
            >
              Contact
            </a>
          </nav>

          {/* Icône de Menu (Pour Mobile) - Vous devrez implémenter la logique d&apos;ouverture/fermeture d&apos;un menu latéral ou modal pour cela */}
          {/* <div className="md:hidden">
            <button className="text-white text-2xl">
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">...</svg>
            </button>
          </div> */}
        </div>
      </header>

      {/* ================== HERO EN HAUT ================== */}
      <header className="relative w-full min-h-screen flex flex-col justify-center px-8 bg-gray-100">
        {/* img de fond */}
        <div className="absolute inset-0">
          <img
            src="/picture_presentation.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Contenu hero */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
          
          {/* Texte à gauche */}
          <div className="md:w-3/5 md:mr-12 animate-breathe-text" data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Mickael Hoffer
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-300 mb-8 drop-shadow-md">
              Développeur Web
            </h2>

            {/* CORRECTION DES ESPACES ET CONFIRMATION DE LA POLICE ICI */}
            <p className="mt-4 text-lg text-gray-100 leading-relaxed text-justify tracking-wide">
              Passionné par le développement web, j’aime transformer des idées en applications modernes et performantes. Grâce à mon parcours et à mes expériences en projets concrets, je conçois des solutions adaptées, élégantes et évolutives. J’accorde une attention particulière à la qualité du code et à l’expérience utilisateur.
            </p>

            {/* Boutons */}
            <div className="mt-8 flex justify-center md:justify-start gap-6">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105 font-semibold animate-pulse-button"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-slate-800 text-white rounded-lg shadow-md hover:bg-slate-900 transition-transform transform hover:scale-105 font-semibold animate-pulse-button"
              >
                Me contacter
              </a>
            </div>
          </div>


          {/* img à droite */}
          <div className="mt-4 md:mt-0 md:w-2/5 flex justify-center md:ml-50 animate-float" data-aos="fade-left">
            <div className="relative w-full max-w-sm overflow-hidden rounded-xl shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent z-10"></div>
              <img
                src="/about_me.webp"
                alt="Jeune développeur passionné travaillant sur un ordinateur"
                className="w-full rounded-xl group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <div className="flex justify-center space-x-4">
                  <a href="https://www.linkedin.com/in/mickael-hoffer/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition transform hover:scale-110">
                    <FaLinkedin size={30} />
                  </a>
                  <a href="https://github.com/mickaaa67" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition transform hover:scale-110">
                    <FaGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <br /><br /><br /><br /><br />
      {/* ================== Services Section ================== */}
      <section id="about" className="relative py-16 bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          {/* Titre avec effet respirant */}
          <h2
            className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-8 animate-breathe"
          >
            À propos de moi
          </h2>

          {/* Contenu */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transition-transform duration-300 animate-breathe-card">
            <p className="text-lg leading-relaxed mb-4">
              Jeune développeur de 22 ans, passionné par le développement web, 
              titulaire d’un BTS Services Informatiques aux Organisations option 
              Solutions Logicielles et Applications Métiers qui m’a permis de 
              structurer mes compétences.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Fort de plusieurs réalisations qui témoignent de ma motivation et de mes compétences techniques, 
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-semibold"> je recherche activement un poste de Développeur Web (CDD ou CDI)</span>
              , afin de mettre en pratique et d&apos;enrichir les acquis de ma Licence Professionnelle Développement Web, Communication et Apprentissages. Disponible immédiatement et opérationnel, je suis prêt à m&apos;investir dans votre équipe sur des projets stimulants.
            </p>
            <p className="text-lg leading-relaxed">
              Mon objectif est de continuer à progresser afin de devenir <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-semibold">développeur web full stack</span>. J&apos;aime relever de nouveaux défis 
              techniques et contribuer à des projets concrets tout en apportant mon 
              énergie et ma créativité.
            </p>
          </div>
        </div>
      </section>
      <br /><br /><br /><br /><br />
      {/* ================== Mes Projets ================== */}
      <section id="projects" className="py-20 bg-white w-full px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Mes Projets
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
            {/* Projet ONF */}
            <div
                className="bg-white rounded-xl shadow-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105"
            >
                <div className="relative h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                        src="/logoONF.jpg"
                        alt="Site e-commerce ONF"
                        className="w-full h-full object-contain group-hover:scale-100 transition-transform duration-300"
                        style={{ padding: '10p' }} // Optionnel: ajoute un léger padding visuel
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">Application Web ONF</h3>
                    <p className="mt-2 text-gray-600 text-sm">
                        Site de vente de vêtements et d&apos;équipements de protection individuelle (EPI).
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {["PHP", "MySQL", "JavaScript", "Bootstrap", "GitHub"].map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <a
                      href="/project/onf"
                      className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                      Voir le projet
                    </a>
                </div>
            </div>

            {/* Projet Jung Logistique */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105">
              <div className="relative h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src="/logoJungLogistique.png"
                  alt="Optimisation back-end Jung Logistique"
                  className="w-full h-full object-contain group-hover:scale-100 transition-transform duration-300"
                  style={{ padding: "10px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Alternance Jung Logistique
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Optimisation de l&apos;architecture back-end/front-end de l&apos;extranet de l&apos;entreprise.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["C#", "JavaScript", "GitHub"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="/project/jung-logistique"
                  className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                  Voir le projet
                </a>
              </div>
            </div>
            {/* Projet Écolotri */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105">
                <div className="relative h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img src="/logoEcolotri.jpg" alt="Écolotri" className="w-full h-full object-contain group-hover:scale-100 transition-transform duration-300" style={{ padding: '10px' }} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">Application Web Écolotri</h3>
                    <p className="mt-2 text-gray-600 text-sm">Site web pour la gestion et le suivi des pesées de déchets collectés.</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {["HTML", "CSS", "PHP", "MySQL", "GitHub"].map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full">{tech}</span>
                        ))}
                    </div>
                    <a
                      href="/project/ecolotri"
                      className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                      Voir le projet
                    </a>
                </div>
            </div>

            {/* Projet ServiceNow */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105">
                <div className="relative h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img src="/logoServiceNOOOW.png" alt="ServiceNow" className="w-full h-full object-contain group-hover:scale-100 transition-transform duration-300" style={{ padding: '10px' }} />
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
                    <a
                      href="/project/daramic"
                      className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                      Voir le projet
                    </a>
                </div>
            </div>

            {/* Projet BricoBrac */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105">
                <div className="relative h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img src="/logoBricoBrac.png" alt="BricoBrac" className="w-full h-full object-contain group-hover:scale-100 transition-transform duration-300" style={{ padding: '10px' }} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">Application Web BricoBrac</h3>
                    <p className="mt-2 text-gray-600 text-sm">Site web pour une chaîne de magasins de bricolage familial.</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {["HTML", "CSS", "PHP", "MySQL", "JavaScript", "Trello", "GitHub"].map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full">{tech}</span>
                        ))}
                    </div>
                    <a
                      href="/project/bricobrac"
                      className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                      Voir le projet
                    </a>
                </div>
            </div>

            {/* Projet Formatech */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105">
                <div className="relative h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img src="/LogoFormaTech.png" alt="Formatech" className="w-full h-full object-contain group-hover:scale-100 transition-transform duration-300" style={{ padding: '10px&' }} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">Application Web Formatech</h3>
                    <p className="mt-2 text-gray-600 text-sm">Site web pour la gestion des formations, modules et cours au sein d&apos;un organisme de formation.</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {["HTML", "CSS", "PHP", "MySQL", "JavaScript", "Trello", "GitHub"].map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full">{tech}</span>
                        ))}
                    </div>
                    <a
                      href="/project/formatech"
                      className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                      Voir le projet
                    </a>
                </div>
            </div>
        </div>
      </section>
       <br /><br /><br /><br /><br />
      {/* ================== Mon Expérience ================== */}
      <section id="parcours" className="py-20 w-full px-8 bg-gradient-to-br from-[#0a0f1c] via-[#1a103d] to-[#2a1a4a]">
        <h2 className="text-4xl font-bold text-center text-white mb-16" data-aos="fade-up">
          Mon Parcours
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Ligne verticale PRINCIPALE ajustée */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[5.8rem] bottom-[0rem] border-l-4 border-gray-700 md:left-5.5 md:translate-x-0"></div>

          {/* Conteneur des éléments de la timeline: -mb-4 est ajouté ici pour aligner parfaitement le bas de la ligne */}
          <div className="space-y-12 -mb-4">

            {/* NOUVEAU TITRE DE SECTION: FORMATIONS */}
            <h3 className="ml-18 text-2xl font-bold text-center  md:text-left text-green-400 mb6 border-b border-gray-700 pb-2">Formations</h3>

            {/* -------------------------------------------------------------------------------------------------- */}
            {/* FORMATIONS - POINTS EN VERT (GREEN-500) */}
            {/* -------------------------------------------------------------------------------------------------- */}

            {/* === Formations - LP DWCA (FORMATION) === */}
            <TimelineItem
              title={
                <>
                  Licence Professionnelle  <br /> Développement Web, Communication et
                  Apprentissages  <br /> Université de Strasbourg 
                </>
              }
              date="2025-2026"
              description=""
              details={[
                "Développement Front-End et Back-End (HTML, CSS, JavaScript, PHP, ReactJS, NodeJS)",
                "Design UX/UI, applications 3D immersives, interactivité numérique et communication digitale",
                "Gestion de projet multimédia, projets tutorés et stage pratique (420h)"
              ]}
              color="green"
            />

            {/* === Formations - BTS Alternance (FORMATION) === */}
            <TimelineItem
              title={
                <>
                  Brevet de Technicien Supérieur  <br /> Services Informatiques aux Organisations  <br />
                  option Solutions Logicielles et Applications Métiers, IRIS MediaSchool
                </>
              }
              date="2021-2024"
              description=""
              details={[
                "Conception et développement d’applications (Bloc 2 : Option SLAM)",
                "Mathématiques pour l&apos;informatique",
                "Ateliers de professionnalisation"
              ]}
              color="green"
            />


            {/* === Formations - Bac Techno (FORMATION) === */}
            <TimelineItem
              title={
                <>
                  Baccalauréat Technologique  <br /> Sciences et Technologies de l&apos;Industrie et du
                  Développement Durable
                  <br />Lycée Polyvalent Jean-Baptiste Schwilgué
                </>
              }
              date="2018-2021"
              description=""
              details={[
                "Systèmes d&apos;Information et Numérique (SIN) Innovation",
                "Technologique et Éco-conception (ITEC - Tronc Commun)",
                "Mathématiques (appliquées à l’informatique)"
              ]}
              color="green"
            />
            
            {/* Petit espace de séparation */}
            <div className="h-8"></div>


            {/* NOUVEAU TITRE DE SECTION: EXPÉRIENCES PROFESSIONNELLES */}
            <h3 className="ml-18 text-2xl text-2xl font-bold text-center md:text-left text-purple-400 mb-6 border-b border-gray-700 pb-2">Expériences Professionnelles (Stages / Alternance)</h3>


            {/* -------------------------------------------------------------------------------------------------- */}
            {/* EXPÉRIENCES PROFESSIONNELLES (Stages/Alternance) - POINTS EN VIOLET (PURPLE-500) */}
            {/* -------------------------------------------------------------------------------------------------- */}
            
            {/* === Stage S2i Evolution (EXPÉRIENCE) === */}
            <TimelineItem
              title="Stage en Informatique - S2I Evolution"
              date="Octobre - Novembre 2024"
              description="Strasbourg - Durée: 8 semaines"
              details={[
                "Développement collaboratif d&apos;un site web responsive en utilisant les frameworks Laravel, React.js et Angular pour un centre de coworking en ligne automatisant les processus de réservation pour 2000 utilisateurs.",
                "Contribution à l&apos;optimisation des fonctionnalités du site, en garantissant une expérience utilisateur fluide et sécurisée.",
              ]}
              color="purple"
            />

            {/* === Assistant Projet Jung Logistique (EXPÉRIENCE) === */}
            <TimelineItem
              title="Assistant Projet en Alternance - Jung Logistique"
              date="Septembre 2023 - Septembre 2024"
              description="Sélestat - Durée: 1 an"
              details={[
                "Développement et refonte de vues existantes de l&apos;ancien site interne en utilisant le framework .NET, avec les langages HTML/CSS, JavaScript, Ajax et SQL, pour une interface utilisateur dynamique",
                "Développement d&apos;une nouvelle vue de gestion de stock pour un dépôt spécifique, améliorant la visibilité et le suivi des marchandises.",
                "Optimisation des requêtes SQL, améliorant significativement les performances detraitement des données et leur fiabilité."
              ]}
              color="purple"
            />

            {/* === Stage ONF (EXPÉRIENCE) === */}
            <TimelineItem
              title="Stage en Informatique - l&apos;Office National des Forêts (ONF)"
              date="Février - Avril 2023"
              description="Colmar - Durée: 6 semaines"
              details={[
                "Conception et développement d&apos;un site e-commerce responsive en PHP, SQL, HTML/CSS, JavaScript ainsi qu’avec le framework open source Vue.js, pour la commercialisation d&apos;équipements de protection individuelle de l&apos;ONF. Déployé sur l&apos;ensemble de la région Grand Est, pour environ 500 utilisateurs.",
                "Gestion de l&apos;intégration des données produits et des interactions utilisateur, garantissant une expérience d&apos;achat fluide.",
              ]}
              color="purple"
            />

            {/* === Stage Daramic (EXPÉRIENCE) === */}
            <TimelineItem
              title="Stage en Informatique - Daramic"
              date="Mai - Juillet 2022"
              description="Sélestat - Durée: 5 semaines"
              details={[
                "Révision et maintenance des bases de données pour en améliorer la performance.",
                "Supervision des systèmes via Squared Up.",
                "Analyse et optimisation des processus informatiques."
              ]}
              color="purple"
            />

          </div>
        </div>
      </section>
      {/* ================== Mes compétences ================== */}
      <section id="competences" className="py-20 bg-white w-full px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2" data-aos="fade-up">
          Mes Compétences Techniques
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10" data-aos="fade-up">
          Technologies et outils que j&apos;utilise
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
            
            {/* Infos de contact (Gauche) - Style d&apos;origine conservé */}
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
                                <p className="text-gray-300 text-sm">Sélestat, Grand-Est, France</p>
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
                            <a
                            href="https://drive.google.com/file/d/1buzlZ2ohKMsyxjBW_PSmYX_mBCuM6vIG/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:text-indigo-400 transition"
                            >
                            <div>
                              <p className="font-semibold">Curriculum Vitae</p>
                              <a href="https://drive.google.com/file/d/1buzlZ2ohKMsyxjBW_PSmYX_mBCuM6vIG/view?usp=sharing">
                                <p className="text-gray-300 text-sm">Télécharger mon CV</p>
                              </a>
                            </div>
                          </a>
                        </a>
                    </li>
                </ul>
                
                {/* Réseaux sociaux */}
                <div className="mt-6">
                    <p className="font-semibold text-lg mb-3 text-white">Réseaux sociaux</p>
                    <div className="flex gap-6">
                        
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/mickael-hoffer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-blue-700 hover:bg-blue-800 transition-all duration-300 hover:scale-110"
                            title="LinkedIn"
                        >
                            <FaLinkedin size={24} /> {/* Utilisation de FaLinkedin pour plus de clarté */}
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/mickaaa67"
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
        {/* ================== FOOTER (Adapté au style sombre) ================== */}
        <footer className="bg-gray-900 text-white py-8 border-t border-gray-700">
          <div className="max-w-6xl mx-auto text-center px-8">
              <p className="text-sm text-gray-400 mb-4">
                  Conçu et développé par Mickael Hoffer.
              </p>
              
              {/* Section Informations Légales (Style ajusté pour être minimaliste) */}
              {/* J&apos;ai regroupé les liens dans un seul paragraphe pour minimiser l&apos;impact sur le style général du pied de page. */}
              <p className="text-xs font-medium mb-4 space-x-4 text-gray-500">
                  <a href="/mentions-legales" className="hover:text-indigo-400 transition duration-200">
                      Politique de confidentialité
                  </a>
              </p>

              {/* Liens sociaux */}
              <div className="flex justify-center space-x-6 mb-4">
                  <a href="https://www.linkedin.com/in/mickael-hoffer/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition transform hover:scale-110">
                      {/* Remplacer par IconLinkedin si vous utilisez la version complète de Home.jsx */}
                      <svg className="text-gray-300 hover:text-indigo-400" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM6 9H2v12h4V9zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                      </svg>
                  </a>
                  <a href="https://github.com/mickaaa67" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition transform hover:scale-110">
                      {/* Remplacer par IconGithub si vous utilisez la version complète de Home.jsx */}
                      <svg className="text-gray-300 hover:text-indigo-400" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.693.084-.693 1.205.086 1.838 1.234 1.838 1.234 1.077 1.838 2.809 1.305 3.495.998.108-.77.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.467-2.381 1.236-3.221-.124-.303-.535-1.515.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.292-1.552 3.301-1.23 3.301-1.23.653 1.661.242 2.873.117 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.624-5.479 5.923.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.797.576C20.563 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                  </a>
              </div>
              
              {/* Copyright */}
              <p className="text-xs text-gray-500">
                  &copy; {new Date().getFullYear()} Mickael Hoffer — Tous droits réservés.
              </p>
          </div>
        </footer>
      </section>
    </main>
  );
}
