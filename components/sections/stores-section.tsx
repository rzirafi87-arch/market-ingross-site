import Image from "next/image";
import Link from "next/link";
import { stores } from "@/data/stores";

export function StoresSection() {
  return (
    <section id="punti-vendita" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#EF3D32]">
              Rete vendita
            </div>

            <h2 className="font-heading mt-2 text-4xl font-extrabold text-[#0B3B82]">
              Trova il Market Ingross più vicino
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Siamo presenti in Sicilia con punti vendita facili da raggiungere,
              pronti ad offrirti convenienza, assortimento e servizio.
            </p>
          </div>

          <div>
            <Link
              href="/punti-vendita"
              className="font-heading inline-flex rounded-xl bg-[#0B3B82] px-5 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Vedi tutti i negozi
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stores.map((store) => (
            <div
              key={`${store.city}-${store.province}`}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={store.image}
                  alt={`${store.city} (${store.province})`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-[#0B3B82]">
                  {store.city} ({store.province})
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {store.address}
                  <br />
                  Tel. {store.phone}
                  <br />
                  {store.hours}
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href={store.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-heading inline-block rounded-xl border border-[#0B3B82] px-4 py-2.5 text-center font-semibold text-[#0B3B82] transition hover:bg-blue-50"
                  >
                    Dove siamo
                  </a>

                  <a
                    href={store.image}
                    target="_blank"
                    rel="noreferrer"
                    className="font-heading inline-block rounded-xl bg-[#0B3B82] px-4 py-2.5 text-center font-semibold text-white transition hover:opacity-90"
                  >
                    Vedi foto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
