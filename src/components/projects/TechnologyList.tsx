import { TechnologyTag } from "@/components/ui/TechnologyTag";

export function TechnologyList({ technologies }: { technologies: string[] }) {
  if (technologies.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <TechnologyTag key={tech} label={tech} />
      ))}
    </div>
  );
}
