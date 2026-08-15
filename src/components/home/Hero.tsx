import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ToptalBadge } from "@/components/ui/ToptalBadge";

export function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center bg-hero-background">
      <Container>
        <div className="mx-auto max-w-[800px] text-center">
          <p className="text-eyebrow text-hero-text-secondary">Unity Developer</p>
          <h1 className="text-h1 mt-6 text-hero-text-primary">
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
            <ToptalBadge />
          </div>
        </div>
      </Container>
    </section>
  );
}
