import Stripe from "stripe";
import { Resend } from "resend";
import { products } from "../lib/products.js";

// Stripe braucht den ROHEN Request-Body, um die Signatur zu prüfen.
// Deshalb schalten wir den automatischen Body-Parser ab.
export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

async function getRawBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const sig = req.headers["stripe-signature"];
  const rawBody = await getRawBody(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Signature webhook invalide:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const productId = session.metadata?.productId;
    const lang = session.metadata?.lang || "en";
    const product = products[productId];
    const customerEmail =
      session.customer_details?.email || session.customer_email;

    if (product && customerEmail) {
      try {
        const L = ["en", "fr", "es", "it"].includes(lang) ? lang : "en";
        const subjectPrefix = {
          en: "Your order —",
          fr: "Votre commande —",
          es: "Tu pedido —",
          it: "Il tuo ordine —",
        }[L];
        const nameKey = "name" + L.charAt(0).toUpperCase() + L.slice(1);

        await resend.emails.send({
          from: process.env.SENDER_EMAIL || "Maison à la Rose <bonjour@maisonalarose.com>",
          to: customerEmail,
          subject: `${subjectPrefix} ${product[nameKey]}`,
          html: buildEmailHtml(product, lang),
        });
        console.log(`E-Mail gesendet an ${customerEmail} für ${productId}`);
      } catch (err) {
        console.error("Fehler beim E-Mail-Versand:", err);
        // Wir geben Stripe trotzdem 200 zurück, damit es nicht endlos wiederholt wird.
        // Stattdessen solltest du hier ggf. eine Benachrichtigung an dich selbst einbauen.
      }
    } else {
      console.error("Produkt oder E-Mail fehlt", { productId, customerEmail });
    }
  }

  return res.status(200).json({ received: true });
}

function buildEmailHtml(product, lang) {
  const L = ["en", "fr", "es", "it"].includes(lang) ? lang : "en";
  const nameKey = "name" + L.charAt(0).toUpperCase() + L.slice(1);
  const thankKey = "thankYou" + L.charAt(0).toUpperCase() + L.slice(1);
  const name = product[nameKey];
  const thankYou = product[thankKey];

  const translations = {
    en: {
      hello: "Thank you for your order!",
      button: "Open my Canva design",
      howTo: "How it works",
      step1: "Click the button above to open your Canva design.",
      step2: 'Click "Use template" in Canva — this creates your own editable copy.',
      step3: "Personalize it, then download or share it however you like.",
      help: "Any question about your template? Just reply to this email.",
      signature: "With gratitude,",
    },
    fr: {
      hello: "Merci pour votre commande !",
      button: "Ouvrir mon design Canva",
      howTo: "Comment ça marche",
      step1: "Cliquez sur le bouton ci-dessus pour ouvrir votre design Canva.",
      step2: 'Cliquez sur « Utiliser le modèle » dans Canva — cela crée votre propre copie modifiable.',
      step3: "Personnalisez-le, puis téléchargez-le ou partagez-le comme vous le souhaitez.",
      help: "Une question sur votre template ? Répondez simplement à cet e-mail.",
      signature: "Avec gratitude,",
    },
    es: {
      hello: "¡Gracias por tu pedido!",
      button: "Abrir mi diseño de Canva",
      howTo: "Cómo funciona",
      step1: "Haz clic en el botón de arriba para abrir tu diseño de Canva.",
      step2: 'Haz clic en "Usar plantilla" en Canva — esto crea tu propia copia editable.',
      step3: "Personalízalo y luego descárgalo o compártelo como prefieras.",
      help: "¿Alguna duda sobre tu plantilla? Responde a este correo.",
      signature: "Con cariño,",
    },
    it: {
      hello: "Grazie per il tuo ordine!",
      button: "Apri il mio design Canva",
      howTo: "Come funziona",
      step1: "Clicca sul pulsante qui sopra per aprire il tuo design Canva.",
      step2: 'Clicca su "Usa modello" in Canva — questo crea la tua copia modificabile.',
      step3: "Personalizzalo, poi scaricalo o condividilo come preferisci.",
      help: "Domande sul tuo template? Rispondi semplicemente a questa email.",
      signature: "Con gratitudine,",
    },
  };
  const t = translations[L];

  return `
  <div style="background:#F6F0E7;padding:40px 20px;font-family:Georgia, 'Times New Roman', serif;color:#2A2320;">
    <div style="max-width:520px;margin:0 auto;background:#FBF7F1;border:1px solid rgba(42,35,32,0.12);">
      <div style="padding:36px 36px 24px;text-align:center;border-bottom:1px solid rgba(42,35,32,0.12);">
        <div style="font-style:italic;font-size:22px;color:#5C2029;">Maison à la Rose</div>
      </div>
      <div style="padding:36px;">
        <p style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#7C2F3B;margin:0 0 14px;">${t.hello}</p>
        <h1 style="font-size:22px;font-weight:400;color:#5C2029;margin:0 0 20px;font-style:italic;">${name}</h1>
        <p style="font-size:15px;line-height:1.7;color:#4a3f3a;margin:0 0 28px;">${thankYou}</p>

        <div style="text-align:center;margin:30px 0;">
          <a href="${product.canvaLink}" style="display:inline-block;background:#7C2F3B;color:#FBF7F1;padding:14px 30px;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;">${t.button}</a>
        </div>

        <p style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#7C2F3B;margin:34px 0 14px;">${t.howTo}</p>
        <ol style="font-size:14.5px;line-height:1.9;color:#4a3f3a;padding-left:18px;margin:0;">
          <li>${t.step1}</li>
          <li>${t.step2}</li>
          <li>${t.step3}</li>
        </ol>

        <p style="font-size:13.5px;line-height:1.7;color:#6a5d57;margin-top:32px;">${t.help}</p>
        <p style="font-size:14px;color:#4a3f3a;margin-top:26px;">${t.signature}<br><em>Maison à la Rose</em></p>
      </div>
    </div>
  </div>
  `;
}
