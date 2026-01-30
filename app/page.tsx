"use client"

import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { Heart, Sparkles, Truck, ChevronRight, ChevronDown, Star, Shield, Package, ZoomIn } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProductModal } from "@/components/product-modal"
import { FaWhatsapp } from "react-icons/fa"
import { StarIcon } from "lucide-react"
import { Phone } from "lucide-react"
import { Instagram } from "lucide-react"
import { Mail } from "lucide-react"
import Image from "next/image"
import LogoEuquefiz from "@/public/euquefiz.png"
import { HeroGeometric } from "@/components/ui/shape-landing-hero"

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />
      <WhatsAppButton
        message="Olá, Danielle!"
        buttonColor={'#25D366'}
        buttonText=""
        position="bottom-right"
      />

      {/* Hero Section */}
 <section className="relative min-h-[100vh] w-full overflow-hidden flex items-center">
  {/* Background: HeroGeometric Component */}
  <div className="absolute inset-0 z-0">
    <HeroGeometric 
      badge=""
      title1=""
      title2=""
    />
  </div>

  {/* Overlay escuro suave para legibilidade */}
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/30 via-background/40 to-background/60" />
  
  {/* Conteúdo do seu hero section */}
  <div className="relative z-20 w-full">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full"
    >
      {/* Seu badge */}
      <motion.span
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          group relative inline-flex items-center gap-2
          px-6 py-3
          rounded-full
          bg-gradient-to-r
          from-primary/15
          via-accent/10
          to-primary/15
          backdrop-blur-md
          border border-primary/20
          text-primary
          text-sm sm:text-base
          font-semibold
          shadow-lg shadow-primary/10
          overflow-hidden
          mb-8
        "
      >
        {/* glow animado */}
        <span className="
          pointer-events-none
          absolute inset-0
          rounded-full
          bg-gradient-to-r
          from-primary/30
          via-accent/20
          to-primary/30
          opacity-0
          blur-xl
          transition-opacity duration-500
          group-hover:opacity-40
        " />

        {/* ícone */}
        <Sparkles className="relative z-10 w-4 h-4 animate-pulse" />

        {/* texto */}
        <span className="relative z-10 tracking-wide">
          Feito à mão com amor
        </span>
      </motion.span>

      {/* Títulos */}
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
        <span className="block">Sandálias que</span>
        <span className="relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            contam histórias
          </span>
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </span>
      </h1>

      {/* Descrição */}
      <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed font-light bg-background/30 backdrop-blur-sm py-4 px-6 rounded-2xl">
        Cada peça é uma obra de arte única, cuidadosamente confeccionada à mão para celebrar sua individualidade.
        Conforto, estilo e autenticidade em cada passo da sua jornada.
      </p>

      {/* Botões */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
        <motion.button
          type="button"
          onClick={() => scrollToSection("catalogo")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="
            inline-flex
            w-full sm:w-auto
            items-center
            justify-center
            gap-3
            px-8
            py-4
            rounded-full
            bg-gradient-to-r
            from-primary
            to-accent
            text-white
            font-semibold
            shadow-lg
            hover:shadow-primary/30
            transition-all
            cursor-pointer
            pointer-events-auto
            backdrop-blur-sm
          "
        >
          <span className="flex items-center gap-3 pointer-events-none">
            Explorar Coleção
            <ChevronDown className="w-5 h-5" />
          </span>
        </motion.button>

        <motion.button
          type="button"
          onClick={() => scrollToSection("sobre")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="
            inline-flex
            w-full sm:w-auto
            items-center
            justify-center
            gap-3
            px-8
            py-4
            rounded-full
            bg-white/90
            backdrop-blur-md
            border-2
            border-primary/20
            font-semibold
            hover:bg-primary/5
            transition-all
            cursor-pointer
            pointer-events-auto
            shadow-lg
          "
        >
          <span className="flex items-center gap-3 pointer-events-none">
            Nossa História
            <Sparkles className="w-5 h-5" />
          </span>
        </motion.button>
      </div>
    </motion.div>

    {/* Scroll indicator */}
    {/* <motion.button
      onClick={() => scrollToSection("catalogo")}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <ChevronDown className="w-6 h-6 text-primary bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg" />
    </motion.button> */}
  </div>

  {/* Seus elementos flutuantes originais (opcionais, já tem no HeroGeometric) */}
  <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse z-0" />
  <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000 z-0" />
</section>

      {/* Features */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-card to-background border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Feito à Mão</h3>
                  <p className="text-sm text-muted-foreground mt-1">Cada peça é única</p>
                </div>
              </div>
            </div>

            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-card to-background border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
              <div className="relative flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Qualidade Premium</h3>
                  <p className="text-sm text-muted-foreground mt-1">Materiais selecionados</p>
                </div>
              </div>
            </div>

            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-card to-background border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
              <div className="relative flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                  <Truck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Envio Nacional</h3>
                  <p className="text-sm text-muted-foreground mt-1">Para todo o Brasil</p>
                </div>
              </div>
            </div>

            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-card to-background border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
              <div className="relative flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                  <Package className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Embalagem Especial</h3>
                  <p className="text-sm text-muted-foreground mt-1">Presente perfeito</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <section id="catalogo" className="py-20 relative scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wider uppercase">
              Coleção Exclusiva
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Nossas <span className="text-primary">Criações</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Descubra sandálias artesanais que combinam tradição e modernidade.
              Cada par é feito sob medida para você.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="relative"
              >
                <ProductCard
                  product={product}
                  onViewDetails={() => setSelectedProduct(product)}
                />
              </div>
            ))}
          </div>

          {/* Catalog Stats */}


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-20 pt-12 border-t border-border/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Feito à mão</div>
              </div>

              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte</div>
              </div>

              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Clientes satisfeitos</div>
              </div>

              {/* ⭐ Avaliação */}
              <div>
                <div className="flex flex-col items-center gap-4 mb-2">
                  <span className="text-lg font-bold text-primary">Avaliação média</span>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  {/* Avaliação média */}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-card to-background rounded-3xl p-8 md:p-12 border border-primary/20 shadow-2xl shadow-primary/10"
          >
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para dar o próximo passo?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato pelo WhatsApp para tirar dúvidas, personalizar sua sandália ou fazer seu pedido.
            </p>
            <a
              href="https://wa.me/5519997785025?text=Olá, Dani! Gostaria de saber mais sobre as sandálias."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105"
            >
              <FaWhatsapp className="h-6 w-6" />
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gradient-to-b from-card to-background scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Coluna do Texto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wider uppercase">
                Nossa História
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 lg:mb-8">
                Sobre a <span className="text-primary">euquefiz</span>
              </h2>
              <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  A <span className="font-semibold text-foreground">euquefiz</span> nasceu da fusão entre amor pelo artesanato tradicional e
                  o desejo de criar moda sustentável e significativa.
                </p>
                <p className="leading-relaxed">
                  Cada sandália conta uma história, desde a escolha dos materiais até o acabamento final.
                </p>
                <p className="leading-relaxed">
                  Nossa missão é oferecer mais do que calçados - oferecemos expressão pessoal,
                  conforto genuíno e conexão com técnicas artesanais que passam de geração em geração.
                </p>
              </div>

              <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-border/50">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Star className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base">Materiais sustentáveis e duráveis</span>
                </div>
                <div className="flex items-center gap-2 text-foreground font-semibold mt-3">
                  <Heart className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base">Produção ética e responsável</span>
                </div>
              </div>
            </motion.div>

            {/* Coluna da Imagem - com container seguro */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:pl-8 xl:pl-12"
            >
              <div className="relative">
                {/* Container principal com overflow hidden */}
                <div className="relative aspect-square rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20" />

                  {/* Conteúdo centralizado */}
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                      <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 text-center">
                      Artesanato com Alma
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-center max-w-xs sm:max-w-sm">
                      Cada detalhe importa, cada linha conta uma história.
                    </p>
                  </div>
                </div>

                {/* Elementos de background - DENTRO do container relativo */}
                <div className="absolute -bottom-4 -left-4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-accent/5 rounded-full blur-xl -z-10" />
                <div className="absolute -top-4 -right-4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-primary/5 rounded-full blur-xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
            size="sm"
          />
        )}
      </AnimatePresence>

      {/* Scroll to top */}
      {/* {isScrolled && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-12 right-146 w-12 h-12 rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center z-40 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 rotate-270" />
        </motion.button>
      )} */}

      {/* Footer */}
      <footer className="pt-16 pb-8 border-t border-border/50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Conteúdo principal */}
          <div className="grid gap-10 md:grid-cols-3 mb-12">

            {/* Logo + descrição */}
            <div>
              <Image
                src={LogoEuquefiz}
                alt="Euquefiz"
                width={40}
                height={40}
                className="mb-4"
                priority={false}
              />

              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Produtos feitos com amor, carinho e muita dedicação.
              </p>
            </div>

            {/* Links rápidos */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Links rápidos
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("catalogo")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Coleção
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("sobre")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Sobre
                  </button>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Contato
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <a
                    href="tel:+5519997785025"
                    className="hover:text-primary transition-colors"
                  >
                    (19) 99778-5025
                  </a>

                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>dani.franca002@gmail.com</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Instagram className="h-4 w-4 text-primary" />
                  <span>@euquefiz_bydani</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Linha inferior */}
          <div className="pt-8 border-t border-border/30 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} euquefiz. Todos os direitos reservados.
            </p>
          </div>

        </div>
      </footer>
    </div>

    
  )
}