import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Portfolio | Programmer • Gamer • Pendaki',
  description: 'Website portofolio pribadi seorang programmer, gamer, dan pendaki gunung. Mahasiswa Teknologi Informasi yang passionate dalam dunia coding, gaming kompetitif, dan petualangan alam.',
  keywords: ['portfolio', 'programmer', 'web developer', 'gamer', 'pendaki gunung', 'teknologi informasi', 'react', 'nextjs'],
  authors: [{ name: 'Developer' }],
  openGraph: {
    title: 'Portfolio | Programmer • Gamer • Pendaki',
    description: 'Website portofolio pribadi seorang programmer, gamer, dan pendaki gunung.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Programmer • Gamer • Pendaki',
    description: 'Website portofolio pribadi seorang programmer, gamer, dan pendaki gunung.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a1a' },
    { media: '(prefers-color-scheme: light)', color: '#0a0a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
