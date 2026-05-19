import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhistleblowingReportForm } from "@/components/sections/whistleblowing-report-form";

export default function InviaSegnalazionePage() {
  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <section className="bg-[var(--mi-card-soft)] py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="mb-6">
              <Link
                href="/whistleblowing"
                className="mi-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black text-[#003b7a] transition hover:-translate-x-1"
              >
                <span aria-hidden="true">←</span>
                Torna a Whistleblowing
              </Link>
            </div>

            <div className="mi-panel rounded-[32px] p-6 lg:p-10">
              <div className="mb-8">
                <span className="font-heading text-xs font-extrabold uppercase tracking-[0.18em] text-[#EF3D32]">
                  Whistleblowing
                </span>
                <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                  Invia una segnalazione
                </h1>
                <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
                  Compila tutti i campi richiesti. Il sistema genera una ricevuta utile
                  per controllare lo stato della segnalazione dal sito.
                </p>
              </div>

              <WhistleblowingReportForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
