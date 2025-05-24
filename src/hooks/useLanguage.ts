import { useEffect, useState } from 'react'

type Language = 'es' | 'en'

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    // Get initial language from localStorage or browser
    const savedLanguage = localStorage.getItem('language') as Language
    const browserLanguage = navigator.language.split('-')[0] as Language
    setLanguage(savedLanguage || browserLanguage || 'es')
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  return { language, toggleLanguage }
}