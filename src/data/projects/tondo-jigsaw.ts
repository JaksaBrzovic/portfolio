import type { ProjectInput } from "@/types/project";

export const tondoJigsaw: ProjectInput = {
  id: "tondo-jigsaw",
  slug: "tondo-jigsaw",
  title: "Tondo Jigsaw",
  category: "Legacy Project Modernization / Mobile Game",
  featured: false,
  order: 8,
  year: "2025–2026",
  role: "Unity Developer",
  freelance: true,
  platforms: ["iOS", "Android"],
  overview: [
    "Tondo Jigsaw was an older mobile application that had previously been released but no longer worked correctly on modern mobile devices.",
    "The project required a major Unity modernization from Unity 4 to Unity 2022.",
    "The application also depended on a large number of outdated plugins and an old UI framework.",
  ],
  myRole: ["I was the sole developer responsible for modernizing the application and bringing it back to a releasable state."],
  keyContributions: [
    { description: "Upgraded the project from Unity 4 to Unity 2022." },
    { description: "Resolved obsolete API and compile issues." },
    { description: "Replaced or updated outdated plugins." },
    { description: "Worked around the legacy NGUI UI system." },
    { description: "Updated Facebook integration." },
    { description: "Updated gallery functionality." },
    { description: "Updated photo-taking functionality." },
    { description: "Updated social sharing." },
    { description: "Updated advertising systems." },
    { description: "Updated analytics." },
    { description: "Fixed issues in the version of the application supplied by the client." },
    { description: "Resolved App Store and Google Play deployment issues." },
    { description: "Implemented a subsequent Android security-related Unity update." },
  ],
  technologies: ["Unity", "Unity 4", "Unity 2022", "NGUI", "iOS", "Android", "Mobile deployment"],
  challenges: [
    {
      challenge: "The project contained a large amount of obsolete code and plugin integrations.",
      solution:
        "Systematically removed or updated incompatible components, replaced outdated integrations and resolved the resulting compilation and runtime issues.",
    },
    {
      challenge: "Multiple plugins were obsolete, including systems for Facebook, gallery, photography, sharing, advertising and analytics.",
      solution: "Updated or replaced the integrations required for the modern mobile builds.",
    },
    {
      challenge: "The client did not have the latest version of the application.",
      solution:
        "Worked from the available project version, identified and fixed issues in that version and prepared the application for modern store deployment.",
    },
    {
      challenge: "The project encountered deployment problems on both major mobile stores.",
      solution: "Resolved project/configuration issues required to successfully publish the application.",
    },
  ],
  technicalHighlights: [
    {
      title: "Large Unity Version Migration",
      description: "Migrated a legacy Unity 4 project to Unity 2022 while resolving compatibility issues throughout the project and plugin ecosystem.",
    },
    {
      title: "Legacy Plugin Modernization",
      description: "Replaced or updated multiple outdated integrations that prevented the project from functioning correctly on modern platforms.",
    },
    {
      title: "Deployment Recovery",
      description: "Resolved issues preventing successful App Store and Google Play deployment.",
    },
  ],
  results: [
    "Modernized a previously released legacy application.",
    "Successfully published the updated application to both iOS and Android stores.",
    "Completed the required security-related Unity update.",
  ],
};
