'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

/**
 * Componente para cambiar entre tema claro y oscuro
 * @returns {JSX.Element} Botón para alternar entre temas
 */
export function ThemeToggle() {
  // Estado para controlar si el componente está montado
  const [mounted, setMounted] = useState(false)
  
  // Hook para manejar el tema
  const { theme, setTheme } = useTheme()
  
  // Efecto para marcar el componente como montado después del renderizado inicial
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Si el componente no está montado, renderizamos un placeholder para evitar hidratación incorrecta
  if (!mounted) {
    return (
      <button 
        className="h-10 w-10 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
        aria-label="Toggle theme"
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }
  
  // Función para alternar entre temas
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} className="h-5 w-5" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}