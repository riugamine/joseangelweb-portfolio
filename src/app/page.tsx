'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Services from '@/app/components/Services'
import Projects from '@/app/components/Projects'
import Contact from '@/app/components/Contact'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const sections = ['hero', 'about', 'services', 'projects', 'contact']
  const [activeSection, setActiveSection] = useState(0)

  // Función para detectar la sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section)
      )

      const sectionPositions = sectionElements.map(element => {
        if (!element) return 0
        const rect = element.getBoundingClientRect()
        return rect.top + window.scrollY - (window.innerHeight / 3)
      })

      const currentPosition = window.scrollY
      let newActiveSection = 0

      sectionPositions.forEach((position, index) => {
        if (currentPosition >= position) {
          newActiveSection = index
        }
      })

      setActiveSection(newActiveSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])
  
  return (
    <motion.div
      style={{
        opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0.8]),
      }}
    >
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      
      {/* Indicador de scroll mejorado */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-2">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              i === activeSection 
                ? 'bg-blue-500' 
                : 'bg-gray-300 dark:bg-gray-700'
            }`}
            animate={{
              scale: i === activeSection ? 1.5 : 1
            }}
            whileHover={{ scale: 1.8 }}
            onClick={() => {
              const element = document.getElementById(sections[i])
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}