import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  allProjects,
  getProjectBySlug,
  getNextProject,
  getPreviousProject,
} from "@/data/projects";
import { siteConfig } from "@/data/site";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { ContributionList } from "@/components/projects/ContributionList";
import { TechnologyList } from "@/components/projects/TechnologyList";
import { ChallengeSolutionList } from "@/components/projects/ChallengeSolutionList";
import { TechnicalHighlights } from "@/components/projects/TechnicalHighlights";
import { ResultsImpact } from "@/components/projects/ResultsImpact";
import { ProjectYouTubeVideos } from "@/components/projects/ProjectYouTubeVideos";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectVideo } from "@/components/projects/ProjectVideo";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  const description = project.overview[0];
  const images = project.media.cover ? [project.media.cover] : undefined;

  return {
    title: project.title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/projects/${project.slug}`,
      title: `${project.title} — ${siteConfig.name}`,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${siteConfig.name}`,
      description,
      images,
    },
  };
}

function ParagraphGroup({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-body text-text-secondary">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const previous = getPreviousProject(slug);
  const next = getNextProject(slug);

  return (
    <>
      <ProjectHero project={project} />

      <ProjectSection title="Overview">
        <ParagraphGroup paragraphs={project.overview} />
      </ProjectSection>

      <ProjectSection title="My Role">
        <ParagraphGroup paragraphs={project.myRole} />
      </ProjectSection>

      <ProjectSection title="Key Contributions" contentWidth="full">
        <ContributionList contributions={project.keyContributions} />
      </ProjectSection>

      <ProjectSection title="Technologies" contentWidth="full">
        <TechnologyList technologies={project.technologies} />
      </ProjectSection>

      <ProjectSection title="Challenges & Solutions" contentWidth="full">
        <ChallengeSolutionList items={project.challenges} />
      </ProjectSection>

      <TechnicalHighlights highlights={project.technicalHighlights ?? []} />

      <ProjectSection title="Results / Impact">
        <ResultsImpact results={project.results} />
      </ProjectSection>

      <ProjectYouTubeVideos videos={project.youtubeVideos ?? []} title={project.title} />

      <ProjectGallery images={project.media.gallery} title={project.title} />
      <ProjectVideo
        videos={project.media.videos}
        poster={project.media.cover}
        title={project.title}
      />

      <ProjectNavigation previous={previous} next={next} />
    </>
  );
}
