'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function Hero() {
  // Referencias y estados para el seguimiento del mouse
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)
  
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
        
        // Calcular la posición relativa al centro
        mouseX.set((e.clientX - rect.left - centerX) / centerX)
        mouseY.set((e.clientY - rect.top - centerY) / centerY)
        
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
      return () => section.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  // Estado para almacenar el historial de posiciones del cursor
  const [trailPositions, setTrailPositions] = useState<Array<{ x: number; y: number }>>([])
  const maxTrails = 5 // Número máximo de rastros

  // Efecto para seguimiento del mouse actualizado
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const newPosition = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        }
        
        setMousePosition(newPosition)
        
        // Actualizar el historial de posiciones para el rastro
        setTrailPositions(prev => {
          const newTrails = [newPosition, ...prev.slice(0, maxTrails - 1)]
          return newTrails
        })

        // Actualizar valores para el efecto parallax
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
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A] text-white"
    >
      {/* Efecto de cursor y trails */}
      <motion.div
        className="pointer-events-none absolute h-64 w-64 rounded-full"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
          background: [
            'radial-gradient(circle, rgba(0, 123, 255, 0.4) 0%, rgba(0, 123, 255, 0) 70%)',
            'radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, rgba(0, 255, 255, 0) 70%)',
            'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)'
          ]
        }}
        style={{
          filter: 'blur(10px)',
          mixBlendMode: 'screen'
        }}
        transition={{
          background: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          },
          default: {
            duration: 0,
            ease: "linear"
          }
        }}
      />


      {/* Contenido principal */}
      <div className="absolute inset-0 z-10 flex items-center px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto">
          {/* Contenido del lado izquierdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
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
            
            <p className="text-gray-400 text-lg max-w-md">
              Transformando ideas en experiencias digitales únicas y memorables
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors"
            >
              <span>Hablemos</span>
              <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
            </motion.a>
          </motion.div>

          {/* Imagen del lado derecho */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl" />
            <Image
              src="/images/profile.jpg"
              alt="José Ángel Velásquez"
              fill
              className="object-cover"
              priority
            />
            {/* Círculo decorativo */}
            <motion.div
              className="absolute -right-4 top-4 h-24 w-24 rounded-full border-2 border-blue-400/30"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}