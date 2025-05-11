'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

// Definición de la interfaz para los proyectos
interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  featured?: boolean
}

export default function Projects() {
  // Hook para detectar el tema actual (claro/oscuro)
  const { theme } = useTheme()

  // Animaciones para los proyectos
  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      },
    }),
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  }

  // Animación para las etiquetas
  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 } 
    }
  }

  // Lista de proyectos
  const projects: Project[] = [
    {
      title: "E-commerce Marketplace",
      description: "Plataforma de comercio electrónico con múltiples vendedores, sistema de pagos integrado y gestión de inventario en tiempo real.",
      image: "/images/projects/ecommerce.jpg",
      tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      link: "#",
      featured: true
    },
    {
      title: "Sistema de Tracking",
      description: "Aplicación de seguimiento de envíos con geolocalización en tiempo real para una empresa de logística.",
      image: "/images/projects/tracking.jpg",
      tags: ["React", "Node.js", "Google Maps API", "Socket.io"],
      link: "#"
    },
    {
      title: "Dashboard Analítico",
      description: "Panel de control para visualización de datos de ventas y métricas de rendimiento con gráficos interactivos.",
      image: "/images/projects/dashboard.jpg",
      tags: ["Vue.js", "D3.js", "Firebase", "Vuetify"],
      link: "#"
    },
    {
      title: "App de Delivery",
      description: "Aplicación móvil para servicio de entrega de comida con sistema de pedidos y seguimiento en tiempo real.",
      image: "/images/projects/delivery.jpg",
      tags: ["React Native", "Redux", "Express", "MongoDB"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold md:text-4xl dark:text-white"
          >
            Proyectos Destacados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300"
          >
            Una selección de mis trabajos recientes en desarrollo web y aplicaciones.
          </motion.p>
        </div>

        {/* Grid de proyectos con diseño adaptativo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
              className={`group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-md 
                transition-all dark:border dark:border-gray-700 
                ${project.featured ? 'md:col-span-2' : ''}`}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold dark:text-white">{project.title}</h3>
                <p className="mb-6 flex-1 text-gray-600 dark:text-gray-300">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      variants={tagVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 
                        dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <Link 
                  href={project.link} 
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 
                    text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none 
                    focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 
                    dark:focus:ring-blue-800 transition-colors"
                >
                  Ver proyecto
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/projects" 
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 
              bg-white px-5 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 
              focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 
              dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Ver todos los proyectos
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}