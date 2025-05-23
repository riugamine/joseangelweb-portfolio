import './globals.css'
import { Montserrat, Poppins } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Providers } from './providers'

// Prevenir la inyección automática de CSS de FontAwesome
config.autoAddCss = false

const mont = Montserrat({ variable: "--font-montserrat", subsets: ['latin'], display: "swap" })
const pop = Poppins({variable: "--font-poppins", subsets: ['latin'], display: "swap", weight: "600" })

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
      <body className={`${mont.variable} ${pop.variable}`}>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  )
}