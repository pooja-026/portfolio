import { ArrowDownRight, Sparkles } from "lucide-react";
import { profile } from "../data/resume";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
      <div className="availability"><span /> Available for new adventures</div>
      <div className="hero-grid">
        <div><p className="eyebrow">Hello, I&apos;m Pooja —</p><h1>Making data<br />feel <em>alive.</em></h1><p className="hero-copy">{profile.tagline}</p><a className="round-link" href="#work">Explore my work <ArrowDownRight size={18} /></a></div>
        <div className="hero-art" aria-label="Decorative data-inspired art">
          <div className="hero-stamp">P<br />N</div><div className="hero-line l1" /><div className="hero-line l2" /><div className="hero-line l3" />
          <div className="art-note"><Sparkles size={15} /> data / design / delight</div>
        </div>
      </div>
      <div className="hero-bottom"><span>Scroll to discover</span><span>01 — 04</span></div>
    </section>
  );
}
