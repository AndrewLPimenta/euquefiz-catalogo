"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
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

  // Reset para primeira imagem quando a cor mudar
  useEffect(() => {
    setCurrentIndex(0)
  }, [selectedColorName])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1))
  }

  const currentMedia = media[currentIndex]

  return (
    <div className="relative group">
      <div className="aspect-square overflow-hidden rounded-xl bg-secondary">
        {currentMedia.type === "image" ? (
          <Image
            src={currentMedia.src || "/placeholder.svg"}
            alt={currentMedia.alt || productName}
            width={600}
            height={600}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <video
            src={currentMedia.src}
            className="w-full h-full object-cover"
            controls
            playsInline
          />
        )}
      </div>

      {media.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-card"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-card"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Thumbnails */}
      <div className="flex gap-2 mt-3 justify-center">
        {media.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300",
              index === currentIndex
                ? "border-primary ring-2 ring-primary/30"
                : "border-transparent opacity-60 hover:opacity-100"
            )}
            aria-label={`Ver mídia ${index + 1}`}
          >
            {item.type === "image" ? (
              <Image
                src={item.src || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <Play className="w-4 h-4 text-muted-foreground" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
