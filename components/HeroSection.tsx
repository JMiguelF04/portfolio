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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-12">
      <div className="absolute bottom-12 right-5 md:right-20 w-52 h-52 rounded-full bg-[#2f5f86]/20 blur-3xl" />
      <div className="absolute top-1/3 -right-16 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-muted border border-accent/25 mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-accent font-medium">
              {getContentText(content, "hero.available", language)}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-[1.05] tracking-tight">
            {getContentText(content, "hero.title", language)}{" "}
            <span className="gradient-text">
              {getContentText(content, "hero.titleHighlight", language)}
            </span>
          </h1>
          
          <p className="text-lg md:text-[1.35rem] text-foreground-secondary leading-relaxed mb-10 max-w-3xl mx-auto">
            {getContentText(content, "hero.description", language)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {getContentText(content, "hero.cta", language)}
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-300 bg-card/60"
            >
              {getContentText(content, "hero.learnMore", language)}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-16 max-w-xl mx-auto">
            <div className="text-center bg-card/70 border border-border/70 rounded-3xl px-5 py-6">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                {profile.yearsOfProgramming}+
              </div>
              <div className="text-sm text-foreground-muted">
                {getContentText(content, "hero.yearsOfCode", language)}
              </div>
            </div>
            <div className="text-center bg-card/70 border border-border/70 rounded-3xl px-5 py-6">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                {profile.projectsDeveloped}+
              </div>
              <div className="text-sm text-foreground-muted">
                {getContentText(content, "hero.projects", language)}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
