import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/resume";

export default function Projects() {
  return <section id="work" className="section projects-section">
    <div className="section-kicker"><span>02</span> Selected work</div>
    <div className="projects-intro"><h2>Things I&apos;ve made<br />to move ideas <em>forward.</em></h2><p>From pipelines that make sense of noisy information to intelligent tools people can genuinely use.</p></div>
    <div className="project-list">{projects.map((p, index) => <article key={p.name} className={`project-card project-${index + 1}`}><div className="project-number">0{index + 1}</div><div className="project-content"><p className="project-tag">{p.tag}</p><h3>{p.name}</h3><p>{p.desc}</p><div className="project-stack">{index === 0 ? "Analytics · Data pipelines" : index === 1 ? "NLP · Interview intelligence" : "Multi-agent AI · Team leadership"}</div></div><a href="#contact" className="project-link" aria-label={`Discuss ${p.name}`}><ArrowUpRight size={22} /></a></article>)}</div>
  </section>;
}
