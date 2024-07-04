"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Language = "en" | "id"; // You can add more languages as needed

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

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

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
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
