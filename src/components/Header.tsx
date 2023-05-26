import { cookies } from 'next/headers'
import Image from 'next/image'

import { SignIn } from './SignIn'

import donateMoreLogo from '../assets/donate-more-logo.svg'
import { Profile } from './Profile'
import { ActiveLink } from './ActiveLink'

export function Header() {
  const isAuthenticated = cookies().has('token')

  return (
    <div className="border-b border-gray-800 py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div className="flex items-center">
          <Image
            src={donateMoreLogo}
            alt="Donate more logo"
            width={120}
            height={42}
          />

          <div className="flex items-center justify-between gap-6 px-20">
            <ActiveLink title="Anúncios" url="/" />
            <ActiveLink title="Meus anúncios" url="/ads/published" />
          </div>
        </div>

        {isAuthenticated ? <Profile /> : <SignIn />}
      </div>
    </div>
  )
}
