"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { getContentText, localizeText } from "@/lib/localize";
import type { EducationEntryData, LocalizedText } from "@/lib/site-types";

interface EducationSectionProps {
  content: Record<string, LocalizedText>;
  educationEntries: EducationEntryData[];
}

export default function EducationSection({
  content,
  educationEntries,
}: EducationSectionProps) {
  const { language } = useLanguage();
  const educationEntry = educationEntries[0];

  if (!educationEntry) {
    return null;
  }

  return (
    <section id="educacao" className="py-24 bg-background-secondary/45 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-kicker">
            {getContentText(content, "education.subtitle", language)}
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-4 mb-4 tracking-tight">
            {getContentText(content, "education.title", language)}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-[2rem] bg-card border border-border/70 hover-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-accent-muted flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {localizeText(language, educationEntry.degreePt, educationEntry.degreeEn)}
                    </h3>
                    <p className="text-accent font-medium text-lg">{educationEntry.institution}</p>
                    <p className="text-foreground-muted">
                      {localizeText(language, educationEntry.descriptionPt, educationEntry.descriptionEn)}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-accent-muted border border-accent/20 self-start">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-accent font-semibold">
                    {localizeText(language, educationEntry.periodPt, educationEntry.periodEn)}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  {getContentText(content, "education.coursesTitle", language)}
                </h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {educationEntry.highlights.map((course, index) => (
                    <div
                      key={course.id}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-background/50 border border-border/60"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-foreground-secondary">
                        {localizeText(language, course.textPt, course.textEn)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
