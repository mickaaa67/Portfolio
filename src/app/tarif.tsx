// page.jsx

import React from 'react';

// Le composant PricingCard a été intégré directement dans ce fichier
interface PricingCardProps {
  title: string;
  subtitle: string;
  price: number;
  isFeatured?: boolean;
  features: {
    text: string;
    isIncluded: boolean;
    isBold?: boolean;
    icon: 'check' | 'plus';
  }[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  subtitle,
  price,
  isFeatured,
  features,
}) => {
  const cardClasses = `rounded-2xl shadow-xl flex flex-col p-6 transition-transform duration-300 hover:scale-105 ${
    isFeatured ? 'bg-cyan-500 text-white transform scale-105' : 'bg-white text-gray-800'
  }`;

  return (
    <div className={cardClasses}>
      {/* En-tête de la carte */}
      <div className="text-center">
        <h3 className={`text-2xl font-semibold ${isFeatured ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
        <p className={`mt-2 text-sm ${isFeatured ? 'text-gray-200' : 'text-gray-600'}`}>{subtitle}</p>
        <div className="mt-6">
          <span className={`text-5xl font-extrabold ${isFeatured ? 'text-white' : 'text-cyan-500'}`}>
            {price}€
          </span>
        </div>
      </div>

      {/* Ligne de séparation */}
      <div className={`my-8 h-px w-full ${isFeatured ? 'bg-cyan-200' : 'bg-gray-200'}`}></div>

      {/* Liste des fonctionnalités */}
      <ul className="space-y-4 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="flex-shrink-0 mr-3 mt-1">
              {feature.icon === 'check' ? (
                // Icône SVG pour la coche
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 ${isFeatured ? 'text-green-300' : 'text-green-500'}`}>
                  <path fillRule="evenodd" d="M19.916 3.003a.75.75 0 01.218.895l-9.143 14.5c-.322.511-1.077.674-1.588.352l-5.6-3.5a.75.75 0 01.734-1.2l5.05 3.156L19.29 3.22a.75.75 0 01.626-.217z" clipRule="evenodd" />
                </svg>
              ) : (
                // Icône SVG pour le plus
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isFeatured ? 'text-white' : 'text-cyan-500'}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              )}
            </span>
            <p className={`text-base leading-relaxed ${isFeatured ? 'text-gray-200' : 'text-gray-700'} ${feature.isBold ? 'font-bold' : ''}`}>
              {feature.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Le composant principal de la page
export default function Home() {
  // Données pour les cartes de tarification
  const pricingData = [
    {
      title: 'Site one-page',
      subtitle: 'Tout l\'essentiel en une seule page',
      price: 500,
      isFeatured: false,
      features: [
        { text: 'Installation et configuration de WordPress', isIncluded: true, icon: 'check' },
        { text: 'Design personnalisé avec le thème Divi', isIncluded: true, icon: 'check' },
        { text: 'Une page unique et optimisée regroupant toutes les informations essentielles', isIncluded: true, icon: 'check' },
        { text: 'Mentions légales et politique de confidentialité incluses', isIncluded: true, icon: 'check' },
      ],
    },
    {
      title: 'Site vitrine',
      subtitle: 'Pour un contenu plus développé',
      price: 950,
      isFeatured: true,
      features: [
        { text: 'Tous les éléments du site one-page', isIncluded: true, isBold: true, icon: 'check' },
        { text: 'Création de 4 pages supplémentaires : Accueil, Galerie, Actualités, Contact.', isIncluded: true, icon: 'plus' },
        { text: 'Plan du site optimisé pour le référencement', isIncluded: true, icon: 'plus' },
        { text: 'Mise en ligne de vos contenus (textes, photos, vidéos)', isIncluded: true, icon: 'plus' },
        { text: '3 révisions incluses', isIncluded: true, icon: 'check' },
      ],
    },
    {
      title: 'Site e-commerce',
      subtitle: 'Pour vendre en ligne',
      price: 1100,
      isFeatured: false,
      features: [
        { text: 'Tous les éléments du site vitrine', isIncluded: true, isBold: true, icon: 'check' },
        { text: 'Configuration d\'une boutique WooCommerce avec 10 fiches produits', isIncluded: true, icon: 'plus' },
        { text: 'Installation et paramétrage des moyens de paiement et des options de livraison', isIncluded: true, icon: 'plus' },
        { text: 'Ajout de bons de réduction', isIncluded: true, icon: 'plus' },
        { text: '4 révisions incluses', isIncluded: true, icon: 'check' },
      ],
    },
  ];

  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: 'url(https://placehold.co/1920x1080/000000/FFFFFF?text=Digital+Solution)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
        <div className="relative z-20 p-8">
          <p className="mt-4 text-lg md:text-xl text-white animate-fade-in-2">
            Création de site vitrine et e-commerce
          </p>
        </div>
      </div>
      {/* Services Tarif sans animations AOS */}
      <section id="services" className="py-20 bg-white w-full px-8 mt-12">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Conception de site vitrine, e-commerce ou one page inclus :</h2>
        </div>
        <ul>
          <li><strong>Hébergement web :</strong> Un service qui permet de stocker votre site web et ses fichiers sur un serveur, le rendant ainsi accessible sur internet.</li>
          <li><strong>Nom de domaine :</strong> L'adresse de votre site web (par exemple, "www.votrenom.com").</li>
          <li><strong>Certificat SSL :</strong> Un certificat de sécurité qui permet de chiffrer les données échangées entre le serveur et le visiteur, garantissant une connexion sécurisée. Les sites sécurisés commencent par "https://" plutôt que "http://".</li>
          <li><strong>Conception et développement :</strong> Conception et développement : La création du design visuel et le codage du site pour le rendre fonctionnel. Cela inclut la mise en page, les couleurs, les polices, et la programmation des fonctionnalités.</li>
          <li><strong>Contenu :</strong> Les textes, images et vidéos qui seront affichés sur votre site.</li>
          <li><strong>Référencement (SEO) :</strong> L'optimisation du site pour qu'il soit bien classé dans les résultats des moteurs de recherche comme Google.</li>
          <li><strong>Responsive design :</strong> Une conception qui permet au site de s'adapter et de s'afficher correctement sur tous les appareils (ordinateurs de bureau, tablettes, smartphones).</li>
          <li><strong>Maintenance et mises à jour :</strong> Les services de suivi et de mise à jour du site pour assurer son bon fonctionnement et sa sécurité à long terme.</li>
        </ul>
        <br /><br /><br />
        <div className="relative z-20 p-8">
          <div className="mt-12 md:mt-16 flex justify-center gap-8">
            <a href="#tarifs" className="px-8 py-5 bg-gray-800 text-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-900 font-semibold">
              Voir des exemples de sites
            </a>
          </div>
        </div>
      </section>

      {/* Section de tarification ajoutée ici */}
      <section id="tarifs" className="py-20 bg-gray-100 w-full px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800">Nos Tarifs</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choisissez le plan qui correspond le mieux à vos besoins et à votre budget.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Correction ici : il est important que l'élément parent de la liste ait une clé unique. */}
          {pricingData.map((plan, index) => (
            <div key={index}>
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </section>
      
      {/* Tarif Site Web */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="md:w-1/2 flex justify-center">
          {/* Wrapper avec effet */}
          <div className="relative overflow-hidden rounded-xl shadow-xl group transform transition-transform duration-300 hover:scale-105">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent z-10"></div>

            {/* Image */}
            <img
              src="https://placehold.co/800x600/10B981/FFFFFF?text=Web+Responsive"
              alt="Image de démonstration d'un site web réactif sur différents appareils"
              className="w-full rounded-xl"
            />
          </div>
        </div>

        <div className="md:w-1/2 text-center md:text-left">
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
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-bold text-gray-800">Site responsive</h3>
          <p className="mt-2 text-xl text-gray-600">
            Application mobile responsive design, lisible sur tous les appareils : PC, Android, iOS, tablette.
          </p>
          <div className="mt-6 space-y-4">
            <div>
              <h5 className="text-xl font-bold text-gray-800">Applications natives</h5>
              <p className="mt-1 text-gray-700">
                Développement natif pour des performances optimales.
              </p>
            </div>
            <div>
              <h5 className="text-xl font-bold text-gray-800">Sécurité Avancée</h5>
              <p className="mt-1 text-gray-700">
                Protection des données et authentification robuste.
              </p>
            </div>
            <div>
              <h5 className="text-xl font-bold text-gray-800">Engagement Utilisateur</h5>
              <p className="mt-1 text-gray-700">
                Notifications push et fonctionnalités interactives.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          {/* Wrapper avec effet */}
          <div className="relative overflow-hidden rounded-xl shadow-xl group transform transition-transform duration-300 hover:scale-105">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent z-10"></div>

            {/* Image */}
            <img
              src="https://placehold.co/800x600/1D4ED8/FFFFFF?text=Mobile+App"
              alt="Image de démonstration d'une application mobile"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br />
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
