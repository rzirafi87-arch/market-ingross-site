import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function NuovaAperturaGelaPage() {
  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <section className="bg-slate-50 py-14 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <Link
              href="/news/aperture"
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#003b7a] shadow-sm transition hover:-translate-x-1"
            >
              <span aria-hidden="true">&larr;</span>
              Torna alle aperture
            </Link>

            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.18em] text-[#EF3D32]">
              News e aperture
            </p>
            <h1 className="font-heading mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-[#0B3B82] md:text-6xl">
              Nuova apertura Market Ingross a Gela
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Market Ingross arriva a Gela con un punto vendita pensato per
              offrire convenienza, reparti curati e un assortimento completo
              per la spesa di ogni giorno.
            </p>
          </div>
        </section>

        <section className="bg-transparent py-14">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
            <article className="mi-card overflow-hidden rounded-[30px] bg-white p-4 md:p-6">
              <div className="overflow-hidden rounded-[24px] bg-black shadow-lg">
                <iframe
                  className="aspect-video w-full"
                  src="https://www.youtube.com/embed/HzyDMsfo7_E"
                  title="Market Ingross - Nuova apertura Gela"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="mt-6 rounded-[24px] bg-[#fff7d1] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Punto vendita di Gela
                </h2>
                <p className="mt-3 text-base font-semibold text-slate-800">
                  Via Enrico Mattei, Gela
                </p>
                <p className="mt-3 leading-7 text-slate-700">
                  Ti aspettiamo con tante offerte, prodotti freschi e tutto il
                  risparmio Market Ingross.
                </p>
              </div>
            </article>

            <aside className="mi-card h-fit rounded-[30px] bg-white p-6">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#EF3D32]">
                Informazioni
              </p>
              <h2 className="font-heading mt-3 text-2xl font-extrabold text-[#0B3B82]">
                Gela - Via Enrico Mattei
              </h2>
              <p className="mt-4 leading-7 text-slate-700">
                Scopri il punto vendita e consulta le promozioni attive
                disponibili nei nostri supermercati.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/punti-vendita"
                  className="font-heading rounded-xl bg-[#0B3B82] px-5 py-3 text-center font-bold text-white shadow-md transition hover:bg-[#082d63]"
                >
                  Vai ai punti vendita
                </Link>
                <Link
                  href="/volantino"
                  className="font-heading rounded-xl bg-[#EF3D32] px-5 py-3 text-center font-bold text-white shadow-md transition hover:opacity-90"
                >
                  Sfoglia il volantino
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
