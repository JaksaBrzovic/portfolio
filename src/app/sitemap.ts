import type { MetadataRoute } from "next";
import { allProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.siteUrl}/`, priority: 1 },
    { url: `${siteConfig.siteUrl}/projects`, priority: 0.9 },
    { url: `${siteConfig.siteUrl}/about`, priority: 0.6 },
    { url: `${siteConfig.siteUrl}/contact`, priority: 0.6 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${siteConfig.siteUrl}/projects/${project.slug}`,
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
