import Image from "next/image";
import type { Project } from "@/types/project";
import { Container } from "@/components/ui/Container";
import { ProjectMeta } from "@/components/projects/ProjectMeta";

export function ProjectHero({ project }: { project: Project }) {
  const heroImage = project.media.hero ?? project.media.cover;

  return (
    <section className="pt-12 md:pt-16">
      <Container>
        <p className="text-eyebrow text-accent">{project.category}</p>
        <h1 className="text-h1 mt-4 max-w-[900px] text-text-primary">{project.title}</h1>
        <p className="text-body-lg mt-6 max-w-[760px] text-text-secondary">
          {project.overview[0]}
        </p>
        <ProjectMeta project={project} className="mt-6" />

        {heroImage ? (
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-lg md:mt-16 md:rounded-xl">
            <Image
              src={heroImage}
              alt={project.title}
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
