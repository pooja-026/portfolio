"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";

const STARTERS = ["What does Pooja build?", "Tell me about Mockmate", "What are her strengths?"];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: "Hi, I'm Pooja's portfolio guide. Curious about her work, background, or what she's looking for?" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }); }, [messages, loading, open]);

  async function send(text) {
    if (!text.trim() || loading) return;
    const next = [...messages, { role: "user", content: text }];
    setMessages(next); setInput(""); setLoading(true);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next }) });
      const data = await res.json();
      setMessages((old) => [...old, { role: "assistant", content: data.reply || "I'm having trouble connecting right now. Please try again shortly." }]);
    } catch {
      setMessages((old) => [...old, { role: "assistant", content: "I'm having trouble connecting right now. Please try again shortly." }]);
    } finally { setLoading(false); }
  }

  return <aside className={`chat-dock ${open ? "is-open" : ""}`}>
    <div className="chat-panel">
      <header><div className="chat-title"><span className="chat-spark"><Sparkles size={15} /></span><div><strong>Ask Pooja&apos;s AI</strong><small>Grounded in her portfolio</small></div></div><button onClick={() => setOpen(false)} aria-label="Close chat"><X size={18} /></button></header>
      <div ref={scrollRef} className="messages">{messages.map((m, i) => <p className={`message ${m.role}`} key={i}>{m.content}</p>)}{loading && <p className="message assistant typing">Thinking<span>.</span><span>.</span><span>.</span></p>}</div>
      {messages.length === 1 && <div className="starters">{STARTERS.map((s) => <button key={s} onClick={() => send(s)}>{s}</button>)}</div>}
      <form onSubmit={(e) => { e.preventDefault(); send(input); }}><input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a question..." /><button type="submit" disabled={loading} aria-label="Send message"><Send size={16} /></button></form>
    </div>
    <button className="chat-toggle" onClick={() => setOpen(!open)} aria-label="Open portfolio chatbot">{open ? <X size={20} /> : <><MessageCircle size={21} /><span>Ask me</span></>}</button>
  </aside>;
}
