'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon 
        icon={faMoon} 
        className="h-4 w-4 text-gray-500 dark:text-gray-400" 
      />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle theme"
      />
      <FontAwesomeIcon 
        icon={faSun} 
        className="h-4 w-4 text-gray-500 dark:text-gray-400" 
      />
    </div>
  )
}