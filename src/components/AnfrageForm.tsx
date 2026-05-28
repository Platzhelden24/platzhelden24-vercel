import { useRef, useState } from "react";
import { COMPANY } from "@/lib/contact";
import { sendEmailFn } from "@/lib/sendEmail";
import { MessageCircle, Mail, Upload, X, Loader2 } from "lucide-react";

const PROPERTY_TYPES = [
  "Wohnung", "Haus", "Keller", "Dachboden", "Garage",
  "Lager", "Gewerbe", "Garten/Hof", "Messie-Wohnung",
];

export function AnfrageForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    plz: "", ort: "", strasse: "",
    zimmer: "1", flaeche: "",
    termin: "schnellstmoeglich",
    nachricht: "",
  });
  const [types, setTypes] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [sending, setSending] = useState<null | "wa" | "mail">(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const toggleType = (t: string) =>
    setTypes((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));

  const onFiles = (list: FileList | null) => {
    if (!list) return;
    setFiles((p) => [...p, ...Array.from(list)].slice(0, 10));
  };
  const removeFile = (i: number) => setFiles((p) => p.filter((_, x) => x !== i));

  const validate = () => {
    if (!form.name.trim()) return "Bitte Namen angeben.";
    if (!form.phone.trim() && !form.email.trim()) return "Bitte Telefon oder E-Mail angeben.";
    if (!form.plz.trim() || !form.ort.trim()) return "Bitte PLZ und Wohnort angeben.";
    if (types.length === 0) return "Bitte mindestens eine Objektart auswählen.";
    return null;
  };

  const buildText = () => {
    return [
      `Neue Entrümpelungsanfrage – ${COMPANY.name}`,
      ``,
      `Name: ${form.name}`,
      `Telefon: ${form.phone || "—"}`,
      `E-Mail: ${form.email || "—"}`,
      ``,
      `Adresse: ${form.strasse || "—"}, ${form.plz} ${form.ort}`,
      `Objektart: ${types.join(", ")}`,
      `Zimmer/Räume: ${form.zimmer}`,
      `Fläche (ca. m²): ${form.flaeche || "—"}`,
      `Wunschtermin: ${form.termin}`,
      ``,
      `Nachricht:`,
      form.nachricht || "—",
      ``,
      files.length ? `Anzahl Bilder: ${files.length}` : `Keine Bilder angehängt.`,
    ].join("\n");
  };

  const tryNativeShare = async (target: "wa" | "mail") => {
    const text = buildText();
    const subject = `Entrümpelungsanfrage – ${form.name} – ${form.plz} ${form.ort}`;
    if (files.length > 0 && typeof navigator !== "undefined" && (navigator as any).canShare) {
      try {
        const data: any = { title: subject, text, files };
        if ((navigator as any).canShare(data)) {
          await (navigator as any).share(data);
          return true;
        }
      } catch {
        /* user cancelled or unsupported */
      }
    }
    return false;
  };

  const sendWhatsApp = async () => {
    const err = validate();
    if (err) return alert(err);
    setSending("wa");
    const text = buildText();
    if (files.length > 0 && typeof navigator !== "undefined" && (navigator as any).canShare) {
      try {
        const shareData: any = { text, files };
        if ((navigator as any).canShare(shareData)) {
          await (navigator as any).share(shareData);
          setSending(null);
          return;
        }
      } catch {
        /* user cancelled or not supported */
      }
    }
    const url = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSending(null);
  };

  const sendEmail = async () => {
    const err = validate();
    if (err) return alert(err);
    setSending("mail");
    try {
      const subject = `Entrümpelungsanfrage – ${form.name} – ${form.plz} ${form.ort}`;
      const body = buildText();

      const attachments = await Promise.all(
        files.map(
          (file) =>
            new Promise<{ filename: string; content: string; contentType: string }>((resolve) => {
              const reader = new FileReader();
              reader.onload = () => {
                const base64 = (reader.result as string).split(",")[1];
                resolve({ filename: file.name, content: base64, contentType: file.type });
              };
              reader.readAsDataURL(file);
            })
        )
      );

      await sendEmailFn({
        data: {
          subject,
          body,
          replyTo: form.email || undefined,
          attachments: attachments.length > 0 ? attachments : undefined,
        },
      });
      alert("✅ Ihre Anfrage wurde erfolgreich gesendet! Wir melden uns schnellstmöglich bei Ihnen.");
    } catch {
      alert("❌ Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns an: " + COMPANY.phone);
    } finally {
      setSending(null);
    }
  };

  return (
    <div className="rounded-2xl bg-white p-4 shadow-brand sm:rounded-3xl sm:p-6 md:p-10">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name *">
          <input className={inputCls} value={form.name} onChange={(e) => update("name", e.target.value)} />
        </Field>
        <Field label="Telefon">
          <input className={inputCls} value={form.phone} onChange={(e) => update("phone", e.target.value)} />
        </Field>
        <Field label="E-Mail">
          <input type="email" className={inputCls} value={form.email} onChange={(e) => update("email", e.target.value)} />
        </Field>
        <Field label="Wohnort *">
          <input className={inputCls} value={form.ort} onChange={(e) => update("ort", e.target.value)} />
        </Field>
        <Field label="PLZ *">
          <input className={inputCls} value={form.plz} onChange={(e) => update("plz", e.target.value)} />
        </Field>
        <Field label="Straße & Hausnummer">
          <input className={inputCls} value={form.strasse} onChange={(e) => update("strasse", e.target.value)} />
        </Field>
        <Field label="Anzahl Zimmer/Räume">
          <select className={inputCls} value={form.zimmer} onChange={(e) => update("zimmer", e.target.value)}>
            {["1","2","3","4","5","6+"].map((z) => <option key={z}>{z}</option>)}
          </select>
        </Field>
        <Field label="Fläche (ca. m²)">
          <input className={inputCls} value={form.flaeche} onChange={(e) => update("flaeche", e.target.value)} />
        </Field>
        <Field label="Wunschtermin">
          <select className={inputCls} value={form.termin} onChange={(e) => update("termin", e.target.value)}>
            <option value="schnellstmoeglich">Schnellstmöglich</option>
            <option value="diese-woche">Diese Woche</option>
            <option value="naechste-woche">Nächste Woche</option>
            <option value="im-monat">Im laufenden Monat</option>
            <option value="flexibel">Flexibel</option>
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <p className="mb-2 text-sm font-semibold text-brand-navy">
          Was soll entrümpelt werden? * (Mehrfachauswahl)
        </p>
        <div className="flex flex-wrap gap-2">
          {PROPERTY_TYPES.map((t) => {
            const active = types.includes(t);
            return (
              <button
                type="button"
                key={t}
                onClick={() => toggleType(t)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "border-brand-green bg-brand-green text-white"
                    : "border-border bg-white text-foreground hover:border-brand-green"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <Field label="Beschreibung / Hinweise">
          <textarea
            rows={4}
            className={inputCls}
            value={form.nachricht}
            onChange={(e) => update("nachricht", e.target.value)}
            placeholder="z. B. schwerer Tresor im Keller, kein Aufzug, gewünschte Entsorgung von Sondermüll …"
          />
        </Field>
      </div>

      <div className="mt-6">
        <p className="mb-2 text-sm font-semibold text-brand-navy">
          Bilder hochladen (max. 10)
        </p>
        <div
          className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/40 p-6 text-center transition hover:border-brand-green"
          onClick={() => fileInput.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); onFiles(e.dataTransfer.files); }}
        >
          <Upload className="h-6 w-6 text-brand-green" />
          <p className="mt-2 text-sm font-semibold">Bilder ablegen oder klicken</p>
          <p className="text-xs text-muted-foreground">JPG, PNG, HEIC – jeweils bis 10 MB</p>
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => onFiles(e.target.files)}
          />
        </div>
        {files.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
            {files.map((f, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-xl border bg-muted">
                <img src={URL.createObjectURL(f)} alt={f.name} className="h-full w-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="absolute right-1 top-1 rounded-full bg-black/70 p-1 text-white opacity-0 transition group-hover:opacity-100"
                  aria-label="Entfernen"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={sendWhatsApp}
          disabled={!!sending}
          className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-brand transition hover:brightness-95 disabled:opacity-60"
        >
          {sending === "wa" ? <Loader2 className="h-5 w-5 animate-spin" /> : <MessageCircle className="h-5 w-5" />}
          Per WhatsApp senden
        </button>
        <button
          type="button"
          onClick={sendEmail}
          disabled={!!sending}
          className="flex items-center justify-center gap-2 rounded-full bg-brand-navy px-6 py-4 text-base font-bold text-white shadow-brand transition hover:brightness-110 disabled:opacity-60"
        >
          {sending === "mail" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Mail className="h-5 w-5" />}
          Per E-Mail senden
        </button>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        📱 Auf dem Smartphone werden Ihre Bilder direkt mitgesendet.<br />
        💻 Auf dem PC/Laptop fügen Sie die Bilder bitte mit einem Klick im
        geöffneten WhatsApp- oder Mail-Fenster an (alle Daten sind bereits ausgefüllt).
      </p>
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-brand-navy">{label}</span>
      {children}
    </label>
  );
}
