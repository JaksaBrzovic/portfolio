import type { ProjectInput } from "@/types/project";

export const bearWithMe: ProjectInput = {
  id: "bear-with-me",
  slug: "bear-with-me",
  title: "Bear With Me",
  category: "Adventure Game",
  featured: true,
  order: 3,
  year: "2017–2019",
  role: "Unity Developer",
  company: "Exordium Games",
  team: "2 programmers, 3 artists, writer/game designer, audio. The other programmer was the lead developer. My official role was Developer, but I worked independently across the game's systems.",
  platforms: ["PC"],
  overview: [
    "Bear With Me is a classic point-and-click adventure game centered around Amber Ashworth's search for her missing brother.",
    "The story gradually reveals the truth behind his disappearance, leading to the emotional conclusion of the game.",
  ],
  myRole: [
    "I worked on the PC version. I did not work on the console/mobile ports.",
    "I worked across the game's gameplay and technical systems using Adventure Creator as the underlying framework.",
    "Although another developer was the lead and handled more of the task planning, I was highly autonomous and worked independently across the systems assigned to me.",
    "I also participated in gameplay design and puzzle brainstorming with the team.",
  ],
  keyContributions: [
    { description: "Implemented gameplay systems using Adventure Creator." },
    { description: "Worked across the game's adventure systems." },
    { description: "Prototyped gameplay and puzzle ideas." },
    { description: "Designed and fully implemented one puzzle with complete ownership." },
    { description: "Contributed implementation work to additional puzzles and gameplay situations." },
    { description: "Participated in gameplay brainstorming and design." },
    {
      title: "Technical Writing",
      description:
        "Wrote several Adventure Creator technical tutorials based on problems and solutions encountered during development, including tips and tricks, Action List optimization, and additional workflow guidance.",
    },
  ],
  technologies: ["Unity", "C#", "Adventure Creator", "PC"],
  challenges: [
    {
      challenge: "A newer version of Adventure Creator could no longer load save files created with the older version.",
      solution:
        "Implemented a custom migration/repair layer specifically for Bear With Me. The solution operated directly on the serialized save data at the byte level, locating old string representations in the save file and replacing them with the corresponding representations required by the newer version. This allowed save files from the older version to remain usable after the Adventure Creator upgrade.",
    },
  ],
  technicalHighlights: [
    {
      title: "Byte-Level Save Migration",
      description:
        "A particularly low-level compatibility problem required working directly with serialized save-file bytes rather than relying on the normal Adventure Creator save API. The migration system searched the save data for relevant serialized strings and replaced obsolete representations with the required newer representations.",
    },
  ],
  results: [
    "Contributed to the development of the PC version of a commercial adventure game.",
    "Implemented gameplay and puzzle functionality across the project.",
    "Solved backward compatibility for legacy save files after an Adventure Creator upgrade.",
    "Produced technical writing based on production experience.",
  ],
  youtubeVideos: ["https://www.youtube.com/watch?v=McDG2S4KgmE"],
  externalResources: [
    {
      label: "Steam",
      url: "https://store.steampowered.com/app/1050000/Bear_With_Me_The_Lost_Robots/",
    },
    {
      label: "Article — Adventure Creator Tips & Tricks",
      url: "https://exordiumgames.com/adventure-creator-tips-tricks/",
    },
    {
      label: "Article — Action List Optimization",
      url: "https://exordiumgames.com/adventure-creator-tips-tricks-action-list-optimization/",
    },
    {
      label: "Article — Adventure Creator Tips & Tricks Part 3",
      url: "https://exordiumgames.com/adventure-creator-tips-tricks-part-3/",
    },
  ],
};
