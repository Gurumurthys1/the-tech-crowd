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
};

// Confirmed information only. Add new events here as details become available.
export const events: CommunityEvent[] = [
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