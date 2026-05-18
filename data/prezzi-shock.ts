export type PrezzoShockItem = {
  id: string;
  name: string;
  format: string;
  price: string;
  oldPrice: string;
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
      id: "cola",
      name: "Bibita Lo Capriccio",
      format: "Bottiglia 1,5 L",
      price: "0,99",
      oldPrice: "",
      image: "/images/offers/prezzi-shock/prezzo-shock-1.png",
    },
    {
      id: "lavazza",
      name: "Caffe Lavazza Crema e Gusto",
      format: "Confezione 250 g",
      price: "2,49",
      oldPrice: "",
      image: "/images/offers/prezzi-shock/prezzo-shock-2.png",
    },
    {
      id: "tonno",
      name: "Tonno Mare Aperto",
      format: "Confezione multipack",
      price: "3,99",
      oldPrice: "",
      image: "/images/offers/prezzi-shock/prezzo-shock-3.png",
    },
    {
      id: "doccia",
      name: "Doccia Schiuma",
      format: "Flacone",
      price: "1,29",
      oldPrice: "",
      image: "/images/offers/prezzi-shock/prezzo-shock-4.png",
    },
    {
      id: "vera",
      name: "Acqua Vera",
      format: "Confezione 6 bottiglie",
      price: "1,49",
      oldPrice: "",
      image: "/images/offers/prezzi-shock/prezzo-shock-5.png",
    },
  ] as PrezzoShockItem[],
};
