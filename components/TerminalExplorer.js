"use client";

import { useEffect, useState } from "react";
import { Terminal, X } from "lucide-react";

const responses = { help: "Commands: projects · skills · research · contact · clear", projects: "LookThePart / MockMate / Victor AI / Fraud GNN / AI Avatar Assistant", skills: "Python · PyTorch · TensorFlow · GraphSAGE · Databricks · React · Docker · MCP", research: "Two publications: MockMate (IJSREM, 2025) and Image Captioning (ADCIS, 2024).", contact: "Use the contact section or email pooja.999dev@gmail.com.", clear: "" };
export default function TerminalExplorer() {
  const [open, setOpen] = useState(false); const [value, setValue] = useState(""); const [lines, setLines] = useState(["portfolio@pooja:~$ type help to explore"]);
  useEffect(() => { const key = (event) => { if (event.key === "`" && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) setOpen((state) => !state); }; document.addEventListener("keydown", key); return () => document.removeEventListener("keydown", key); }, []);
  function submit(event) { event.preventDefault(); const command = value.trim().toLowerCase(); if (!command) return; setLines((old) => command === "clear" ? [] : [...old, `portfolio@pooja:~$ ${command}`, responses[command] || `Command not found: ${command}. Type help.`]); setValue(""); }
  return <aside className={`terminal-explorer ${open ? "open" : ""}`}><button className="terminal-toggle" onClick={() => setOpen(!open)} aria-label="Open portfolio terminal">{open ? <X size={18} /> : <Terminal size={18} />}<span>{open ? "Close" : "Terminal"}</span></button>{open && <div className="terminal-window"><header><span>explore@pooja</span><small>Press ` to toggle</small></header><div className="terminal-log">{lines.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}</div><form onSubmit={submit}><span>›</span><input autoFocus value={value} onChange={(event) => setValue(event.target.value)} placeholder="try: projects" /></form></div>}</aside>;
}
