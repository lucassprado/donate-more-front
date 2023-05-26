import { Armchair, ChevronLeft, User2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ParamsProps {
  params: {
    id: number
  }
}

export default function Ad({ params }: ParamsProps) {
  return (
    <div className="flex flex-col justify-start gap-4">
      <Link href="/">
        <ChevronLeft
          size={36}
          className="mb-5 text-zinc-100 hover:text-zinc-200"
        />
      </Link>

      <div className="grid grid-cols-[1fr_400px]">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-zinc-100">
            Guarda-roupa preto 4 portas
          </h1>

          <p className="text-xl leading-relaxed text-zinc-300">
            Guarda-roupa tamanho 5 x 3m preto, 4 portas com 2 áreas para cabides
            com 4 gavetas, sapateira com a adição de cabides, reserva de
            emergência com cofre aplicado a qualquer tipo de mercadoria, e um
            grande espaço de maleiro.
          </p>

          <div>
            <h2 className="mb-4 text-xl font-bold text-zinc-100">
              Localização
            </h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              Rua das bananeiras, 280, CEP 32920-000
            </p>
            <p className="text-lg leading-relaxed text-zinc-300">
              Tereza Cristina, São Joaquim de Bicas - MG
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-bold text-zinc-100">Categoria</span>
              <span className="flex gap-2 font-bold text-zinc-400">
                <Armchair /> Móveis
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-lg font-bold text-zinc-100">
                Anunciante
              </span>
              <span className="flex gap-2 font-bold text-zinc-400">
                <User2 /> Lucas Prado
              </span>
            </div>
          </div>
        </div>

        <div>
          <Image
            src="https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193_1280.jpg"
            width={600}
            height={100}
            alt=""
            className="rounded"
          />
        </div>
      </div>
      <Link
        href="https://wa.me/5531998440841"
        className="mt-8 rounded-full bg-cyan-500 px-5 py-4 text-center font-bold uppercase text-zinc-100 hover:bg-cyan-400"
      >
        Quero receber esta doação
      </Link>
    </div>
  )
}
