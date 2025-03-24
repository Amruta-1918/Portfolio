import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amruta Arun Patil - Portfolio',
  description: 'Professional portfolio of Amruta Arun Patil, Executive Assistant with expertise in customer care and technical skills.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: 'favicon.png',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 
