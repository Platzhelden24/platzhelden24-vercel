import { createFileRoute } from "@tanstack/react-router";
import { COMPANY } from "@/lib/contact";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB – Platzhelden24" },
      { name: "description", content: "Allgemeine Geschäftsbedingungen von Platzhelden24." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <h1 className="text-display text-5xl text-brand-navy">Allgemeine Geschäftsbedingungen</h1>
      <div className="mt-8 space-y-6 text-foreground">
        <Sec title="§ 1 Geltungsbereich">
          Diese Allgemeinen Geschäftsbedingungen gelten für alle
          Dienstleistungsverträge, die zwischen {COMPANY.name}, Inhaber {COMPANY.owner},
          und dem Auftraggeber geschlossen werden.
        </Sec>
        <Sec title="§ 2 Vertragsabschluss">
          Angebote von {COMPANY.name} sind freibleibend. Der Vertrag kommt durch
          schriftliche oder fernmündliche Auftragsbestätigung zustande.
        </Sec>
        <Sec title="§ 3 Leistungen">
          Der Leistungsumfang ergibt sich aus dem Angebot bzw. der
          Auftragsbestätigung. Mehrleistungen werden nach Aufwand abgerechnet,
          sofern nichts anderes vereinbart ist.
        </Sec>
        <Sec title="§ 4 Preise und Zahlungsbedingungen">
          Es gelten die im Angebot genannten Festpreise inklusive der gesetzlichen
          Umsatzsteuer. Die Zahlung erfolgt nach erfolgter Leistung.
        </Sec>
        <Sec title="§ 5 Mitwirkungspflichten">
          Der Auftraggeber sichert zu, dass er Eigentümer der zu entsorgenden
          Gegenstände ist oder die ausdrückliche Erlaubnis des Eigentümers besitzt.
        </Sec>
        <Sec title="§ 6 Haftung">
          {COMPANY.name} haftet für Schäden nur bei Vorsatz und grober
          Fahrlässigkeit im Rahmen der gesetzlichen Bestimmungen. Eine
          Haftpflichtversicherung besteht.
        </Sec>
        <Sec title="§ 7 Stornierung">
          Bei Stornierung weniger als 48 Stunden vor dem vereinbarten Termin
          behalten wir uns vor, eine Aufwandspauschale zu berechnen.
        </Sec>
        <Sec title="§ 8 Schlussbestimmungen">
          Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne
          Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen
          Bestimmungen unberührt.
        </Sec>
        <p className="text-sm text-muted-foreground">
          Stand: {new Date().toLocaleDateString("de-DE")}
        </p>
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
