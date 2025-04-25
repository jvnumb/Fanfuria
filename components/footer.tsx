import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, Twitch } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <Image src="/images/furia-logo.png" alt="FURIA Logo" fill className="object-contain" />
              </div>
              <span className="font-bold text-xl">FURIA Fans</span>
            </div>
            <p className="text-muted-foreground">
              Site não-oficial de fãs da FURIA Esports, dedicado a trazer as últimas notícias, conteúdos e produtos
              relacionados à organização.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" aria-label="Facebook da FURIA" asChild>
                <Link href="https://facebook.com/furiagg" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter da FURIA" asChild>
                <Link href="https://twitter.com/furia" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram da FURIA" asChild>
                <Link href="https://instagram.com/furiagg" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Youtube da FURIA" asChild>
                <Link href="https://youtube.com/furia" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitch da FURIA" asChild>
                <Link href="https://twitch.tv/furiatv" target="_blank" rel="noopener noreferrer">
                  <Twitch className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#noticias" className="text-muted-foreground hover:text-foreground transition-colors">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="#lineup" className="text-muted-foreground hover:text-foreground transition-colors">
                  Lineup
                </Link>
              </li>
              <li>
                <Link href="#videos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Vídeos
                </Link>
              </li>
              <li>
                <Link href="#loja" className="text-muted-foreground hover:text-foreground transition-colors">
                  Loja
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Times</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/times/cs2" className="text-muted-foreground hover:text-foreground transition-colors">
                  CS2
                </Link>
              </li>
              <li>
                <Link href="/times/valorant" className="text-muted-foreground hover:text-foreground transition-colors">
                  VALORANT
                </Link>
              </li>
              <li>
                <Link href="/times/lol" className="text-muted-foreground hover:text-foreground transition-colors">
                  League of Legends
                </Link>
              </li>
              <li>
                <Link href="/times/r6" className="text-muted-foreground hover:text-foreground transition-colors">
                  Rainbow Six
                </Link>
              </li>
              <li>
                <Link href="/times/apex" className="text-muted-foreground hover:text-foreground transition-colors">
                  Apex Legends
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Informações</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-privacidade"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-uso" className="text-muted-foreground hover:text-foreground transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} FURIA Fans. Este é um site não-oficial de fãs. Todos os direitos da marca FURIA
            pertencem à FURIA Esports.
          </p>
        </div>
      </div>
    </footer>
  )
}
