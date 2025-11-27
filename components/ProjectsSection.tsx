"use client";

const projects = [
  {
    title: "GCO - Ginásio Clube Odivelas",
    description:
      "Website institucional desenvolvido para o Ginásio Clube Odivelas. Projeto focado em performance, responsividade e experiência do utilizador.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: null,
    demo: "https://gcodivelas.pt",
    academic: false,
  },
  {
    title: "Portfolio Pessoal",
    description:
      "O meu portfolio pessoal, desenvolvido com Next.js e Tailwind CSS. Design moderno e minimalista com foco na apresentação profissional.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JMiguelF04/portfolio",
    demo: null,
    academic: false,
  },
  {
    title: "Around Me",
    description:
      "Plataforma web para descoberta de entretenimento noturno. Inclui mapa interativo, sistema de check-in, recomendações personalizadas e gestão de estabelecimentos.",
    technologies: ["Next.js", "TypeScript", "SQL", "QGIS", "Figma"],
    github: "https://github.com/antmmatos/Around-Me",
    demo: null,
    academic: true,
  },
  {
    title: "Glup - Rastreamento de Hidratação",
    description:
      "Aplicação móvel Android para monitorização do consumo diário de água. Inclui metas personalizadas, gráficos de progresso e sistema de recompensas diárias.",
    technologies: ["Kotlin", "Java", "Android Studio", "SQL", "REST API"],
    github: "https://github.com/JMiguelF04/ProjetoAPP_Grupo7_D02_Iade",
    demo: null,
    academic: true,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 bg-background-secondary relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-wider uppercase">
            O que construí
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Projetos</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover-card group relative"
            >
              {project.academic && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/30">
                  <span className="text-xs font-medium text-blue-400">Académico</span>
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center text-accent">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </div>
                <div className={`flex gap-3 ${project.academic ? 'mr-24' : ''}`}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground-muted hover:text-accent transition-colors"
                      aria-label="Ver código no GitHub"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground-muted hover:text-accent transition-colors"
                      aria-label="Ver projeto ao vivo"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h4>
              <p className="text-foreground-secondary text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-foreground-muted font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-foreground-muted mb-4">
            Quer ver mais do meu trabalho?
          </p>
          <a
            href="https://github.com/JMiguelF04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-full hover:bg-accent-hover transition-all duration-300 font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Ver GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
