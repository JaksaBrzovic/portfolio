import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";

export const metadata: Metadata = {
  title: "Contact",
  description: "For Unity development, technical support, project work or collaboration, get in touch directly.",
  openGraph: {
    title: `Contact — ${siteConfig.name}`,
    description:
      "For Unity development, technical support, project work or collaboration, get in touch directly.",
  },
};

const professionalLinks = [
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "GitHub", href: siteConfig.github },
  { label: "CV", href: siteConfig.cvUrl },
].filter((link): link is { label: string; href: string } => Boolean(link.href));

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Let's talk."
      description="For Unity development, technical support, project work or collaboration, get in touch directly."
      headingAs="h1"
      align="center"
      size="large"
    >
      <div className="flex flex-col items-center gap-8">
        {siteConfig.email ? (
          <Button href={`mailto:${siteConfig.email}`} variant="primary">
            {siteConfig.email}
          </Button>
        ) : null}

        {professionalLinks.length > 0 ? (
          <div className="flex items-center gap-6">
            {professionalLinks.map((link) => (
              <Link key={link.label} href={link.href} underline={false} className="text-sm font-medium">
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </Section>
  );
}
