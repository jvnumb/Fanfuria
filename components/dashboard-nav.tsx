import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FuriaLogo } from "@/components/furia-logo"
import { BarChart3, Calendar, Home, LogOut, MessageSquare, Settings, ShoppingBag, Trophy, Users } from "lucide-react"

interface DashboardNavProps {
  isAdmin?: boolean
}

export function DashboardNav({ isAdmin = false }: DashboardNavProps) {
  return (
    <div className="w-64 min-h-screen bg-gray-900 border-r border-gray-800 p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <FuriaLogo className="w-8 h-8" />
        <span className="font-bold text-xl">FURIA</span>
        {isAdmin && <span className="text-xs bg-yellow-500 text-black px-2 py-0.5 rounded-md">ADMIN</span>}
      </div>

      <nav className="space-y-1 flex-1">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/dashboard">
            <Home className="mr-2 h-5 w-5" />
            Painel
          </Link>
        </Button>

        {isAdmin ? (
          <>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/admin/analytics">
                <BarChart3 className="mr-2 h-5 w-5" />
                Análises
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/admin/users">
                <Users className="mr-2 h-5 w-5" />
                Gerenciamento de Usuários
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/admin/content">
                <MessageSquare className="mr-2 h-5 w-5" />
                Gerenciamento de Conteúdo
              </Link>
            </Button>
          </>
        ) : (
          <>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/dashboard/profile">
                <Users className="mr-2 h-5 w-5" />
                Meu Perfil
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/dashboard/community">
                <MessageSquare className="mr-2 h-5 w-5" />
                Comunidade
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/dashboard/matches">
                <Calendar className="mr-2 h-5 w-5" />
                Partidas
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/dashboard/rewards">
                <Trophy className="mr-2 h-5 w-5" />
                Recompensas
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/dashboard/shop">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Loja
              </Link>
            </Button>
          </>
        )}

        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/dashboard/settings">
            <Settings className="mr-2 h-5 w-5" />
            Configurações
          </Link>
        </Button>
      </nav>

      <Button variant="ghost" className="w-full justify-start mt-auto text-gray-400 hover:text-white" asChild>
        <Link href="/">
          <LogOut className="mr-2 h-5 w-5" />
          Sair
        </Link>
      </Button>
    </div>
  )
}
