import type { Metadata } from "next";
import { allProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A complete collection of games, mobile applications, AR, VR and interactive installations built by Jakša Brzović.",
  openGraph: {
    title: `Projects — ${siteConfig.name}`,
    description:
      "A complete collection of games, mobile applications, AR, VR and interactive installations built by Jakša Brzović.",
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
