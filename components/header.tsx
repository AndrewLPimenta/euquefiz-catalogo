"use client"

import { FaInstagram } from "react-icons/fa"

<FaInstagram size={20} />


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
<header
  className="
    fixed
    top-0
    left-0
    right-0
    z-50

    bg-background/70
    backdrop-blur-xl
    supports-[backdrop-filter]:bg-background/60

    border-b
    border-border/40

    shadow-[0_1px_0_rgba(255,255,255,0.4)]
    dark:shadow-[0_1px_0_rgba(0,0,0,0.4)]
  "
>

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
  className="
    group
    relative
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    bg-gradient-to-br
    from-black-500/10
    via-white-500/15
    to-purple-500/20
    backdrop-blur-xl
    border
    border-white/40
    shadow-lg
    shadow-pink-500/10
    hover:shadow-xl
    hover:shadow-pink-500/20
    transition-all
    duration-500
    ease-out
    hover:scale-110
    hover:rotate-12
    hover:border-pink-300/50
    overflow-hidden
  "
>
  {/* Background gradient animation */}
  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-purple-500/0 to-orange-500/0 group-hover:from-pink-500/10 group-hover:via-purple-500/15 group-hover:to-orange-500/10 transition-all duration-700" />
  
  {/* Shimmer effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
  
  {/* Outer ring glow */}
  <div className="absolute inset-[-2px] rounded-full bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-orange-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  
  {/* Inner ring */}
  <div className="absolute inset-0 rounded-full ring-2 ring-pink-500/20 ring-offset-1 ring-offset-background" />
  
  {/* Ícone com cores mais vibrantes */}
  <FaInstagram className="
    relative
    z-10
    h-7
    w-7
    text-gray-700
    drop-shadow-sm
    transition-all
    duration-500
    group-hover:h-6
    group-hover:w-6
    group-hover:text-pink-400
    group-hover:scale-110
  " />
  
  {/* Sparkle particles */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <div className="absolute top-1 left-1 w-1 h-1 bg-pink-400/80 rounded-full animate-ping" />
    <div className="absolute bottom-1 right-1 w-1 h-1 bg-purple-400/80 rounded-full animate-ping" style={{ animationDelay: "0.2s" }} />
    <div className="absolute top-1 right-1 w-1 h-1 bg-orange-400/80 rounded-full animate-ping" style={{ animationDelay: "0.4s" }} />
  </div>

  {/* Hover tooltip */}
  <span className="
    absolute
    -top-8
    left-1/2
    -translate-x-1/2
    px-2
    py-1
    bg-gradient-to-r
    from-pink-500
    to-purple-500
    text-white
    text-xs
    font-semibold
    rounded-md
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-300
    whitespace-nowrap
    shadow-lg
    z-20
    pointer-events-none
  ">
    @euquefiz_bydani
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rotate-45" />
  </span>
</a>


        </nav>
      </div>
    </header>
  )
}
