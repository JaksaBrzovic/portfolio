import { Container } from "@/components/ui/Container";
import { Link } from "@/components/ui/Link";
import type { ExternalResource } from "@/types/project";

export function ProjectExternalResources({ resources }: { resources: ExternalResource[] }) {
  if (resources.length === 0) return null;

  return (
    <section className="py-12 md:py-16">
      <Container>
        <h2 className="text-h2 text-text-primary">External Resources</h2>
        <ul className="mt-6 flex flex-col gap-3">
          {resources.map((resource) => (
            <li key={resource.url}>
              <Link
                href={resource.url}
                underline={false}
                className="inline-flex items-center gap-1 text-sm font-medium"
              >
                {resource.label}
                <span aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
