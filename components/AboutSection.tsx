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
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-kicker">{t(content, "about.subtitle")}</span>
            <h2 className="text-3xl md:text-5xl font-semibold mt-4 mb-4 tracking-tight">
              {t(content, "about.title")}
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto rounded-full opacity-60" />
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3 space-y-6">
              <p className="text-lg text-foreground-secondary leading-relaxed bg-card/70 border border-border/70 rounded-3xl p-6">
                {t(content, "about.p1")}
              </p>
              <p className="text-lg text-foreground-secondary leading-relaxed bg-card/70 border border-border/70 rounded-3xl p-6">
                {t(content, "about.p2")}
              </p>
              <p className="text-lg text-foreground-secondary leading-relaxed bg-card/70 border border-border/70 rounded-3xl p-6">
                {t(content, "about.p3")}
              </p>

              <div className="pt-6 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-card border border-border/70 hover-card">
                  <div className="text-2xl font-bold text-accent">{profile.yearsOfProgramming}+</div>
                  <div className="text-sm text-foreground-muted">{t(content, "about.yearsOfProgramming")}</div>
                </div>
                <div className="p-5 rounded-2xl bg-card border border-border/70 hover-card">
                  <div className="text-2xl font-bold text-accent">{profile.projectsDeveloped}+</div>
                  <div className="text-sm text-foreground-muted">{t(content, "about.projectsDeveloped")}</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <div className="p-6 rounded-3xl bg-card border border-border/70 hover-card">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t(content, "about.location")}
                </h3>
                <p className="text-foreground-secondary">{profile.locationEn}</p>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border/70 hover-card">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  {t(content, "about.languages")}
                </h3>
                <div className="space-y-2">
                  {spokenLanguages.map((lang) => (
                    <div key={lang.id} className="flex justify-between items-center">
                      <span className="text-foreground-secondary">{lang.nameEn}</span>
                      <span className="text-accent text-sm font-medium">{lang.levelEn}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border/70 hover-card">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {t(content, "about.education")}
                </h3>
                <p className="text-foreground-secondary">{educationEntry.degreeEn}</p>
                <p className="text-foreground-muted text-sm">{educationEntry.institution}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
