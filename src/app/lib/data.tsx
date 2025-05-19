import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faRocket, faCode, faLightbulb } from '@fortawesome/free-solid-svg-icons'
export interface SocialLink {
  name: string
  icon: any
  href: string
  color: string
}
  // Enlaces de redes sociales
export const socialLinks = [
    {
      name: 'WhatsApp',
      icon: faWhatsapp,
      href: 'https://wa.me/584126893533',
      color: 'text-green-500'
    },
    {
      name: 'GitHub',
      icon: faGithub,
      href: 'https://github.com/riugamine',
      color: 'text-gray-800 dark:text-white'
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      href: 'https://www.linkedin.com/in/jose-velasquez-b2a65b1a1/',
      color: 'text-blue-600'
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      href: 'https://instagram.com/joseangelweb_',
      color: 'text-pink-600'
    }
]
export interface Project {
  title: string
  description: string
  image: string
  video?: string // Optional video URL
  tags: string[]
  link: string
  featured?: boolean
  isLive: boolean // Live status indicator
  detailedDescription?: string // For project details page
  technologies?: string[] // Detailed tech stack
  challenges?: string[] // Project challenges
  solutions?: string[] // Implemented solutions
  slug: string
}
export const projects: Project[] = [
  {
    title: "Portfolio Fotográfico Administrativo",
    description: "Plataforma de portafolio con panel administrativo para gestión de contenido y galería dinámica.",
    detailedDescription: "Sistema completo de gestión de portafolio fotográfico con panel administrativo integrado. Permite la organización y presentación de contenido multimedia de forma eficiente y elegante.",
    image: "https://res.cloudinary.com/da95ksabl/image/upload/v1747611782/3ffeb4c9-1a3a-46e0-a1d1-c6f9e94ac394.png",
    tags: ["Next.js", "Server-Side Rendering", "Cloudinary", "Design System"],
    technologies: ["TypeScript", "Tailwind CSS", "supabase", "Cloudinary API"],
    challenges: [
      "Optimización de carga de imágenes en alta resolución",
      "Sistema de autenticación seguro",
      "Interfaz de administración intuitiva"
    ],
    solutions: [
      "Implementación de lazy loading y optimización de assets",
      "Autenticación con NextAuth.js y JWT",
      "Dashboard personalizado con drag-and-drop"
    ],
    link: "https://andreagsfoto.com",
    featured: true,
    isLive: true,
    slug:'andreagsfoto',
  },
  {
    title: "Landing Page Empresarial",
    description: "Página web corporativa para empresa de seguridad con animaciones fluidas y diseño moderno.",
    detailedDescription: "Sitio web corporativo que destaca los servicios y experiencia de TecnoCarlos en el sector de seguridad, con animaciones suaves y diseño responsivo.",
    image: "https://res.cloudinary.com/da95ksabl/image/upload/v1747610389/tecnocarlosve.com_wbk7ix.jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS, Resend"],
    technologies: ["React", "Framer Motion", "Tailwind CSS", "EmailJS"],
    challenges: [
      "Optimización de rendimiento",
      "Animaciones fluidas en dispositivos móviles",
      "Integración de envio de correos con resend API"
    ],
    solutions: [
      "Implementación de lazy loading",
      "Animaciones optimizadas con Framer Motion"
    ],
    link: "https://tecnocarlove.com",
    isLive: true,
    slug:'tecnocarlosve',
  },
  {
    title: "Agencia de Viajes Landing Page",
    description: "Plataforma turística que muestra servicios, experiencias y testimonios de viajeros.",
    detailedDescription: "Sitio web para ExpiTour Margarita que presenta sus servicios turísticos, experiencias de viajeros y facilita la reserva de tours.",
    image: "https://res.cloudinary.com/da95ksabl/image/upload/v1747611682/80cb5c8d-9585-4a80-8f46-3a2b4e27c662.png",
    video: "https://res.cloudinary.com/da95ksabl/video/upload/v1747611644/Exipitour_1_tbcwcb.mp4",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React Hook Form"],
    challenges: [
      "Galería de imágenes optimizada",
      "Sistema de reservas simple"
    ],
    solutions: [
      "Implementación de Image Optimization de Next.js",
      "Formulario de contacto con validación"
    ],
    link: "https://expitourmargarita.com",
    isLive: true,
    slug:'expitourmargarita'
  },
  {
    title: "Entrenadora profesional Vivifit",
    description: "Portafolio profesional para entrenadora personal con calculadora de calorías integrada y diseño minimalista.",
    detailedDescription: "Sitio web profesional que destaca los servicios de entrenamiento personal, incluyendo una calculadora de calorías interactiva, testimonios de clientes y programas de entrenamiento personalizados.",
    image: "https://res.cloudinary.com/da95ksabl/image/upload/v1747611927/d9a61f85-60f3-42ef-856a-caaba086b741.png",
    tags: ["Astro", "TypeScript", "Tailwind CSS", "Framer Motion"],
    technologies: ["Astro", "VanillaJS", "TypeScript", "Tailwind CSS", "Framer Motion", "Cloudinary"],
    challenges: [
      "Implementación de calculadora de calorías precisa",
      "Optimización de rendimiento y SEO",
      "Diseño responsivo y accesible"
    ],
    solutions: [
      "Desarrollo de algoritmo personalizado para cálculos nutricionales",
      "Utilización de Astro para mejor rendimiento y SEO",
      "Sistema de diseño consistente y adaptable"
    ],
    link: "https://byvivifit.com",
    featured: true,
    isLive: false,
    slug:'byvivifit'
  },
  {
    title: "E-commerce Autoadministrable",
    description: "Tienda en línea completa con panel administrativo para gestión de productos y pedidos.",
    detailedDescription: "Plataforma e-commerce completa con gestión de productos, categorías, usuarios y análisis de ventas. Panel administrativo intuitivo para control total del negocio.",
    image: "https://res.cloudinary.com/da95ksabl/image/upload/v1747612714/8e57844f-580c-4ac9-9b81-3043c2d0474d.png",
    video: "https://res.cloudinary.com/da95ksabl/video/upload/v1747613352/astro-hero_dsl7gw.mp4",
    tags: ["Next.js", "Supabase","React Hooks Forms","SSR", "PostgreSQL", "GoogleMapsAPI", "Shadcn", "Zustand"],
    technologies: ["Next.js", "TypeScript", "Supabase", "Zustand", "Tailwind CSS"],
    challenges: [
      "Sistema de categorías multinivel",
      "Procesamiento de pagos seguro",
      "Dashboard de análisis",
      "Sistema de Filtros",
    ],
    solutions: [
      "Arquitectura de datos jerárquica",
      "Integración con PayPal",
      "Gráficos interactivos con Recharts",
      "Hooks Personalizados"
    ],
    link: "https://astrovenezuela.com",
    featured: true,
    isLive: false,
    slug:'astrovenezuela'
  }
]

// Animated notifications for call-to-action
export interface Notification {
  id: string
  icon: any
  title: string
  description: string
  time: string
}

export const notifications: Notification[] = [
  {
    id: '1',
    icon: faLightbulb,
    title: '¿Tienes una idea brillante?',
    description: 'Hagámosla realidad juntos',
    time: '2m ago'
  },
  {
    id: '2',
    icon: faCode,
    title: 'Desarrollo web profesional',
    description: 'Soluciones a medida para tu negocio',
    time: '5m ago'
  },
  {
    id: '3',
    icon: faRocket,
    title: 'Impulsa tu presencia digital',
    description: 'Contacta con JoseAngelWeb',
    time: '10m ago'
  }
]