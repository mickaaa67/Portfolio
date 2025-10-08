"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#0d1117] border-b border-gray-800 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-6">
          <Link href="/" className="text-xl font-bold text-white hover:text-indigo-400 transition">
            Mickael Hoffer
          </Link>
          <nav className="space-x-6 text-sm">
            <Link href="/" className="text-gray-300 hover:text-indigo-400 transition">
              Accueil
            </Link>
            <Link href="/#projects" className="text-gray-300 hover:text-indigo-400 transition">
              Projets
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-indigo-400 transition">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* HEADER VISUEL */}
      <header className="relative w-full h-72 flex flex-col justify-center items-center bg-gray-900 text-white text-center">
        <h1 className="relative text-4xl md:text-5xl font-bold z-10">
          Mentions légales & Politique de confidentialité
        </h1>
      </header>

      {/* CONTENU */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {/* MENTIONS LÉGALES */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mentions légales</h2>
          <p className="text-gray-700 leading-relaxed">
            Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour
            la Confiance dans l'Économie Numérique (LCEN), il est porté à la connaissance des utilisateurs
            et visiteurs du site <strong>mhoffer.fr</strong> les informations suivantes :
          </p>

          <div className="mt-6 space-y-4 text-gray-700">
            <p><strong>Éditeur du site :</strong> Mickael Hoffer</p>
            <p><strong>Adresse :</strong> Sélestat, France</p>
            <p><strong>Email :</strong> mickael.hoffer@gmail.com</p>
            <p><strong>Responsable de publication :</strong> Mickael Hoffer</p>
            <p><strong>Hébergeur :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            <p><strong>Site :</strong> <a href="https://vercel.com" className="text-indigo-600 hover:underline">vercel.com</a></p>
          </div>
        </section>

        {/* POLITIQUE DE CONFIDENTIALITÉ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Politique de confidentialité</h2>
          <p className="text-gray-700 leading-relaxed">
            Ce site respecte la vie privée de ses utilisateurs et s’engage à
            ce que la collecte et le traitement d’informations personnelles soient effectués conformément
            au Règlement Général sur la Protection des Données (RGPD).
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">1. Données collectées</h3>
          <p className="text-gray-700 leading-relaxed">
            Le site peut collecter des informations personnelles via le formulaire de contact, telles que :
            le nom, le prénom, l’adresse e-mail et tout autre renseignement transmis volontairement.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">2. Finalité du traitement</h3>
          <p className="text-gray-700 leading-relaxed">
            Les données collectées servent uniquement à répondre aux demandes de contact et à améliorer la
            qualité du service. Aucune donnée n’est transmise à des tiers sans consentement préalable.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">3. Durée de conservation</h3>
          <p className="text-gray-700 leading-relaxed">
            Les informations sont conservées uniquement pendant la durée nécessaire au traitement de la
            demande ou conformément aux obligations légales.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">4. Droit d’accès, de rectification et de suppression</h3>
          <p className="text-gray-700 leading-relaxed">
            Conformément à la loi « Informatique et Libertés » et au RGPD, vous disposez d’un droit d’accès,
            de rectification, de suppression et d’opposition aux données vous concernant.
            Vous pouvez exercer ce droit en écrivant à :{" "}
            <a href="mailto:mickael.hoffer@gmail.com" className="text-indigo-600 hover:underline">
              mickael.hoffer@gmail.com
            </a>.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">5. Sécurité</h3>
          <p className="text-gray-700 leading-relaxed">
            Le site utilise des protocoles sécurisés (HTTPS) et des outils de surveillance pour garantir la
            sécurité et la confidentialité des données personnelles transmises.
          </p>
        </section>

        {/* COOKIES */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            Le site utilise des cookies nécessaires à son bon fonctionnement et à la mesure d’audience
            (Google Analytics, par exemple). Vous pouvez à tout moment refuser leur utilisation via les
            paramètres de votre navigateur.
          </p>
        </section>

        {/* CONTACT */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            Pour toute question relative à ces mentions légales ou à la politique de confidentialité,
            vous pouvez me contacter directement à l’adresse suivante :{" "}
            <a href="mailto:mickael.hoffer@gmail.com" className="text-indigo-600 hover:underline">
              mickael.hoffer@gmail.com
            </a>.
          </p>
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
