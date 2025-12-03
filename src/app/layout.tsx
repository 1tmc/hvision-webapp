// app/layout.tsx
import './globals.css'
import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'

export const metadata = {
  title: 'H-Vision Properties & Brandivera',
  description: 'Luxury real estate and interior design',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-display">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}