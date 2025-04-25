import { FuriaLogo } from "@/components/furia-logo"

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-900 text-white p-4">
      <div className="text-center space-y-6">
        <FuriaLogo className="w-24 h-24 mx-auto" withBackground />
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-yellow-500">Em construção</h1>
          <p className="text-zinc-400 max-w-md">
            Esta página está sendo desenvolvida e estará disponível em breve.
            Agradecemos sua paciência!
          </p>
        </div>
      </div>
    </div>
  )
} 