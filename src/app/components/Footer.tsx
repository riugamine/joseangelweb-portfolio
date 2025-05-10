'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useTheme } from 'next-themes'

export function Footer() {
  // Hook para detectar el tema actual (claro/oscuro)
  const { theme } = useTheme()
  
  // Año actual para el copyright
  const currentYear = new Date().getFullYear()
  
  // Enlaces de navegación
  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Contacto', href: '#contact' }
  ]
  
  // Redes sociales
  const socialLinks = [
    {
      icon: faGithub,
      name: 'GitHub',
      url: 'https://github.com/joseangelweb'
    },
    {
      icon: faLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/joseangelweb'
    },
    {
      icon: faTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/joseangelweb'
    }
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">JoseAngelWeb</span>
            </Link>
            <p className="mt-4 max-w-md text-gray-600 dark:text-gray-300">
              Desarrollador web freelance especializado en soluciones e-commerce, 
              integración de pagos y sistemas de geolocalización.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-600 dark:hover:text-white"
                  aria-label={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Contacto</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 dark:text-gray-300">
                Margarita, Venezuela
              </li>
              <li>
                <a 
                  href="mailto:contacto@joseangelweb.pro" 
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-300"
                >
                  contacto@joseangelweb.pro
                </a>
              </li>
              <li>
                <a 
                  href="tel:+584241234567" 
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-300"
                >
                  +58 424 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {currentYear} JoseAngelWeb. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}