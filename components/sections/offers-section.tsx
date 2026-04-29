"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { prezziShockData } from "@/data/prezzi-shock";

export function OffersSection() {
  const items = prezziShockData.items;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  if (!items.length) return null;

  return (
    <section className="bg-transparent py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10">
          <div className="max-w-4xl">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <div className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#EF3D32]">
                Ultimi giorni di promo
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-2 md:flex-row md:items-center">
              <h2 className="font-heading text-4xl font-extrabold tracking-[-0.03em] text-[#0B3B82] md:text-5xl">
                Prezzi Shock
              </h2>

              <Image
                src={prezziShockData.badgeImage}
                alt="Prezzi Shock"
                width={180}
                height={90}
                className="h-auto w-[120px] object-contain md:w-[160px] lg:w-[180px]"
              />
            </div>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
              {prezziShockData.subtitle}
            </p>

            <div className="mt-5 inline-flex rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 shadow-sm">
              {prezziShockData.promoLabel}
            </div>
          </div>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_290px]">
          {/* SINISTRA - VIEWER */}
          <div className="mi-card p-5">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <div className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#EF3D32]">
                  Promo speciali
                </div>

                <h3 className="font-heading mt-2 text-[1.9rem] font-extrabold leading-tight tracking-[-0.03em] text-[#0B3B82] md:text-[2.25rem]">
                  Prezzi Shock del Momento
                </h3>
              </div>

              <div className="font-heading rounded-full bg-slate-200 px-3 py-1.5 text-sm font-bold text-slate-500">
                {activeIndex + 1} / {items.length}
              </div>
            </div>

            <div className="rounded-[24px] bg-slate-100 p-4 md:p-5">
              <div className="mx-auto max-w-[410px] overflow-hidden rounded-[22px] bg-white shadow-sm ring-1 ring-black/5">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="relative aspect-[3/4] min-w-full bg-white"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-3"
                        priority={item.id === 1}
                        sizes="(max-width: 1024px) 80vw, 410px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center lg:justify-start">
              <Link
                href={prezziShockData.ctaHref}
                className="font-heading rounded-xl bg-[#EF3D32] px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.04em] text-white transition hover:opacity-90"
              >
                Apri il volantino
              </Link>
            </div>
          </div>

          {/* DESTRA - MINIATURE */}
          <div className="mi-card p-4">
            <div className="mb-4 font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-[#0B3B82]">
              Miniature Promo
            </div>

            <div className="grid grid-cols-2 gap-3">
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`overflow-hidden rounded-2xl border bg-white transition duration-300 ${
                    activeIndex === index
                      ? "border-[#EF3D32] ring-2 ring-[#EF3D32]/20 shadow-[0_10px_24px_rgba(239,61,50,0.12)]"
                      : "border-slate-200 hover:border-[#0B3B82]/25 hover:shadow-[0_10px_24px_rgba(11,59,130,0.12)]"
                  }`}
                >
                  <div className="relative aspect-[3/4] w-full bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                      sizes="160px"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
