import { Instagram } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            euquefiz
          </h1>
          <span className="text-xs text-muted-foreground hidden sm:inline-block">
            sandálias artesanais
          </span>
        </div>
        
        <nav className="flex items-center gap-4">
          <a
            href="#catalogo"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Catálogo
          </a>
          <a
            href="#sobre"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Sobre
          </a>
          <a
            href="https://instagram.com/euquefizshoes"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </nav>
      </div>
    </header>
  )
}
