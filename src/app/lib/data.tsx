import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'  
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