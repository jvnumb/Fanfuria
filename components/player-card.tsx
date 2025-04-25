import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Twitter, Instagram, Twitch } from "lucide-react"

interface PlayerCardProps {
  name: string
  fullName: string
  role: string
  image: string
  socialLinks: {
    twitter?: string
    instagram?: string
    twitch?: string
  }
}

export function PlayerCard({ name, fullName, role, image, socialLinks }: PlayerCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 rounded-xl">
      <div className="relative h-64 w-full bg-gradient-to-b from-transparent to-black/50">
        <Image
          src={image || "/placeholder.svg?height=400&width=300"}
          alt={name}
          fill
          className="object-cover rounded-t-xl"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-bold text-xl text-yellow-400">{name}</h3>
        <p className="text-sm text-muted-foreground mb-1">{fullName}</p>
        <p className="text-sm font-medium mb-3">{role}</p>
        <div className="flex justify-center gap-2">
          {socialLinks.twitter && (
            <Button variant="ghost" size="icon" asChild aria-label={`Twitter de ${name}`}>
              <Link href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </Link>
            </Button>
          )}
          {socialLinks.instagram && (
            <Button variant="ghost" size="icon" asChild aria-label={`Instagram de ${name}`}>
              <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
              </Link>
            </Button>
          )}
          {socialLinks.twitch && (
            <Button variant="ghost" size="icon" asChild aria-label={`Twitch de ${name}`}>
              <Link href={socialLinks.twitch} target="_blank" rel="noopener noreferrer">
                <Twitch className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
