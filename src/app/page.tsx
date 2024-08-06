import { Header } from "@/components/header"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <Header />
      <div className="space-y-6 p-5">
        <div>
          <h2 className="text-xl font-bold">Olá Eduardo!</h2>
          <p>Segunda-feira,5 de agosto</p>
        </div>
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
        <div className="space-y-3">
          <h2 className="text-xs font-bold uppercase">Agendamentos</h2>
          <Card>
            <CardContent className="flex justify-between p-0">
              <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge className="w-fit">Confirmado</Badge>
                <h3 className="font-bold">Corte de cabelo</h3>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/eduextreme.png" />
                  </Avatar>
                  <p>Barbearia FSW</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center border-l-2 px-5">
                <p className="text-sm">Agosto</p>
                <p className="text-2xl">05</p>
                <p className="text-sm">20:00</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
