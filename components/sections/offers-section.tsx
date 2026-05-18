"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { prezziShockData } from "@/data/prezzi-shock";

export function OffersSection() {
  const items = prezziShockData.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = items[activeIndex];

  if (!items.length) return null;

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

        <div className="grid w-full max-w-full items-start gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
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

            <div className="mi-card-inset grid w-full max-w-full min-w-0 items-center gap-6 overflow-hidden rounded-[28px] p-5 md:grid-cols-[1fr_260px]">
              <div className="relative flex min-h-[420px] min-w-0 items-center justify-center rounded-[24px] bg-white">
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  width={520}
                  height={520}
                  className="max-h-[400px] w-auto object-contain"
                  priority
                />
              </div>

              <div className="rounded-[24px] bg-white p-5 shadow-[0_12px_28px_rgba(0,0,0,0.10)]">
                <p className="font-heading mb-2 text-xs font-black uppercase tracking-[0.22em] text-[#ef382f]">
                  Offerta shock
                </p>

                <h3 className="font-heading text-2xl font-black leading-tight text-[#003b7a]">
                  {activeProduct.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#003b7a]/70">
                  {activeProduct.format}
                </p>

                <div className="mt-6">
                  <span className="text-2xl font-black text-[#ef382f]">&euro;</span>
                  <span className="ml-1 text-6xl font-black tracking-tight text-[#ef382f]">
                    {activeProduct.price}
                  </span>
                </div>

                <Link
                  href={prezziShockData.ctaHref}
                  className="font-heading mt-6 inline-flex rounded-xl bg-[#ef382f] px-6 py-3 text-sm font-black uppercase tracking-[0.03em] text-white shadow-md transition hover:scale-[1.02]"
                >
                  Apri il volantino
                </Link>
              </div>
            </div>
          </div>

          <aside className="mi-card-inset min-w-0 overflow-hidden rounded-[28px] p-4">
            <div className="mb-4 font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-[#0B3B82]">
              Miniature Promo
            </div>

            <div className="flex w-full max-w-full gap-3 overflow-x-auto overscroll-x-contain pb-2 lg:grid lg:max-h-[620px] lg:grid-cols-2 lg:gap-3 lg:overflow-y-auto lg:overflow-x-hidden lg:pb-0 lg:pr-1">
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`mi-card-inset relative flex h-36 min-w-[128px] items-center justify-center overflow-hidden rounded-[18px] p-2 transition hover:scale-[1.03] lg:min-w-0 ${
                    activeIndex === index
                      ? "ring-2 ring-[#EF3D32]"
                      : "hover:shadow-[0_10px_24px_rgba(11,59,130,0.12)]"
                  }`}
                  aria-label={`Mostra ${item.name}`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={160}
                    height={160}
                    className="max-h-28 w-auto object-contain"
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
