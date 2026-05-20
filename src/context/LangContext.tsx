import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import zh from '../locales/zh.json';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

export type Lang = 'zh' | 'en' | 'fr';

const locales = { zh, en, fr };

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof zh;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('zh');
  const t = locales[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
};
