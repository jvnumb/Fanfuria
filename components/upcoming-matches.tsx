import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell } from "lucide-react"

export function UpcomingMatches() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center p-4 bg-gray-800 rounded-md">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-sm font-medium">ABR</div>
            <div className="text-xl font-bold">25</div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium">FURIA vs Team Liquid</span>
              <Badge className="bg-yellow-500 text-black">CS2</Badge>
            </div>
            <div className="text-sm text-gray-400">ESL Pro League Temporada 18</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm text-gray-400">18:00 BRT</div>
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-gray-700">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center p-4 bg-gray-800 rounded-md">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-sm font-medium">ABR</div>
            <div className="text-xl font-bold">27</div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium">FURIA vs Sentinels</span>
              <Badge className="bg-yellow-500 text-black">VALORANT</Badge>
            </div>
            <div className="text-sm text-gray-400">VCT Américas 2024</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm text-gray-400">15:30 BRT</div>
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-gray-700">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center p-4 bg-gray-800 rounded-md">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-sm font-medium">ABR</div>
            <div className="text-xl font-bold">30</div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium">FURIA vs LOUD</span>
              <Badge className="bg-yellow-500 text-black">League of Legends</Badge>
            </div>
            <div className="text-sm text-gray-400">CBLOL 2024 Etapa 2</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm text-gray-400">19:00 BRT</div>
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-gray-700">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
