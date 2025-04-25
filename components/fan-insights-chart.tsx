"use client"

export function FanInsightsChart() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
      <div className="text-lg font-medium mb-2">Visualização de Insights de Fãs</div>
      <div className="text-sm text-gray-400 mb-6">
        Este componente conteria gráficos interativos mostrando demografia dos fãs, métricas de engajamento e
        preferências.
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">
          Gráfico de Demografia dos Fãs
        </div>
        <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">
          Gráfico de Métricas de Engajamento
        </div>
        <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">
          Gráfico de Preferências de Times
        </div>
        <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">
          Gráfico de Preferências de Conteúdo
        </div>
      </div>
    </div>
  )
}
