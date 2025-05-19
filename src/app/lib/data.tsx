
import { 
  faGithub, faLinkedin, faReact,
   faInstagram, faWhatsapp, faTiktok
} from '@fortawesome/free-brands-svg-icons'
import {
  faCode, faLightbulb, faRocket, faServer, faDatabase,
  faLock, faChartLine, faMobile, faSpinner,
  faCog, faUsers, faImage, faEnvelope,
  faCalendar,  faPalette, faCheckCircle,
  faCloud, faCalculator, faStore,faLayerGroup,faCreditCard,faChartBar,
  faFilter, faSearch, 
} from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
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
      icon: faTiktok,
      name: 'TikTok',
      href: 'https://tiktok.com/joseangelweb_'
    },
    {
      icon: faInstagram,
      name: 'Instagram',
      href: 'https://instagram.com/joseangelvt_'
    },
]
export interface Project {
  title: string
  description: string
  detailedDescription?: string
  image: string
  video?: string
  tags?: string[]
  technologies: {
    name: string
    icon: IconDefinition
    color: string
  }[]
  projectInfo: {
    duration: string
    role: string
    team?: string[]
    client: string
    industry: string
    startDate: string
    completionDate?: string
  }
  features: {
    icon: IconDefinition
    title: string
    description: string
  }[]
  challenges: {
    icon: IconDefinition
    title: string
    description: string
  }[]
  solutions: {
    icon: IconDefinition
    title: string
    description: string
  }[]
  metrics?: {
    performance: number
    accessibility: number
    seo: number
    bestPractices: number
  }
  links: {
    live: string
    github?: string
    demo?: string
  }
  featured?: boolean
  isLive: boolean
  slug: string
}
export const projects: Project[] = [
  {
    title: "Portfolio Fotográfico Administrativo",
    description: "Plataforma de portafolio con panel administrativo para gestión de contenido y galería dinámica.",
    image: "https://res.cloudinary.com/da95ksabl/image/upload/v1747611782/3ffeb4c9-1a3a-46e0-a1d1-c6f9e94ac394.png",
    technologies: [
      { name: "Next.js", icon: faReact, color: "text-blue-400" },
      { name: "TypeScript", icon: faCode, color: "text-blue-500" },
      { name: "Supabase", icon: faDatabase, color: "text-green-500" },
      { name: "Cloudinary", icon: faImage, color: "text-purple-500" }
    ],
    projectInfo: {
      duration: "3 meses",
      role: "Full Stack Developer",
      team: ["José Angel", "UI Designer"],
      client: "Andrea's Photography",
      industry: "Fotografía",
      startDate: "2024-01",
      completionDate: "2024-03"
    },
    features: [
      {
        icon: faImage,
        title: "Galería Dinámica",
        description: "Sistema de gestión de imágenes con optimización automática"
      },
      {
        icon: faLock,
        title: "Autenticación Segura",
        description: "Sistema robusto de autenticación y autorización"
      },
      {
        icon: faCog,
        title: "Panel Administrativo",
        description: "Interfaz intuitiva para gestión de contenido"
      }
    ],
    metrics: {
      performance: 95,
      accessibility: 98,
      seo: 100,
      bestPractices: 95
    },
    challenges: [
      {
        icon: faImage,
        title: "Optimización de Imágenes",
        description: "Manejo eficiente de imágenes en alta resolución"
      },
      {
        icon: faLock,
        title: "Seguridad",
        description: "Implementación de sistema de autenticación seguro"
      },
      {
        icon: faCog,
        title: "UX/UI",
        description: "Diseño de interfaz intuitiva para administración"
      }
    ],
    solutions: [
      {
        icon: faServer,
        title: "Cloudinary Integration",
        description: "Optimización automática y CDN para imágenes"
      },
      {
        icon: faLock,
        title: "NextAuth.js",
        description: "Autenticación segura con JWT"
      },
      {
        icon: faPalette,
        title: "Diseño Modular",
        description: "Componentes reutilizables y sistema de diseño consistente"
      }
    ],
    links: {
      live: "https://andreagsfoto.com",
      github: "https://github.com/yourusername/andreagsfoto"
    },
    featured: true,
    isLive: true,
    slug: 'andreagsfoto'
  },
  {
    title: "Landing Page Empresarial",
    description: "Página web corporativa para empresa de seguridad con animaciones fluidas y diseño moderno.",
    detailedDescription: "Sitio web corporativo que destaca los servicios y experiencia de TecnoCarlos en el sector de seguridad, con animaciones suaves y diseño responsivo.",
    image: "https://res.cloudinary.com/da95ksabl/image/upload/v1747610389/tecnocarlosve.com_wbk7ix.jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Resend"],
    technologies: [
      { name: "Next.js", icon: faReact, color: "text-blue-500" },
      { name: "Framer Motion", icon: faCode, color: "text-purple-500" },
      { name: "Tailwind CSS", icon: faPalette, color: "text-cyan-500" },
      { name: "Resend", icon: faEnvelope, color: "text-green-500" }
    ],
    projectInfo: {
      duration: "2 meses",
      role: "Full Stack Developer",
      client: "TecnoCarlos",
      industry: "Seguridad",
      startDate: "2024-01",
      completionDate: "2024-02"
    },
    features: [
      {
        icon: faRocket,
        title: "Animaciones Fluidas",
        description: "Transiciones suaves y efectos visuales optimizados"
      },
      {
        icon: faMobile,
        title: "Diseño Responsivo",
        description: "Adaptación perfecta a todos los dispositivos"
      },
      {
        icon: faEnvelope,
        title: "Sistema de Contacto",
        description: "Integración con Resend para emails automáticos"
      }
    ],
    challenges: [
      {
        icon: faSpinner,
        title: "Optimización de rendimiento",
        description: "Mejora de velocidad de carga y rendimiento"
      },
      {
        icon: faMobile,
        title: "Animaciones móviles",
        description: "Optimización de animaciones en dispositivos móviles"
      },
      {
        icon: faEnvelope,
        title: "Integración de emails",
        description: "Implementación de sistema de correos con Resend"
      }
    ],
    solutions: [
      {
        icon: faCode,
        title: "Lazy Loading",
        description: "Carga diferida de componentes y recursos"
      },
      {
        icon: faRocket,
        title: "Framer Motion",
        description: "Animaciones optimizadas para todos los dispositivos"
      },
      {
        icon: faEnvelope,
        title: "Email System",
        description: "Sistema robusto de envío de correos"
      }
    ],
    metrics: {
      performance: 95,
      accessibility: 98,
      seo: 100,
      bestPractices: 95
    },
    links: {
      live: "https://tecnocarlove.com",
      github: "https://github.com/username/tecnocarlos"
    },
    isLive: true,
    slug: 'tecnocarlosve'
  },
  {
    title: "Agencia de Viajes Landing Page",
    description: "Plataforma turística que muestra servicios, experiencias y testimonios de viajeros.",
    detailedDescription: "Sitio web para ExpiTour Margarita que presenta sus servicios turísticos, experiencias de viajeros y facilita la reserva de tours.",
    image: "https://res.cloudinary.com/da95ksabl/image/upload/v1747611682/80cb5c8d-9585-4a80-8f46-3a2b4e27c662.png",
    video: "https://res.cloudinary.com/da95ksabl/video/upload/v1747611644/Exipitour_1_tbcwcb.mp4",
    technologies: [
      { name: "Next.js", icon: faReact, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: faPalette, color: "text-cyan-500" },
      { name: "Framer Motion", icon: faCode, color: "text-purple-500" },
      { name: "React Hook Form", icon: faCheckCircle, color: "text-green-500" }
    ],
    projectInfo: {
      duration: "3 meses",
      role: "Frontend Developer",
      client: "ExpiTour Margarita",
      industry: "Turismo",
      startDate: "2023-10",
      completionDate: "2024-01"
    },
    features: [
      {
        icon: faImage,
        title: "Galería Optimizada",
        description: "Sistema de galería con carga optimizada"
      },
      {
        icon: faCalendar,
        title: "Reservas Online",
        description: "Sistema simple de reservas de tours"
      },
      {
        icon: faUsers,
        title: "Testimonios",
        description: "Sección dinámica de testimonios de viajeros"
      }
    ],
    challenges: [
      {
        icon: faImage,
        title: "Optimización de Imágenes",
        description: "Manejo eficiente de galería de imágenes"
      },
      {
        icon: faCalendar,
        title: "Sistema de Reservas",
        description: "Implementación de reservas simplificada"
      }
    ],
    solutions: [
      {
        icon: faCode,
        title: "Next.js Image",
        description: "Optimización automática de imágenes"
      },
      {
        icon: faCheckCircle,
        title: "Form Validation",
        description: "Validación robusta de formularios"
      }
    ],
    metrics: {
      performance: 92,
      accessibility: 96,
      seo: 98,
      bestPractices: 94
    },
    links: {
      live: "https://expitourmargarita.com",
      github: "https://github.com/username/expitour"
    },
    isLive: true,
    slug: 'expitourmargarita'
  },
  {
    title: "Entrenadora profesional Vivifit",
    description: "Portafolio profesional para entrenadora personal con calculadora de calorías integrada y diseño minimalista.",
    detailedDescription: "Sitio web profesional que destaca los servicios de entrenamiento personal, incluyendo una calculadora de calorías interactiva, testimonios de clientes y programas de entrenamiento personalizados.",
    image: "https://res.cloudinary.com/da95ksabl/image/upload/v1747611927/d9a61f85-60f3-42ef-856a-caaba086b741.png",
    technologies: [
      { name: "Astro", icon: faRocket, color: "text-orange-500" },
      { name: "TypeScript", icon: faCode, color: "text-blue-600" },
      { name: "Tailwind CSS", icon: faPalette, color: "text-cyan-500" },
      { name: "Cloudinary", icon: faCloud, color: "text-blue-400" }
    ],
    projectInfo: {
      duration: "2.5 meses",
      role: "Frontend Developer",
      client: "ViviFit",
      industry: "Fitness & Salud",
      startDate: "2023-11",
      completionDate: "2024-02"
    },
    features: [
      {
        icon: faCalculator,
        title: "Calculadora de Calorías",
        description: "Herramienta precisa de cálculo nutricional"
      },
      {
        icon: faUsers,
        title: "Testimonios",
        description: "Historias de éxito de clientes"
      },
      {
        icon: faChartLine,
        title: "Seguimiento",
        description: "Sistema de seguimiento de progreso"
      }
    ],
    challenges: [
      {
        icon: faCalculator,
        title: "Precisión de Cálculos",
        description: "Implementación de fórmulas nutricionales precisas"
      },
      {
        icon: faRocket,
        title: "Rendimiento",
        description: "Optimización de rendimiento y SEO"
      },
      {
        icon: faMobile,
        title: "Responsividad",
        description: "Diseño adaptable a todos los dispositivos"
      }
    ],
    solutions: [
      {
        icon: faCode,
        title: "Algoritmo Nutricional",
        description: "Desarrollo de cálculos personalizados"
      },
      {
        icon: faRocket,
        title: "Astro Framework",
        description: "Mejora de rendimiento con Astro"
      },
      {
        icon: faPalette,
        title: "Sistema de Diseño",
        description: "Implementación de diseño consistente"
      }
    ],
    metrics: {
      performance: 98,
      accessibility: 97,
      seo: 100,
      bestPractices: 96
    },
    links: {
      live: "https://byvivifit.com",
      github: "https://github.com/username/vivifit"
    },
    featured: true,
    isLive: false,
    slug: 'byvivifit'
  },
  {
    title: "E-commerce Autoadministrable",
    description: "Tienda en línea completa con panel administrativo para gestión de productos y pedidos.",
    detailedDescription: "Plataforma e-commerce completa con gestión de productos, categorías, usuarios y análisis de ventas. Panel administrativo intuitivo para control total del negocio.",
    image: "https://res.cloudinary.com/da95ksabl/image/upload/v1747612714/8e57844f-580c-4ac9-9b81-3043c2d0474d.png",
    video: "https://res.cloudinary.com/da95ksabl/video/upload/v1747613352/astro-hero_dsl7gw.mp4",
    technologies: [
      { name: "Next.js", icon: faReact, color: "text-blue-500" },
      { name: "TypeScript", icon: faCode, color: "text-blue-600" },
      { name: "Supabase", icon: faDatabase, color: "text-green-500" },
      { name: "Zustand", icon: faStore, color: "text-purple-500" },
      { name: "Tailwind CSS", icon: faPalette, color: "text-cyan-500" }
    ],
    projectInfo: {
      duration: "4 meses",
      role: "Full Stack Developer",
      client: "Astro Venezuela",
      industry: "E-commerce",
      startDate: "2023-09",
      completionDate: "2024-01"
    },
    features: [
      {
        icon: faLayerGroup,
        title: "Categorías Multinivel",
        description: "Sistema jerárquico de categorías"
      },
      {
        icon: faCreditCard,
        title: "Pagos Seguros",
        description: "Integración con PayPal y otros métodos"
      },
      {
        icon: faChartBar,
        title: "Analytics Dashboard",
        description: "Panel de análisis de ventas y métricas"
      },
      {
        icon: faFilter,
        title: "Filtros Avanzados",
        description: "Sistema de búsqueda y filtrado"
      }
    ],
    challenges: [
      {
        icon: faLayerGroup,
        title: "Categorías Complejas",
        description: "Gestión de categorías multinivel"
      },
      {
        icon: faLock,
        title: "Seguridad en Pagos",
        description: "Implementación de pagos seguros"
      },
      {
        icon: faChartLine,
        title: "Análisis de Datos",
        description: "Sistema de reportes y análisis"
      },
      {
        icon: faSearch,
        title: "Sistema de Filtros",
        description: "Búsqueda y filtrado avanzado"
      }
    ],
    solutions: [
      {
        icon: faDatabase,
        title: "Arquitectura de Datos",
        description: "Estructura jerárquica eficiente"
      },
      {
        icon: faCreditCard,
        title: "PayPal Integration",
        description: "Sistema seguro de pagos"
      },
      {
        icon: faChartBar,
        title: "Recharts",
        description: "Visualización interactiva de datos"
      },
      {
        icon: faCode,
        title: "Custom Hooks",
        description: "Lógica reutilizable y modular"
      }
    ],
    metrics: {
      performance: 90,
      accessibility: 95,
      seo: 98,
      bestPractices: 92
    },
    links: {
      live: "https://astrovenezuela.com",
      github: "https://github.com/username/astrovenezuela"
    },
    featured: true,
    isLive: false,
    slug: 'astrovenezuela'
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
  },
]