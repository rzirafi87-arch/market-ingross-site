import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { openings } from "@/data/openings";

type OpeningPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OpeningPage({ params }: OpeningPageProps) {
  const { slug } = await params;
  const opening = openings.find((item) => item.slug === slug);

  if (!opening || !opening.isActive) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--mi-page)]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#ef382f]">
              Nuova apertura
            </p>

            <h1 className="text-4xl font-black leading-tight text-[#003b7a] md:text-6xl">
              {opening.title}
            </h1>

            <p className="mt-4 text-xl font-bold text-[#003b7a]">{opening.subtitle}</p>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#003b7a]/80">
              {opening.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {opening.mapsUrl && opening.mapsUrl !== "#" && (
                <Link
                  href={opening.mapsUrl}
                  target="_blank"
                  className="rounded-xl bg-[#003b7a] px-5 py-3 text-sm font-black text-white shadow-md transition hover:scale-[1.02]"
                >
                  Dove siamo
                </Link>
              )}

              <a
                href="#volantino-apertura"
                className="rounded-xl bg-[#ef382f] px-5 py-3 text-sm font-black text-white shadow-md transition hover:scale-[1.02]"
              >
                Sfoglia il volantino
              </a>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-[32px] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
            <Image src={opening.image} alt={opening.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      <section id="volantino-apertura" className="mx-auto max-w-5xl px-4 pb-16 md:pb-20">
        <div className="mb-6 rounded-[28px] bg-white p-6 shadow-[0_16px_35px_rgba(0,0,0,0.14)]">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-[#ef382f]">
            Volantino dedicato
          </p>

          <h2 className="text-3xl font-black text-[#003b7a]">{opening.flyerTitle}</h2>

          <p className="mt-2 text-sm text-[#003b7a]/75">
            Validita: {opening.flyerValidFrom} - {opening.flyerValidTo}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {opening.flyerPages.map((page, index) => (
            <div
              key={page}
              className="overflow-hidden rounded-[24px] bg-white p-3 shadow-[0_16px_35px_rgba(0,0,0,0.14)]"
            >
              <Image
                src={page}
                alt={`${opening.flyerTitle} pagina ${index + 1}`}
                width={900}
                height={1200}
                className="h-auto w-full rounded-[18px]"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={opening.flyerPdf}
            target="_blank"
            className="inline-flex rounded-xl bg-[#ef382f] px-6 py-3 text-sm font-black text-white shadow-md transition hover:scale-[1.02]"
          >
            Scarica il volantino nuova apertura
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
