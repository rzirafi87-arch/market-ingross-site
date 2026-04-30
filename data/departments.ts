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
    image: "/images/departments/ortofrutta.jpg",
    description: "Qualità, freschezza e assortimento per la tua spesa quotidiana.",
    gallery: ["/images/departments/ortofrutta.jpg"],
  },
  {
    slug: "macelleria",
    title: "Macelleria",
    category: "Reparto freschi",
    image: "/images/departments/macelleria.jpg",
    description: "Carni selezionate e convenienza ogni giorno.",
    gallery: ["/images/departments/macelleria.jpg"],
  },
  {
    slug: "pescheria",
    title: "Pescheria",
    category: "Reparto freschi",
    image: "/images/departments/pescheria.jpg",
    description: "Freschezza e attenzione alla qualità per la tua tavola.",
    gallery: ["/images/departments/pescheria.jpg"],
  },
  {
    slug: "salumeria-formaggi",
    title: "Salumeria e Formaggi",
    category: "Reparto freschi",
    image: "/images/departments/salumeria-formaggi.jpg",
    description: "Una selezione pensata per gusto, qualità e convenienza.",
    gallery: ["/images/departments/salumeria-formaggi.jpg"],
  },
  {
    slug: "gastronomia",
    title: "Gastronomia",
    category: "Reparto freschi",
    image: "/images/departments/gastronomia.jpg",
    description: "Piatti pronti, sapori e idee per ogni esigenza.",
    gallery: ["/images/departments/gastronomia.jpg"],
  },
  {
    slug: "cura-casa-persona",
    title: "Cura casa e persona",
    category: "Reparto assortimento",
    image: "/images/departments/cura-casa-persona.jpg",
    description: "Prodotti per la casa e per la persona di qualità garantita.",
    gallery: ["/images/departments/cura-casa-persona.jpg"],
  },
];
