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
  name: "Rasteira Bia",
  price: 89.90,
  description: [
    "Rasteira artesanal que une conforto e delicadeza",
    "Cabedal em modelo H laminado",
    "Material sintético",
    "Design leve e versátil",
    "Ideal para o dia a dia"
  ],
  colors: [
    {
       name: "Rosé",
      hex: "#E8C4C4",
      
      media: [
        { type: "image", src: "/images/rasteira-bia/h-rose.svg", alt: "Rasteira Bia prata vista frontal" },
        { type: "image", src: "/images/rasteira-bia/v-rose.svg", alt: "Rasteira Bia prata vista frontal" },
      ]
    },
    {
      name: "Prata",
      hex: "#C0C0C0",
      media: [
        { type: "image", src: "/images/rasteira-bia/h-prata.svg", alt: "Rasteira Bia rosé vista frontal" },
        { type: "image", src: "/images/rasteira-bia/v-prata.svg", alt: "Rasteira Bia rosé vista frontal" },
      ]
    }
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},

// {
//   id: "2",
//   name: "Rasteira Luíza",
//   price: 99.90,
//   description: [
//     "Rasteira ideal para quem ama praticidade",
//     "Cabedal em H com aplicações metálicas prateadas",
//     "Material sintético",
//     "Confortável e estilosa",
//     "Perfeita para uso diário"
//   ],
//   colors: [
//     {
//       name: "Caramelo",
//       hex: "#B87333",
//       media: [
//         { type: "image", src: "", alt: "Rasteira Luíza caramelo vista frontal" }
//       ]
//     }
//   ],
//   sizes: [34, 35, 36, 37, 38, 39]
// },

{
  id: "3",
  name: "Rasteira Letícia",
  price: 99.90,
  description: [
    "Design clássico e sofisticado",
    "Cabedal em H com detalhe oval dourado",
    "Material sintético",
    "Modelo atemporal",
    "Elegância para qualquer ocasião"
  ],
  colors: [
    {
      name: "Preta",
      hex: "#1C1C1C",
      media: [
        { type: "image", src: "images/rasteira-leticia/h-preto.svg", alt: "Rasteira Letícia preta vista frontal" },
        { type: "image", src: "images/rasteira-leticia/v-preto.svg", alt: "Rasteira Letícia preta vista frontal" },
      ]
    },
    {
      name: "Caramelo",
      hex: "#B87333",
      media: [
        { type: "image", src: "images/rasteira-leticia/h-caramelo.svg", alt: "Rasteira Letícia preta vista frontal" },
        { type: "image", src: "images/rasteira-leticia/v-caramelo.svg", alt: "Rasteira Letícia preta vista frontal" },
      ]
    }
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},

{
  id: "4",
  name: "Rasteira Glow",
  price: 99.90,
  description: [
    "Rasteira confortável e elegante",
    "Cabedal em pedrarias com design arabesco dourado",
    "Material sintético",
    "Valoriza produções do dia a dia",
    "Ideal para ocasiões especiais"
  ],
  colors: [
    {
      name: "Caramelo",
      hex: "#B87333",
      media: [
        { type: "image", src: "images/rasteira-glow/h-caramelo.svg", alt: "Rasteira Glow caramelo vista frontal" },
        { type: "image", src: "images/rasteira-glow/v-caramelo.svg", alt: "Rasteira Glow caramelo vista frontal" },
      ]
    },
    {
      name: "Nude",
      hex: "#E3BC9A",
      media: [
        { type: "image", src: "", alt: "Rasteira Glow nude vista frontal" }
      ]
    }
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},

{
  id: "5",
  name: "Rasteira Cristal",
  price: 119.90,
  description: [
    "Modelo que traduz sofisticação",
    "Cabedal com aplicações de strass",
    "Material sintético",
    "Design marcante",
    "Ideal para looks elegantes"
  ],
  colors: [
    {
      name: "Ouro Light",
      hex: "#E6C27A",
      media: [
        { type: "image", src: "images/rasteira-cristal/h-ouro-light.svg" , alt: "Rasteira Cristal ouro light vista frontal" },
        { type: "image", src: "images/rasteira-cristal/v-ouro-light.svg" , alt: "Rasteira Cristal ouro light vista frontal" },
      ]
    }
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},

{
  id: "6",
  name: "Rasteira Pérola",
  price: 89.90,
  description: [
    "Design leve e elegante",
    "Tiras finas com detalhe frontal em esferas metálicas",
    "Material sintético",
    "Confortável e delicada",
    "Valoriza os pés"
  ],
  colors: [
    { name: "Rosé", 
      hex: "#E8C4C4", 
      media: [{ type: "image", src: "images/rasteira-perola/h-rose.svg", alt: "Rasteira Pérola caramelo" }, { type: "image", src: "images/rasteira-perola/v-rose.svg", alt: "Rasteira Pérola caramelo" }] },
    { name: "Preta", hex: "#1C1C1C", media: [{ type: "image", src: "", alt: "Rasteira Pérola preta" }] },
    { name: "Dourada", hex: "#D4AF37", media: [{ type: "image", src: "", alt: "Rasteira Pérola dourada" }] },
    { name: "Nude", hex: "#E3BC9A", media: [{ type: "image", src: "", alt: "Rasteira Pérola nude" }] },
    { name: "Caramelo", hex: "#B87333", media: [{ type: "image", src: "", alt: "Rasteira Pérola caramelo" }] },
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},

{
  id: "7",
  name: "Flatform Aura",
  price: 139.90,
  description: [
    "Flatform com visual marcante",
    "Cabedal em pedrarias com tiras largas ajustáveis",
    "Solado em PVC emborrachado",
    "Altura de 2,5cm",
    "Material sintético"
  ],
  colors: [
    { name: "Preta", hex: "#1C1C1C", media: [{ type: "image", src: "/images/flatform-aura/h-preto.svg", alt: "Flatform Alice preta" }, { type: "image", src: "/images/flatform-aura/v-preto.svg", alt: "Flatform Alice preta" }] },
    { name: "Caramelo", hex: "#B87333", media: [{ type: "image", src: "", alt: "Flatform Alice caramelo" }] }
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},

// {
//   id: "8",
//   name: "Flatform Dominique",
//   price: 119.90,
//   description: [
//     "Conforto, estilo e praticidade",
//     "Tiras cruzadas com aplicação de pirâmides douradas",
//     "Solado em PVC emborrachado",
//     "Altura de 2,5cm",
//     "Material sintético"
//   ],
//   colors: [
//     { name: "Preta", hex: "#1C1C1C", media: [{ type: "image", src: "", alt: "Flatform Dominique preta" }] },
//     { name: "Caramelo", hex: "#B87333", media: [{ type: "image", src: "", alt: "Flatform Dominique caramelo" }] }
//   ],
//   sizes: [34, 35, 36, 37, 38, 39]
// },

{
  id: "9",
  name: "Rasteira Magnólia",
  price: 129.90,
  description: [
    "Elegância e leveza em um só modelo",
    "Acabamento metalizado",
    "Detalhe central em pedrarias",
    "Tiras delicadas",
    "Material sintético"
  ],
  colors: [
    { name: "Dourado", hex: "#D4AF37", media: [{ type: "image", src: "/images/rasteira-magnolia/h-dourado.svg", alt: "Rasteira Magnólia prata" }, { type: "image", src: "/images/rasteira-magnolia/v-dourado.svg", alt: "Rasteira Magnólia prata" }] },
    // { name: "Dourado", hex: "#D4AF37", media: [{ type: "image", src: "", alt: "Rasteira Magnólia dourada" }] }
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},

{
  id: "10",
  name: "Rasteira Girassol",
  price: 119.90,
  description: [
    "Acabamento refinado",
    "Tiras cruzadas com pedrarias em diagonal",
    "Material sintético",
    "Ideal para looks casuais",
    "Conforto e estilo"
  ],
  colors: [
    { name: "Prata", hex: "#C0C0C0", media: [{ type: "image", src: "/images/rasteira-girassol/h-prata.svg", alt: "Rasteira Girassol prata" },{ type: "image", src: "/images/rasteira-girassol/v-prata.svg", alt: "Rasteira Girassol prata" }] },
    { name: "Dourado", hex: "#D4AF37", media: [{ type: "image", src: "/images/rasteira-girassol/h-dourada.svg", alt: "Rasteira Girassol dourada" }, { type: "image", src: "/images/rasteira-girassol/v-dourada.svg", alt: "Rasteira Girassol dourada" }] }
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},
{
  id: "11",
  name: "Rasteira Noar",
  price: 119.90,
  description: [
    "Acabamento refinado",
    "Tiras cruzadas com pedrarias em diagonal",
    "Material sintético",
    "Ideal para looks casuais",
    "Conforto e estilo"
  ],
  colors: [
    { name: "Dourado", hex: "#D4AF37", media: [{ type: "image", src: "/images/rasteira-noar/h-dourado.svg", alt: "Rasteira Noar dourada" }, { type: "image", src: "/images/rasteira-noar/v-dourado.svg", alt: "Rasteira Noar dourada" }] },
    { name: "Prata", hex: "#C0C0C0", media: [{ type: "image", src: "", alt: "Rasteira Noar dourada" }, { type: "image", src: "", alt: "Rasteira Noar dourada" }] },

  ],
  sizes: [34, 35, 36, 37, 38, 39]
}, 
{
  id: "12",
  name: "Rasteira Isa",
  price: 119.90,
  description: [
    "Acabamento refinado",
    "Tiras cruzadas com pedrarias em diagonal",
    "Material sintético",
    "Ideal para looks casuais",
    "Conforto e estilo"
  ],
  colors: [
    { name: "Caramelo", hex: "#B87333", media: [{ type: "image", src: "/images/rasteira-isa/h-caramelo.svg", alt: "Rasteira Girassol prata" }, { type: "image", src: "/images/rasteira-isa/v-caramelo.svg", alt: "Rasteira Isa prata" }] },
    { name: "Preta", hex: "#1C1C1C", media: [{ type: "image", src: "", alt: "Rasteira Girassol prata" }, { type: "image", src: "", alt: "Rasteira Isa prata" }]}
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},
{
  id: "13",
  name: "Rasteira Isa Solado Cravinhos",
  price: 119.90,
  description: [
    "Acabamento refinado",
    "Tiras cruzadas com pedrarias em diagonal",
    "Material sintético",
    "Ideal para looks casuais",
    "Conforto e estilo"
  ],
  colors: [
    { name: "Preta", hex: "#1C1C1C", media: [{ type: "image", src: "/images/rasteira-isa-solado-cravinhos/h-preto.svg", alt: "Rasteira Girassol prata" }, { type: "image", src: "/images/rasteira-isa-solado-cravinhos/v-preto.svg", alt: "Rasteira Isa prata" }]}

    // { name: "Dourado", hex: "#D4AF37", media: [{ type: "image", src: "", alt: "Rasteira Girassol dourada" }] }
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},
{
  id: "14",
  name: "Sandália Valentina",
  price: 119.90,
  description: [
    "Acabamento refinado",
    "Tiras cruzadas com pedrarias em diagonal",
    "Material sintético",
    "Ideal para looks casuais",
    "Conforto e estilo"
  ],
  colors: [
    { name: "Preta", hex: "#1C1C1C", media: [{ type: "image", src: "/images/sandalia-valentina/h-preto.svg", alt: "Rasteira Girassol prata" }, { type: "image", src: "/images/sandalia-valentina/v-preto.svg", alt: "Rasteira Girassol prata" }] },
    { name: "Off-white", hex: "#f0eeecff", media: [{ type: "image", src: "/images/sandalia-valentina/h-off.svg", alt: "Rasteira Girassol prata" }, { type: "image", src: "/images/sandalia-valentina/v-off.svg", alt: "Rasteira Girassol prata" }] }
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},
{
  id: "15",
  name: "Rasteira Débora",
  price: 119.90,
  description: [
    "Acabamento refinado",
    "Tiras cruzadas com pedrarias em diagonal",
    "Material sintético",
    "Ideal para looks casuais",
    "Conforto e estilo"
  ],
  colors: [
    { name: "Caramelo", hex: "#B87333", media: [{ type: "image", src: "/images/rasteira-debora/h-caramelo.svg", alt: "Rasteira Girassol prata" }, { type: "image", src: "/images/rasteira-debora/v-caramelo.svg", alt: "Rasteira Girassol prata" }] },
    // { name: "Dourado", hex: "#D4AF37", media: [{ type: "image", src: "", alt: "Rasteira Girassol dourada" }] }
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},
{
  id: "16",
  name: "Rasteira Diana",
  price: 119.90,
  description: [
    "Acabamento refinado",
    "Tiras cruzadas com pedrarias em diagonal",
    "Material sintético",
    "Ideal para looks casuais",
    "Conforto e estilo"
  ],
  colors: [
    { name: "Animal-Print", hex: "#b96826ff", media: [{ type: "image", src: "/images/rasteira-diana/h-ap.svg", alt: "Rasteira Girassol prata" }, { type: "image", src: "/images/rasteira-diana/v-ap.svg", alt: "Rasteira Girassol prata" } ] },
    // { name: "Dourado", hex: "#D4AF37", media: [{ type: "image", src: "", alt: "Rasteira Girassol dourada" }] }
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},
{
  id: "17",
  name: "Rasteira Infinity",
  price: 119.90,
  description: [
    "Acabamento refinado",
    "Tiras cruzadas com pedrarias em diagonal",
    "Material sintético",
    "Ideal para looks casuais",
    "Conforto e estilo"
  ],
  colors: [
    { name: "Preta", hex: "#1C1C1C",media: [{ type: "image", src: "/images/rasteira-infinity/h-preto.svg", alt: "Rasteira Girassol prata" }, { type: "image", src: "/images/rasteira-infinity/v-preto.svg", alt: "Rasteira Girassol prata" }] },
    // { name: "Dourado", hex: "#D4AF37", media: [{ type: "image", src: "", alt: "Rasteira Girassol dourada" }] }
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},
{
  id: "18",
  name: "Rasteira Malu",
  price: 119.90,
  description: [
    "Acabamento refinado",
    "Tiras cruzadas com pedrarias em diagonal",
    "Material sintético",
    "Ideal para looks casuais",
    "Conforto e estilo"
  ],
  colors: [
    { name: "Dourado", hex: "#D4AF37", media: [{ type: "image", src: "/images/rasteira-malu/h-dourado.svg", alt: "Rasteira Girassol prata" }, { type: "image", src: "/images/rasteira-malu/v-dourado.svg", alt: "Rasteira Girassol prata" }] },
    // { name: "Dourado", hex: "#D4AF37", media: [{ type: "image", src: "", alt: "Rasteira Girassol dourada" }] }
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},
{
  id: "19",
  name: "Rasteira Luciana",
  price: 119.90,
  description: [
    "Acabamento refinado",
    "Tiras cruzadas com pedrarias em diagonal",
    "Material sintético",
    "Ideal para looks casuais",
    "Conforto e estilo"
  ],
  colors: [
    { name:"Preta", hex: "#1C1C1C", media: [{ type: "image", src: "/images/rasteira-luciana/h-preto.svg", alt: "Rasteira Girassol prata" }, { type: "image", src: "/images/rasteira-luciana/v-preto.svg", alt: "Rasteira Girassol prata" }] },
    // { name: "Dourado", hex: "#D4AF37", media: [{ type: "image", src: "", alt: "Rasteira Girassol dourada" }] }
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},

{
  id: "29",
  name: "Flatform Dominique",
  price: 119.90,
  description: [
    "Conforto, estilo e praticidade",
    "Tiras cruzadas com aplicação de pirâmides douradas",
    "Solado em PVC emborrachado",
    "Altura de 2,5cm",
    "Material sintético"
  ],
  colors: [
    { name: "Preta", hex: "#1C1C1C", media: [{ type: "image", src: "", alt: "Flatform Dominique preta" }] },
    { name: "Caramelo", hex: "#B87333", media: [{ type: "image", src: "", alt: "Flatform Dominique caramelo" }] }
  ],
  sizes: [34, 35, 36, 37, 38, 39]
},

]
