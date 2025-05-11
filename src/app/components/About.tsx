'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLaptopCode, faGraduationCap, faBrain } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  // Hook para detectar el tema actual (claro/oscuro)
  const { theme } = useTheme()

  // Animaciones para los elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  // Datos de habilidades
  const skills = [
    { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase'] },
    { name: 'Herramientas', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'] },
    { name: 'Otros', items: ['SEO', 'Responsive Design', 'Performance Optimization', 'CI/CD', 'Testing'] }
  ]

  // Datos de filosofía
  const philosophies = [
    {
      icon: faCode,
      title: 'Código Limpio',
      description: 'Desarrollo con enfoque en legibilidad, mantenibilidad y escalabilidad.'
    },
    {
      icon: faLaptopCode,
      title: 'Aprendizaje Continuo',
      description: 'Constantemente explorando nuevas tecnologías y mejores prácticas.'
    },
    {
      icon: faGraduationCap,
      title: 'Estoicismo',
      description: 'Enfoque en lo que puedo controlar y aceptación de lo que no.'
    },
    {
      icon: faBrain,
      title: 'Disciplina',
      description: 'Consistencia y dedicación en cada proyecto que emprendo.'
    }
  ]

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Encabezado */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold md:text-4xl dark:text-white"
          >
            Sobre Mí
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300"
          >
            Desarrollador web freelance especializado en soluciones e-commerce y experiencias digitales.
          </motion.p>
        </div>

        {/* Perfil y Bio */}
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/profile.jpg"
              alt="José Ángel Velásquez"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold dark:text-white"
            >
              José Ángel Velásquez
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300"
            >
              Soy un desarrollador web freelance. Me especializo en crear componentes e-commerce, integración de pagos, sistemas de tracking con geolocalización y lógica de negocios.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300"
            >
              Mi enfoque se centra en la funcionalidad, el diseño minimalista y una experiencia de usuario limpia, inspirada en el sistema de diseño de Apple. Creo firmemente que el mejor código es aquel que resuelve problemas reales de manera elegante y eficiente.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                Desarrollo Web
              </span>
              <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                E-commerce
              </span>
              <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                Geolocalización
              </span>
              <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                Integración de Pagos
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Habilidades */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="mb-8 text-center text-2xl font-bold dark:text-white">Habilidades Técnicas</h3>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-gray-50 p-6 dark:bg-gray-800/50"
              >
                <h4 className="mb-4 font-bold dark:text-white">{skillGroup.name}</h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="mr-2 text-blue-500">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filosofía */}
        <div>
          <h3 className="mb-8 text-center text-2xl font-bold dark:text-white">Mi Filosofía</h3>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {philosophies.map((philosophy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300">
                  <FontAwesomeIcon icon={philosophy.icon} className="h-6 w-6" />
                </div>
                <h4 className="mb-2 font-bold dark:text-white">{philosophy.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{philosophy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}