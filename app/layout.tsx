import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const links = [
    { href: "/", label: "Home" },
    { href: "/todos", label: "Todos" },
    { href: "/docs", label: "Docs" },

  ]
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul className='flex items-center'>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <div>{children}</div>
      </body>
    </html>
  )
}
