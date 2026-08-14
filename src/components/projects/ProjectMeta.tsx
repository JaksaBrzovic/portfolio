import type { Project } from "@/types/project";
import { cn } from "@/lib/cn";

interface ProjectMetaProps {
  project: Pick<Project, "role" | "platforms" | "year" | "duration" | "team">;
  fields?: Array<"role" | "platforms" | "year" | "duration" | "team">;
  className?: string;
}

export function ProjectMeta({
  project,
  fields = ["role", "platforms", "year", "duration"],
  className,
}: ProjectMetaProps) {
  const items = fields
    .map((field) => {
      if (field === "platforms") {
        return project.platforms.length > 0 ? project.platforms.join(" / ") : null;
      }
      return project[field] ?? null;
    })
    .filter((value): value is string => Boolean(value));

  if (items.length === 0) return null;

  return (
    <p className={cn("text-metadata text-text-muted", className)}>{items.join(" · ")}</p>
  );
}
