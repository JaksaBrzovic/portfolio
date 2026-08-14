import type { ChallengeSolution } from "@/types/project";

export function ChallengeSolutionList({ items }: { items: ChallengeSolution[] }) {
  return (
    <div className="flex flex-col gap-10">
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div>
            <p className="text-eyebrow text-text-muted">Challenge</p>
            <p className="text-body mt-2 text-text-secondary">{item.challenge}</p>
          </div>
          <div>
            <p className="text-eyebrow text-accent">Solution</p>
            <p className="text-body mt-2 text-text-secondary">{item.solution}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
