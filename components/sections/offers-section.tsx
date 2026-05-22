"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { prezziShockData } from "@/data/prezzi-shock";

export function OffersSection() {
  const items = prezziShockData.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = items[activeIndex];

  useEffect(() => {
    if (activeIndex >= items.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, items.length]);

  if (!items.length || !activeProduct) return null;

  return (
    <section className="w-full max-w-full overflow-x-hidden bg-transparent py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl overflow-x-hidden px-4 lg:px-8">
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

        <div className="grid w-full max-w-full items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="mi-card min-w-0 overflow-hidden rounded-[32px] p-6">
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

            <div className="mi-card-inset w-full max-w-full min-w-0 overflow-hidden rounded-[28px] bg-white p-5">
              <div className="relative mx-auto min-h-[380px] max-w-[480px] overflow-hidden rounded-[24px] bg-white ring-1 ring-slate-100">
                <Image
                  src={activeProduct.productImage}
                  alt={activeProduct.alt}
                  fill
                  sizes="(max-width: 1024px) 82vw, 480px"
                  className="object-contain p-5"
                  priority
                />
              </div>

              <div className="mt-5 flex justify-center md:justify-end">
                <Link
                  href={prezziShockData.ctaHref}
                  className="font-heading inline-flex rounded-xl bg-[#ef382f] px-6 py-3 text-sm font-black uppercase tracking-[0.03em] text-white shadow-md transition hover:scale-[1.02]"
                >
                  Apri il volantino
                </Link>
              </div>
            </div>
          </div>

          <aside className="mi-card-inset min-w-0 overflow-hidden rounded-[28px] p-5">
            <div className="mb-4 font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-[#0B3B82]">
              Articoli Promo
            </div>

            <div className="flex w-full max-w-full gap-4 overflow-x-auto overscroll-x-contain pb-2 lg:grid lg:max-h-[620px] lg:grid-cols-2 lg:gap-4 lg:overflow-y-auto lg:overflow-x-hidden lg:pb-0 lg:pr-1">
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`mi-card-inset relative flex h-44 min-w-[152px] items-center justify-center overflow-hidden rounded-[18px] bg-white p-3 transition hover:scale-[1.03] lg:min-w-0 ${
                    activeIndex === index
                      ? "ring-2 ring-[#EF3D32]"
                      : "hover:shadow-[0_10px_24px_rgba(11,59,130,0.12)]"
                  }`}
                  aria-label={`Mostra ${item.alt}`}
                >
                  <Image
                    src={item.thumbnailImage}
                    alt={item.alt}
                    width={200}
                    height={200}
                    className="max-h-36 w-auto object-contain"
                  />
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
