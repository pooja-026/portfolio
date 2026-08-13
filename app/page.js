"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, GraduationCap, Linkedin, Mail, Menu, Sparkles, X } from "lucide-react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import ChatWidget from "../components/ChatWidget";

const nav = ["about", "work", "journey", "gallery"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main>
      <nav className="nav-shell">
        <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
          PN<span>°</span>
        </button>
        <div className="nav-links">
          {nav.map((item) => <button key={item} onClick={() => jump(item)}>{item}</button>)}
        </div>
        <a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && <div className="mobile-menu">{nav.map((item) => <button key={item} onClick={() => jump(item)}>{item}</button>)}<a href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk</a></div>}

      <Hero />
      <About />
      <Projects />

      <section id="journey" className="section journey-section">
        <div className="section-kicker"><span>03</span> The path so far</div>
        <div className="journey-header">
          <h2>Learning in public,<br /><em>building with intent.</em></h2>
          <p>Each chapter has made me more curious about how data, language, and thoughtful product design can make people&apos;s lives easier.</p>
        </div>
        <div className="timeline">
          <article className="timeline-card"><span className="timeline-year">NOW</span><GraduationCap size={22} /><h3>University at Buffalo</h3><p>MS, Computer &amp; Information Science</p><small>Expected Dec 2026 · GPA 3.7</small></article>
          <article className="timeline-card"><span className="timeline-year">2024</span><Sparkles size={22} /><h3>Celebal Technologies</h3><p>Data Engineering Intern</p><small>Azure Databricks · Delta Lake · ADF</small></article>
          <article className="timeline-card"><span className="timeline-year">ALWAYS</span><span className="orbit-mark">✦</span><h3>Independent maker</h3><p>ML experiments, hackathons, and useful things for real people.</p></article>
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="section-kicker"><span>04</span> Beyond the terminal</div>
        <div className="gallery-head"><h2>A little more<br /><em>human context.</em></h2><p>This is where your photos belong: study breaks, conference days, a favorite corner of Buffalo, a win worth remembering.</p></div>
        <div className="gallery-grid">
          <div className="photo-card photo-one"><span>01 / campus days</span><i>Replace with a photo</i></div>
          <div className="photo-card photo-two"><span>02 / building things</span><i>Replace with a photo</i></div>
          <div className="photo-card photo-three"><span>03 / off the clock</span><i>Replace with a photo</i></div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div><p className="eyebrow">Have an idea in mind?</p><h2>Let&apos;s make it<br /><em>useful.</em></h2></div>
        <div className="contact-actions"><a className="email-link" href="mailto:hello@poojanemade.com">hello@poojanemade.com <ArrowUpRight /></a><p>Open to data, ML, and product conversations.</p><div className="socials"><a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="#" aria-label="GitHub"><Github size={18} /></a><a href="mailto:hello@poojanemade.com" aria-label="Email"><Mail size={18} /></a></div></div>
      </section>

      <footer><span>© {new Date().getFullYear()} Pooja Nemade</span><span>Built with curiosity &amp; a lot of tea.</span></footer>
      <ChatWidget />
      {showTop && <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ArrowDown size={17} /></button>}
    </main>
  );
}
