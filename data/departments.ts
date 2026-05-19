export type Department = {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  gallery: string[];
};

export const departments: Department[] = [
  {
    slug: "ortofrutta",
    title: "Ortofrutta",
    category: "Reparto freschi",
    image: "/images/departments/ortofrutta.png",
    description: "Qualità, freschezza e assortimento per la tua spesa quotidiana.",
    gallery: [
      "/images/departments/ortofrutta/agrigento_1%20%2812%29.png",
      "/images/departments/ortofrutta/agrigento_1%20%2813%29.png",
      "/images/departments/ortofrutta/agrigento_1%20%2814%29.png",
      "/images/departments/ortofrutta/canicatti_1%20%285%29.png",
      "/images/departments/ortofrutta/ispica_1%20%286%29.png",
      "/images/departments/ortofrutta/ispica_1%20%287%29.png",
      "/images/departments/ortofrutta/ispica_1%20%288%29.png",
    ],
  },
  {
    slug: "macelleria",
    title: "Macelleria",
    category: "Reparto freschi",
    image: "/images/departments/macelleria.png",
    description: "Carni selezionate e convenienza ogni giorno.",
    gallery: [
      "/images/departments/macelleria/agrigento_1%20%2811%29.png",
      "/images/departments/macelleria/canicatti_1%20%283%29.png",
      "/images/departments/macelleria/canicatti_1%20%284%29.png",
      "/images/departments/macelleria/rosolini_1%20%285%29.png",
      "/images/departments/macelleria/rosolini_1%20%286%29.png",
      "/images/departments/macelleria/rosolini_1%20%287%29.png",
    ],
  },
  {
    slug: "pescheria",
    title: "Pescheria",
    category: "Reparto freschi",
    image: "/images/departments/pescheria.png",
    description: "Freschezza e attenzione alla qualità per la tua tavola.",
    gallery: [
      "/images/departments/pescheria/castelvetrano_1%20%286%29.png",
      "/images/departments/pescheria/gela_1%20%285%29.png",
      "/images/departments/pescheria/ispica_1%20%289%29.png",
      "/images/departments/pescheria/rosolini_1%20%288%29.png",
      "/images/departments/pescheria/rosolini_1%20%289%29.png",
    ],
  },
  {
    slug: "salumeria-formaggi",
    title: "Salumeria e Formaggi",
    category: "Reparto freschi",
    image: "/images/departments/salumeria-formaggi.png",
    description: "Una selezione pensata per gusto, qualità e convenienza.",
    gallery: [
      "/images/departments/salumeria-formaggi/agrigento_1%20%2815%29.png",
      "/images/departments/salumeria-formaggi/agrigento_1%20%2817%29.png",
      "/images/departments/salumeria-formaggi/canicatti_1%20%286%29.png",
      "/images/departments/salumeria-formaggi/canicatti_1%20%287%29.png",
      "/images/departments/salumeria-formaggi/castelvetrano_1%20%289%29.png",
      "/images/departments/salumeria-formaggi/ispica_1%20%284%29.png",
      "/images/departments/salumeria-formaggi/ispica_1%20%2812%29.png",
      "/images/departments/salumeria-formaggi/rosolini_1%20%2811%29.png",
      "/images/departments/salumeria-formaggi/rosolini_1%20%2812%29.png",
    ],
  },
  {
    slug: "cura-casa-persona",
    title: "Cura casa e persona",
    category: "Reparto assortimento",
    image: "/images/departments/cura-casa-persona.png",
    description: "Prodotti per la casa e per la persona di qualità garantita.",
    gallery: [
      "/images/departments/cura-casa-persona/castelvetrano_1%20%283%29.png",
      "/images/departments/cura-casa-persona/rosolini_1%20%281%29.png",
    ],
  },
];
