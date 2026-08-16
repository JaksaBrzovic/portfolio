import type { Project } from "@/types/project";
import { cn } from "@/lib/cn";

interface ProjectMetaProps {
  project: Pick<Project, "role" | "platforms" | "year" | "team" | "company" | "freelance">;
  fields?: Array<"role" | "platforms" | "year" | "team">;
  className?: string;
}

/** Single source of truth for how work context reads across cards and detail pages. */
function getWorkContext(project: Pick<Project, "company" | "freelance">) {
  if (project.freelance) return "As a freelancer";
  if (project.company) return `As an employee at ${project.company}`;
  return null;
}

export function ProjectMeta({
  project,
  fields = ["role", "platforms", "year"],
  className,
}: ProjectMetaProps) {
  const workContext = getWorkContext(project);

  const items = fields
    .map((field) => {
      if (field === "platforms") {
        return project.platforms.length > 0 ? project.platforms.join(" / ") : null;
      }
      return project[field] ?? null;
    })
    .filter((value): value is string => Boolean(value));

  if (items.length === 0 && !workContext) return null;

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {workContext ? <p className="text-metadata text-text-muted">{workContext}</p> : null}
      {items.length > 0 ? (
        <p className="text-metadata text-text-muted">{items.join(" · ")}</p>
      ) : null}
    </div>
  );
}
