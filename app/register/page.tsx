"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FuriaLogo } from "@/components/furia-logo"
import { ArrowLeft, Facebook, Instagram, Twitch, Twitter } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      router.push("/dashboard")
    }
  }

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <Link href="/" className="absolute top-4 left-4 flex items-center text-gray-400 hover:text-white">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar para Home
      </Link>

      <FuriaLogo className="w-24 h-24 mb-6" />

      <Card className="w-full max-w-md bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Junte-se à Plataforma de Fãs FURIA</CardTitle>
          <CardDescription className="text-center">
            Passo {step} de 3:{" "}
            {step === 1 ? "Informações Básicas" : step === 2 ? "Preferências de Fã" : "Conexões Sociais"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" placeholder="Digite seu nome completo" className="bg-gray-800 border-gray-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Digite seu email" className="bg-gray-800 border-gray-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Crie uma senha"
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">País</Label>
                <Select>
                  <SelectTrigger id="country" className="bg-gray-800 border-gray-700">
                    <SelectValue placeholder="Selecione seu país" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="brazil">Brasil</SelectItem>
                    <SelectItem value="usa">Estados Unidos</SelectItem>
                    <SelectItem value="mexico">México</SelectItem>
                    <SelectItem value="argentina">Argentina</SelectItem>
                    <SelectItem value="other">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-3">
                <Label>Quais times da FURIA você acompanha?</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="cs2" />
                    <Label htmlFor="cs2" className="font-normal">
                      CS2
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="valorant" />
                    <Label htmlFor="valorant" className="font-normal">
                      VALORANT
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="league" />
                    <Label htmlFor="league" className="font-normal">
                      League of Legends
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="apex" />
                    <Label htmlFor="apex" className="font-normal">
                      Apex Legends
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="r6" />
                    <Label htmlFor="r6" className="font-normal">
                      Rainbow Six
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="other-games" />
                    <Label htmlFor="other-games" className="font-normal">
                      Outros
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Há quanto tempo você é fã da FURIA?</Label>
                <Select>
                  <SelectTrigger className="bg-gray-800 border-gray-700">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="new">Menos de 6 meses</SelectItem>
                    <SelectItem value="6months">6 meses - 1 ano</SelectItem>
                    <SelectItem value="1year">1-2 anos</SelectItem>
                    <SelectItem value="2years">2-3 anos</SelectItem>
                    <SelectItem value="3years">3+ anos</SelectItem>
                    <SelectItem value="beginning">Desde o início</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Qual conteúdo mais te interessa?</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="match-updates" />
                    <Label htmlFor="match-updates" className="font-normal">
                      Atualizações de Partidas
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="player-interviews" />
                    <Label htmlFor="player-interviews" className="font-normal">
                      Entrevistas com Jogadores
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="behind-scenes" />
                    <Label htmlFor="behind-scenes" className="font-normal">
                      Bastidores
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="strategy-analysis" />
                    <Label htmlFor="strategy-analysis" className="font-normal">
                      Análise de Estratégias
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="merchandise" />
                    <Label htmlFor="merchandise" className="font-normal">
                      Produtos
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="community-events" />
                    <Label htmlFor="community-events" className="font-normal">
                      Eventos da Comunidade
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <p className="text-sm text-gray-400">
                Conecte suas redes sociais para melhorar sua experiência e desbloquear recursos adicionais.
              </p>

              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-start space-x-2 border-blue-600 text-blue-500 hover:bg-blue-950/30"
                >
                  <Facebook className="h-5 w-5" />
                  <span>Conectar Facebook</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full flex items-center justify-start space-x-2 border-sky-500 text-sky-500 hover:bg-sky-950/30"
                >
                  <Twitter className="h-5 w-5" />
                  <span>Conectar Twitter</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full flex items-center justify-start space-x-2 border-pink-600 text-pink-500 hover:bg-pink-950/30"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Conectar Instagram</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full flex items-center justify-start space-x-2 border-purple-600 text-purple-500 hover:bg-purple-950/30"
                >
                  <Twitch className="h-5 w-5" />
                  <span>Conectar Twitch</span>
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="data-consent" />
                <Label htmlFor="data-consent" className="text-sm font-normal">
                  Eu concordo que a FURIA colete e analise meus dados de redes sociais para personalizar minha
                  experiência
                </Label>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button
              variant="outline"
              onClick={handlePrevStep}
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              Voltar
            </Button>
          ) : (
            <div></div>
          )}
          <Button onClick={handleNextStep} className="bg-yellow-500 hover:bg-yellow-600 text-black">
            {step < 3 ? "Continuar" : "Completar Cadastro"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
