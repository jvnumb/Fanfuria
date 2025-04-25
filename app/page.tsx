import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FuriaLogo } from "@/components/furia-logo"
import { ChevronRight, Users, BarChart3, MessageSquare, Trophy } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black z-10" />
        <div
          className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/furia-hero.jpg')" }}
        />
        <div className="container relative z-20 px-4 mx-auto text-center">
          <FuriaLogo className="w-48 h-48 mx-auto mb-6" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
            <span className="text-yellow-400">FURIA</span> Plataforma de Fãs
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-8">
            Junte-se à comunidade FURIA e receba conteúdo personalizado, recompensas exclusivas e conecte-se com outros
            fãs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/register">Cadastre-se</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-yellow-500 text-yellow-400 hover:bg-yellow-950/30"
            >
              <Link href="/login">Entrar</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Conecte. Engaje. <span className="text-yellow-400">Domine.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Users className="w-10 h-10 text-yellow-400 mb-2" />
                <CardTitle>Comunidade</CardTitle>
                <CardDescription className="text-gray-400">Conecte-se com outros fãs da FURIA</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Participe de discussões, compartilhe conteúdo e faça amizades com outros fãs que compartilham sua
                  paixão.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/community" className="text-yellow-400 flex items-center">
                  Explorar <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-yellow-400 mb-2" />
                <CardTitle>Conteúdo Personalizado</CardTitle>
                <CardDescription className="text-gray-400">Conteúdo adaptado aos seus interesses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Receba notícias, vídeos e atualizações sobre seus times, jogadores e jogos favoritos.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/content" className="text-yellow-400 flex items-center">
                  Descobrir <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <MessageSquare className="w-10 h-10 text-yellow-400 mb-2" />
                <CardTitle>Integração Social</CardTitle>
                <CardDescription className="text-gray-400">Conecte suas redes sociais</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Vincule suas contas de redes sociais para uma experiência integrada em todas as plataformas.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/social" className="text-yellow-400 flex items-center">
                  Conectar <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Trophy className="w-10 h-10 text-yellow-400 mb-2" />
                <CardTitle>Recompensas Exclusivas</CardTitle>
                <CardDescription className="text-gray-400">Ganhe pontos e resgate recompensas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Participe de atividades para ganhar pontos e desbloquear produtos exclusivos, ingressos e
                  experiências.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/rewards" className="text-yellow-400 flex items-center">
                  Ver Recompensas <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-500">
        <div className="container px-4 mx-auto text-center text-black">
          <h2 className="text-3xl font-bold mb-6">Pronto para se juntar à família FURIA?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Crie seu perfil agora e comece sua jornada como um fã reconhecido da FURIA.
          </p>
          <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
            <Link href="/register">Criar Seu Perfil</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
