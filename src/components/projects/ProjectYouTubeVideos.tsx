import { Container } from "@/components/ui/Container";
import { YouTubeEmbed } from "@/components/projects/YouTubeEmbed";

export function ProjectYouTubeVideos({ videos, title }: { videos: string[]; title: string }) {
  if (videos.length === 0) return null;

  return (
    <section className="py-12 md:py-16">
      <Container>
        <h2 className="text-h2 text-text-primary">Video</h2>
        <div className="mt-8 flex flex-col gap-6">
          {videos.map((url) => (
            <YouTubeEmbed key={url} url={url} title={`${title} project video`} />
          ))}
        </div>
      </Container>
    </section>
  );
}
