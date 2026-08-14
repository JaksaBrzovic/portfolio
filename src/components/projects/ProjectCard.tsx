import NextLink from "next/link";
import Image from "next/image";
import type { Project } from "@/types/project";
import { ProjectMeta } from "@/components/projects/ProjectMeta";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <NextLink href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-surface">
        {project.media.cover ? (
          <Image
            src={project.media.cover}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-[350ms] ease-out group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center border border-border">
            <span className="text-metadata text-text-muted">{project.title}</span>
          </div>
        )}
      </div>

      <p className="text-eyebrow mt-4 text-accent">{project.category}</p>
      <h3 className="text-h3 mt-2 text-text-primary transition-colors duration-150 group-hover:text-accent">
        {project.title}
      </h3>
      <p className="text-body mt-2 text-text-secondary">{project.overview[0]}</p>
      <ProjectMeta project={project} className="mt-3" />
    </NextLink>
  );
}
