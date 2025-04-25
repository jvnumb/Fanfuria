"use client"

export function UserSegmentChart() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
      <div className="text-lg font-medium mb-2">Análise de Segmentos de Usuários</div>
      <div className="text-sm text-gray-400 mb-6">
        Este componente exibiria a segmentação de usuários com base em comportamento e preferências.
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">
          Distribuição de Tipos de Fãs
        </div>
        <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">
          Segmentos por Nível de Engajamento
        </div>
        <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">Distribuição Geográfica</div>
        <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">
          Clusters de Preferência de Conteúdo
        </div>
      </div>
    </div>
  )
}
