'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Services from '@/app/components/Services'
import Projects from '@/app/components/Projects'
import Contact from '@/app/components/Contact'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const sections = ['hero', 'about', 'services', 'projects', 'contact']
  
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
      
      {/* Indicador de scroll unificado */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-2">
        {sections.map((_, i) => (
          <motion.div
            key={i}
            className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"
            animate={{
              scale: scrollYProgress.get() > i / sections.length ? 1.5 : 1,
              backgroundColor: scrollYProgress.get() > i / sections.length ? "#3B82F6" : ""
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