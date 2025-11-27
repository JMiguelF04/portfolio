"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm tracking-wider uppercase">{t.about.subtitle}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">{t.about.title}</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6">
              <p className="text-lg text-foreground-secondary leading-relaxed">
                {t.about.p1} <span className="text-foreground font-medium">{t.about.p1Highlight}</span>
                {t.about.p1End}
              </p>
              
              <p className="text-lg text-foreground-secondary leading-relaxed">
                {t.about.p2} <span className="text-foreground font-medium">{t.about.p2Highlight}</span>
                {t.about.p2Mid} <span className="text-foreground font-medium">{t.about.p2Highlight2}</span>
                {t.about.p2End}
              </p>

              <p className="text-lg text-foreground-secondary leading-relaxed">
                {t.about.p3} <span className="text-foreground font-medium">{t.about.p3Highlight}</span>
                {t.about.p3End}
              </p>

              <div className="pt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border hover-card">
                  <div className="text-2xl font-bold text-accent">2+</div>
                  <div className="text-sm text-foreground-muted">{t.about.yearsOfProgramming}</div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border hover-card">
                  <div className="text-2xl font-bold text-accent">3+</div>
                  <div className="text-sm text-foreground-muted">{t.about.projectsDeveloped}</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <div className="p-6 rounded-2xl bg-card border border-border hover-card">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t.about.location}
                </h3>
                <p className="text-foreground-secondary">Lisboa, Portugal</p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border hover-card">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  {t.about.languages}
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-secondary">{t.about.portuguese}</span>
                    <span className="text-accent text-sm font-medium">{t.about.native}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-secondary">{t.about.english}</span>
                    <span className="text-accent text-sm font-medium">B2/C1</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border hover-card">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {t.about.education}
                </h3>
                <p className="text-foreground-secondary">{t.about.degree}</p>
                <p className="text-foreground-muted text-sm">{t.about.university}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
