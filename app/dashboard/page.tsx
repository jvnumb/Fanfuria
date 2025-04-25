"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DashboardNav } from "@/components/dashboard-nav"
import { FanInsightsChart } from "@/components/fan-insights-chart"
import { SocialActivityFeed } from "@/components/social-activity-feed"
import { UpcomingMatches } from "@/components/upcoming-matches"
import { Bell, Calendar, MessageSquare, Settings, Users } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="flex">
        {/* Sidebar */}
        <DashboardNav />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Bem-vindo de volta, Alex!</h1>
              <p className="text-gray-400">Veja o que está acontecendo com a FURIA hoje</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="rounded-full border-gray-700">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-700">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback className="bg-yellow-500 text-black">AL</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Nível de Fã</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Nível 3: Apoiador</span>
                  <span className="text-sm text-gray-400">1250 / 2000 XP</span>
                </div>
                <Progress value={62.5} className="h-2 bg-gray-800" indicatorClassName="bg-yellow-500" />
                <div className="mt-4 flex items-center gap-2">
                  <Badge className="bg-yellow-500 text-black">Fã de CS2</Badge>
                  <Badge className="bg-gray-700">1 Ano</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Comunidade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-yellow-400" />
                    <div>
                      <div className="text-sm font-medium">12.543</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">12.543</div>
                      <div className="text-xs text-gray-400">Fãs Ativos</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-yellow-400" />
                    <div>
                      <div className="text-sm font-medium">342</div>
                      <div className="text-xs text-gray-400">Novas Postagens</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-yellow-400 hover:text-yellow-300 hover:bg-gray-800"
                >
                  Ver Comunidade
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Próxima Partida</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-black">
                      F
                    </div>
                    <span>FURIA</span>
                  </div>
                  <div className="text-sm text-gray-400">VS</div>
                  <div className="flex items-center gap-2">
                    <span>Team Liquid</span>
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                      TL
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>Amanhã, 18:00 BRT</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-yellow-400 hover:text-yellow-300 hover:bg-gray-800"
                >
                  Definir Lembrete
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Tabs defaultValue="insights" className="mb-6">
            <TabsList className="bg-gray-900 border-gray-800">
              <TabsTrigger value="insights">Insights de Fãs</TabsTrigger>
              <TabsTrigger value="social">Atividade Social</TabsTrigger>
              <TabsTrigger value="matches">Próximas Partidas</TabsTrigger>
            </TabsList>
            <TabsContent value="insights" className="mt-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Insights de Fãs</CardTitle>
                  <CardDescription className="text-gray-400">
                    Entendendo a demografia e preferências da base de fãs da FURIA
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <FanInsightsChart />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="social" className="mt-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Atividade nas Redes Sociais</CardTitle>
                  <CardDescription className="text-gray-400">
                    Interações recentes nas plataformas conectadas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <SocialActivityFeed />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="matches" className="mt-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Próximas Partidas</CardTitle>
                  <CardDescription className="text-gray-400">Agenda para todos os times da FURIA</CardDescription>
                </CardHeader>
                <CardContent>
                  <UpcomingMatches />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Conteúdo Personalizado</CardTitle>
                <CardDescription className="text-gray-400">Baseado nas suas preferências e atividade</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-24 h-16 bg-gray-800 rounded-md flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium">Time de CS2 da FURIA se prepara para o Major</h4>
                      <p className="text-sm text-gray-400">Um olhar nos bastidores da preparação do time</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 h-16 bg-gray-800 rounded-md flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium">Entrevista com arT: Liderança nos Esports</h4>
                      <p className="text-sm text-gray-400">
                        O capitão da FURIA compartilha insights sobre a dinâmica do time
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 h-16 bg-gray-800 rounded-md flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium">Nova Coleção de Produtos FURIA</h4>
                      <p className="text-sm text-gray-400">Itens de edição limitada já disponíveis</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-yellow-400 hover:text-yellow-300 hover:bg-gray-800">
                  Ver Todo Conteúdo
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Recompensas para Fãs</CardTitle>
                <CardDescription className="text-gray-400">
                  Ganhe pontos e resgate recompensas exclusivas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold">1.250</div>
                    <div className="text-sm text-gray-400">Pontos Atuais</div>
                  </div>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Resgatar Recompensas</Button>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded-md">
                    <div>
                      <div className="font-medium">10% de Desconto em Produtos</div>
                      <div className="text-sm text-gray-400">500 pontos</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-yellow-500 text-yellow-400 hover:bg-yellow-950/30"
                    >
                      Resgatar
                    </Button>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded-md">
                    <div>
                      <div className="font-medium">Pacote de Wallpapers Digitais</div>
                      <div className="text-sm text-gray-400">200 pontos</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-yellow-500 text-yellow-400 hover:bg-yellow-950/30"
                    >
                      Resgatar
                    </Button>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded-md">
                    <div>
                      <div className="font-medium">Acesso Exclusivo a Q&A com Jogadores</div>
                      <div className="text-sm text-gray-400">1.000 pontos</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-yellow-500 text-yellow-400 hover:bg-yellow-950/30"
                    >
                      Resgatar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
