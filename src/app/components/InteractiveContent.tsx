'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function InteractiveContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative max-w-xl space-y-6 text-center md:text-left md:w-1/2 px-4 md:px-0 mt-8 md:mt-0"
    >
      {/* Overlay background - solo visible en móvil */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-2xl -z-10 md:hidden" />
      
      {/* Content container with padding */}
      <div className="space-y-6 p-6">
        <span className="inline-block px-4 py-2 bg-[rgba(59,130,246,0.2)] text-blue-400 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-500/20">
          SOLUCIONES DIGITALES
        </span>
        
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          <span className="inline-block mb-1">Hagamos Tu</span>
          <br className="hidden sm:block" />
          <span className="inline-block mb-1">Negocio</span>
          <br className="hidden sm:block" />
          <span className="text-blue-400 inline-block">Diferente</span>
        </motion.h1>
        
        <p className="text-gray-300 text-base sm:text-lg max-w-md mx-auto md:mx-0">
          Transformando ideas en experiencias digitales únicas y memorables
        </p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-3 bg-[rgba(59,130,246,1)] hover:bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-colors backdrop-blur-sm text-sm sm:text-base shadow-lg hover:shadow-blue-500/25"
        >
          <span>Hablemos</span>
          <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </motion.a>
      </div>
    </motion.div>
  )
}