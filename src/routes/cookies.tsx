import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <h1 className="text-display text-5xl text-brand-navy">Cookie-Richtlinie</h1>
      <div className="mt-8 space-y-6 leading-relaxed">
        <p>Stand: Januar 2026</p>
        <h2 className="text-xl font-bold text-brand-navy">1. Was sind Cookies?</h2>
        <p>Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät gespeichert werden.</p>

        <h2 className="text-xl font-bold text-brand-navy">2. Welche Cookies verwenden wir?</h2>
        <p>Diese Website verwendet ausschließlich technisch notwendige Cookies sowie einen localStorage-Eintrag zur Speicherung Ihrer Cookie-Einwilligung. Es werden keine Tracking-, Analyse- oder Marketing-Cookies eingesetzt.</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>cookie-consent</strong> – Speichert Ihre Entscheidung zur Cookie-Einwilligung (localStorage). Laufzeit: unbegrenzt bis zur manuellen Löschung.</li>
        </ul>

        <h2 className="text-xl font-bold text-brand-navy">3. Rechtsgrundlage</h2>
        <p>Die Verwendung technisch notwendiger Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb der Website).</p>

        <h2 className="text-xl font-bold text-brand-navy">4. Cookies verwalten oder löschen</h2>
        <p>Sie können Cookies und localStorage-Einträge jederzeit in den Einstellungen Ihres Browsers löschen. Anleitungen finden Sie in der Hilfe Ihres Browsers.</p>

        <h2 className="text-xl font-bold text-brand-navy">5. Einwilligung widerrufen</h2>
        <p>Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den Eintrag „cookie-consent" in Ihrem Browser-localStorage löschen. Danach erscheint der Cookie-Banner erneut.</p>
      </div>
    </div>
  );
}
