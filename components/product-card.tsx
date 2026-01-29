"use client"

import { useState } from "react"
import { ProductCarousel } from "./product-carousel"
import { cn } from "@/lib/utils"
import { Heart, ShoppingBag, ZoomIn, Check, Star } from "lucide-react"
import { generateWhatsAppLink } from "@/lib/whatsapp"
import { FaWhatsapp } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

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
  rating?: number
  reviews?: number
}

interface ProductCardProps {
  product: Product
  onViewDetails?: () => void
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null)
  const [selectedColor, setSelectedColor] = useState<ColorOption>(product.colors[0])
  const [isLiked, setIsLiked] = useState(false)
  const [showZoom, setShowZoom] = useState(false)

  const currentMedia = selectedColor.media

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)
  }

  const message = `Olá! Tenho interesse na(s) sandália "${product.name}" na cor ${selectedColor.name}${
    selectedSize ? ` tamanho ${selectedSize}` : ""
  }. Poderia me ajudar?`

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
    >
      {/* Like button */}
      {/* <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
      >
        <Heart 
          className={cn(
            "w-5 h-5 transition-all",
            isLiked 
              ? "fill-red-500 text-red-500 scale-110" 
              : "text-muted-foreground group-hover:text-foreground"
          )} 
        />
      </button> */}

      {/* Badge for new/hot items */}
      {product.id === "1" && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold">
            Mais Vendido
          </span>
        </div>
      )}

      <div className="relative overflow-hidden">
        <ProductCarousel 
          media={currentMedia} 
          productName={product.name} 
          selectedColorName={selectedColor.name}
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* View details button on hover */}
        <button
          onClick={onViewDetails}
          className="absolute bottom-4 right-4 z-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/30"
          aria-label="Ver detalhes do produto"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            {/* Rating */}
            {(product.rating || product.reviews) && (
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < Math.floor(product.rating || 0) 
                          ? "fill-primary text-primary" 
                          : "fill-muted text-muted"
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews || 0} avaliações)
                </span>
              </div>
            )}
          </div>
          <span className="text-2xl font-bold text-primary whitespace-nowrap">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Description */}
        <div className="mb-6">
          <ul className="space-y-2.5">
            {product.description.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-3">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Colors */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-foreground">Cor disponível:</p>
            <span className="text-sm font-semibold text-primary ">{selectedColor.name}</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={cn(
                  "group relative w-11 h-11 rounded-full border-3 transition-all duration-300 hover:scale-110 hover:shadow-lg",
                  selectedColor.name === color.name
                    ? "border-primary ring-3 ring-primary/20 scale-110 shadow-lg"
                    : "border-background hover:border-primary/50"
                )}
                style={{ backgroundColor: color.hex }}
                title={color.name}
                aria-label={`Cor ${color.name}`}
              >
                {selectedColor.name === color.name && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className={cn(
                      "w-2.5 h-2.5 rounded-full",
                      color.hex === "#FFFFFF" || color.hex === "#F5F5DC" || color.hex === "#FAF9F6" 
                        ? "bg-foreground" 
                        : "bg-white"
                    )} />
                  </span>
                )}
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-foreground text-background px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                  {color.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <p className="text-sm font-medium text-foreground mb-3">Escolha o tamanho:</p>
          <div className="flex flex-wrap gap-2.5">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={cn(
                  "relative w-12 h-12 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105",
                  selectedSize === size
                    ? "bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                )}
                aria-label={`Tamanho ${size}`}
              >
                {size}
                {selectedSize === size && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center"
                  >
                    <Check className="w-3 h-3 text-white" />
                  </motion.div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href={generateWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full py-4 px-6 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Content */}
          <span className="relative flex items-center gap-3">
            <FaWhatsapp className="w-6 h-6" />
            <span>Comprar no WhatsApp</span>
          </span>
          
          {/* Animated arrow */}
          <ShoppingBag className="w-5 h-5 relative ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
        </a>

        {/* Quick actions */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            onClick={onViewDetails}
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <ZoomIn className="w-4 h-4" />
            Ver detalhes
          </button>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >

          </button>
        </div>
      </div>
    </motion.div>
  )
}