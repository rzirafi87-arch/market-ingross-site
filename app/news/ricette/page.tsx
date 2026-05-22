import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { newsItems } from "@/data/news";
import { ricetteMonthIndexBySlug } from "@/data/ricette/ricette";

export const revalidate = 86400;

function normalizeText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value: string): string {
  return normalizeText(value)
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolveRecipeMonthBySlug(href: string): number | null {
  const hrefSlug = href.split("/").filter(Boolean).at(-1) ?? "";
  const normalizedHrefSlug = slugify(hrefSlug);

  if (!normalizedHrefSlug) {
    return null;
  }

  if (ricetteMonthIndexBySlug[normalizedHrefSlug] !== undefined) {
    return ricetteMonthIndexBySlug[normalizedHrefSlug];
  }

  for (const [recipeSlug, monthIndex] of Object.entries(ricetteMonthIndexBySlug)) {
    if (normalizedHrefSlug.includes(recipeSlug) || recipeSlug.includes(normalizedHrefSlug)) {
      return monthIndex;
    }
  }

  return null;
}

const currentMonthIndex = new Date().getMonth();
const previousMonthIndex = (currentMonthIndex + 11) % 12;
const nextMonthIndex = (currentMonthIndex + 1) % 12;

function monthPriority(monthIndex: number | null): number {
  if (monthIndex === currentMonthIndex) {
    return 0;
  }
  if (monthIndex === previousMonthIndex) {
    return 1;
  }
  if (monthIndex === nextMonthIndex) {
    return 2;
  }
  if (monthIndex !== null) {
    return 3;
  }
  return 4;
}

const items = newsItems
  .filter((item) => item.categoryKey === "ricette")
  .map((item, index) => {
    const itemMonth = resolveRecipeMonthBySlug(item.href);
    return {
      item,
      index,
      priority: monthPriority(itemMonth),
    };
  })
  .sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    }
    return a.index - b.index;
  })
  .map(({ item }) => item);

export default function NewsRicettePage() {
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
            </div>
            <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h1 className="text-4xl font-extrabold text-[#0B3B82] md:text-6xl">Ricette</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  Piatti tipici siciliani, ricette stagionali e idee semplici da portare in tavola.
                </p>
              </div>

              <div className="relative w-full max-w-[460px] lg:w-[460px]">
                <Image
                  src="/images/news/sapori-di-casa-trasparente.png"
                  alt="Logo Sapori di Casa"
                  width={1836}
                  height={496}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-transparent py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {items.length === 0 ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-600 shadow-sm">
                Nessuna news disponibile in questa categoria al momento.
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 min-[1750px]:grid-cols-4">
                {items.map((item) => (
                  <article
                    key={item.title}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex items-stretch gap-3 p-3">
                      <Link href={item.href} className="block w-[42%] max-w-[190px] shrink-0">
                        {item.cardImage ? (
                          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 p-1">
                            <Image
                              src={item.cardImage}
                              alt={item.title}
                              fill
                              sizes="(max-width: 640px) 42vw, (max-width: 1280px) 22vw, (max-width: 1750px) 16vw, 11vw"
                              className="object-contain"
                            />
                          </div>
                        ) : item.videoId ? (
                          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-black">
                            <iframe
                              className="h-full w-full"
                              src={`https://www.youtube.com/embed/${item.videoId}`}
                              title={item.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                          </div>
                        ) : (
                          <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-slate-200 p-2 text-xs text-slate-500">
                            <span>Immagine non disponibile</span>
                          </div>
                        )}
                      </Link>

                      <div className="min-w-0 flex-1">
                        <Link href={item.href} className="block">
                          <h2 className="line-clamp-3 text-base font-bold leading-5 text-[#0B3B82]">
                            {item.title}
                          </h2>
                          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{item.text}</p>
                        </Link>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <Link href={item.href} className="inline-block text-sm font-semibold text-[#EF3D32]">
                            Vedi la ricetta →
                          </Link>
                          {item.guideIllustration && (
                            <a
                              href={item.guideIllustration}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block rounded bg-[#f4d51f] px-4 py-2 text-xs font-bold text-[#063b78] shadow hover:bg-[#ffe066]"
                            >
                              Guida illustrativa
                            </a>
                          )}
                          {item.flyerPdf && (
                            <a
                              href={item.flyerPdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block rounded bg-[#f4d51f] px-4 py-2 text-xs font-bold text-[#063b78] shadow hover:bg-[#ffe066]"
                            >
                              Volantino
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
