"use client"

import { useState } from "react"
import { ProductCarousel } from "./product-carousel"
import { cn } from "@/lib/utils"
import { MessageCircle } from "lucide-react"
import { generateWhatsAppLink } from "@/lib/whatsapp"

interface MediaItem {
  type: "image" | "video"
  src: string
  alt?: string
}

interface ColorOption {
  name: string
  hex: string
  media: MediaItem[]
}

interface Product {
  id: string
  name: string
  price: number
  description: string[]
  colors: ColorOption[]
  sizes: number[]
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null)
  const [selectedColor, setSelectedColor] = useState<ColorOption>(product.colors[0])

  const currentMedia = selectedColor.media

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)
  }


const message = `Olá! Tenho interesse na sandália "${product.name}" na cor ${selectedColor.name}${
  selectedSize ? ` tamanho ${selectedSize}` : ""
}. Poderia me ajudar?`


  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <ProductCarousel 
          media={currentMedia} 
          productName={product.name} 
          selectedColorName={selectedColor.name}
        />
      </div>

      <div className="px-6 pb-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-serif text-xl font-semibold text-foreground">
            {product.name}
          </h3>
          <span className="text-xl font-semibold text-primary whitespace-nowrap">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Description */}
        <div className="mb-5">
          <ul className="space-y-1.5">
            {product.description.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Colors */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2.5">
            <p className="text-sm font-medium text-foreground">Cor:</p>
            <span className="text-sm text-primary font-medium">{selectedColor.name}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={cn(
                  "group relative w-9 h-9 rounded-full border-2 transition-all duration-200",
                  selectedColor.name === color.name
                    ? "border-primary ring-2 ring-primary/30 scale-110"
                    : "border-border hover:scale-105 hover:border-primary/50"
                )}
                style={{ backgroundColor: color.hex }}
                title={`Ver em ${color.name}`}
                aria-label={`Ver sandália na cor ${color.name}`}
              >
                {selectedColor.name === color.name && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className={cn(
                      "w-2.5 h-2.5 rounded-full",
                      color.hex === "#FFFFFF" || color.hex === "#F5F5DC" || color.hex === "#FAF9F6" ? "bg-foreground" : "bg-card"
                    )} />
                  </span>
                )}
                {/* Tooltip on hover */}
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-foreground text-background px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {color.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <p className="text-sm font-medium text-foreground mb-2.5 p-2">Tamanhos:</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={cn(
                  "w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200",
                  selectedSize === size
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
                aria-label={`Selecionar tamanho ${size}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* WhatsApp Button */}
       <a
  href={generateWhatsAppLink(message)}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full py-3 px-4 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
>
  <MessageCircle className="w-5 h-5" />
  Comprar via WhatsApp
</a>

      </div>
    </div>
  )
}
