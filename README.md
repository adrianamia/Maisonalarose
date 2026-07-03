# Maison à la Rose — eigener Shop (Stripe + automatische E-Mail)

Diese Website nimmt Zahlungen selbst entgegen (über Stripe) und verschickt
danach **automatisch** eine E-Mail mit dem Canva-Link und deinem Dankestext.
Kein Gumroad, kein Zapier-Abo — nur Stripe-Gebühren (ca. 1,5 %–2,9 % + 0,25 € pro Verkauf).

## Was du am Ende hast

1. `public/index.html` (Englisch, Standard) / `index-fr.html` (Französisch) — deine Website
2. `public/merci.html` — Danke-Seite nach dem Kauf
3. `api/create-checkout-session.js` — öffnet die Stripe-Zahlungsseite
4. `api/webhook.js` — verschickt die E-Mail automatisch nach erfolgreicher Zahlung
5. `lib/products.js` — hier trägst du deine Produkte, Preise und Canva-Links ein

---

## Schritt 1 — Canva-Links vorbereiten

Für jedes Produkt brauchst du einen **"Vorlage"-Link**, damit der Kunde eine
eigene Kopie bekommt (statt dein Original zu bearbeiten):

1. Design in Canva öffnen
2. Oben rechts auf **Teilen**
3. **"Link zum Bearbeiten"** wählen, dann den Schalter **"Als Vorlage verwenden"**
   (bzw. "Enable template link") aktivieren
4. Diesen Link kopieren

So sieht der Kunde beim Öffnen den Button "Vorlage verwenden" und bearbeitet
nur seine eigene Kopie — dein Original bleibt unberührt.

## Schritt 2 — Produkte eintragen

Öffne `lib/products.js` und trage für jedes Produkt ein:
- `priceCents` (Preis in Cent, z. B. 1900 = 19,00 €)
- `canvaLink` (Link aus Schritt 1)
- `thankYouFr` / `thankYouEn` (dein persönlicher Dankestext)

## Schritt 3 — Stripe-Account einrichten

1. Auf [stripe.com](https://stripe.com) registrieren (kostenlos)
2. Unternehmensdaten hinterlegen (nötig, bevor du live gehen kannst)
3. Gehe zu **Entwickler → API-Schlüssel** und kopiere den **Geheimen Schlüssel**
   (`sk_live_...` bzw. `sk_test_...` zum Testen)

## Schritt 4 — Resend-Account einrichten (E-Mail-Versand)

1. Auf [resend.com](https://resend.com) registrieren (kostenlos bis 100 Mails/Tag,
   bzw. 3.000/Monat)
2. Deine Domain hinzufügen und die angezeigten DNS-Einträge bei deinem
   Domain-Anbieter eintragen (verifiziert deine Absenderadresse, dauert oft
   nur ein paar Minuten)
3. Unter **API Keys** einen neuen Schlüssel erstellen und kopieren (`re_...`)

## Schritt 5 — Projekt auf Vercel deployen

1. Lade diesen Ordner in ein GitHub-Repository hoch (oder nutze `vercel` CLI
   direkt ohne GitHub — sag Bescheid, falls du das lieber so möchtest)
2. Auf [vercel.com](https://vercel.com) einloggen → **Add New Project** →
   Repository auswählen → Deploy
3. Unter **Project Settings → Environment Variables** folgende Werte eintragen:

   | Name | Wert |
   |---|---|
   | `STRIPE_SECRET_KEY` | dein Stripe Secret Key |
   | `STRIPE_WEBHOOK_SECRET` | kommt in Schritt 6 |
   | `RESEND_API_KEY` | dein Resend API Key |
   | `SENDER_EMAIL` | z. B. `Maison à la Rose <bonjour@deinedomain.de>` |
   | `SITE_URL` | deine Live-Domain, z. B. `https://maisonalarose.com` |

4. Nach dem ersten Deploy bekommst du eine URL wie `maison-shop.vercel.app`
   — später kannst du deine eigene Domain in den Vercel-Einstellungen verbinden

## Schritt 6 — Stripe-Webhook verbinden

Das ist der Schritt, der die automatische E-Mail erst zum Laufen bringt:

1. In Stripe: **Entwickler → Webhooks → Endpunkt hinzufügen**
2. Als URL einträgst du: `https://deine-domain.de/api/webhook`
3. Als Event wählst du: `checkout.session.completed`
4. Speichern — Stripe zeigt dir jetzt ein **Signing secret** (`whsec_...`)
5. Dieses Secret trägst du bei Vercel unter `STRIPE_WEBHOOK_SECRET` ein
6. Vercel-Projekt einmal neu deployen, damit die neue Variable greift

## Schritt 7 — Testen

1. Stripe hat einen **Testmodus** (Schalter oben rechts im Dashboard)
2. Im Testmodus bekommst du einen `sk_test_...`-Schlüssel — den kannst du
   testweise in `STRIPE_SECRET_KEY` eintragen
3. Testkarte für den Kauf: `4242 4242 4242 4242`, beliebiges zukünftiges
   Datum, beliebige CVC
4. Kauf durchführen → prüfen, ob die E-Mail ankommt und der Canva-Link stimmt
5. Wenn alles funktioniert: `sk_live_...`-Schlüssel eintragen und live gehen

---

## Laufende Kosten (Stand heute)

- **Stripe**: keine Grundgebühr, nur ca. 1,5–2,9 % + 0,25 € pro Verkauf
- **Resend**: kostenlos bis 3.000 E-Mails/Monat
- **Vercel**: kostenlos für dieses Projektvolumen

Das heißt: Solange du nichts verkaufst, zahlst du **nichts**.

## Falls etwas nicht funktioniert

- **Keine E-Mail kommt an**: Prüfe in Stripe unter Webhooks, ob der Aufruf
  erfolgreich war (grüner Haken). Prüfe bei Resend unter "Logs", ob die
  E-Mail verschickt wurde.
- **Fehler beim Klick auf "Acheter"**: Meist fehlt `STRIPE_SECRET_KEY` bei
  Vercel oder das Projekt wurde nach dem Eintragen nicht neu deployt.

Wenn du an einer Stelle hängen bleibst — schick mir einfach die
Fehlermeldung, dann schauen wir gemeinsam drauf.
