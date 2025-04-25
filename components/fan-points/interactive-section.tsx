"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PointsCard } from "@/components/fan-points/points-card"
import { SocialConnect } from "@/components/fan-points/social-connect"
import { RewardsShop } from "@/components/fan-points/rewards-shop"
import { AuthModal } from "@/components/auth/auth-modal"
import { User, LogIn } from "lucide-react"

export function InteractiveSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authView, setAuthView] = useState<"login" | "register">("login")

  const handleOpenLogin = () => {
    setAuthView("login")
    setIsAuthModalOpen(true)
  }

  const handleOpenRegister = () => {
    setAuthView("register")
    setIsAuthModalOpen(true)
  }

  // Simulação de login para demonstração
  const handleDemoLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <>
      {!isLoggedIn ? (
        <Card>
          <CardHeader>
            <CardTitle>Torcida Interativa</CardTitle>
            <CardDescription>
              Crie uma conta para acumular pontos, resgatar recompensas e interagir com outros torcedores
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <User className="h-12 w-12 text-yellow-500 mb-2" />
                  <h3 className="font-medium">Já tem uma conta?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Acesse sua conta para ver seus pontos e recompensas
                  </p>
                  <Button className="w-full" onClick={handleOpenLogin}>
                    <LogIn className="mr-2 h-4 w-4" /> Entrar
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-yellow-500 text-black flex items-center justify-center mb-2 text-xl font-bold">
                    F
                  </div>
                  <h3 className="font-medium">Novo por aqui?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Crie sua conta e comece a acumular pontos agora mesmo
                  </p>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" onClick={handleOpenRegister}>
                    Criar conta
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="link" onClick={handleDemoLogin}>
                Ver demonstração da área de pontos
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Tabs defaultValue="points">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="points">Meus Pontos</TabsTrigger>
              <TabsTrigger value="connect">Conectar Redes</TabsTrigger>
              <TabsTrigger value="rewards">Recompensas</TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm" onClick={() => setIsLoggedIn(false)}>
              Sair da demonstração
            </Button>
          </div>

          <TabsContent value="points">
            <PointsCard points={750} level={3} nextLevelPoints={1000} />
          </TabsContent>

          <TabsContent value="connect">
            <SocialConnect />
          </TabsContent>

          <TabsContent value="rewards">
            <RewardsShop />
          </TabsContent>
        </Tabs>
      )}

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} defaultView={authView} />
    </>
  )
}
