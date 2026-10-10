import { ArrowDown, ArrowRight, Code2, Cpu, Lightbulb, Users, Wifi } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { EventCard, PageEyebrow } from "@/components/site";
import { events } from "@/data/events";
import heroImage from "@/assets/tech-crowd-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Tech Crowd | Where Ideas Meet Innovation" },
      { name: "description", content: "A student-driven technology community bringing people together to build, connect, and innovate through technology and collaboration." },
      { property: "og:title", content: "The Tech Crowd | Where Ideas Meet Innovation" },
      { property: "og:description", content: "Build, connect, and innovate with a student-driven technology community." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const focusAreas = [
  { icon: Lightbulb, title: "Hackathons & innovation", description: "Turn ambitious ideas into practical, working solutions." },
  { icon: Cpu, title: "AI, ML & emerging tech", description: "Explore the technologies shaping what comes next." },
  { icon: Code2, title: "Workshops & learning", description: "Learn by doing, building skills through shared practice." },
  { icon: Users, title: "Community & connection", description: "Find collaborators who are curious about the same things." },
];

function HomePage() {
  const featured = events.find((event) => event.id === "novylt-1");

  return (
    <main>
      <section className="hero">
        <img className="hero-photo" src={heroImage} alt="Students collaborating on a technology project" width={1600} height={1104} />
        <div className="site-container">
          <div className="hero-content">
            <PageEyebrow>THE TECH CROWD</PageEyebrow>
            <h1>Where Ideas Meet <span>Innovation.</span></h1>
            <p className="hero-copy">A student-driven technology community bringing people together to build, connect, and innovate through technology, collaboration, and real-world experiences.</p>
            <div className="hero-actions">
              <Button asChild className="site-cta"><Link to="/events">Explore our events <ArrowRight /></Link></Button>
              <Button asChild variant="outline" className="site-outline"><Link to="/about">Discover our community</Link></Button>
            </div>
            <div className="hero-meta">
              <span><Code2 /> BUILD</span><span><Users /> CONNECT</span><span><Lightbulb /> INNOVATE</span>
            </div>
          </div>
        </div>
        <a className="hero-scroll" href="#what-we-do" aria-label="Scroll to what we do"><ArrowDown /></a>
      </section>

      <section className="section" id="what-we-do">
        <div className="site-container">
          <div className="section-heading">
            <div><PageEyebrow>OUR PURPOSE</PageEyebrow><h2>Technology is better<br />when we build together.</h2></div>
            <p>We bring curious people together to explore technology, learn from one another, and work on ideas with real-world potential.</p>
          </div>
          <div className="focus-grid">
            {focusAreas.map(({ icon: Icon, title, description }) => (
              <article className="focus-item" key={title}><div className="focus-icon"><Icon /></div><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      {featured ? <section className="section section-tight">
        <div className="site-container">
          <div className="section-heading"><div><PageEyebrow>UP NEXT</PageEyebrow><h2>Make something real.</h2></div><Link className="text-link" to="/events">All events <ArrowRight /></Link></div>
          <div className="event-feature">
            <div className="event-poster" aria-label="NOVYLT 1.0 event artwork"><div className="poster-content"><div className="poster-kicker">THE TECH CROWD PRESENTS</div><div className="poster-title">NOVYLT<br />1.0</div><div className="poster-caption">BUILD BEYOND IDEAS · ONLINE HACKATHON</div></div></div>
            <div className="event-feature-copy">
              <span className="status-badge">Upcoming</span>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
              <div className="event-facts">
                <span><Wifi /> Online</span>
                <span>{featured.date}</span>
                {featured.fee && <span>{featured.fee}</span>}
                {featured.prizePool && <span>Prize pool: {featured.prizePool}</span>}
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
                {featured.registerUrl && (
                  <Button asChild className="site-cta">
                    <a href={featured.registerUrl} target="_blank" rel="noreferrer">Register on Unstop <ArrowRight /></a>
                  </Button>
                )}
                <Button asChild variant="outline" className="site-outline">
                  <Link to="/events/$slug" params={{ slug: featured.slug }}>View event details <ArrowRight /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> : null}

      <section className="section section-tight">
        <div className="site-container">
          <div className="section-heading"><div><PageEyebrow>ON THE CALENDAR</PageEyebrow><h2>Upcoming events</h2></div><Link className="text-link" to="/events">View all events <ArrowRight /></Link></div>
          <div className="event-grid">{events.filter((event) => event.status === "upcoming").slice(0, 3).map((event) => <EventCard event={event} key={event.id} />)}</div>
        </div>
      </section>

      <section className="community-band">
        <div className="site-container community-band-inner"><div><PageEyebrow>BUILD • CONNECT • INNOVATE</PageEyebrow><h2>Be part of what<br />we're building.</h2><p>Follow the journey and find your people.</p></div><div className="community-actions"><Button asChild className="site-cta"><a href="https://www.instagram.com/the._techcrowd/" target="_blank" rel="noreferrer">Instagram <ArrowRight /></a></Button><Button asChild variant="outline" className="site-outline"><a href="https://www.linkedin.com/company/thetechcrowd/" target="_blank" rel="noreferrer">LinkedIn <ArrowRight /></a></Button></div></div>
      </section>
    </main>
  );
}