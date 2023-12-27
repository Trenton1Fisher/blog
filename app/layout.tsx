import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Navbar from '@/components/shared/nav'
import Footer from '@/components/shared/footer'
import { NextAuthProvider } from '@/context/authContext'
import getCurrentUser from './actions/getCurrentUser'
import './globals.css'
import { EdgeStoreProvider } from '@/lib/edgestore'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Travel Blog',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()
  return (
    <html lang="en">
      <body className={`${roboto.className} overflowx-hidden bg-light`}>
        <NextAuthProvider>
          <EdgeStoreProvider>
            <Navbar user={user} />
            {children}
            <Footer />
          </EdgeStoreProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
