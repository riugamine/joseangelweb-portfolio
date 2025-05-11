'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Overlay para texto - Ajustado para mejor centrado */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-4 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl pt-20" // Añadido pt-20 para respetar el margen con el logo
        >
          <h1 className="mb-2 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            Jose Angel Velasquez
          </h1>
          <h2 className="mb-6 text-center text-xl font-light md:text-2xl">
            Desarrollador Web Freelance
          </h2>
          <p className="mb-8 text-center text-lg opacity-80">
            Especializado en componentes e-commerce, integración de pagos y geolocalización para empresas medianas y pequeñas.
          </p>
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