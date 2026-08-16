import type { ProjectInput } from "@/types/project";

export const tabTimeWorld: ProjectInput = {
  id: "tab-time-world",
  slug: "tab-time-world",
  title: "Tab Time World",
  category: "Mobile Application",
  featured: false,
  order: 13,
  year: "~2023",
  role: "Unity Developer / Unity Specialist",
  company: "Delta Reality",
  platforms: ["iOS", "Android"],
  overview: [
    "Tab Time World was a commercial mobile application built around creative interactive activities.",
    "Users could paint predefined images, compose music using sound clips, record audio, create simple character animations by defining movement paths, customize an avatar, watch YouTube videos inside the application, and browse a gallery of their creations.",
    "The painting system included undo/redo functionality.",
  ],
  myRole: [
    "I joined as additional Unity support and effectively acted as the Unity specialist on the project.",
    "The lead developer had less Unity experience, so I worked with a high degree of independence and provided technical direction within the Unity scope.",
  ],
  keyContributions: [
    { description: "Fixed and improved the custom flood-fill painting algorithm." },
    { description: "Investigated and repaired the undo/redo system." },
    { description: "Implemented character customization using Spine animations." },
    { description: "Implemented the introductory animation." },
    { description: "Implemented YouTube video playback using project tools." },
    { description: "Worked on the large video list UI using element recycling/pooling." },
    { description: "Helped stabilize and debug existing Unity systems." },
  ],
  technologies: ["Unity", "C#", "Spine", "DOTween", "YouTube playback", "UI recycling / pooling"],
  challenges: [
    {
      challenge: "The application used a custom flood-fill implementation for coloring predefined line-art images.",
      solution: "Investigated the existing implementation and fixed a bug that caused incorrect painting behavior.",
    },
    {
      challenge:
        "The existing undo/redo implementation contained bugs and required understanding the complete workflow before changes could safely be made.",
      solution: "Traced the system end-to-end and fixed the underlying issues.",
    },
    {
      challenge: "The application displayed a large list of videos. Rendering every list element simultaneously would have been inefficient.",
      solution: "Used a recycled/pool-based list approach where only the visible elements were actively represented while scrolling.",
    },
  ],
  technicalHighlights: [
    {
      title: "Flood-Fill Debugging",
      description: "Fixed a tricky bug in the application's custom flood-fill painting system.",
    },
    {
      title: "Undo / Redo System Repair",
      description: "Investigated and repaired an existing undo/redo implementation rather than replacing it blindly.",
    },
    {
      title: "Recycled Video List",
      description: "Worked with the project's list-recycling system so large collections of YouTube videos could be displayed efficiently.",
    },
  ],
  results: [
    "Commercial application released on iOS and Android.",
    "Resolved difficult existing Unity bugs.",
    "Implemented multiple user-facing systems.",
    "Provided Unity expertise during the later stage of the project.",
  ],
};
