import type { ProjectInput } from "@/types/project";

export const playstationMiniGamesFramework: ProjectInput = {
  id: "playstation-mini-games-framework",
  slug: "playstation-mini-games-framework",
  title: "Playstation Games Framework",
  category: "Games / Framework",
  featured: true,
  order: 1,
  year: "2024–2026",
  role: "Unity Developer / Framework Developer",
  freelance: true,
  platforms: ["PC", "PlayStation"],
  overview: [
    "A reusable Unity framework developed to support the production of a large number of small games and game variations.",
    "The framework provided shared systems for gameplay architecture, UI and menus, input, level and data configuration, scene management, audio, save/progression and controller support.",
    "The framework was designed around reuse and modification, allowing the same underlying systems to support multiple different games while still being adaptable to the specific requirements of each project.",
    "Approximately 25+ small games were produced in the wider development effort, based on around eight core game concepts and additional reskins and modified versions.",
  ],
  myRole: [
    "I designed and implemented the framework independently.",
    "My responsibilities included the architecture and implementation of the reusable systems, as well as technical problem solving across the games built on top of the framework.",
    "I also worked on PlayStation-specific implementation and debugging.",
  ],
  keyContributions: [
    {
      title: "Reusable Game Architecture",
      description:
        "Built shared gameplay architecture that could be reused across multiple small game projects.",
    },
    {
      title: "Shared UI and Menu Systems",
      description:
        "Created reusable UI and menu functionality to reduce repeated implementation across projects.",
    },
    {
      title: "Flexible Input Layer",
      description:
        "Designed an input layer supporting PC input for development/testing as well as PlayStation input. The system also accounted for regional PlayStation controller differences, including Japanese and Western input mappings.",
    },
    {
      title: "Controller Support",
      description: "Implemented reusable controller support that could be adapted between projects.",
    },
    {
      title: "PlayStation Features",
      description:
        "Worked on PlayStation-specific systems and debugging, including trophies, input blocking, Activities and platform-specific behavior.",
    },
    {
      title: "Editor Tooling",
      description:
        "Created tools to automate repetitive development tasks. One example was an editor tool that could automatically generate puzzle pieces from an image for a puzzle game. Additional editor tooling was used to automate level generation for games such as Current and Magnitude.",
    },
  ],
  technologies: [
    "Unity",
    "C#",
    "PlayStation",
    "PC",
    "Unity Input System / custom input layer",
    "Editor tooling",
    "Prefab workflows",
    "Reusable systems",
  ],
  challenges: [
    {
      challenge:
        "Different projects needed different input behavior while still supporting common PC and PlayStation workflows.",
      solution:
        "Created a flexible input layer that separated the underlying input handling from project-specific behavior, allowing the systems to be reused and modified between projects.",
    },
    {
      challenge:
        "The games required platform-specific systems and debugging beyond normal gameplay development.",
      solution:
        "Implemented and debugged PlayStation-specific functionality including trophies, Activities and input blocking.",
    },
    {
      challenge: "Several games required repetitive generation of content such as puzzle pieces and levels.",
      solution: "Created Unity editor tooling to automate these workflows and reduce manual work.",
    },
  ],
  technicalHighlights: [
    {
      title: "Flexible Input Architecture",
      description:
        "A reusable input layer supported development on PC while accommodating PlayStation controller behavior and regional mapping differences.",
    },
    {
      title: "Editor-Based Content Generation",
      description:
        "Custom Unity editor tools automated puzzle-piece generation and level creation for multiple games.",
    },
    {
      title: "Reusable Framework Architecture",
      description:
        "The framework allowed shared systems to be reused across many small games while remaining open to modification for individual project requirements.",
    },
  ],
  results: [
    "25+ small games were produced in the wider development effort.",
    "Approximately eight core game concepts were expanded through reskins and gameplay modifications.",
    "Shared systems reduced repeated implementation across projects.",
    "Editor tooling automated repetitive development workflows.",
    "All games were shipped/released.",
  ],
};
