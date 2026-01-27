import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { Heart, Sparkles, Truck } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp"
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
            <WhatsAppButton
        message="Olá, Danielle!"
        buttonColor={'#25D366'}
        buttonText=""
        position="bottom-right"
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Feito à mão com amor
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Sandálias que contam <br className="hidden md:block" />
            <span className="text-primary">sua história</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 text-pretty">
            Cada peça é única, feita artesanalmente para você. 
            Conforto, estilo e originalidade em cada passo.
          </p>
          <a
            href="#catalogo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Ver Coleção
            <Sparkles className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Feito à Mão</h3>
                <p className="text-sm text-muted-foreground">Cada peça é única</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Envio Nacional</h3>
                <p className="text-sm text-muted-foreground">Para todo o Brasil</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Qualidade Premium</h3>
                <p className="text-sm text-muted-foreground">Materiais selecionados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalogo" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa Coleção
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Sandálias artesanais feitas com carinho. Escolha a sua e entre em contato pelo WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre a euquefiz
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A euquefiz nasceu do amor pelo artesanato e pela moda sustentável. 
              Cada sandália é feita à mão com atenção aos detalhes, garantindo que 
              você tenha uma peça única e especial.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Acreditamos que a moda pode ser consciente sem perder o estilo. 
              Nossos materiais são cuidadosamente selecionados para oferecer 
              conforto, durabilidade e beleza.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-serif text-xl font-bold text-foreground mb-2">euquefiz</p>
          <p className="text-sm text-muted-foreground">
            © 2026 euquefiz. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
