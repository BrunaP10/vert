import type { Product } from "@/types/product";

export const products: Product[] = [
  // ÓCULOS DE SOL
  {
    id: "sol-001",
    name: "VÉRT SOLIS",
    model: "Aviador",
    price: 329.90,
    category: "sunglasses",
    description:
      "Design aviador atemporal, com linhas elegantes e personalidade marcante. Uma combinação de estilo e versatilidade para diferentes ocasiões.",
    variants: [
      { color: "Black", image: "/images/sunglasses/vert-solis/black.png" },
      { color: "Green", image: "/images/sunglasses/vert-solis/green.jpeg" },
      { color: "Tortoise", image: "/images/sunglasses/vert-solis/tortoise.png" },
    ],
  },
  {
    id: "sol-002",
    name: "VÉRT AURA",
    model: "Oval",
    price: 299.90,
    category: "sunglasses",
    description:
      "Um design delicado que combina formas suaves e estética contemporânea. Ideal para quem valoriza elegância nos pequenos detalhes.",
    variants: [
      { color: "Black", image: "/images/sunglasses/vert-aura/black.png" },
      { color: "Cream", image: "/images/sunglasses/vert-aura/cream.png" },
      { color: "Tortoise", image: "/images/sunglasses/vert-aura/tortoise.png" },
    ],
  },
  {
    id: "sol-003",
    name: "VÉRT AXIS",
    model: "Wayfarer",
    price: 319.90,
    category: "sunglasses",
    description:
      "Formas marcantes e design contemporâneo definem este modelo. Uma escolha versátil para quem busca personalidade e presença.",
    variants: [
      { color: "Green", image: "/images/sunglasses/vert-axis/green.jpeg" },
      { color: "Tortoise", image: "/images/sunglasses/vert-axis/tortoise.jpeg" },
      { color: "Transparent", image: "/images/sunglasses/vert-axis/transparent.jpeg" },
    ],
  },
  {
    id: "sol-004",
    name: "VÉRT LINE",
    model: "Slim",
    price: 279.90,
    category: "sunglasses",
    description:
      "Linhas finas e proporções minimalistas criam um visual moderno e sofisticado. Um modelo que traduz estilo com simplicidade.",
    variants: [
      { color: "Black", image: "/images/sunglasses/vert-line/black.jpeg" },
      { color: "Burgundy", image: "/images/sunglasses/vert-line/burgundy.png" },
      { color: "Green", image: "/images/sunglasses/vert-line/green.jpeg" },
    ],
  },

  // ÓCULOS DE GRAU
  {
    id: "grau-001",
    name: "VÉRT AIR",
    model: "Sem aro",
    price: 299.90,
    category: "prescription",
    description:
      "Leveza visual e discrição em um design minimalista. Uma proposta elegante para quem prefere armações sutis e sofisticadas. Produto vendido somente com a armação. As lentes de grau não estão inclusas.",
    variants: [
      { color: "Gold", image: "/images/prescription/vert-air/gold.png" },
      { color: "Gray", image: "/images/prescription/vert-air/gray.png" },
      { color: "Transparent", image: "/images/prescription/vert-air/transparent.jpeg" },
    ],
  },
  {
    id: "grau-002",
    name: "VÉRT EDGE",
    model: "Quadrado",
    price: 289.90,
    category: "prescription",
    description:
      "Geometria e personalidade se encontram em um design de linhas definidas. Um modelo contemporâneo que valoriza diferentes estilos. Produto vendido somente com a armação. As lentes de grau não estão inclusas.",
    variants: [
      { color: "Black", image: "/images/prescription/vert-edge/black.png" },
      { color: "Green", image: "/images/prescription/vert-edge/green.jpeg" },
      { color: "Tortoise", image: "/images/prescription/vert-edge/tortoise.png" },
    ],
  },
  {
    id: "grau-003",
    name: "VÉRT ESSEN",
    model: "Convencional",
    price: 249.90,
    category: "prescription",
    description:
      "Um design clássico que combina simplicidade e versatilidade. Ideal para quem busca uma estética discreta e atemporal. Produto vendido somente com a armação. As lentes de grau não estão inclusas.",
    variants: [
      { color: "Black", image: "/images/prescription/vert-essen/black.jpeg" },
      { color: "Gold", image: "/images/prescription/vert-essen/gold.png" },
      { color: "Gray", image: "/images/prescription/vert-essen/gray.png" },
    ],
  },
  {
    id: "grau-004",
    name: "VÉRT VECTOR",
    model: "Retangular",
    price: 279.90,
    category: "prescription",
    description:
      "Formas retangulares e estrutura marcante dão personalidade a este modelo. Uma combinação de modernidade e elegância para o dia a dia. Produto vendido somente com a armação. As lentes de grau não estão inclusas.",
    variants: [
      { color: "Black", image: "/images/prescription/vert-vector/black.png" },
      { color: "Tortoise", image: "/images/prescription/vert-vector/tortoise.png" },
      { color: "Transparent", image: "/images/prescription/vert-vector/transparent.jpeg" },
    ],
  },
  
  // ÓCULOS ESPORTIVOS
  {
    id: "esp-001",
    name: "VÉRT AERO",
    model: "Esportivo aerodinâmico",
    price: 349.90,
    category: "sports",
    description:
      "Design aerodinâmico e visual futurista para quem busca atitude e personalidade. Uma proposta que une estética esportiva e modernidade.",
    variants: [
      { color: "Black Pink", image: "/images/sports/vert-aero/black-pink.jpeg" },
      { color: "Black Red", image: "/images/sports/vert-aero/black-red.png" },
      { color: "White Blue", image: "/images/sports/vert-aero/white-blue.png" },
    ],
  },
  {
    id: "esp-002",
    name: "VÉRT RUNNING",
    model: "Esportivo para corrida",
    price: 329.90,
    category: "sports",
    description:
      "Visual dinâmico e linhas esportivas inspiradas no universo da corrida. Uma proposta para acompanhar um estilo de vida ativo.",
    variants: [
      { color: "Black Red", image: "/images/sports/vert-running/black-red.jpeg" },
      { color: "Navy Blue", image: "/images/sports/vert-running/navy-blue.png" },
      { color: "White Gray", image: "/images/sports/vert-running/white-gray.png" },
    ],
  },
  {
    id: "esp-003",
    name: "VÉRT SHIELD",
    model: "Esportivo com lente shield",
    price: 399.90,
    category: "sports",
    description:
      "Uma lente ampla e design de presença marcante definem este modelo. Estética ousada para quem valoriza inovação e personalidade.",
    variants: [
      { color: "Black Red", image: "/images/sports/vert-shield/black-red.png" },
      { color: "Black", image: "/images/sports/vert-shield/black.jpeg" },
      { color: "White Blue", image: "/images/sports/vert-shield/white-blue.jpeg" },
    ],
  },
  {
    id: "esp-004",
    name: "VÉRT TRAIL",
    model: "Esportivo para atividades outdoor",
    price: 369.90,
    category: "sports",
    description:
      "Design envolvente e identidade esportiva para acompanhar diferentes atividades ao ar livre. Uma combinação de estilo e versatilidade.",
    variants: [
      { color: "Black", image: "/images/sports/vert-trail/black.png" },
      { color: "Red Black", image: "/images/sports/vert-trail/red-black.png" },
      { color: "White Blue", image: "/images/sports/vert-trail/white-blue.png" },
    ],
  },
];
