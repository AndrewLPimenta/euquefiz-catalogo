"use client"

import { useState, useEffect, useRef } from "react"
import { X, Heart, Star, ChevronLeft, ChevronRight, Check, ShoppingBag, Truck, Shield, Package, Image as ImageIcon } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { generateWhatsAppLink } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

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

interface ProductModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

export function ProductModal({ product, isOpen, onClose, size = "lg" }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null)
  const [selectedColor, setSelectedColor] = useState<ColorOption>(product.colors[0] || {
    name: "Padrão",
    hex: "#666666",
    media: []
  })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const modalContentRef = useRef<HTMLDivElement>(null)


  const getSizeClasses = () => {
    const baseClasses = "w-full bg-card rounded-none sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl"
    
    switch(size) {
      case "sm":
        return cn(
          baseClasses,
          "max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl", // Mobile: full, depois cresce
          "max-h-[80vh] sm:max-h-[80vh]"
        )
      case "md":
        return cn(
          baseClasses,
          "max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl",
          "max-h-[90vh] sm:max-h-[85vh]"
        )
      case "lg":
        return cn(
          baseClasses,
          "max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl",
          "max-h-[90vh] sm:max-h-[90vh]"
        )
      case "xl":
        return cn(
          baseClasses,
          "max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl",
          "max-h-[95vh]"
        )
      case "full":
        return cn(
          baseClasses,
          "max-w-full h-full rounded-none", // Tela cheia em mobile
          "sm:max-w-2xl sm:h-auto sm:max-h-[95vh] sm:rounded-xl",
          "md:max-w-3xl md:max-h-[90vh] md:rounded-2xl",
          "lg:max-w-5xl lg:max-h-[85vh] lg:rounded-3xl"
        )
      default:
        return cn(
          baseClasses,
          "max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl",
          "max-h-[90vh]"
        )
    }
  }

  // Prevenir scroll do body quando modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '0' // Prevenir shift do scrollbar
      modalContentRef.current?.focus()
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = ''
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = ''
    }
  }, [isOpen])

  // Fechar modal com ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  // Garantir que sempre tenha dados válidos
  const currentMedia = selectedColor?.media || []
  const hasMedia = currentMedia.length > 0 && currentMedia.every(m => m.src && m.src.trim() !== "")
  const currentImage = hasMedia && currentImageIndex < currentMedia.length ? currentMedia[currentImageIndex] : null

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)
  }

  const message = `Olá! Tenho interesse na sandália "${product.name}" na cor ${selectedColor.name}${
    selectedSize ? ` tamanho ${selectedSize}` : ""
  }. Poderia me ajudar com mais informações?`

  const handlePrevImage = () => {
    if (!hasMedia) return
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentMedia.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    if (!hasMedia) return
    setCurrentImageIndex((prev) => 
      prev === currentMedia.length - 1 ? 0 : prev + 1
    )
  }

  const handleColorSelect = (color: ColorOption) => {
    setSelectedColor(color)
    setCurrentImageIndex(0)
  }

  // Placeholder responsivo
  const getPlaceholderImage = () => {
    const width = window.innerWidth < 640 ? 400 : window.innerWidth < 1024 ? 600 : 800
    const height = width
    return `https://placehold.co/${width}x${height}/f5f5f5/666666?text=${encodeURIComponent(product.name)}&font=playfair`
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // Renderizar imagem principal
  const renderMainImage = () => {
    if (!hasMedia || !currentImage) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-secondary/20 to-secondary/40 p-4 sm:p-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
            <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary/50" />
          </div>
          <p className="text-center text-xs sm:text-sm md:text-base text-muted-foreground px-4">
            Imagem da sandália <span className="font-semibold">{product.name}</span><br />
            na cor <span className="font-semibold">{selectedColor.name}</span>
          </p>
        </div>
      )
    }

    if (currentImage.type === "image") {
      return (
        <img
          src={currentImage.src || getPlaceholderImage()}
          alt={currentImage.alt || `${product.name} - ${selectedColor.name}`}
          className="w-full h-full object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = getPlaceholderImage()
            target.className = "w-full h-full object-contain"
          }}
        />
      )
    }

    return (
      <video
        src={currentImage.src}
        className="w-full h-full object-contain"
        controls
        autoPlay
        loop
        muted
        playsInline
      />
    )
  }

  return (
    <>
      {/* Backdrop FIXED - Sempre full screen */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] animate-in fade-in duration-300"
        onClick={handleBackdropClick}
      />

      {/* Container do Modal - Centralizado e responsivo */}
        <div 
    className="fixed inset-0 z-[101] flex items-center justify-center p-0 sm:p-2 md:p-3 lg:p-4 xl:p-6 2xl:p-8"
    onClick={handleBackdropClick}
    style={{
      WebkitOverflowScrolling: 'touch',
      overscrollBehavior: 'contain'
    }}
  >
    {/* Conteúdo do Modal - AQUI AUMENTAMOS O BORDER RADIUS */}
    <div 
      ref={modalContentRef}
      className={cn(
        getSizeClasses(),
        "animate-in slide-in-from-bottom-8 duration-300",
        "flex flex-col",
        "rounded-3xl md:rounded-[32px] lg:rounded-[40px]" 
      )}
      onClick={(e) => e.stopPropagation()}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        border: '2px solid rgba(255,255,255,0.1)', // Borda sutil para destacar
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' // Sombra mais pronunciada
      }}
    >
          {/* Cabeçalho com botões fixos */}
          <div className="sticky top-0 z-20 flex justify-between items-center p-2 sm:p-3 md:p-4 bg-card/90 backdrop-blur-sm border-b border-border/50">
            <button
              onClick={() => setIsLiked(!isLiked)}
            //   className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors hover:scale-110 border border-border/50"
              aria-label={isLiked ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            >
              {/* <Heart 
                className={cn(
                  "w-4 h-4 sm:w-5 sm:h-5 transition-all",
                  isLiked 
                    ? "fill-red-500 text-red-500 scale-110" 
                    : "text-muted-foreground hover:text-foreground"
                )} 
              /> */}
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors hover:scale-110 border border-border/50"
              aria-label="Fechar"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Conteúdo com scroll */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Coluna da Esquerda - Imagens */}
              <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 bg-gradient-to-br from-secondary/10 to-background">
                {/* Container da imagem principal */}
                <div className="relative aspect-square w-full max-w-full mx-auto rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/20 to-secondary/30 mb-4 sm:mb-6">
                  {renderMainImage()}

                  {/* Navegação de imagens */}
                  {hasMedia && currentMedia.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-all hover:scale-110 border border-border/50"
                        aria-label="Imagem anterior"
                      >
                        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-all hover:scale-110 border border-border/50"
                        aria-label="Próxima imagem"
                      >
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </button>
                    </>
                  )}

                  {/* Contador */}
                  {hasMedia && currentMedia.length > 1 && (
                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-xs sm:text-sm font-medium border border-border/50">
                      {currentImageIndex + 1} / {currentMedia.length}
                    </div>
                  )}
                </div>

                {/* Miniaturas */}
                {hasMedia && currentMedia.length > 1 && (
                  <div className="mb-4 sm:mb-6">
                    <p className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">Galeria:</p>
                    <div className="flex gap-1.5 sm:gap-2 md:gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
                      {currentMedia.map((media, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={cn(
                            "relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all",
                            currentImageIndex === index
                              ? "border-primary ring-1 sm:ring-2 ring-primary/30"
                              : "border-transparent hover:border-primary/50"
                          )}
                          aria-label={`Ver imagem ${index + 1}`}
                        >
                          {media.type === "image" ? (
                            <img
                              src={media.src}
                              alt={`${product.name} - imagem ${index + 1}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.src = getPlaceholderImage()
                              }}
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-primary/20 rounded-full flex items-center justify-center">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 bg-primary rounded-full" />
                              </div>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cores */}
                <div>
                  <p className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">Cores disponíveis:</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5">
                    {(product.colors && product.colors.length > 0 ? product.colors : [
                      { name: "Padrão", hex: "#666666", media: [] }
                    ]).map((color) => (
                      <button
                        key={color.name}
                        onClick={() => handleColorSelect(color)}
                        className={cn(
                          "group relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full border-2 transition-all duration-300 hover:scale-110",
                          selectedColor.name === color.name
                            ? "border-primary ring-1 sm:ring-2 ring-primary/20 scale-110 shadow"
                            : "border-background hover:border-primary/50"
                        )}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                        aria-label={`Cor ${color.name}`}
                      >
                        {selectedColor.name === color.name && (
                          <span className="absolute inset-0 flex items-center justify-center">
                            <span className={cn(
                              "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full",
                              color.hex === "#FFFFFF" || color.hex === "#F5F5DC" || color.hex === "#FAF9F6" 
                                ? "bg-foreground" 
                                : "bg-white"
                            )} />
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Coluna da Direita - Detalhes */}
              <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 overflow-y-auto">
                <div className="mb-3 sm:mb-4 md:mb-6">
                  {/* Rating */}
                  {(product.rating || product.reviews) && (
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={cn(
                              "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5",
                              i < Math.floor(product.rating || 0) 
                                ? "fill-primary text-primary" 
                                : "fill-muted text-muted"
                            )}
                          />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        ({product.reviews || 0} avaliações)
                      </span>
                    </div>
                  )}

                  <h2 
                    id="modal-title"
                    className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4"
                  >
                    {product.name}
                  </h2>
                  
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4 md:mb-6">
                    {formatPrice(product.price)}
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 md:mb-6">
                    Sandália artesanal feita à mão com materiais de alta qualidade e atenção aos detalhes.
                  </p>
                </div>

                {/* Descrição */}
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <h3 className="font-semibold text-foreground mb-2 sm:mb-3 md:mb-4">Características:</h3>
                  <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                    {product.description.map((item, index) => (
                      <li key={index} className="text-xs sm:text-sm md:text-base text-muted-foreground flex items-start gap-1.5 sm:gap-2 md:gap-3">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tamanhos */}
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                    <h3 className="font-semibold text-foreground">Selecione o tamanho:</h3>
                    <button className="text-xs sm:text-sm text-primary hover:underline">
                      Guia de tamanhos
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-md sm:rounded-lg text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105 relative",
                          selectedSize === size
                            ? "bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                        )}
                        aria-label={`Tamanho ${size}`}
                      >
                        {size}
                        {selectedSize === size && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full flex items-center justify-center">
                            <Check className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Features */}
                {/* <div className="mb-4 sm:mb-6 md:mb-8 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent border border-border">
  <h3 className="font-semibold text-foreground mb-2 sm:mb-3 md:mb-4">Lorem Ipsum Features</h3>
  
  <div className="mb-3 sm:mb-4 md:mb-6">
    <p className="text-xs sm:text-sm text-muted-foreground mb-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua.
    </p>
  </div>

  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-md sm:rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Shield className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
      </div>
      <div>
        <p className="text-xs sm:text-sm font-medium">Duis Aute Irure</p>
        <p className="text-xs text-muted-foreground">In reprehenderit</p>
      </div>
    </div>
    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-md sm:rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Truck className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
      </div>
      <div>
        <p className="text-xs sm:text-sm font-medium">Excepteur Sint</p>
        <p className="text-xs text-muted-foreground">Occaecat cupidatat</p>
      </div>
    </div>
    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-md sm:rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Package className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
      </div>
      <div>
        <p className="text-xs sm:text-sm font-medium">Deserunt Mollit</p>
        <p className="text-xs text-muted-foreground">Anim id est laborum</p>
      </div>
    </div>
    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-md sm:rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
      </div>
      <div>
        <p className="text-xs sm:text-sm font-medium">Sed Ut Perspiciatis</p>
        <p className="text-xs text-muted-foreground">Unde omnis iste</p>
      </div>
    </div>
  </div>

  <div className="text-xs sm:text-sm text-muted-foreground space-y-1.5 sm:space-y-2">
    <p>• Ut enim ad minima veniam, quis nostrum exercitationem</p>
    <p>• Ullam corporis suscipit laboriosam, nisi ut aliquid ex ea</p>
    <p>• Quis autem vel eum iure reprehenderit qui in ea voluptate</p>
    <p>• Velit esse quam nihil molestiae consequatur</p>
  </div>
</div> */}

                {/* Botões de Ação */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <a
                    href={generateWhatsAppLink(message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-lg sm:rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 hover:shadow-lg sm:hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 text-xs sm:text-sm md:text-base"
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    <span>Comprar no WhatsApp</span>
                    <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
                  </a>

                  <button
                    onClick={onClose}
                    className="w-full py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-lg sm:rounded-xl border border-primary/20 text-foreground font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-xs sm:text-sm md:text-base"
                  >
                    Continuar navegando
                  </button>
                </div>

                {/* Informações de estoque */}
                <div className="mt-3 sm:mt-4 md:mt-6 pt-3 sm:pt-4 md:pt-6 border-t border-border/50">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground">Disponibilidade:</span>
                    <span className="font-semibold text-green-600">Em estoque</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm mt-1 sm:mt-2">
                    <span className="text-muted-foreground">Entrega estimada:</span>
                    <span className="font-semibold">5-7 dias úteis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}