"use client";

import { useEffect, useRef } from "react";

const contactLinks = [
  {
    icon: "✉️",
    label: "hendrawanhas6k@gmail.com",
    href: "mailto:hendrawanhas6k@gmail.com",
    external: false,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    href: "https://linkedin.com/in/hendrawan-wawan-375a26247",
    external: true,
  },
  {
    icon: "🐙",
    label: "GitHub",
    href: "https://github.com/hendrawanwawan",
    external: true,
  },
];

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="relative z-1 py-20 px-6 pb-24 text-center max-w-[1000px] mx-auto"
    >
      {/* Section Header */}
      <div className="font-mono text-xs text-accent-teal uppercase tracking-[0.15em] mb-2.5">
        Let&apos;s build together
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-white mb-6">
        Get in Touch
      </h2>

      {/* Description */}
      <p className="max-w-[480px] mx-auto text-slate-body text-[0.95rem] leading-relaxed mb-10 fade-in">
        Open to remote full-stack or AI engineering roles. I respond fast,
        communicate clearly, and ship faster than you&apos;d expect.
      </p>

      {/* Contact Links */}
      <div className="flex gap-4 justify-center flex-wrap fade-in">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2.5 px-5 py-3 border border-border-blue rounded-lg bg-navy-800 text-slate-white text-sm font-medium hover:border-accent-blue hover:text-accent-blue hover:-translate-y-0.5 hover:shadow-glow transition-all duration-200"
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
