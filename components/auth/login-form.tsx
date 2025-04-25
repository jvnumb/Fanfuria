"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/ui/icons"

interface LoginFormProps {
  onToggleForm: () => void
}

export function LoginForm({ onToggleForm }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulação de login
    setTimeout(() => {
      setIsLoading(false)
      // Aqui você conectaria com um backend real
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h3 className="text-2xl font-bold">Entrar na sua conta</h3>
        <p className="text-sm text-muted-foreground">Entre com seu e-mail e senha para acessar sua conta</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="seu@email.com" required disabled={isLoading} />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Senha</Label>
            <Button variant="link" size="sm" className="px-0 text-xs">
              Esqueceu a senha?
            </Button>
          </div>
          <Input id="password" type="password" placeholder="••••••••" required disabled={isLoading} />
        </div>

        <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" disabled={isLoading}>
          {isLoading ? (
            <>
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> Entrando...
            </>
          ) : (
            "Entrar"
          )}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Ou continue com</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" disabled={isLoading}>
          <Icons.google className="mr-2 h-4 w-4" /> Google
        </Button>
        <Button variant="outline" disabled={isLoading}>
          <Icons.discord className="mr-2 h-4 w-4" /> Discord
        </Button>
      </div>

      <div className="text-center text-sm">
        Não tem uma conta?{" "}
        <Button variant="link" className="p-0" onClick={onToggleForm}>
          Registre-se
        </Button>
      </div>
    </div>
  )
}
