"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface MediaItem {
  type: "image" | "video"
  src: string
  alt?: string
}

interface ProductCarouselProps {
  media: MediaItem[]
  productName: string
  selectedColorName?: string
}

export function ProductCarousel({ media, productName, selectedColorName }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Detecta se é mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Reset para primeira imagem quando a cor mudar
  useEffect(() => {
    setCurrentIndex(0)
  }, [selectedColorName])

  // Auto-rotate images (5 segundos)
  useEffect(() => {
    if (media.length <= 1 || !isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [media.length, isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1))
  }

  const hasMedia = media && media.length > 0
  const currentMedia = hasMedia ? media[currentIndex] : null

  // Placeholder responsivo
  const getPlaceholderImage = () => {
    const width = isMobile ? 400 : 600
    const height = isMobile ? 400 : 600
    return `https://placehold.co/${width}x${height}/f5f5f5/666666?text=${encodeURIComponent(productName)}&font=playfair`
  }

  // Renderiza a mídia atual
  const renderMedia = () => {
    if (!hasMedia || !currentMedia) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-secondary/20 to-secondary/30 p-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 text-primary/50">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 0 002 2z" />
              </svg>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            {productName}
            {selectedColorName && <><br />Cor: {selectedColorName}</>}
          </p>
        </div>
      )
    }

    if (currentMedia.type === "image") {
      return (
        <img
          src={currentMedia.src || getPlaceholderImage()}
          alt={currentMedia.alt || productName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = getPlaceholderImage()
            target.className = "w-full h-full object-cover"
          }}
        />
      )
    }

    return (
      <video
        src={currentMedia.src}
        className="w-full h-full object-cover"
        controls
        autoPlay={false}
        loop
        muted
        playsInline
        onMouseEnter={(e) => {
          if (isAutoPlaying) e.currentTarget.play()
        }}
        onMouseLeave={(e) => {
          if (isAutoPlaying) {
            e.currentTarget.pause()
            e.currentTarget.currentTime = 0
          }
        }}
        onError={(e) => {
          const target = e.target as HTMLVideoElement
          const parent = target.parentElement
          if (parent) {
            parent.innerHTML = `
              <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-secondary/20 to-secondary/30">
                <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg class="w-8 h-8 sm:w-10 sm:h-10 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p class="text-center text-sm text-muted-foreground">Vídeo não disponível</p>
              </div>
            `
          }
        }}
      />
    )
  }

  return (
    <div 
      className="relative group w-full h-full"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main Media Container - Responsivo */}
      <div className="aspect-square w-full overflow-hidden rounded-xl sm:rounded-2xl bg-secondary">
        {renderMedia()}
      </div>

      {/* Navigation Buttons - Visíveis apenas em hover e sempre em mobile */}
      {hasMedia && media.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className={cn(
              "absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center text-foreground transition-all duration-300 hover:bg-card border border-border/50",
              "sm:opacity-0 sm:group-hover:opacity-100" // Esconde em desktop, mostra em hover
            )}
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={goToNext}
            className={cn(
              "absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center text-foreground transition-all duration-300 hover:bg-card border border-border/50",
              "sm:opacity-0 sm:group-hover:opacity-100"
            )}
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </>
      )}

      {/* Image Counter - Mostra sempre se tiver múltiplas imagens */}
     

      {/* Thumbnails - Responsivo */}
      {hasMedia && media.length > 1 && (
        <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4 justify-center overflow-x-auto pb-2 scrollbar-thin">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
              className={cn(
                "flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300",
                index === currentIndex
                  ? "border-primary ring-2 ring-primary/30 scale-105"
                  : "border-transparent opacity-70 hover:opacity-100 hover:scale-105"
              )}
              aria-label={`Ver mídia ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            >
              {item.type === "image" ? (
                <img
                  src={item.src || getPlaceholderImage()}
                  alt={`Thumbnail ${index + 1} - ${productName}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = getPlaceholderImage()
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-primary rounded-full" />
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      )}
      
      {/* Video Play Button Overlay (apenas para vídeos) */}
      {currentMedia?.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
        </div>
        
      )}

      <div className="p-4">
       {hasMedia && media.length > 1 && (
        <div className="
      absolute
      bottom-1 sm:bottom-5
      left-1/2 -translate-x-1/2
      flex items-center justify-center
      px-3 py-1
      rounded-full
      bg-card/90
      text-xs sm:text-sm
      font-medium
      border border-border/50
      backdrop-blur
      shadow-sm
    ">
          {currentIndex + 1} / {media.length}
        </div>
      )}
      </div>
    </div>
    
  )
}