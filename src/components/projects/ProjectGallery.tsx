import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  if (images.length === 0) return null;

  const [first, ...rest] = images;

  return (
    <section className="py-12 md:py-16">
      <Container>
        <h2 className="text-h2 text-text-primary">Gallery</h2>
        <div className="mt-8 flex flex-col gap-4 md:gap-6">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            <Image
              src={first}
              alt={`${title} — gallery image`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {rest.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {rest.map((image) => (
                <div key={image} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`${title} — gallery image`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
