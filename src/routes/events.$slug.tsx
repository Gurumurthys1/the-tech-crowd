import { ArrowLeft, CalendarDays, Clock3, MapPin, Wifi } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageEyebrow } from "@/components/site";
import { events } from "@/data/events";

export const Route = createFileRoute("/events/$slug")({
  head: ({ params }) => {
    const event = events.find((item) => item.slug === params.slug);
    const title = event ? `${event.title} | The Tech Crowd` : "Event details | The Tech Crowd";
    const description = event?.description ?? "Explore event details and highlights from The Tech Crowd.";
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  component: EventDetailsPage,
});

function EventDetailsPage() {
  const { slug } = Route.useParams();
  const event = events.find((item) => item.slug === slug);

  if (!event) return <main><section className="page-content site-container"><PageEyebrow>EVENT</PageEyebrow><h1 className="page-title">Event not found</h1><p className="page-lede">This event may have moved, or its details are not available.</p><Button asChild variant="outline" className="site-outline detail-back"><Link to="/events"><ArrowLeft /> Back to events</Link></Button></section></main>;

  return <main><div className="site-container page-content"><div className="detail-layout"><article className="detail-main"><span className="status-badge">{event.status === "upcoming" ? "Upcoming" : "Completed"}</span><h1>{event.title}</h1><PageEyebrow>ORGANIZED BY THE TECH CROWD</PageEyebrow><p>{event.description}</p><div className="event-poster detail-poster"><div className="poster-content"><div className="poster-kicker">THE TECH CROWD PRESENTS</div><div className="poster-title">BUILD<br />01</div><div className="poster-caption">IDEAS INTO IMPACT · ONLINE HACKATHON</div></div></div><h2 className="subheading" style={{ marginTop: 34 }}>Event overview</h2><p>This online hackathon brings students and aspiring innovators together around technology, collaboration, and practical problem-solving. Further information will be shared when confirmed.</p><Button asChild variant="outline" className="site-outline detail-back"><Link to="/events"><ArrowLeft /> Back to all events</Link></Button></article>
      <aside className="detail-info"><h2>Event details</h2><div className="detail-info-row"><span>Organizer</span><strong>The Tech Crowd</strong></div><div className="detail-info-row"><span>Format</span><strong><Wifi /> {event.format}</strong></div><div className="detail-info-row"><span>Date</span><strong><CalendarDays /> {event.date}</strong></div><div className="detail-info-row"><span>Duration</span><strong><Clock3 /> To Be Announced</strong></div><div className="detail-info-row"><span>Challenge tracks</span><strong>To Be Announced</strong></div><div className="detail-info-row"><span>Category</span><strong>{event.category}</strong></div><div className="detail-info-row"><span>Location</span><strong><MapPin /> Online</strong></div></aside>
    </div></div></main>;
}