import type { KeyContribution } from "@/types/project";

export function ContributionList({ contributions }: { contributions: KeyContribution[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-12 md:gap-y-8">
      {contributions.map((item, index) => (
        <div key={item.title ?? index}>
          {item.title ? (
            <h3 className="text-h3 text-text-primary">{item.title}</h3>
          ) : null}
          <p className={item.title ? "text-body mt-2 text-text-secondary" : "text-body text-text-secondary"}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
