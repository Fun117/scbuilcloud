import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ScbuilCloud',
  description: 'A cloud service that handles game data synchronization, storage, and management.',
}
// <link rel="icon" href="/ScbuilCloud_logo.png" type="image/x-icon"/>
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`bg-background ${inter.className}`}>
      {children}
    </html>
  )
}
