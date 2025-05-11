'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCreditCard, faLocationDot, faCode } from '@fortawesome/free-solid-svg-icons'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Services() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100])

  const services = [
    {
      icon: faShoppingCart,
      title: 'Soluciones E-commerce',
      description: 'Transformo tu negocio con componentes personalizados que mejoran la experiencia de compra.',
      features: ['Carritos inteligentes', 'Catálogos dinámicos', 'Gestión de inventario'],
      size: 'col-span-1 md:col-span-2',
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300'
    },
    {
      icon: faCreditCard,
      title: 'Integración de Pagos',
      description: 'Implementación segura y eficiente de sistemas de pago que generan confianza.',
      features: ['PayPal', 'Stripe', 'Soluciones locales'],
      color: 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-300'
    },
    {
      icon: faLocationDot,
      title: 'Geolocalización',
      description: 'Sistemas de tracking en tiempo real que optimizan la logística de tu negocio.',
      features: ['Seguimiento en vivo', 'Mapas interactivos', 'Alertas automáticas'],
      color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-300'
    },
    {
      icon: faCode,
      title: 'Soluciones Personalizadas',
      description: 'Desarrollo adaptado a las necesidades específicas de tu empresa.',
      features: ['Arquitectura escalable', 'Código mantenible', 'Optimización continua'],
      size: 'col-span-1 md:col-span-2',
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-300'
    }
  ]

  return (
    <section id="services" className="relative py-24 dark:bg-gray-900 transition-colors duration-300">
      <motion.div style={{ y }} className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight dark:text-white"
          >
            Soluciones que Transforman
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300"
          >
            Desarrollo web enfocado en resolver problemas reales con elegancia y eficiencia
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${service.size} overflow-hidden transition-all hover:scale-[1.02]`}
            >
              <CardHeader>
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.color}`}>
                  <FontAwesomeIcon icon={service.icon} className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold dark:text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <Badge key={i} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </motion.div>
    </section>
  )
}