"use client";

const skills = [
  {
    category: "Frontend",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    items: [
      { name: "Java / Spring Boot", level: 75 },
      { name: "APIs REST", level: 80 },
      { name: "SQL", level: 80 },
      { name: "Node.js", level: 70 },
      { name: "Git & GitHub", level: 85 },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    items: [
      { name: "Algoritmos de IA", level: 80 },
      { name: "Python (AI/ML)", level: 75 },
    ],
  },
  {
    category: "Mobile & Design",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    items: [
      { name: "Android (Kotlin)", level: 70 },
      { name: "Jetpack Compose", level: 65 },
      { name: "UX/UI Design", level: 95 },
      { name: "Figma", level: 75 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="competencias" className="py-24 bg-background-secondary relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-wider uppercase">O que sei fazer</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Competências</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="p-8 rounded-2xl bg-card border border-border hover-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center text-accent">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </div>

              <div className="space-y-5">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground-secondary font-medium">{skill.name}</span>
                      <span className="text-accent font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-amber-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground-muted mb-8">Tecnologias que utilizo diariamente</p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Next.js", "React", "TypeScript", "Python", "Tailwind", "Git", "Figma", "VS Code", "Vercel"].map((tech) => (
              <div
                key={tech}
                className="px-5 py-3 rounded-xl bg-card border border-border text-foreground-secondary font-medium hover:border-accent hover:text-accent transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

