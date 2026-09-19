import type { Metadata, Viewport } from 'next'
import { Manrope, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fian | Full-Stack Developer → Data Analyst',
  description:
    'Aliffian Alham Maesanjaya — Full-Stack Developer turning Data Analyst / Data Scientist. Mahasiswa Teknik Informatika Universitas Dian Nuswantoro. Membangun aplikasi web & mobile full-stack, kini mendalami analisis data (Python, SQL, Power BI).',
  keywords: [
    'portfolio',
    'data analyst',
    'data scientist',
    'full-stack developer',
    'flutter',
    'nextjs',
    'python',
    'sql',
    'power bi',
    'aliffian maesanjaya',
  ],
  authors: [{ name: 'Aliffian Alham Maesanjaya' }],
  openGraph: {
    title: 'Fian | Full-Stack Developer → Data Analyst',
    description:
      'Full-Stack Developer yang sedang bertransisi ke Data Analyst / Data Scientist. Teknik Informatika, Universitas Dian Nuswantoro.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fian | Full-Stack Developer → Data Analyst',
    description:
      'Full-Stack Developer yang sedang bertransisi ke Data Analyst / Data Scientist.',
  },
  icons: {
    icon: [
      {
        url: '/logo-monogram.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background">
      <body
        className={`${manrope.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}