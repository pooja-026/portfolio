"use client";

import { useState } from "react";
import { ArrowUpRight, Compass } from "lucide-react";
import { projects } from "../data/resume";
import LookThePartExplorer from "./LookThePartExplorer";
import VictorAIExplorer from "./VictorAIExplorer";
import MockMateExplorer from "./MockMateExplorer";
import FraudGNNExplorer from "./FraudGNNExplorer";

export default function Projects() {
  const [lookThePartOpen, setLookThePartOpen] = useState(false);
  const [victorOpen, setVictorOpen] = useState(false);
  const [mockmateOpen, setMockmateOpen] = useState(false);
  const [fraudOpen, setFraudOpen] = useState(false);
  return <><section id="work" className="section projects-section reveal-target">
    <div className="section-kicker"><span>02</span> Selected work</div>
    <div className="projects-intro"><h2>Things I&apos;ve made<br />to move ideas <em>forward.</em></h2><p>From pipelines that make sense of noisy information to intelligent tools people can genuinely use.</p></div>
    <div className="project-list">{projects.map((p, index) => <article key={p.name} className={`project-card project-${index + 1}`}><div className="project-number">0{index + 1}</div><div className="project-content"><p className="project-tag">{p.tag}</p><h3>{p.name}</h3><p>{p.desc}</p><div className="project-stack">{index === 0 ? "Analytics · Data pipelines" : index === 1 ? "NLP · Interview intelligence" : index === 2 ? "Multi-agent AI · Team leadership" : "GraphSAGE · GAT · Fraud detection"}</div>{index === 0 && <button className="case-study-trigger" onClick={() => setLookThePartOpen(true)}><Compass size={15} /> Explore the journey map</button>}{index === 1 && <button className="case-study-trigger" onClick={() => setMockmateOpen(true)}><Compass size={15} /> Open research publication</button>}{index === 2 && <button className="case-study-trigger" onClick={() => setVictorOpen(true)}><Compass size={15} /> Enter the agent map</button>}{index === 3 && <button className="case-study-trigger" onClick={() => setFraudOpen(true)}><Compass size={15} /> Explore the graph lab</button>}</div>{index === 0 ? <button className="project-link" onClick={() => setLookThePartOpen(true)} aria-label="Open LookThePart case study"><ArrowUpRight size={22} /></button> : index === 1 ? <button className="project-link" onClick={() => setMockmateOpen(true)} aria-label="Open MockMate case study"><ArrowUpRight size={22} /></button> : index === 2 ? <button className="project-link" onClick={() => setVictorOpen(true)} aria-label="Open Victor AI case study"><ArrowUpRight size={22} /></button> : <button className="project-link" onClick={() => setFraudOpen(true)} aria-label="Open fraud GNN case study"><ArrowUpRight size={22} /></button>}</article>)}</div>
  </section><LookThePartExplorer open={lookThePartOpen} onClose={() => setLookThePartOpen(false)} /><MockMateExplorer open={mockmateOpen} onClose={() => setMockmateOpen(false)} /><VictorAIExplorer open={victorOpen} onClose={() => setVictorOpen(false)} /><FraudGNNExplorer open={fraudOpen} onClose={() => setFraudOpen(false)} /></>;
}
