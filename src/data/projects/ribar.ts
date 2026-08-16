import type { ProjectInput } from "@/types/project";

export const ribar: ProjectInput = {
  id: "ribar",
  slug: "ribar",
  title: "ribAR",
  category: "AR / Tourism",
  featured: false,
  order: 6,
  year: "~2022",
  role: "Unity Developer",
  company: "Delta Reality",
  team: "Jakša, Project Manager, Artist.",
  platforms: ["iOS"],
  client: "Municipality of Ližnjan",
  overview: [
    "ribAR is a tourism-focused AR application for the Municipality of Ližnjan.",
    "The application provides tourists with information about local points of interest through a map and location-based augmented reality experiences.",
    "When users approach a point of interest, they can activate the AR experience and see virtual characters representing a fisherman and fisherwoman.",
    "The characters provide local information through narrated dialogue in the local dialect.",
  ],
  myRole: [
    "I independently developed the Unity application with support from the project manager.",
    "I implemented the application from the ground up, including the AR experience, map integration, GPS-based behavior, character presentation, lighting synchronization and responsive iOS UI.",
  ],
  keyContributions: [
    { description: "Built the application from scratch." },
    { description: "Implemented Mapbox map integration." },
    { description: "Implemented location-based point-of-interest behavior." },
    { description: "Implemented GPS proximity logic." },
    { description: "Implemented AR character placement." },
    { description: "Integrated character lip sync with audio playback." },
    { description: "Implemented real-world lighting synchronization for AR characters." },
    { description: "Implemented responsive iOS UI." },
    { description: "Tested GPS behavior at a separate physical location before deployment." },
  ],
  technologies: ["Unity", "C#", "iOS", "AR", "Mapbox", "GPS", "Light Probes / AR lighting system"],
  challenges: [
    {
      challenge:
        "The application needed to determine when users were close enough to a point of interest while working within the limitations of real-world GPS accuracy.",
      solution:
        "Implemented proximity logic and tested the location system at a separate outdoor location. The achieved positioning accuracy was approximately 10 meters.",
    },
    {
      challenge: "Virtual characters needed to visually respond to the lighting conditions of the real environment.",
      solution: "Implemented AR lighting synchronization so virtual lighting direction and intensity could respond to real-world lighting conditions.",
    },
    {
      challenge: "The AR characters needed to synchronize mouth movement with their spoken dialogue.",
      solution: "Integrated a lip-sync solution synchronized with audio playback.",
    },
    {
      challenge: "The UI needed to work correctly across different iOS device aspect ratios.",
      solution: "Implemented custom responsive UI behavior for the supported device configurations.",
    },
  ],
  results: [
    "Successfully deployed and used at the intended real-world location.",
    "Achieved approximately 10-meter GPS accuracy.",
    "Delivered the application in approximately 1.5 months with a very small team.",
  ],
};
