export function TechnologyTag({ label }: { label: string }) {
  return (
    <span className="text-metadata rounded-sm border border-border px-2 py-1 text-text-secondary">
      {label}
    </span>
  );
}
