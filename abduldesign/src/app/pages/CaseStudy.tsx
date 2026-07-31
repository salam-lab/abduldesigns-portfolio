import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Container, Reveal, Pill, Button } from "../components/ui-bits";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SectionNav } from "../components/SectionNav";
import { CTABand } from "../components/CTABand";
import { caseStudies, getCaseStudy } from "../data/portfolio";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "situation", label: "Situation" },
  { id: "task", label: "Task" },
  { id: "action", label: "Action" },
  { id: "result", label: "Result" },
];

function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-display text-[14px] text-[var(--ad-text-faint)]">{n}</span>
      <h2 className="font-display text-[clamp(1.4rem,3.4vw,1.95rem)] leading-tight">{title}</h2>
    </div>
  );
}

export function CaseStudy() {
  const { slug } = useParams();
  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) {
    return (
      <Container className="flex min-h-[60vh] flex-col items-center justify-center pt-32 text-center">
        <h1 className="font-display text-[2rem]">Project not found</h1>
        <p className="mt-3 text-[var(--ad-text-dim)]">
          That case study doesn't exist (yet).
        </p>
        <Button to="/work" variant="ghost" className="mt-6">
          Back to work
        </Button>
      </Container>
    );
  }

  const idx = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <SectionNav sections={sections} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-10 sm:pt-40">
        <div className="grid-bg absolute inset-0" />
        <Container className="relative z-10">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-[14px] text-[var(--ad-text-dim)] transition-colors hover:text-[var(--ad-text)]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All work
          </Link>

          <Reveal className="mt-6">
            <div className="flex flex-wrap items-center gap-2">
              <Pill>{study.industry}</Pill>
              {study.tags.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
              <Pill>{study.status}</Pill>
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(1.9rem,4.9vw,3.25rem)] font-semibold leading-[1.04] tracking-tight">
              {study.title}
            </h1>
            <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-[var(--ad-text-dim)]">
              {study.summary}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Cover */}
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--ad-border)]">
            <ImageWithFallback
              src={study.cover}
              alt={study.shortTitle}
              className="aspect-[16/8] w-full object-cover"
            />
          </div>
        </Reveal>
      </Container>

      {/* Body */}
      <Container className="mt-16">
        <div className="mx-auto max-w-3xl space-y-20">
          {/* Overview */}
          <section id="overview" className="scroll-mt-28">
            <div className="grid gap-6 rounded-2xl border border-[var(--ad-border)] bg-[var(--ad-bg-soft)] p-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { k: "My role", v: study.role },
                { k: "Timeline", v: study.timeline },
                { k: "Team", v: study.team },
                { k: "Industry", v: study.industry },
              ].map((row) => (
                <div key={row.k}>
                  <p className="text-[12px] uppercase tracking-[0.16em] text-[var(--ad-text-faint)]">
                    {row.k}
                  </p>
                  <p className="mt-2 text-[15px] text-[var(--ad-text)]">{row.v}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.disciplines.map((d) => (
                <Pill key={d}>{d}</Pill>
              ))}
            </div>
          </section>

          {/* Situation */}
          <section id="situation" className="scroll-mt-28">
            <SectionHeading n="S" title="Situation" />
            <p className="mt-5 text-[18px] leading-relaxed text-[var(--ad-text-dim)]">
              {study.problem}
            </p>
          </section>

          {/* Task */}
          <section id="task" className="scroll-mt-28">
            <SectionHeading n="T" title="Task" />
            <p className="mt-5 text-[18px] leading-relaxed text-[var(--ad-text-dim)]">
              {study.task}
            </p>
          </section>

          {/* Action */}
          <section id="action" className="scroll-mt-28">
            <SectionHeading n="A" title="Action" />
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-[var(--ad-text-faint)]">
              How I moved from problem to solution — the research, the decisions, and the
              trade-offs along the way.
            </p>
            <div className="mt-6 space-y-4">
              {study.process.map((p, i) => (
                <Reveal key={p.key} delay={i * 0.05}>
                  <div className="rounded-2xl border border-[var(--ad-border)] bg-[var(--ad-bg-soft)] p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ad-surface-2)] font-display text-[13px] text-[var(--ad-text-dim)]">
                        {i + 1}
                      </span>
                      <h3 className="font-display text-[18px]">{p.title}</h3>
                    </div>
                    <p className="mt-3 text-[16px] leading-relaxed text-[var(--ad-text-dim)]">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Before / After decision */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--ad-border)] bg-[var(--ad-bg-soft)] p-6">
                <span className="rounded-full bg-rose-500/15 px-3 py-1 text-[12px] text-rose-500 dark:text-rose-300">
                  Before
                </span>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--ad-text-dim)]">
                  {study.beforeAfter.before}
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--ad-border-strong)] bg-[var(--ad-bg-soft)] p-6">
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[12px] text-emerald-600 dark:text-emerald-300">
                  After
                </span>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--ad-text)]">
                  {study.beforeAfter.after}
                </p>
              </div>
            </div>

            {study.gallery.length > 0 && (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {study.gallery.map((g) => (
                  <Reveal key={g}>
                    <ImageWithFallback
                      src={g}
                      alt={`${study.shortTitle} screen`}
                      className="aspect-[4/3] w-full rounded-2xl border border-[var(--ad-border)] object-cover"
                    />
                  </Reveal>
                ))}
              </div>
            )}
          </section>

          {/* Result */}
          <section id="result" className="scroll-mt-28">
            <SectionHeading n="R" title="Result" />
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {study.metrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.06}>
                  <div className="rounded-2xl border border-[var(--ad-border)] bg-[var(--ad-bg-soft)] p-5 text-center">
                    <p className="font-display text-[clamp(1.3rem,2.6vw,1.8rem)] text-[var(--ad-text)]">
                      {m.value}
                    </p>
                    <p className="mt-2 text-[12px] leading-snug text-[var(--ad-text-dim)]">
                      {m.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-6 flex gap-3 rounded-2xl border border-[var(--ad-border)] bg-[var(--ad-bg-soft)] p-6">
              <Check className="mt-0.5 h-5 w-5 flex-none text-emerald-500 dark:text-emerald-400" />
              <div>
                <p className="text-[16px] leading-relaxed text-[var(--ad-text)]">
                  {study.outcome}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--ad-text-dim)]">
                  <span className="font-medium text-[var(--ad-text)]">What I learned: </span>
                  {study.beforeAfter.after} The biggest lever wasn't more features — it was
                  removing doubt and designing systems the team could keep shipping against.
                </p>
              </div>
            </div>
          </section>

          {/* Next project */}
          <Link
            to={`/work/${next.slug}`}
            className="lift group flex items-center justify-between rounded-2xl border border-[var(--ad-border)] bg-[var(--ad-bg-soft)] p-6"
          >
            <div>
              <p className="text-[12px] uppercase tracking-[0.16em] text-[var(--ad-text-faint)]">
                Next project
              </p>
              <p className="mt-2 font-display text-[20px]">{next.shortTitle}</p>
            </div>
            <ArrowRight className="h-6 w-6 text-[var(--ad-text-dim)] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>

      <div className="mt-10">
        <CTABand />
      </div>
    </>
  );
}
