import "server-only";

import { cache } from "react";
import { Prisma } from "@prisma/client";

import { defaultSiteData } from "@/lib/default-site-data";
import { prisma } from "@/lib/prisma";
import type { SiteData } from "@/lib/site-types";

function shouldUseFallback(error: unknown) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return error.code === "P2021" || error.code === "P2022";
  }

  return false;
}

export const getSiteData = cache(async (): Promise<SiteData> => {
  try {
    const [
      profile,
      contentEntries,
      navigationItems,
      socialLinks,
      contactDetails,
      spokenLanguages,
      skillCategories,
      dailyTechnologies,
      experiences,
      projects,
      educationEntries,
    ] = await Promise.all([
      prisma.profile.findUniqueOrThrow({ where: { id: "main" } }),
      prisma.contentEntry.findMany(),
      prisma.navigationItem.findMany({ orderBy: { sortOrder: "asc" } }),
      prisma.socialLink.findMany({ orderBy: { sortOrder: "asc" } }),
      prisma.contactDetail.findMany({ orderBy: { sortOrder: "asc" } }),
      prisma.spokenLanguage.findMany({ orderBy: { sortOrder: "asc" } }),
      prisma.skillCategory.findMany({
        orderBy: { sortOrder: "asc" },
        include: {
          skills: {
            orderBy: { sortOrder: "asc" },
          },
        },
      }),
      prisma.dailyTechnology.findMany({ orderBy: { sortOrder: "asc" } }),
      prisma.experience.findMany({
        orderBy: { sortOrder: "asc" },
        include: {
          bullets: {
            orderBy: { sortOrder: "asc" },
          },
        },
      }),
      prisma.project.findMany({ orderBy: { sortOrder: "asc" } }),
      prisma.educationEntry.findMany({
        orderBy: { sortOrder: "asc" },
        include: {
          highlights: {
            orderBy: { sortOrder: "asc" },
          },
        },
      }),
    ]);

    const content = Object.fromEntries(
      contentEntries.map((entry) => [
        entry.key,
        {
          pt: entry.pt,
          en: entry.en,
        },
      ]),
    );

    return {
      profile,
      content,
      navigationItems,
      socialLinks,
      contactDetails,
      spokenLanguages,
      skillCategories,
      dailyTechnologies,
      experiences,
      projects,
      educationEntries,
    };
  } catch (error) {
    if (shouldUseFallback(error)) {
      return defaultSiteData;
    }

    throw error;
  }
});
