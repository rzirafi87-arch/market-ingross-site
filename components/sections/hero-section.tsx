import Link from "next/link";
import { stores } from "@/data/stores";
import { FaMapMarkerAlt } from "react-icons/fa";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <div className="font-heading mb-4 inline-flex w-fit rounded-full bg-[var(--mi-card-soft)] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#0B3B82]">
            Market Ingross in Sicilia
          </div>

          <h1 className="font-heading max-w-3xl text-5xl font-extrabold leading-[0.94] tracking-[-0.04em] text-[#0B3B82] md:text-7xl">
            Il Re del Risparmio,
            <br />
            ogni giorno vicino a te
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
            Offerte settimanali, reparti freschi e convenienza nei punti vendita
            Market Ingross in Sicilia.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/volantino"
              className="font-heading rounded-xl bg-[#EF3D32] px-8 py-4 text-sm font-extrabold uppercase tracking-[0.04em] text-white transition hover:opacity-90"
            >
              Sfoglia il volantino
            </Link>
          </div>
        </div>

        <div className="flex items-center">
          <div className="mi-card w-full p-6 lg:p-7">
            <div className="rounded-2xl bg-transparent p-5 md:p-6">
              <div className="font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-slate-700">
                {stores.length} punti vendita in Sicilia
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
                {stores.map((store) => (
                  <span
                    key={`${store.city}-${store.province}`}
                    className="font-heading inline-flex min-h-[58px] items-center justify-center gap-2 rounded-xl border border-[#0B3B82]/10 bg-[var(--mi-card-soft)] px-4 py-3 text-sm font-bold tracking-[-0.01em] text-[#0B3B82] shadow-[0_8px_20px_rgba(11,59,130,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(11,59,130,0.16)]"
                  >
                    <FaMapMarkerAlt className="shrink-0 text-red-500" />
                    <span className="text-center leading-tight">{store.city}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/punti-vendita"
                className="font-heading rounded-xl bg-[#0B3B82] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.04em] text-white transition hover:opacity-90"
              >
                Vai ai punti vendita
              </Link>

              <Link
                href="/reparti"
                className="font-heading rounded-xl border-2 border-[#0B3B82] px-5 py-3 text-sm font-bold uppercase tracking-[0.04em] text-[#0B3B82] transition hover:bg-blue-50"
              >
                Scopri i reparti
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
