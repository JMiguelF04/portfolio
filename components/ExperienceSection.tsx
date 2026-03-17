"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { getContentText, localizeText } from "@/lib/localize";
import type { ExperienceData, LocalizedText, ProfileData } from "@/lib/site-types";

interface ExperienceSectionProps {
  content: Record<string, LocalizedText>;
  experiences: ExperienceData[];
  profile: ProfileData;
}

export default function ExperienceSection({
  content,
  experiences,
  profile,
}: ExperienceSectionProps) {
  const { language } = useLanguage();

  return (
    <section id="experiencia" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-kicker">
            {getContentText(content, "experience.subtitle", language)}
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-4 mb-4 tracking-tight">
            {getContentText(content, "experience.title", language)}
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto rounded-full opacity-60" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border/80" />

            <div className="space-y-8">
              {experiences.map((experience) => (
                <div key={experience.id} className="relative pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-[15px] top-8 w-[11px] h-[11px] rounded-full bg-accent border-2 border-background z-10">
                    {experience.current && (
                      <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-50" />
                    )}
                  </div>

                  <div className="p-7 rounded-3xl bg-card border border-border/70 hover-card">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          {localizeText(language, experience.rolePt, experience.roleEn)}
                        </h3>
                        <p className="text-accent font-medium text-sm">{experience.company}</p>
                      </div>
                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-muted border border-accent/20 flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs text-accent font-medium">
                          {localizeText(language, experience.periodPt, experience.periodEn)}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-5">
                      {experience.bullets.map((bullet) => (
                        <li key={bullet.id} className="flex gap-3 text-foreground-secondary text-sm">
                          <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{localizeText(language, bullet.textPt, bullet.textEn)}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-background border border-border/80 text-foreground-secondary font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-14">
          <p className="text-foreground-muted mb-4 text-sm">
            {getContentText(content, "experience.cvQuestion", language)}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={profile.cvFilePath}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent/40 text-accent rounded-full hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 font-medium text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {getContentText(content, "experience.cvEn", language)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
