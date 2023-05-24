import Image from 'next/image'
import { Armchair, Calendar, MapPin, User2 } from 'lucide-react'

export function Ad() {
  return (
    <div className="my-14 flex items-center justify-between">
      <div>
        {/* Title */}
        <h3 className="text-3xl font-bold text-zinc-100">
          Guarda-roupa preto 4 portas
        </h3>

        {/* Description */}
        <p className="mt-2 max-w-[500px] text-lg text-zinc-300">
          Guarda-roupa tamanho 5 x 3m preto, 4 portas com 2 áreas para cabides
          com 4 gavetas, sapateira...
        </p>

        {/* Informations */}
        <div className="mt-6 flex gap-10">
          <div className="flex gap-2">
            <Calendar className="h-5 w-5 text-zinc-400" />
            <span className="text-zinc-400">15 Mar 2023</span>
          </div>
          <div className="flex gap-2">
            <User2 className="h-5 w-5 text-zinc-400" />
            <span className="text-zinc-400">Lucas Prado</span>
          </div>
          <div className="flex gap-2">
            <Armchair className="h-5 w-5 text-zinc-400" />
            <span className="text-zinc-400">Móveis</span>
          </div>
          <div className="flex gap-2">
            <MapPin className="h-5 w-5 text-zinc-400" />
            <span className="text-zinc-400">Belo Horizonte</span>
          </div>
        </div>
      </div>

      <Image
        src="https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193_1280.jpg"
        width={242}
        height={128}
        alt=""
        className="rounded"
      />
    </div>
  )
}
