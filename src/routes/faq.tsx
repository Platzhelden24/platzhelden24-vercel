import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  component: Page,
});

const faqs = [
  {
    category: "Kosten & Preise",
    items: [
      {
        q: "Was kostet eine Entrümpelung in Kleve?",
        a: "Die Kosten hängen von der Größe des Objekts, der Menge der Gegenstände und dem Aufwand ab. Nach einer kostenlosen Besichtigung oder anhand Ihrer Fotos erstellen wir einen verbindlichen Festpreis – ohne versteckte Kosten. Eine Kellerentrümpelung beginnt bereits ab einigen hundert Euro, eine komplette Haushaltsauflösung liegt je nach Umfang im vierstelligen Bereich.",
      },
      {
        q: "Was ist im Festpreis enthalten?",
        a: "Im Festpreis enthalten sind: Demontage und Abbau von Möbeln, das Tragen und Verladen aller Gegenstände, die fachgerechte Entsorgung und Mülltrennung sowie die besenreine Übergabe. Auf Wunsch auch Reinigung gegen Aufpreis.",
      },
      {
        q: "Gibt es versteckte Kosten?",
        a: "Nein. Unser verbindlicher Festpreis gilt – ohne Überraschungen. Zusatzkosten entstehen nur, wenn sich der Umfang nach der Besichtigung erheblich ändert und wir das gemeinsam besprechen.",
      },
      {
        q: "Kann der Wert von verwertbaren Gegenständen verrechnet werden?",
        a: "Ja, in vielen Fällen. Wenn verwertbare Möbel, Antiquitäten oder Elektrogeräte vorhanden sind, prüfen wir deren Wert und verrechnen diesen mit dem Entrümpelungspreis. Sprechen Sie uns darauf an.",
      },
    ],
  },
  {
    category: "Ablauf & Termine",
    items: [
      {
        q: "Wie schnell kann Platzhelden24 einen Termin anbieten?",
        a: "Innerhalb von 24 Stunden nach Ihrer Anfrage erhalten Sie ein erstes unverbindliches Angebot. Termine sind je nach Verfügbarkeit oft schon innerhalb weniger Tage möglich. Bei dringenden Fällen – zum Beispiel bei Wohnungsübergaben – versuchen wir, kurzfristig zu helfen.",
      },
      {
        q: "Muss ich bei der Entrümpelung anwesend sein?",
        a: "Nein, das ist nicht notwendig. Nach einer einfachen Schlüsselübergabe erledigen wir alles eigenständig und hinterlassen das Objekt ordentlich und besenrein. Selbstverständlich können Sie auch anwesend sein, wenn Sie möchten.",
      },
      {
        q: "Wie läuft eine Entrümpelung ab?",
        a: "Zuerst senden Sie uns Fotos oder wir kommen zur kostenlosen Vor-Ort-Besichtigung. Dann erhalten Sie ein verbindliches Festpreisangebot. Nach Ihrer Zusage vereinbaren wir einen Termin. An dem Termin räumen wir das Objekt vollständig aus, entsorgen alles fachgerecht und übergeben besenrein.",
      },
      {
        q: "Wie erhalte ich ein verbindliches Angebot?",
        a: "Füllen Sie einfach unser Kontaktformular aus und laden Sie Fotos hoch – dann erhalten Sie innerhalb von 24 Stunden ein unverbindliches Angebot. Für eine verbindliche Festpreisgarantie kommt unser Team kostenlos zur Vor-Ort-Besichtigung.",
      },
    ],
  },
  {
    category: "Leistungen & Objekte",
    items: [
      {
        q: "In welchen Städten ist Platzhelden24 tätig?",
        a: "Wir sind im gesamten Niederrhein tätig: Kleve, Goch, Emmerich am Rhein, Kalkar, Wesel, Duisburg, Xanten, Rees, Issum und Umgebung. Für Anfragen außerhalb dieser Gebiete kontaktieren Sie uns einfach – wir prüfen gerne, ob wir helfen können.",
      },
      {
        q: "Können Sie auch nur einzelne Zimmer oder einen Keller entrümpeln?",
        a: "Ja, selbstverständlich. Wir entrümpeln gerne auch einzelne Räume, Keller, Garagen, Dachböden oder Lagerflächen – egal wie groß oder klein. Es gibt keine Mindestgröße.",
      },
      {
        q: "Was ist eine Messie-Entrümpelung und wie gehen Sie damit um?",
        a: "Bei einer Messie-Wohnung sind besondere Sorgfalt, Diskretion und spezielle Ausrüstung nötig. Unser Team geht wertungsfrei und professionell vor, verwendet geeignete Schutzausrüstung und entsorgt alles fachgerecht – auch Sondermüll.",
      },
      {
        q: "Was machen Sie mit Sondermüll und Schadstoffen?",
        a: "Sondermüll wie Farben, Chemikalien, Asbest oder Elektroschrott wird separat gesammelt und gemäß den gesetzlichen Vorschriften fachgerecht entsorgt. Hierfür kann ein kleiner Aufpreis anfallen.",
      },
      {
        q: "Wie läuft eine Haushaltsauflösung bei Erbschaft oder Todesfall ab?",
        a: "Wir gehen in solchen Situationen besonders pietätvoll und diskret vor. Sie müssen sich um nichts kümmern – wir koordinieren alles, von der Besichtigung bis zur besenreinen Übergabe. Gerne helfen wir Ihnen in dieser schwierigen Zeit.",
      },
      {
        q: "Führen Sie auch Gewerbeentrümpelungen durch?",
        a: "Ja, wir entrümpeln Büros, Lager, Praxen, Werkstätten und andere Gewerbeobjekte. Termine sind auch außerhalb der normalen Geschäftszeiten möglich, damit Ihr Betrieb nicht gestört wird.",
      },
    ],
  },
  {
    category: "Rechtliches & Finanzielles",
    items: [
      {
        q: "Kann man eine Entrümpelung von der Steuer absetzen?",
        a: "Ja, unter bestimmten Umständen. Wenn die Entrümpelung im Zusammenhang mit einem Mietverhältnis, einer Erbschaft oder einer selbstgenutzten Immobilie steht, können Teile der Kosten als haushaltsnahe Dienstleistungen oder Handwerkerleistungen steuerlich geltend gemacht werden. Sprechen Sie dazu Ihren Steuerberater an – wir stellen Ihnen gerne eine ordentliche Rechnung aus.",
      },
      {
        q: "Wer zahlt die Haushaltsauflösung bei einem Todesfall?",
        a: "In der Regel übernehmen die Erben die Kosten. Wenn keine Erben vorhanden sind oder die Erbschaft ausgeschlagen wird, kann das Nachlassgericht oder die zuständige Behörde zuständig sein. In manchen Fällen übernimmt auch die Wohnungsgenossenschaft oder der Vermieter einen Teil der Kosten.",
      },
      {
        q: "Sind Sie versichert?",
        a: "Ja, Platzhelden24 ist vollständig haftpflicht- und transportversichert. Im unwahrscheinlichen Fall eines Schadens sind Sie abgesichert.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-semibold text-brand-navy">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-brand-green transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
      )}
    </div>
  );
}

function Page() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-widest text-brand-green">FAQ</p>
      <h1 className="mt-3 text-display text-4xl text-brand-navy md:text-5xl">
        Häufig gestellte Fragen
      </h1>
      <p className="mt-4 text-muted-foreground">
        Alles rund um Entrümpelung, Haushaltsauflösung und unsere Leistungen in Kleve und am Niederrhein.
      </p>

      <div className="mt-12 space-y-10">
        {faqs.map((cat) => (
          <div key={cat.category}>
            <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-green">
              {cat.category}
            </h2>
            <div className="rounded-2xl border border-border bg-white px-6">
              {cat.items.map((item) => (
                <AccordionItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-brand-navy p-8 text-center text-white">
        <h2 className="text-display text-2xl">Noch eine Frage?</h2>
        <p className="mt-2 text-white/75">
          Rufen Sie uns an oder schreiben Sie uns – wir helfen Ihnen sofort weiter.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="tel:02821838365"
            className="rounded-full bg-brand-green px-6 py-3 font-bold text-white transition hover:brightness-95"
          >
            02821 8383650
          </a>
          <a
            href="/#anfrage"
            className="rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
          >
            Kostenlos anfragen
          </a>
        </div>
      </div>
    </div>
  );
}
