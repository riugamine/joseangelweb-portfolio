'use client'

import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  const [loading, setLoading] = useState(true)

  // Función para manejar cuando Spline termina de cargar
  const handleSplineLoad = () => {
    setLoading(false)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Overlay para texto */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-4 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
            Jose Angel Velasquez
          </h1>
          <h2 className="mb-6 text-xl font-light md:text-2xl">
            Desarrollador Web Freelance
          </h2>
          <p className="mb-8 text-lg opacity-80">
            Especializado en componentes e-commerce, integración de pagos y geolocalización para empresas medianas y pequeñas.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-white px-8 py-3 font-medium text-black transition-colors hover:bg-gray-200"
          >
            Conoce mis servicios
          </motion.button>
        </motion.div>
      </div>

      {/* Escena 3D de Spline */}
      <div className="absolute inset-0">
        {loading && (
          <div className="flex h-full w-full items-center justify-center bg-black">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-t-white border-white/30"></div>
          </div>
        )}
        <Spline
          scene="https://my.spline.design/wizardroomcopy-OprLNSqcwOWdUOHY8UauT0gY/"
          onLoad={handleSplineLoad}
          className={`h-full w-full ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}
        />
      </div>
    </section>
  )
}