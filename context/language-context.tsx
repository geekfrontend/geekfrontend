"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";

type Language = "en" | "id";
type TranslationKeys = keyof typeof en; // Mengambil key dari file en.json sebagai tipe

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKeys) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const translations: Record<Language, Record<TranslationKeys, string>> = {
  en,
  id,
};

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "id" : "en";
    setLanguage(newLanguage);
    window.localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(
      "language"
    ) as Language | null;
    if (localLanguage) {
      setLanguage(localLanguage);
    }
  }, []);

  const t = (key: TranslationKeys) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }

  return context;
}
