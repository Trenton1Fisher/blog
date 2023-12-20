import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Navbar from '@/components/shared/nav'
import Footer from '@/components/shared/footer'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Travel Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} overflowx-hidden bg-light`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
