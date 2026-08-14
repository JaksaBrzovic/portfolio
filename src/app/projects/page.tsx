import type { Metadata } from "next";
import { allProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

const description =
  "A complete collection of games, mobile applications, AR, VR and interactive installations built by Jakša Brzović.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: "/projects",
    title: `Projects — ${siteConfig.name}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects — ${siteConfig.name}`,
    description,
  },
};

export default function ProjectsPage() {
  return (
    <Section
      eyebrow="Selected Work"
      title="Projects"
      description="A complete collection of games, mobile applications, AR, VR and interactive installations across platforms and disciplines."
      headingAs="h1"
    >
      <ProjectGrid projects={allProjects} />
    </Section>
  );
}
