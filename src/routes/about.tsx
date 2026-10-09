import { ArrowUpRight, Check, Users } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, PageEyebrow } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About The Tech Crowd | Our Story and Mission" },
    { name: "description", content: "Learn about The Tech Crowd, a student-led community focused on technology, collaboration, and practical problem-solving." },
    { property: "og:title", content: "About The Tech Crowd | Our Story and Mission" },
    { property: "og:description", content: "Our mission, vision, focus areas, and values." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

const focusAreas = ["Artificial Intelligence & Machine Learning", "Software Development", "Hackathons & Innovation", "Technical Workshops", "Student Collaboration", "Emerging Technologies"];

function AboutPage() {
  return <main><PageIntro eyebrow="ABOUT US" title="A community built around possibility." description="The Tech Crowd is a student-led technology community for curious minds ready to learn, collaborate, and build." />
    <div className="site-container page-content">
      <div className="story-grid">
        <article className="story-copy"><PageEyebrow>OUR STORY</PageEyebrow><h2>Ideas deserve a place to grow.</h2><p>The Tech Crowd was created to help students explore technology, work together, and turn ideas into practical solutions. We bring people together around shared curiosity—making room to learn by doing, exchange perspectives, and take on meaningful challenges.</p><p>From emerging technologies to collaborative builds, we believe progress happens when more people get the opportunity to participate and create.</p></article>
        <div className="quote-panel"><PageEyebrow>OUR MISSION</PageEyebrow><blockquote>“To empower students and aspiring innovators through technology, collaboration, and hands-on experiences.”</blockquote><span>THE TECH CROWD</span></div>
      </div>
      <section className="section-tight"><PageEyebrow>OUR VISION</PageEyebrow><h2 className="subheading">A connected community. Ideas made meaningful.</h2><p className="page-lede">To build a connected community where innovative ideas grow into meaningful solutions.</p></section>
      <section className="section-tight"><PageEyebrow>WHAT GUIDES US</PageEyebrow><div className="value-list"><span>Build with purpose</span><span>Learn by doing</span><span>Collaborate openly</span><span>Innovate continuously</span></div></section>
      <section className="section-tight"><PageEyebrow>OUR FOCUS</PageEyebrow><h2 className="subheading">Curiosity, across the stack.</h2><div className="focus-list">{focusAreas.map((area) => <span key={area}><Check />{area}</span>)}</div></section>
      <div className="organizer-placeholder"><Users /><div><strong>Meet the people behind the community</strong>Organizer profiles will be added when details are confirmed. <a href="https://www.linkedin.com/company/thetechcrowd/" target="_blank" rel="noreferrer">Follow The Tech Crowd <ArrowUpRight /></a></div></div>
    </div>
  </main>;
}