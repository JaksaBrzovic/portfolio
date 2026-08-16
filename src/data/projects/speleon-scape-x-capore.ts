import type { ProjectInput } from "@/types/project";

export const speleonScapeXCapore: ProjectInput = {
  id: "speleon-scape-x-capore",
  slug: "speleon-scape-x-capore",
  title: "SPELEON (Barac caves)",
  category: "Interactive Museum Installation",
  featured: true,
  order: 11,
  year: "2022",
  role: "Unity Developer",
  company: "Delta Reality",
  team: "Jakša, Project Manager. I developed the complete Unity application.",
  platforms: ["Custom multitouch installation"],
  location: "SPELEON museum / Barać's Caves",
  overview: [
    "An interactive museum installation built for a large multitouch screen equipped with two physical magnifier devices.",
    "The magnifiers can be moved freely across the screen and reveal different anatomical layers of animals. One magnifier reveals a muscle layer while the other reveals a bone layer.",
    "The experience includes animal anatomy content, cave-related video and additional information.",
  ],
  myRole: [
    "I independently developed the complete Unity application.",
    "The main technical responsibility was integrating the physical magnifier hardware with the Unity application and using its position data to create the real-time visual effect.",
  ],
  keyContributions: [
    { description: "Developed the complete Unity application." },
    { description: "Integrated the multitouch environment." },
    { description: "Integrated the physical magnifier devices." },
    { description: "Implemented network-based device identification." },
    { description: "Implemented event handling for magnifier position data." },
    { description: "Implemented real-time mask movement." },
    { description: "Created separate anatomical visualization layers." },
    { description: "Implemented local video playback." },
    { description: "Implemented UI animations." },
  ],
  technologies: ["Unity", "C#", "Multitouch", "Network-connected hardware", "Masking", "Video playback"],
  challenges: [
    {
      challenge:
        "The physical magnifiers were external network-connected devices whose position and functionality had to be interpreted by the Unity application.",
      solution:
        "Investigated the device communication model and integrated its events into Unity so the application could respond to the magnifiers' real-time positions.",
    },
    {
      challenge: "Each magnifier needed to reveal a different visual layer while moving freely across the image.",
      solution:
        "Used masking to create independent reveal regions. As the physical magnifier moved, the mask position updated in real time and revealed the appropriate anatomical layer.",
    },
  ],
  technicalHighlights: [
    {
      title: "Network-Connected Physical Magnifiers",
      description: "The application identified the physical magnifiers as network devices and consumed events describing their position and behavior.",
    },
    {
      title: "Real-Time Masking",
      description: "The visual content inside each magnifier updated dynamically as the physical device moved across the screen.",
    },
  ],
  results: [
    "Complete Unity application developed in approximately 1.5 months.",
    "Successfully installed as a museum exhibit.",
    "The installation was deployed at SPELEON and is known to remain in the museum.",
  ],
  youtubeVideos: ["https://www.youtube.com/watch?v=FqjFfPXLdVA"],
};
