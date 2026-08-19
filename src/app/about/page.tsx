import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ToptalBadge } from "@/components/ui/ToptalBadge";
import { publicPathExists } from "@/lib/media";

const PORTRAIT_PATH = "/media/site/profile.webp";

const description =
  "Unity developer with around 10 years of professional experience developing games, applications and interactive experiences.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
    title: `About — ${siteConfig.name}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `About — ${siteConfig.name}`,
    description,
  },
};

const bioParagraphs = [
  "I'm a Unity developer with over 10 years of professional experience developing games, applications and interactive experiences.",
  "Throughout my career I've worked across PC, console, mobile, AR, VR and specialized interactive installations.",
  "My work has included gameplay programming, UI systems, input systems, multiplayer, reusable frameworks, editor tooling, AR/VR development, legacy project modernization and technical problem solving.",
  "I've often taken ownership of systems, solving difficult technical problems, working with existing codebases, and building reusable tools and frameworks that make development faster and more reliable. I also enjoy building systems from scratch, as it allows me to establish a clean, maintainable, and efficient architecture from the very beginning.",
  "My main focus is always to clearly understand the client's goals, which is why I value clear communication and actively strive for it. Once I have a clear understanding of the client's vision, I focus on implementing the solution as effectively as possible while keeping it as simple as possible.",
  "I enjoy having the bigger picture in mind and making technical plans and estimates. I also believe in transparency throughout a project so I can always clearly explain what I have been working on, how much time it has taken, and why.",
  "A happy client is what makes me happy. My main goal is always to deliver high-quality work as quickly as possible, and I challenge myself to do just that on every project.",
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
            <div>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                <Image
                  src={PORTRAIT_PATH}
                  alt={siteConfig.name}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 flex justify-center">
                <ToptalBadge />
              </div>
            </div>
          ) : null}

          <div className="flex max-w-[720px] flex-col gap-4">
            {bioParagraphs.map((paragraph, index) => (
              <p key={index} className="text-body text-text-secondary">
                {paragraph}
              </p>
            ))}
            {!hasPortrait ? (
              <div className="mt-4">
                <ToptalBadge />
              </div>
            ) : null}
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
