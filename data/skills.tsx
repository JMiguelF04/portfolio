import { ReactNode } from "react";

export interface SkillItem {
  name: string;
  level: "Advanced" | "Intermediate" | "Basic" | "";
}

export interface SkillCategory {
  categoryKey: "frontend" | "backend" | "aiMl" | "mobileDesign";
  icon: ReactNode;
  items: SkillItem[];
}

export const getLevelColor = (level: string): string => {
  switch (level) {
    case "Advanced":
      return "from-green-500 to-emerald-400";
    case "Intermediate":
      return "from-blue-500 to-cyan-400";
    case "Basic":
      return "from-yellow-500 to-amber-400";
    default:
      return "from-gray-500 to-gray-400";
  }
};

export const skillsData: SkillCategory[] = [
  {
    categoryKey: "frontend",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      { name: "Next.js", level: "Advanced" },
      { name: "React", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Intermediate" },
    ],
  },
  {
    categoryKey: "backend",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    items: [
      { name: "Java / Spring Boot", level: "Intermediate" },
      { name: "APIs REST", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
      { name: "Node.js", level: "Advanced" },
      { name: "Git & GitHub", level: "Advanced" },
    ],
  },
  {
    categoryKey: "aiMl",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    items: [
      { name: "AI Algorithms", level: "Intermediate" },
      { name: "Python (AI/ML)", level: "Intermediate" },
    ],
  },
  {
    categoryKey: "mobileDesign",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    items: [
      { name: "Android (Kotlin)", level: "Intermediate" },
      { name: "Jetpack Compose", level: "Basic" },
      { name: "UX/UI Design", level: "Advanced" },
      { name: "Figma", level: "Advanced" },
    ],
  },
];

export const dailyTechnologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Tailwind CSS",
  "Git",
  "Figma",
  "VS Code",
  "Vercel",
];

