import { cn } from "@/lib/cn";

function parseStartSeconds(value: string): number | undefined {
  if (/^\d+$/.test(value)) return Number(value);

  const match = value.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if (!match) return undefined;

  const [, hours, minutes, seconds] = match;
  const total = Number(hours ?? 0) * 3600 + Number(minutes ?? 0) * 60 + Number(seconds ?? 0);
  return total > 0 ? total : undefined;
}

/** Extracts the video ID and optional start time from a normal YouTube watch/share URL. */
function parseYouTubeUrl(url: string): { id: string; start?: number } | null {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  const id = parsed.hostname.includes("youtu.be")
    ? parsed.pathname.slice(1)
    : parsed.searchParams.get("v");
  if (!id) return null;

  const t = parsed.searchParams.get("t") ?? parsed.searchParams.get("start");
  const start = t ? parseStartSeconds(t) : undefined;

  return { id, start };
}

export function YouTubeEmbed({
  url,
  title,
  className,
}: {
  url: string;
  title: string;
  className?: string;
}) {
  const parsed = parseYouTubeUrl(url);
  if (!parsed) return null;

  const embedUrl = `https://www.youtube-nocookie.com/embed/${parsed.id}${
    parsed.start ? `?start=${parsed.start}` : ""
  }`;

  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-lg bg-surface",
        className,
      )}
    >
      <iframe
        src={embedUrl}
        title={title}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
