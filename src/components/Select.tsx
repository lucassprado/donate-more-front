import { SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: {
    name: string
    id: number
  }[]
}

export function Select({ label, options, name, ...rest }: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white" htmlFor={name}>
        {label}
      </label>
      <select
        className="rounded border-0 bg-gray-800 px-4 py-3 text-white placeholder:text-zinc-400 focus:ring-0"
        name={name}
        id={name}
        {...rest}
      >
        <option value="">Selecione uma categoria</option>
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
