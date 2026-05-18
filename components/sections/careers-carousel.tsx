"use client";

import Image from "next/image";
import { useState } from "react";

const careerImages = [
  "/images/careers/team_market_ingross%20(1).png",
  "/images/careers/team_market_ingross%20(2).png",
  "/images/careers/team_market_ingross%20(3).png",
  "/images/careers/team_market_ingross%20(4).png",
  "/images/careers/team_market_ingross%20(5).png",
  "/images/careers/team_market_ingross%20(6).png",
  "/images/careers/team_market_ingross%20(7).png",
  "/images/careers/team_market_ingross%20(8).png",
  "/images/careers/team_market_ingross%20(9).png",
  "/images/careers/team_market_ingross.png",
];

export function CareersCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = careerImages[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? careerImages.length - 1 : prev - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === careerImages.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="mi-card overflow-hidden rounded-3xl p-3 shadow-sm">
      <div className="relative h-80 overflow-hidden rounded-[22px] bg-white">
        <Image
          src={activeImage}
          alt={`Team Market Ingross ${activeIndex + 1}`}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        <button
          type="button"
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-[#003b7a]/85 px-3 py-2 text-sm font-black text-white transition hover:bg-[#003b7a]"
          aria-label="Foto precedente"
        >
          <span aria-hidden>‹</span>
        </button>

        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[#003b7a]/85 px-3 py-2 text-sm font-black text-white transition hover:bg-[#003b7a]"
          aria-label="Foto successiva"
        >
          <span aria-hidden>›</span>
        </button>
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {careerImages.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                isActive
                  ? "border-[#ef382f]"
                  : "border-white/70 hover:border-[#0B3B82]/40"
              }`}
              aria-label={`Mostra foto team ${index + 1}`}
            >
              <Image
                src={image}
                alt={`Anteprima team ${index + 1}`}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}