import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ThemeProvider } from "./ThemeProvider";
import logoSrc from "../../imports/abduldesigns_logo.png";

export function Root() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  // Scroll to top on route change (ignore in-page hash links)
  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    let icon = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (!icon) {
      icon = document.createElement("link");
      icon.rel = "icon";
      document.head.appendChild(icon);
    }
    icon.href = logoSrc;
  }, []);

  return (
    <ThemeProvider>
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX: progress }}
          className="fixed inset-x-0 top-0 z-[90] h-[2px] origin-left bg-[var(--ad-blue)]"
        />

        <Navbar />
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-10 flex-1"
        >
          <Outlet />
        </motion.main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
