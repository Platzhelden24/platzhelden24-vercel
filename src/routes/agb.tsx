import { createFileRoute } from "@tanstack/react-router";
import { COMPANY } from "@/lib/contact";

export const Route = createFileRoute("/agb")({
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <h1 className="text-display text-5xl text-brand-navy">Allgemeine Geschäftsbedingungen</h1>
      <div className="mt-8 space-y-6 text-foreground">
        <Sec title="§ 1 Geltungsbereich">
          Diese Allgemeinen Geschäftsbedingungen gelten für alle Dienstleistungsverträge, die zwischen {COMPANY.name}, Inhaber {COMPANY.owner}, und dem Auftraggeber geschlossen werden. Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, wir stimmen ihrer Geltung ausdrücklich schriftlich zu.
        </Sec>
        <Sec title="§ 2 Vertragsabschluss">
          Angebote von {COMPANY.name} sind freibleibend und unverbindlich. Der Vertrag kommt durch schriftliche oder fernmündliche Auftragsbestätigung zustande. Anfragen über das Online-Formular stellen noch kein verbindliches Angebot dar.
        </Sec>
        <Sec title="§ 3 Leistungen">
          Der Leistungsumfang ergibt sich aus dem individuellen Angebot bzw. der Auftragsbestätigung. Mehrleistungen, die nicht im Angebot enthalten sind, werden nach tatsächlichem Aufwand abgerechnet, sofern nichts anderes schriftlich vereinbart ist.
        </Sec>
        <Sec title="§ 4 Preise und Zahlungsbedingungen">
          Es gelten die im Angebot genannten Festpreise. Die Zahlung erfolgt nach erfolgter Leistung in bar oder per Überweisung. Bei Zahlungsverzug sind wir berechtigt, Verzugszinsen gemäß § 288 BGB zu berechnen.
        </Sec>
        <Sec title="§ 5 Mitwirkungspflichten des Auftraggebers">
          Der Auftraggeber sichert zu, dass er Eigentümer der zu entsorgenden Gegenstände ist oder die ausdrückliche Erlaubnis des Eigentümers besitzt. Gegenstände mit besonderem Wert oder rechtlicher Relevanz sind vor Ausführung des Auftrags zu kennzeichnen.
        </Sec>
        <Sec title="§ 6 Haftung">
          {COMPANY.name} haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit im Rahmen der gesetzlichen Bestimmungen. Die Haftung für leichte Fahrlässigkeit ist – soweit gesetzlich zulässig – ausgeschlossen. Eine Haftpflichtversicherung besteht.
        </Sec>
        <Sec title="§ 7 Stornierung und Rücktritt">
          Bei Stornierung weniger als 48 Stunden vor dem vereinbarten Termin behalten wir uns vor, eine Aufwandspauschale von bis zu 20 % des vereinbarten Auftragswertes zu berechnen. Ein Rücktrittsrecht des Auftraggebers nach fernabsatzrechtlichen Vorschriften bleibt unberührt.
        </Sec>
        <Sec title="§ 8 Datenschutz">
          Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung und den geltenden Bestimmungen der DSGVO.
        </Sec>
        <Sec title="§ 9 Schlussbestimmungen">
          Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Kleve. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
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
