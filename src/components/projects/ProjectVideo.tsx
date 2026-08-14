import { Container } from "@/components/ui/Container";

export function ProjectVideo({
  videos,
  poster,
  title,
}: {
  videos: string[];
  poster?: string;
  title: string;
}) {
  if (videos.length === 0) return null;

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-6">
          {videos.map((video) => (
            <video
              key={video}
              controls
              preload="metadata"
              poster={poster}
              className="aspect-video w-full rounded-lg bg-surface"
              aria-label={`${title} — video`}
            >
              <source src={video} type="video/mp4" />
            </video>
          ))}
        </div>
      </Container>
    </section>
  );
}
