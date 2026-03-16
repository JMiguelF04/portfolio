import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const contentEntries = [
  ["hero.available", "Disponivel para trabalhar", "Available for work"],
  ["hero.title", "Transformo ideias em", "I transform ideas into"],
  ["hero.titleHighlight", "experiencias digitais", "digital experiences"],
  [
    "hero.description",
    "Estudante de Engenharia Informatica apaixonado por Inteligencia Artificial e com experiencia em desenvolvimento web, UX/UI Design e criacao de solucoes inovadoras com impacto real.",
    "Computer Engineering student passionate about Artificial Intelligence with experience in web development, UX/UI Design and building innovative solutions with real impact.",
  ],
  ["hero.cta", "Entrar em Contacto", "Get in Touch"],
  ["hero.learnMore", "Conhecer Mais", "Learn More"],
  ["hero.yearsOfCode", "Anos de Codigo", "Years of Code"],
  ["hero.projects", "Projetos", "Projects"],
  ["about.subtitle", "Conhece-me", "Get to know me"],
  ["about.title", "Sobre Mim", "About Me"],
  [
    "about.p1",
    "Sou estudante do 3.o ano de Engenharia Informatica no IADE - Creative University, com um forte interesse em programacao e especial foco em desenvolvimento web.",
    "I'm a 3rd year Computer Engineering student at IADE - Creative University, with a strong interest in programming and a special focus on web development.",
  ],
  [
    "about.p2",
    "Tenho experiencia em frontend com Next.js, desenvolvimento Android com Kotlin e bases em backend e bases de dados. Valorizo UX/UI e a criacao de interfaces funcionais e intuitivas.",
    "I have experience in frontend with Next.js, Android development with Kotlin and foundations in backend and databases. I value UX/UI and the creation of functional, intuitive interfaces.",
  ],
  [
    "about.p3",
    "Mais recentemente, tenho aprofundado a area de Inteligencia Artificial, integrando estes conhecimentos no meu percurso tecnico para desenvolver solucoes uteis, inovadoras e com impacto.",
    "More recently, I have been deepening my knowledge in Artificial Intelligence, integrating it into my technical path to build useful, innovative solutions with impact.",
  ],
  ["about.yearsOfProgramming", "Anos de Programacao", "Years of Programming"],
  ["about.projectsDeveloped", "Projetos Desenvolvidos", "Projects Developed"],
  ["about.location", "Localizacao", "Location"],
  ["about.languages", "Linguas", "Languages"],
  ["about.education", "Formacao", "Education"],
  ["skills.subtitle", "O que sei fazer", "What I can do"],
  ["skills.title", "Competencias", "Skills"],
  ["skills.dailyTech", "Tecnologias que utilizo diariamente", "Technologies I use daily"],
  ["experience.subtitle", "Onde trabalhei", "Where I've worked"],
  ["experience.title", "Experiencia Profissional", "Professional Experience"],
  ["experience.cvQuestion", "Interessado no meu percurso completo?", "Interested in my full background?"],
  ["experience.cvEn", "CV English", "CV English"],
  ["projects.subtitle", "O que construi", "What I've built"],
  ["projects.title", "Projetos", "Projects"],
  ["projects.academic", "Academico", "Academic"],
  ["projects.viewMore", "Queres ver mais do meu trabalho?", "Want to see more of my work?"],
  ["projects.viewGithub", "Ver GitHub", "View GitHub"],
  ["education.subtitle", "Formacao", "Background"],
  ["education.title", "Educacao", "Education"],
  ["education.coursesTitle", "Conhecimentos Adquiridos", "Knowledge Acquired"],
  ["contact.subtitle", "Vamos conversar", "Let's talk"],
  ["contact.title", "Contacto", "Contact"],
  ["contact.getInTouch", "Entra em contacto", "Get in touch"],
  [
    "contact.description",
    "Estou sempre aberto a novas oportunidades e conversas interessantes. Nao hesites em entrar em contacto.",
    "I'm always open to new opportunities and interesting conversations. Don't hesitate to reach out.",
  ],
  ["contact.findMe", "Encontra-me nas redes", "Find me on social media"],
  ["contact.email", "Email", "Email"],
  ["contact.phone", "Telefone", "Phone"],
  ["contact.website", "Website", "Website"],
  ["contact.location", "Localizacao", "Location"],
  ["footer.rights", "Todos os direitos reservados.", "All rights reserved."],
  ["footer.madeWith", "Feito com Next.js, Prisma e PostgreSQL", "Built with Next.js, Prisma and PostgreSQL"],
  ["sidebar.available", "Disponivel", "Available"],
  ["nav.home", "Inicio", "Home"],
  ["nav.about", "Sobre", "About"],
  ["nav.skills", "Competencias", "Skills"],
  ["nav.experience", "Experiencia", "Experience"],
  ["nav.projects", "Projetos", "Projects"],
  ["nav.education", "Educacao", "Education"],
  ["nav.contact", "Contacto", "Contact"],
] as const;

async function main() {
  await prisma.profile.upsert({
    where: { id: "main" },
    update: {
      name: "Jorge Ferreira",
      headlinePt: "Junior Developer",
      headlineEn: "Junior Developer",
      profileImagePath: "/Profile-Photo.png",
      cvFilePath: "/CV_ENG.pdf",
      locationPt: "Lisboa, Portugal",
      locationEn: "Lisbon, Portugal",
      website: "https://www.jmdaf.dev",
      email: "jmferreira0307@gmail.com",
      phone: "+351 934 597 715",
      yearsOfProgramming: 2,
      projectsDeveloped: 4,
      englishLevel: "B2/C1",
    },
    create: {
      id: "main",
      name: "Jorge Ferreira",
      headlinePt: "Junior Developer",
      headlineEn: "Junior Developer",
      profileImagePath: "/Profile-Photo.png",
      cvFilePath: "/CV_ENG.pdf",
      locationPt: "Lisboa, Portugal",
      locationEn: "Lisbon, Portugal",
      website: "https://www.jmdaf.dev",
      email: "jmferreira0307@gmail.com",
      phone: "+351 934 597 715",
      yearsOfProgramming: 2,
      projectsDeveloped: 4,
      englishLevel: "B2/C1",
    },
  });

  for (const [key, pt, en] of contentEntries) {
    await prisma.contentEntry.upsert({
      where: { key },
      update: { pt, en },
      create: { key, pt, en },
    });
  }

  const navigationItems = [
    { slug: "home", labelPt: "Inicio", labelEn: "Home", href: "#", sortOrder: 1 },
    { slug: "about", labelPt: "Sobre", labelEn: "About", href: "#sobre", sortOrder: 2 },
    { slug: "skills", labelPt: "Competencias", labelEn: "Skills", href: "#competencias", sortOrder: 3 },
    { slug: "experience", labelPt: "Experiencia", labelEn: "Experience", href: "#experiencia", sortOrder: 4 },
    { slug: "projects", labelPt: "Projetos", labelEn: "Projects", href: "#projetos", sortOrder: 5 },
    { slug: "education", labelPt: "Educacao", labelEn: "Education", href: "#educacao", sortOrder: 6 },
    { slug: "contact", labelPt: "Contacto", labelEn: "Contact", href: "#contacto", sortOrder: 7 },
  ];

  for (const item of navigationItems) {
    await prisma.navigationItem.upsert({
      where: { slug: item.slug },
      update: item,
      create: item,
    });
  }

  const socialLinks = [
    { platform: "github", label: "GitHub", href: "https://github.com/JMiguelF04", sortOrder: 1 },
    { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/jorge-ferreira-b2a06930b", sortOrder: 2 },
    { platform: "email", label: "Email", href: "mailto:jmferreira0307@gmail.com", sortOrder: 3 },
  ];

  for (const link of socialLinks) {
    await prisma.socialLink.upsert({
      where: { platform: link.platform },
      update: link,
      create: link,
    });
  }

  const contactDetails = [
    { type: "email", valuePt: "jmferreira0307@gmail.com", valueEn: "jmferreira0307@gmail.com", href: "mailto:jmferreira0307@gmail.com", sortOrder: 1 },
    { type: "phone", valuePt: "+351 934 597 715", valueEn: "+351 934 597 715", href: "tel:+351934597715", sortOrder: 2 },
    { type: "website", valuePt: "www.jmdaf.dev", valueEn: "www.jmdaf.dev", href: "https://www.jmdaf.dev", sortOrder: 3 },
    { type: "location", valuePt: "Lisboa, Portugal", valueEn: "Lisbon, Portugal", href: null, sortOrder: 4 },
  ];

  for (const item of contactDetails) {
    await prisma.contactDetail.upsert({
      where: { type: item.type },
      update: item,
      create: item,
    });
  }

  const spokenLanguages = [
    { slug: "portuguese", namePt: "Portugues", nameEn: "Portuguese", levelPt: "Nativo", levelEn: "Native", sortOrder: 1 },
    { slug: "english", namePt: "Ingles", nameEn: "English", levelPt: "B2/C1", levelEn: "B2/C1", sortOrder: 2 },
  ];

  for (const item of spokenLanguages) {
    await prisma.spokenLanguage.upsert({
      where: { slug: item.slug },
      update: item,
      create: item,
    });
  }

  const skillCategoryDefinitions = [
    {
      slug: "frontend",
      labelPt: "Frontend",
      labelEn: "Frontend",
      sortOrder: 1,
      skills: [
        { name: "Next.js", level: "Advanced", sortOrder: 1 },
        { name: "React", level: "Intermediate", sortOrder: 2 },
        { name: "TypeScript", level: "Intermediate", sortOrder: 3 },
        { name: "Tailwind CSS", level: "Intermediate", sortOrder: 4 },
      ],
    },
    {
      slug: "backend",
      labelPt: "Backend",
      labelEn: "Backend",
      sortOrder: 2,
      skills: [
        { name: "Java / Spring Boot", level: "Intermediate", sortOrder: 1 },
        { name: "APIs REST", level: "Intermediate", sortOrder: 2 },
        { name: "SQL", level: "Intermediate", sortOrder: 3 },
        { name: "Node.js", level: "Advanced", sortOrder: 4 },
        { name: "Git & GitHub", level: "Advanced", sortOrder: 5 },
      ],
    },
    {
      slug: "ai-ml",
      labelPt: "AI & Machine Learning",
      labelEn: "AI & Machine Learning",
      sortOrder: 3,
      skills: [
        { name: "AI Algorithms", level: "Intermediate", sortOrder: 1 },
        { name: "Python (AI/ML)", level: "Intermediate", sortOrder: 2 },
      ],
    },
    {
      slug: "mobile-design",
      labelPt: "Mobile & Design",
      labelEn: "Mobile & Design",
      sortOrder: 4,
      skills: [
        { name: "Android (Kotlin)", level: "Intermediate", sortOrder: 1 },
        { name: "Jetpack Compose", level: "Basic", sortOrder: 2 },
        { name: "UX/UI Design", level: "Advanced", sortOrder: 3 },
        { name: "Figma", level: "Advanced", sortOrder: 4 },
      ],
    },
  ];

  for (const category of skillCategoryDefinitions) {
    const savedCategory = await prisma.skillCategory.upsert({
      where: { slug: category.slug },
      update: {
        labelPt: category.labelPt,
        labelEn: category.labelEn,
        sortOrder: category.sortOrder,
      },
      create: {
        slug: category.slug,
        labelPt: category.labelPt,
        labelEn: category.labelEn,
        sortOrder: category.sortOrder,
      },
    });

    for (const skill of category.skills) {
      const skillId = `${category.slug}:${skill.name}`;
      await prisma.skill.upsert({
        where: { id: skillId },
        update: {
          skillCategoryId: savedCategory.id,
          name: skill.name,
          level: skill.level,
          sortOrder: skill.sortOrder,
        },
        create: {
          id: skillId,
          skillCategoryId: savedCategory.id,
          name: skill.name,
          level: skill.level,
          sortOrder: skill.sortOrder,
        },
      });
    }
  }

  const dailyTechnologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Tailwind CSS",
    "Git",
    "Figma",
    "VS Code",
    "Vercel",
  ];

  for (const [index, name] of dailyTechnologies.entries()) {
    await prisma.dailyTechnology.upsert({
      where: { name },
      update: { sortOrder: index + 1 },
      create: { name, sortOrder: index + 1 },
    });
  }

  const experiences = [
    {
      slug: "gco-web-developer",
      rolePt: "Programador Web",
      roleEn: "Web Developer",
      company: "GCO - Ginasio Clube Odivelas",
      periodPt: "Jul 2025 - Nov 2025",
      periodEn: "Jul 2025 - Nov 2025",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "API Integration"],
      current: false,
      sortOrder: 1,
      bullets: [
        [
          "Desenvolvimento do website gcodivelas.pt utilizando Next.js, em colaboracao com outro developer.",
          "Development of the gcodivelas.pt website using Next.js, in collaboration with another developer.",
        ],
        [
          "Implementacao de componentes frontend responsivos e reutilizaveis, seguindo boas praticas de UI/UX.",
          "Implementation of responsive and reusable frontend components, following UI/UX best practices.",
        ],
        [
          "Construcao de paginas dinamicas e otimizacao de performance atraves de SSR e SSG.",
          "Building dynamic pages and performance optimization through SSR and SSG.",
        ],
        [
          "Integracao de funcionalidades essenciais, organizacao de rotas, gestao de estado e interacao com APIs.",
          "Integration of essential features, route organization, state management and API interaction.",
        ],
        [
          "Contribuicao para o design, arquitetura e estrutura geral do projeto.",
          "Contribution to the design, architecture and overall project structure.",
        ],
        [
          "Comunicacao com o cliente para recolha de requisitos, apresentacao de propostas e implementacao de melhorias continuas.",
          "Client communication for requirements gathering, presenting proposals and implementing continuous improvements.",
        ],
      ],
    },
  ];

  for (const item of experiences) {
    const savedExperience = await prisma.experience.upsert({
      where: { slug: item.slug },
      update: {
        rolePt: item.rolePt,
        roleEn: item.roleEn,
        company: item.company,
        periodPt: item.periodPt,
        periodEn: item.periodEn,
        technologies: item.technologies,
        current: item.current,
        sortOrder: item.sortOrder,
      },
      create: {
        slug: item.slug,
        rolePt: item.rolePt,
        roleEn: item.roleEn,
        company: item.company,
        periodPt: item.periodPt,
        periodEn: item.periodEn,
        technologies: item.technologies,
        current: item.current,
        sortOrder: item.sortOrder,
      },
    });

    for (const [index, bullet] of item.bullets.entries()) {
      const bulletId = `${item.slug}:bullet:${index + 1}`;
      await prisma.experienceBullet.upsert({
        where: { id: bulletId },
        update: {
          experienceId: savedExperience.id,
          textPt: bullet[0],
          textEn: bullet[1],
          sortOrder: index + 1,
        },
        create: {
          id: bulletId,
          experienceId: savedExperience.id,
          textPt: bullet[0],
          textEn: bullet[1],
          sortOrder: index + 1,
        },
      });
    }
  }

  const projects = [
    {
      slug: "gco",
      titlePt: "GCO - Ginasio Clube Odivelas",
      titleEn: "GCO - Ginasio Clube Odivelas",
      descriptionPt: "Website institucional desenvolvido para o Ginasio Clube Odivelas. Projeto focado em performance, responsividade e experiencia do utilizador.",
      descriptionEn: "Institutional website developed for Ginasio Clube Odivelas. Project focused on performance, responsiveness and user experience.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      github: null,
      demo: "https://gcodivelas.pt",
      academic: false,
      sortOrder: 1,
    },
    {
      slug: "portfolio",
      titlePt: "Portfolio Pessoal",
      titleEn: "Personal Portfolio",
      descriptionPt: "O meu portfolio pessoal, desenvolvido com Next.js e Tailwind CSS. Design moderno e minimalista com foco na apresentacao profissional.",
      descriptionEn: "My personal portfolio, built with Next.js and Tailwind CSS. Modern and minimalist design focused on professional presentation.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      github: "https://github.com/JMiguelF04/portfolio",
      demo: null,
      academic: false,
      sortOrder: 2,
    },
    {
      slug: "around-me",
      titlePt: "Around Me",
      titleEn: "Around Me",
      descriptionPt: "Plataforma web para descoberta de entretenimento noturno. Inclui mapa interativo, sistema de check-in, recomendacoes personalizadas e gestao de estabelecimentos.",
      descriptionEn: "Web platform for nightlife entertainment discovery. Includes an interactive map, check-in system, personalized recommendations and venue management.",
      technologies: ["Next.js", "TypeScript", "SQL", "QGIS", "Figma"],
      github: "https://github.com/antmmatos/Around-Me",
      demo: null,
      academic: true,
      sortOrder: 3,
    },
    {
      slug: "glup",
      titlePt: "Glup - Rastreamento de Hidratacao",
      titleEn: "Glup - Hydration Tracking",
      descriptionPt: "Aplicacao movel Android para monitorizacao do consumo diario de agua. Inclui metas personalizadas, graficos de progresso e sistema de recompensas diarias.",
      descriptionEn: "Android mobile app for daily water consumption monitoring. Includes personalized goals, progress charts and a daily rewards system.",
      technologies: ["Kotlin", "Java", "Android Studio", "SQL", "REST API"],
      github: "https://github.com/JMiguelF04/ProjetoAPP_Grupo7_D02_Iade",
      demo: null,
      academic: true,
      sortOrder: 4,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }

  const educationEntries = [
    {
      slug: "iade-computer-engineering",
      degreePt: "Licenciatura em Engenharia Informatica",
      degreeEn: "Bachelor's in Computer Engineering",
      institution: "IADE - Creative University",
      periodPt: "2023 - Presente",
      periodEn: "2023 - Present",
      descriptionPt: "Formacao abrangente em ciencias da computacao com foco pratico em desenvolvimento de software.",
      descriptionEn: "Comprehensive training in computer science with a practical focus on software development.",
      sortOrder: 1,
      highlights: [
        [
          "Desenvolvimento web com Next.js e TypeScript",
          "Web development with Next.js and TypeScript",
        ],
        [
          "Competencias em UX/UI Design e criacao de interfaces funcionais",
          "UX/UI Design skills and creation of functional interfaces",
        ],
        [
          "Desenvolvimento de aplicacoes moveis (Android/Kotlin)",
          "Mobile app development (Android/Kotlin)",
        ],
        [
          "Backend com Java / Spring Boot",
          "Backend with Java / Spring Boot",
        ],
        [
          "Programacao em C e bases solidas de SQL",
          "C programming and solid SQL foundations",
        ],
        [
          "Formacao em Sistemas Distribuidos e Algoritmos de IA",
          "Training in Distributed Systems and AI Algorithms",
        ],
      ],
    },
  ];

  for (const item of educationEntries) {
    const savedEntry = await prisma.educationEntry.upsert({
      where: { slug: item.slug },
      update: {
        degreePt: item.degreePt,
        degreeEn: item.degreeEn,
        institution: item.institution,
        periodPt: item.periodPt,
        periodEn: item.periodEn,
        descriptionPt: item.descriptionPt,
        descriptionEn: item.descriptionEn,
        sortOrder: item.sortOrder,
      },
      create: {
        slug: item.slug,
        degreePt: item.degreePt,
        degreeEn: item.degreeEn,
        institution: item.institution,
        periodPt: item.periodPt,
        periodEn: item.periodEn,
        descriptionPt: item.descriptionPt,
        descriptionEn: item.descriptionEn,
        sortOrder: item.sortOrder,
      },
    });

    for (const [index, highlight] of item.highlights.entries()) {
      const highlightId = `${item.slug}:highlight:${index + 1}`;
      await prisma.educationHighlight.upsert({
        where: { id: highlightId },
        update: {
          educationEntryId: savedEntry.id,
          textPt: highlight[0],
          textEn: highlight[1],
          sortOrder: index + 1,
        },
        create: {
          id: highlightId,
          educationEntryId: savedEntry.id,
          textPt: highlight[0],
          textEn: highlight[1],
          sortOrder: index + 1,
        },
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
