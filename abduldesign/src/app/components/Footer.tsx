import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./ui-bits";
import { brand } from "../data/portfolio";
import logoSrc from "../../imports/abduldesigns_logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-[var(--ad-border)]">
      <div className="ambient -top-40 left-1/2 h-72 w-[36rem] -translate-x-1/2" style={{ background: "var(--ad-glow)" }} />
      <Container className="relative z-10 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 font-display text-[20px] font-semibold tracking-[-0.03em]">
              <img src={logoSrc} alt="AbdulDesigns" className="h-10 w-10 rounded-full object-cover ring-1 ring-[var(--ad-border)]" />
              <span>Abdul<span className="text-[var(--ad-blue)]">Designs</span></span>
            </Link>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[var(--ad-text-dim)]">
              {brand.tagline}
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="group mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--ad-blue)]"
            >
              {brand.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div>
            <p className="mb-4 text-[12px] uppercase tracking-[0.2em] text-[var(--ad-text-faint)]">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-[15px] text-[var(--ad-text-dim)] transition-colors hover:text-[var(--ad-text)]"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[12px] uppercase tracking-[0.2em] text-[var(--ad-text-faint)]">
              Elsewhere
            </p>
            <ul className="space-y-2.5">
              {brand.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 text-[15px] text-[var(--ad-text-dim)] transition-colors hover:text-[var(--ad-text)]"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--ad-border)] pt-6 text-[13px] text-[var(--ad-text-faint)] sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <span>Designed & built by {brand.person} · {brand.location}</span>
        </div>
      </Container>
    </footer>
  );
}
