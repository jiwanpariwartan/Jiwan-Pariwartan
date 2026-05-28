"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "ne";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null;
    if (stored === "en" || stored === "ne") setLanguage(stored);
  }, []);

  function toggleLanguage() {
    setLanguage((prev) => {
      const next = prev === "en" ? "ne" : "en";
      localStorage.setItem("language", next);
      return next;
    });
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
