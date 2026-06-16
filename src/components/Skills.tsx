"use client";

import { useEffect, useRef } from "react";
import { SkillCategory } from "@/types";

const skills: SkillCategory[] = [
  {
    icon: "⚛️",
    category: "Frontend",
    items: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Leaflet.js"],
  },
  {
    icon: "⚙️",
    category: "Backend",
    items: ["Node.js", "PHP 8 / Laravel", "REST API", "MVC Architecture", "Prisma ORM"],
  },
  {
    icon: "🗄️",
    category: "Database",
    items: ["PostgreSQL", "Supabase", "MySQL", "ERD Design", "RBAC"],
  },
  {
    icon: "🤖",
    category: "AI / ML",
    items: ["Python", "TensorFlow", "CNN / DL", "LLM APIs", "Signal Processing"],
  },
  {
    icon: "☁️",
    category: "Cloud & DevOps",
    items: ["Google Cloud", "Vertex AI", "Model Armor", "Vercel", "Git / GitHub"],
  },
  {
    icon: "🔌",
    category: "IoT / Hardware",
    items: ["Arduino", "ESP32", "HC-SR04", "C / C++", "Sensor Integration"],
  },
];

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="relative z-1 bg-navy-800 py-20 px-6"
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Section Header */}
        <div className="font-mono text-xs text-accent-teal uppercase tracking-[0.15em] mb-2.5">
          What I work with
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-white mb-10">
          Technical Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="fade-in p-5 border border-border-blue rounded-xl bg-navy-700 hover:border-accent-blue hover:shadow-glow hover:-translate-y-0.5 transition-all duration-250 group"
            >
              {/* Card Header */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-lg">{skill.icon}</span>
                <span className="text-xs font-semibold text-accent-blue uppercase tracking-wider">
                  {skill.category}
                </span>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[0.7rem] px-2.5 py-1 rounded bg-accent-blue/10 text-[#93C5FD]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
