export interface InformationItemProps {
  text: string
  icon: string
}

export function InformationItem({ text, icon }: InformationItemProps) {
  return (
    <div className="flex gap-2">
      {/* <Calendar className="h-5 w-5 text-zinc-400" /> */}
      <span className="text-zinc-400">15 Mar 2023</span>
    </div>
  )
}
