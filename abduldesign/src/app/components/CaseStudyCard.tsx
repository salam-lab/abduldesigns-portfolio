import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { CaseStudy } from "../data/portfolio";

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ad-text-faint)]">{label}</dt>
      <dd className="mt-1 text-[13px] font-medium text-[var(--ad-text)]">{value}</dd>
    </div>
  );
}

/** A wide, case-study preview inspired by an editorial project index. */
export function CaseStudyCard({ study }: { study: CaseStudy; index?: number }) {
  return (
    <Link
      to={`/work/${study.slug}`}
      className="lift group grid overflow-hidden border border-[var(--ad-border)] bg-[var(--ad-surface)] md:grid-cols-[48%_52%]"
    >
      <div className="relative min-h-[240px] overflow-hidden bg-[var(--ad-bg-soft)] md:min-h-[330px]">
        <ImageWithFallback
          src={study.cover}
          alt={`${study.shortTitle} case study preview`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.012]"
        />
        <span className="absolute left-4 top-4 rounded-full border border-[#303030] bg-[var(--ad-lime)] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[#2d2b2b]">
          {study.status}
        </span>
      </div>

      <div className="flex min-w-0 flex-col justify-center p-6 sm:p-9 md:p-10">
        <p className="font-mono text-[11px] tracking-[0.06em] text-[var(--ad-blue)]">
          {study.year} · {study.industry}
        </p>
        <div className="mt-4 flex items-start justify-between gap-5">
          <h3 className="max-w-[19ch] font-display text-[clamp(1.25rem,2.1vw,1.8rem)] font-semibold leading-[1.1] tracking-[-0.045em] text-[var(--ad-text)] text-[24px]">
            {study.title}
          </h3>
          <span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-[var(--ad-border-strong)] text-[var(--ad-blue)] transition-all duration-200 group-hover:border-[var(--ad-blue)] group-hover:bg-[var(--ad-bg-soft)]">
            <ArrowUpRight className="h-[18px] w-[18px]" />
          </span>
        </div>


        <dl className="mt-6 grid grid-cols-2 gap-5 border-y border-[var(--ad-border)] py-5">
          <Meta label="Role" value={study.role} />
          <Meta label="Timeline" value={study.timeline} />
        </dl>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {study.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-[var(--ad-border)] bg-[var(--ad-bg-soft)] px-3 py-1 font-mono text-[10px] text-[var(--ad-text-dim)]">
              {tag}
            </span>
          ))}
          <span className="ml-auto text-[12px] font-semibold text-[var(--ad-blue)]">{study.cardOutcome}</span>
        </div>
      </div>
    </Link>
  );
}
