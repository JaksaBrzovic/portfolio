export interface SiteConfig {
  name: string;
  role: string;
  siteUrl: string;
  email?: string;
  linkedin?: string;
  github?: string;
  cvUrl?: string;
  toptalUrl?: string;
}

/**
 * cvUrl / toptalUrl are intentionally left undefined —
 * CONTENT_PLAN.md defers these to "final approved content/configuration" and
 * explicitly forbids guessing them. Components must only render a link when
 * its destination is defined.
 */
export const siteConfig: SiteConfig = {
  name: "Jakša Brzović",
  role: "Unity Developer",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jaksabrzovic.com",
  email: "jaksabrzovic@gmail.com",
  linkedin: "https://www.linkedin.com/in/jakb/",
  github: "https://github.com/JaksaBrzovic",
  cvUrl: undefined,
  toptalUrl: undefined,
};
