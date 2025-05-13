'use client'

import { useEffect, useRef, useState } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'

// Componente interactivo del cliente cargado dinámicamente
const InteractiveContent = dynamic(() => import('./InteractiveContent'), {
  ssr: false
})
const SplineScene = dynamic(() => import('./SplineScene'), {
  ssr: false
})
export default function Hero() {
  // Referencias y estados para el seguimiento del mouse
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
      {/* Renderizamos el componente SplineScene */}
      <SplineScene />

      {/* Contenido principal con mejor disposición responsive */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
          {/* Contenedor de texto con posicionamiento mejorado */}
          <InteractiveContent />
        </div>
      </div>
    </section>
  )
}