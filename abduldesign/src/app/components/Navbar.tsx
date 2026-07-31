import { Link, NavLink, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Container } from "./ui-bits";
import { useTheme } from "./ThemeProvider";
import { brand } from "../data/portfolio";
import logoSrc from "../../imports/abduldesigns_logo.png";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ad-border)] bg-[var(--ad-surface)] text-[var(--ad-text-dim)] transition-colors hover:text-[var(--ad-text)]"
    >
      {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group inline-flex items-center gap-2 font-display text-[17px] font-semibold tracking-[-0.03em]"
    >
      <img src={logoSrc} alt="AbdulDesigns" className="h-9 w-9 rounded-full object-cover ring-1 ring-[var(--ad-border)]" />
      <span>
        Abdul<span className="text-[var(--ad-blue)] transition-colors group-hover:text-[var(--ad-text)]">Designs</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Sticky: visible on scroll up, hidden on scroll down
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > last && y > 200);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change + lock scroll when open
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden && !open ? "-110%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <Container className="pt-4">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
              scrolled
                ? "glass-strong shadow-[0_10px_30px_-25px_rgba(20,32,31,0.4)]"
                : "border border-transparent"
            }`}
          >
            <Logo />

            <nav className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `relative rounded-full px-4 py-2 text-[14px] transition-colors ${
                      isActive
                        ? "text-[var(--ad-text)]"
                        : "text-[var(--ad-text-dim)] hover:text-[var(--ad-text)]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-full bg-[var(--ad-surface-2)] ring-1 ring-[var(--ad-border)]"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href={`mailto:${brand.email}`}
                className="hidden rounded-xl border border-[var(--ad-blue)] bg-[var(--ad-blue)] px-5 py-2 text-[14px] font-semibold text-white transition-all hover:-translate-y-px hover:shadow-[0_8px_18px_-12px_rgba(94,103,230,0.55)] md:inline-flex"
              >
                Let's talk
              </a>
              <button
                aria-label="Open menu"
                onClick={() => setOpen((o) => !o)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ad-border)] bg-[var(--ad-surface)] text-[var(--ad-text)] md:hidden"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-[var(--ad-bg)]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex-1 flex flex-col justify-center px-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      `block border-b border-[var(--ad-border)] py-5 font-display text-[34px] ${
                        isActive ? "text-gradient" : "text-[var(--ad-text)]"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex gap-4"
              >
                {brand.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[14px] text-[var(--ad-text-dim)] hover:text-[var(--ad-cyan)]"
                  >
                    {s.label}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
