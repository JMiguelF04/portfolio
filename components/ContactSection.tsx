"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { getContentText, localizeText } from "@/lib/localize";
import type {
  ContactDetailData,
  LocalizedText,
  SocialLinkData,
} from "@/lib/site-types";

const contactIcons = {
  email: (
    <svg className="w-5 h-5 text-accent group-hover:text-background transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5 text-accent group-hover:text-background transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  website: (
    <svg className="w-5 h-5 text-accent group-hover:text-background transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  location: (
    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

interface ContactSectionProps {
  content: Record<string, LocalizedText>;
  contactDetails: ContactDetailData[];
  socialLinks: SocialLinkData[];
}

export default function ContactSection({
  content,
  contactDetails,
  socialLinks,
}: ContactSectionProps) {
  const { language } = useLanguage();

  return (
    <section id="contacto" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-kicker">
            {getContentText(content, "contact.subtitle", language)}
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-4 mb-4 tracking-tight">
            {getContentText(content, "contact.title", language)}
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto rounded-full opacity-60" />
        </div>

        <div className="max-w-2xl mx-auto bg-card/70 border border-border/70 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_45px_rgba(85,65,39,0.12)]">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">
              {getContentText(content, "contact.getInTouch", language)}
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              {getContentText(content, "contact.description", language)}
            </p>
          </div>

          <div className="space-y-4">
            {contactDetails.map((item) => {
              const isLink = Boolean(item.href);
              const Component = isLink ? "a" : "div";
              const linkProps = isLink
                ? {
                    href: item.href ?? undefined,
                    target: item.type === "website" ? "_blank" : undefined,
                    rel: item.type === "website" ? "noopener noreferrer" : undefined,
                  }
                : {};

              return (
                <Component
                  key={item.type}
                  {...linkProps}
                  className={`flex items-center gap-4 p-4 rounded-2xl bg-background/55 border border-border/70 ${
                    isLink ? "hover:border-accent transition-all duration-300 group" : ""
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center ${isLink ? "group-hover:bg-accent transition-colors" : ""}`}>
                    {contactIcons[item.type as keyof typeof contactIcons]}
                  </div>
                  <div>
                    <p className="text-foreground-muted text-sm">
                      {getContentText(content, `contact.${item.type}`, language)}
                    </p>
                    <p className="text-foreground font-medium">
                      {localizeText(language, item.valuePt, item.valueEn)}
                    </p>
                  </div>
                </Component>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <h4 className="font-semibold mb-4">
              {getContentText(content, "contact.findMe", language)}
            </h4>
            <div className="flex gap-3 justify-center">
              {socialLinks.filter((link) => link.visibleInContact).slice(0, 2).map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-2xl border border-border text-foreground-secondary hover:border-accent hover:text-accent hover:bg-accent-muted transition-all duration-300"
                >
                  {link.label === "GitHub" ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
