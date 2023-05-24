'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { api } from '@/lib/api'

export function Header() {
  const pathName = usePathname()

  async function signIn() {
    const response = await api.get('/auth')

    console.log(response.data)
  }

  return (
    <div className="flex w-full items-center border-b border-gray-800 py-6">
      <Image
        src="Logo.svg"
        alt="Donate more logo"
        width={120}
        height={42}
        className="ml-52"
      />

      <div className="flex items-center justify-between gap-6 px-20">
        <Link
          href="/"
          className={
            pathName === '/' ? `font-bold text-cyan-500` : `text-zinc-100`
          }
        >
          Anúncios
        </Link>

        <Link
          href="/my-ads"
          className={
            pathName === '/my-ads' ? `font-bold text-cyan-500` : `text-zinc-100`
          }
        >
          Meus anúncios
        </Link>
      </div>

      <button onClick={signIn}>Sign in</button>
    </div>
  )
}
