import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Facebook, Heart, Instagram, MessageSquare, Twitter } from "lucide-react"

export function SocialActivityFeed() {
  return (
    <div className="space-y-4">
      <div className="flex gap-3 p-3 bg-gray-800 rounded-md">
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">João Silva</span>
            <span className="text-xs text-gray-400">2 horas atrás</span>
            <Twitter className="h-4 w-4 text-sky-500 ml-auto" />
          </div>
          <p className="text-sm mt-1">
            Acabei de ver a @FURIA conquistar essa vitória incrível! O time está mais forte do que nunca! #FURIAWIN #CS2
          </p>
          <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              <span>24</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-3 w-3" />
              <span>3</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 p-3 bg-gray-800 rounded-md">
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">Amanda Silva</span>
            <span className="text-xs text-gray-400">5 horas atrás</span>
            <Instagram className="h-4 w-4 text-pink-500 ml-auto" />
          </div>
          <p className="text-sm mt-1">
            Minha nova camisa da FURIA acabou de chegar! Super feliz com a qualidade! 🔥 #FURIANATION
          </p>
          <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              <span>87</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-3 w-3" />
              <span>12</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 p-3 bg-gray-800 rounded-md">
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">Rafael Mendes</span>
            <span className="text-xs text-gray-400">Ontem</span>
            <Facebook className="h-4 w-4 text-blue-500 ml-auto" />
          </div>
          <p className="text-sm mt-1">
            Alguém vai ao encontro de fãs da FURIA no próximo fim de semana em São Paulo? Ansioso para conhecer outros
            fãs!
          </p>
          <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              <span>32</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-3 w-3" />
              <span>8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
