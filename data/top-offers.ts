export type TopOfferItem = {
  id: string;
  alt: string;
  thumbnailImage: string;
  productImage: string;
};

export const topOffersData = {
  // Supported range: 4 to 6 items.
  items: [
    {
      id: "top-1",
      alt: "Offerta Top 1",
      thumbnailImage: "/images/offers/top/miniature/top-thumb-1.png",
      productImage: "/images/offers/top/top-product-1.png",
    },
    {
      id: "top-2",
      alt: "Offerta Top 2",
      thumbnailImage: "/images/offers/top/miniature/top-thumb-2.png",
      productImage: "/images/offers/top/top-product-2.png",
    },
    {
      id: "top-3",
      alt: "Offerta Top 3",
      thumbnailImage: "/images/offers/top/miniature/top-thumb-3.png",
      productImage: "/images/offers/top/top-product-3.png",
    },
    {
      id: "top-4",
      alt: "Offerta Top 4",
      thumbnailImage: "/images/offers/top/miniature/top-thumb-4.png",
      productImage: "/images/offers/top/top-product-4.png",
    },
  ] as TopOfferItem[],
};
