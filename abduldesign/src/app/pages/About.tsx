import { ArrowRight, Download } from "lucide-react";
import resumePdf from "../../imports/Abdul_resume-2026-1.pdf";
import { Container, Reveal, Eyebrow, Button } from "../components/ui-bits";
import { CTABand } from "../components/CTABand";
import { brand, experience, expertise, philosophy } from "../data/portfolio";

export function About() {
  return (
    <>
      <section className="border-b border-[var(--ad-border)] pt-36 sm:pt-44">
        <Container className="pb-16 sm:pb-20">
          <Reveal>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--ad-blue)]">About Abdul Salam / Product Designer</p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,5.6vw,4.9rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
              Clear systems for<br />complex <span className="text-[var(--ad-blue)]">product work.</span>
            </h1>
            <div className="mt-9 grid max-w-4xl gap-7 border-t border-[var(--ad-border)] pt-6 md:grid-cols-[1.5fr_auto]">
              <p className="text-[16px] leading-7 text-[var(--ad-text-dim)]">
                I’m {brand.person}, a Product Designer with 4+ years of experience turning multi-stakeholder workflows into useful, measurable digital products for logistics, SaaS, fintech, healthcare, and eCommerce teams.
              </p>
              <Button href={resumePdf} download="Abdul_Salam_Product_Designer_Resume.pdf" variant="secondary"><Download className="h-4 w-4" /> Resume</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-[var(--ad-border)] bg-[var(--ad-bg-soft)] py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal><Eyebrow>01 / Experience</Eyebrow><h2 className="max-w-md font-display text-[clamp(1.7rem,3.1vw,2.8rem)] font-semibold leading-[1.04] tracking-[-0.04em]">Work grounded in the operation.</h2></Reveal>
            <div className="border-t border-[var(--ad-border)]">
              {experience.map((item, index) => (
                <Reveal key={item.company} delay={index * 0.06}>
                  <article className="grid gap-2 border-b border-[var(--ad-border)] py-6 sm:grid-cols-[155px_1fr]">
                    <p className="font-mono text-[11px] leading-5 text-[var(--ad-text-faint)]">{item.period}</p>
                    <div><h3 className="font-display text-[17px] font-semibold tracking-[-0.025em]">{item.role} <span className="font-normal text-[var(--ad-text-dim)]">/ {item.company}</span></h3><p className="mt-3 text-[14px] leading-6 text-[var(--ad-text-dim)]">{item.body}</p></div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal><Eyebrow>02 / What I bring</Eyebrow><h2 className="max-w-2xl font-display text-[clamp(1.7rem,3.1vw,2.8rem)] font-semibold leading-[1.04] tracking-[-0.04em]">Strategy, craft, and a shared language for shipping.</h2></Reveal>
          <div className="mt-12 grid border-l border-t border-[var(--ad-border)] sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item, index) => <Reveal key={item.title} delay={index * 0.05}><article className="lift min-h-[190px] border-b border-r border-[var(--ad-border)] bg-[var(--ad-surface)] p-6"><p className="font-mono text-[11px] text-[var(--ad-blue)]">0{index + 1}</p><h3 className="mt-8 font-display text-[17px] font-semibold tracking-[-0.025em]">{item.title}</h3><p className="mt-3 text-[14px] leading-6 text-[var(--ad-text-dim)]">{item.body}</p></article></Reveal>)}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--ad-border)] bg-[var(--ad-bg-soft)] py-16 sm:py-20">
        <Container><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><Reveal><Eyebrow>03 / Principles</Eyebrow><h2 className="max-w-md font-display text-[clamp(1.7rem,3.1vw,2.8rem)] font-semibold leading-[1.04] tracking-[-0.04em]">A design practice built for forward motion.</h2></Reveal><div className="border-t border-[var(--ad-border)]">{philosophy.map((item, index) => <Reveal key={item.title} delay={index * 0.06}><article className="grid gap-3 border-b border-[var(--ad-border)] py-6 sm:grid-cols-[62px_1fr]"><p className="font-mono text-[11px] text-[var(--ad-blue)]">0{index + 1}</p><div><h3 className="font-display text-[17px] font-semibold tracking-[-0.025em]">{item.title}</h3><p className="mt-2 text-[14px] leading-6 text-[var(--ad-text-dim)]">{item.body}</p></div></article></Reveal>)}</div></div></Container>
      </section>

      <section className="py-16 sm:py-20"><Container><Reveal><div className="flex flex-col justify-between gap-6 border border-[var(--ad-border-strong)] p-7 sm:flex-row sm:items-center sm:p-10"><div><p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ad-blue)]">Let’s collaborate</p><h2 className="mt-3 font-display text-[clamp(1.65rem,3.5vw,2.65rem)] font-semibold leading-[1.04] tracking-[-0.04em]">Have a product problem worth solving?</h2></div><Button href={`mailto:${brand.email}`}><span>Start a conversation</span><ArrowRight className="h-4 w-4" /></Button></div></Reveal></Container></section>
      <CTABand />
    </>
  );
}
