import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { newsItems } from "@/data/news";

const items = newsItems.filter((item) => item.categoryKey === "consigli-spesa");

export default function NewsConsigliSpesaPage() {
  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-6 flex flex-wrap gap-3">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#003b7a] shadow-sm transition hover:-translate-x-1"
              >
                <span aria-hidden="true">←</span>
                Torna alle News
              </Link>
              <Link
                href="/news/consigli-per-la-spesa"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#003b7a] shadow-sm transition hover:-translate-x-1"
              >
                <span aria-hidden="true">🛒</span>
                Torna ai Consigli
              </Link>
            </div>
            <h1 className="mt-3 text-4xl font-extrabold text-[#0B3B82] md:text-6xl">Consigli per la spesa</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Guide pratiche per scegliere meglio, risparmiare tempo e fare acquisti più sicuri.
            </p>
          </div>
        </section>

        <section className="bg-transparent py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <a href={item.href} className="block">
                    {item.cardImage ? (
                      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                        <Image src={item.cardImage} alt={item.title} fill className="object-cover" />
                      </div>
                    ) : item.videoId ? (
                      <div className="aspect-video w-full overflow-hidden bg-black">
                        <iframe
                          className="h-full w-full"
                          src={`https://www.youtube.com/embed/${item.videoId}`}
                          title={item.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-video w-full items-center justify-center bg-slate-200 text-3xl text-slate-400">
                        <span>Video non disponibile</span>
                      </div>
                    )}
                    <div className="p-6">
                      <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-600">
                        {item.category}
                      </span>
                      <h2 className="mt-4 text-2xl font-bold text-[#0B3B82]">{item.title}</h2>
                      <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                      <div className="mt-5 flex flex-wrap items-center gap-3">
                        <span className="inline-block font-semibold text-[#EF3D32]">Guarda la news →</span>
                      </div>
                    </div>
                  </a>
                  {item.guideIllustration && (
                    <div className="px-6 pb-3">
                      <a
                        href={item.guideIllustration}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded bg-[#f4d51f] px-4 py-2 text-xs font-bold text-[#063b78] shadow hover:bg-[#ffe066]"
                      >
                        Guida illustrativa
                      </a>
                    </div>
                  )}
                  {item.flyerPdf && (
                    <div className="px-6 pb-6">
                      <a
                        href={item.flyerPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded bg-[#f4d51f] px-4 py-2 text-xs font-bold text-[#063b78] shadow hover:bg-[#ffe066]"
                      >
                        Volantino
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
