import Link from "next/link";
import { stores } from "@/data/stores";
import { FaMapMarkerAlt } from "react-icons/fa";

export function FeatureStrip() {
  return (
    <section className="bg-transparent py-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.3fr_0.85fr]">
          <div className="mi-card-gold p-5 md:p-6">
            <h3 className="font-heading text-xl font-extrabold leading-tight tracking-[-0.02em] text-[#0B3B82] md:text-2xl">
              Offerte ogni settimana
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-800 md:text-base">
              Nuove promozioni tutte le settimane.
            </p>
          </div>

          <div className="mi-card-gold p-5 md:p-6">
            <div className="font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-[#0B3B82]">
              8 punti vendita in Sicilia
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
              {stores.map((store) => (
                <span
                  key={`${store.city}-${store.province}`}
                  className="font-heading inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-white px-3 py-3 text-sm font-bold tracking-[-0.01em] text-[#0B3B82] shadow-[0_10px_20px_rgba(11,59,130,0.08)]"
                >
                  <FaMapMarkerAlt className="shrink-0 text-red-500" />
                  <span className="text-center leading-tight">{store.city}</span>
                </span>
              ))}
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

          <div className="mi-card-gold p-5 md:p-6">
            <h3 className="font-heading text-xl font-extrabold leading-tight tracking-[-0.02em] text-[#0B3B82] md:text-2xl">
              Community e WhatsApp
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-800 md:text-base">
              Offerte e assistenza sempre a portata di mano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
