export interface Project {
  title: string;
  description: string;
  stack: string[];
  badge: "web" | "ai" | "research" | "iot";
  githubUrl: string;
}

export interface Award {
  icon: string;
  title: string;
  subtitle: string;
  year: string;
}

export interface QuickInfo {
  icon: string;
  title: string;
  subtitle: string;
}

export interface SkillCategory {
  icon: string;
  category: string;
  items: string[];
}
