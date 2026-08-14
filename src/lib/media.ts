import { existsSync } from "node:fs";
import path from "node:path";
import type { ProjectMedia } from "@/types/project";

const GALLERY_MAX = 4;
const VIDEO_MAX = 2;

export function publicPathExists(relativePath: string) {
  return existsSync(path.join(process.cwd(), "public", relativePath));
}

/**
 * Resolves a project's media from public/media/projects/{slug}/ using the
 * naming convention in PROJECT_STRUCTURE.md — only files that actually exist
 * on disk are returned, so pages never render broken media.
 */
export function getProjectMedia(slug: string): ProjectMedia {
  const root = `/media/projects/${slug}`;

  const cover = publicPathExists(`${root}/cover.webp`) ? `${root}/cover.webp` : undefined;
  const hero = publicPathExists(`${root}/hero.webp`) ? `${root}/hero.webp` : cover;

  const gallery = Array.from({ length: GALLERY_MAX }, (_, index) => {
    const file = `gallery-${String(index + 1).padStart(2, "0")}.webp`;
    return publicPathExists(`${root}/${file}`) ? `${root}/${file}` : null;
  }).filter((item): item is string => item !== null);

  const videos = Array.from({ length: VIDEO_MAX }, (_, index) => {
    const file = `video-${String(index + 1).padStart(2, "0")}.mp4`;
    return publicPathExists(`${root}/${file}`) ? `${root}/${file}` : null;
  }).filter((item): item is string => item !== null);

  return { cover, hero, gallery, videos };
}
