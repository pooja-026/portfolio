"use client";

import { useRef, useState } from "react";

const initialNodes = [
  { id: "Python", x: 48, y: 45, projects: "The common thread across forecasting, fraud research, automation, and ML prototyping." },
  { id: "GraphSAGE", x: 20, y: 24, projects: "Fraud GNN: modeled transactions as connected entities and improved AUC-ROC to 0.8313." },
  { id: "Databricks", x: 78, y: 24, projects: "Celebal: scalable pipelines with Azure Databricks, Delta Lake, and Azure Data Factory." },
  { id: "BERT + NLP", x: 18, y: 70, projects: "MockMate: semantic resume parsing, skill matching, sentiment, and interview evaluation." },
  { id: "watsonx", x: 78, y: 70, projects: "Victor AI: specialized university agents orchestrated for practical student support." },
  { id: "React", x: 49, y: 82, projects: "Portfolio and full-stack interfaces built to make complex systems understandable." },
  { id: "Docker", x: 9, y: 48, projects: "Pintos systems work: a Docker and VS Code workflow for kernel-level debugging." },
  { id: "MCP", x: 90, y: 48, projects: "AI Avatar Laptop Assistant: local tools and safe computer actions via an MCP layer." },
  { id: "PySpark", x: 36, y: 18, projects: "Data-intensive computing and scalable transformation work alongside Azure Databricks and Delta Lake." },
  { id: "PostgreSQL", x: 65, y: 42, projects: "LookThePart analytics and IMDb database work: turning structured data into useful, queryable insight." },
  { id: "OpenCV", x: 31, y: 63, projects: "MockMate: real-time video assessment paired with NLP-based sentiment analysis." },
  { id: "C + Systems", x: 66, y: 88, projects: "Pintos work in scheduling, synchronization, system calls, and defensive kernel-interface design." },
];

export default function SkillsConstellation() {
  const [nodes, setNodes] = useState(initialNodes); const [active, setActive] = useState(initialNodes[0]); const fieldRef = useRef(null); const dragging = useRef(null);
  function drag(event) { if (!dragging.current || !fieldRef.current) return; const rect = fieldRef.current.getBoundingClientRect(); const x = Math.max(4, Math.min(96, ((event.clientX - rect.left) / rect.width) * 100)); const y = Math.max(8, Math.min(90, ((event.clientY - rect.top) / rect.height) * 100)); setNodes((old) => old.map((node) => node.id === dragging.current ? { ...node, x, y } : node)); setActive((old) => old.id === dragging.current ? { ...old, x, y } : old); }
  return <section id="skills" className="section skills-section reveal-target"><div className="section-kicker"><span>04</span> Skills constellation</div><div className="skills-intro"><h2>Follow the<br /><em>connections.</em></h2><p>Drag the skills around the map, then select one to see where it shows up in Pooja&apos;s work.</p></div><div ref={fieldRef} className="constellation-field" onPointerMove={drag} onPointerUp={() => { dragging.current = null; }} onPointerLeave={() => { dragging.current = null; }}><i className="constellation-line line-a" /><i className="constellation-line line-b" /><i className="constellation-line line-c" /><i className="constellation-line line-d" />{nodes.map((node, index) => <button key={node.id} className={`skill-node node-${index} ${active.id === node.id ? "active" : ""}`} style={{ left:`${node.x}%`, top:`${node.y}%` }} onPointerDown={(event) => { event.currentTarget.setPointerCapture?.(event.pointerId); dragging.current = node.id; }} onClick={() => setActive(node)}>{node.id}</button>)}<div className="skill-core">POOJA<br /><span>builds here</span></div></div><div className="skill-detail"><span>Selected capability</span><h3>{active.id}</h3><p>{active.projects}</p></div></section>;
}
