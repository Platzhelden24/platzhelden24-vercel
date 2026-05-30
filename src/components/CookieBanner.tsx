import { useState, useEffect } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white px-5 py-4 shadow-2xl md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-foreground/80">
          Diese Website verwendet ausschließlich technisch notwendige Cookies. Weitere Informationen finden Sie in unserer{" "}
          <a href="/cookies" className="text-brand-green underline">Cookie-Richtlinie</a>{" "}
          und{" "}
          <a href="/datenschutz" className="text-brand-green underline">Datenschutzerklärung</a>.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition hover:border-brand-navy"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="rounded-full bg-brand-green px-5 py-2 text-sm font-bold text-white transition hover:brightness-95"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
