"use client"

export function FanAnalyticsChart() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
      <div className="text-lg font-medium mb-2">Painel de Análise de Fãs</div>
      <div className="text-sm text-gray-400 mb-6">
        Este componente contém gráficos de análise abrangentes para uso administrativo.
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">
          Gráfico de Crescimento de Usuários
        </div>
        <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">
          Gráfico de Métricas de Engajamento
        </div>
        <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">
          Gráfico de Desempenho de Conteúdo
        </div>
        <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">
          Gráfico de Métricas de Conversão
        </div>
      </div>
    </div>
  )
}
