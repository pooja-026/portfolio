"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Bot, Library, Mail, Music2, Sparkles, UserRound, X } from "lucide-react";

const AGENTS = [
  ["Student Services", "Campus services, processes, and support."],
  ["Academic", "Programs, academics, and professor-facing questions."],
  ["Library", "Research resources and library guidance."],
  ["Incoming Student", "Orientation and getting-started support."],
];

export default function VictorAIExplorer({ open, onClose }) {
  const videoRef = useRef(null);
  const audioRef = useRef({ context: null, timer: null });
  const [soundOn, setSoundOn] = useState(false);
  const [activeAgent, setActiveAgent] = useState(0);

  function stopAmbient() { const audio = audioRef.current; if (audio.timer) clearInterval(audio.timer); if (audio.context) audio.context.close(); audioRef.current = { context: null, timer: null }; setSoundOn(false); }
  function startAmbient() {
    stopAmbient();
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [220, 277.18, 329.63, 440, 329.63, 277.18]; let step = 0;
    const playNote = () => { const oscillator = context.createOscillator(); const gain = context.createGain(); oscillator.type = "sine"; oscillator.frequency.value = notes[step++ % notes.length]; gain.gain.setValueAtTime(0.0001, context.currentTime); gain.gain.exponentialRampToValueAtTime(0.035, context.currentTime + 0.12); gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 1.7); oscillator.connect(gain).connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + 1.8); };
    playNote(); audioRef.current = { context, timer: setInterval(playNote, 1450) }; setSoundOn(true); videoRef.current?.play();
  }
  useEffect(() => () => stopAmbient(), []);
  useEffect(() => { if (!open) stopAmbient(); }, [open]);
  if (!open) return null;
  return <div className="case-study-backdrop victor-backdrop" role="dialog" aria-modal="true" aria-label="Victor AI project case study"><section className="case-study-panel victor-panel"><button className="case-close" onClick={onClose} aria-label="Close Victor AI case study"><X size={20} /></button>
    <div className="victor-hero"><p className="case-kicker">IBM-sponsored hackathon · 4 May</p><h2>One campus.<br /><em>Four specialist minds.</em></h2><p>Victor AI is a multi-agent University at Buffalo assistant built on IBM watsonx Orchestrate. Pooja led a seven-person team from ideation through delivery.</p><div className="victor-stat"><strong>4</strong><span>specialized agents</span><strong>7</strong><span>team members led</span></div></div>
    <div className="agent-console"><div><p className="case-kicker">Agent constellation</p><h3>Choose a specialist.</h3><p>Victor routes a student&apos;s question to the right domain expert instead of treating every request as a generic chat response.</p></div><div className="agent-map"><div className="agent-core"><Bot size={28} /><span>Victor AI</span></div>{AGENTS.map(([name], index) => <button key={name} onClick={() => setActiveAgent(index)} className={`agent-node agent-${index} ${activeAgent === index ? "active" : ""}`}><Sparkles size={13} />{name}</button>)}</div><article className="agent-detail"><span>0{activeAgent + 1} / agent active</span><h4>{AGENTS[activeAgent][0]}</h4><p>{AGENTS[activeAgent][1]}</p></article></div>
    <div className="victor-action"><div><Mail /><p className="case-kicker">From answer to action</p><h3>Research outreach,<br />one thoughtful step away.</h3><p>A user can select an option and have Victor draft a personalized email to a professor requesting a Research Assistant position, using their own details.</p></div><div className="email-preview"><header><span>Drafting outreach</span><span className="email-status">Ready</span></header><p><b>To:</b> Professor [Name]</p><p><b>Subject:</b> Research Assistant interest</p><div>Dear Professor [Name],<br /><br />I&apos;m interested in contributing to your research. My background and interests align with…<br /><br />Best,<br />[Student name]</div><button>Generate draft <ArrowRight size={15} /></button></div></div>
    <div className="victor-demo"><div><p className="case-kicker">Hackathon demo</p><h3>Watch Victor<br />come to life.</h3><p>The original project demo, with an optional browser-generated ambient instrumental.</p><button className="ambient-button" onClick={soundOn ? stopAmbient : startAmbient}><Music2 size={16} />{soundOn ? "Ambient audio on - stop" : "Play with ambient audio"}</button></div><video ref={videoRef} controls preload="metadata" onPause={stopAmbient} onEnded={stopAmbient}><source src="/victor-ai/victor-ai-demo.mp4" type="video/mp4" />Your browser does not support this video.</video></div>
    <footer className="case-footer"><span>IBM watsonx Orchestrate · Multi-agent AI</span><span>Hackathon team lead</span><button onClick={onClose}>Back to exploration <ArrowRight size={16} /></button></footer>
  </section></div>;
}
