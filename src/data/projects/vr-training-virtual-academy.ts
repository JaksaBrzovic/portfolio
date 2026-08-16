import type { ProjectInput } from "@/types/project";

export const vrTrainingVirtualAcademy: ProjectInput = {
  id: "vr-training-virtual-academy",
  slug: "vr-training-virtual-academy",
  title: "VR Training / Virtual Academy",
  category: "VR / Training",
  featured: false,
  order: 10,
  year: "2020",
  role: "Unity Developer",
  company: "Delta Reality",
  platforms: ["HTC Vive"],
  overview: [
    "A pair of VR training scenarios developed within an existing VR training framework.",
    "The framework provided most of the underlying functionality, while the project work involved assembling the scenarios using Bolt visual scripting and implementing additional scenario-specific functionality.",
    "This project represents more execution-oriented work within an existing framework rather than a major architecture project.",
  ],
  myRole: [
    "I was the sole developer working on the scenarios.",
    "Each scenario took approximately 3–4 weeks.",
  ],
  keyContributions: [
    { description: "Built training scenarios using the existing VR framework." },
    { description: "Implemented scenario-specific interactions using Bolt visual scripting." },
    { description: "Implemented the required training interactions for the scenarios." },
    {
      title: "Gas Meter Feature",
      description:
        "Designed as a wearable device that communicated the approximate level of gas saturation in the surrounding environment, providing a visual gameplay/training indicator for hazardous gas conditions.",
    },
    {
      title: "Gas Exposure Scenario",
      description: "The trainee encounters a person unconscious due to gas exposure and must respond according to the training procedure.",
    },
    {
      title: "Valve / Hose Scenario",
      description: "The trainee interacts with valves and connects a hose as part of the training procedure.",
    },
  ],
  technologies: ["Unity", "Bolt Visual Scripting", "VR", "HTC Vive"],
  challenges: [
    {
      challenge: "The project already provided most of the required functionality.",
      solution: "Used the existing framework's systems and extended it with the new gas-meter feature and scenario-specific behavior.",
    },
  ],
  results: [
    "Implemented two VR training scenarios.",
    "Delivered the new gas-meter feature.",
    "Completed each scenario in approximately 3–4 weeks.",
  ],
};
