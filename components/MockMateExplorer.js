"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Award, BrainCircuit, ExternalLink, FileText, Mic, ScanFace, X } from "lucide-react";

const LAYERS = [
  ["Capture", "Audio and video responses are collected during the mock interview.", Mic],
  ["Understand", "Speech-to-text and NLP assess sentiment, clarity, keywords, and response quality.", BrainCircuit],
  ["Observe", "Computer vision extracts facial-expression, engagement, and confidence signals.", ScanFace],
  ["Evaluate", "Weighted scoring combines problem-solving (40%), communication (30%), and technical expertise (30%).", Award],
];

export default function MockMateExplorer({ open, onClose }) {
  const [selected, setSelected] = useState(0);
  useEffect(() => { if (!open) return; const closeOnEscape = (event) => event.key === "Escape" && onClose(); document.addEventListener("keydown", closeOnEscape); return () => document.removeEventListener("keydown", closeOnEscape); }, [open, onClose]);
  if (!open) return null;
  const [title, detail, Icon] = LAYERS[selected];
  return <div className="case-study-backdrop mockmate-backdrop" role="dialog" aria-modal="true" aria-label="MockMate research case study"><section className="case-study-panel mockmate-panel"><button className="case-close" onClick={onClose} aria-label="Close MockMate case study"><X size={20} /></button>
    <div className="mockmate-hero"><p className="case-kicker">Published research / 02</p><h2>Interview feedback,<br /><em>made more measurable.</em></h2><p>MockMate explores a multimodal AI framework for online mock-interview evaluation, combining language, voice, and visual signals into structured feedback.</p><a href="/mockmate/mockmate-research-paper.pdf" target="_blank" rel="noreferrer" className="paper-link"><FileText size={17} /> Read the research paper <ExternalLink size={14} /></a></div>
    <div className="mockmate-research"><div><p className="case-kicker">Research framework</p><h3>Four layers of<br />candidate insight.</h3><p>The publication examines AI-assisted interview evaluation through speech processing, natural-language understanding, computer vision, and transparent scoring.</p></div><div className="mockmate-flow">{LAYERS.map(([name, , LayerIcon], index) => <button key={name} className={selected === index ? "active" : ""} onClick={() => setSelected(index)}><span>0{index + 1}</span><LayerIcon size={21} /><b>{name}</b></button>)}</div><article className="mockmate-detail"><Icon size={29} /><span>0{selected + 1} / selected layer</span><h4>{title}</h4><p>{detail}</p></article></div>
    <div className="mockmate-score"><div><p className="case-kicker">Evaluation design</p><h3>Balanced feedback,<br />not a black box.</h3><p>The research outlines a weighted assessment that makes the evaluation dimensions explicit.</p></div><div className="score-rings"><div className="score-ring score-40"><b>40%</b><span>Problem solving</span></div><div className="score-ring score-30"><b>30%</b><span>Communication</span></div><div className="score-ring score-30 two"><b>30%</b><span>Technical expertise</span></div></div></div>
    <div className="publication-proof"><div className="certificate-copy"><Award size={28} /><p className="case-kicker">Publication proof</p><h3>MockMate: AI-Powered Online Mock Interview Assessment and Evaluation System</h3><p>Published in the International Journal of Scientific Research in Engineering &amp; Management (IJSREM), Volume 09, Issue 04, April 2025.</p><p className="doi">DOI: 10.55041/IJSREM45858</p><a href="/mockmate/mockmate-research-paper.pdf" target="_blank" rel="noreferrer">View publication PDF <ExternalLink size={15} /></a></div><a href="/mockmate/publication-certificate.png" target="_blank" rel="noreferrer" className="certificate-image"><img src="/mockmate/publication-certificate.png" alt="MockMate publication certificate for Pooja N. Nemade" /><span>Open full certificate <ExternalLink size={14} /></span></a></div>
    <footer className="case-footer"><span>Speech-to-text · NLP · Computer vision · ML</span><span>Research publication · April 2025</span><button onClick={onClose}>Back to exploration <ArrowRight size={16} /></button></footer>
  </section></div>;
}
