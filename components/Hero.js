"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { profile } from "../data/resume";

export default function Hero() {
  const heroRef = useRef(null);
  const [headlineMotion, setHeadlineMotion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--pointer-x", `${(x + 0.5) * 100}%`);
      hero.style.setProperty("--pointer-y", `${(y + 0.5) * 100}%`);
      hero.style.setProperty("--portrait-x", `${x * 18}px`);
      hero.style.setProperty("--portrait-y", `${y * 14}px`);
    };
    const reset = () => { hero.style.setProperty("--portrait-x", "0px"); hero.style.setProperty("--portrait-y", "0px"); };
    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", reset);
    return () => { hero.removeEventListener("pointermove", move); hero.removeEventListener("pointerleave", reset); };
  }, []);

  function moveHeadline(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    setHeadlineMotion({ x: (event.clientX - rect.left) / rect.width - 0.5, y: (event.clientY - rect.top) / rect.height - 0.5 });
  }

  const letterStyle = (index) => ({ "--letter-x": `${headlineMotion.x * ((index % 5) - 2) * 3}px`, "--letter-y": `${headlineMotion.y * ((index % 4) - 1.5) * 4}px`, "--letter-r": `${headlineMotion.x * ((index % 3) - 1) * 3}deg` });
  const word = (text, start = 0) => [...text].map((letter, index) => <span className="hero-letter" style={letterStyle(start + index)} key={`${letter}-${index}`}>{letter === " " ? "\u00a0" : letter}</span>);

  return (
    <section ref={heroRef} className="hero section" id="home">
      <div className="cursor-glow" /><div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
      <div className="constellation" aria-hidden="true"><span className="orbit orbit-a" /><span className="orbit orbit-b" /><span className="star star-a" /><span className="star star-b" /><span className="star star-c" /><span className="star star-d" /><span className="star star-e" /><span className="star star-f" /><span className="comet" /></div>
      <div className="signal signal-one" /><div className="signal signal-two" /><div className="signal signal-three" />
      <div className="availability"><span /> Available for new adventures</div>
      <div className="hero-grid">
        <div><p className="eyebrow">Hello, I&apos;m Pooja -</p><h1 className="interactive-headline" onPointerMove={moveHeadline} onPointerLeave={() => setHeadlineMotion({ x: 0, y: 0 })}>{word("Making data")}<br />feel <em>{word("alive.", 11)}</em></h1><p className="hero-copy">{profile.tagline}</p><a className="round-link" href="#work">Explore my work <ArrowDownRight size={18} /></a></div>
        <div className="hero-art" aria-label="Portrait of Pooja Nemade"><div className="portrait-frame"><img src="/Photo2.jpg" alt="Pooja Nemade" /></div><span className="portrait-caption">Pooja Nemade / 2026</span></div>
      </div>
      <div className="expedition-marquee" aria-hidden="true"><div><span>EXPLORE</span><i>✦</i><span>BUILD</span><i>✦</i><span>LEARN</span><i>✦</i><span>DISCOVER</span><i>✦</i><span>EXPLORE</span><i>✦</i><span>BUILD</span><i>✦</i></div></div>
      <div className="hero-bottom"><span>Move your cursor to explore</span><span>01 - 04</span></div>
    </section>
  );
}
