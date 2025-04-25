import Image from "next/image"

interface FuriaLogoProps {
  className?: string
  withBackground?: boolean
}

export function FuriaLogo({ className = "w-10 h-10", withBackground = false }: FuriaLogoProps) {
  if (withBackground) {
    return (
      <div className={`${className} flex items-center justify-center bg-yellow-500 p-2 rounded-md`}>
        <div className="relative w-full h-full">
          <Image src="/images/furia-logo.png" alt="FURIA Logo" fill className="object-contain" priority />
        </div>
      </div>
    )
  }

  return (
    <div className={`${className} relative`}>
      <Image src="/images/furia-logo.png" alt="FURIA Logo" fill className="object-contain" priority />
    </div>
  )
}
