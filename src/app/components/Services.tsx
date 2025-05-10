'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCreditCard, faLocationDot, faCode } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'next-themes'

export default function Services() {
  // Hook para detectar el tema actual (claro/oscuro)
  const { theme } = useTheme()

  // Animación combinada para los elementos del grid
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  }

  const services = [
    {
      icon: faShoppingCart,
      title: 'Componentes E-commerce',
      description: 'Desarrollo de carritos de compra, catálogos y sistemas de gestión de inventario personalizados.',
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300',
      size: 'col-span-1 md:col-span-2', // Tamaño más grande para este elemento
    },
    {
      icon: faCreditCard,
      title: 'Integración de Pagos',
      description: 'Implementación segura de pasarelas de pago como PayPal, Stripe y soluciones locales.',
      color: 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-300',
      size: 'col-span-1',
    },
    {
      icon: faLocationDot,
      title: 'Geolocalización',
      description: 'Sistemas de tracking y seguimiento en tiempo real para envíos y servicios de entrega.',
      color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-300',
      size: 'col-span-1',
    },
    {
      icon: faCode,
      title: 'Lógica de Negocios',
      description: 'Desarrollo de soluciones personalizadas adaptadas a las necesidades específicas de tu empresa.',
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-300',
      size: 'col-span-1 md:col-span-2', // Tamaño más grande para este elemento
    },
  ]

  return (
    <section id="services" className="py-20 dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold md:text-4xl dark:text-white"
          >
            Mis Servicios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300"
          >
            Soluciones web personalizadas con enfoque en funcionalidad, diseño minimalista y experiencia de usuario.
          </motion.p>
        </div>

        {/* Grid de servicios estilo Bento con tamaños variables */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className={`group flex flex-col rounded-3xl ${service.size} 
                bg-white dark:bg-gray-800 p-8 shadow-sm transition-all 
                dark:shadow-gray-800/30 dark:border dark:border-gray-700`}
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${service.color}`}>
                <FontAwesomeIcon icon={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}