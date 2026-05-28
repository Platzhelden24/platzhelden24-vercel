import { createFileRoute } from "@tanstack/react-router";
import { AnfrageForm } from "@/components/AnfrageForm";
import { COMPANY } from "@/lib/contact";
import hero from "@/assets/hero-cleanup.jpg";
import {
  ArrowRight, Boxes, Home, Building2, Warehouse, Recycle, Trash2,
  Sparkles, ShieldCheck, Clock, Wallet, MapPin, Phone, MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Platzhelden24 – Entrümpelung in Kleve | Festpreis & besenrein" },
      { name: "description", content: "Profi-Entrümpelung in Kleve und Umgebung. Festpreis-Garantie, besenrein, termintreu. Jetzt kostenlos anfragen – Antwort in 24 Stunden." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Home, title: "Wohnungsauflösung", text: "Vom 1-Zimmer-Apartment bis zur kompletten Etagenwohnung – schnell und sauber." },
  { icon: Building2, title: "Haushaltsauflösung", text: "Komplette Häuser und Erbschaften pietätvoll geräumt und entsorgt." },
  { icon: Warehouse, title: "Keller & Dachboden", text: "Auch enge Räume, alte Möbel und Sperrgut – wir kommen mit allem klar." },
  { icon: Recycle, title: "Fachgerechte Entsorgung", text: "Umweltgerechte Trennung und Entsorgung nach geltenden Vorschriften." },
  { icon: Boxes, title: "Messie-Wohnungen", text: "Diskret, geruchsneutral und ohne Vorurteile – wir helfen, wo andere aufgeben." },
  { icon: Trash2, title: "Gewerbe-Räumung", text: "Büros, Lager, Praxen – auch außerhalb der Geschäftszeiten." },
];

const stats = [
  { value: "24 h", label: "Antwortzeit" },
  { value: "Festpreis", label: "Garantie" },
  { value: "Schnelle", label: "Termine" },
  { value: "100 %", label: "Versichert" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-radial-brand text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
        <div className="relative mx-auto max-w-7xl px-4 pt-10 pb-24 sm:px-5 sm:pt-12 sm:pb-32 lg:px-8 lg:pt-20 lg:pb-44">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-brand-green sm:px-4 sm:text-xs">
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand-green" />
                <span className="break-words">Entrümpelung & Haushaltsauflösung in Kleve & im gesamten Niederrhein</span>
              </div>
              <h1 className="mt-6 text-display text-[clamp(2rem,8vw,6rem)]">
                Mehr Platz. <span className="text-brand-green">Weniger Stress.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base text-white/75 sm:mt-6 sm:text-lg">
                Wir entrümpeln Wohnungen, Häuser, Keller und Gewerbeflächen –
                <strong className="text-white"> zum Festpreis, termintreu und besenrein</strong>.
                Innerhalb von 24 Stunden erhalten Sie Ihr kostenloses Angebot.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <a href="#anfrage" className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-4 text-base font-bold text-white shadow-brand transition hover:brightness-95 sm:px-7">
                  Kostenlos anfragen
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </a>
                <a href={`tel:${COMPANY.phoneIntl}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/10 sm:px-7">
                  <Phone className="h-5 w-5 text-brand-green" /> {COMPANY.phone}
                </a>
              </div>
              <div className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-display text-2xl text-brand-green">{s.value}</div>
                    <div className="text-xs uppercase tracking-wider text-white/55">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-green/40 to-transparent blur-3xl" />
              <img
                src={hero}
                alt="Platzhelden24 Team bei der Wohnungsentrümpelung"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-[2rem] object-cover shadow-brand"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 text-brand-navy shadow-brand sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/15">
                    <Sparkles className="h-5 w-5 text-brand-green" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-muted-foreground">Übergabe</div>
                    <div className="text-sm font-bold">Garantiert besenrein</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-green sm:text-sm">Leistungen</p>
          <h2 className="mt-3 text-display text-3xl text-brand-navy sm:text-4xl md:text-5xl">
            Alles aus einer Hand –<br />vom Anruf bis zur Schlüsselübergabe.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-brand-green hover:shadow-brand">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-green transition group-hover:bg-brand-green group-hover:text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-brand-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="ueber-uns" className="bg-brand-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:gap-12 sm:px-5 sm:py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-green sm:text-sm">Warum Platzhelden24</p>
            <h2 className="mt-3 text-display text-3xl sm:text-4xl md:text-5xl">
              Helden, denen Sie<br />vertrauen können.
            </h2>
            <p className="mt-6 max-w-md text-white/70">
              {COMPANY.slogan} Wir sind ein Familienbetrieb aus Kleve und behandeln
              Ihre Räume so, als wären es unsere eigenen. Transparente
              Festpreise, faire Beratung und absolute Termintreue.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { icon: Wallet, title: "Festpreis-Garantie", text: "Verbindlicher Festpreis nach Vor-Ort-Besichtigung – keine versteckten Kosten." },
              { icon: Clock, title: "Termintreu", text: "Sie warten nicht. Wir sind pünktlich – versprochen." },
              { icon: ShieldCheck, title: "Vollversichert", text: "Haftpflicht- und Transportversicherung inklusive." },
              { icon: MapPin, title: "Regional verwurzelt", text: "Kleve, Goch, Emmerich, Kalkar, Duisburg, Wesel & gesamter Niederrhein." },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <b.icon className="h-7 w-7 text-brand-green" />
                <h3 className="mt-4 font-bold">{b.title}</h3>
                <p className="mt-1 text-sm text-white/70">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section id="ablauf" className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-green sm:text-sm">In 3 Schritten</p>
          <h2 className="mt-3 text-display text-3xl text-brand-navy sm:text-4xl md:text-5xl">
            So einfach läuft es ab.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Anfrage", d: "Formular ausfüllen, Bilder hochladen oder anrufen – fertig in 2 Minuten." },
            { n: "02", t: "Angebot", d: "Anhand der Bilder erhalten Sie ein unverbindliches Angebot. Der verbindliche Festpreis folgt nach kostenloser Vor-Ort-Besichtigung." },
            { n: "03", t: "Räumung", d: "Wir räumen termingerecht und übergeben besenrein – Sie haben nichts zu tun." },
          ].map((s) => (
            <div key={s.n} className="relative overflow-hidden rounded-3xl border border-border bg-card p-8">
              <div className="text-display text-7xl text-brand-green/15">{s.n}</div>
              <h3 className="mt-2 text-2xl font-bold text-brand-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-radial-brand p-6 text-white sm:p-10 md:p-16">
          <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-display text-3xl sm:text-4xl md:text-5xl">
                Bereit für mehr Platz?
              </h2>
              <p className="mt-3 max-w-lg text-white/75">
                Kostenloses Angebot in 24 Stunden – ganz unverbindlich.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:justify-end">
              <a href={`https://wa.me/${COMPANY.whatsappNumber}`} target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-bold text-white shadow-brand">
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
              <a href="#anfrage" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-4 font-bold text-white shadow-brand">
                Anfrage starten <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ANFRAGE */}
      <section id="anfrage" className="mx-auto max-w-5xl px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-green sm:text-sm">Kostenlose Anfrage</p>
          <h2 className="mt-3 text-display text-3xl text-brand-navy sm:text-4xl md:text-5xl">
            Erzählen Sie uns von Ihrem Projekt.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Füllen Sie das Formular aus, laden Sie Bilder hoch und senden Sie alles
            mit einem Klick per WhatsApp oder E-Mail.
          </p>
        </div>
        <AnfrageForm />
      </section>
    </>
  );
}
