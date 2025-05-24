'use client'

import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { ThemeToggle } from './ThemeToggle'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetDescription } from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import { useTranslation } from '@/contexts/LanguageContext'
import { socialLinks } from '../lib/data'
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { language, toggleLanguage, t } = useTranslation()
  
  // Detect scroll to change navbar style
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
            {t('navbar.about')}
          </ScrollLink>
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
          >
            {t('navbar.services')}
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
          >
            {t('navbar.projects')}
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
          >
            {t('navbar.contact')}
          </ScrollLink>
          
          {/* Language Toggle for Desktop */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon 
              icon={faLanguage} 
              className="h-5 w-5 text-gray-500 dark:text-gray-400" 
            />
            <Switch
              checked={language === 'en'}
              onCheckedChange={toggleLanguage}
              aria-label="Toggle language"
            />
            <span className="text-sm font-medium">
              {language.toUpperCase()}
            </span>
          </div>
          
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                {t('navbar.menuDescription')}
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 flex flex-col space-y-4 p-4">
              <Link href="/#about" className="text-lg">
                {t('navbar.about')}
              </Link>
              <Link href="/#services" className="text-lg">
                {t('navbar.services')}
              </Link>
              <Link href="/#projects" className="text-lg">
                {t('navbar.projects')}
              </Link>
              <Link href="/#contact" className="text-lg">
                {t('navbar.contact')}
              </Link>
              
              {/* Language Toggle for Mobile */}
              <div className="flex items-center space-x-2 pt-4">
                <FontAwesomeIcon 
                  icon={faLanguage} 
                  className="h-5 w-5 text-gray-500 dark:text-gray-400" 
                />
                <Switch
                  checked={language === 'en'}
                  onCheckedChange={toggleLanguage}
                  aria-label="Toggle language"
                />
                <span className="text-sm font-medium">
                  {language.toUpperCase()}
                </span>
              </div>
              
              <div className="pt-4">
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}