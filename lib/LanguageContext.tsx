"use client";

import { createContext, useContext, ReactNode, useSyncExternalStore } from "react";
import type { Language } from "@/lib/site-types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = "language";

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "pt";
  }

  const savedLang = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return savedLang === "pt" || savedLang === "en" ? savedLang : "pt";
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === LANGUAGE_STORAGE_KEY) {
      onStoreChange();
    }
  };

  window.addEventListener("storage", handleStorage);
  return () => {
    window.removeEventListener("storage", handleStorage);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, getStoredLanguage, () => "pt");

  const handleSetLanguage = (lang: Language) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    window.dispatchEvent(new StorageEvent("storage", { key: LANGUAGE_STORAGE_KEY }));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
