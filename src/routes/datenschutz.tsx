import { createFileRoute } from "@tanstack/react-router";
import { COMPANY } from "@/lib/contact";

export const Route = createFileRoute("/datenschutz")({
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <h1 className="text-display text-5xl text-brand-navy">Datenschutzerklärung</h1>
      <div className="mt-8 space-y-6 text-foreground">
        <Sec title="1. Verantwortlicher">
          {COMPANY.name}, Inhaber {COMPANY.owner}, {COMPANY.street}, {COMPANY.zip} {COMPANY.city}. Telefon: {COMPANY.phone}, E-Mail: {COMPANY.email}.
        </Sec>
        <Sec title="2. Erhebung und Verarbeitung personenbezogener Daten">
          Wir verarbeiten Ihre personenbezogenen Daten ausschließlich zur Bearbeitung Ihrer Anfrage und zur Erbringung unserer Leistungen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
        </Sec>
        <Sec title="3. Anfrageformular">
          Bei einer Kontaktanfrage über unser Formular werden die von Ihnen eingegebenen Daten (Name, Telefon, E-Mail, Adresse, Beschreibung, hochgeladene Bilder) zur Bearbeitung Ihrer Anfrage gespeichert und genutzt. Der Versand per WhatsApp erfolgt direkt aus Ihrem Browser. Bei E-Mail-Versand werden die Daten verschlüsselt über den Dienst Resend (resend.com) weitergeleitet und nicht dauerhaft gespeichert.
        </Sec>
        <Sec title="4. E-Mail-Versand über Resend">
          Für den serverseitigen E-Mail-Versand nutzen wir den Dienst Resend (Resend Inc., USA). Die Übertragung erfolgt verschlüsselt. Resend verarbeitet die Daten ausschließlich zur Zustellung der E-Mail. Weitere Informationen: https://resend.com/privacy
        </Sec>
        <Sec title="5. Cookies">
          Diese Website verwendet ausschließlich technisch notwendige Cookies sowie ein Cookie zur Speicherung Ihrer Cookie-Einwilligung (localStorage). Es werden keine Tracking- oder Marketing-Cookies eingesetzt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
        </Sec>
        <Sec title="6. Speicherdauer">
          Wir speichern Ihre Daten nur so lange, wie dies zur Bearbeitung Ihrer Anfrage und zur Erfüllung gesetzlicher Aufbewahrungsfristen erforderlich ist.
        </Sec>
        <Sec title="7. Ihre Rechte (Art. 15–21 DSGVO)">
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Wenden Sie sich hierzu an: {COMPANY.email}
        </Sec>
        <Sec title="8. Beschwerderecht">
          Sie haben das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren. In NRW: Landesbeauftragte für Datenschutz und Informationsfreiheit NRW, www.ldi.nrw.de
        </Sec>
        <Sec title="9. SSL-Verschlüsselung">
          Diese Website nutzt eine SSL/TLS-Verschlüsselung zum Schutz der Datenübertragung. Eine verschlüsselte Verbindung erkennen Sie am „https://" in der Browserzeile.
        </Sec>
        <Sec title="10. Hosting">
          Diese Website wird gehostet bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. Vercel kann beim Aufruf der Website automatisch Server-Logfiles speichern. Weitere Infos: https://vercel.com/legal/privacy-policy
        </Sec>
        <p className="text-sm text-muted-foreground">Stand: Januar 2026</p>
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
