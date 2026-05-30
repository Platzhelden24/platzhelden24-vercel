import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-full.png";
import { COMPANY } from "@/lib/contact";

const links = [
  { to: "/", label: "Start" },
  { to: "/#leistungen", label: "Leistungen" },
  { to: "/#ablauf", label: "Ablauf" },
  { to: "/#ueber-uns", label: "Über uns" },
  { to: "/faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="/" onClick={() => window.location.href = "/"} className="flex items-center gap-2">
          <img src={logo} alt="Platzhelden24" className="h-12 w-auto md:h-14" />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.to + l.label}
              href={l.to}
              className="text-sm font-semibold text-foreground/75 transition hover:text-brand-green"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-semibold text-brand-navy"
          >
            <Phone className="h-4 w-4 text-brand-green" /> {COMPANY.phone}
          </a>
          <a
            href="/#anfrage"
            className="rounded-full bg-brand-green px-5 py-2.5 text-sm font-bold text-white shadow-brand transition hover:brightness-95"
          >
            Kostenlos anfragen
          </a>
        </div>
        <button
          aria-label="Menü"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <a
                key={l.to + l.label}
                href={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-semibold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#anfrage"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-brand-green px-5 py-3 text-center text-sm font-bold text-white"
            >
              Kostenlos anfragen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
