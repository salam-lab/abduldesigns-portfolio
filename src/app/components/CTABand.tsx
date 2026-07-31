import { Container, Reveal, Button, ArrowText } from "./ui-bits";
import { brand } from "../data/portfolio";

export function CTABand() {
  return (
    <section className="relative py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden border border-[#303030] bg-[#303030] px-6 py-14 text-center sm:px-12">
            <div className="ambient -top-24 left-1/4 h-64 w-96" style={{ background: "rgba(207, 255, 114, 0.24)" }} />
            <div className="ambient -bottom-24 right-1/4 h-64 w-96" style={{ background: "rgba(94, 103, 230, 0.18)" }} />
            <div className="relative z-10">
              <h2 className="font-display text-[clamp(1.65rem,4.3vw,2.65rem)] leading-[1.05] text-white">
                Let's build something{" "}
                <span className="text-[var(--ad-lime)]">meaningful.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[16px] text-white/75">
                Open to full-time roles, contract projects, and interesting conversations.
                If you're building something people should love, let's talk.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button href={`mailto:${brand.email}`} variant="primary">
                  <ArrowText>Start a project</ArrowText>
                </Button>
                <Button to="/work" variant="secondary">
                  View all work
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
