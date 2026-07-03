import Stripe from "stripe";
import { products } from "../lib/products.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { productId, lang } = req.body || {};
    const product = products[productId];

    if (!product) {
      return res.status(400).json({ error: "Produit inconnu" });
    }

    const L = ["en", "fr", "es", "it"].includes(lang) ? lang : "en";
    const nameKey = "name" + L.charAt(0).toUpperCase() + L.slice(1);
    // index.html = Englisch (Standard), alle anderen Sprachen haben ein
    // eigenes Präfix-File: index-fr.html, index-es.html, index-it.html
    const pageFile = L === "en" ? "index.html" : `index-${L}.html`;
    const siteUrl = process.env.SITE_URL || `https://${req.headers.host}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: product.currency,
            product_data: {
              name: product[nameKey],
            },
            unit_amount: product.priceCents,
          },
          quantity: 1,
        },
      ],
      // On demande l'email même si Stripe le collecte déjà normalement
      customer_creation: "always",
      success_url: `${siteUrl}/merci.html?session_id={CHECKOUT_SESSION_ID}&lang=${L}`,
      cancel_url: `${siteUrl}/${pageFile}`,
      metadata: {
        productId: product.id,
        lang: L,
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Erreur création session Stripe:", err);
    return res.status(500).json({ error: "Erreur serveur" });
  }
}
