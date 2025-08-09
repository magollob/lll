"use client"

import { useEffect, useState } from "react"
import { Download, BookOpen, Star, Eye, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import HabilitaSection from "@/components/habilita-section"

interface Content {
  id: string
  title: string
  cover: string
  type: "ebook" | "arquivo"
  pdfUrl: string
  description: string
  featured?: boolean
}

const contents: Content[] = [
  {
    id: "4",
    title: "Viver de Doces Caramelizados",
    cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/viverdedoces-2CXtth2gq58eO2uhUcVkuyDH4v38yL.png",
    type: "ebook",
    pdfUrl: "Viver-de-doces.pdf",
    description:
      "Descubra os segredos dos doces caramelizados e transforme sua paixão em uma fonte de renda lucrativa.",
    featured: true,
  },
  {
    id: "1",
    title: "Curso Online de Brigadeiros Gourmet 1",
    cover:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brigadeirosgourmet-Uyn9ZoAtwS8T2UKkICuEtO6udACDMy.png",
    type: "ebook",
    pdfUrl: "Brigadeiros-Gourmet.pdf",
    description: "Aprenda a fazer brigadeiros gourmet profissionais com técnicas exclusivas e receitas secretas.",
    featured: true,
  },
  {
    id: "2",
    title: "Morango do Amor - Ebook",
    cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Morango-do-amor-ibZREg9Uq2tzOHb7eNE6eaZuWMPdBL.png",
    type: "ebook",
    pdfUrl: "Morango.pdf",
    description: "Receitas especiais com morango para conquistar seus clientes e aumentar suas vendas.",
    featured: true,
  },
  {
    id: "3",
    title: "Bolo de Pote - Ebook",
    cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bolodepote-5q7PNNDutBfgJ3hI6GYU6tKXh6F7p0.png",
    type: "ebook",
    pdfUrl: "bolo-de-pote.pdf",
    description:
      "Aprenda a fazer bolos de pote irresistíveis com receitas práticas e técnicas profissionais para aumentar suas vendas.",
    featured: true,
  },
  {
    id: "5",
    title: "Páscoa Lucrativa",
    cover:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pascoa-lucrativa-hLwxZfELMgqG2tGwYhj8Ocf304pftv.png",
    type: "ebook",
    pdfUrl: "pascoa-lucrativa.pdf",
    description: "Aprenda a fazer chocolates de Páscoa profissionais e lucre muito na época mais doce do ano.",
    featured: true,
  },
  {
    id: "6",
    title: "Salgados - Receitas e Dicas",
    cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ebook-salgados-vJ5IFnJMC3xuldQxPoQbmjdoOWvtQn.png",
    type: "ebook",
    pdfUrl: "ebook-salgados.pdf",
    description: "Receitas completas de salgados fritos e assados para diversificar seu negócio e aumentar os lucros.",
    featured: true,
  },
  {
    id: "7",
    title: "Bolos Gelados - Receitas e Dicas",
    cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bolos-gelado-ImUcbLnRywD43K8sCAOoj7NkvJbLs6.png",
    type: "ebook",
    pdfUrl: "bolos-gelado.pdf",
    description: "Deliciosas receitas de bolos gelados perfeitos para dias quentes e ocasiões especiais.",
    featured: true,
  },
  {
    id: "8",
    title: "Receitas de Docinhos Perfeitos",
    cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ebook-doces-yIClDXKAcnVZA7RdF6RAKF7vR2UqUO.png",
    type: "ebook",
    pdfUrl: "ebook-doces.pdf",
    description: "Aprenda a fazer docinhos gourmet irresistíveis com receitas exclusivas e técnicas profissionais.",
    featured: true,
  },
  {
    id: "9",
    title: "Máquina de Vender Doces",
    cover:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Maquina%20de%20vendas-rvWB0KWp9sDdw9BSKHvc0TSdYKz0TE.png",
    type: "ebook",
    pdfUrl: "maquina-de-vender.pdf",
    description: "Transforme sua confeitaria em uma máquina de vendas com estratégias comprovadas de sucesso.",
    featured: true,
  },
]

export default function MembersArea() {
  const [views, setViews] = useState(55)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const calculateViews = () => {
      const now = new Date()
      const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 1, 0)
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 0)
      const totalMinutes = (endOfDay.getTime() - startOfDay.getTime()) / (1000 * 60)
      const currentMinutes = (now.getTime() - startOfDay.getTime()) / (1000 * 60)
      const minViews = 55
      const maxViews = 1654
      let currentViews = minViews + Math.floor((currentMinutes / totalMinutes) * (maxViews - minViews))
      if (currentViews < minViews) currentViews = minViews
      if (currentViews > maxViews) currentViews = maxViews
      setViews(currentViews)
    }
    calculateViews()
    const interval = setInterval(calculateViews, 60000)
    setTimeout(() => setIsVisible(true), 1000)
    return () => clearInterval(interval)
  }, [])

  const handleDownload = (content: Content) => {
    const link = document.createElement("a")
    const baseUrl =
      content.type === "ebook" ? "https://chocoliciasdafabi.com/ebook/" : "https://chocoliciasdafabi.com/arquivos/"
    link.href = `${baseUrl}${content.pdfUrl}`
    link.download = content.pdfUrl
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen confectionery-bg confectionery-pattern">
      <header className="relative z-10 glass-card-strong border-b border-pink-200/30">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-center sm:justify-start">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#fd7ab1] to-pink-400 p-1 shadow-lg pulse-glow">
                <img
                  src="/confeitaria-logo.png"
                  alt="Logo da Confeitaria da Fabi"
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-lg sm:text-2xl font-bold text-[#2b2b2b]">Confeitaria da Fabi</h1>
                <p className="text-xs sm:text-sm text-gray-600">Painel da Confeitaria</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative z-10 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2b2b2b] mb-3 sm:mb-4">
              Bem-vindo ao{" "}
              <span className="bg-gradient-to-r from-[#fd7ab1] to-pink-500 bg-clip-text text-transparent">
                Painel da Confeiteira!
              </span>
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Acesse conteúdos exclusivos, cursos e e-books para transformar sua paixão pela confeitaria em uma fonte de
              renda extraordinária.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-8 sm:pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-12">
            <div className="flex items-centered space-x-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-[#fd7ab1] to-pink-400 flex items-center justify-center shadow-lg">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#2b2b2b]">E-books Exclusivos</h3>
            </div>

            <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {contents
                .filter((content) => content.type === "ebook")
                .map((content) => (
                  <div key={content.id} className="group flex-shrink-0 w-56 sm:w-64">
                    <div className="glass-card rounded-xl p-3 shadow-lg border border-pink-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:glass-card-strong">
                      {content.featured && (
                        <Badge className="mb-2 bg-gradient-to-r from-[#fd7ab1] to-pink-400 text-white border-0 text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Destaque
                        </Badge>
                      )}
                      <div className="aspect-[3/4] rounded-lg overflow-hidden mb-3 shadow-md">
                        <img
                          src={
                            content.cover ||
                            "/placeholder.svg?height=400&width=300&query=capa%20de%20ebook%20doce%20confeitaria" ||
                            "/placeholder.svg"
                          }
                          alt={content.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-semibold text-[#2b2b2b] mb-2 text-sm group-hover:text-[#fd7ab1] transition-colors line-clamp-2">
                        {content.title}
                      </h4>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">{content.description}</p>
                      <div className="flex justify-center">
                        <Button
                          onClick={() => handleDownload(content)}
                          size="sm"
                          className="w-full bg-gradient-to-r from-[#fd7ab1] to-pink-400 hover:from-[#fd7ab1]/90 hover:to-pink-400/90 text-white border-0 shadow-md group-hover:shadow-lg transition-all text-xs py-2"
                        >
                          <Download className="w-3 h-3 mr-2" />
                          Baixar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <HabilitaSection />
        </div>
      </section>

      <section className="relative z-10 py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <Alert variant="destructive" className="mb-6 border-red-500 bg-red-50 shadow-lg">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-red-800 font-medium">
              {"🎥 "}
              <strong>Novidade em Breve!</strong> Em breve teremos vídeo aulas exclusivas sobre confeitaria e como
              empreender com confeitaria. Fique atento às atualizações!
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="relative z-10 py-8 sm:py-12 bg-gradient-to-r from-[#fd7ab1]/10 to-pink-300/10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="glass-card-strong rounded-3xl p-6 sm:p-8 shadow-xl border border-pink-200/50 max-w-2xl mx-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden mx-auto mb-4 sm:mb-6 shadow-lg pulse-glow">
              <img src="/whatsapp-logo.png" alt="Logo do WhatsApp" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2b2b2b]">Acesse o Grupo VIP no WhatsApp</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              {"🔄 "}
              <strong>Página em Atualização:</strong> Estamos reorganizando e adicionando novamente todos os e-books e
              arquivos.
              <br />
              <br />
              Acesse nosso grupo VIP no WhatsApp para receber todo o conteúdo diretamente e ficar por dentro das
              atualizações sem precisar voltar ao site!
            </p>
            <Button
              onClick={() => window.open("https://chat.whatsapp.com/Jl2RNXTjUJLCjORaeyyNKf", "_blank")}
              className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white border-0 shadow-lg text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold"
              size="lg"
            >
              <img src="/whatsapp-logo.png" alt="" className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 rounded" />
              Entrar no Grupo VIP
            </Button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-[#2b2b2b]/95 backdrop-blur-md text-white py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img
              src="/confeitaria-logo.png"
              alt="Logo da Confeitaria da Fabi"
              className="h-12 sm:h-16 rounded-full shadow-lg"
            />
          </div>
          <p className="text-gray-300 text-xs sm:text-sm">
            © {new Date().getFullYear()} Confeitaria da Fabi. Transformando sonhos em realidade através da confeitaria.
          </p>
        </div>
      </footer>

      <div
        className={`fixed bottom-4 left-4 z-50 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#fd7ab1] to-pink-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-gradient-to-br from-[#fd7ab1] to-pink-500 rounded-3xl p-4 shadow-2xl border border-pink-300 min-w-[180px]">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#fd7ab1] via-pink-400 to-pink-500 flex items-center justify-center shadow-lg">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 w-10 h-10 rounded-2xl bg-[#fd7ab1]/20 animate-ping"></div>
              </div>
              <div className="flex-1">
                <p className="text-xs text-pink-100 leading-tight mb-1">{new Date().toLocaleDateString("pt-BR")}</p>
                <div className="flex items-baseline space-x-1">
                  <p className="text-lg font-bold text-white leading-none">{views.toLocaleString()}</p>
                  <p className="text-xs text-pink-100 font-medium">visualizações</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
