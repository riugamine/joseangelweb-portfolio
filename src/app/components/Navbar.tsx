'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ThemeToggle } from './ThemeToggle'
import { useTheme } from 'next-themes'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()
  
  // Detectar scroll para cambiar estilo de navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 text-black backdrop-blur-md dark:bg-gray-900/90 dark:text-white' 
          : 'bg-transparent text-white'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          joseangelweb
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link
            href="#about"
            className="text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300"
          >
            Sobre mí
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300"
          >
            Servicios
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300"
          >
            Proyectos
          </Link>
          <Link
            href="#contact"
            className={`rounded-full px-6 py-2 ${
              scrolled 
                ? 'bg-black text-white dark:bg-white dark:text-black' 
                : 'bg-white text-black dark:bg-gray-800 dark:text-white'
            }`}
          >
            Contacto
          </Link>
          
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Toggle menu">
                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-4">
                <Link
                  href="#about"
                  className="text-lg font-medium hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Sobre mí
                </Link>
                <Link
                  href="#services"
                  className="text-lg font-medium hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Servicios
                </Link>
                <Link
                  href="#projects"
                  className="text-lg font-medium hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Proyectos
                </Link>
                <Link
                  href="#contact"
                  className="rounded-full bg-black py-2 text-center text-white dark:bg-white dark:text-black"
                >
                  Contacto
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}