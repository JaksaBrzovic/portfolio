import NextLink from "next/link";
import type { Project } from "@/types/project";
import { Container } from "@/components/ui/Container";

interface ProjectNavigationProps {
  previous?: Project;
  next?: Project;
}

export function ProjectNavigation({ previous, next }: ProjectNavigationProps) {
  if (!previous && !next) return null;

  return (
    <section className="border-t border-border py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            {previous ? (
              <NextLink href={`/projects/${previous.slug}`} className="group block">
                <p className="text-metadata text-text-muted">← Previous Project</p>
                <p className="text-h3 mt-2 text-text-primary transition-colors duration-150 group-hover:text-accent">
                  {previous.title}
                </p>
              </NextLink>
            ) : null}
          </div>
          <div className="sm:text-right">
            {next ? (
              <NextLink href={`/projects/${next.slug}`} className="group block">
                <p className="text-metadata text-text-muted">Next Project →</p>
                <p className="text-h3 mt-2 text-text-primary transition-colors duration-150 group-hover:text-accent">
                  {next.title}
                </p>
              </NextLink>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
