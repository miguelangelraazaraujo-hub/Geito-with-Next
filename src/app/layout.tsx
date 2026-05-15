import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const GA_ID = 'G-VQ2ZTFPYJC'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://geito.pro'),
  title: {
    default: 'Geito — Transformación digital B2B para pymes | Automatización de procesos',
    template: '%s | Geito',
  },
  description:
    'Implantamos procesos, digitalización, automatización e IA en empresas B2B de 10-150 personas. Método secuencial en 90 días. ROI garantizado o devolvemos la diferencia.',
  keywords: [
    'transformación digital pyme',
    'automatización procesos empresa',
    'digitalización empresas B2B',
    'consultoría transformación digital España',
    'implantación herramientas digitales',
    'reducir tareas repetitivas empresa',
    'digitalizar empresa',
    'automatizar procesos pyme',
  ],
  authors: [{ name: 'Geito', url: 'https://geito.pro' }],
  creator: 'Geito',
  publisher: 'Geito',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://geito.pro',
    siteName: 'Geito',
    title: 'Geito — Transformación digital B2B | Automatización de procesos',
    description:
      'Implantamos procesos, digitalización, automatización e IA en empresas B2B de 10-150 personas. Método secuencial en 90 días. ROI garantizado.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Geito — Transformación digital B2B',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geito — Transformación digital B2B',
    description:
      'Implantamos procesos, digitalización, automatización e IA en empresas B2B de 10-150 personas. 90 días o seguimos sin coste.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://geito.pro/#organization',
      name: 'Geito',
      url: 'https://geito.pro',
      logo: 'https://geito.pro/og-image.png',
      description:
        'Consultora de transformación digital B2B. Ordenamos, digitalizamos y automatizamos procesos de empresas de 10-150 personas en 90 días.',
      email: 'hola@geito.es',
      areaServed: 'ES',
      sameAs: ['https://linkedin.com/company/geito'],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hola@geito.es',
        contactType: 'customer service',
        availableLanguage: 'Spanish',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://geito.pro/#website',
      url: 'https://geito.pro',
      name: 'Geito',
      publisher: { '@id': 'https://geito.pro/#organization' },
      inLanguage: 'es-ES',
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://geito.pro/#service',
      name: 'Geito',
      url: 'https://geito.pro',
      description:
        'Transformación digital B2B en 90 días. Método secuencial: Procesos → Digitalización → Automatización → IA.',
      priceRange: '€€€',
      areaServed: 'ES',
      serviceType: [
        'Transformación digital',
        'Automatización de procesos',
        'Digitalización empresarial',
        'Consultoría de inteligencia artificial',
      ],
      provider: { '@id': 'https://geito.pro/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://geito.pro/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Para quién es Geito?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Geito es para empresas B2B con equipos de entre 5 y 150 personas que tienen procesos repetibles hechos a mano, en Excel o de cabeza, y quieren crecer sin aumentar la plantilla proporcionalmente. Especialmente indicado para empresas que ya han invertido en herramientas digitales que no terminaron de funcionar.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo tarda la transformación digital con Geito?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El proceso completo dura entre 6 y 12 semanas, con seguimiento incluido durante 90 días. Si el sistema no está operativo en ese plazo, seguimos trabajando sin coste adicional hasta completarlo.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué garantías ofrece Geito?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Geito ofrece triple garantía: si no encontramos al menos 5 procesos con retorno demostrable, no hay propuesta ni coste. Si no entregamos en 90 días, seguimos trabajando sin coste adicional. Si el tiempo recuperado por el equipo no equivale al coste del proyecto, devolvemos la diferencia en 48 horas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta la transformación digital con Geito?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Geito ofrece tres paquetes según el tamaño del equipo: Geito Core desde 8.900€ para equipos de 5-20 personas, Geito Growth desde 14.900€ para equipos de 20-60 personas, y Geito Scale desde 23.900€ para equipos de 60-150 personas. El diagnóstico inicial de 60 minutos es completamente gratuito y sin compromiso.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué incluye el diagnóstico gratuito de Geito?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El diagnóstico operativo dura 60 minutos e incluye análisis de la operativa actual, identificación de los 3-5 procesos con mayor potencial de ROI y un rango de inversión orientativo. Si no encontramos oportunidades reales de mejora, lo decimos directamente sin propuesta, sin seguimiento y sin coste.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Por qué es importante el orden en la transformación digital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La mayoría de agencias venden IA primero porque suena bien, pero la IA sin datos limpios genera resultados poco fiables. La automatización sin procesos ordenados amplifica el caos. El método de Geito sigue siempre el orden correcto: Procesos → Digitalización → Automatización → IA, garantizando que cada etapa construye sobre una base sólida.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${syne.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
