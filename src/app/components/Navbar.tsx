'use client'

import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ThemeToggle } from './ThemeToggle'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet"
import { socialLinks } from '../lib/data'
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  
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
          JoseAngelWeb
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
          >
            Sobre mí
          </ScrollLink>
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
          >
            Servicios
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
          >
            Proyectos
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`rounded-full px-6 py-2 cursor-pointer hover:bg-primary hover:text-white transition-colors  ${
              scrolled 
                ? 'bg-black text-white dark:bg-white dark:text-black' 
                : 'bg-white text-black dark:bg-gray-800 dark:text-white'
            }`}
          >
            Contacto
          </ScrollLink>
          
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
            <SheetContent side="right" className="w-full max-w-xs p-6">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
                <SheetDescription className="text-sm text-gray-500 dark:text-gray-400">
                  Opciones
                </SheetDescription>
              </SheetHeader>
              
              <div className="flex flex-col space-y-12">
                {/* Enlaces de navegación */}
                <div className="flex flex-col space-y-8">
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-lg font-medium hover:text-blue-500 transition-colors cursor-pointer"
                  >
                    Sobre mí
                  </ScrollLink>
                  <ScrollLink
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-lg font-medium hover:text-blue-500 transition-colors cursor-pointer"
                  >
                    Servicios
                  </ScrollLink>
                  <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-lg font-medium hover:text-blue-500 transition-colors cursor-pointer"
                  >
                    Proyectos
                  </ScrollLink>
                </div>

                {/* Separador */}
                <div className="h-px w-full bg-gray-100 dark:bg-gray-800" />

                {/* Redes sociales */}
                <div className="space-y-6">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    CONECTA CONMIGO
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 transition-colors hover:opacity-80 ${social.color}`}
                      >
                        <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
                        <span className="text-sm">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Botón de contacto */}
                <Link
                  href="#contact"
                  className="mt-auto w-full rounded-lg bg-blue-500 py-3 text-center text-white transition-colors hover:bg-blue-600"
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