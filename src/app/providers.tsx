'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

// Interfaz para las props del componente
interface ProvidersProps {
  children: ReactNode
}

/**
 * Componente Providers que envuelve la aplicación con los providers necesarios
 * @param {ReactNode} children - Componentes hijos que serán envueltos por los providers
 * @returns {JSX.Element} Componente Provider con ThemeProvider configurado
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}