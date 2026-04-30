import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { departments } from "@/data/departments";

type DepartmentGalleryPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DepartmentGalleryPage({
  params,
}: DepartmentGalleryPageProps) {
  const { slug } = await params;
  const department = departments.find((item) => item.slug === slug);

  if (!department) {
    notFound();
  }

  const photos =
    department.gallery && department.gallery.length > 0
      ? department.gallery
      : [department.image];

  return (
    <main className="min-h-screen bg-[var(--mi-page)]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#ef382f]">
            Reparto Market Ingross
          </p>

          <h1 className="text-4xl font-black tracking-tight text-[#003b7a] md:text-5xl">
            Foto {department.name}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#003b7a]/80">
            Scopri il nostro reparto {department.name.toLowerCase()}: qualità,
            assortimento e convenienza ogni giorno.
          </p>

          <div className="mt-6">
            <Link
              href="/reparti"
              className="inline-flex rounded-xl bg-[#003b7a] px-5 py-3 text-sm font-black text-white shadow-md transition hover:scale-[1.02]"
            >
              Torna ai reparti
            </Link>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={`${photo}-${index}`}
              className="relative h-72 overflow-hidden rounded-[30px] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.16)]"
            >
              <Image
                src={photo}
                alt={`${department.name} foto ${index + 1}`}
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
