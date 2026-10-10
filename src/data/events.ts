export type EventCategory = "Hackathons" | "Workshops" | "Competitions" | "Community Events";
export type EventStatus = "upcoming" | "past";

export type CommunityEvent = {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  format: string;
  category: EventCategory;
  status: EventStatus;
  highlights: string[];
  registerUrl?: string;
  teamSize?: string;
  fee?: string;
  prizePool?: string;
  platform?: string;
  tracks?: string[];
};

// Confirmed information only. Add new events here as details become available.
export const events: CommunityEvent[] = [
  {
    id: "novylt-1",
    slug: "novylt-1-online-hackathon",
    title: "NOVYLT 1.0 — Build Beyond Ideas",
    description: "An online live prototype & innovation hackathon where teams bring bold ideas to life. Build a working prototype across tracks like AI/ML, FinTech, HealthTech, EdTech, and more — compete for a ₹6,000 prize pool.",
    date: "Oct 30 & 31, 2026",
    format: "Online",
    category: "Hackathons",
    status: "upcoming",
    highlights: [],
    registerUrl: "https://unstop.com/o/cDryeCS?lb=useDEjt5",
    teamSize: "2–4 members",
    fee: "₹199 / team",
    prizePool: "₹6,000",
    platform: "Unstop",
    tracks: [
      "AI & Machine Learning",
      "Web / App Development",
      "Healthcare Tech",
      "AgriTech",
      "FinTech",
      "Cybersecurity",
      "Sustainability / GreenTech",
      "EdTech",
      "Smart City / IoT",
      "Open Innovation",
    ],
  },
  {
    id: "build-01",
    slug: "build-01-online-hackathon",
    title: "BUILD 01 — Online Hackathon",
    description: "A student-led online hackathon concept from The Tech Crowd, bringing people together to turn ideas into practical solutions. More event details will be announced soon.",
    date: "To Be Announced",
    format: "Online",
    category: "Hackathons",
    status: "upcoming",
    highlights: [],
  },
];