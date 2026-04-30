import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import Image from "next/image";

const openings = [
  {
    title: "Nuova apertura Market Ingross",
    city: "Agrigento",
    description:
      "Scopri il nuovo punto vendita Market Ingross con offerte, reparti freschi e convenienza ogni giorno.",
    image: "/images/stores/agrigento.jpg",
  },
  {
    title: "Nuova apertura Market Ingross",
    city: "Vittoria",
    description:
      "Un nuovo supermercato pensato per portare qualita, risparmio e vicinanza al territorio.",
    image: "/images/stores/vittoria.jpg",
  },
  {
    title: "Nuova apertura Market Ingross",
    city: "Ragusa",
    description:
      "Market Ingross continua a crescere in Sicilia con nuovi punti vendita e nuovi servizi.",
    image: "/images/stores/ragusa.jpg",
  },
];

export default function NuoveAperturePage() {
  return (
    <main className="min-h-screen bg-[var(--mi-page)]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#ef382f]">
            Market Ingross cresce
          </p>
          <h1 className="text-4xl font-black tracking-tight text-[#003b7a] md:text-6xl">
            Nuove aperture
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#003b7a]/80 md:text-lg">
            Scopri i nuovi punti vendita Market Ingross e le prossime aperture
            in Sicilia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {openings.map((item) => (
            <article
              key={item.city}
              className="overflow-hidden rounded-[28px] bg-white shadow-[0_16px_35px_rgba(0,0,0,0.14)]"
            >
              <div className="relative h-56 w-full">
                <Image src={item.image} alt={item.city} fill className="object-cover" />
              </div>

              <div className="p-6">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-[#ef382f]">
                  {item.city}
                </p>
                <h2 className="text-2xl font-black text-[#003b7a]">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#003b7a]/80">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
