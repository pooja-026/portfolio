"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, GraduationCap, Linkedin, Mail, Menu, Sparkles, X } from "lucide-react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Publications from "../components/Publications";
import SkillsConstellation from "../components/SkillsConstellation";
import TerminalExplorer from "../components/TerminalExplorer";
import ChatWidget from "../components/ChatWidget";

const nav = ["about", "work", "journey", "skills", "publications"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll(".reveal-target");
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); reveal.unobserve(entry.target); }
    }), { threshold: 0.14 });
    targets.forEach((target) => reducedMotion ? target.classList.add("is-visible") : reveal.observe(target));

    const magneticItems = document.querySelectorAll(".round-link,.nav-contact,.project-link,.socials a,.chat-toggle");
    const handlers = [...magneticItems].map((item) => {
      const move = (event) => { const box = item.getBoundingClientRect(); item.style.transform = `translate(${(event.clientX - box.left - box.width / 2) * 0.16}px, ${(event.clientY - box.top - box.height / 2) * 0.16}px)`; };
      const reset = () => { item.style.transform = "translate(0, 0)"; };
      if (!reducedMotion) { item.addEventListener("pointermove", move); item.addEventListener("pointerleave", reset); }
      return { item, move, reset };
    });
    return () => { reveal.disconnect(); handlers.forEach(({ item, move, reset }) => { item.removeEventListener("pointermove", move); item.removeEventListener("pointerleave", reset); }); };
  }, []);

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="exploration-site">
      <div className="scroll-progress" aria-hidden="true"><span /></div>
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

      <section id="journey" className="section journey-section reveal-target">
        <div className="section-kicker"><span>03</span> The path so far</div>
        <div className="journey-header">
          <h2>Learning in public,<br /><em>building with intent.</em></h2>
          <p>Each chapter has made me more curious about how data, language, and thoughtful product design can make people&apos;s lives easier.</p>
        </div>
        <div className="timeline">
          <article className="timeline-card"><span className="timeline-year">NOW</span><GraduationCap size={22} /><h3>University at Buffalo</h3><p>MS, Computer &amp; Information Science</p><small>Expected Dec 2026 · GPA 3.85</small><div className="course-tags"><span>Algorithm Analysis &amp; Design</span><span>Operating Systems</span><span>Data Modeling &amp; Query Language</span><span>Machine Learning</span><span>Deep Learning</span><span>Data Intensive Computing</span><span>MS Project Development</span></div></article>
          <article className="timeline-card"><span className="timeline-year">2024</span><Sparkles size={22} /><h3>Celebal Technologies</h3><p>Data Science Intern</p><small>20 May - 23 Aug 2024 · Azure Databricks · Delta Lake · ADF</small><div className="credential-links"><a href="/credentials/celebal-data-science-internship.pdf" target="_blank" rel="noreferrer">View internship certificate ↗</a><a href="/credentials/celebal-center-of-excellence.pdf" target="_blank" rel="noreferrer">View Center of Excellence certificate ↗</a></div></article>
          <article className="timeline-card"><span className="timeline-year">Always learning</span><span className="orbit-mark">✦</span><h3>Curious by nature</h3><p>Continuously learning, asking better questions, and turning new ideas into thoughtful work.</p></article>
        </div>
      </section>

      <SkillsConstellation />

      <Publications />

      <section id="contact" className="section contact-section reveal-target">
        <div><p className="eyebrow">Have an idea in mind?</p><h2>Let&apos;s make it<br /><em>useful.</em></h2></div>
        <div className="contact-actions"><a className="email-link" href="mailto:pooja.999dev@gmail.com">pooja.999dev@gmail.com <ArrowUpRight /></a><p>Open to data, ML, and product conversations.</p><div className="socials"><a href="https://www.linkedin.com/in/pooja-nemade-" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="https://github.com/pooja-026" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="mailto:pooja.999dev@gmail.com" aria-label="Email"><Mail size={18} /></a></div></div>
      </section>

      <footer><span>© {new Date().getFullYear()} Pooja Nemade</span><span>Built with curiosity &amp; a lot of tea.</span></footer>
      <ChatWidget />
      <TerminalExplorer />
      {showTop && <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ArrowDown size={17} /></button>}
    </main>
  );
}
