import { User } from 'lucide-react'

export function SignIn() {
  return (
    <a
      href={`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=openid%20profile%20email&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=http://localhost:3000/api/auth/callback`}
      className="flex cursor-pointer items-center gap-3 text-left transition-colors hover:text-gray-50"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <User className="h-5 w-5 text-gray-500" />
      </div>

      <p className="max-w-[140px] text-sm leading-snug text-zinc-300">
        <span className="underline">Crie sua conta </span>e faça seus anúncios!
      </p>
    </a>
  )
}
