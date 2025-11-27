"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { experienceData } from "@/data/experience";

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-wider uppercase">{t.experience.subtitle}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">{t.experience.title}</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experienceData.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background md:-translate-x-1/2 -translate-x-1/2 z-10">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-50" />
                  )}
                </div>

                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                  <div className="p-8 rounded-2xl bg-card border border-border hover-card">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{t.experience[exp.titleKey as keyof typeof t.experience]}</h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-muted">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm text-accent font-medium">{t.experience[exp.periodKey as keyof typeof t.experience]}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {t.experience.descriptions.map((item, i) => (
                        <li key={i} className="flex gap-3 text-foreground-secondary">
                          <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-background border border-border text-foreground-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground-muted mb-4">{t.experience.cvQuestion}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/CV-PT.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-all duration-300 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t.experience.cvPt}
            </a>
            <a
              href="/CV-ENG.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-all duration-300 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t.experience.cvEn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
