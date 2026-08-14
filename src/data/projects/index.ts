import type { Project, ProjectInput } from "@/types/project";
import { getProjectMedia } from "@/lib/media";
import { playstationMiniGamesFramework } from "./playstation-mini-games-framework";
import { educationalGamesFramework } from "./educational-games-framework";
import { bearWithMe } from "./bear-with-me";
import { phageborn } from "./phageborn";
import { tabTimeWorld } from "./tab-time-world";
import { ribar } from "./ribar";
import { kellsConvergent } from "./kells-convergent";
import { tondoJigsaw } from "./tondo-jigsaw";
import { bajkovitaSuma } from "./bajkovita-suma";
import { vrTrainingVirtualAcademy } from "./vr-training-virtual-academy";
import { virtualTour360 } from "./360-vr-virtual-tour";
import { promotionalQrOcrApp } from "./promotional-qr-ocr-app";
import { speleonScapeXCapore } from "./speleon-scape-x-capore";
import { becarac } from "./becarac";

const projectInputs: ProjectInput[] = [
  playstationMiniGamesFramework,
  educationalGamesFramework,
  bearWithMe,
  phageborn,
  tabTimeWorld,
  ribar,
  kellsConvergent,
  tondoJigsaw,
  bajkovitaSuma,
  vrTrainingVirtualAcademy,
  virtualTour360,
  promotionalQrOcrApp,
  speleonScapeXCapore,
  becarac,
];

function validateProjects(inputs: ProjectInput[]) {
  const slugs = new Set<string>();
  const ids = new Set<string>();

  for (const project of inputs) {
    if (slugs.has(project.slug)) {
      throw new Error(`Duplicate project slug: ${project.slug}`);
    }
    slugs.add(project.slug);

    if (ids.has(project.id)) {
      throw new Error(`Duplicate project id: ${project.id}`);
    }
    ids.add(project.id);

    if (!project.title || !project.category || !project.overview.length || !project.role) {
      throw new Error(`Project "${project.slug}" is missing required fields`);
    }
  }

  const featuredCount = inputs.filter((project) => project.featured).length;
  if (featuredCount !== 6) {
    throw new Error(`Expected exactly 6 featured projects, found ${featuredCount}`);
  }
}

validateProjects(projectInputs);

export const allProjects: Project[] = [...projectInputs]
  .sort((a, b) => a.order - b.order)
  .map((project) => ({
    ...project,
    media: getProjectMedia(project.slug),
  }));

export const featuredProjects: Project[] = allProjects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function getPreviousProject(slug: string): Project | undefined {
  const index = allProjects.findIndex((project) => project.slug === slug);
  if (index <= 0) return undefined;
  return allProjects[index - 1];
}

export function getNextProject(slug: string): Project | undefined {
  const index = allProjects.findIndex((project) => project.slug === slug);
  if (index === -1 || index === allProjects.length - 1) return undefined;
  return allProjects[index + 1];
}
