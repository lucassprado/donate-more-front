import { Input } from '@/components/Input'
import { Select } from '@/components/Select'
import { Camera } from 'lucide-react'

export default function NewAd() {
  return (
    <div>
      <h1 className="pb-12 text-3xl font-bold text-zinc-100">Novo anúncio</h1>

      <form className="flex gap-8">
        <div className="flex flex-1 flex-col gap-6">
          <Input
            label="Título*"
            name="title"
            placeholder="Cadeira de madeira..."
          />

          <Select
            label="Categoria*"
            name="category"
            options={[
              { name: 'Móveis', id: 1 },
              { name: 'Artigos infantis', id: 2 },
            ]}
          />

          <div className="flex flex-col gap-2">
            <label className="text-white" htmlFor="description">
              Descrição*
            </label>
            <textarea
              className="h-28 resize-none rounded border-0 bg-gray-800 px-4 py-3 text-white placeholder:text-zinc-400 focus:ring-0"
              name="description"
              id="description"
              placeholder="Cadeira feita de madeira de carvalho..."
              spellCheck={false}
            />
          </div>

          <Input label="Telefone*" name="phone" placeholder="(00) 00000-0000" />

          <div className="flex w-40 flex-col gap-2">
            <span className="text-white">Foto</span>

            <label
              htmlFor="file"
              className="flex cursor-pointer flex-col items-center justify-center gap-1 border-2 border-dashed border-gray-800 p-6 text-zinc-400"
            >
              <Camera />
              Adicionar foto
            </label>
            <input
              type="file"
              name="file"
              id="file"
              className="invisible h-0 w-0"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <Input label="CEP*" name="cep" placeholder="12 345-789" />

          <div className="flex flex-col gap-6">
            <Input
              label="Rua*"
              name="cep"
              placeholder="Rua das bananeiras..."
            />
            <div className="flex gap-4">
              <div className="w-32">
                <Input label="Número*" name="cep" placeholder="00" />
              </div>
              <div className="flex-1">
                <Input label="Bairro*" name="cep" placeholder="Bananeira..." />
              </div>
            </div>
            <Input
              label="Cidade*"
              name="cep"
              placeholder="Pé de bananeira..."
            />
          </div>

          <button className="mt-36 self-end rounded border-0 bg-green-500 px-4 py-3 text-sm font-bold text-white hover:bg-green-400">
            Salvar anúncio
          </button>
        </div>
      </form>
    </div>
  )
}
