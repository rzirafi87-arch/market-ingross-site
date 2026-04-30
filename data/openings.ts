export type Opening = {
  slug: string;
  city: string;
  title: string;
  subtitle: string;
  description: string;
  address: string;
  phone?: string;
  mapsUrl?: string;
  image: string;
  flyerTitle: string;
  flyerValidFrom: string;
  flyerValidTo: string;
  flyerPdf: string;
  flyerPages: string[];
  isActive: boolean;
};

export const openings: Opening[] = [
  {
    slug: "demo-nuova-apertura",
    city: "Nuova citta",
    title: "Nuova apertura Market Ingross",
    subtitle: "Stiamo arrivando anche qui!",
    description:
      "Una nuova apertura Market Ingross con offerte dedicate, reparti freschi e tanta convenienza.",
    address: "Indirizzo da inserire",
    phone: "0922 891711",
    mapsUrl: "#",
    image: "/images/stores/agrigento.jpg",
    flyerTitle: "Volantino nuova apertura",
    flyerValidFrom: "Da definire",
    flyerValidTo: "Da definire",
    flyerPdf: "/volantino",
    flyerPages: ["/images/stores/agrigento.jpg", "/images/stores/vittoria.jpg"],
    isActive: false,
  },
];
