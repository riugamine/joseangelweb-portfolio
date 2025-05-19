'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { socialLinks } from '../lib/data'

export default function Contact() {
  // Hook para detectar el tema actual (claro/oscuro)
  const { theme } = useTheme()
  
  // Estado para el formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  // Estado para mensajes de éxito/error
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  })
  
  // Manejar cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'Por favor completa todos los campos requeridos.'
      })
      return
    }
    
    // Simular envío (aquí implementarías la lógica real de envío)
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: ''
    })
    
    try {
      // Aquí iría la lógica real de envío (API, serverless function, etc.)
      // Por ahora solo simulamos un delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Éxito
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: '¡Mensaje enviado con éxito! Te responderé lo antes posible.'
      })
      
      // Resetear formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      // Error
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'Ocurrió un error al enviar el mensaje. Por favor intenta nuevamente.'
      })
    }
  }
  
  // Datos de contacto
  const contactInfo = [
    {
      icon: faEnvelope,
      title: 'Email',
      value: 'contacto@joseangelweb.pro',
      link: 'mailto:contacto@joseangelweb.pro'
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
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Encabezado */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold md:text-4xl dark:text-white"
          >
            Contacto
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300"
          >
            ¿Tienes un proyecto en mente? Contáctame y conversemos sobre cómo puedo ayudarte.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Información de contacto */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            <motion.div variants={itemVariants}>
              <h3 className="mb-6 text-2xl font-bold dark:text-white">Información de Contacto</h3>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                Estoy disponible para proyectos freelance, colaboraciones y oportunidades de trabajo. 
                No dudes en contactarme a través de cualquiera de estos medios.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300">
                      <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium dark:text-white">{item.title}</h4>
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
            
            <motion.div variants={itemVariants}>
              <h3 className="mb-6 text-2xl font-bold dark:text-white">Sígueme</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-600 dark:hover:text-white"
                    aria-label={social.name}
                  >
                    <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Formulario de contacto */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800 dark:border dark:border-gray-700"
          >
            <h3 className="mb-6 text-2xl font-bold dark:text-white">Envíame un Mensaje</h3>
            
            {formStatus.isSubmitted ? (
              <div className="rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                <p>{formStatus.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formStatus.isError && (
                  <div className="rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-300">
                    <p>{formStatus.message}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
                    placeholder="Asunto del mensaje"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="w-full rounded-lg bg-blue-600 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-70 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  {formStatus.isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            )}
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}