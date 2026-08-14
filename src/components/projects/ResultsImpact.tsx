export function ResultsImpact({ results }: { results: string[] }) {
  if (results.length === 0) return null;

  return (
    <ul className="flex flex-col gap-3">
      {results.map((result, index) => (
        <li key={index} className="text-body flex gap-3 text-text-secondary">
          <span aria-hidden="true" className="text-accent">
            —
          </span>
          {result}
        </li>
      ))}
    </ul>
  );
}
