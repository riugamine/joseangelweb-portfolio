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
      className="max-w-xl space-y-6 text-center md:text-left md:w-1/2 px-4 md:px-0 mt-8 md:mt-0"
    >
      <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium backdrop-blur-sm">
        SOLUCIONES DIGITALES
      </span>
      
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
      >
        Hagamos Tu
        <br className="hidden sm:block" />
        Negocio
        <br className="hidden sm:block" />
        <span className="text-blue-400">Diferente</span>
      </motion.h1>
      
      <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto md:mx-0 px-2 sm:px-0">
        Transformando ideas en experiencias digitales únicas y memorables
      </p>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-colors backdrop-blur-sm text-sm sm:text-base"
      >
        <span>Hablemos</span>
        <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </motion.a>
    </motion.div>
  )
}