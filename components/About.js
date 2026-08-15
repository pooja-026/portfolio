import { profile } from "../data/resume";

export default function About() {
  return <section id="about" className="section about-section reveal-target">
    <div className="section-kicker"><span>01</span> A little introduction</div>
    <div className="about-layout"><div><h2>I&apos;m a systems thinker<br />with a <em>maker&apos;s heart.</em></h2><div className="scribble">↗</div></div><div className="about-copy"><p>{profile.about}</p><div className="skill-list"><span>Data engineering</span><span>Machine learning</span><span>Full-stack builds</span><span>Human-centered AI</span></div></div></div>
  </section>;
}
