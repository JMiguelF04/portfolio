export interface Experience {
  titleKey: string;
  company: string;
  periodKey: string;
  technologies: string[];
  current: boolean;
}

export const experienceData: Experience[] = [
  {
    titleKey: "webDeveloper",
    company: "GCO - Ginásio Clube Odivelas",
    periodKey: "period",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "API Integration"],
    current: false,
  },
];

