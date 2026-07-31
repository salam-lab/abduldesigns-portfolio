import { useEffect, useState } from "react";

export interface NavSection {
  id: string;
  label: string;
}

/**
 * Collapsed section index: quiet horizontal rules by default, expanding into a
 * labeled reading guide when hovered — intentionally kept desktop-only.
 */
export function SectionNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 96, behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav
      aria-label="Section navigation"
      className="group fixed right-6 top-1/2 z-40 hidden w-10 -translate-y-1/2 rounded-2xl border border-transparent py-3 transition-[width,background-color,border-color,box-shadow] duration-300 hover:w-[190px] hover:border-[var(--ad-border)] hover:bg-[var(--ad-surface)] hover:shadow-[0_16px_40px_-28px_rgba(48,48,48,0.35)] xl:block"
    >
      <ul className="space-y-0.5">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <button
                onClick={() => scrollTo(section.id)}
                aria-current={isActive ? "true" : undefined}
                aria-label={`Go to ${section.label}`}
                className="flex w-full items-center justify-end gap-3 overflow-hidden px-3 py-2 text-right"
              >
                <span className={`whitespace-nowrap font-mono text-[11px] transition-all duration-200 ${isActive ? "text-[var(--ad-blue)]" : "text-[var(--ad-text-dim)]"} max-w-0 translate-x-2 opacity-0 group-hover:max-w-[135px] group-hover:translate-x-0 group-hover:opacity-100`}>
                  {section.label}
                </span>
                <span className={`h-px flex-none transition-all duration-200 ${isActive ? "w-8 bg-[var(--ad-blue)]" : "w-5 bg-[var(--ad-border-strong)]"} group-hover:w-7`} />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
