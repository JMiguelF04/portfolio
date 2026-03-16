"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { socialLinks } from "@/data/social";
import { navItems } from "@/components/navigation";

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <>
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 flex-col bg-card border-r border-border z-50">
        <div className="p-8 text-center border-b border-border">
          <div className="relative w-28 h-28 mx-auto mb-4 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-amber-400 to-accent rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-border">
              <Image
                src="/Profile-Photo.png"
                alt="Jorge Ferreira"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-xl font-bold text-foreground mb-1">Jorge Ferreira</h1>
          <p className="text-accent font-medium text-sm">{t.sidebar.juniorDeveloper}</p>
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-muted mt-4">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs text-accent font-medium">{t.sidebar.available}</span>
          </div>
        </div>

        <nav className="flex-1 p-6 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground-secondary hover:text-foreground hover:bg-background-tertiary transition-all duration-200 group"
                >
                  <span className="text-foreground-muted group-hover:text-accent transition-colors">
                    {item.icon}
                  </span>
                  <span className="font-medium">{t.nav[item.labelKey]}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
          <div className="p-5 border-t border-border justify-center flex">
            <a
              href="/CV_ENG.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-6 border border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-all duration-300 font-medium"
            >
              <div className=" px-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                  CV
              </div>
            </a>
          </div>
        <div className="p-6 border-t border-border">
          <div className="flex justify-center mb-4">
            <div className="relative flex items-center p-1 rounded-full bg-background border border-border">
              <button
                onClick={() => setLanguage("pt")}
                className={`relative z-10 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  language === "pt"
                    ? "text-background"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`relative z-10 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  language === "en"
                    ? "text-background"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                EN
              </button>
              <div
                className={`absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-accent transition-all duration-300 ease-out ${
                  language === "pt" ? "left-1" : "left-[calc(50%+1px)]"
                }`}
              />
            </div>
          </div>

          <div className="flex justify-center gap-3 mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-foreground-secondary hover:border-accent hover:text-accent hover:bg-accent-muted transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-center text-foreground-muted text-xs">
            © 2025 Jorge Ferreira
          </p>
        </div>
      </aside>

      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 glass border-b border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border">
              <Image
                src="/Profile-Photo.png"
                alt="Jorge Ferreira"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-foreground text-sm">Jorge Ferreira</p>
              <p className="text-accent text-xs">{t.sidebar.juniorDeveloper}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-background border border-border hover:border-accent transition-all duration-300"
            >
              <span className={`text-xs font-bold transition-colors ${language === "pt" ? "text-accent" : "text-foreground-muted"}`}>
                PT
              </span>
              <div className="w-8 h-4 rounded-full bg-accent-muted relative">
                <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-accent transition-all duration-300 ${language === "pt" ? "left-0.5" : "left-[calc(100%-14px)]"}`} />
              </div>
              <span className={`text-xs font-bold transition-colors ${language === "en" ? "text-accent" : "text-foreground-muted"}`}>
                EN
              </span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-border hover:border-accent transition-colors"
              aria-label="Menu"
            >
              <span
                className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`lg:hidden fixed inset-0 z-40 bg-background/98 backdrop-blur-xl transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          <div className="text-center py-8 border-b border-border">
            <div className="relative w-24 h-24 mx-auto mb-4 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-amber-400 to-accent rounded-full blur opacity-30" />
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-border">
                <Image
                  src="/Profile-Photo.png"
                  alt="Jorge Ferreira"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h2 className="text-xl font-bold text-foreground">Jorge Ferreira</h2>
            <p className="text-accent font-medium">{t.sidebar.juniorDeveloper}</p>
          </div>

          <nav className="flex-1 py-8">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 px-4 py-4 rounded-xl text-foreground-secondary hover:text-foreground hover:bg-background-tertiary transition-all duration-200"
                  >
                    <span className="text-accent">{item.icon}</span>
                    <span className="text-lg font-medium">{t.nav[item.labelKey]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-border pt-6">
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 flex items-center justify-center rounded-xl border border-border text-foreground-secondary hover:border-accent hover:text-accent transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
