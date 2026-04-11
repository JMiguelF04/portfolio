"use client";

import type { ExperienceData, LocalizedText, ProfileData } from "@/lib/site-types";

const t = (content: Record<string, LocalizedText>, key: string) =>
  content[key]?.en ?? "";

interface ExperienceSectionProps {
  content: Record<string, LocalizedText>;
  experiences: ExperienceData[];
  profile: ProfileData;
}

export default function ExperienceSection({ content, experiences, profile }: ExperienceSectionProps) {
  return (
    <section id="experiencia" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          {/* Left: sticky header */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <span className="section-label mb-4 block">{t(content, "experience.subtitle")}</span>
              <h2 className="font-display italic text-4xl md:text-5xl tracking-tight mb-6">
                {t(content, "experience.title")}
              </h2>
              <div className="w-12 h-[2px] bg-accent mb-8" />

              <p className="text-text-muted text-sm mb-4">
                {t(content, "experience.cvQuestion")}
              </p>
              <a
                href={profile.cvFilePath}
                target="_blank"
                className="inline-flex items-center gap-2 text-accent font-medium text-sm group"
              >
                {t(content, "experience.cvEn")}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: timeline */}
          <div className="md:col-span-8">
            <div className="space-y-0">
              {experiences.map((experience, i) => (
                <div
                  key={experience.id}
                  className={`relative py-8 ${
                    i < experiences.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  {/* Period + current badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-text-muted tracking-widest uppercase font-medium">
                      {experience.periodEn}
                    </span>
                    {experience.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-muted text-green text-xs font-medium">
                        <span className="w-1.5 h-1.5 bg-green rounded-full animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-text mb-1">
                    {experience.roleEn}
                  </h3>
                  <p className="text-accent font-medium text-sm mb-4">
                    {experience.company}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet.id} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                        <span className="text-accent mt-1.5 flex-shrink-0">&#8212;</span>
                        <span>{bullet.textEn}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full border border-border text-text-muted font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
