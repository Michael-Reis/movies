import './globals.css'
import Image from 'next/image'
import { Home } from 'lucide-react'
import { Menu } from './components/Menu'
export const metadata = {
  title: 'Movies',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>

      <body className='dark'>
        <Menu />
        <section className="home">
          {children}
        </section>

      </body>
    </html>
  )
}
