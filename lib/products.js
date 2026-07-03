// ============================================================
// PRODUKT-KONFIGURATION
// nameXx/descriptionXx/thankYouXx gibt es je Sprache (Fr, En, Es, It).
// descriptionXx = kurze "So benutzt du's"-Anleitung, NUR auf der Website.
// thankYouXx = persönlicher Dank in der Bestätigungsmail.
//
// WICHTIG: canvaLink muss ein "Vorlagenlink" sein (Template link), kein
// normaler Bearbeiten-Link — sonst bearbeitet der Kunde dein Original!
// Canva-Design öffnen -> Teilen -> "Alle anzeigen" -> "Vorlagenlink erstellen"
// ============================================================

export const products = {
  "floral-birthday-invite": {
    id: "floral-birthday-invite",
    nameFr: "Fleurs & Fiesta",
    nameEn: "Bloom & Bash",
    nameEs: "Flores & Fiesta",
    nameIt: "Fiori & Festa",
    priceCents: 500, // 5,00 €
    currency: "eur",
    canvaLink: "https://www.canva.com/design/REMPLACE-MOI/view",
    descriptionFr: "Ouvrez le lien, remplacez le texte par la date et le lieu de votre événement, ajustez les couleurs si besoin, puis téléchargez en PDF ou partagez le lien numérique avec vos invités.",
    descriptionEn: "Open the link, swap in your event's date and location, tweak the colors if you like, then download as a PDF or share the digital link with your guests.",
    descriptionEs: "Abre el enlace, cambia la fecha y el lugar de tu evento, ajusta los colores si quieres, y descárgalo en PDF o comparte el enlace digital con tus invitados.",
    descriptionIt: "Apri il link, inserisci data e luogo del tuo evento, personalizza i colori se vuoi, poi scarica il PDF o condividi il link digitale con i tuoi invitati.",
    thankYouFr: "Merci pour votre achat ! J'espère que cette invitation apportera une jolie touche florale à votre fête.",
    thankYouEn: "Thank you for your purchase! I hope this invitation adds a lovely floral touch to your celebration.",
    thankYouEs: "¡Gracias por tu compra! Espero que esta invitación le dé un toque floral precioso a tu fiesta.",
    thankYouIt: "Grazie per il tuo acquisto! Spero che questo invito porti un tocco floreale speciale alla tua festa.",
  },

  "ebook-21page": {
    id: "ebook-21page",
    nameFr: "Ton Empire en 21 Pages",
    nameEn: "21 Pages, Big Ideas",
    nameEs: "21 Páginas, Grandes Ideas",
    nameIt: "21 Pagine, Grandi Idee",
    priceCents: 1900, // 19,00 €
    currency: "eur",
    canvaLink: "https://www.canva.com/design/REMPLACE-MOI/view",
    descriptionFr: "Ouvrez le lien, remplissez chaque page avec votre propre contenu et vos images, puis exportez en PDF pour le vendre ou l'offrir à votre audience.",
    descriptionEn: "Open the link, fill each of the 21 pages with your own content and images, then export as a PDF to sell or share with your audience.",
    descriptionEs: "Abre el enlace, completa cada una de las 21 páginas con tu propio contenido e imágenes, y expórtalo en PDF para venderlo o compartirlo con tu audiencia.",
    descriptionIt: "Apri il link, riempi ciascuna delle 21 pagine con i tuoi contenuti e le tue immagini, poi esporta in PDF per venderlo o condividerlo con il tuo pubblico.",
    thankYouFr: "Merci beaucoup pour votre confiance ! J'ai hâte de voir ce que vous allez créer avec ce modèle.",
    thankYouEn: "Thank you so much for your trust! I can't wait to see what you create with this template.",
    thankYouEs: "¡Muchas gracias por tu confianza! Tengo muchas ganas de ver lo que vas a crear con esta plantilla.",
    thankYouIt: "Grazie mille per la fiducia! Non vedo l'ora di vedere cosa creerai con questo template.",
  },

  "girly-pink-birthday-card": {
    id: "girly-pink-birthday-card",
    nameFr: "Reine du Rose",
    nameEn: "Pink It Up",
    nameEs: "Reina del Rosa",
    nameIt: "Regina del Rosa",
    priceCents: 350, // 3,50 €
    currency: "eur",
    canvaLink: "https://www.canva.com/design/REMPLACE-MOI/view",
    descriptionFr: "Ouvrez le lien, remplacez le prénom et le message, puis imprimez chez vous ou envoyez-la directement en carte numérique.",
    descriptionEn: "Open the link, swap in the name and your message, then print it at home or send it straight away as a digital card.",
    descriptionEs: "Abre el enlace, cambia el nombre y el mensaje, e imprímela en casa o envíala directamente como tarjeta digital.",
    descriptionIt: "Apri il link, inserisci nome e messaggio, poi stampala a casa o inviala subito come biglietto digitale.",
    thankYouFr: "Merci pour votre achat ! Cette carte est prête à faire sourire quelqu'un de spécial.",
    thankYouEn: "Thank you for your purchase! This card is ready to make someone special smile.",
    thankYouEs: "¡Gracias por tu compra! Esta tarjeta está lista para hacer sonreír a alguien especial.",
    thankYouIt: "Grazie per il tuo acquisto! Questo biglietto è pronto a far sorridere una persona speciale.",
  },

  "beer-birthday-card": {
    id: "beer-birthday-card",
    nameFr: "Santé Bestie",
    nameEn: "Cheers, Bestie",
    nameEs: "Salud, Bestie",
    nameIt: "Salute, Bestie",
    priceCents: 350, // 3,50 €
    currency: "eur",
    canvaLink: "https://www.canva.com/design/REMPLACE-MOI/view",
    descriptionFr: "Ouvrez le lien, personnalisez le prénom et le message, puis imprimez ou envoyez-la en version numérique.",
    descriptionEn: "Open the link, personalize the name and message, then print it or send it as a digital card.",
    descriptionEs: "Abre el enlace, personaliza el nombre y el mensaje, e imprímela o envíala en versión digital.",
    descriptionIt: "Apri il link, personalizza nome e messaggio, poi stampalo o inviarlo in versione digitale.",
    thankYouFr: "Merci pour votre achat ! Santé et joyeux anniversaire à la personne concernée.",
    thankYouEn: "Thank you for your purchase! Cheers and happy birthday to the lucky person.",
    thankYouEs: "¡Gracias por tu compra! Salud y feliz cumpleaños para esa persona especial.",
    thankYouIt: "Grazie per il tuo acquisto! Salute e buon compleanno alla persona fortunata.",
  },

  "floral-wedding-invitation": {
    id: "floral-wedding-invitation",
    nameFr: "Pour Toujours en Fleurs",
    nameEn: "Bloom Forever",
    nameEs: "Florecer Para Siempre",
    nameIt: "Fiorire Per Sempre",
    priceCents: 700, // 7,00 €
    currency: "eur",
    canvaLink: "https://www.canva.com/design/REMPLACE-MOI/view",
    descriptionFr: "Ouvrez le lien, ajoutez les prénoms des mariés, la date et le lieu, ajustez les couleurs si besoin, puis téléchargez en PDF ou imprimez chez un imprimeur.",
    descriptionEn: "Open the link, add the couple's names, date and venue, adjust the colors if you like, then download as a PDF or send it to a print shop.",
    descriptionEs: "Abre el enlace, añade los nombres de la pareja, la fecha y el lugar, ajusta los colores si quieres, y descárgalo en PDF o llévalo a una imprenta.",
    descriptionIt: "Apri il link, aggiungi i nomi degli sposi, data e luogo, personalizza i colori se vuoi, poi scarica il PDF o portalo in tipografia.",
    thankYouFr: "Merci infiniment pour votre achat, et toutes mes félicitations pour ce beau projet !",
    thankYouEn: "Thank you so much for your purchase, and huge congratulations on this beautiful occasion!",
    thankYouEs: "¡Muchísimas gracias por tu compra, y enhorabuena por esta ocasión tan especial!",
    thankYouIt: "Grazie di cuore per il tuo acquisto, e tantissimi auguri per questa bellissima occasione!",
  },

  "ocean-birthday-card": {
    id: "ocean-birthday-card",
    nameFr: "Vitamine Sea",
    nameEn: "Vitamin Sea",
    nameEs: "Vitamina Sea",
    nameIt: "Vitamina Sea",
    priceCents: 350, // 3,50 €
    currency: "eur",
    canvaLink: "https://www.canva.com/design/REMPLACE-MOI/view",
    descriptionFr: "Ouvrez le lien, remplacez le prénom et le message, puis imprimez chez vous ou envoyez-la en carte numérique.",
    descriptionEn: "Open the link, swap in the name and your message, then print it at home or send it as a digital card.",
    descriptionEs: "Abre el enlace, cambia el nombre y el mensaje, e imprímela en casa o envíala como tarjeta digital.",
    descriptionIt: "Apri il link, inserisci nome e messaggio, poi stampalo a casa o inviarlo come biglietto digitale.",
    thankYouFr: "Merci pour votre achat ! Que cette carte apporte un peu de fraîcheur à la fête.",
    thankYouEn: "Thank you for your purchase! May this card bring a little wave of fun to the celebration.",
    thankYouEs: "¡Gracias por tu compra! Que esta tarjeta traiga un toque fresco a la fiesta.",
    thankYouIt: "Grazie per il tuo acquisto! Che questo biglietto porti un'onda di divertimento alla festa.",
  },

  "balloons-birthday-card": {
    id: "balloons-birthday-card",
    nameFr: "Pluie de Confettis",
    nameEn: "Confetti Drop",
    nameEs: "Lluvia de Confeti",
    nameIt: "Pioggia di Coriandoli",
    priceCents: 350, // 3,50 €
    currency: "eur",
    canvaLink: "https://www.canva.com/design/REMPLACE-MOI/view",
    descriptionFr: "Ouvrez le lien, remplacez le prénom et le message, puis imprimez chez vous ou envoyez-la en carte numérique.",
    descriptionEn: "Open the link, swap in the name and your message, then print it at home or send it as a digital card.",
    descriptionEs: "Abre el enlace, cambia el nombre y el mensaje, e imprímela en casa o envíala como tarjeta digital.",
    descriptionIt: "Apri il link, inserisci nome e messaggio, poi stampalo a casa o inviarlo come biglietto digitale.",
    thankYouFr: "Merci pour votre achat ! Une carte colorée pour un anniversaire réussi.",
    thankYouEn: "Thank you for your purchase! A colorful card for a birthday to remember.",
    thankYouEs: "¡Gracias por tu compra! Una tarjeta llena de color para un cumpleaños inolvidable.",
    thankYouIt: "Grazie per il tuo acquisto! Un biglietto colorato per un compleanno da ricordare.",
  },

  "weekly-meal-plan": {
    id: "weekly-meal-plan",
    nameFr: "Ta Semaine, Version Glow-Up",
    nameEn: "Meal Prep Glow-Up",
    nameEs: "Tu Semana, Versión Glow-Up",
    nameIt: "La Tua Settimana, Versione Glow-Up",
    priceCents: 450, // 4,50 €
    currency: "eur",
    canvaLink: "https://www.canva.com/design/REMPLACE-MOI/view",
    descriptionFr: "Ouvrez le lien, remplissez vos repas pour chaque jour de la semaine, puis imprimez et affichez-le au frigo, ou gardez-le en version numérique sur votre tablette.",
    descriptionEn: "Open the link, fill in your meals for each day of the week, then print it out for the fridge or keep it digital on your tablet.",
    descriptionEs: "Abre el enlace, rellena tus comidas para cada día de la semana, e imprímelo para la nevera o mantenlo digital en tu tablet.",
    descriptionIt: "Apri il link, compila i tuoi pasti per ogni giorno della settimana, poi stampalo per il frigo o tienilo digitale sul tablet.",
    thankYouFr: "Merci pour votre achat ! J'espère que ce planificateur simplifiera votre semaine.",
    thankYouEn: "Thank you for your purchase! I hope this planner makes your week a little easier.",
    thankYouEs: "¡Gracias por tu compra! Espero que este planificador te haga la semana un poco más fácil.",
    thankYouIt: "Grazie per il tuo acquisto! Spero che questo planner ti semplifichi la settimana.",
  },

  "funny-cats-birthday-card": {
    id: "funny-cats-birthday-card",
    nameFr: "Trop Chat Pour Toi",
    nameEn: "Meow Happy Birthday",
    nameEs: "Miau Feliz Cumpleaños",
    nameIt: "Miao Buon Compleanno",
    priceCents: 350, // 3,50 €
    currency: "eur",
    canvaLink: "https://www.canva.com/design/REMPLACE-MOI/view",
    descriptionFr: "Ouvrez le lien, remplacez le prénom et le message, puis imprimez chez vous ou envoyez-la en carte numérique.",
    descriptionEn: "Open the link, swap in the name and your message, then print it at home or send it as a digital card.",
    descriptionEs: "Abre el enlace, cambia el nombre y el mensaje, e imprímela en casa o envíala como tarjeta digital.",
    descriptionIt: "Apri il link, inserisci nome e messaggio, poi stampalo a casa o inviarlo come biglietto digitale.",
    thankYouFr: "Merci pour votre achat ! De quoi arracher un fou rire au prochain anniversaire.",
    thankYouEn: "Thank you for your purchase! Guaranteed to get a laugh at the next birthday party.",
    thankYouEs: "¡Gracias por tu compra! Seguro que arranca unas risas en la próxima fiesta de cumpleaños.",
    thankYouIt: "Grazie per il tuo acquisto! Garantito che strapperà una risata alla prossima festa di compleanno.",
  },
};
