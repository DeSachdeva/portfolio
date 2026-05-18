import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Devansh Sachdeva — CSE Student & Builder',
  description: 'B.Tech CSE student building real solutions — from anti-counterfeit drug systems to AI-assisted learning platforms.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

