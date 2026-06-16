"use client";

import { useEffect, useRef } from "react";

export default function Education() {
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
      id="education"
      ref={sectionRef}
      className="relative z-1 py-20 px-6 max-w-[1000px] mx-auto"
    >
      {/* Section Header */}
      <div className="font-mono text-xs text-accent-teal uppercase tracking-[0.15em] mb-2.5">
        Background
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-white mb-10">
        Education
      </h2>

      {/* Education Card */}
      <div className="edu-card fade-in relative overflow-hidden flex flex-col sm:flex-row items-start gap-6 px-8 py-7 border border-border-blue rounded-xl bg-navy-800">
        {/* Icon */}
        <div className="text-4xl">🎓</div>

        {/* Content */}
        <div>
          <div className="text-lg font-bold text-slate-white mb-1">
            Bachelor of Computer Science (S.Kom)
          </div>
          <div className="text-sm font-medium text-accent-blue mb-3">
            Universitas Muslim Indonesia — Makassar, Indonesia
          </div>
          <div className="flex gap-4 sm:gap-6 flex-wrap text-sm text-slate-muted">
            <span>📅 2023 – 2027 (Expected)</span>
            <span>
              ⭐ GPA:{" "}
              <strong className="text-slate-white">3.95 / 4.00</strong>
            </span>
            <span>🏷️ Teknik Informatika</span>
          </div>
        </div>
      </div>
    </section>
  );
}
