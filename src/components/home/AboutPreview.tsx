import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Link } from "@/components/ui/Link";
import { publicPathExists } from "@/lib/media";

const PORTRAIT_PATH = "/media/site/profile.webp";

export function AboutPreview() {
  const hasPortrait = publicPathExists(PORTRAIT_PATH);

  return (
    <Section eyebrow="About Me" title="About Me">
      <div className={hasPortrait ? "grid grid-cols-1 gap-10 md:grid-cols-[320px_1fr] md:gap-16" : ""}>
        {hasPortrait ? (
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
            <Image
              src={PORTRAIT_PATH}
              alt="Jakša Brzović"
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>
        ) : null}

        <div className="max-w-[720px]">
          <p className="text-body-lg text-text-secondary">
            I&apos;m a Unity developer with around 10 years of professional experience working
            across games, mobile applications, AR, VR and interactive installations.
          </p>
          <p className="text-body mt-4 text-text-secondary">
            I&apos;ve worked on projects ranging from commercial games and mobile applications to
            museum installations, educational frameworks and specialized AR/VR experiences.
          </p>
          <p className="text-body mt-4 text-text-secondary">
            My work has often involved taking ownership of systems, solving difficult technical
            problems, working with existing codebases and building reusable tools and frameworks
            that make development faster and more reliable.
          </p>
          <Link href="/about" className="mt-6 inline-block font-medium">
            More About Me →
          </Link>
        </div>
      </div>
    </Section>
  );
}
