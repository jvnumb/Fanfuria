"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Icons } from "@/components/ui/icons"

interface RegisterFormProps {
  onToggleForm: () => void
}

export function RegisterForm({ onToggleForm }: RegisterFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulação de registro
    setTimeout(() => {
      setIsLoading(false)
      // Aqui você conectaria com um backend real
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h3 className="text-2xl font-bold">Criar uma conta</h3>
        <p className="text-sm text-muted-foreground">Preencha os dados abaixo para se juntar à torcida FURIA</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome completo</Label>
          <Input id="name" placeholder="Seu nome" required disabled={isLoading} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="seu@email.com" required disabled={isLoading} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" placeholder="••••••••" required disabled={isLoading} />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" required />
          <Label htmlFor="terms" className="text-sm font-normal">
            Eu concordo com os{" "}
            <Button variant="link" className="p-0 h-auto">
              termos de serviço
            </Button>{" "}
            e{" "}
            <Button variant="link" className="p-0 h-auto">
              política de privacidade
            </Button>
          </Label>
        </div>

        <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" disabled={isLoading}>
          {isLoading ? (
            <>
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> Criando conta...
            </>
          ) : (
            "Criar conta"
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
        Já tem uma conta?{" "}
        <Button variant="link" className="p-0" onClick={onToggleForm}>
          Entrar
        </Button>
      </div>
    </div>
  )
}
