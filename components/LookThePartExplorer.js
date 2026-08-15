"use client";

import { useEffect } from "react";
import { ArrowRight, BarChart3, Database, ShieldCheck, X } from "lucide-react";

export default function LookThePartExplorer({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open, onClose]);

  if (!open) return null;
  return <div className="case-study-backdrop" role="dialog" aria-modal="true" aria-label="LookThePart project case study">
    <section className="case-study-panel">
      <button className="case-close" onClick={onClose} aria-label="Close LookThePart case study"><X size={20} /></button>
      <div className="case-hero">
        <p className="case-kicker">Case study / 01</p><h2>Making every<br /><em>discovery count.</em></h2>
        <p>LookThePart modernized fashion discovery through richer search, content automation, and behavioral analytics. Pooja owned the event-tracking and analytics layer that made user journeys measurable.</p>
        <div className="case-metrics"><span><strong>15+</strong> tracked actions</span><span><strong>~40%</strong> less manual reporting</span><span><strong>1</strong> connected user journey</span></div>
      </div>
      <div className="case-media"><img src="/lookthepart/project-overview.jpeg" alt="LookThePart project overview showing search, content automation, analytics, and security work" /></div>
      <div className="full-journey-map"><div><p className="case-kicker">User journey flowchart</p><h3>From a post ID to<br />the next discovery.</h3><p>This is the real LookThePart journey map, showing exact matches, similar looks, retailer transitions, and related product exploration.</p></div><img src="/lookthepart/journey-map.png?v=2" alt="LookThePart user journey map from post ID through product discovery" /></div>
      <div className="case-grid"><article><BarChart3 /><h3>Behavioral telemetry</h3><p>Defined the event taxonomy and built audit logging for high-volume event ingestion, structured exports, cohort analysis, and user-journey insight.</p></article><article><Database /><h3>Identity & location signals</h3><p>Implemented proxy-aware IP handling through X-Forwarded-For and IP-to-location mapping to support accurate identification, geographic profiling, and fraud signals.</p></article><article><ShieldCheck /><h3>Platform foundation</h3><p>The wider team modernized search, content publishing, security, and analytics capabilities across the fashion-discovery platform.</p></article></div>
      <div className="case-demo"><div><p className="case-kicker">Product demo</p><h3>See the product<br />in motion.</h3><p>Live product behavior and discovery flow captured during the project.</p></div><video controls preload="metadata" poster="/lookthepart/project-overview.jpeg"><source src="/lookthepart/lookthepart-demo.mp4" type="video/mp4" />Your browser does not support this video.</video></div>
      <footer className="case-footer"><span>Role: Analytics &amp; event-tracking layer</span><span>Django · Python · PostgreSQL · AWS</span><button onClick={onClose}>Back to exploration <ArrowRight size={16} /></button></footer>
    </section>
  </div>;
}
