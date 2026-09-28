"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { flyerStores, type Flyer, type StoreSlug } from "@/data/flyers";
import { getPromoDateLabel } from "@/lib/flyers";

export function FlyerSection() {
  const [selectedStore, setSelectedStore] = useState<StoreSlug>("all");
  const [currentFlyer, setCurrentFlyer] = useState<Flyer | null>(null);

  useEffect(() => {
    let active = true;

    fetch("/api/flyers?store=" + selectedStore, { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        if (active) setCurrentFlyer(data.current ?? null);
      })
      .catch(() => {
        if (active) setCurrentFlyer(null);
      });

    return () => {
      active = false;
    };
  }, [selectedStore]);

  const promoLabel = currentFlyer
    ? getPromoDateLabel(currentFlyer)
    : "Consulta le promozioni attive nel tuo punto vendita.";

  const flyerHref =
    selectedStore === "all" ? "/volantino" : "/volantino?store=" + selectedStore;

  return (
    <section id="volantino" className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-[#FFD51F]/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-[#003B7A]/10 bg-[#FFD51F] p-6 shadow-[0_24px_60px_rgba(0,43,91,0.14)] sm:p-8">
            <div className="rounded-[22px] bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <Image
                  src="/images/logo/market-ingross-logo.png"
                  alt="Market Ingross"
                  width={130}
                  height={130}
                  className="h-24 w-auto object-contain"
                />
                <span className="font-heading rounded-full bg-[#EF382F] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white">
                  Volantino attivo
                </span>
              </div>

              <div className="mt-7 rounded-2xl bg-[#f5f8fc] p-5">
                <p className="font-heading text-xs font-extrabold uppercase tracking-[0.18em] text-[#EF382F]">
                  Le offerte del momento
                </p>
                <h3 className="font-heading mt-2 text-3xl font-black leading-tight text-[#003B7A]">
                  {currentFlyer?.title ?? "Market Ingross"}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
                  {promoLabel}
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="h-20 rounded-xl bg-[#003B7A]/8" />
                <div className="h-20 rounded-xl bg-[#EF382F]/8" />
                <div className="h-20 rounded-xl bg-[#FFD51F]/35" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-xl">
          <p className="mi-section-kicker">Le offerte del momento</p>
          <h2 className="mi-section-title mt-3 text-4xl leading-[1.02] sm:text-5xl">
            Il volantino Market Ingross è sempre con te
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Scegli il tuo punto vendita e consulta in pochi secondi le promozioni Market Ingross attive.
          </p>

          <div className="mt-7 rounded-2xl border border-[#003B7A]/10 bg-[#f7f9fc] p-5">
            <label
              htmlFor="home-store-selector"
              className="font-heading block text-xs font-extrabold uppercase tracking-[0.14em] text-[#003B7A]"
            >
              Scegli il tuo punto vendita
            </label>
            <select
              id="home-store-selector"
              value={selectedStore}
              onChange={(event) => setSelectedStore(event.target.value as StoreSlug)}
              className="mt-3 w-full rounded-xl border border-[#003B7A]/15 bg-white px-4 py-3.5 font-semibold text-[#173454] outline-none focus:border-[#003B7A]"
            >
              {flyerStores.map((store) => (
                <option key={store.value} value={store.value}>
                  {store.label}
                </option>
              ))}
            </select>

            <p className="mt-4 text-sm leading-6 text-slate-600">{promoLabel}</p>

            <Link
              href={flyerHref}
              className="font-heading mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#EF382F] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#d92e26]"
            >
              <BookOpen size={18} />
              Apri il volantino
              <ChevronRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
