import type { ProjectInput } from "@/types/project";

export const virtualTour360: ProjectInput = {
  id: "360-vr-virtual-tour",
  slug: "360-vr-virtual-tour",
  title: "360° VR Virtual Tour",
  category: "VR / Virtual Tour",
  featured: false,
  order: 11,
  duration: "Approximately 1 week",
  role: "Unity Developer",
  platforms: ["PICO"],
  overview: [
    "A VR virtual-tour application where 360° images are retrieved from a backend and displayed inside a PICO headset.",
    "Users navigate between locations through interactive hotspots that load other 360° images, creating a virtual walking experience.",
  ],
  myRole: ["I implemented the Unity-side integration with the backend and the VR presentation layer."],
  keyContributions: [
    { description: "Implemented backend communication." },
    { description: "Parsed JSON responses." },
    { description: "Retrieved 360° images from the backend." },
    { description: "Rendered 360° images onto a sphere." },
    { description: "Implemented hotspot navigation between locations." },
    { description: "Parsed localization information from the backend." },
    { description: "Sent analytics data back to the backend." },
  ],
  technologies: ["Unity", "C#", "PICO", "VR", "360° media", "JSON", "Backend API"],
  challenges: [
    {
      challenge: "The application needed to dynamically receive image and localization data from the backend.",
      solution: "Implemented the communication layer, JSON parsing and runtime presentation of the received 360° images.",
    },
  ],
  technicalHighlights: [
    {
      title: "Backend-Driven Virtual Tour",
      description:
        "The experience was not based on a fixed set of scenes. 360° content and localization data were received from the backend and interpreted by the Unity application.",
    },
  ],
  results: [
    "Implemented the PICO virtual-tour experience.",
    "Connected Unity to the backend.",
    "Delivered the required 360° navigation and analytics functionality in approximately one week.",
  ],
};
