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
    gallery: ["/images/departments/ortofrutta.png"],
  },
  {
    slug: "macelleria",
    title: "Macelleria",
    category: "Reparto freschi",
    image: "/images/departments/macelleria.png",
    description: "Carni selezionate e convenienza ogni giorno.",
    gallery: ["/images/departments/macelleria.png"],
  },
  {
    slug: "pescheria",
    title: "Pescheria",
    category: "Reparto freschi",
    image: "/images/departments/pescheria.png",
    description: "Freschezza e attenzione alla qualità per la tua tavola.",
    gallery: ["/images/departments/pescheria.png"],
  },
  {
    slug: "salumeria-formaggi",
    title: "Salumeria e Formaggi",
    category: "Reparto freschi",
    image: "/images/departments/salumeria-formaggi.png",
    description: "Una selezione pensata per gusto, qualità e convenienza.",
    gallery: ["/images/departments/salumeria-formaggi.png"],
  },
  {
    slug: "cura-casa-persona",
    title: "Cura casa e persona",
    category: "Reparto assortimento",
    image: "/images/departments/cura-casa-persona.png",
    description: "Prodotti per la casa e per la persona di qualità garantita.",
    gallery: ["/images/departments/cura-casa-persona.png"],
  },
];
