import Image from "next/image";
import Link from "next/link";
import { BadgeEuro, HeartHandshake, MapPinned, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { visibleStores } from "@/data/stores";

const pillars = [
  {
    title: "Convenienza",
    text: "Un assortimento pensato per offrire valore nella spesa di ogni giorno.",
    icon: BadgeEuro,
  },
  {
    title: "Qualità",
    text: "Attenzione ai prodotti, ai reparti freschi e al servizio.",
    icon: ShieldCheck,
  },
  {
    title: "Vicinanza",
    text: "Una rete di supermercati radicata nelle comunità siciliane.",
    icon: HeartHandshake,
  },
  {
    title: "Territorio",
    text: "Nove punti vendita distribuiti in diverse aree della Sicilia.",
    icon: MapPinned,
  },
];

export default function ChiSiamoPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main>
        <section className="bg-[#f6f8fb] py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <div>
              <p className="mi-section-kicker">Chi siamo</p>
              <h1 className="mi-section-title mt-3 text-4xl leading-[1.02] sm:text-6xl">
                Market Ingross, vicino alla spesa delle famiglie siciliane
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Market Ingross è una rete di {visibleStores.length} supermercati in Sicilia.
                Convenienza, qualità e vicinanza guidano ogni giorno il nostro modo di fare retail.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/punti-vendita"
                  className="font-heading rounded-xl bg-[#003B7A] px-5 py-3 text-sm font-extrabold text-white"
                >
                  Scopri i punti vendita
                </Link>
                <Link
                  href="/volantino"
                  className="font-heading rounded-xl border-2 border-[#003B7A] px-5 py-3 text-sm font-extrabold text-[#003B7A]"
                >
                  Sfoglia il volantino
                </Link>
              </div>
            </div>

            <div className="relative min-h-[380px] overflow-hidden rounded-[28px] shadow-[0_20px_55px_rgba(0,43,91,0.12)]">
              <Image
                src="/images/stores/Ragusa/Reparti_1.png"
                alt="Punto vendita Market Ingross"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <article key={pillar.title} className="mi-card p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FFD51F] text-[#003B7A]">
                      <Icon size={21} />
                    </span>
                    <h2 className="font-heading mt-5 text-xl font-extrabold text-[#003B7A]">
                      {pillar.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
