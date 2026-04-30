import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { stores } from "@/data/stores";

type StoreGalleryPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function StoreGalleryPage({ params }: StoreGalleryPageProps) {
  const { slug } = await params;
  const store = stores.find((item) => item.slug === slug);

  if (!store) {
    notFound();
  }

  const photos = store.gallery && store.gallery.length > 0 ? store.gallery : [store.image];

  return (
    <main className="min-h-screen bg-[var(--mi-page)]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pt-8">
        <Link
          href="/punti-vendita"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#003b7a] shadow-[0_10px_25px_rgba(0,0,0,0.12)] ring-1 ring-black/10 transition hover:-translate-x-1 hover:bg-[#FFD22E]"
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
            Foto Market Ingross {store.city}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#003b7a]/80">
            Guarda gli spazi, i reparti e l'atmosfera del nostro punto vendita.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={`${photo}-${index}`}
              className="relative h-72 overflow-hidden rounded-[30px] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.16)]"
            >
              <Image
                src={photo}
                alt={`${store.city} foto ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
