import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { getWhistleblowingReportByReceipt } from "@/lib/whistleblowing";

type StatoPageProps = {
  searchParams: Promise<{ ricevuta?: string }>;
};

export default async function StatoWhistleblowingPage({ searchParams }: StatoPageProps) {
  const { ricevuta } = await searchParams;
  const receiptCode = (ricevuta ?? "").trim();
  const report = receiptCode ? await getWhistleblowingReportByReceipt(receiptCode) : null;

  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <section className="bg-[var(--mi-card-soft)] py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="mi-panel rounded-[32px] p-8 lg:p-12">
              <span className="font-heading text-xs font-extrabold uppercase tracking-[0.18em] text-[#EF3D32]">
                Whistleblowing
              </span>
              <h1 className="font-heading mt-4 text-4xl font-extrabold text-[#0B3B82]">
                Stato segnalazione
              </h1>

              {!receiptCode && (
                <p className="mt-6 text-base leading-8 text-slate-700">
                  Inserisci un codice ricevuta valido dalla pagina Whistleblowing.
                </p>
              )}

              {receiptCode && !report && (
                <div className="mt-6 rounded-2xl border border-[#EF3D32]/30 bg-[#EF3D32]/10 p-5 text-[#7A1E1A]">
                  Nessuna segnalazione trovata per la ricevuta <strong>{receiptCode}</strong>.
                </div>
              )}

              {report && (
                <div className="mt-6 rounded-2xl border border-[#0B3B82]/20 bg-white p-6 text-slate-800">
                  <p className="text-sm text-slate-600">Codice ricevuta</p>
                  <p className="text-xl font-black text-[#0B3B82]">{report.receiptCode}</p>

                  <p className="mt-4 text-sm text-slate-600">Stato attuale</p>
                  <p className="text-lg font-bold">{report.status}</p>

                  <p className="mt-4 text-sm text-slate-600">Data creazione</p>
                  <p className="font-semibold">
                    {new Date(report.createdAt).toLocaleString("it-IT")}
                  </p>
                </div>
              )}

              <div className="mt-8">
                <Link
                  href="/whistleblowing"
                  className="inline-flex rounded-xl bg-[#0B3B82] px-5 py-3 text-sm font-black text-white"
                >
                  Torna alla pagina Whistleblowing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
