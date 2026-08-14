import { featuredProjects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export function FeaturedProjects() {
  return (
    <Section
      eyebrow="Featured Work"
      title="Selected Projects"
      description="A selection of games, applications and interactive experiences built across platforms and disciplines."
    >
      <ProjectGrid projects={featuredProjects} />
    </Section>
  );
}
