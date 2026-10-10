import { ArrowLeft, ArrowRight, CalendarDays, Clock3, MapPin, Trophy, Users, Wifi } from "lucide-react";
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

  return (
    <main>
      <div className="site-container page-content">
        <div className="detail-layout">
          <article className="detail-main">
            <span className="status-badge">{event.status === "upcoming" ? "Upcoming" : "Completed"}</span>
            <h1>{event.title}</h1>
            <PageEyebrow>ORGANIZED BY THE TECH CROWD</PageEyebrow>
            <p>{event.description}</p>

            {/* Poster / visual */}
            <div className="event-poster detail-poster">
              <div className="poster-content">
                <div className="poster-kicker">THE TECH CROWD PRESENTS</div>
                <div className="poster-title">{event.id === "novylt-1" ? <>NOVYLT<br />1.0</> : <>BUILD<br />01</>}</div>
                <div className="poster-caption">{event.id === "novylt-1" ? "BUILD BEYOND IDEAS · ONLINE HACKATHON" : "IDEAS INTO IMPACT · ONLINE HACKATHON"}</div>
              </div>
            </div>

            {/* Tracks */}
            {event.tracks && event.tracks.length > 0 && (
              <>
                <h2 className="subheading" style={{ marginTop: 34 }}>Challenge tracks</h2>
                <ul className="tracks-list">
                  {event.tracks.map((track) => (
                    <li key={track}>{track}</li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="subheading" style={{ marginTop: 34 }}>Event overview</h2>
            <p>
              {event.id === "novylt-1"
                ? "Teams of 2–4 will build a working live prototype over 2 days (Oct 30 & 31). Projects are evaluated on Innovation & Originality, Technical Implementation, Problem Relevance, Working Prototype, User Impact, and Presentation & Demo."
                : "This online hackathon brings students and aspiring innovators together around technology, collaboration, and practical problem-solving. Further information will be shared when confirmed."}
            </p>

            {/* Register CTA */}
            {event.registerUrl && (
              <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Button asChild className="site-cta">
                  <a href={event.registerUrl} target="_blank" rel="noreferrer">
                    Register on {event.platform ?? "Unstop"} <ArrowRight />
                  </a>
                </Button>
              </div>
            )}

            <Button asChild variant="outline" className="site-outline detail-back" style={{ marginTop: 24 }}>
              <Link to="/events"><ArrowLeft /> Back to all events</Link>
            </Button>
          </article>

          <aside className="detail-info">
            <h2>Event details</h2>
            <div className="detail-info-row"><span>Organizer</span><strong>The Tech Crowd</strong></div>
            <div className="detail-info-row"><span>Format</span><strong><Wifi /> {event.format}</strong></div>
            <div className="detail-info-row"><span>Date</span><strong><CalendarDays /> {event.date}</strong></div>
            {event.teamSize && (
              <div className="detail-info-row"><span>Team size</span><strong><Users /> {event.teamSize}</strong></div>
            )}
            {event.fee && (
              <div className="detail-info-row"><span>Entry fee</span><strong>{event.fee}</strong></div>
            )}
            {event.prizePool && (
              <div className="detail-info-row"><span>Prize pool</span><strong><Trophy /> {event.prizePool}</strong></div>
            )}
            {event.platform && (
              <div className="detail-info-row"><span>Platform</span><strong>{event.platform}</strong></div>
            )}
            <div className="detail-info-row"><span>Category</span><strong>{event.category}</strong></div>
            <div className="detail-info-row"><span>Location</span><strong><MapPin /> Online</strong></div>

            {event.registerUrl && (
              <Button asChild className="site-cta" style={{ marginTop: 16, width: "100%" }}>
                <a href={event.registerUrl} target="_blank" rel="noreferrer">
                  Register Now <ArrowRight />
                </a>
              </Button>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}