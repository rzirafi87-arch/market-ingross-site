export type PrezzoShockItem = {
  id: string;
  alt: string;
  thumbnailImage: string;
  productImage: string;
};

export const prezziShockData = {
  title: "Prezzi Shock",
  subtitle:
    "Scopri una selezione di promozioni imperdibili valide negli ultimi giorni del volantino.",
  startDate: "2026-04-23",
  endDate: "2026-04-26",
  promoLabel: "Prezzi Shock validi dal 23/04 al 26/04",
  ctaHref: "/volantino",
  badgeImage: "/images/offers/prezzi-shock-1.png",
  // Supported range: 4 to 7 items.
  items: [
    {
      id: "cola",
      alt: "Prezzo Shock 1",
      thumbnailImage: "/images/offers/prezzi-shock/miniature/shock-thumb-1.png",
      productImage: "/images/offers/prezzi-shock/shock-product-1.png",
    },
    {
      id: "lavazza",
      alt: "Prezzo Shock 2",
      thumbnailImage: "/images/offers/prezzi-shock/miniature/shock-thumb-2.png",
      productImage: "/images/offers/prezzi-shock/shock-product-2.png",
    },
    {
      id: "tonno",
      alt: "Prezzo Shock 3",
      thumbnailImage: "/images/offers/prezzi-shock/miniature/shock-thumb-3.png",
      productImage: "/images/offers/prezzi-shock/shock-product-3.png",
    },
    {
      id: "doccia",
      alt: "Prezzo Shock 4",
      thumbnailImage: "/images/offers/prezzi-shock/miniature/shock-thumb-4.png",
      productImage: "/images/offers/prezzi-shock/shock-product-4.png",
    },
  ] as PrezzoShockItem[],
};
