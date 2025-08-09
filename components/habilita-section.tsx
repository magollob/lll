"use client"
import { useEffect, useState } from "react"
import { Clock, Gift, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HabilitaSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const week = 7 * 24 * 60 * 60 * 1000
      const nextCycleStart = Math.floor(now / week) * week + week
      const diff = nextCycleStart - now
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)
        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 7, hours: 0, minutes: 0, seconds: 0 })
      }
    }
    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="mb-8 sm:mb-12">
      <div className="flex items-center space-x-3 mb-6 sm:mb-8">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
          <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#2b2b2b]">Próxima Liberação</h3>
      </div>

      <Card className="glass-card border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-3">
            <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 px-4 py-1">
              <Sparkles className="w-3 h-3 mr-1" />
              Em Breve
            </Badge>
          </div>
          <CardTitle className="text-lg sm:text-xl text-[#2b2b2b] mb-2">Novos Conteúdos Exclusivos</CardTitle>
          <CardDescription className="text-sm sm:text-base text-gray-600">
            Prepare-se para mais receitas incríveis e dicas profissionais!
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Clock className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-medium text-gray-600">Próxima liberação em:</span>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-3 text-white shadow-md">
              <div className="text-lg sm:text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-xs sm:text-sm opacity-90">Dias</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-3 text-white shadow-md">
              <div className="text-lg sm:text-2xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs sm:text-sm opacity-90">Horas</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-3 text-white shadow-md">
              <div className="text-lg sm:text-2xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs sm:text-sm opacity-90">Min</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-3 text-white shadow-md">
              <div className="text-lg sm:text-2xl font-bold">{timeLeft.seconds}</div>
              <div className="text-xs sm:text-sm opacity-90">Seg</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 mt-4">⏰ Timer reinicia automaticamente a cada 7 dias</p>
        </CardContent>
      </Card>
    </div>
  )
}
