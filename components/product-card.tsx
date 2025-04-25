import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Eye } from "lucide-react"

interface ProductCardProps {
  name: string
  price: string
  image: string
  href: string
}

export function ProductCard({ name, price, image, href }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-xl">
      <div className="relative h-64 w-full bg-muted/50 group">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button variant="secondary" size="sm" className="rounded-full">
            <Eye className="h-4 w-4 mr-2" /> Ver detalhes
          </Button>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="font-medium text-lg mb-1 line-clamp-2">{name}</h3>
        <p className="font-bold text-xl text-yellow-500">{price}</p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
          <Link href={href}>
            <ShoppingCart className="h-4 w-4 mr-2" /> Comprar
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
