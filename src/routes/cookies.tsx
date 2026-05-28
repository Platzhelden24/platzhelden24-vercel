import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookies – Platzhelden24" },
      { name: "description", content: "Informationen zur Cookie-Nutzung bei Platzhelden24." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <h1 className="text-display text-5xl text-brand-navy">Cookie-Hinweise</h1>
      <div className="mt-8 space-y-6 leading-relaxed">
        <p>
          Diese Website verwendet ausschließlich technisch notwendige Cookies, die
          für die Bereitstellung der Seite erforderlich sind. Es werden keine
          Tracking- oder Marketing-Cookies eingesetzt.
        </p>
        <h2 className="text-xl font-bold text-brand-navy">Welche Cookies werden verwendet?</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Session-Cookies zur korrekten Darstellung des Formulars</li>
          <li>Einstellungs-Cookies zur Speicherung Ihrer Auswahl im Anfrageformular</li>
        </ul>
        <h2 className="text-xl font-bold text-brand-navy">Cookies verwalten</h2>
        <p>
          Sie können Cookies in den Einstellungen Ihres Browsers verwalten oder
          löschen. Eine Deaktivierung kann jedoch dazu führen, dass einige
          Funktionen unserer Website eingeschränkt nutzbar sind.
        </p>
      </div>
    </div>
  );
}
