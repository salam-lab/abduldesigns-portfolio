import { Container, Button } from "../components/ui-bits";

export function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <div className="ambient left-1/2 top-1/3 h-72 w-96 -translate-x-1/2" style={{ background: "var(--ad-glow)" }} />
      <Container className="relative z-10 text-center">
        <p className="font-display text-[clamp(5rem,18vw,12rem)] leading-none text-gradient">404</p>
        <h1 className="mt-2 font-display text-[24px]">This page wandered off.</h1>
        <p className="mx-auto mt-3 max-w-sm text-[15px] text-[var(--ad-text-dim)]">
          The link may be broken or the page may have moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button to="/" variant="primary">Back home</Button>
          <Button to="/work" variant="ghost">View work</Button>
        </div>
      </Container>
    </section>
  );
}
