import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function NuoveAperturePage() {
  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="mb-16 text-center">
            <div className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#EF3D32]">
              Crescita e innovazione
            </div>

            <h1 className="font-heading mt-3 text-4xl font-extrabold text-[#0B3B82] md:text-5xl">
              Nuove aperture Market Ingross
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
              In questa sezione verranno pubblicate le prossime aperture.
            </p>
          </div>

          <div className="mi-panel rounded-[28px] p-8 text-center">
            <p className="text-lg text-slate-600">
              Al momento non ci sono aperture in programma. Torna presto per
              scoprire le prossime novita.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-xl bg-[#0B3B82] px-6 py-3 font-heading text-sm font-bold text-white transition hover:opacity-90"
            >
              Torna alla home
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
