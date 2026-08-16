import type { ProjectInput } from "@/types/project";

export const promotionalQrOcrApp: ProjectInput = {
  id: "promotional-qr-ocr-app",
  slug: "promotional-qr-ocr-app",
  title: "Promotional QR/OCR Mobile App",
  category: "Mobile / Computer Vision",
  featured: false,
  order: 10,
  year: "2024",
  role: "Unity Developer",
  freelance: true,
  platforms: ["iOS", "Android"],
  overview: [
    "A promotional mobile application built for a marketing campaign where users scanned receipts containing high-density QR codes and entered their phone number to participate in a prize program.",
    "The application also supported OCR-based recognition of textual codes.",
  ],
  myRole: [
    "I was responsible for the Unity implementation and solving the key technical problems required to make the scanning experience work reliably on both iOS and Android.",
  ],
  keyContributions: [
    { description: "Implemented high-density QR scanning." },
    { description: "Integrated Google ML Kit-based recognition." },
    { description: "Investigated iOS and Android camera-specific issues." },
    { description: "Worked with the creator of the Google ML Kit Unity implementation to resolve camera-related problems." },
    { description: "Implemented OCR." },
    { description: "Added handling for common OCR recognition errors." },
    { description: "Improved recognition reliability for textual codes." },
    { description: "Delivered the application within the campaign deadline." },
  ],
  technologies: ["Unity", "C#", "iOS", "Android", "Google ML Kit", "QR recognition", "OCR"],
  challenges: [
    {
      challenge:
        "Available plugins did not provide sufficiently reliable recognition of the campaign's high-density QR codes on both iOS and Android.",
      solution:
        "Worked with Google ML Kit and investigated platform-specific camera behavior to achieve reliable scanning. The implementation required consultation with the creator of the Google ML Kit Unity implementation to resolve camera-specific issues.",
    },
    {
      challenge: "OCR could misinterpret certain characters.",
      solution: "Implemented additional recognition logic to identify known recognition errors and reduce incorrect textual-code results.",
    },
    {
      challenge: "The application had to be ready in time for the promotional campaign.",
      solution: "Focused development on the critical scanning and recognition pipeline and delivered the required functionality within the deadline.",
    },
  ],
  technicalHighlights: [
    {
      title: "High-Density QR Recognition",
      description: "Solved a difficult cross-platform camera-recognition problem where available Unity plugins were not sufficiently reliable.",
    },
    {
      title: "OCR Error Handling",
      description: "Added logic to recognize and compensate for common OCR character mistakes.",
    },
  ],
  results: [
    "Delivered the application in approximately 1.5 months.",
    "Successfully met the promotional campaign deadline.",
    "Enabled QR and OCR-based participation on both iOS and Android.",
  ],
};
