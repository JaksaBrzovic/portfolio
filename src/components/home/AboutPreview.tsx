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
            I&apos;m a Unity developer with over 10 years of professional experience developing
            games, applications and interactive experiences.
          </p>
          <p className="text-body mt-4 text-text-secondary">
            Throughout my career I&apos;ve worked across PC, console, mobile, AR, VR and
            specialized interactive installations.
          </p>
          <p className="text-body mt-4 text-text-secondary">
            My work has included gameplay programming, UI systems, input systems, multiplayer,
            reusable frameworks, editor tooling, AR/VR development, legacy project modernization
            and technical problem solving.
          </p>
          <Link href="/about" className="mt-6 inline-block font-medium">
            More About Me →
          </Link>
        </div>
      </div>
    </Section>
  );
}
