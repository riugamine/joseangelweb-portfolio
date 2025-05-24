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
    let result: any = translations

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k]
      } else {
        return key
      }
    }

    return typeof result === 'object' ? result[language] : key
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