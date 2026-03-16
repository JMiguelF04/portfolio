import type { Language, LocalizedText } from "@/lib/site-types";

export function localizeText(language: Language, pt: string, en: string) {
  return language === "pt" ? pt : en;
}

export function getContentText(
  content: Record<string, LocalizedText>,
  key: string,
  language: Language,
) {
  const entry = content[key];
  if (!entry) {
    return key;
  }

  return localizeText(language, entry.pt, entry.en);
}
