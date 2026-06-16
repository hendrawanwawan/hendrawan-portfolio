"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";

const badgeLabels: Record<string, string> = {
  web: "Web App",
  ai: "AI / Deep Learning",
  research: "Research Tool",
  iot: "IoT / Hardware",
};

export default function Projects() {
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
      { threshold: 0.1 }
    );

    const fadeEls = sectionRef.current?.querySelectorAll(".fade-in");
    fadeEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative z-1 py-20 px-6 max-w-[1000px] mx-auto"
    >
      {/* Section Header */}
      <div className="font-mono text-xs text-accent-teal uppercase tracking-[0.15em] mb-2.5">
        What I&apos;ve built
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-white mb-10">
        Featured Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="proj-card fade-in relative overflow-hidden border border-border-blue rounded-xl bg-navy-800 p-6 flex flex-col hover:border-accent-blue/40 hover:shadow-glow hover:-translate-y-1 transition-all duration-250 group"
          >
            {/* Badge */}
            <span
              className={`badge-${project.badge} inline-block font-mono text-[0.65rem] px-2.5 py-1 rounded uppercase tracking-wider mb-3 w-fit`}
            >
              {badgeLabels[project.badge]}
            </span>

            {/* Title */}
            <h3 className="text-base font-bold text-slate-white tracking-tight mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-body leading-relaxed flex-1 mb-5">
              {project.description}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[0.68rem] px-2 py-0.5 rounded bg-white/5 text-slate-muted border border-white/8"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-accent-blue hover:text-accent-teal transition-colors flex items-center gap-1"
              >
                ↗ GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
