'use client'

import { createContext, useContext } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { translations } from '@/lib/translations'

type LanguageContextType = {
  language: 'es' | 'en'
  toggleLanguage: () => void
  t: (key: string) => string | string[]
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { language, toggleLanguage } = useLanguage()

  const t = (key: string): string => {
    const keys = key.split('.')
    // Ensure translations are properly typed using TranslationValue
    let result: TranslationValue = translations

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k] as TranslationValue
      } else {
        return key
      }
    }

    if (typeof result === 'object' && 'es' in result && 'en' in result) {
      return result[language] as string;
    }
    return key;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context
}

// Define a type for nested translation objects
type TranslationValue = {
  [key: string]: string | string[] | TranslationValue | { es: string; en: string }
}