'use client'

import Spline from '@splinetool/react-spline'
import { Application, SPEObject } from '@splinetool/runtime'
import { useEffect, useRef } from 'react'

export default function SplineScene() {
  // Referencias para mantener el objeto Head
  const headRef = useRef<SPEObject | null>(null)

  // Función para manejar cuando la escena está lista
  const onLoad = (splineApp: Application) => {
    
    // Obtener el objeto Head
    const robotHead = splineApp.findObjectByName('Head')
    if (robotHead) {
      headRef.current = robotHead
      
    }

  }

  // Efecto para manejar solo el seguimiento de la cabeza
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (headRef.current) {
        const head = headRef.current
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1
        const mouseY = (event.clientY / window.innerHeight) * 2 - 1

        // Solo aplicamos la rotación de la cabeza
        head.rotation.x = mouseY * 0.5
        head.rotation.y = mouseX * 0.5
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 md:right-0 md:w-full">
      <Spline 
        scene="https://prod.spline.design/NwVchHUp2UQZf5oT/scene.splinecode"
        className="w-full h-full"
        onLoad={onLoad}
      />
    </div>
  )
}

