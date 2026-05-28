import { Link } from "@tanstack/react-router";
import logoIcon from "@/assets/logo-icon.png";
import { COMPANY } from "@/lib/contact";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-radial-brand text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img src={logoIcon} alt="Platzhelden24" className="h-16 w-auto" />

            <p className="mt-5 text-lg font-medium text-white/90">{COMPANY.slogan}</p>
            <p className="mt-3 max-w-md text-sm text-white/65">
              Schnelle, faire und zuverlässige Entrümpelung &amp; Haushaltsauflösung
              in Kleve und Umgebung. Festpreis. Besenrein. Termintreu.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-green">
              Kontakt
            </h4>
            <a href={`tel:${COMPANY.phoneIntl}`} className="flex items-center gap-3 text-white/85 hover:text-white">
              <Phone className="h-4 w-4 text-brand-green" /> {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-white/85 hover:text-white">
              <Mail className="h-4 w-4 text-brand-green" /> {COMPANY.email}
            </a>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-green">
              Rechtliches
            </h4>
            <ul className="space-y-2 text-white/85">
              <li><Link to="/impressum" className="hover:text-white">Impressum</Link></li>
              <li><Link to="/agb" className="hover:text-white">AGB</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white">Datenschutzerklärung</Link></li>
              <li><Link to="/cookies" className="hover:text-white">Cookies</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/55">
          © {new Date().getFullYear()} {COMPANY.name} · Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
