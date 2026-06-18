import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-full.png";
import { COMPANY } from "@/lib/contact";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">

          {/* Logo + Info */}
          <div className="lg:col-span-1">
            <a href="/">
              <img src={logo} alt="Platzhelden24" className="h-12 w-auto" />
            </a>
            <p className="mt-4 text-sm text-white/60">
              Professionelle Entrümpelung &amp; Haushaltsauflösung im gesamten Niederrhein.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-green">
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-green" />
                <a href={`tel:${COMPANY.phoneIntl}`} className="hover:text-white">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-green" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-green">
              Leistungen
            </h3>
            <ul className="space-y-1.5 text-sm text-white/70">
              {[
                "Entrümpelung",
                "Wohnungsauflösung",
                "Haushaltsauflösung",
                "Kellerentrümpelung",
                "Messie-Entrümpelung",
                "Gewerbeentrümpelung",
                "Hausmeisterservice",
                "Winterdienst",
              ].map((l) => (
                <li key={l}>
                  <a href="/#leistungen" className="hover:text-white">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-green">
              Rechtliches
            </h3>
            <ul className="space-y-1.5 text-sm text-white/70">
              <li><Link to="/impressum" className="hover:text-white">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white">Datenschutz</Link></li>
              <li><Link to="/agb" className="hover:text-white">AGB</Link></li>
              <li><Link to="/cookies" className="hover:text-white">Cookie-Richtlinie</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-green">
              Navigation
            </h3>
            <ul className="space-y-1.5 text-sm text-white/70">
              <li><a href="/" className="hover:text-white">Startseite</a></li>
              <li><a href="/#leistungen" className="hover:text-white">Leistungen</a></li>
              <li><a href="/#ablauf" className="hover:text-white">Ablauf</a></li>
              <li><a href="/#ueber-uns" className="hover:text-white">Über uns</a></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li>
                <Link to="/standorte" className="hover:text-white">
                  Standorte Niederrhein
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Platzhelden24 · Alle Rechte vorbehalten
        </div>
      </div>
    </footer>
  );
}
