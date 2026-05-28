import { createFileRoute } from "@tanstack/react-router";
import { COMPANY } from "@/lib/contact";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Platzhelden24" },
      { name: "description", content: "Impressum von Platzhelden24, Inhaber Granit Brovina, Kleve." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <h1 className="text-display text-5xl text-brand-navy">Impressum</h1>
      <div className="prose prose-neutral mt-8 max-w-none space-y-6 text-foreground">
        <section>
          <h2 className="text-xl font-bold text-brand-navy">Angaben gemäß § 5 TMG</h2>
          <p className="mt-2">
            {COMPANY.name}<br />
            Inhaber: {COMPANY.owner}<br />
            {COMPANY.street}<br />
            {COMPANY.zip} {COMPANY.city}
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-brand-navy">Kontakt</h2>
          <p className="mt-2">
            Telefon: {COMPANY.phone}<br />
            E-Mail: {COMPANY.email}
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-brand-navy">Umsatzsteuer-ID</h2>
          <p className="mt-2 text-muted-foreground">[Bitte ergänzen, sofern vorhanden]</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-brand-navy">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="mt-2">{COMPANY.owner}, {COMPANY.street}, {COMPANY.zip} {COMPANY.city}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-brand-navy">Streitschlichtung</h2>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a className="text-brand-green underline" href="https://ec.europa.eu/consumers/odr">
              https://ec.europa.eu/consumers/odr
            </a>. Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-brand-navy">Haftung für Inhalte</h2>
          <p className="mt-2">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            Verpflichtungen zur Entfernung oder Sperrung von Informationen nach
            allgemeinen Gesetzen bleiben hiervon unberührt.
          </p>
        </section>
      </div>
    </div>
  );
}
