import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { newsItems } from "@/data/news";

const items = newsItems.filter((item) => item.categoryKey === "iniziative");

export default function NewsIniziativePage() {
  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Link
              href="/news"
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#003b7a] shadow-sm transition hover:-translate-x-1"
            >
              <span aria-hidden="true">←</span>
              Torna a News
            </Link>
            <h1 className="mt-3 text-4xl font-extrabold text-[#0B3B82] md:text-6xl">Iniziative</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Eventi, progetti e iniziative Market Ingross dedicate al territorio.
            </p>
          </div>
        </section>

        <section className="bg-transparent py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {items.length === 0 ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-600 shadow-sm">
                Nessuna news disponibile in questa categoria al momento.
              </div>
            ) : null}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
