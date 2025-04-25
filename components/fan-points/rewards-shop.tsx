import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Star } from "lucide-react"

export function RewardsShop() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Gift className="h-5 w-5 text-yellow-500" /> Loja de Recompensas
        </CardTitle>
        <CardDescription>Troque seus pontos por recompensas exclusivas</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <Badge className="mb-2 bg-yellow-500 text-black">Destaque</Badge>
                  <h4 className="font-medium">Desconto de 15% na loja</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Cupom válido para qualquer produto da loja oficial
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>750</span>
                </div>
              </div>
              <Button size="sm" className="w-full mt-3 bg-yellow-500 hover:bg-yellow-600 text-black">
                Resgatar
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Wallpapers exclusivos</h4>
                  <p className="text-xs text-muted-foreground mt-1">Pacote com 5 wallpapers em alta resolução</p>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>200</span>
                </div>
              </div>
              <Button size="sm" className="w-full mt-3 bg-yellow-500 hover:bg-yellow-600 text-black">
                Resgatar
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Sorteio de camisa oficial</h4>
                  <p className="text-xs text-muted-foreground mt-1">Participe do sorteio mensal de camisas</p>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>500</span>
                </div>
              </div>
              <Button size="sm" className="w-full mt-3 bg-yellow-500 hover:bg-yellow-600 text-black">
                Participar
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Meet & Greet virtual</h4>
                  <p className="text-xs text-muted-foreground mt-1">Encontro online com jogadores da FURIA</p>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>2000</span>
                </div>
              </div>
              <Button size="sm" className="w-full mt-3 bg-yellow-500 hover:bg-yellow-600 text-black">
                Resgatar
              </Button>
            </CardContent>
          </Card>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" className="w-full">
          Ver todas as recompensas
        </Button>
      </CardFooter>
    </Card>
  )
}
