import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { NewsCard } from "@/components/news-card"
import { PlayerCard } from "@/components/player-card"
import { VideoCard } from "@/components/video-card"
import { ProductCard } from "@/components/product-card"
import { InteractiveSection } from "@/components/fan-points/interactive-section"
import { ArrowRight, Calendar, Trophy, Users, Video } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/furia-hero.jpg')" }}
        />
        <div className="container relative z-20 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Bem-vindo ao <span className="text-yellow-400">Universo FURIA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Acompanhe de perto a maior organização de esports do Brasil. Notícias, conteúdo exclusivo e muito mais.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Últimas Notícias
              </Button>
              <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-950/30">
                Conheça os Times
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Torcida Interativa */}
      <section className="py-16 bg-muted/30" id="torcida">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Torcida Interativa</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Participe, acumule pontos e resgate recompensas exclusivas da FURIA
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <InteractiveSection />
          </div>
        </div>
      </section>

      {/* Últimas Notícias */}
      <section className="py-16 bg-background" id="noticias">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Últimas Notícias</h2>
              <p className="text-muted-foreground">Fique por dentro das novidades da FURIA</p>
            </div>
            <Button variant="ghost" className="text-yellow-400 hover:text-yellow-500 flex items-center gap-2">
              Ver Todas <ArrowRight size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NewsCard
              title="FURIA conquista vaga para o Major de CS2"
              excerpt="Equipe brasileira garante classificação após campanha impressionante nas qualificatórias."
              date="12 de Abril, 2024"
              category="CS2"
              image="https://animenew.com.br/wp-content/uploads/2024/10/IEM-RIO-2024-FURIA-vence-NAVI-e-avanca-para-a-semifinal-jpg.webp"
              href="/noticias/furia-conquista-vaga-major"
            />
            <NewsCard
              title="Entrevista exclusiva com arT sobre liderança"
              excerpt="O capitão da FURIA fala sobre os desafios de liderar uma equipe de elite no cenário competitivo."
              date="8 de Abril, 2024"
              category="Entrevista"
              image="https://medias.itatiaia.com.br/dims4/default/74cf974/2147483647/strip/true/crop/1080x608+0+373/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-radio-itatiaia.s3.us-east-1.amazonaws.com%2Fbrightspot%2F1e%2Faa%2Ff4f0665646bb90f61cdc89787ca4%2Fsnapinsta-app-462252415-1210242480272154-1472049927716586349-n-1080.jpg"
              href="/noticias/entrevista-art-lideranca"
            />
            <NewsCard
              title="FURIA anuncia nova linha de produtos"
              excerpt="Organização lança coleção especial de roupas e acessórios para os fãs."
              date="5 de Abril, 2024"
              category="Produtos"
              image="https://gumlet.assettype.com/themove/2024-11-12/wfkni3bx/1-copia.png?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true"
              href="/noticias/nova-linha-produtos"
            />
          </div>
        </div>
      </section>

      {/* Lineup Atual */}
      <section className="py-16 bg-muted/30" id="lineup">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Lineup CS2</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça os jogadores que representam a FURIA no cenário competitivo de Counter-Strike 2
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <PlayerCard
              name="arT"
              fullName="Andrei Piovezan"
              role="Capitão / Entry Fragger"
              image="https://static.draft5.gg/news/2023/10/30090756/FURIA-arT-IEM-Cologne-2023.jpg"
              socialLinks={{
                twitter: "https://twitter.com/arTcsgo",
                instagram: "https://instagram.com/artcsgo",
                twitch: "https://twitch.tv/arTcsgo",
              }}
            />
            <PlayerCard
              name="KSCERATO"
              fullName="Kaike Cerato"
              role="Rifler"
              image="https://s2-ge.glbimg.com/7J6ZkhIB4Yn-R3uR8KsbSIIXAuA=/0x0:5637x3760/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/h/s/MrRqfXSiWs598AxV000A/csgo-furia-iem-katowice-kscerato.jpg"
              socialLinks={{
                twitter: "https://twitter.com/kscerato",
                instagram: "https://instagram.com/kscerato",
                twitch: "https://twitch.tv/kscerato",
              }}
            />
            <PlayerCard
              name="yuurih"
              fullName="Yuri Santos"
              role="Rifler"
              image="https://noticias.maisesports.com.br/wp-content/uploads/2023/03/yuurih-1.jpg"
              socialLinks={{
                twitter: "https://twitter.com/yuurihcs",
                instagram: "https://instagram.com/yuurihcs",
                twitch: "https://twitch.tv/yuurih",
              }}
            />
            <PlayerCard
              name="chelo"
              fullName="Marcelo Cespedes"
              role="Rifler"
              image="https://static.draft5.gg/news/2023/03/27112557/Imperial-chelo-ESL-Pro-League-S17.jpg"
              socialLinks={{
                twitter: "https://twitter.com/chelocsgo",
                instagram: "https://instagram.com/chelocsgo",
                twitch: "https://twitch.tv/chelo",
              }}
            />
            <PlayerCard
              name="saffee"
              fullName="Rafael Costa"
              role="AWPer"
              image="https://s2-ge.glbimg.com/xARmM9MNHaDYPyRbXjq4No5VvIk=/0x0:772x503/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/B/a/2e3rJJT96Ohpmh8HGEmw/iem-major-rio-2022-furia-saffee.png"
              socialLinks={{
                twitter: "https://twitter.com/saffeeCS",
                instagram: "https://instagram.com/saffeeCS",
                twitch: "https://twitch.tv/saffee",
              }}
            />
          </div>

          <div className="mt-10 text-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Ver Todos os Times <Users className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Vídeos em Destaque */}
      <section className="py-16 bg-background" id="videos">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Vídeos em Destaque</h2>
              <p className="text-muted-foreground">Confira os melhores momentos da FURIA</p>
            </div>
            <Button variant="ghost" className="text-yellow-400 hover:text-yellow-500 flex items-center gap-2">
              Ver Todos <ArrowRight size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VideoCard
              title="FURIA vs NAVI - BLAST Premier Spring Final 2023 - Highlights"
              duration="12:45"
              views="45K"
              date="2 semanas atrás"
              thumbnail={`https://img.youtube.com/vi/V-o8H9Khznc/maxresdefault.jpg`}
              videoId="V-o8H9Khznc"
              href="/videos/furia-vs-navi"
            />
            <VideoCard
              title="KSCERATO: O Rei do Clutch - Compilação"
              duration="8:32"
              views="32K"
              date="3 semanas atrás"
              thumbnail={`https://img.youtube.com/vi/wU9Y_zFC2iI/maxresdefault.jpg`}
              videoId="wU9Y_zFC2iI"
              href="/videos/kscerato-clutch"
            />
            <VideoCard
              title="FURIA VALORANT: Melhores momentos VCT Americas 2023"
              duration="15:20"
              views="78K"
              date="1 mês atrás"
              thumbnail={`https://img.youtube.com/vi/tB8b5PZ2evs/maxresdefault.jpg`}
              videoId="tB8b5PZ2evs"
              href="/videos/furia-valorant"
            />
          </div>

          <div className="mt-10 text-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Canal no YouTube <Video className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Próximos Jogos */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Próximos Jogos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Não perca nenhuma partida da FURIA nos principais campeonatos
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-500 text-black p-3 rounded-lg text-center min-w-16">
                      <div className="text-sm font-medium">ABR</div>
                      <div className="text-xl font-bold">25</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">FURIA vs Team Liquid</h3>
                      <p className="text-muted-foreground">ESL Pro League Season 18</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-medium">18:00</div>
                      <div className="text-sm text-muted-foreground">Horário de Brasília</div>
                    </div>
                    <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-950/30">
                      Lembrete <Calendar className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-500 text-black p-3 rounded-lg text-center min-w-16">
                      <div className="text-sm font-medium">ABR</div>
                      <div className="text-xl font-bold">28</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">FURIA vs NAVI</h3>
                      <p className="text-muted-foreground">BLAST Premier Spring Finals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-medium">15:30</div>
                      <div className="text-sm text-muted-foreground">Horário de Brasília</div>
                    </div>
                    <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-950/30">
                      Lembrete <Calendar className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-500 text-black p-3 rounded-lg text-center min-w-16">
                      <div className="text-sm font-medium">MAI</div>
                      <div className="text-xl font-bold">02</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">FURIA vs FaZe Clan</h3>
                      <p className="text-muted-foreground">IEM Dallas 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-medium">20:00</div>
                      <div className="text-sm text-muted-foreground">Horário de Brasília</div>
                    </div>
                    <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-950/30">
                      Lembrete <Calendar className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Calendário Completo <Trophy className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-16 bg-background" id="loja">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Produtos em Destaque</h2>
              <p className="text-muted-foreground">Vista-se com as cores da FURIA</p>
            </div>
            <Button variant="ghost" className="text-yellow-400 hover:text-yellow-500 flex items-center gap-2">
              Ver Loja <ArrowRight size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              name="Camisa Oficial FURIA 2025"
              price="R$ 249,90"
              image="https://furiagg.fbitsstatic.net/img/p/camiseta-oficial-furia-adidas-preta-150265/337491-5.jpg?w=1280&h=1280&v=202503281009"
              href="/loja/camisa-oficial-2025"
            />
            <ProductCard
              name="Moletom FURIA Preto"
              price="R$ 299,90"
              image="https://furiagg.fbitsstatic.net/img/p/moletom-careca-furia-future-is-black-preto-150151/336715-5.jpg?w=1280&h=1280&v=no-value"
              href="/loja/moletom-preto"
            />
            <ProductCard
              name="Boné FURIA Snapback"
              price="R$ 129,90"
              image="https://furiagg.fbitsstatic.net/img/p/bone-furia-furioso-preto-150141/336657-4.jpg?w=1280&h=1280&v=no-value"
              href="/loja/bone-snapback"
            />
            <ProductCard
              name="Mousepad FURIA XL"
              price="R$ 99,90"
              image="https://assets.fallenstore.com.br/lp/mousepad/furia/pro_furia_edition_grande/images/bg_mousepad_furia_edition.webp"
              href="/loja/mousepad-xl"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-yellow-500 text-black">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Fique por dentro de tudo</h2>
            <p className="text-lg mb-8">
              Assine nossa newsletter e receba as últimas notícias, promoções exclusivas e conteúdo especial diretamente
              no seu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                aria-label="Seu email para newsletter"
                className="px-4 py-3 rounded-lg flex-1 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <Button className="bg-black hover:bg-gray-800 text-white">Assinar</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
