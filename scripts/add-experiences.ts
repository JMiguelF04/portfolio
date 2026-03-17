import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Robert Mauser
  await prisma.experience.upsert({
    where: { slug: "robert-mauser-intern" },
    update: {},
    create: {
      slug: "robert-mauser-intern",
      rolePt: "Estagiario",
      roleEn: "Intern",
      company: "Robert Mauser",
      periodPt: "Fev 2026 - Mar 2026",
      periodEn: "Feb 2026 - Mar 2026",
      technologies: ["Java", "Artificial Intelligence (AI)", "Machine Learning", "NLP"],
      current: false,
      sortOrder: 2,
      bullets: {
        create: [
          { textPt: "Desenvolvi ferramentas de IA com o objetivo de automatizar funcionalidades chave utilizando bibliotecas de modelos de linguagem.", textEn: "Developed AI tools aimed at automating key features using language model libraries.", sortOrder: 1 },
          { textPt: "Aprofundei competencias em machine learning e processamento de linguagem natural, contribuindo para projetos inovadores.", textEn: "Enhanced skills in machine learning and natural language processing while contributing to innovative projects.", sortOrder: 2 },
        ],
      },
    },
  });
  console.log("✓ Robert Mauser added");

  // Europalco
  await prisma.experience.upsert({
    where: { slug: "europalco-intern" },
    update: {},
    create: {
      slug: "europalco-intern",
      rolePt: "Estagiario",
      roleEn: "Intern",
      company: "Europalco",
      periodPt: "Mar 2026 - Presente",
      periodEn: "Mar 2026 - Present",
      technologies: ["RFID", "Monday.com", "Artificial Intelligence (AI)", "Automation"],
      current: true,
      sortOrder: 3,
      bullets: {
        create: [
          { textPt: "Colaborei num projeto de RFID com o objetivo de otimizar os processos de gestao de stock.", textEn: "Collaborated on an RFID project aimed at optimizing stock management processes.", sortOrder: 1 },
          { textPt: "Utilizei o Monday.com para otimizar a organizacao do projeto e melhorar a comunicacao da equipa.", textEn: "Utilized Monday.com to streamline project organization and enhance team communication.", sortOrder: 2 },
          { textPt: "Integrei solucoes de IA para automacao no desenvolvimento de websites, melhorando a eficiencia operacional.", textEn: "Integrated AI solutions for automation in website development, improving operational efficiency.", sortOrder: 3 },
        ],
      },
    },
  });
  console.log("✓ Europalco added");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
