import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ – Häufige Fragen zur Entrümpelung | Platzhelden24" },
      { name: "description", content: "Antworten auf die häufigsten Fragen zur Entrümpelung, Festpreis, Ablauf, Wertgegenständen und mehr." },
    ],
  }),
  component: Page,
});

const faqs = [
  {
    q: "Wie schnell bekomme ich ein Angebot?",
    a: "In der Regel innerhalb von 24 Stunden nach Ihrer Anfrage. Bei Bildern oder einem kurzen Video-Call geht es noch schneller.",
  },
  {
    q: "Ist der Preis wirklich ein Festpreis?",
    a: "Was wir vor Ort anbieten, gilt verbindlich – ohne versteckte Kosten oder nachträgliche Aufschläge. Angebote anhand von Bildern sind unverbindlich und werden bei Bedarf vor Ort final bestätigt.",
  },
  {
    q: "Was kostet eine Entrümpelung?",
    a: "Der Preis hängt von Größe, Menge, Zugänglichkeit und Entsorgungsaufwand ab. Eine 2-Zimmer-Wohnung beginnt häufig bei einem niedrigen dreistelligen Bereich – das Angebot ist immer kostenlos.",
  },
  {
    q: "Räumt ihr auch Messie-Wohnungen?",
    a: "Ja, diskret, geruchsneutral und ohne Vorurteile. Wir sind solche Aufträge gewohnt und arbeiten mit Schutzkleidung und Spezialequipment.",
  },
  {
    q: "Wie schnell kann der Termin stattfinden?",
    a: "Oft schon innerhalb von 48 Stunden. Bei dringenden Räumungen (z. B. Mietende) sind wir auch sehr kurzfristig für Sie da.",
  },
  {
    q: "Übernehmt ihr auch die Entsorgung von Sondermüll?",
    a: "Ja. Wir entsorgen alles fachgerecht – inklusive Elektrogeräten, Batterien, Farben, Lacken und anderen Sondermüll.",
  },
  {
    q: "Bleibt die Wohnung nach der Räumung wirklich besenrein?",
    a: "Selbstverständlich. „Besenrein“ ist bei uns Standard – auf Wunsch übernehmen wir auch Endreinigung, Bodenpflege oder kleine Renovierungsarbeiten.",
  },
  {
    q: "In welchem Gebiet seid ihr aktiv?",
    a: "Wir arbeiten in Kleve und im gesamten Kreis Kleve – u. a. Goch, Emmerich, Kalkar, Bedburg-Hau, Kranenburg sowie weiteren Orten am Niederrhein.",
  },
  {
    q: "Seid ihr versichert?",
    a: "Ja, wir sind vollumfänglich haftpflicht- und transportversichert. Ihre Räume und Ihre Nachbarschaft sind bei uns in sicheren Händen.",
  },
  {
    q: "Muss ich beim Termin anwesend sein?",
    a: "Nicht zwingend. Viele Kunden geben uns die Schlüssel oder vereinbaren ein kurzes Übergabe-Treffen am Anfang und Ende.",
  },
  {
    q: "Wie kann ich bezahlen?",
    a: "Sie können bequem per Überweisung oder in bar nach Abschluss der Arbeiten bezahlen.",
  },
];

function Page() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-widest text-brand-green">FAQ</p>
      <h1 className="mt-3 text-display text-5xl text-brand-navy">Häufige Fragen.</h1>
      <p className="mt-3 text-muted-foreground">
        Antworten auf die wichtigsten Fragen rund um Ihre Entrümpelung.
      </p>
      <div className="mt-10 space-y-3">
        {faqs.map((f, i) => <Item key={i} q={f.q} a={f.a} />)}
      </div>
    </div>
  );
}

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-semibold text-brand-navy">{q}</span>
        <ChevronDown className={`h-5 w-5 text-brand-green transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-border bg-muted/30 px-5 py-4 text-sm leading-relaxed text-foreground">{a}</div>}
    </div>
  );
}
