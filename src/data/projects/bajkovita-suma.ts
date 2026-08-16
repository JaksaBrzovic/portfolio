import type { ProjectInput } from "@/types/project";

export const bajkovitaSuma: ProjectInput = {
  id: "bajkovita-suma",
  slug: "bajkovita-suma",
  title: "Fairytale forest",
  category: "AR / Interactive Experience",
  featured: false,
  order: 7,
  year: "2021",
  role: "Unity Developer",
  company: "Delta Reality",
  platforms: ["iPad"],
  overview: [
    "Bajkovita Šuma is an AR experience where users explore a physical environment and discover virtual characters by scanning physical QR markers.",
    "Characters include fantasy and Slavic-inspired figures such as dragons, Perun and Baba Roga.",
    "The application also contains mini-games that contribute to unlocking characters.",
  ],
  myRole: [
    "I independently developed the AR portion of the application.",
    "A colleague assisted with the mini-games for a short period.",
  ],
  keyContributions: [
    { description: "Implemented the AR experience." },
    { description: "Implemented QR recognition and AR content anchoring." },
    { description: "Integrated character presentation." },
    { description: "Implemented Addressables." },
    { description: "Structured the application so another developer could work on mini-games without interfering with the AR development." },
    { description: "Investigated and fixed a QR recognition issue." },
  ],
  technologies: ["Unity", "C#", "AR", "iPad", "Addressables", "QR recognition"],
  challenges: [
    {
      challenge: "QR recognition did not behave correctly in one scenario.",
      solution: "Investigated the recognition behavior and fixed the issue so the AR content could be reliably anchored to the QR marker.",
    },
    {
      challenge: "AR development and mini-game development needed to happen without creating unnecessary conflicts.",
      solution: "Structured the relevant systems so the mini-game work could proceed independently.",
    },
  ],
  results: [
    "Completed and deployed the AR application for iPad.",
    "Enabled QR-triggered AR experiences.",
    "Supported parallel development between AR and mini-game work.",
  ],
  youtubeVideos: ["https://www.youtube.com/watch?v=4zdQx_XH_Bk"],
};
