// Dans votre fichier page.tsx
"use client"; // Indispensable pour que le code s'exécute côté client

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200, // Déclenche l'animation à 200px du haut de l'élément
      duration: 550, // Durée de l'animation en millisecondes
      easing: "ease-in-out", // Fonction d'assouplissement pour l'animation
      once: true, // L'animation se joue une seule fois par défilement
    });
  }, []);

  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: 'url(/digitales_solution.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
        <div className="relative z-20 p-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in">
            ℕ𝕖𝕩𝕚𝕥𝕪
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white animate-fade-in-2">
            Construisons ensemble votre empreinte digitale
          </p>
          <div className="mt-8 md:mt-12">
            <Link href="#services" className="mt-12 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-300 font-semibold animate-fade-in-3">
              Découvrez nos services
            </Link>
          </div>
        </div>
      </div>

      {/* About Section avec animations AOS */}
      <section id="about" className="py-20 bg-white w-full px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
          Qui sommes Nous ?
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <div className="md:w-3/5 md:mr-8">
            <br />
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify" data-aos="fade-right" data-aos-delay="200">
              Je suis un développeur web autodidacte et passionné qui transforme les idées en sites web percutants. Mon parcours, alliant une formation en BTS SIO et un apprentissage continu, me permet de créer des sites à la fois modernes, performants et à votre image. Je mets mes compétences ainsi que mon expertise au service de votre visibilité pour vous aider à vous démarquer en ligne.
            </p>
            <br />
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify" data-aos="fade-right" data-aos-delay="400">
              Ma démarche va au-delà du simple codage. Je m'imprègne de votre univers, de vos valeurs et de vos objectifs pour concevoir une solution qui a du sens. Chaque ligne de code est pensée pour être élégante et efficace, garantissant une expérience utilisateur fluide et intuitive. J'accorde une sérieuse importance particulière à la qualité du code et aux dernières technologies pour vous offrir une solution durable et évolutive.
            </p>
          </div>
          {/* Image avec effet, sans réduction */}
          <div className="mt-8 md:mt-0 md:w-2/5 flex justify-center">
            <div
              className="relative w-full max-w-sm overflow-hidden rounded-xl shadow-lg group"
              data-aos="fade-left"
            >
              {/* Dégradé overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent z-10"></div>

              {/* Image */}
              <img
                src="/about_me.webp"
                alt="Jeune développeur passionné travaillant sur un ordinateur"
                className="w-full rounded-xl group-hover:scale-110 transition-transform duration-300"
              />

              {/* Contenu par-dessus (optionnel) */}
              <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
                {/* Exemple si tu veux mettre du texte */}
                {/* <h3 className="text-white text-xl font-bold">À propos de moi</h3> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section avec animations AOS */}
      <section id="services" className="py-20 bg-white w-full px-8 mt-12">
        <div className="text-center max-w-4xl mx-auto mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-gray-800">Nos services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Des solutions digitales innovantes pour transformer votre vision en réalité.
          </p>
        </div>

        {/* Section Site Web */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2 flex justify-center" data-aos="fade-right">
            {/* Wrapper avec effet */}
            <div className="relative overflow-hidden rounded-xl shadow-xl group transform transition-transform duration-300 hover:scale-105">
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent z-10"></div>

              {/* Image */}
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
            {/* Wrapper avec effet */}
            <div className="relative overflow-hidden rounded-xl shadow-xl group transform transition-transform duration-300 hover:scale-105">
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent z-10"></div>

              {/* Image */}
              <img
                src="/mobile_software.jpg"
                alt="Image de démonstration d'une application mobile"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Lancer votre projet Section avec animations AOS */}
      <section id="lancement" className="py-20 bg-white w-full px-8 text-center">
        <h2
          className="text-3xl font-bold text-gray-800"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Prêt à lancer votre projet ?
        </h2>

        <p
          className="mt-2 text-xl text-gray-600"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Découvrez nos tarifs ou contactez-nous pour en discuter
        </p>

        <div
          className="mt-12 md:mt-16 flex justify-center gap-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link
            href="#btn-devis"
            className="px-8 py-5 bg-blue-600 text-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-700 font-semibold"
          >
            Demander un Devis
          </Link>

          <Link
            href="#btn-contact"
            className="px-8 py-5 bg-gray-800 text-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-900 font-semibold"
          >
            Nous contacter
          </Link>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between md:items-center">
            {/* Colonne de gauche - Informations de l'entreprise */}
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold">ℕ𝕖𝕩𝕚𝕥𝕪</h3>
              <p className="mt-2 text-sm text-gray-400">
                Création de sites web modernes et performants.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Ensemble créons votre présence numérique avec des solutions innovantes et sur mesure.
              </p>
            </div>

            {/* Colonne du milieu - Liens et réseaux sociaux */}
            <div className="flex justify-center md:justify-end space-x-6 mb-6 md:mb-0">
              {/* Liens de navigation */}
              <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                À propos
              </a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
                Services
              </a>
              <a href="https://mickael-dev.vercel.app/" className="text-gray-400 hover:text-white transition-colors duration-300">
                Portfolio
              </a>
            </div>
            
            {/* Colonne de droite - Informations de contact */}
            <div className="flex flex-col items-center md:items-start text-sm space-y-4">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:contact@nexity.fr" className="text-gray-400 hover:text-white transition-colors duration-300">
                  contact@nexity.fr
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 3.698a1 1 0 01-.157.973l-1.897 1.897a1 1 0 00-.232 1.056l3.56 3.56a1 1 0 001.056-.232l1.897-1.897a1 1 0 01.973-.157l3.698.74A1 1 0 0118 14.847V17a1 1 0 01-1 1h-2C7.373 18 2 12.627 2 6V4z" />
                </svg>
                <a href="tel:+33123456789" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +33 1 23 45 67 89
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <a href="https://www.google.com/maps" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Sélestat, France
                </a>
              </div>
            </div>
          </div>
          {/* Section des droits d'auteur */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <div className="flex justify-center space-x-6 mb-2">
              <a href="/politique-de-confidentialite" className="text-sm text-gray-500 hover:text-white transition-colors duration-300">
                Politique de Confidentialité
              </a>
              <a href="/mentions-legales" className="text-sm text-gray-500 hover:text-white transition-colors duration-300">
                Mentions Légales
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Nexity. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}