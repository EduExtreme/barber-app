import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá Eduardo!</h2>
        <p>Segunda-feira,5 de agosto</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[9.375rem] w-full">
          <Image
            src="/banner-01.png"
            alt="agende nos melhores com fsw barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </main>
  )
}
