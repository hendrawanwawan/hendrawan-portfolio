import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Parking-Lapor",
    description:
      "Civic-tech platform for crowdsourced illegal parking reports in Makassar. Citizens can pin incidents on an interactive map with photo evidence, triggering moderated reports to city authorities. Built as a PKM-KC / Gemastik competition entry.",
    stack: ["Next.js 14", "TypeScript", "Supabase", "Prisma ORM", "Leaflet.js", "shadcn/ui"],
    badge: "web",
    githubUrl: "https://github.com/hendrawanwawan",
  },
  {
    title: "SLR PRISMA Toolchain",
    description:
      "Automated Systematic Literature Review pipeline following PRISMA 2020. Multi-database search via Scopus API, smart deduplication, AI-assisted abstract screening, and PDF retrieval through Unpaywall. Powers MB-DCNN ECG research.",
    stack: ["Python", "Scopus API", "Unpaywall", "pandas", "PRISMA 2020"],
    badge: "research",
    githubUrl: "https://github.com/hendrawanwawan/Scopus-scrapping-paper",
  },
  {
    title: "MB-DCNN ECG Arrhythmia Classifier",
    description:
      "Multi-Branch Deep Convolutional Neural Network for ECG arrhythmia classification. Comprehensive literature analysis across 50+ papers, covering architectures, evaluation metrics, and benchmark clinical datasets (MIT-BIH, PhysioNet).",
    stack: ["Python", "TensorFlow", "CNN", "ECG Signals", "Medical AI"],
    badge: "ai",
    githubUrl: "https://github.com/hendrawanwawan",
  },
  {
    title: "Laboratory Information System",
    description:
      "Full-featured lab management system with Role-Based Access Control for Universitas Muslim Indonesia. Digitized borrowing workflows, equipment tracking, and administrative approvals — replacing manual paper-based processes entirely.",
    stack: ["PHP 8.4", "MySQL 8.2", "MVC", "RBAC", "UML Design"],
    badge: "web",
    githubUrl: "https://github.com/hendrawanwawan",
  },
  {
    title: "IoT State-Tracking System",
    description:
      "Real-time state tracking system using microcontrollers and ultrasonic sensors. Implemented voltage divider circuits, LED/buzzer feedback, and reliable hardware-software communication for automated physical environment monitoring.",
    stack: ["Arduino", "ESP32", "HC-SR04", "C/C++", "Voltage Dividers"],
    badge: "iot",
    githubUrl: "https://github.com/hendrawanwawan",
  },
];
