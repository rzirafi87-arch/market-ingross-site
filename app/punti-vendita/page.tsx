import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { stores } from "@/data/stores";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function PuntiVenditaPage() {
  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-12">
          <div className="mb-8 text-center">
            <h1 className="font-heading text-4xl font-extrabold text-[#0B3B82] md:text-5xl">
              I nostri punti vendita
            </h1>

            <p className="mt-3 text-base text-slate-700 md:text-lg">
              Scopri tutti i Market Ingross presenti in Sicilia.
            </p>
          </div>

          <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stores.map((store) => (
              <div
                key={store.slug}
                className="mi-card overflow-hidden rounded-3xl"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={store.image}
                    alt={`${store.city} (${store.province})`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h2 className="font-heading flex items-center gap-2 text-2xl font-bold text-[#0B3B82]">
                    <FaMapMarkerAlt className="shrink-0 text-red-500" />
                    {store.city} ({store.province})
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    {store.address}
                    <br />
                    Tel. {store.phone}
                    <br />
                    {store.hours}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={store.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-heading inline-block rounded-xl border border-[#0B3B82] px-4 py-2.5 font-semibold text-[#0B3B82] transition hover:bg-blue-50"
                    >
                      Dove siamo
                    </a>

                    <Link
                      href={`/volantino?store=${store.slug}`}
                      className="font-heading inline-block rounded-xl bg-[#0B3B82] px-4 py-2.5 font-semibold text-white transition hover:bg-[#082d63]"
                    >
                      Vedi volantino
                    </Link>

                    <Link
                      href={`/punti-vendita/${store.slug}/foto`}
                      className="font-heading inline-block rounded-xl bg-[#ef382f] px-4 py-2.5 font-bold text-white shadow-md transition hover:scale-[1.02]"
                    >
                      Vedi foto
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mi-panel mx-auto max-w-3xl rounded-[28px] p-4 md:p-5">
            <div className="mb-3 text-center">
              <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                Dove siamo in Sicilia
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Una panoramica dei nostri punti vendita sul territorio.
              </p>
            </div>

            <div className="overflow-hidden rounded-[22px] bg-[#f8f3df]">
              <Image
                src="/images/stores/mappa-sicilia-market-ingross-v2.png"
                alt="Mappa Sicilia Market Ingross"
                width={1600}
                height={1000}
                className="mx-auto h-auto w-full max-w-2xl object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
