export interface MediaItem {
  type: "image" | "video"
  src: string
  alt?: string
}

export interface ColorOption {
  name: string
  hex: string
  media: MediaItem[]
}

export interface Product {
  id: string
  name: string
  price: number
  description: string[]
  colors: ColorOption[]
  sizes: number[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Sandália Trançada",
    price: 189.90,
    description: [
      "Couro sintético de alta qualidade",
      "Solado antiderrapante",
      "Palmilha anatômica macia",
      "Tiras trançadas à mão",
      "Ideal para o dia a dia"
    ],
    colors: [
      { 
        name: "Caramelo", 
        hex: "#C19A6B",
        media: [
          { type: "image", src: "/images/sandalia-1-1.jpg", alt: "Sandália trançada caramelo vista superior" },
          { type: "image", src: "/images/sandalia-1-2.jpg", alt: "Sandália trançada caramelo vista lateral" },
        ]
      },
      { 
        name: "Marrom", 
        hex: "#8B4513",
        media: [
          { type: "image", src: "/images/sandalia-1-marrom-1.jpg", alt: "Sandália trançada marrom vista superior" },
          { type: "image", src: "/images/sandalia-1-marrom-2.jpg", alt: "Sandália trançada marrom vista lateral" },
        ]
      },
      { 
        name: "Preto", 
        hex: "#1C1C1C",
        media: [
          { type: "image", src: "/images/sandalia-1-preto-1.jpg", alt: "Sandália trançada preta vista superior" },
          { type: "image", src: "/images/sandalia-1-preto-2.jpg", alt: "Sandália trançada preta vista lateral" },
        ]
      },
    ],
    sizes: [34, 35, 36, 37, 38, 39, 40, 41],
  },
  {
    id: "2",
    name: "Sandália Salto Bloco",
    price: 229.90,
    description: [
      "Salto bloco de 5cm confortável",
      "Tiras delicadas no tornozelo",
      "Fecho em fivela dourada",
      "Acabamento premium",
      "Perfeita para eventos"
    ],
    colors: [
      { 
        name: "Rosé", 
        hex: "#E8C4C4",
        media: [
          { type: "image", src: "/images/sandalia-2-1.jpg", alt: "Sandália salto bloco rosé vista frontal" },
          { type: "image", src: "/images/sandalia-2-2.jpg", alt: "Sandália salto bloco rosé vista lateral" },
          { type: "video", src: "/videos/seu-video.mp4" } // quando for video!
        ]
      },
      { 
        name: "Nude", 
        hex: "#E3BC9A",
        media: [
          { type: "image", src: "/images/sandalia-2-nude-1.jpg", alt: "Sandália salto bloco nude vista frontal" },
          { type: "image", src: "/images/sandalia-2-nude-2.jpg", alt: "Sandália salto bloco nude vista lateral" },
        ]
      },
      { 
        name: "Branco", 
        hex: "#FFFFFF",
        media: [
          { type: "image", src: "/images/sandalia-2-branco-1.jpg", alt: "Sandália salto bloco branca vista frontal" },
          { type: "image", src: "/images/sandalia-2-branco-2.jpg", alt: "Sandália salto bloco branca vista lateral" },
        ]
      },
      { 
        name: "Preto", 
        hex: "#1C1C1C",
        media: [
          { type: "image", src: "/images/sandalia-2-preto-1.jpg", alt: "Sandália salto bloco preta vista frontal" },
          { type: "image", src: "/images/sandalia-2-preto-2.jpg", alt: "Sandália salto bloco preta vista lateral" },
        ]
      },
    ],
    sizes: [34, 35, 36, 37, 38, 39, 40, 41],
  },
  {
    id: "3",
    name: "Sandália Plataforma Verão",
    price: 199.90,
    description: [
      "Plataforma de 4cm em cortiça",
      "Detalhes em palha natural",
      "Super leve e confortável",
      "Tiras ajustáveis",
      "Estilo boho e versátil"
    ],
    colors: [
      { 
        name: "Off-White", 
        hex: "#FAF9F6",
        media: [
          { type: "image", src: "/images/sandalia-3-1.jpg", alt: "Sandália plataforma off-white vista superior" },
          { type: "image", src: "/images/sandalia-3-2.jpg", alt: "Sandália plataforma off-white vista lateral" },
        ]
      },
      { 
        name: "Bege", 
        hex: "#F5F5DC",
        media: [
          { type: "image", src: "/images/sandalia-3-bege-1.jpg", alt: "Sandália plataforma bege vista superior" },
          { type: "image", src: "/images/sandalia-3-bege-2.jpg", alt: "Sandália plataforma bege vista lateral" },
        ]
      },
      { 
        name: "Caramelo", 
        hex: "#C19A6B",
        media: [
          { type: "image", src: "/images/sandalia-3-caramelo-1.jpg", alt: "Sandália plataforma caramelo vista superior" },
          { type: "image", src: "/images/sandalia-3-caramelo-2.jpg", alt: "Sandália plataforma caramelo vista lateral" },
        ]
      },
    ],
    sizes: [34, 35, 36, 37, 38, 39, 40, 41],
  },
  {
    id: "4",
    name: "Slide Minimalista Fivela",
    price: 159.90,
    description: [
      "Design minimalista elegante",
      "Fivela dourada ajustável",
      "Couro ecológico premium",
      "Palmilha extra macia",
      "Combina com tudo"
    ],
    colors: [
      { 
        name: "Preto", 
        hex: "#1C1C1C",
        media: [
          { type: "image", src: "/images/sandalia-4-1.jpg", alt: "Slide minimalista preto vista superior" },
          { type: "image", src: "/images/sandalia-4-2.jpg", alt: "Slide minimalista preto vista lateral" },
        ]
      },
      { 
        name: "Caramelo", 
        hex: "#C19A6B",
        media: [
          { type: "image", src: "/images/sandalia-4-caramelo-1.jpg", alt: "Slide minimalista caramelo vista superior" },
          { type: "image", src: "/images/sandalia-4-caramelo-2.jpg", alt: "Slide minimalista caramelo vista lateral" },
        ]
      },
      { 
        name: "Branco", 
        hex: "#FFFFFF",
        media: [
          { type: "image", src: "/images/sandalia-4-branco-1.jpg", alt: "Slide minimalista branco vista superior" },
          { type: "image", src: "/images/sandalia-4-branco-2.jpg", alt: "Slide minimalista branco vista lateral" },
        ]
      },
    ],
    sizes: [34, 35, 36, 37, 38, 39, 40, 41],
  },
]
