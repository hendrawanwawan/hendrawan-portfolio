"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/90 backdrop-blur-xl border-b border-border-blue shadow-lg"
          : "bg-navy-900/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      {/* Logo */}
      <Link
        href="#hero"
        className="font-mono text-base font-semibold tracking-tight text-accent-blue hover:text-accent-teal transition-colors"
      >
        hw<span className="text-accent-teal">.</span>dev
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-slate-muted text-sm font-medium uppercase tracking-widest hover:text-accent-blue transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative w-6 h-5 flex flex-col justify-between"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-[2px] w-full bg-slate-white rounded transition-all duration-300 origin-center ${
            isOpen ? "rotate-45 translate-y-[9px]" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-full bg-slate-white rounded transition-all duration-300 ${
            isOpen ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-full bg-slate-white rounded transition-all duration-300 origin-center ${
            isOpen ? "-rotate-45 -translate-y-[9px]" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[65px] bg-navy-900/95 backdrop-blur-xl md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 pt-16">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-white text-lg font-medium uppercase tracking-widest hover:text-accent-blue transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
