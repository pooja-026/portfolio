import { ArrowUpRight, BookOpen, FileText } from "lucide-react";

const publications = [
  {
    type: "Conference paper · ADCIS 2024",
    title: "Optimized Image Caption Generation for Social Media Using CNN and LSTM",
    detail: "Presented at the 3rd International Conference on Advances in Data-driven Computing and Intelligent Systems, BITS Pilani, September 2024.",
    metrics: ["VGG16 + LSTM", "Flickr8k", "BLEU-1 0.516880"],
    paper: "/publications/image-captioning-paper.pdf",
    proof: "/publications/adcis-presentation-certificate.jpg",
    alt: "ADCIS 2024 presentation certificate for Optimized Image Caption Generation for Social Media Using CNN and LSTM",
  },
  {
    type: "Journal paper · IJSREM 2025",
    title: "MockMate: AI-Powered Online Mock Interview Assessment and Evaluation System",
    detail: "Published in the International Journal of Scientific Research in Engineering & Management, Volume 09, Issue 04, April 2025.",
    metrics: ["Speech-to-text", "NLP + computer vision", "DOI 10.55041/IJSREM45858"],
    paper: "/mockmate/mockmate-research-paper.pdf",
    proof: "/mockmate/publication-certificate.png",
    alt: "MockMate publication certificate for Pooja N. Nemade",
  },
];

export default function Publications() {
  return <section id="publications" className="section publications-section reveal-target"><div className="section-kicker"><span>04</span> Research &amp; publications</div><div className="publications-intro"><div><h2>Ideas tested,<br /><em>shared, and presented.</em></h2></div><p>Research is one way Pooja turns complex AI systems into explainable, evidence-backed work.</p></div><div className="publication-list">{publications.map((item, index) => <article className="publication-card" key={item.title}><div className="publication-index">0{index + 1}</div><div className="publication-copy"><p className="publication-type">{item.type}</p><h3>{item.title}</h3><p>{item.detail}</p><div className="publication-metrics">{item.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div><div className="publication-actions"><a href={item.paper} target="_blank" rel="noreferrer"><FileText size={16} /> Read paper <ArrowUpRight size={15} /></a><a href={item.proof} target="_blank" rel="noreferrer"><BookOpen size={16} /> View proof <ArrowUpRight size={15} /></a></div></div><a className="publication-proof" href={item.proof} target="_blank" rel="noreferrer"><img src={item.proof} alt={item.alt} /><span>Open certificate <ArrowUpRight size={15} /></span></a></article>)}</div></section>;
}
