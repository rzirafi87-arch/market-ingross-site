import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { visibleStores } from "@/data/stores";

type StoreGalleryPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function StoreGalleryPage({ params }: StoreGalleryPageProps) {
  const { slug } = await params;
  const store = visibleStores.find((item) => item.slug === slug);

  if (!store) {
    notFound();
  }

  const storeDisplayName = store.label ?? store.city;

  const hasPhotos = store.gallery && store.gallery.length > 0;

  return (
    <main className="min-h-screen bg-[var(--mi-page)]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pt-8">
        <Link
          href="/punti-vendita"
          className="mi-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black text-[#003b7a] transition hover:-translate-x-1 hover:bg-[#FFD22E]"
        >
          <span aria-hidden="true">←</span>
          Torna ai punti vendita
        </Link>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#ef382f]">
            Punto vendita
          </p>
          <h1 className="text-4xl font-black tracking-tight text-[#003b7a] md:text-5xl">
            Foto Market Ingross {storeDisplayName}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#003b7a]/80">
            Guarda gli spazi, i reparti e l&apos;atmosfera del nostro punto vendita.
          </p>
        </div>

        {hasPhotos ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {store.gallery.map((photo, index) => (
              <div
                key={`${photo}-${index}`}
                className="mi-card relative h-72 overflow-hidden rounded-[30px]"
              >
                <Image
                  src={photo}
                  alt={`${storeDisplayName} foto ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative mb-6 h-40 w-72">
              <Image
                src="/images/logo/market-ingross-logo.png"
                alt="Market Ingross logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-base font-semibold text-[#003b7a]/60">
              Le foto di questo punto vendita saranno disponibili a breve.
            </p>
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
