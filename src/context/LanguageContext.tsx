/* eslint-disable @typescript-eslint/no-explicit-any */
// src/context/LanguageContext.tsx
import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';

// Импортируем все JSON-файлы из папок i18n
import * as en from '../i18n/en/index.ts';
import * as ru from '../i18n/ru/index.ts';

type Language = 'en' | 'ru';

type TranslationObject = Record<string, any>;

type LanguageContextType = {
  lang: Language;
  t: Record<string, TranslationObject>;
  switchLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('ru');

  const switchLanguage = useCallback(() => {
      setLang(lang === 'ru' ? 'en' : 'ru');
    }, [lang, setLang]);

  const t = useMemo(() => {
    return lang === 'en' ? en : ru;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      t,
      switchLanguage,
    }),
    [lang, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};