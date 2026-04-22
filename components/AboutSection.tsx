"use client";

import type {
  EducationEntryData,
  LocalizedText,
  ProfileData,
  SpokenLanguageData,
} from "@/lib/site-types";

interface AboutSectionProps {
  profile: ProfileData;
  content: Record<string, LocalizedText>;
  spokenLanguages: SpokenLanguageData[];
  educationEntry: EducationEntryData;
}

const t = (content: Record<string, LocalizedText>, key: string) =>
  content[key]?.en ?? "";

export default function AboutSection({
  profile,
  content,
  spokenLanguages,
  educationEntry,
}: AboutSectionProps) {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          {/* Left column */}
          <div className="md:col-span-5">
            <span className="section-label mb-6 block">{t(content, "about.subtitle")}</span>
            <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 leading-[1.05]">
              {t(content, "about.title")}
            </h2>
            <div className="w-12 h-[2px] bg-accent mb-8" />

            {/* Info cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-bg-card border border-border hover-card">
                <div className="text-xs text-text-muted uppercase tracking-widest mb-1.5 font-medium">
                  {t(content, "about.location")}
                </div>
                <div className="text-text font-medium">{profile.locationEn}</div>
              </div>

              <div className="p-5 rounded-2xl bg-bg-card border border-border hover-card">
                <div className="text-xs text-text-muted uppercase tracking-widest mb-2 font-medium">
                  {t(content, "about.languages")}
                </div>
                <div className="space-y-1.5">
                  {spokenLanguages.map((lang) => (
                    <div key={lang.id} className="flex justify-between items-center">
                      <span className="text-text-secondary text-sm">{lang.nameEn}</span>
                      <span className="text-accent text-xs font-semibold">{lang.levelEn}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-bg-card border border-border hover-card">
                <div className="text-xs text-text-muted uppercase tracking-widest mb-1.5 font-medium">
                  {t(content, "about.education")}
                </div>
                <div className="text-text font-medium text-sm">{educationEntry.degreeEn}</div>
                <div className="text-text-muted text-xs mt-0.5">{educationEntry.institution}</div>
              </div>
            </div>
          </div>

          {/* Right column - prose */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-text-secondary leading-[1.75]">
                {t(content, "about.p1")}
              </p>
              <p className="text-lg md:text-xl text-text-secondary leading-[1.75]">
                {t(content, "about.p2")}
              </p>
              <p className="text-lg md:text-xl text-text-secondary leading-[1.75]">
                {t(content, "about.p3")}
              </p>
            </div>

            <div className="flex gap-10 mt-12 pt-8 border-t border-border">
              <div>
                <div className="font-display italic text-3xl text-accent">
                  {profile.yearsOfProgramming}+
                </div>
                <div className="text-xs text-text-muted mt-1 uppercase tracking-widest font-medium">
                  {t(content, "about.yearsOfProgramming")}
                </div>
              </div>
              <div>
                <div className="font-display italic text-3xl text-accent">
                  {profile.projectsDeveloped}+
                </div>
                <div className="text-xs text-text-muted mt-1 uppercase tracking-widest font-medium">
                  {t(content, "about.projectsDeveloped")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
