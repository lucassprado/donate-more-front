import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({ label, name, ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white" htmlFor={name}>
        {label}
      </label>
      <input
        className="rounded border-0 bg-gray-800 px-4 py-3 text-white placeholder:text-zinc-400 focus:ring-0"
        type="text"
        name={name}
        id={name}
        {...rest}
      />
    </div>
  )
}
