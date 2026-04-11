"use client";

import type { EducationEntryData, LocalizedText } from "@/lib/site-types";

const t = (content: Record<string, LocalizedText>, key: string) =>
  content[key]?.en ?? "";

interface EducationSectionProps {
  content: Record<string, LocalizedText>;
  educationEntries: EducationEntryData[];
}

export default function EducationSection({ content, educationEntries }: EducationSectionProps) {
  const educationEntry = educationEntries[0];
  if (!educationEntry) return null;

  return (
    <section id="educacao" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          {/* Left */}
          <div className="md:col-span-5">
            <span className="section-label mb-4 block">{t(content, "education.subtitle")}</span>
            <h2 className="font-display italic text-4xl md:text-5xl tracking-tight mb-6">
              {t(content, "education.title")}
            </h2>
            <div className="w-12 h-[2px] bg-accent mb-8" />

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-text">{educationEntry.degreeEn}</h3>
              <p className="text-accent font-medium">{educationEntry.institution}</p>
              <p className="text-text-muted text-sm">{educationEntry.periodEn}</p>
              <p className="text-text-secondary text-sm leading-relaxed mt-4">
                {educationEntry.descriptionEn}
              </p>
            </div>
          </div>

          {/* Right: highlights grid */}
          <div className="md:col-span-7">
            <h4 className="text-xs text-text-muted uppercase tracking-[0.2em] font-semibold mb-6">
              {t(content, "education.coursesTitle")}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {educationEntry.highlights.map((course, index) => (
                <div
                  key={course.id}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-bg-card border border-border hover-card"
                >
                  <span className="font-display italic text-2xl text-accent/30 leading-none flex-shrink-0 mt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-text-secondary text-sm leading-relaxed">
                    {course.textEn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
