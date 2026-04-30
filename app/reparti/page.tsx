"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { departments } from "@/data/departments";

export default function RepartiPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!departments.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % departments.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--mi-page)] text-slate-900">
      <SiteHeader />

      <main className="bg-[var(--mi-page)]">
        {/* HERO */}
        <section className="bg-[var(--mi-page)] py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
            <div>
              <span className="font-heading text-xs font-extrabold uppercase tracking-[0.18em] text-[#EF3D32]">
                Qualità e freschezza
              </span>

              <h1 className="font-heading mt-4 text-4xl font-extrabold leading-[0.96] tracking-[-0.03em] text-[#0B3B82] md:text-6xl">
                I nostri reparti
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
                Freschezza, qualità e assortimento per accompagnarti ogni giorno
                nella tua spesa.
              </p>
            </div>

            <div className="mi-card rounded-[32px] border border-slate-200 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <div className="overflow-hidden rounded-[26px] bg-slate-100">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {departments.map((department) => (
                    <div
                      key={department.name}
                      className="relative aspect-[16/10] min-w-full"
                    >
                      <Image
                        src={department.image}
                        alt={department.name}
                        fill
                        priority={department.name === departments[0]?.name}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div>
                  <div className="font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-[#EF3D32]">
                    Reparto in evidenza
                  </div>
                  <div className="font-heading mt-1 text-2xl font-extrabold text-[#0B3B82]">
                    {departments[activeIndex]?.name}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {departments.map((department, index) => (
                    <button
                      key={department.name}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-3.5 w-3.5 rounded-full transition ${
                        activeIndex === index
                          ? "bg-[#EF3D32]"
                          : "bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Vai al reparto ${department.name}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GRIGLIA REPARTI */}
        <section className="bg-[var(--mi-page)] py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {departments.map((department) => (
                <article
                  key={department.name}
                  className="mi-card overflow-hidden rounded-[30px] border border-slate-200 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={department.image}
                      alt={department.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-[#EF3D32]">
                      Reparto
                    </div>

                    <h2 className="font-heading mt-2 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#0B3B82]">
                      {department.name}
                    </h2>

                    <p className="mt-3 leading-7 text-slate-700">
                      {department.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="bg-[var(--mi-page)] py-16">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#0B3B82] md:text-4xl">
              Scopri i reparti nei nostri punti vendita
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Trova il Market Ingross più vicino e vieni a scoprire qualità,
              convenienza e assortimento ogni giorno.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/punti-vendita"
                className="font-heading rounded-xl bg-[#0B3B82] px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.04em] text-white transition hover:opacity-90"
              >
                Trova il punto vendita
              </Link>

              <Link
                href="/volantino"
                className="font-heading rounded-xl border-2 border-[#0B3B82] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.04em] text-[#0B3B82] transition hover:bg-blue-50"
              >
                Sfoglia il volantino
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
