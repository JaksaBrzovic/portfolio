export interface KeyContribution {
  title?: string;
  description: string;
}

export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface TechnicalHighlight {
  title: string;
  description: string;
  image?: string;
  technologies?: string[];
}

export interface ProjectMedia {
  cover?: string;
  hero?: string;
  gallery: string[];
  videos: string[];
}

/** Raw, hand-authored project content — see src/data/projects/*.ts */
export interface ProjectInput {
  id: string;
  slug: string;
  title: string;
  category: string;
  featured: boolean;
  order: number;
  year?: string;
  role: string;
  team?: string;
  platforms: string[];
  client?: string;
  location?: string;
  /** Company employed for this project. Omit when `freelance` is true. */
  company?: string;
  /** Worked on this project as a freelancer rather than as an employee. */
  freelance?: boolean;
  overview: string[];
  myRole: string[];
  keyContributions: KeyContribution[];
  technologies: string[];
  challenges: ChallengeSolution[];
  technicalHighlights?: TechnicalHighlight[];
  results: string[];
}

/** ProjectInput plus media resolved from the filesystem at build time. */
export interface Project extends ProjectInput {
  media: ProjectMedia;
}
