'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function InteractiveContent() {
    const sectionRef = useRef<HTMLDivElement>(null)
  
  // Valores para el efecto parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Configuración del spring para movimiento suave
  const springConfig = { damping: 15, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Efecto para seguimiento del mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        mouseX.set((e.clientX - rect.left - centerX) / centerX)
        mouseY.set((e.clientY - rect.top - centerY) / centerY)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl space-y-6 text-center md:text-left md:w-1/2"
    >
      <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium backdrop-blur-sm">
        SOLUCIONES DIGITALES
      </span>
      
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        style={{
          rotateX: useTransform(y, [-1, 1], [5, -5]),
          rotateY: useTransform(x, [-1, 1], [-5, 5]),
          transformStyle: 'preserve-3d'
        }}
      >
        Hacemos Tu
        <br />
        Negocio
        <br />
        <span className="text-blue-400">Diferente</span>
      </motion.h1>
      
      <p className="text-gray-400 text-lg max-w-md mx-auto md:mx-0">
        Transformando ideas en experiencias digitales únicas y memorables
      </p>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors backdrop-blur-sm"
      >
        <span>Hablemos</span>
        <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
      </motion.a>
    </motion.div>
  )
}