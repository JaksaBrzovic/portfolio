import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { publicPathExists } from "@/lib/media";

const PORTRAIT_PATH = "/media/site/profile.webp";

export const metadata: Metadata = {
  title: "About",
  description:
    "Unity developer with around 10 years of professional experience developing games, applications and interactive experiences.",
  openGraph: {
    title: `About — ${siteConfig.name}`,
    description:
      "Unity developer with around 10 years of professional experience developing games, applications and interactive experiences.",
  },
};

const bioParagraphs = [
  "I'm a Unity developer with around 10 years of professional experience developing games, applications and interactive experiences.",
  "Throughout my career I've worked across PC, console, mobile, AR, VR and specialized interactive installations.",
  "My work has included gameplay programming, UI systems, input systems, multiplayer debugging, reusable frameworks, editor tooling, AR/VR development, legacy project modernization and technical problem solving.",
  "I enjoy projects where I can take ownership of a system, understand how it works end-to-end and find a practical solution to a difficult technical problem.",
];

const quickFacts = [
  { label: "Experience", value: "10 years of professional Unity development experience." },
  { label: "Primary Technology", value: "Unity / C#" },
  { label: "Platforms", value: "PC, PlayStation, Xbox, iOS, Android, WebGL, AR, VR" },
];

export default function AboutPage() {
  const hasPortrait = publicPathExists(PORTRAIT_PATH);

  return (
    <>
      <Section
        eyebrow="About Me"
        title="Unity Developer with a broad range of production experience."
        headingAs="h1"
      >
        <div className={hasPortrait ? "grid grid-cols-1 gap-10 md:grid-cols-[320px_1fr] md:gap-16" : ""}>
          {hasPortrait ? (
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
              <Image
                src={PORTRAIT_PATH}
                alt={siteConfig.name}
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          ) : null}

          <div className="flex max-w-[720px] flex-col gap-4">
            {bioParagraphs.map((paragraph, index) => (
              <p key={index} className="text-body text-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Quick Facts" title="Quick Facts" size="small">
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {quickFacts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-eyebrow text-text-secondary">{fact.label}</dt>
              <dd className="text-body mt-2 text-text-primary">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {siteConfig.cvUrl ? (
        <Section eyebrow="Credentials" title="CV" size="small">
          <Button href={siteConfig.cvUrl} variant="secondary">
            View CV
          </Button>
        </Section>
      ) : null}

      <Section align="center" size="large" title="Interested in working together?">
        <div className="mt-6 flex justify-center">
          <Button href="/contact" variant="primary">
            Contact Me
          </Button>
        </div>
      </Section>
    </>
  );
}
