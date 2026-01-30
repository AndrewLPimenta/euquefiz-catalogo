"use client"

import { Instagram } from "lucide-react"

export function Header() {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    element.scrollIntoView({
      behavior: "smooth", // 👈 aqui está a magia do scroll animado
      block: "start",
    })
  }

  return (
<header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/euquefiz.png"
            alt="euquefiz"
            className="h-8 md:h-9 object-contain"
          />

          <span className="text-xs text-muted-foreground hidden sm:block tracking-wide">
            EUQUEFIZ
          </span>
        </div>

        {/* Navegação */}
        <nav className="flex items-center gap-6">
          <button
            onClick={() => scrollToId("catalogo")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Catálogo
          </button>

          <button
            onClick={() => scrollToId("sobre")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Sobre
          </button>

          {/* Instagram */}
          <a
            href="https://instagram.com/euquefiz_bydani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center text-foreground hover:bg-secondary transition-all hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </nav>
      </div>
    </header>
  )
}
