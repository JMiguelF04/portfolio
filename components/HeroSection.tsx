"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { getContentText } from "@/lib/localize";
import type { LocalizedText, ProfileData } from "@/lib/site-types";

interface HeroSectionProps {
  profile: ProfileData;
  content: Record<string, LocalizedText>;
}

export default function HeroSection({ profile, content }: HeroSectionProps) {
  const { language } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Ambient background orbs */}
      <div className="absolute top-1/4 left-1/4 w-[36rem] h-[36rem] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/8 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-muted border border-accent/20 mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-accent font-medium font-mono tracking-wide">
              {getContentText(content, "hero.available", language)}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-[1.06] tracking-tight">
            {getContentText(content, "hero.title", language)}{" "}
            <span className="gradient-text">
              {getContentText(content, "hero.titleHighlight", language)}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            {getContentText(content, "hero.description", language)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-accent/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {getContentText(content, "hero.cta", language)}
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:border-accent/50 hover:text-accent transition-all duration-300 bg-card/40"
            >
              {getContentText(content, "hero.learnMore", language)}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="flex items-center justify-center gap-10">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">
                {profile.yearsOfProgramming}<span className="text-accent">+</span>
              </div>
              <div className="text-xs text-foreground-muted mt-1 font-mono uppercase tracking-widest">
                {getContentText(content, "hero.yearsOfCode", language)}
              </div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">
                {profile.projectsDeveloped}<span className="text-accent">+</span>
              </div>
              <div className="text-xs text-foreground-muted mt-1 font-mono uppercase tracking-widest">
                {getContentText(content, "hero.projects", language)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
