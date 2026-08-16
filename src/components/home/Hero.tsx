import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ToptalBadge } from "@/components/ui/ToptalBadge";

export function Hero() {
  return (
    <section className="bg-hero-background pt-4 pb-6 md:pt-5 md:pb-10">
      <Container>
        <div className="mx-auto max-w-[800px] text-center">
          <p className="text-eyebrow text-hero-text-secondary">Unity Developer</p>
          {/*
            Hero-only heading scale (not the shared .text-h1 token) so this
            refinement stays scoped to the Hero and doesn't shrink H1s on
            About/Contact/Projects/ProjectHero. font-size/line-height are set
            inline because mixing a plain CSS class with a competing Tailwind
            utility for the same property is unreliable here — see the
            layered-vs-unlayered CSS note in globals.css.
          */}
          <h1
            className="mt-6 font-bold tracking-tight text-hero-text-primary"
            style={{ fontSize: "clamp(1.5rem, 0.88rem + 2.65vw, 3rem)", lineHeight: 1.15 }}
          >
            Experienced Unity Developer building games, applications and interactive experiences.
          </h1>
          <p className="text-body-lg mt-6 text-hero-text-secondary">
            Unity developer with 10 years of professional experience across games, mobile
            applications, AR, VR and interactive installations.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/projects" variant="primary">
              View Projects
            </Button>
            <Button href="/contact" variant="secondaryInverse">
              Contact Me
            </Button>
          </div>

          <div className="mt-12 flex justify-center">
            {/* Scales the whole badge proportionally without touching its
                own markup/CSS — `zoom` (unlike `transform: scale`) shrinks
                the layout box too, so no leftover empty space around it. */}
            <div style={{ zoom: 0.5 }}>
              <ToptalBadge />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
