"use client";

import type { DailyTechnologyData, LocalizedText, SkillCategoryData } from "@/lib/site-types";

const t = (content: Record<string, LocalizedText>, key: string) =>
  content[key]?.en ?? "";

const getLevelWidth = (level: string): string => {
  switch (level) {
    case "Advanced":     return "w-full";
    case "Intermediate": return "w-2/3";
    case "Basic":        return "w-1/3";
    default:             return "w-1/4";
  }
};

interface SkillsSectionProps {
  content: Record<string, LocalizedText>;
  skillCategories: SkillCategoryData[];
  dailyTechnologies: DailyTechnologyData[];
}

export default function SkillsSection({ content, skillCategories, dailyTechnologies }: SkillsSectionProps) {
  return (
    <section id="competencias" className="py-24 md:py-32 bg-bg-warm">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="section-label mb-4 block">{t(content, "skills.subtitle")}</span>
            <h2 className="font-display italic text-4xl md:text-5xl tracking-tight">
              {t(content, "skills.title")}
            </h2>
          </div>
          <div className="w-12 h-[2px] bg-accent md:mb-3" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="p-7 md:p-8 rounded-2xl bg-bg-card border border-border hover-card"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">
                {category.labelEn}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-text font-medium text-sm">{skill.name}</span>
                      <span className="text-text-muted text-xs">{skill.level}</span>
                    </div>
                    <div className="h-[3px] bg-border rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-accent rounded-full ${getLevelWidth(skill.level)} transition-all duration-700`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Daily technologies marquee strip */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-xs text-text-muted uppercase tracking-[0.2em] font-medium mb-6 text-center">
            {t(content, "skills.dailyTech")}
          </p>
          <div className="overflow-hidden">
            <div className="marquee-track">
              {[...dailyTechnologies, ...dailyTechnologies].map((tech, i) => (
                <span
                  key={`${tech.id}-${i}`}
                  className="flex-shrink-0 px-6 py-2.5 mx-2 rounded-full border border-border text-text-secondary text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
