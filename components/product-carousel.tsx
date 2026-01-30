"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Play, HelpCircle } from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
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

export function ProductCarousel({
  media,
  productName,
  selectedColorName,
}: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  /* ------------------ Detecta mobile ------------------ */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  /* -------- Reset quando muda a cor -------- */
  useEffect(() => {
    setCurrentIndex(0)
  }, [selectedColorName])

  /* ------------------ Visibilidade ------------------ */
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(carouselRef, { amount: 0.6 })

  /* -------- Filtra apenas mídias válidas -------- */
  const validMedia = media.filter(item => item.src && item.src.trim() !== "")
  const hasValidMedia = validMedia.length > 0
  const currentMedia = hasValidMedia ? validMedia[currentIndex] : null

  /* -------- Ajusta índice se necessário -------- */
  useEffect(() => {
    if (currentIndex >= validMedia.length && validMedia.length > 0) {
      setCurrentIndex(0)
    }
  }, [currentIndex, validMedia.length])

  /* -------- Autoplay inteligente (10s invisível) -------- */
  useEffect(() => {
    if (
      validMedia.length <= 1 ||
      !isAutoPlaying ||
      !isInView ||
      !hasValidMedia
    ) return

    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % validMedia.length)
    }, 10000)

    return () => clearTimeout(timeout)
  }, [currentIndex, isAutoPlaying, isInView, validMedia.length, hasValidMedia])

  const goToPrevious = () => {
    if (!hasValidMedia) return
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev === 0 ? validMedia.length - 1 : prev - 1))
  }

  const goToNext = () => {
    if (!hasValidMedia) return
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev === validMedia.length - 1 ? 0 : prev + 1))
  }

  /* ---------------- Placeholder ---------------- */
  const getPlaceholderImage = () => {
    const size = isMobile ? 400 : 600
    return `https://placehold.co/${size}x${size}/f5f5f5/666666?text=${encodeURIComponent(
      productName
    )}`
  }

  /* ---------------- Render mídia ---------------- */
  const renderMedia = () => {
    // Caso não tenha nenhuma mídia válida
    if (!hasValidMedia) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-background-50/50 to-orange-50/50 p-6">
          <div className="w-16 h-16 rounded-full bg-gray-100/70 flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center">
            <p className="font-medium text-foreground mb-1">
              Cor disponível: <span className="text-gray-700">{selectedColorName}</span>
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              Ainda não temos a imagem desta cor
            </p>
            <a 
            href={`https://wa.me/5519997785025?text=${encodeURIComponent(`Olá! Gostaria de mais informações sobre a sandália ${productName} na cor ${selectedColorName}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-primary font-medium hover:text-amber-700 transition-colors mt-2"
          >
            <FaWhatsapp className="w-4 h-4" />
            Entre em contato para consultar
          </a>
          </div>
        </div>
      )
    }

    if (!currentMedia) return null

    if (currentMedia.type === "image") {
      return (
        <img
          src={currentMedia.src}
          alt={currentMedia.alt || productName}
          className="
            w-full h-full
            object-cover
            object-center
            transition-transform duration-500 ease-out
            group-hover:scale-[1.02]
          "
          onError={(e) => {
            (e.target as HTMLImageElement).src = getPlaceholderImage()
          }}
        />
      )
    }

    return (
      <video
        src={currentMedia.src}
        className="w-full h-full object-cover"
        controls
        muted
        playsInline
      />
    )
  }

  return (
    <div
      ref={carouselRef}
      className="relative group w-full"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* ---------------- Media Container ---------------- */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={hasValidMedia ? currentIndex : 'no-media'}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {renderMedia()}
          </motion.div>
        </AnimatePresence>

        {/* Botões de navegação (apenas se tiver mídia válida) */}
        {hasValidMedia && validMedia.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/90 backdrop-blur border opacity-0 group-hover:opacity-100 transition"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/90 backdrop-blur border opacity-0 group-hover:opacity-100 transition"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Play overlay (apenas se tiver mídia válida) */}
        {hasValidMedia && currentMedia?.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-black/50 flex items-center justify-center">
              <Play className="w-7 h-7 text-white" />
            </div>
          </div>
        )}

        {/* Contador (apenas se tiver mídia válida) */}
        {hasValidMedia && validMedia.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-card/90 text-xs border backdrop-blur">
            {currentIndex + 1} / {validMedia.length}
          </div>
        )}
      </div>

      {/* ---------------- Thumbnails ---------------- */}
      {media.length > 0 && (
        <div className="flex gap-3 mt-5 justify-center overflow-x-auto">
          {media.map((item, index) => {
            const isValid = item.src && item.src.trim() !== ""
            const actualIndex = validMedia.findIndex(m => m.src === item.src)
            const isActive = isValid && actualIndex === currentIndex
            
            return (
              <button
                key={index}
                onClick={() => {
                  if (isValid && actualIndex !== -1) {
                    setCurrentIndex(actualIndex)
                    setIsAutoPlaying(false)
                  }
                }}
                className={cn(
                  "w-14 h-14 rounded-lg overflow-hidden border-2 transition",
                  isValid
                    ? isActive
                      ? "border-primary scale-100"
                      : "border-transparent opacity-70 hover:opacity-100 hover:scale-105"
                    : "border-transparent opacity-40 cursor-not-allowed relative"
                )}
                disabled={!isValid}
                title={!isValid ? "Imagem não disponível - entre em contato" : ""}
              >
                {isValid ? (
                  item.type === "image" ? (
                    <img
                      src={item.src}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  ) : (
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                      <Play className="w-5 h-5 text-primary" />
                    </div>
                  )
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                    {/* <div className="text-center">
                      <HelpCircle className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                      <span className="text-[10px] text-amber-600 font-medium">Consultar</span>
                    </div> */}
                  </div>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}