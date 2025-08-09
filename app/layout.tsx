import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Confeitaria da Fabi — Painel",
  description: "Área de membros com e‑books e conteúdos exclusivos da Confeitaria da Fabi.",
    generator: 'v0.dev'
}

const criticalCss = `
  html{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
  .confectionery-bg{background:radial-gradient(1200px 600px at 10% -10%, rgba(253,122,177,.1), transparent 60%),
  radial-gradient(900px 500px at 100% 10%, rgba(244,114,182,.1), transparent 60%), #fff}
  .confectionery-pattern{position:relative}
  .confectionery-pattern::before{content:"";position:fixed;inset:0;pointer-events:none;
    background-image:radial-gradient(rgba(253,122,177,.08) 1px, transparent 1px),
    radial-gradient(rgba(253,122,177,.06) 1px, transparent 1px);
    background-size:24px 24px,48px 48px;background-position:0 0,12px 12px;z-index:0}
  .glass-card{background:rgba(255,255,255,.7);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
  .glass-card-strong{background:rgba(255,255,255,.85);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
  @keyframes pulseGlow{0%,100%{box-shadow:0 0 0 0 rgba(253,122,177,.5)}50%{box-shadow:0 0 0 6px rgba(253,122,177,.15)}}
  .pulse-glow{animation:pulseGlow 3s ease-in-out infinite}
  .scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}
  .scrollbar-hide::-webkit-scrollbar{display:none}
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <style id="critical-css" dangerouslySetInnerHTML={{ __html: criticalCss }} />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>

        {/* Optional async CSS pattern kept simple: Next handles CSS bundling, but critical styles above ensure no FOUC [^1][^3] */}
      </body>
    </html>
  )
}
