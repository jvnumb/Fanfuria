import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Star, Gift } from "lucide-react"

interface PointsCardProps {
  points: number
  level: number
  nextLevelPoints: number
}

export function PointsCard({ points, level, nextLevelPoints }: PointsCardProps) {
  const progress = (points / nextLevelPoints) * 100

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-yellow-500 text-black pb-2">
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5" /> Meus Pontos FURIA
        </CardTitle>
        <CardDescription className="text-black/70">Acumule pontos interagindo com o conteúdo</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center">
              <Star className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-medium">Nível {level}</div>
              <div className="text-xs text-muted-foreground">Torcedor Dedicado</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{points}</div>
            <div className="text-xs text-muted-foreground">pontos</div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>Progresso para o próximo nível</span>
            <span>
              {points} / {nextLevelPoints}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium flex items-center gap-1">
              <Gift className="h-4 w-4 text-yellow-500" /> Recompensas disponíveis
            </div>
            <div className="text-sm font-medium text-yellow-500">Ver todas</div>
          </div>
          <div className="mt-2 space-y-2">
            <div className="text-xs p-2 bg-muted rounded-md flex justify-between items-center">
              <span>Desconto de 10% na loja</span>
              <span className="font-medium">500 pts</span>
            </div>
            <div className="text-xs p-2 bg-muted rounded-md flex justify-between items-center">
              <span>Papel de parede exclusivo</span>
              <span className="font-medium">200 pts</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
