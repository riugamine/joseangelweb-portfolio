'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { socialLinks } from '../lib/data'
import { RetroGrid } from "@/components/magicui/retro-grid";
export default function Contact() {
  // Hook para detectar el tema actual (claro/oscuro)
  
  
  // Datos de contacto
  const contactInfo = [
    {
      icon: faEnvelope,
      title: 'Email',
      value: 'jangel9829@gmail.com',
      link: 'mailto:jangel9829@gmail.com'
    },
    {
      icon: faPhone,
      title: 'Teléfono',
      value: '+58 424 123 4567',
      link: 'tel:+584241234567'
    },
    {
      icon: faLocationDot,
      title: 'Ubicación',
      value: 'Margarita, Venezuela',
      link: 'https://maps.google.com/?q=Margarita,Venezuela'
    }
  ]
  
  
  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="contact" className="relative py-16 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="absolute inset-0 h-full w-full">
        <RetroGrid 
          cellSize={50}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium tracking-tight sm:text-4xl"
          >
            ¿Tienes un proyecto en mente? Contáctame y conversemos sobre cómo puedo ayudarte.
          </motion.h2>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm border border-gray-200/10 hover:border-gray-200/20 transition-all"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold dark:text-white mb-4">Información de Contacto</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Estoy disponible para proyectos freelance, colaboraciones y oportunidades de trabajo. 
                  No dudes en contactarme a través de cualquiera de estos medios.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300">
                      <FontAwesomeIcon icon={item.icon} className="h-6 w-6" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium dark:text-white text-lg">{item.title}</h4>
                      <a 
                        href={item.link} 
                        className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-300 transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-10 pt-8 border-t border-gray-200/10">
              <h3 className="text-2xl font-bold dark:text-white text-center mb-6">Sígueme</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-gray-600 shadow-sm transition-all hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-600 dark:hover:text-white"
                    aria-label={social.name}
                  >
                    <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}