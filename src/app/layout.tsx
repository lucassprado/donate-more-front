import { ReactNode } from 'react'
import { Roboto_Flex as Roboto } from 'next/font/google'

import { Header } from '@/components/Header'

import './globals.css'

export const metadata = {
  title: 'Doe +',
}

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} bg-gray-900 font-sans`}>
        <Header />
        <main className="mx-auto my-14 max-w-4xl">{children}</main>
      </body>
    </html>
  )
}
