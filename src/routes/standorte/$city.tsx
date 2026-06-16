import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin, ArrowRight, Phone, MessageCircle, CheckCircle2,
  Home, Building2, Warehouse, Recycle, Boxes, Trash2,
} from "lucide-react";
import { LOCATIONS } from "@/lib/locations";
import { usePageSEO } from "@/lib/seo";
import { COMPANY } from "@/lib/contact";
import { AnfrageForm } from "@/components/AnfrageForm";

export const Route = createFileRoute("/standorte/$city")({
  component: CityPage,
});

const services = [
  { icon: Home, title: "Wohnungsauflösung" },
  { icon: Building2, title: "Haushaltsauflösung" },
  { icon: Warehouse, title: "Keller- & Dachbodenentrümpelung" },
  { icon: Recycle, title: "Fachgerechte Entsorgung" },
  { icon: Boxes, title: "Messie-Entrümpelung" },
  { icon: Trash2, title: "Gewerbeentrümpelung" },
];

// Mehrere Textvarianten für mehr Abwechslung zwischen den Seiten
const introVariants = [
  (name: string, note: string) =>
    `Sie suchen eine zuverlässige Entrümpelungsfirma in ${name}? Platzhelden24 übernimmt für Sie die komplette Wohnungsauflösung, Haushaltsauflösung oder Kellerentrümpelung in ${name} – ${note}. Wir arbeiten zum verbindlichen Festpreis, termintreu und übergeben jedes Objekt besenrein.`,
  (name: string, note: string) =>
    `Egal ob Wohnungsauflösung, Haushaltsauflösung oder Kellerentrümpelung – Platzhelden24 ist Ihr Ansprechpartner für Entrümpelung in ${name} und Umgebung. ${name} ist ${note}, und wir kennen die Region genau. Sie erhalten von uns einen transparenten Festpreis ohne versteckte Kosten.`,
  (name: string, note: string) =>
    `Platzhelden24 bietet professionelle Entrümpelung in ${name} – von der Wohnungsauflösung bis zur Haushaltsauflösung bei Erbschaft oder Umzug. ${name}, ${note}, gehört zu unserem festen Einsatzgebiet. Festpreis-Garantie, besenreine Übergabe und ein Angebot innerhalb von 24 Stunden inklusive.`,
  (name: string, note: string) =>
    `Eine Entrümpelung in ${name} muss nicht stressig sein. Platzhelden24 übernimmt für Sie die komplette Organisation – von der Besichtigung bis zur besenreinen Übergabe. ${name}, ${note}, liegt in unserem regelmäßigen Einsatzgebiet am Niederrhein.`,
];

const whyVariants = [
  (name: string) =>
    `Als Familienbetrieb aus Kleve sind wir regelmäßig in ${name} und der näheren Umgebung im Einsatz. Sie profitieren von kurzen Wegen, schneller Terminvergabe und einem Team, das die Region und ihre Besonderheiten kennt.`,
  (name: string) =>
    `Unsere Kunden in ${name} schätzen vor allem die Verbindlichkeit unserer Festpreise und die saubere, besenreine Übergabe nach jeder Entrümpelung. Wir sind vollständig haftpflicht- und transportversichert.`,
  (name: string) =>
    `In ${name} legen wir besonderen Wert auf Diskretion und einen respektvollen Umgang mit Ihrem Eigentum – egal ob bei einer normalen Wohnungsauflösung oder einer sensiblen Haushaltsauflösung nach einem Todesfall.`,
  (name: string) =>
    `Von der ersten Anfrage bis zur Schlüsselübergabe sind wir in ${name} für Sie da. Innerhalb von 24 Stunden erhalten Sie ein unverbindliches Angebot, Termine sind oft schon innerhalb wenige Tage möglich.`,
];

function CityPage() {
  const { city } = Route.useParams();
  const location = LOCATIONS.find((l) => l.slug === city);

  if (!location) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="text-display text-4xl text-brand-navy">
          Standort nicht gefunden
        </h1>
        <p className="mt-4 text-muted-foreground">
          Diese Seite existiert leider nicht.
        </p>
        <Link
          to="/standorte"
          className="mt-6 inline-block rounded-full bg-brand-green px-6 py-3 font-bold text-white"
        >
          Zur Standortübersicht
        </Link>
      </div>
    );
  }

  const index = LOCATIONS.findIndex((l) => l.slug === city);
  const intro = introVariants[index % introVariants.length](location.name, location.note);
  const why = whyVariants[(index + 1) % whyVariants.length](location.name);

  const otherInRegion = LOCATIONS.filter(
    (l) => l.region === location.region && l.slug !== location.slug
  ).slice(0, 6);

  usePageSEO(
    `Entrümpelung ${location.name} | Haushaltsauflösung zum Festpreis – Platzhelden24`,
    `Professionelle Entrümpelung & Haushaltsauflösung in ${location.name}. Festpreis-Garantie, besenrein, Angebot in 24h. Jetzt kostenlos anfragen!`
  );

  const distanceText =
    location.distanceKm === 0
      ? "direkt bei uns vor Ort in Kleve"
      : `nur ca. ${location.distanceKm} km von unserem Standort in Kleve entfernt`;

  return (
    <div>
      {/* HERO */}
      <section className="bg-radial-brand text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
          <div className="mb-3 flex items-center gap-2 text-sm text-white/70">
            <Link to="/standorte" className="hover:text-brand-green">
              Standorte
            </Link>
            <span>/</span>
            <span>{location.name}</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-green">
            <MapPin className="h-3.5 w-3.5" />
            {location.region}
          </div>
          <h1 className="mt-4 text-display text-3xl sm:text-4xl md:text-5xl">
            Entrümpelung {location.name}
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">{intro}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#anfrage"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-4 font-bold text-white shadow-brand transition hover:brightness-95"
            >
              Kostenlos anfragen <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={`tel:${COMPANY.phoneIntl}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 font-bold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Phone className="h-5 w-5 text-brand-green" /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
        <h2 className="text-2xl font-bold text-brand-navy">
          Unsere Leistungen in {location.name}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-brand-navy">
                {s.title}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold text-brand-navy">
            Warum Platzhelden24 in {location.name}?
          </h2>
          <p className="mt-3 text-muted-foreground">{why}</p>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-green" />
              Verbindlicher Festpreis ohne versteckte Kosten
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-green" />
              Angebot innerhalb von 24 Stunden
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-green" />
              Besenreine Übergabe garantiert
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-green" />
              Vollversichert (Haftpflicht & Transport)
            </li>
          </ul>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          {location.name} liegt {distanceText} und gehört zu unserem festen
          Einsatzgebiet am Niederrhein. Egal ob Sie eine Wohnung auflösen,
          einen Keller entrümpeln oder eine komplette Haushaltsauflösung nach
          einer Erbschaft benötigen – wir sind für Sie da.
        </p>
      </section>

      {/* WEITERE STANDORTE */}
      {otherInRegion.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 pb-14 lg:px-8">
          <h2 className="text-lg font-bold text-brand-navy">
            Entrümpelung auch in diesen Städten ({location.region})
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherInRegion.map((loc) => (
              <Link
                key={loc.slug}
                to="/standorte/$city"
                params={{ city: loc.slug }}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-green hover:text-brand-green"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA + FORM */}
      <section
        id="anfrage"
        className="mx-auto max-w-5xl px-5 py-14 lg:px-8"
      >
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-green sm:text-sm">
            Kostenlose Anfrage
          </p>
          <h2 className="mt-3 text-display text-3xl text-brand-navy sm:text-4xl">
            Jetzt Entrümpelung in {location.name} anfragen
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Füllen Sie das Formular aus, laden Sie Bilder hoch und senden Sie
            alles mit einem Klick per WhatsApp oder E-Mail.
          </p>
        </div>
        <AnfrageForm />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Lieber direkt schreiben?{" "}
          <a
            href={`https://wa.me/${COMPANY.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-brand-green underline"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </p>
      </section>
    </div>
  );
}
