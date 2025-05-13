import './globals.css'
import { Navbar } from '@/app/components/Navbar'
import { Footer } from '@/app/components/Footer'
import { Montserrat } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Providers } from './providers'

// Prevenir la inyección automática de CSS de FontAwesome
config.autoAddCss = false

const mont = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Jose Angel Web | Desarrollador Freelance',
  description: 'Portafolio de Jose Angel, desarrollador web freelance especializado en componentes e-commerce, integración de pagos y geolocalización.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={mont.className}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}