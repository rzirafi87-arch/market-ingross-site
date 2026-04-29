export type PrezzoShockItem = {
  id: number;
  title: string;
  image: string;
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
  items: [
    {
      id: 1,
      title: "Prezzo Shock 1",
      image: "/images/offers/prezzi-shock/prezzo-shock-1.png",
    },
    {
      id: 2,
      title: "Prezzo Shock 2",
      image: "/images/offers/prezzi-shock/prezzo-shock-2.png",
    },
    {
      id: 3,
      title: "Prezzo Shock 3",
      image: "/images/offers/prezzi-shock/prezzo-shock-3.png",
    },
    {
      id: 4,
      title: "Prezzo Shock 4",
      image: "/images/offers/prezzi-shock/prezzo-shock-4.png",
    },
    {
      id: 5,
      title: "Prezzo Shock 5",
      image: "/images/offers/prezzi-shock/prezzo-shock-5.png",
    },
    {
      id: 6,
      title: "Prezzo Shock 6",
      image: "/images/offers/prezzi-shock/prezzo-shock-6.png",
    },
  ] as PrezzoShockItem[],
};
