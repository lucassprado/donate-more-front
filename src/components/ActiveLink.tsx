'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface ActiveLinkProps {
  title: string
  url: string
}

export function ActiveLink({ title, url }: ActiveLinkProps) {
  const pathName = usePathname()

  return (
    <Link
      href={url}
      className={
        pathName === '/my-ads' ? `font-bold text-cyan-500` : `text-zinc-100`
      }
    >
      {title}
    </Link>
  )
}
