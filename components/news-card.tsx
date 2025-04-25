import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  href: string
}

export function NewsCard({ title, excerpt, date, category, image, href }: NewsCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-xl">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg?height=400&width=600"}
          alt={title}
          fill
          className="object-cover rounded-t-xl"
        />
        <Badge className="absolute top-3 left-3 bg-yellow-500 text-black hover:bg-yellow-600">{category}</Badge>
      </div>
      <CardContent className="p-5">
        <div className="text-sm text-muted-foreground mb-2">{date}</div>
        <h3 className="font-bold text-xl mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Link href={href} className="text-yellow-500 hover:text-yellow-400 flex items-center gap-1">
          Ler mais <ArrowRight size={16} />
        </Link>
      </CardFooter>
    </Card>
  )
}
