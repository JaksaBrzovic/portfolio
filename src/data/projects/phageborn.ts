import type { ProjectInput } from "@/types/project";

export const phageborn: ProjectInput = {
  id: "phageborn",
  slug: "phageborn",
  title: "Phageborn",
  category: "Trading Card Game / Multiplayer",
  featured: true,
  order: 4,
  year: "2020–2021",
  role: "Unity Developer",
  company: "Games Revolted",
  team: "PC team included 2 frontend developers, 2 backend developers, sound, 4 artists, a project manager and a game designer. A separate mobile team existed. I worked on the PC scope.",
  platforms: ["PC"],
  overview: [
    "Phageborn is a dark fantasy trading card game inspired by games such as Magic: The Gathering and Hearthstone.",
    "One of its distinctive features was its 2v2 multiplayer mode.",
    "The project also included broader meta-game systems such as clans and a shop.",
  ],
  myRole: [
    "I joined the project relatively late in development as a Unity Developer.",
    "My level of independence was high, while larger technical decisions were coordinated with the lead developer.",
    "I owned the implementation of several UI and gameplay systems and also mentored a junior developer.",
  ],
  keyContributions: [
    { title: "Menu Systems", description: "Implemented the game's menu systems independently." },
    {
      title: "Tutorial System",
      description:
        "Participated in designing and implementing a reusable tutorial system based on frontend tutorial logic, backend messages/data and reusable overlays. The system was designed so tutorial content could be triggered in different parts of the game.",
    },
    {
      title: "Blacksmith Tutorial",
      description:
        "Implemented a tutorial for the Blacksmith system where the tutorial UI reflected actual game state. Unlike a simple static overlay, the tutorial could manipulate relevant data and visually simulate changes to the Blacksmith state.",
    },
    { title: "Deck Building", description: "Refactored the deck-building system." },
    { title: "PvP Lobby", description: "Refactored the PvP lobby system." },
    {
      title: "Audio System",
      description:
        "Worked with another programmer to build the audio system from scratch. The system was designed to be easier for the audio engineer to use, support spatial audio, improve debugging, support crossfading, support ducking and provide more reusable audio functionality.",
    },
    { title: "Junior Mentoring", description: "Mentored one junior developer during the project." },
  ],
  technologies: ["Unity", "C#", "GameSparks", "PC", "Multiplayer", "Spatial Audio"],
  challenges: [
    {
      challenge:
        "Debugging 2v2 multiplayer issues was difficult because the timing of messages was important when investigating synchronization problems.",
      solution:
        "Implemented a custom debugging tool that listed timestamps for live messages. This made it easier to identify problems related to message timing and timestamp ordering.",
    },
    {
      challenge: "Tutorials needed to work across different game systems without requiring completely separate implementations.",
      solution:
        "Helped design a reusable overlay/message architecture that could receive backend-driven information while remaining flexible enough for different gameplay contexts.",
    },
    {
      challenge: "The existing audio workflow needed to provide better functionality and easier debugging.",
      solution:
        "Built the audio system from scratch with another programmer, adding spatial audio support, crossfading, ducking and improved usability.",
    },
  ],
  technicalHighlights: [
    {
      title: "Multiplayer Message Debugging",
      description:
        "Custom timestamp logging made difficult 2v2 multiplayer synchronization issues easier to investigate.",
    },
    {
      title: "Data-Driven Blacksmith Tutorial",
      description:
        "The Blacksmith tutorial reflected actual game data and state, allowing the tutorial to simulate real gameplay changes instead of relying only on static overlays.",
    },
    {
      title: "Reusable Audio System",
      description: "Built a more capable audio layer that improved both audio-engineer workflow and runtime capabilities.",
    },
  ],
  results: [
    "Implemented major UI and gameplay systems for the PC version.",
    "Improved tutorial flexibility and usability.",
    "Created custom multiplayer debugging tooling.",
    "Built a reusable audio system.",
    "Mentored a junior developer.",
  ],
  youtubeVideos: ["https://www.youtube.com/watch?v=GIJx20r1A2E"],
  externalResources: [
    {
      label: "Steam",
      url: "https://store.steampowered.com/app/1037990/PHAGEBORN_Online_Card_Game/",
    },
  ],
};
