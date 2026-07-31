import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import resumePdf from "../../imports/Abdul_resume-2026-1.pdf";
import { Container, Eyebrow, Reveal, Button } from "../components/ui-bits";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { SectionNav } from "../components/SectionNav";
import { brand, caseStudies, experience, skills, skillGroups, stats } from "../data/portfolio";

const sections = [
  { id: "hero", label: "Introduction" },
  { id: "work", label: "Selected work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Capabilities" },
  { id: "about", label: "Approach" },
  { id: "contact", label: "Contact" },
];

export function Home() {
  return (
    <>
      <SectionNav sections={sections} />
      <section
        id="hero"
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          event.currentTarget.style.setProperty("--hero-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
          event.currentTarget.style.setProperty("--hero-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
          event.currentTarget.style.setProperty("--hero-offset-x", `${(event.clientX - rect.left) * -0.025}px`);
          event.currentTarget.style.setProperty("--hero-offset-y", `${(event.clientY - rect.top) * -0.025}px`);
        }}
        onPointerLeave={(event) => {
          event.currentTarget.style.setProperty("--hero-x", "78%");
          event.currentTarget.style.setProperty("--hero-y", "34%");
          event.currentTarget.style.setProperty("--hero-offset-x", "0px");
          event.currentTarget.style.setProperty("--hero-offset-y", "0px");
        }}
        className="hero-future relative scroll-mt-24 overflow-hidden border-b border-[var(--ad-border)] pt-36 sm:pt-44"
      >
        <div aria-hidden className="hero-future-pattern absolute inset-0" />
        <Container className="relative z-10 pb-16 sm:pb-24">
          <Reveal>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--ad-blue)]">Independent product designer · Islamabad, Pakistan</p>
            <h1 className="mt-7 max-w-5xl font-display text-[clamp(2.45rem,6.2vw,5.35rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--ad-text)]">Modern Product<br />Design for the<br /><span className="text-[var(--ad-blue)]"><span className="">AI Era.</span></span></h1>
            <div className="mt-9">
              <div className="flex flex-wrap items-center gap-3">
                <Button href={resumePdf} download="Abdul_Salam_Product_Designer_Resume.pdf">
                  <Download className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                  Download Resume
                </Button>
                <Button onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" })} variant="secondary">
                  See my work <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="mt-5 flex flex-wrap gap-2" aria-label="Core expertise">
                {["Product Strategy", "UX Research", "Design Systems", "AI Workflows"].map((skill) => (
                  <span key={skill} aria-disabled="true" className="cursor-default rounded-xl border border-[var(--ad-border)] bg-[var(--ad-surface)] px-3 py-1.5 font-mono text-[10px] text-[var(--ad-text-faint)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
        <Container className="border-t border-[var(--ad-border)]">
          <div className="grid divide-y divide-[var(--ad-border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((stat) => <div key={stat.label} className="py-5 sm:px-7 sm:first:pl-0"><strong className="font-display text-[29px] font-semibold tracking-[-0.05em]">{stat.value}{stat.suffix}</strong><span className="ml-2 text-[13px] text-[var(--ad-text-dim)]">{stat.label}</span></div>)}
          </div>
        </Container>
      </section>

      <section id="work" className="scroll-mt-24 py-20 sm:py-28">
        <Container>
          <Reveal><div className="flex items-end justify-between gap-6"><div><Eyebrow>01 / Selected work</Eyebrow><h2 className="max-w-2xl font-display text-[clamp(1.7rem,3.1vw,2.8rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-[40px]">Design decisions with a measurable point of view.</h2></div><Link to="/work" className="hidden text-[14px] font-semibold text-[var(--ad-text-dim)] hover:text-[var(--ad-text)] sm:inline-flex sm:items-center sm:gap-2">All case studies <ArrowUpRight className="h-4 w-4" /></Link></div></Reveal>
          <div className="mt-12 space-y-5">
            {caseStudies.slice(0, 3).map((study, i) => <Reveal key={study.slug} delay={i * 0.06}><CaseStudyCard study={study} /></Reveal>)}
          </div>
        </Container>
      </section>

      <section id="experience" className="scroll-mt-24 border-y border-[var(--ad-border)] bg-[var(--ad-bg-soft)] py-20 sm:py-28">
        <Container><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><Reveal><Eyebrow>02 / Experience</Eyebrow><h2 className="font-display text-[clamp(1.7rem,3.1vw,2.8rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-[40px]">From operational detail to product direction.</h2></Reveal><div className="border-t border-[var(--ad-border)]">{experience.map((item, i) => <Reveal key={item.company} delay={i * 0.06}><article className="grid gap-2 border-b border-[var(--ad-border)] py-6 sm:grid-cols-[150px_1fr]"><p className="font-mono text-[11px] leading-5 text-[var(--ad-text-faint)]">{item.period}</p><div><h3 className="font-display text-[17px] font-semibold tracking-[-0.025em]">{item.role} <span className="font-normal text-[var(--ad-text-dim)]">/ {item.company}</span></h3><p className="mt-3 text-[14px] leading-6 text-[var(--ad-text-dim)]">{item.body}</p></div></article></Reveal>)}</div></div></Container>
      </section>

      <section id="skills" className="scroll-mt-24 py-20 sm:py-28"><Container><Reveal><Eyebrow>03 / Capabilities</Eyebrow><h2 className="max-w-2xl font-display text-[clamp(1.7rem,3.1vw,2.8rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-[40px]">A practical product-design toolkit.</h2></Reveal><div className="mt-12 grid gap-5 md:grid-cols-4">{skillGroups.map((group) => <Reveal key={group}><div className="border-t-2 border-[var(--ad-text)] pt-4"><p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ad-text-faint)]">{group}</p><ul className="mt-5 space-y-3">{skills.filter((s) => s.group === group).map((skill) => <li key={skill.name} className="text-[15px] font-medium text-[var(--ad-text-dim)]">{skill.name}</li>)}</ul></div></Reveal>)}</div></Container></section>

      <section id="about" className="scroll-mt-24 border-y border-[var(--ad-border)] py-20 sm:py-28"><Container><div className="grid gap-10 lg:grid-cols-[1fr_1fr]"><Reveal><Eyebrow>04 / Approach</Eyebrow><h2 className="font-display text-[clamp(1.7rem,3.1vw,2.8rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-[40px]">Design is how strategy becomes usable.</h2></Reveal><Reveal delay={0.08}><div className="space-y-6 text-[16px] leading-7 text-[var(--ad-text-dim)]"><p>My work begins with the real workflow — where people hesitate, where teams compensate manually, and where the commercial cost of friction accumulates.</p><p>At Intercargo, that meant turning an email-based shipment process into a self-service experience, simplifying booking from 7+ steps into four clear stages, and building a 200+ component design system so the product could improve without losing coherence.</p><Link to="/about" className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--ad-text)]">More about my approach <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div></Reveal></div></Container></section>

      <section id="contact" className="scroll-mt-24 py-20 sm:py-28"><Container><Reveal><div className="border border-[var(--ad-text)] p-7 sm:p-12 bg-[#00000000]"><Eyebrow>05 / Contact</Eyebrow><h2 className="max-w-3xl font-display text-[clamp(2rem,4.5vw,4rem)] font-semibold leading-[1] tracking-[-0.05em] text-[64px]">Have a product problem worth solving?</h2><div className="mt-9"><Button href={`mailto:${brand.email}`}>Let’s start a conversation <ArrowRight className="h-4 w-4" /></Button></div><p className="mt-6 text-[14px] text-[var(--ad-text-dim)]">{brand.email} · Available for product design roles and focused collaborations.</p></div></Reveal></Container></section>
    </>
  );
}
