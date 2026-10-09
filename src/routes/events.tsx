import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { EventCard, PageIntro } from "@/components/site";
import { events, type EventCategory } from "@/data/events";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [
    { title: "Events | The Tech Crowd" },
    { name: "description", content: "Explore upcoming events and past highlights from The Tech Crowd student technology community." },
    { property: "og:title", content: "Events | The Tech Crowd" },
    { property: "og:description", content: "Browse technology events from The Tech Crowd." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: EventsPage,
});

const filters = ["All Events", "Hackathons", "Workshops", "Competitions", "Community Events"] as const;
type EventFilter = typeof filters[number];

function EventsPage() {
  const [filter, setFilter] = useState<EventFilter>("All Events");
  const visibleEvents = events.filter((event) => filter === "All Events" || event.category === (filter as EventCategory));
  const upcoming = visibleEvents.filter((event) => event.status === "upcoming");
  const past = visibleEvents.filter((event) => event.status === "past");

  return <main><PageIntro eyebrow="EVENTS" title="Make room for what’s next." description="Hackathons, workshops, and shared experiments—explore what’s coming up and what the community has been building." />
    <div className="site-container page-content">
      <div className="event-toolbar" aria-label="Filter events">{filters.map((item) => <Button key={item} type="button" size="sm" variant={filter === item ? "default" : "outline"} className={`filter-button ${filter === item ? "" : "site-outline"}`} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</Button>)}</div>
      <section className="events-section"><div className="events-section-heading"><h2>Upcoming events</h2><span>{upcoming.length} {upcoming.length === 1 ? "event" : "events"}</span></div>{upcoming.length ? <div className="event-grid">{upcoming.map((event) => <EventCard event={event} key={event.id} />)}</div> : <div className="empty-state"><p>No upcoming {filter === "All Events" ? "events" : filter.toLowerCase()} just yet.</p></div>}</section>
      <section className="events-section"><div className="events-section-heading"><h2>Past events</h2><span>{past.length} {past.length === 1 ? "event" : "events"}</span></div>{past.length ? <div className="event-grid">{past.map((event) => <EventCard event={event} key={event.id} />)}</div> : <div className="empty-state"><p>Past events and highlights will appear here as they’re confirmed.</p></div>}</section>
    </div>
  </main>;
}