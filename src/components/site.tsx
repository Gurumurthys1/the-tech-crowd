import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import type { CommunityEvent } from "@/data/events";

const navigation = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Events", to: "/events" as const },
  { label: "Contact", to: "/contact" as const },
];

export function PageEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <header className="site-header">
      <div className="site-container nav-row">
        <Link to="/" className="brand" aria-label="The Tech Crowd home" onClick={() => setIsOpen(false)}>
          <span className="brand-mark" aria-hidden="true">TC</span><span className="brand-copy"><span className="brand-name">THE TECH CROWD</span><span className="brand-tagline">BUILD • CONNECT • INNOVATE</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.to} to={item.to} className="nav-link" data-active={pathname === item.to || (item.to === "/events" && pathname.startsWith("/events/"))}>{item.label}</Link>)}
        </nav>
        <Button asChild className="site-cta nav-events"><Link to="/events">Explore events <ArrowRight /></Link></Button>
        <Button variant="ghost" size="icon" className="mobile-nav-toggle" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>{isOpen ? <X /> : <Menu />}</Button>
      </div>
      {isOpen ? <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map((item) => <Link key={item.to} to={item.to} onClick={() => setIsOpen(false)}>{item.label}</Link>)}<Link className="mobile-nav-cta" to="/events" onClick={() => setIsOpen(false)}>Explore events <ArrowRight /></Link></nav> : null}
    </header>
  );
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-container footer-row"><span>© {new Date().getFullYear()} The Tech Crowd</span><span>BUILD • CONNECT • INNOVATE</span><div className="footer-links"><Link to="/about">About</Link><Link to="/events">Events</Link><Link to="/contact">Contact</Link></div></div></footer>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-intro"><div className="site-container"><PageEyebrow>{eyebrow}</PageEyebrow><h1 className="page-title">{title}</h1><p className="page-lede">{description}</p></div></section>;
}

export function EventCard({ event }: { event: CommunityEvent }) {
  if (event.registerUrl) {
    return (
      <a className="event-card" href={event.registerUrl} target="_blank" rel="noreferrer">
        <div className="event-card-art"><strong>{event.id === "novylt-1" ? "NOVYLT 1.0" : event.title}</strong></div>
        <div className="event-card-body">
          <div className="event-card-meta"><span>{event.category}</span><span>{event.status === "upcoming" ? "Upcoming" : "Completed"}</span></div>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <span className="text-link">{event.status === "upcoming" ? "Register now" : "View highlights"} <ArrowRight /></span>
        </div>
      </a>
    );
  }
  return <Link className="event-card" to="/events/$slug" params={{ slug: event.slug }}><div className="event-card-art"><strong>{event.id === "build-01" ? "BUILD 01" : event.title}</strong></div><div className="event-card-body"><div className="event-card-meta"><span>{event.category}</span><span>{event.status === "upcoming" ? "Upcoming" : "Completed"}</span></div><h3>{event.title}</h3><p>{event.description}</p><span className="text-link">{event.status === "upcoming" ? "View event" : "View highlights"} <ArrowRight /></span></div></Link>;
}