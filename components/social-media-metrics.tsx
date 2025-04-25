"use client"

export function SocialMediaMetrics() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
      <div className="text-lg font-medium mb-2">Desempenho nas Redes Sociais</div>
      <div className="text-sm text-gray-400 mb-6">
        Este componente exibiria métricas das plataformas de redes sociais conectadas.
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">
          Comparação de Engajamento por Plataforma
        </div>
        <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">
          Desempenho de Conteúdo por Plataforma
        </div>
        <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">Análise de Sentimento</div>
        <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">
          Tópicos em Alta & Hashtags
        </div>
      </div>
    </div>
  )
}
