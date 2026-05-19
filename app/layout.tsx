import type { Metadata } from 'next'
import { Syne, JetBrains_Mono, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Devansh Sachdeva — CSE Student & Builder',
  description: 'B.Tech CSE student building real solutions — from anti-counterfeit drug systems to AI-assisted learning platforms.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${jetbrainsMono.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}