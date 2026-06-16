"use client";

import { useEffect, useRef } from "react";
import { QuickInfo } from "@/types";

const quickInfoItems: QuickInfo[] = [
  {
    icon: "🎓",
    title: "Universitas Muslim Indonesia",
    subtitle: "S.Kom — Teknik Informatika · GPA 3.95",
  },
  {
    icon: "🔬",
    title: "AI / ML Researcher",
    subtitle: "ECG arrhythmia classification with MB-DCNN",
  },
  {
    icon: "🏫",
    title: "Laboratory Assistant",
    subtitle: "FIKOM UMI — mentoring & course facilitation",
  },
  {
    icon: "☁️",
    title: "Cloud Practitioner",
    subtitle: "Google Cloud · Vertex AI · Model Armor",
  },
  {
    icon: "📍",
    title: "Based in Makassar, Indonesia",
    subtitle: "Open to remote — any timezone",
  },
];

const tags = [
  "Next.js",
  "TypeScript",
  "Supabase",
  "Python",
  "TensorFlow",
  "PostgreSQL",
  "Laravel",
  "Google Cloud",
  "LLM APIs",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const fadeEls = sectionRef.current?.querySelectorAll(".fade-in");
    fadeEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-1 py-20 px-6 max-w-[1000px] mx-auto"
    >
      {/* Section Header */}
      <div className="font-mono text-xs text-accent-teal uppercase tracking-[0.15em] mb-2.5">
        Who I am
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-white mb-10">
        Engineer. Researcher. Builder.
      </h2>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Bio */}
        <div className="fade-in">
          <p className="text-slate-body text-[0.95rem] leading-relaxed mb-4">
            I&apos;m a{" "}
            <strong className="text-slate-white">
              Computer Science student at Universitas Muslim Indonesia
            </strong>{" "}
            (2023–2027), specializing in Software Engineering and AI/ML. I
            approach every project with architecture design and system thinking
            before a single line of code.
          </p>
          <p className="text-slate-body text-[0.95rem] leading-relaxed mb-4">
            My work spans full-stack web development, deep learning research for
            medical signals, and civic-tech products. I&apos;ve competed
            internationally — winning a{" "}
            <strong className="text-slate-white">
              Gold Prize at SIIF 2024
            </strong>{" "}
            in Seoul — and secured national PKM funding from Indonesia&apos;s
            Ministry of Education.
          </p>
          <p className="text-slate-body text-[0.95rem] leading-relaxed mb-6">
            I&apos;m comfortable working with{" "}
            <strong className="text-slate-white">incomplete specs</strong>,
            making pragmatic technical decisions, and shipping things fast
            without sacrificing maintainability.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1 rounded border border-border-blue text-accent-blue bg-accent-blue/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Quick Info Cards */}
        <div className="flex flex-col gap-3 fade-in">
          {quickInfoItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 p-4 border border-border-blue rounded-lg bg-navy-800 hover:border-accent-blue transition-colors duration-200 group"
            >
              <div className="text-xl min-w-[1.5rem] text-center mt-0.5">
                {item.icon}
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-white group-hover:text-accent-blue transition-colors">
                  {item.title}
                </div>
                <div className="text-xs text-slate-muted">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
