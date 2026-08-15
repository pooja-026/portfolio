"use client";

import { useEffect, useState } from "react";
import { ArrowRight, FileText, Network, ShieldAlert, X } from "lucide-react";

const MODELS = {
  MLP: { auc: "0.7387", f1: "0.2575", precision: "0.2636", recall: "0.2517", detail: "Treats every transaction as an isolated row of features." },
  GraphSAGE: { auc: "0.8313", f1: "0.3475", precision: "0.3213", recall: "0.3169", detail: "Aggregates neighbor information so connected fraud patterns become part of each transaction's representation." },
};

export default function FraudGNNExplorer({ open, onClose }) {
  const [model, setModel] = useState("GraphSAGE");
  useEffect(() => { if (!open) return; const closeOnEscape = (event) => event.key === "Escape" && onClose(); document.addEventListener("keydown", closeOnEscape); return () => document.removeEventListener("keydown", closeOnEscape); }, [open, onClose]);
  if (!open) return null;
  const active = MODELS[model];
  return <div className="case-study-backdrop fraud-backdrop" role="dialog" aria-modal="true" aria-label="Fraud graph neural network case study"><section className="case-study-panel fraud-panel"><button className="case-close" onClick={onClose} aria-label="Close fraud detection case study"><X size={20} /></button>
    <div className="fraud-hero"><p className="case-kicker">Deep learning research / 04</p><h2>Fraud is a network,<br /><em>not a row in a table.</em></h2><p>Pooja&apos;s team transformed financial transactions into a graph, so the model could learn from shared cards, devices, emails, and addresses—not just isolated values.</p><div className="fraud-head-metrics"><span><b>590k+</b> source transactions</span><span><b>100k</b> stratified sample</span><span><b>1.87M</b> graph edges</span></div></div>
    <div className="graph-lab"><div><p className="case-kicker">Interactive model lab</p><h3>Switch the model.<br />See the signal.</h3><p>{active.detail}</p><div className="model-switch"><button className={model === "MLP" ? "active" : ""} onClick={() => setModel("MLP")}>MLP baseline</button><button className={model === "GraphSAGE" ? "active" : ""} onClick={() => setModel("GraphSAGE")}>GraphSAGE</button></div></div><div className={`fraud-network ${model === "GraphSAGE" ? "graphsage" : ""}`} aria-label="Animated transaction graph"><i className="edge e1" /><i className="edge e2" /><i className="edge e3" /><i className="edge e4" /><i className="edge e5" /><span className="txn n1" /><span className="txn n2" /><span className="txn n3 risk" /><span className="txn n4" /><span className="txn n5 risk" /><span className="txn n6" /><span className="txn n7" /><span className="txn n8" /><span className="txn n9" /></div><div className="model-metrics"><span>Fraud class</span><strong>{model}</strong><div><b>AUC-ROC</b><em>{active.auc}</em></div><div><b>F1 score</b><em>{active.f1}</em></div><div><b>Precision / recall</b><em>{active.precision} / {active.recall}</em></div></div></div>
    <div className="fraud-route"><article><Network /><h3>Build the graph</h3><p>Each transaction becomes a node. Edges connect shared high-signal identity features: card identifiers, billing addresses, email domains, devices, and operating systems.</p></article><article><ShieldAlert /><h3>Find relational risk</h3><p>Message passing lets a transaction learn from its connected neighbors—even when its own amount or attributes appear normal.</p></article><article><FileText /><h3>Measure fairly</h3><p>The team used a stratified sample preserving the real 3.5% fraud rate and evaluated with AUC-ROC and F1 for the imbalanced data.</p></article></div>
    <div className="fraud-result"><div><p className="case-kicker">Result</p><h3>GraphSAGE raised AUC-ROC<br /><em>by 12.5%.</em></h3><p>Compared with the MLP baseline, GraphSAGE improved AUC-ROC from 0.7387 to 0.8313 and F1 from 0.2575 to 0.3475.</p></div><div className="result-bars"><span><b>MLP</b><i style={{ width: "74%" }}>0.7387</i></span><span><b>GraphSAGE</b><i style={{ width: "83%" }}>0.8313</i></span></div></div>
    <footer className="case-footer"><a href="/fraud-gnn/fraud-gnn-report.pdf" target="_blank" rel="noreferrer">View full project report <FileText size={15} /></a><span>IEEE-CIS Fraud Detection · GraphSAGE · GAT</span><button onClick={onClose}>Back to exploration <ArrowRight size={16} /></button></footer>
  </section></div>;
}
