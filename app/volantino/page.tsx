"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { flyerStores, type Flyer, StoreSlug } from "@/data/flyers";

const FlyerViewer = dynamic(
  () =>
    import("../../components/sections/flyer-viewer").then(
      (mod) => mod.FlyerViewer
    ),
  { ssr: false }
);

function isValidStore(value: string | null): value is StoreSlug {
  if (!value) return false;

  return flyerStores.some((store) => store.value === value);
}

export default function VolantinoPage() {
  return (
    <Suspense fallback={null}>
      <VolantinoPageContent />
    </Suspense>
  );
}

function VolantinoPageContent() {
  const searchParams = useSearchParams();
  const storeFromUrl = searchParams.get("store");

  const [selectedStore, setSelectedStore] = useState<StoreSlug>("all");
  const [currentFlyer, setCurrentFlyer] = useState<Flyer | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isValidStore(storeFromUrl)) {
      setSelectedStore(storeFromUrl);
    } else {
      setSelectedStore("all");
    }
  }, [storeFromUrl]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/flyers?store=${selectedStore}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentFlyer(data.current ?? null);
      })
      .catch(() => {
        setCurrentFlyer(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [selectedStore]);

  const currentFlyerUrl = currentFlyer
    ? `/api/flyers/${currentFlyer.id}`
    : null;

  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <section className="py-8 lg:py-10">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-5 rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5">
              <label
                htmlFor="store-selector"
                className="font-heading mb-3 block text-sm font-bold uppercase tracking-[0.18em] text-[#0B3B82]"
              >
                Scegli il punto vendita
              </label>

              <select
                id="store-selector"
                value={selectedStore}
                onChange={(e) => setSelectedStore(e.target.value as StoreSlug)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base font-medium text-slate-900 outline-none transition focus:border-[#0B3B82]"
              >
                {flyerStores.map((store) => (
                  <option key={store.value} value={store.value}>
                    {store.label}
                  </option>
                ))}
              </select>
            </div>

            {currentFlyer && currentFlyerUrl ? (
              <>
                <div className="mb-6 rounded-[24px] bg-white px-6 py-6 shadow-sm ring-1 ring-black/5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="text-center lg:text-left">
                      <div className="font-heading inline-flex rounded-full bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">
                        Volantino attuale
                      </div>

                      <h1 className="font-heading mt-4 text-2xl font-extrabold text-[#0B3B82] md:text-4xl">
                        {currentFlyer.promoLabel}
                      </h1>

                      <p className="font-heading mt-2 text-base font-bold uppercase text-slate-900">
                        {currentFlyer.title}
                      </p>

                      {currentFlyer.description && (
                        <p className="mt-2 text-sm text-slate-600 md:text-base">
                          {currentFlyer.description}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-center lg:justify-end">
                      <a
                        href={currentFlyerUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-heading rounded-full border-2 border-black bg-white px-8 py-4 text-center text-base font-bold text-black transition hover:bg-slate-50"
                      >
                        SCARICA IL VOLANTINO
                      </a>
                    </div>
                  </div>
                </div>

                <div id="viewer-volantino" className="mb-10">
                  <FlyerViewer pdfUrl={currentFlyerUrl} />
                </div>
              </>
            ) : (
              <div className="rounded-[24px] bg-white p-10 text-center shadow-sm ring-1 ring-black/5">
                <p className="text-lg font-medium text-slate-700">
                  {isLoading
                    ? "Caricamento in corso…"
                    : "Al momento non ci sono volantini attivi per questa filiale."}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
