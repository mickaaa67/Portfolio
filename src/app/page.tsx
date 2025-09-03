// Dans votre fichier page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
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

        {/* Superposition de couleur pour une meilleure lisibilité */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
        
        {/* Contenu de la Hero Section */}
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
      {/* Services Section */}
      <section id="about" className="py-20 bg-white w-full px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Qui sommes Nous ?
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          {/* Conteneur du texte : j'ai ajusté l'espacement à droite (md:mr-8) et la largeur (md:w-3/5) */}
          <div className="md:w-3/5 md:mr-8">
          <br /><br /><br /><br />
            <p className="mt-4 text-lg text-gray-800 leading-relaxed text-justify">
              Je suis un développeur web autodidacte et passionné qui transforme les idées en sites web percutants. Mon parcours, alliant une formation en BTS SIO et un apprentissage continu, me permet de créer des sites à la fois modernes, performants et à votre image. Je mets mon expertise au service de votre visibilité pour vous aider à vous démarquer en ligne.
            </p>
          </div>
          
          {/* Conteneur de l'image : j'ai ajusté la largeur pour équilibrer la mise en page (md:w-2/5) */}
          <div className="mt-8 md:mt-0 md:w-2/5 flex justify-center">
            <img
              src="/about_me.webp"
              alt="Jeune développeur passionné travaillant sur un ordinateur"
              className="rounded-lg shadow-lg w-full max-w-sm"
            />
          </div>
        </div>
      </section>
      {/* Services Section */}
      {/* Section des Services */}
      <section id="services" className="py-20 bg-white w-full px-8 mt-12">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Nos services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Des solutions digitales innovantes pour transformer votre vision en réalité.
          </p>
        </div>
        
        {/* Section Site Web */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-20">
          {/* Image à gauche */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/responsive_picture.jpg"
              alt="Image de démonstration d'un site web réactif sur différents appareils"
              className="rounded-lg shadow-xl"
            />
          </div>
          {/* Contenu à droite */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-800">Sites Web</h3>
            <p className="mt-2 text-xl text-gray-600">
              Créez une présence en ligne impactante avec des sites web modernes et performants.
            </p>
            <div className="mt-8">
              <h4 className="text-2xl font-semibold text-gray-800">Sites Vitrines</h4>
              <p className="mt-4 text-gray-700">
                Un site vitrine est bien plus qu'une simple page web ; c'est votre carte de visite numérique. Pour votre entreprise, il représente l'opportunité de présenter vos produits ou services, de partager votre histoire, de bâtir la confiance avec vos clients et d'être visible 24h/24. C'est l'outil essentiel pour attirer de nouveaux prospects et consolider votre image de marque.
              </p>
            </div>
          </div>
        </div>

        {/* Section Site responsive */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Contenu à gauche */}
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
          {/* Image à droite */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/mobile_software.jpg" // Changez le chemin pour une autre image
              alt="Image de démonstration d'une application mobile"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section id="lancement" className="py-20 bg-white w-full px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Prêt à lancer votre projet ?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
            Découvrez nos tarifs ou contactez-nous pour en discuter
          </p>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white w-full px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Contactez-moi
        </h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700">Nom</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea id="message" name="message" rows ="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}