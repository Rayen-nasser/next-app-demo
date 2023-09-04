import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          height: '10vh',
          gap: 15,
          textDecoration:'none',
        }}>
          <Link href={"/"}>Home</Link>
          <Link href={"/posts"}>Posts</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
