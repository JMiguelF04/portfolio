"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { skillsData, dailyTechnologies, getLevelColor } from "@/data/skills";

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="competencias" className="py-24 bg-background-secondary relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-wider uppercase">{t.skills.subtitle}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">{t.skills.title}</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillsData.map((skillGroup) => (
            <div
              key={skillGroup.categoryKey}
              className="p-8 rounded-2xl bg-card border border-border hover-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center text-accent">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold">{t.skills[skillGroup.categoryKey]}</h3>
              </div>

              <div className="space-y-5">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center">
                    <span className="text-foreground-secondary font-medium">{skill.name}</span>
                    <span className={`text-sm font-semibold bg-gradient-to-r ${getLevelColor(skill.level)} bg-clip-text text-transparent`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground-muted mb-8">{t.skills.dailyTech}</p>
          <div className="flex flex-wrap justify-center gap-6">
            {dailyTechnologies.map((tech) => (
              <div
                key={tech}
                className="px-5 py-3 rounded-xl bg-card border border-border text-foreground-secondary font-medium hover:border-accent hover:text-accent transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
