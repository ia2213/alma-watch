import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AVICEN | L\'Art du Temps Universel',
  description: 'Haute horlogerie multiculturelle. Une montre réunissant 12 civilisations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link 
          href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-white text-[#111111] font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}