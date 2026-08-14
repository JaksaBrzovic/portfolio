import Image from "next/image";
import type { TechnicalHighlight } from "@/types/project";
import { Container } from "@/components/ui/Container";
import { TechnologyTag } from "@/components/ui/TechnologyTag";
import { cn } from "@/lib/cn";

export function TechnicalHighlights({ highlights }: { highlights: TechnicalHighlight[] }) {
  if (highlights.length === 0) return null;

  return (
    <section className="py-12 md:py-16">
      <Container>
        <h2 className="text-h2 text-text-primary">Technical Highlights</h2>
        <div className="mt-10 flex flex-col gap-16">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className={cn(
                "grid grid-cols-1 items-center gap-8 md:gap-16",
                highlight.image ? "md:grid-cols-2" : ""
              )}
            >
              <div className={index % 2 === 1 && highlight.image ? "md:order-2" : undefined}>
                <p className="text-eyebrow text-accent">Technical Highlight</p>
                <h3 className="text-h3 mt-3 text-text-primary">{highlight.title}</h3>
                <p className="text-body mt-3 text-text-secondary">{highlight.description}</p>
                {highlight.technologies && highlight.technologies.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {highlight.technologies.map((tech) => (
                      <TechnologyTag key={tech} label={tech} />
                    ))}
                  </div>
                ) : null}
              </div>
              {highlight.image ? (
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
