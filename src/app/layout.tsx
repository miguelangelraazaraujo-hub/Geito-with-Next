import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'

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
  title: 'Geito — Transformación digital B2B',
  description:
    'Ayudamos a empresas a transformar sus procesos en sistemas digitales automatizados con n8n e inteligencia artificial. Paso a paso, sin saltar etapas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${syne.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
