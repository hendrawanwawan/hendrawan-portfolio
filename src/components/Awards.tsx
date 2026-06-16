"use client";

import { useEffect, useRef } from "react";
import { awards } from "@/data/awards";

export default function Awards() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <div
      id="achievements"
      ref={sectionRef}
      className="relative z-1 bg-navy-800 py-20 px-6"
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Section Header */}
        <div className="font-mono text-xs text-accent-teal uppercase tracking-[0.15em] mb-2.5">
          Recognition
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-white mb-10">
          Awards & Achievements
        </h2>

        {/* Awards List */}
        <div className="flex flex-col gap-4">
          {awards.map((award) => (
            <div
              key={award.title}
              className="fade-in flex items-start gap-5 px-6 py-5 border border-border-blue rounded-xl bg-navy-700 hover:border-accent-blue hover:translate-x-1 transition-all duration-200 group"
            >
              {/* Icon */}
              <div className="text-2xl min-w-[2rem] text-center mt-0.5">
                {award.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="font-bold text-[0.95rem] text-slate-white group-hover:text-accent-blue transition-colors">
                  {award.title}
                </div>
                <div className="text-sm text-slate-muted mt-0.5">
                  {award.subtitle}
                </div>
              </div>

              {/* Year */}
              <div className="font-mono text-xs text-accent-teal whitespace-nowrap pt-1">
                {award.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
