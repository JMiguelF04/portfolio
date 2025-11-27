"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { contactData } from "@/data/contact";
import { socialLinks } from "@/data/social";

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

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-wider uppercase">{t.contact.subtitle}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">{t.contact.title}</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">{t.contact.getInTouch}</h3>
            <p className="text-foreground-secondary leading-relaxed">
              {t.contact.description}
            </p>
          </div>

          <div className="space-y-4">
            {contactData.map((item) => {
              const isLink = item.href !== undefined;
              const Component = isLink ? "a" : "div";
              const linkProps = isLink
                ? {
                    href: item.href,
                    target: item.type === "website" ? "_blank" : undefined,
                    rel: item.type === "website" ? "noopener noreferrer" : undefined,
                  }
                : {};

              return (
                <Component
                  key={item.type}
                  {...linkProps}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-card border border-border ${
                    isLink ? "hover:border-accent transition-all duration-300 group" : ""
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center ${isLink ? "group-hover:bg-accent transition-colors" : ""}`}>
                    {contactIcons[item.type]}
                  </div>
                  <div>
                    <p className="text-foreground-muted text-sm">{t.contact[item.type]}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </Component>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <h4 className="font-semibold mb-4">{t.contact.findMe}</h4>
            <div className="flex gap-3 justify-center">
              {socialLinks.slice(0, 2).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl border border-border text-foreground-secondary hover:border-accent hover:text-accent hover:bg-accent-muted transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
