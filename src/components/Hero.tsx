"use client";

import { useState, useEffect, useCallback } from "react";

const phrases = [
  "Full-Stack Engineer",
  "AI / ML Researcher",
  "Deep Learning Practitioner",
  "Systems Architecture Enthusiast",
  "Open to Remote Work",
];

const stats = [
  { value: "3.95", label: "GPA" },
  { value: "5+", label: "Projects Built" },
  { value: "🥇", label: "SIIF Gold Prize" },
  { value: "2025", label: "PKM Grantee" },
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typeEffect = useCallback(() => {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
      setDisplayText(currentPhrase.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);

      if (charIndex + 1 === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
    } else {
      setDisplayText(currentPhrase.slice(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);

      if (charIndex - 1 === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        return;
      }
    }
  }, [charIndex, isDeleting, phraseIndex]);

  useEffect(() => {
    const timeout = setTimeout(typeEffect, isDeleting ? 40 : 65);
    return () => clearTimeout(timeout);
  }, [typeEffect, isDeleting]);

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 z-1">
      {/* Background Radials */}
      <div className="hero-radial absolute inset-0 pointer-events-none" />

      <div className="relative max-w-[900px] text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="hidden sm:block w-10 h-px bg-gradient-to-r from-transparent to-accent-teal" />
          <span className="font-mono text-xs text-accent-teal uppercase tracking-[0.15em]">
            Available for remote work
          </span>
          <span className="hidden sm:block w-10 h-px bg-gradient-to-l from-transparent to-accent-teal" />
        </div>

        {/* Name */}
        <h1 className="gradient-name font-mono text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-4">
          Hendrawan
        </h1>

        {/* Typed Title */}
        <p className="text-slate-muted text-base sm:text-lg md:text-xl mb-6 min-h-[2rem]">
          <span>{displayText}</span>
          <span className="cursor-blink" />
        </p>

        {/* Description */}
        <p className="max-w-[560px] mx-auto text-slate-body text-sm sm:text-base leading-relaxed mb-10">
          Full-Stack Engineer and AI/ML Researcher based in Makassar, Indonesia.
          I build real products from civic-tech platforms to medical deep
          learning pipelines with a{" "}
          <strong className="text-slate-white">planning-first</strong> mindset
          and clean architecture.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold bg-accent-blue text-white border border-accent-blue hover:bg-[#2563EB] hover:shadow-glow hover:-translate-y-0.5 transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href="mailto:hendrawanhas6k@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold bg-transparent text-slate-white border border-border-blue hover:border-accent-blue hover:text-accent-blue hover:-translate-y-0.5 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-8 sm:gap-10 justify-center mt-16 pt-8 border-t border-border-blue">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-2xl font-bold text-accent-blue leading-none">
                {stat.value}
              </div>
              <div className="text-xs text-slate-muted uppercase tracking-wider mt-1.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
