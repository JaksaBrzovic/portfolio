import type { ProjectInput } from "@/types/project";

export const becarac: ProjectInput = {
  id: "becarac",
  slug: "becarac",
  title: "Becarluk Course",
  category: "Interactive Museum Installation / Computer Vision",
  featured: false,
  order: 14,
  year: "2022",
  role: "Unity Developer",
  company: "Delta Reality",
  platforms: ["Microsoft Azure Kinect"],
  location: "Museum of Bećarluk, Pleternica",
  overview: [
    "An interactive museum installation built around a large display and Microsoft Azure Kinect.",
    'The experience, called "Tečaj Bećarluka", allows visitors to interact with the application through body gestures.',
    "The experience guides the visitor through three stages where different virtual objects and corresponding bećarci are presented.",
    "The final stage creates a photo that can be associated with the visitor's account and made available for download.",
  ],
  myRole: ["I developed the Unity application for the Azure Kinect experience."],
  keyContributions: [
    { description: "Implemented gesture-based interaction." },
    { description: "Implemented language selection for Croatian and English." },
    { description: "Implemented the three-stage interactive experience." },
    { description: "Implemented interaction with virtual objects." },
    { description: "Implemented corresponding bećarac presentation." },
    { description: "Implemented the final photo-taking flow." },
    { description: "Integrated the photo upload/download workflow." },
    { description: "Implemented the required user approval before taking the photo." },
  ],
  technologies: ["Unity", "C#", "Microsoft Azure Kinect", "Gesture interaction", "Interactive installation"],
  challenges: [
    {
      challenge: "The virtual objects needed to remain correctly positioned relative to the visitor as the user moved.",
      solution: "Implemented the interaction and positioning behavior required to keep the objects aligned appropriately with the user's movement.",
    },
    {
      challenge: "The application combined gesture interaction, language selection, staged content and a final photo workflow.",
      solution: "Implemented the complete interaction flow inside Unity, including the final photo capture and upload process.",
    },
  ],
  results: [
    "Developed the Unity application for a museum installation.",
    "Successfully deployed as part of the Museum of Bećarluk experience in Pleternica.",
  ],
};
