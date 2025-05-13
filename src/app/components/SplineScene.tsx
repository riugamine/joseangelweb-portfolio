'use client'

import Spline from '@splinetool/react-spline'
import { Application, SPEObject } from '@splinetool/runtime'
import { useEffect, useRef } from 'react'

export default function SplineScene() {
  // Referencias para mantener el objeto Head y su posición inicial
  const headRef = useRef<SPEObject | null>(null)
  const centerPoint = useRef({ x: 0, y: 0, z: 0 })
  const angle = useRef(0)

  // Función para manejar cuando la escena está lista
  const onLoad = (splineApp: Application) => {
    console.log('Spline scene loaded')
    
    // Obtener el objeto Head y guardarlo en la referencia
    const robotHead = splineApp.findObjectByName('Head')
    if (robotHead) {
      headRef.current = robotHead
      // Guardar la posición inicial como centro de la órbita
      centerPoint.current = {
        x: robotHead.position.x,
        y: robotHead.position.y,
        z: robotHead.position.z
      }
      console.log('Robot head found and stored')
    }
  }

  // Efecto para manejar el movimiento orbital
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (headRef.current) {
        const head = headRef.current
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1
        const mouseY = (event.clientY / window.innerHeight) * 2 - 1

        // Radio de la órbita
        const radius = 0.5
        
        // Calcular la posición orbital
        const orbitX = centerPoint.current.x + Math.cos(mouseX * Math.PI) * radius
        const orbitY = centerPoint.current.y + Math.sin(mouseY * Math.PI) * radius
        
        // Aplicar rotación suave mirando hacia el punto del mouse
        head.rotation.x = mouseY * 0.5
        head.rotation.y = mouseX * 0.5
        
        // Aplicar movimiento orbital
        head.position.x = orbitX
        head.position.y = orbitY
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

