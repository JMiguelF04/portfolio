"use client";

import type { LocalizedText, ProjectData } from "@/lib/site-types";

const t = (content: Record<string, LocalizedText>, key: string) =>
  content[key]?.en ?? "";

interface ProjectsSectionProps {
  content: Record<string, LocalizedText>;
  projects: ProjectData[];
}

export default function ProjectsSection({ content, projects }: ProjectsSectionProps) {
  return (
    <section id="projetos" className="py-24 md:py-32 bg-bg-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="section-label mb-4 block">
              {t(content, "projects.subtitle")}
            </span>
            <h2 className="font-display italic text-4xl md:text-5xl tracking-tight">
              {t(content, "projects.title")}
            </h2>
          </div>
          <a
            href="https://github.com/JMiguelF04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent font-medium text-sm group transition-colors"
          >
            {t(content, "projects.viewGithub")}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`group relative p-8 rounded-2xl border border-border hover:border-border-hover bg-bg-card transition-all duration-300 hover-card ${
                i === 0 ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-8" : ""
              }`}
            >
              {project.academic && (
                <div className="absolute top-5 right-5 px-3 py-1 rounded-full border border-accent/20 text-accent text-xs font-medium">
                  {t(content, "projects.academic")}
                </div>
              )}

              <div className={i === 0 ? "flex flex-col justify-center" : ""}>
                <span className="font-display italic text-6xl text-text-muted/20 mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors">
                  {project.titleEn}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {project.descriptionEn}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full border border-border text-text-muted font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {i === 0 && <div />}

              <div className={`flex gap-4 ${i === 0 ? "md:absolute md:bottom-8 md:right-8" : ""}`}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-text-muted hover:text-accent text-sm font-medium transition-colors"
                    aria-label="View code on GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-text-muted hover:text-accent text-sm font-medium transition-colors"
                    aria-label="View live project"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
