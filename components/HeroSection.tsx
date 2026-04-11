"use client";

import type { LocalizedText, ProfileData } from "@/lib/site-types";

interface HeroSectionProps {
  profile: ProfileData;
  content: Record<string, LocalizedText>;
}

const t = (content: Record<string, LocalizedText>, key: string) =>
  content[key]?.en ?? "";

export default function HeroSection({ profile, content }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-tr from-cyan-500/8 to-transparent blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 w-full relative z-10 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2.5 mb-8">
          <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
          <span className="text-xs font-medium text-green tracking-wide uppercase">
            {t(content, "hero.available")}
          </span>
        </div>

        <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] font-display italic tracking-tight mb-6">
          {t(content, "hero.title")}{" "}
          <span className="text-accent not-italic">{t(content, "hero.titleHighlight")}</span>
        </h1>

        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10">
          {t(content, "hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-bg font-medium rounded-full hover:bg-accent-hover transition-colors duration-300 text-sm"
          >
            {t(content, "hero.cta")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-text font-medium rounded-full hover:border-accent hover:text-accent transition-all duration-300 text-sm"
          >
            {t(content, "hero.learnMore")}
          </a>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-10">
          <div>
            <div className="font-display italic text-5xl text-text">
              {profile.yearsOfProgramming}<span className="text-accent">+</span>
            </div>
            <div className="text-xs text-text-muted mt-1 tracking-widest uppercase font-medium">
              {t(content, "hero.yearsOfCode")}
            </div>
          </div>
          <div className="w-px h-14 bg-border" />
          <div>
            <div className="font-display italic text-5xl text-text">
              {profile.projectsDeveloped}<span className="text-accent">+</span>
            </div>
            <div className="text-xs text-text-muted mt-1 tracking-widest uppercase font-medium">
              {t(content, "hero.projects")}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-border" />
    </section>
  );
}
