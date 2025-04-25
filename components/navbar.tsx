"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, ShoppingBag, Search } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image src="/images/furia-logo.png" alt="FURIA Logo" fill className="object-contain" priority />
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">FURIA Fans</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#noticias">Notícias</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#lineup">Lineup</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#videos">Vídeos</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#loja">Loja</Link>
            </Button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Pesquisar">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Loja">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            <Button variant="ghost" className="justify-start" asChild onClick={() => setIsMobileMenuOpen(false)}>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild onClick={() => setIsMobileMenuOpen(false)}>
              <Link href="#noticias">Notícias</Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild onClick={() => setIsMobileMenuOpen(false)}>
              <Link href="#lineup">Lineup</Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild onClick={() => setIsMobileMenuOpen(false)}>
              <Link href="#videos">Vídeos</Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild onClick={() => setIsMobileMenuOpen(false)}>
              <Link href="#loja">Loja</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
