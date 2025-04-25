"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DashboardNav } from "@/components/dashboard-nav"
import { FanAnalyticsChart } from "@/components/fan-analytics-chart"
import { UserSegmentChart } from "@/components/user-segment-chart"
import { SocialMediaMetrics } from "@/components/social-media-metrics"
import { BarChart3, Download, Filter, Search, Users } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="flex">
        {/* Sidebar */}
        <DashboardNav isAdmin={true} />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Painel de Administração</h1>
              <p className="text-gray-400">Análise de dados e insights de fãs</p>
            </div>
            <div className="flex items-center gap-2">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Download className="h-4 w-4 mr-2" />
                Exportar Dados
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total de Fãs Registrados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold">24,892</div>
                  <Users className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-sm text-green-500 mt-2">+12,5% em relação ao mês passado</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Usuários Ativos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold">18,347</div>
                  <BarChart3 className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-sm text-green-500 mt-2">73,7% taxa de engajamento</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Conexões Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold">15,621</div>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">f</div>
                    <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center">t</div>
                    <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center">i</div>
                  </div>
                </div>
                <div className="text-sm text-green-500 mt-2">62,8% taxa de conexão</div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="analytics" className="mb-6">
            <TabsList className="bg-gray-900 border-gray-800">
              <TabsTrigger value="analytics">Análise de Fãs</TabsTrigger>
              <TabsTrigger value="segments">Segmentos de Usuários</TabsTrigger>
              <TabsTrigger value="social">Métricas de Redes Sociais</TabsTrigger>
            </TabsList>
            <TabsContent value="analytics" className="mt-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Visão Geral de Análise de Fãs</CardTitle>
                  <CardDescription className="text-gray-400">
                    Dados abrangentes sobre engajamento e comportamento dos fãs
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <FanAnalyticsChart />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="segments" className="mt-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Segmentos de Usuários</CardTitle>
                  <CardDescription className="text-gray-400">
                    Categorização de fãs com base em preferências e comportamento
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <UserSegmentChart />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="social" className="mt-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Métricas de Redes Sociais</CardTitle>
                  <CardDescription className="text-gray-400">
                    Dados de engajamento das plataformas sociais conectadas
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <SocialMediaMetrics />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Banco de Dados de Fãs</CardTitle>
                  <CardDescription className="text-gray-400">
                    Informações detalhadas sobre fãs registrados
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input placeholder="Buscar fãs..." className="pl-8 bg-gray-800 border-gray-700 w-[250px]" />
                  </div>
                  <Button variant="outline" size="icon" className="border-gray-700">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-800 hover:bg-gray-800/50">
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>País</TableHead>
                    <TableHead>Times</TableHead>
                    <TableHead>Social</TableHead>
                    <TableHead>Cadastro</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <TableRow key={i} className="border-gray-800 hover:bg-gray-800/50">
                      <TableCell>John Doe</TableCell>
                      <TableCell>john.doe@example.com</TableCell>
                      <TableCell>Brasil</TableCell>
                      <TableCell>CS2, VALORANT</TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          <div className="w-5 h-5 rounded-full bg-blue-600"></div>
                          <div className="w-5 h-5 rounded-full bg-pink-600"></div>
                        </div>
                      </TableCell>
                      <TableCell>2023-06-15</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 text-yellow-400 hover:text-yellow-300 hover:bg-gray-800"
                        >
                          Ver
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t border-gray-800 py-4">
              <div className="text-sm text-gray-400">Mostrando 5 de 24.892 fãs</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-gray-700">
                  Anterior
                </Button>
                <Button variant="outline" size="sm" className="border-gray-700">
                  Próximo
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
