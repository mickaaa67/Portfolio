"use client";

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', 
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    
    try {
      // Pour l'instant, c'est une SIMULATION de succès pour tester l'interface.
      // Une fois que vous aurez votre clé d'application Google, décommentez le bloc 'fetch' ci-dessous
      // et supprimez la simulation (le 'await new Promise...').

      /* // VRAI APPEL API POUR ENVOYER L'EMAIL :
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('✅ Message envoyé avec succès !');
        setFormData({ name: '', email: '', subject: '', message: '' }); 
      } else {
        const errorData = await response.json();
        setStatus(`❌ Échec de l'envoi : ${errorData.message || 'Erreur serveur.'}`);
      }
      */

      // --- DÉBUT SIMULATION ---
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('✅ Message envoyé avec succès (simulation) !');
      setFormData({ name: '', email: '', subject: '', message: '' }); 
      // --- FIN SIMULATION ---

    } catch (error) {
      console.error(error);
      setStatus('❌ Erreur de connexion. Veuillez vérifier votre réseau.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // NOUVEAU FOND : bg-[#13192e] - plus sombre et élégant
    <div className="bg-[#13192e] rounded-2xl p-8 shadow-lg h-full flex flex-col">
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 text-transparent bg-clip-text">
        Envoyez-moi un message
      </h3>
      
      <form className="space-y-5 flex flex-col flex-grow" onSubmit={handleSubmit}>
        
        {/* Nom et Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            required 
            // NOUVEAU FOND INPUT : bg-[#1f263f]
            className="w-full p-3 rounded-lg bg-[#1f263f] text-white placeholder-gray-400 border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition duration-200"
          />
          <input
            type="email"
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            required 
            // NOUVEAU FOND INPUT : bg-[#1f263f]
            className="w-full p-3 rounded-lg bg-[#1f263f] text-white placeholder-gray-400 border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition duration-200"
          />
        </div>
        
        {/* Objet */}
        <input
          type="text"
          name="subject" 
          value={formData.subject}
          onChange={handleChange}
          placeholder="Objet"
          required 
          // NOUVEAU FOND INPUT : bg-[#1f263f]
          className="w-full p-3 rounded-lg bg-[#1f263f] text-white placeholder-gray-400 border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition duration-200"
        />
        
        {/* Message : flex-grow pour prendre tout l'espace vertical restant */}
        <textarea
          rows={5}
          name="message" 
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message..."
          required 
          // NOUVEAU FOND INPUT : bg-[#1f263f]
          className="w-full p-3 rounded-lg bg-[#1f263f] text-white placeholder-gray-400 border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none resize-none transition duration-200 flex-grow"
        ></textarea>
        
        {/* Bouton de soumission */}
        <button
          type="submit"
          disabled={loading} 
          className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:from-purple-700 hover:to-blue-700 disabled:from-gray-500 disabled:to-gray-600 disabled:scale-100 disabled:cursor-not-allowed mt-auto"
        >
          {loading ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>
        
        {/* Affichage du statut */}
        {status && (
          <p className={`mt-4 text-center font-semibold ${status.includes('succès') ? 'text-green-400' : 'text-red-400'}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
