export type StoreSlug =
  | "all"
  | "agrigento"
  | "canicatti"
  | "castelvetrano"
  | "gela"
  | "ispica"
  | "ragusa"
  | "rosolini"
  | "vittoria";

export type Flyer = {
  id: string;
  title: string;
  fileName: string;
  startDate: string;
  endDate: string;
  promoLabel?: string;
  stores: StoreSlug[];
  description?: string;
  priority?: number;
};

export const flyerStores: Array<{ label: string; value: StoreSlug }> = [
  { label: "Tutti i punti vendita", value: "all" },
  { label: "Rosolini", value: "rosolini" },
  { label: "Ispica", value: "ispica" },
  { label: "Canicattì", value: "canicatti" },
  { label: "Gela", value: "gela" },
  { label: "Agrigento", value: "agrigento" },
  { label: "Vittoria", value: "vittoria" },
  { label: "Castelvetrano", value: "castelvetrano" },
  { label: "Ragusa", value: "ragusa" },
];