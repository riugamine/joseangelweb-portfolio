'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Componente para el rastro del cursor
const CursorTrail = ({ position }: { position: { x: number; y: number } }) => {
  return (
    <motion.div
      className="pointer-events-none absolute h-32 w-32 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(0, 123, 255, 0.3) 0%, transparent 70%)',
        filter: 'blur(8px)',
        x: position.x - 64,
        y: position.y - 64,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )
}

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
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* Efecto de cursor principal */}
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

      {/* Rastros del cursor */}
      {trailPositions.map((pos, index) => (
        <CursorTrail 
          key={index} 
          position={pos} 
        />
      ))}

      {/* Contenido principal con efecto parallax */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-4 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl pt-20"
          style={{
            perspective: '1000px'
          }}
        >
          <motion.h1 
            className="relative mb-2 text-center text-4xl font-bold md:text-5xl lg:text-6xl"
            style={{
              rotateX: useTransform(y, [-1, 1], [5, -5]),
              rotateY: useTransform(x, [-1, 1], [-5, 5]),
              transformStyle: 'preserve-3d',
              textShadow: '0 0 20px rgba(0, 123, 255, 0.5)'
            }}
          >
            Jose Angel Velasquez
            {/* Efecto de separación 3D */}
            <div 
              className="absolute left-0 top-0 -z-10 h-full w-full"
              style={{
                transform: 'translateZ(-20px)',
                color: 'rgba(0, 123, 255, 0.2)',
                filter: 'blur(4px)'
              }}
            >
              Jose Angel Velasquez
            </div>
          </motion.h1>
          
          <motion.h2 
            className="mb-6 text-center text-xl font-light md:text-2xl"
            style={{
              rotateX: useTransform(y, [-1, 1], [3, -3]),
              rotateY: useTransform(x, [-1, 1], [-3, 3]),
              transformStyle: 'preserve-3d'
            }}
          >
            Desarrollador Web Freelance
          </motion.h2>
          
          <motion.p 
            className="mb-8 text-center text-lg opacity-80"
            style={{
              rotateX: useTransform(y, [-1, 1], [2, -2]),
              rotateY: useTransform(x, [-1, 1], [-2, 2]),
              transformStyle: 'preserve-3d'
            }}
          >
            Especializado en componentes e-commerce, integración de pagos y geolocalización para empresas medianas y pequeñas.
          </motion.p>
          
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-white px-8 py-3 font-medium text-black transition-colors hover:bg-gray-200"
            >
              Conoce mis servicios
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}