export type Department = {
  slug: string;
  name: string;
  image: string;
  description: string;
  gallery: string[];
};

export const departments: Department[] = [
  {
    slug: "ortofrutta",
    name: "Ortofrutta",
    image: "/images/departments/ortofrutta.jpg",
    description: "Qualità, freschezza e assortimento per la tua spesa quotidiana.",
    gallery: ["/images/departments/ortofrutta.jpg"],
  },
  {
    slug: "macelleria",
    name: "Macelleria",
    image: "/images/departments/macelleria.jpg",
    description: "Carni selezionate e convenienza ogni giorno.",
    gallery: ["/images/departments/macelleria.jpg"],
  },
  {
    slug: "pescheria",
    name: "Pescheria",
    image: "/images/departments/pescheria.jpg",
    description: "Freschezza e attenzione alla qualità per la tua tavola.",
    gallery: ["/images/departments/pescheria.jpg"],
  },
  {
    slug: "salumeria-formaggi",
    name: "Salumeria e Formaggi",
    image: "/images/departments/salumeria-formaggi.jpg",
    description: "Una selezione pensata per gusto, qualità e convenienza.",
    gallery: ["/images/departments/salumeria-formaggi.jpg"],
  },
  {
    slug: "gastronomia",
    name: "Gastronomia",
    image: "/images/departments/gastronomia.jpg",
    description: "Praticità, bontà e varietà per ogni esigenza.",
    gallery: ["/images/departments/gastronomia.jpg"],
  },
  {
    slug: "cura-casa-persona",
    name: "Cura casa e persona",
    image: "/images/departments/cura-casa-persona.jpg",
    description: "Prodotti per la casa e per la persona al giusto prezzo.",
    gallery: ["/images/departments/cura-casa-persona.jpg"],
  },
];
