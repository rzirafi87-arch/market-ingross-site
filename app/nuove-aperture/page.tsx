import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { openings } from "@/data/openings";

export default function NuoveAperturePage() {
  // Separa aperture attive e precedenti
  const activeOpenings = openings.filter((opening) => opening.isActive);
  const previousOpenings = openings.filter((opening) => !opening.isActive);

  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="mb-16 text-center">
            <div className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#EF3D32]">
              Crescita e innovazione
            </div>

            <h1 className="font-heading mt-3 text-4xl font-extrabold text-[#0B3B82] md:text-5xl">
              Nuove aperture Market Ingross
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
              Scopri dove stiamo arrivando. Nuove aperture, reparti freschi e
              convenienza nei tuoi quartieri.
            </p>
          </div>

          {/* Aperture attive */}
          {activeOpenings.length > 0 && (
            <section className="mb-20">
              <h2 className="font-heading text-2xl font-bold text-[#0B3B82] mb-8">
                🎉 Prossime aperture
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {activeOpenings.map((opening) => (
                  <Link
                    key={opening.slug}
                    href={`/nuove-aperture/${opening.slug}`}
                    className="group mi-card overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={opening.image}
                        alt={opening.title}
                        fill
                        className="object-cover transition group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3B82]/80 to-[#003b7a]/60" />

                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#FFD22E] mb-2">
                          Nuova apertura
                        </p>

                        <h3 className="font-heading text-2xl font-black text-white">
                          {opening.title}
                        </h3>

                        <p className="mt-2 text-white/90 font-semibold">
                          {opening.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-sm text-slate-600 leading-6">
                        {opening.description}
                      </p>

                      <div className="mt-4 inline-flex rounded-lg bg-[#FFD22E] px-3 py-1 text-xs font-bold text-[#0B3B82] uppercase tracking-wide">
                        Scopri di più →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Aperture precedenti */}
          {previousOpenings.length > 0 && (
            <section>
              <h2 className="font-heading text-2xl font-bold text-[#0B3B82] mb-8">
                ✓ Aperture passate
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {previousOpenings.map((opening) => (
                  <div
                    key={opening.slug}
                    className="mi-card overflow-hidden rounded-3xl opacity-75"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={opening.image}
                        alt={opening.title}
                        fill
                        className="object-cover grayscale"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-600/80 to-slate-700/60" />

                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-white/70 mb-2">
                          Apertura avvenuta
                        </p>

                        <h3 className="font-heading text-2xl font-black text-white/90">
                          {opening.title}
                        </h3>

                        <p className="mt-2 text-white/75 font-semibold">
                          {opening.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-sm text-slate-500 leading-6">
                        {opening.description}
                      </p>

                      <div className="mt-4 inline-flex rounded-lg bg-slate-300 px-3 py-1 text-xs font-bold text-slate-600 uppercase tracking-wide">
                        Completata
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {openings.length === 0 && (
            <div className="mi-panel rounded-[28px] p-8 text-center">
              <p className="text-lg text-slate-600">
                Non ci sono ancora nuove aperture annunciate. Resta aggiornato
                per scoprire i prossimi punti vendita Market Ingross in Sicilia!
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex rounded-xl bg-[#0B3B82] px-6 py-3 font-heading text-sm font-bold text-white transition hover:opacity-90"
              >
                Torna alla home
              </Link>
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
