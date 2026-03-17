"use client";

import { JSX } from "react";

import { useLanguage } from "@/lib/LanguageContext";
import { getContentText, localizeText } from "@/lib/localize";
import type {
  DailyTechnologyData,
  LocalizedText,
  SkillCategoryData,
} from "@/lib/site-types";

const getLevelColor = (level: string): string => {
  switch (level) {
    case "Advanced":
      return "from-emerald-500 to-emerald-400";
    case "Intermediate":
      return "from-blue-500 to-cyan-400";
    case "Basic":
      return "from-yellow-500 to-amber-400";
    default:
      return "from-gray-500 to-gray-400";
  }
};

const skillCategoryIcons: Record<string, JSX.Element> = {
  frontend: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  backend: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
      />
    </svg>
  ),
  "ai-ml": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  ),
  "mobile-design": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    </svg>
  ),
};

interface SkillsSectionProps {
  content: Record<string, LocalizedText>;
  skillCategories: SkillCategoryData[];
  dailyTechnologies: DailyTechnologyData[];
}

export default function SkillsSection({
  content,
  skillCategories,
  dailyTechnologies,
}: SkillsSectionProps) {
  const { language } = useLanguage();

  return (
    <section id="competencias" className="py-24 bg-background-secondary/40 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-kicker">
            {getContentText(content, "skills.subtitle", language)}
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-4 mb-4 tracking-tight">
            {getContentText(content, "skills.title", language)}
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto rounded-full opacity-60" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((skillGroup) => (
            <div
              key={skillGroup.id}
              className="p-7 rounded-3xl bg-card border border-border/70 hover-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-muted flex items-center justify-center text-accent border border-accent/15">
                  {skillCategoryIcons[skillGroup.slug]}
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {localizeText(language, skillGroup.labelPt, skillGroup.labelEn)}
                </h3>
              </div>

              <div className="space-y-3.5">
                {skillGroup.skills.map((skill) => (
                  <div key={skill.id} className="flex items-center justify-between gap-4">
                    <span className="text-foreground-secondary font-medium text-sm">
                      {skill.name}
                    </span>
                    <span
                      className={`text-xs font-semibold bg-gradient-to-r ${getLevelColor(skill.level)} bg-clip-text text-transparent flex-shrink-0`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-foreground-muted text-sm mb-7 font-mono tracking-wide uppercase text-xs">
            {getContentText(content, "skills.dailyTech", language)}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {dailyTechnologies.map((tech) => (
              <div
                key={tech.id}
                className="px-4 py-2 rounded-xl bg-card border border-border/70 text-foreground-secondary text-sm font-medium hover:border-accent/40 hover:text-accent hover:bg-accent-muted transition-all duration-300"
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
