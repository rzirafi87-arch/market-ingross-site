import Image from "next/image";
import Link from "next/link";
import { MapPin, Navigation, Store } from "lucide-react";
import { visibleStores } from "@/data/stores";

export function StoresSection() {
  const stores = [...visibleStores].sort((a, b) => {
    const city = a.city.localeCompare(b.city, "it");
    if (city !== 0) return city;
    return (a.label ?? a.address).localeCompare(b.label ?? b.address, "it");
  });

  return (
    <section id="punti-vendita" className="bg-[#f6f8fb] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mi-section-kicker">I nostri supermercati</p>
            <h2 className="mi-section-title mt-3 text-4xl leading-[1.02] sm:text-5xl">
              Trova il Market Ingross più vicino a te
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              9 punti vendita in Sicilia, un unico modo di fare la spesa: convenienza, qualità e servizio ogni giorno.
            </p>
            <Link
              href="/punti-vendita"
              className="font-heading mt-7 inline-flex items-center gap-2 rounded-xl border-2 border-[#003B7A] px-5 py-3 text-sm font-extrabold text-[#003B7A] transition hover:bg-[#003B7A] hover:text-white"
            >
              <Store size={18} />
              Vedi tutti i punti vendita
            </Link>
          </div>

          <div className="overflow-hidden rounded-[28px] bg-white p-4 shadow-[0_18px_50px_rgba(0,43,91,0.09)]">
            <Image
              src="/images/stores/mappa-sicilia-market-ingross-v2.png"
              alt="Mappa dei punti vendita Market Ingross in Sicilia"
              width={1600}
              height={1000}
              className="h-auto w-full rounded-[22px] object-contain"
            />
          </div>
        </div>

        <div className="mi-scrollbar mt-10 flex snap-x gap-5 overflow-x-auto pb-4">
          {stores.map((store) => (
            <article
              key={store.slug}
              className="mi-card min-w-[280px] max-w-[280px] snap-start overflow-hidden sm:min-w-[310px] sm:max-w-[310px]"
            >
              <div className="relative h-44">
                <Image
                  src={store.image}
                  alt={store.label ?? store.city}
                  fill
                  sizes="310px"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl font-extrabold text-[#003B7A]">
                  {store.label ?? store.city + " (" + store.province + ")"}
                </h3>
                <p className="mt-3 min-h-[64px] text-sm leading-6 text-slate-600">
                  {store.address}
                  <br />
                  {store.hours}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <a
                    href={store.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-heading inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#003B7A]/20 px-3 py-2.5 text-xs font-bold text-[#003B7A] transition hover:border-[#003B7A]"
                  >
                    <Navigation size={15} />
                    Indicazioni
                  </a>
                  <Link
                    href={"/volantino?store=" + store.slug}
                    className="font-heading inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#FFD51F] px-3 py-2.5 text-xs font-extrabold text-[#003B7A] transition hover:bg-[#f4c900]"
                  >
                    <MapPin size={15} />
                    Volantino
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
