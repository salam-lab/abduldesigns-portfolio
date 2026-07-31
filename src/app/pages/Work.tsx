import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Container, Reveal, Eyebrow, Button } from "../components/ui-bits";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { CTABand } from "../components/CTABand";
import { caseStudies, disciplineFilters } from "../data/portfolio";

export function Work() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = useMemo(
    () =>
      filter === "All"
        ? caseStudies
        : caseStudies.filter(
            (caseStudy) =>
              caseStudy.disciplines.includes(filter as never) ||
              caseStudy.tags.some((tag) => tag.toLowerCase() === filter.toLowerCase())
          ),
    [filter]
  );

  return (
    <>
      <section className="border-b border-[var(--ad-border)] pt-36 sm:pt-44">
        <Container className="pb-16 sm:pb-20">
          <Reveal>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--ad-blue)]">Selected product work / 2022—present</p>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,5.6vw,4.9rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
              Product decisions,<br />made <span className="text-[var(--ad-blue)]">visible.</span>
            </h1>
            <div className="mt-9 grid max-w-4xl gap-7 border-t border-[var(--ad-border)] pt-6 md:grid-cols-[1.5fr_auto] md:items-start">
              <p className="max-w-2xl text-[16px] leading-7 text-[var(--ad-text-dim)]">
                A focused record of work across self-service logistics, booking workflows, and scalable interface systems. Each study traces the context, the decision, and the outcome.
              </p>
              <Button href="mailto:salam743347@gmail.com" variant="secondary">Discuss a role</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="flex flex-wrap gap-2 border-b border-[var(--ad-border)] pb-6">
              {disciplineFilters.map((item) => {
                const active = filter === item;
                return (
                  <button
                    key={item}
                    onClick={() => setFilter(item)}
                    className={`rounded-full border px-4 py-2 font-mono text-[11px] transition-all duration-200 ${
                      active
                        ? "border-[var(--ad-blue)] bg-[var(--ad-blue)] text-white"
                        : "border-[var(--ad-border)] bg-transparent text-[var(--ad-text-dim)] hover:border-[var(--ad-border-strong)] hover:bg-[var(--ad-bg-soft)] hover:text-[var(--ad-text)]"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <motion.div layout className="mt-8 space-y-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((study, index) => (
                <motion.div
                  layout
                  key={study.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                >
                  <CaseStudyCard study={study} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-[15px] text-[var(--ad-text-dim)]">No projects in this category yet.</p>
          )}
        </Container>
      </section>

      <CTABand />
    </>
  );
}
