import type { ProjectInput } from "@/types/project";

export const educationalGamesFramework: ProjectInput = {
  id: "educational-games-framework",
  slug: "educational-games-framework",
  title: "Educational Games Framework",
  category: "Educational Games / Framework",
  featured: true,
  order: 2,
  year: "2018",
  role: "Unity Developer / Framework Developer",
  company: "Exordium Games",
  team: "5 developers total: Jakša and 4 junior developers. Each developer created approximately two games.",
  platforms: ["WebGL"],
  overview: [
    "A lightweight Unity framework created to support the rapid development of educational mini-games for Legends of Learning.",
    "The framework intentionally did not dictate the main game loop or UI of each game. Instead, it provided a flexible structure where developers could implement each individual game however they needed while requiring shared systems to remain consistent across projects.",
    "Ten educational games were created using the framework.",
    "Six of the ten games received bonuses because they were completed very early against the project's aggressive delivery target.",
  ],
  myRole: [
    "I independently designed and implemented the entire framework.",
    "I was also responsible for providing guidance to the four junior developers working on the games. This included architecture guidance, versioning guidance, game development guidance, planning guidance and general technical development support.",
  ],
  keyContributions: [
    {
      title: "Flexible Framework Architecture",
      description:
        "Designed a deliberately loose framework that left the main game loop and UI implementation to individual developers.",
    },
    {
      title: "Shared Dialog System",
      description:
        'Required all games to use the framework\'s dialog system so dialog steps and localization behavior remained consistent. The system was intentionally simple to use through hooks such as DialogSystem.PlayDialog("text").',
    },
    {
      title: "Level Selection",
      description: "Provided a shared level selection system required by the individual games.",
    },
    {
      title: "Legends of Learning Integration",
      description:
        "Implemented the required WebGL integration layer and hooks needed to communicate with the Legends of Learning environment at important points in the game lifecycle.",
    },
    {
      title: "Git Subrepository Workflow",
      description:
        "Structured the framework as a Git subrepository so it could be maintained separately while individual game projects could include it as a shared dependency. This allowed framework development and game development to remain separated.",
    },
    {
      title: "Junior Developer Guidance",
      description:
        "Supported four junior developers with architecture, versioning, development planning, implementation decisions and general Unity development guidance.",
    },
  ],
  technologies: ["Unity", "C#", "WebGL", "Git", "Git subrepositories", "Legends of Learning integration"],
  challenges: [
    {
      challenge:
        "The entire framework and game production effort had to be completed in approximately one and a half months.",
      solution:
        "Focused the framework on only the systems that genuinely needed to be shared while avoiding unnecessary restrictions on individual game implementation.",
    },
    {
      challenge:
        "Different games needed different gameplay loops and UI while some systems had to behave consistently across every game.",
      solution:
        "Designed the framework around a clear separation between individual implementation and required shared systems. Developers had freedom over game-specific implementation while shared functionality such as dialogs, localization, level selection and platform integration was standardized through simple hooks.",
    },
    {
      challenge:
        "The framework needed to remain independently maintainable while multiple developers worked on individual games.",
      solution: "Used a Git subrepository setup where the framework was maintained separately and consumed by each game's repository.",
    },
  ],
  technicalHighlights: [
    {
      title: "Flexible Shared-System Architecture",
      description:
        "Instead of imposing a complete game architecture, the framework enforced only the systems that needed to be consistent across games.",
    },
    {
      title: "Hook-Based Integration",
      description:
        "Shared functionality was exposed through simple calls/hooks, allowing individual games to integrate required framework functionality without having to understand its internal implementation.",
    },
    {
      title: "Git Subrepository Workflow",
      description: "The framework existed as an independently maintained repository and was included by individual game repositories.",
    },
  ],
  results: [
    "10 educational games were created.",
    "5 developers worked in parallel.",
    "6 games received early-delivery bonuses.",
    "The framework allowed different developers to implement different games while maintaining consistency in required shared systems.",
  ],
};
