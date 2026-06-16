import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { LOCATIONS, REGION_ORDER } from "@/lib/locations";
import { usePageSEO } from "@/lib/seo";
import { COMPANY } from "@/lib/contact";

export const Route = createFileRoute("/standorte/")({
  component: Page,
});

function Page() {
  usePageSEO(
    "Unsere Standorte – Entrümpelung im gesamten Niederrhein | Platzhelden24",
    "Platzhelden24 bietet Entrümpelung und Haushaltsauflösung im gesamten Niederrhein – von Kleve über Wesel bis Duisburg. Festpreis, besenrein, Angebot in 24h."
  );

  return (
    <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-widest text-brand-green">
        Standorte
      </p>
      <h1 className="mt-3 text-display text-4xl text-brand-navy md:text-5xl">
        Entrümpelung im gesamten Niederrhein
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Platzhelden24 ist Ihr regionaler Partner für Entrümpelung, Haushaltsauflösung
        und Wohnungsauflösung am gesamten Niederrhein. Von unserem Standort in Kleve
        aus sind wir in folgenden Städten und Gemeinden für Sie im Einsatz – immer
        zum Festpreis, termintreu und besenrein.
      </p>

      <div className="mt-12 space-y-12">
        {REGION_ORDER.map((region) => (
          <div key={region}>
            <h2 className="mb-5 text-2xl font-bold text-brand-navy">{region}</h2>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {LOCATIONS.filter((l) => l.region === region).map((loc) => (
                <Link
                  key={loc.slug}
                  to="/standorte/$city"
                  params={{ city: loc.slug }}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card px-4 py-3 transition hover:border-brand-green hover:shadow-brand"
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                    <MapPin className="h-4 w-4 text-brand-green" />
                    Entrümpelung {loc.name}
                  </span>
                  <ArrowRight className="h-4 w-4 text-brand-green opacity-0 transition group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-brand-navy p-8 text-center text-white">
        <h2 className="text-display text-2xl">Ihre Stadt ist nicht dabei?</h2>
        <p className="mt-2 text-white/75">
          Kein Problem – kontaktieren Sie uns einfach. Wir prüfen gerne, ob wir
          auch in Ihrer Region helfen können.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={`tel:${COMPANY.phoneIntl}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 font-bold text-white transition hover:brightness-95"
          >
            <Phone className="h-4 w-4" /> {COMPANY.phone}
          </a>
          <a
            href="/#anfrage"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
          >
            Kostenlos anfragen
          </a>
        </div>
      </div>
    </div>
  );
}
