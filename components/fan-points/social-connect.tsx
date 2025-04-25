import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"

export function SocialConnect() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Conecte suas redes</CardTitle>
        <CardDescription>Ganhe pontos extras conectando suas redes sociais</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button variant="outline" className="w-full justify-start">
          <Icons.instagram className="mr-2 h-4 w-4 text-pink-500" />
          Conectar Instagram
          <span className="ml-auto text-xs bg-yellow-500 text-black px-2 py-0.5 rounded">+100 pts</span>
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Icons.twitter className="mr-2 h-4 w-4 text-blue-400" />
          Conectar Twitter/X
          <span className="ml-auto text-xs bg-yellow-500 text-black px-2 py-0.5 rounded">+100 pts</span>
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Icons.discord className="mr-2 h-4 w-4 text-indigo-500" />
          Conectar Discord
          <span className="ml-auto text-xs bg-yellow-500 text-black px-2 py-0.5 rounded">+100 pts</span>
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.59 6.69a4.83 4.83 0 0 0-3.77-4.25 4.83 4.83 0 0 0-5.2 1.33 4.83 4.83 0 0 0-5.2-1.33 4.83 4.83 0 0 0-3.77 4.25 4.83 4.83 0 0 0 2.31 4.94 4.83 4.83 0 0 0-2.31 4.94 4.83 4.83 0 0 0 3.77 4.25 4.83 4.83 0 0 0 5.2-1.33 4.83 4.83 0 0 0 5.2 1.33 4.83 4.83 0 0 0 3.77-4.25 4.83 4.83 0 0 0-2.31-4.94 4.83 4.83 0 0 0 2.31-4.94z"
              fill="#FF0050"
            />
            <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" fill="white" />
          </svg>
          Conectar TikTok
          <span className="ml-auto text-xs bg-yellow-500 text-black px-2 py-0.5 rounded">+100 pts</span>
        </Button>
      </CardContent>
    </Card>
  )
}
