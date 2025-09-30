import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuration Nodemailer
const transporter = nodemailer.createTransport({
  // Utilisation des variables d'environnement
  // Assurez-vous d'avoir ces variables dans votre fichier .env.local
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'), // 465 pour SSL/TLS (Gmail)
  secure: true, // true pour le port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, // IMPORTANT : Utilisez un mot de passe d'application pour Gmail
  },
});

export async function POST(request: Request) {
  try {
    // 1. Récupération des données du formulaire (y compris 'subject' maintenant)
    const formData = await request.json();
    const { name, email, subject, message } = formData;

    // 2. Validation de base des données
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Données de formulaire incomplètes.', status: 'error' }, { status: 400 });
    }

    // 3. Construction de l'email à envoyer
    const mailOptions = {
      from: process.env.SMTP_USER, // L'expéditeur est votre propre email
      to: process.env.EMAIL_TO, // L'adresse où vous souhaitez recevoir les messages
      replyTo: email, // Permet de répondre directement à l'utilisateur
      
      subject: `[Portfolio Contact] ${subject} - De: ${name}`,
      
      text: `
        Nom: ${name}
        Email: ${email}
        Objet: ${subject}
        ---------------------------
        Message:
        ${message}
      `,
      
      html: `
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Objet:</strong> ${subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    };

    // 4. Envoi de l'email
    await transporter.sendMail(mailOptions);
    
    // 5. Succès
    return NextResponse.json({ message: 'Email envoyé avec succès !' }, { status: 200 });

  } catch (error) {
    console.error('Erreur Nodemailer ou API:', error);
    
    // 6. Gestion des erreurs
    return NextResponse.json({ 
      message: "Erreur serveur lors de l'envoi de l'email. Veuillez vérifier les logs ou les variables d'environnement." 
    }, { status: 500 });
  }
}
