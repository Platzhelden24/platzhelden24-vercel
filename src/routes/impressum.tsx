import { createFileRoute } from "@tanstack/react-router";
import { COMPANY } from "@/lib/contact";

export const Route = createFileRoute("/impressum")({
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
          <h2 className="text-xl font-bold text-brand-navy">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p className="mt-2">{COMPANY.owner}, {COMPANY.street}, {COMPANY.zip} {COMPANY.city}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-brand-navy">Streitschlichtung</h2>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a className="text-brand-green underline" href="https://ec.europa.eu/consumers/odr">
              https://ec.europa.eu/consumers/odr
            </a>. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-brand-navy">Haftung für Inhalte</h2>
          <p className="mt-2">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-brand-navy">Haftung für Links</h2>
          <p className="mt-2">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-brand-navy">Urheberrecht</h2>
          <p className="mt-2">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
        <p className="text-sm text-muted-foreground">Stand: Januar 2026</p>
      </div>
    </div>
  );
}
