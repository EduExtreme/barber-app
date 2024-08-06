import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

export function Header() {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-5">
        <Image src="/logo.png" alt="FSW Barber" width={120} height={18} />
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}
