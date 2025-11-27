export interface Project {
  titleKey: "gco" | "portfolio" | "aroundMe" | "glup";
  technologies: string[];
  github: string | null;
  demo: string | null;
  academic: boolean;
}

export const projectsData: Project[] = [
  {
    titleKey: "gco",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: null,
    demo: "https://gcodivelas.pt",
    academic: false,
  },
  {
    titleKey: "portfolio",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JMiguelF04/portfolio",
    demo: null,
    academic: false,
  },
  {
    titleKey: "aroundMe",
    technologies: ["Next.js", "TypeScript", "SQL", "QGIS", "Figma"],
    github: "https://github.com/antmmatos/Around-Me",
    demo: null,
    academic: true,
  },
  {
    titleKey: "glup",
    technologies: ["Kotlin", "Java", "Android Studio", "SQL", "REST API"],
    github: "https://github.com/JMiguelF04/ProjetoAPP_Grupo7_D02_Iade",
    demo: null,
    academic: true,
  },
];

