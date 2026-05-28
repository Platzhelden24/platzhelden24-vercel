import { createFileRoute } from "@tanstack/react-router";
import { COMPANY } from "@/lib/contact";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Platzhelden24" },
      { name: "description", content: "Informationen zum Datenschutz bei Platzhelden24." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <h1 className="text-display text-5xl text-brand-navy">Datenschutzerklärung</h1>
      <div className="mt-8 space-y-6 text-foreground">
        <Sec title="1. Verantwortlicher">
          {COMPANY.name}, Inhaber {COMPANY.owner}, {COMPANY.street}, {COMPANY.zip}{" "}
          {COMPANY.city}. Telefon: {COMPANY.phone}, E-Mail: {COMPANY.email}.
        </Sec>
        <Sec title="2. Erhebung und Verarbeitung personenbezogener Daten">
          Wir verarbeiten Ihre personenbezogenen Daten ausschließlich zur
          Bearbeitung Ihrer Anfrage und zur Erbringung unserer Leistungen.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
        </Sec>
        <Sec title="3. Anfrageformular">
          Bei einer Kontaktanfrage über unser Formular werden die von Ihnen
          eingegebenen Daten (Name, Kontaktdaten, Adresse, Beschreibung,
          hochgeladene Bilder) zur Bearbeitung Ihrer Anfrage genutzt. Der Versand
          erfolgt direkt aus Ihrem Browser über WhatsApp oder Ihren E-Mail-Client –
          es findet keine Zwischenspeicherung auf unseren Servern statt.
        </Sec>
        <Sec title="4. Speicherdauer">
          Wir speichern Ihre Daten nur so lange, wie dies zur Bearbeitung Ihrer
          Anfrage und zur Erfüllung gesetzlicher Aufbewahrungsfristen erforderlich
          ist.
        </Sec>
        <Sec title="5. Ihre Rechte">
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch.
          Wenden Sie sich hierzu an die oben genannten Kontaktdaten.
        </Sec>
        <Sec title="6. Beschwerderecht">
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über
          die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
        </Sec>
        <Sec title="7. SSL-Verschlüsselung">
          Diese Website nutzt eine SSL-Verschlüsselung zum Schutz der
          Datenübertragung.
        </Sec>
      </div>
    </div>
  );
}

function Sec({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-brand-navy">{title}</h2>
      <p className="mt-2 leading-relaxed">{children}</p>
    </section>
  );
}
