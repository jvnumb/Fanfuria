"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Play, Clock, Eye, X } from "lucide-react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"

interface VideoCardProps {
  title: string
  duration: string
  views: string
  date: string
  thumbnail: string
  videoId: string
  href: string
}

export function VideoCard({ title, duration, views, date, thumbnail, videoId, href }: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-xl">
        <div
          className="relative h-48 w-full group cursor-pointer"
          onClick={() => setIsOpen(true)}
          role="button"
          aria-label={`Assistir vídeo: ${title}`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsOpen(true)
              e.preventDefault()
            }
          }}
        >
          <Image src={thumbnail || "/placeholder.svg"} alt={title} fill className="object-cover rounded-t-xl" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center">
              <Play className="h-8 w-8 text-black" fill="black" />
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {duration}
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <div className="flex items-center mr-4">
              <Eye className="h-3 w-3 mr-1" />
              {views} visualizações
            </div>
            <div>{date}</div>
          </div>
        </CardContent>
        <CardFooter className="p-5 pt-0">
          <button onClick={() => setIsOpen(true)} className="text-yellow-500 hover:text-yellow-400 text-sm">
            Assistir vídeo
          </button>
        </CardFooter>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black rounded-xl">
          <div className="relative pt-[56.25%] w-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            />
          </div>
          <DialogClose className="absolute top-2 right-2 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-black/90">
            <X className="h-5 w-5" />
            <span className="sr-only">Fechar</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  )
}
