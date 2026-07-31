import { Link } from "react-router";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

/* ---------- Section container ---------- */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

/* ---------- Scroll reveal wrapper ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 12,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Eyebrow label ---------- */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ad-blue)]">
      <span className="h-px w-6 bg-gradient-to-r from-[var(--ad-cyan)] to-transparent" />
      {children}
    </div>
  );
}

/* ---------- Pill / badge ---------- */
export function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--ad-border)] bg-[var(--ad-surface)] px-3 py-1 text-[12px] text-[var(--ad-text-dim)] ${className}`}
    >
      {children}
    </span>
  );
}

/* ---------- Buttons (always links / actionable) ---------- */
type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  download?: boolean | string;
};

export function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  download,
}: BtnProps) {
  const reduce = useReducedMotion();
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-[14px] font-semibold tracking-[-0.01em] transition-all duration-200";
  const styles =
    variant === "primary"
      ? "border-[var(--ad-blue)] bg-[var(--ad-blue)] text-white hover:-translate-y-px hover:shadow-[0_8px_18px_-12px_rgba(94,103,230,0.55)]"
      : variant === "secondary"
        ? "border-[var(--ad-blue)] bg-transparent text-[var(--ad-blue)] hover:-translate-y-px hover:bg-[var(--ad-blue)]/10"
        : "border-[var(--ad-blue)] bg-transparent text-[var(--ad-blue)] hover:-translate-y-px hover:bg-[var(--ad-blue)]/10";
  const cls = `${base} ${styles} ${className}`;
  const motionProps = reduce
    ? {}
    : {
        whileHover: { y: -2, scale: 1.015 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring" as const, stiffness: 420, damping: 24 },
      };
  const inner = <span className="relative z-[2] inline-flex items-center gap-2">{children}</span>;

  if (to)
    return (
      <motion.div className="inline-flex" {...motionProps}>
        <Link to={to} className={cls}>
          {inner}
        </Link>
      </motion.div>
    );
  if (href)
    return (
      <motion.div className="inline-flex" {...motionProps}>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          download={download}
          className={cls}
        >
          {inner}
        </a>
      </motion.div>
    );
  return (
    <motion.button type={type} onClick={onClick} className={cls} {...motionProps}>
      {inner}
    </motion.button>
  );
}

export function ArrowText({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </span>
  );
}

/* ---------- Animated count-up number ---------- */
export function CountUp({
  value,
  suffix = "",
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className="font-display tabular-nums">
      {n}
      {suffix}
    </span>
  );
}
