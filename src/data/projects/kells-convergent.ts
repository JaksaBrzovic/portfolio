import type { ProjectInput } from "@/types/project";

export const kellsConvergent: ProjectInput = {
  id: "kells-convergent",
  slug: "kells-convergent",
  title: "Kells Convergent",
  category: "Interactive Book / Proof of Concept",
  featured: false,
  order: 7,
  year: "2026",
  role: "Unity Developer",
  freelance: true,
  platforms: [],
  client: "Steve Halloway",
  overview: [
    "Kells Convergent was a proof-of-concept interactive digital book combining narrative content with mini-games, video and interactive elements.",
    "The project was an autobiographical work inspired by the Bible and Christianity.",
    "The project was intended to be expanded into a larger interactive application, but the Kickstarter campaign did not succeed and the larger production did not proceed.",
  ],
  myRole: [
    "I was the sole developer working on the project during my involvement.",
    "I completed the requested proof of concept, fixed bugs and implemented modifications.",
    "I also analyzed the existing application architecture and prepared a plan for how the architecture could be adapted for a larger-scale version of the application.",
  ],
  keyContributions: [
    { description: "Took ownership of the existing Unity project." },
    { description: "Completed the requested proof of concept." },
    { description: "Redesigned a mini-game." },
    { description: "Implemented animation changes." },
    { description: "Analyzed the existing architecture." },
    { description: "Estimated the requirements of a potential full-scale version." },
    { description: "Proposed architectural changes required for expansion." },
  ],
  technologies: ["Unity", "C#"],
  challenges: [
    {
      challenge: "The existing application needed to be understood quickly before planning a potential larger version.",
      solution: "Analyzed the architecture and identified the changes that would be required to support a full-scale application.",
    },
    {
      challenge:
        "The project required evaluating the scope and architecture of a potential future version even though only a proof of concept was ultimately delivered.",
      solution: "Created a development and architecture plan for the potential full application.",
    },
  ],
  results: [
    "Successfully completed the requested proof of concept.",
    "Delivered the required modifications.",
    "Produced a technical plan for potential full-scale development.",
    "The planned larger project did not proceed after the Kickstarter campaign failed.",
  ],
};
