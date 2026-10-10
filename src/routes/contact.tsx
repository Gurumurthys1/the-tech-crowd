import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, PageEyebrow } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact The Tech Crowd | Connect and Collaborate" },
    { name: "description", content: "Get in touch with The Tech Crowd about student collaboration, community projects, and partnerships." },
    { property: "og:title", content: "Contact The Tech Crowd" },
    { property: "og:description", content: "Connect with the student-led technology community." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});

function ContactPage() {
  return <main><PageIntro eyebrow="CONTACT" title="Let’s make something meaningful." description="Have an idea, a collaboration in mind, or simply want to connect? We’d love to hear from students, creators, communities, and potential partners." />
    <div className="site-container page-content"><div className="contact-grid"><section><PageEyebrow>FIND US HERE</PageEyebrow><div className="contact-card-list">
      <a className="contact-link" href="mailto:admin@thetechcrowd.in"><span className="contact-icon"><Mail /></span><span><small>Official email</small><strong>admin@thetechcrowd.in</strong></span></a>
      <a className="contact-link" href="https://www.instagram.com/the_.techcrowd/" target="_blank" rel="noreferrer"><span className="contact-icon"><Instagram /></span><span><small>Instagram</small><strong>@the_.techcrowd</strong></span><ArrowUpRight /></a>
      <a className="contact-link" href="https://www.linkedin.com/company/thetechcrowd/" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin /></span><span><small>LinkedIn</small><strong>The Tech Crowd</strong></span><ArrowUpRight /></a>
    </div></section><aside className="contact-note"><PageEyebrow>OPEN TO IDEAS</PageEyebrow><h2>Good things happen when people connect.</h2><p>Whether you’re a student exploring technology, a creator looking for collaborators, or a community interested in working together, reach out through our official email or social channels.</p></aside></div></div>
  </main>;
}