import Image from "next/image";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { companyInfo } from "@/data/stores";

const roles = [
  "Addetto vendita",
  "Cassiere/a",
  "Responsabile reparto",
  "Magazziniere",
  "Addetto gastronomia / freschi",
  "Figure amministrative e di supporto",
];

export default function LavoraConNoiPage() {
  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold uppercase tracking-wide text-red-500">
                  Carriere
                </span>
                <h1 className="mt-3 text-4xl font-extrabold text-[#0B3B82] md:text-6xl">
                  Entra nel team Market Ingross
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Cerchiamo persone motivate, dinamiche e orientate al cliente,
                  pronte a crescere insieme a noi.
                </p>
                <div className="mt-8">
                  <a
                    href="#candidatura"
                    className="rounded-xl bg-[#EF3D32] px-6 py-3.5 font-semibold text-white transition hover:opacity-90"
                  >
                    Invia la tua candidatura
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl bg-white p-3 shadow-sm">
                <div className="relative h-80 overflow-hidden rounded-[22px]">
                  <Image
                    src="/images/careers/team_market_ingross.jpg"
                    alt="Entra nel team Market Ingross"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-extrabold text-[#0B3B82]">
                  Perché lavorare con noi
                </h2>
                <div className="mt-8 grid gap-4">
                  {[
                    "Ambiente dinamico e orientato al cliente",
                    "Opportunità di crescita professionale",
                    "Valorizzazione delle competenze",
                    "Lavoro di squadra e attenzione al territorio",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-slate-50 p-5">
                      <p className="font-medium text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold text-[#0B3B82]">
                  Profili ricercati
                </h2>
                <div className="mt-8 grid gap-4">
                  {roles.map((role) => (
                    <div
                      key={role}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <p className="font-semibold text-[#0B3B82]">{role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="candidatura" className="bg-blue-50 py-16">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-extrabold text-[#0B3B82]">
                Invia la tua candidatura
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Compila i campi qui sotto per inviare una candidatura spontanea.
              </p>

              <form className="mt-8 grid gap-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Nome e cognome
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0B3B82]"
                    placeholder="Inserisci il tuo nome"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0B3B82]"
                    placeholder="Inserisci la tua email"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Telefono
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0B3B82]"
                    placeholder="Inserisci il tuo telefono"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Messaggio
                  </label>
                  <textarea
                    rows={6}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0B3B82]"
                    placeholder="Raccontaci qualcosa di te"
                  />
                </div>

                <div>
                  <a
                    href={`mailto:${companyInfo.email}?subject=Candidatura%20Market%20Ingross`}
                    className="inline-block rounded-xl bg-[#EF3D32] px-6 py-3.5 font-semibold text-white transition hover:opacity-90"
                  >
                    Invia candidatura
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
