import Image from "next/image";
import Link from "next/link";
import { BadgeEuro, HeartHandshake, MapPinned, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Prezzi competitivi",
    icon: BadgeEuro,
  },
  {
    title: "Prodotti di qualità",
    icon: ShieldCheck,
  },
  {
    title: "9 punti vendita",
    icon: MapPinned,
  },
  {
    title: "Vicini alle famiglie",
    icon: HeartHandshake,
  },
];

export function HeroSection() {
  return (
    <section className="bg-white px-4 pb-8 pt-5 lg:px-8">
      <div className="relative mx-auto min-h-[610px] max-w-[1500px] overflow-hidden rounded-[30px] bg-[#082d63] shadow-[0_24px_70px_rgba(0,43,91,0.18)]">
        <Image
          src="/images/stores/Ragusa/Reparti_2.png"
          alt="Interno di un punto vendita Market Ingross"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,24,52,0.92)_0%,rgba(1,24,52,0.74)_38%,rgba(1,24,52,0.22)_72%,rgba(1,24,52,0.08)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#011a39]/90 to-transparent" />

        <div className="relative z-10 flex min-h-[610px] flex-col justify-between px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          <div className="max-w-3xl pt-8 lg:pt-14">
            <p className="font-heading text-sm font-extrabold uppercase tracking-[0.22em] text-[#FFD51F]">
              Market Ingross
            </p>
            <h1 className="font-heading mt-4 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
              Il Re del <span className="text-[#FFD51F]">Risparmio</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/88 sm:text-xl">
              Convenienza, qualità e vicinanza. Ogni giorno, in 9 supermercati in Sicilia.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/volantino"
                className="font-heading inline-flex items-center rounded-xl bg-[#EF382F] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(239,56,47,0.3)] transition hover:-translate-y-0.5 hover:bg-[#d92e26]"
              >
                Sfoglia il volantino
              </Link>
              <Link
                href="/punti-vendita"
                className="font-heading inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-[#003B7A] transition hover:-translate-y-0.5"
              >
                Trova il tuo Market
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-[#002c61]/70 px-4 py-3.5 text-white backdrop-blur-sm"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFD51F] text-[#003B7A]">
                    <Icon size={20} strokeWidth={2.4} />
                  </span>
                  <span className="font-heading text-sm font-bold">{feature.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
