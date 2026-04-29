import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { companyInfo } from "@/data/stores";

export default function ContattiPage() {
  return (
    <div className="min-h-screen bg-[var(--mi-page)] text-slate-900">
      <SiteHeader />

      <main className="min-h-screen bg-[var(--mi-page)]">
        <section className="bg-[var(--mi-page)] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wide text-red-500">
                  Contatti
                </span>
                <h1 className="mt-3 text-4xl font-extrabold text-[#0B3B82] md:text-6xl">
                  Siamo a tua disposizione
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Per informazioni, assistenza, richieste sui punti vendita o sul
                  volantino, contattaci attraverso i nostri canali.
                </p>
              </div>

              <div className="mi-card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[#0B3B82]">
                  Contatti rapidi
                </h2>
                <ul className="mt-6 space-y-4 text-slate-600">
                  <li>
                    <span className="font-bold text-slate-900">Azienda:</span>{" "}
                    {companyInfo.companyName}
                  </li>
                  <li>
                    <span className="font-bold text-slate-900">P.IVA:</span>{" "}
                    {companyInfo.vatNumber}
                  </li>
                  <li>
                    <span className="font-bold text-slate-900">Email:</span>{" "}
                    {companyInfo.email}
                  </li>
                  <li>
                    <span className="font-bold text-slate-900">Telefono:</span>{" "}
                    {companyInfo.generalPhone}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--mi-page)] py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
            <div className="mi-card p-6 md:p-8">
              <h2 className="text-3xl font-extrabold text-[#0B3B82]">
                Scrivici
              </h2>

              <form className="mt-8 grid gap-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Nome e cognome
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#003b7a] focus:ring-2 focus:ring-[#003b7a]/20"
                    placeholder="Inserisci il tuo nome"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#003b7a] focus:ring-2 focus:ring-[#003b7a]/20"
                    placeholder="Inserisci la tua email"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Oggetto
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#003b7a] focus:ring-2 focus:ring-[#003b7a]/20"
                    placeholder="Oggetto del messaggio"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#003b7a]">
                    Punto vendita di riferimento
                  </label>
                  <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#003b7a] focus:ring-2 focus:ring-[#003b7a]/20">
                    <option>Seleziona un punto vendita</option>
                    <option>Rosolini</option>
                    <option>Ispica</option>
                    <option>Canicattì</option>
                    <option>Gela</option>
                    <option>Agrigento</option>
                    <option>Vittoria</option>
                    <option>Castelvetrano</option>
                    <option>Ragusa</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Messaggio
                  </label>
                  <textarea
                    rows={6}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#003b7a] focus:ring-2 focus:ring-[#003b7a]/20"
                    placeholder="Scrivi qui il tuo messaggio"
                  />
                </div>

                <div>
                  <a
                    href={`mailto:${companyInfo.email}?subject=Richiesta informazioni Market Ingross`}
                    className="inline-block rounded-xl bg-[#EF3D32] px-6 py-3.5 font-semibold text-white transition hover:opacity-90"
                  >
                    Invia messaggio
                  </a>
                </div>
              </form>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[28px] border border-green-200 bg-green-50 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.10)]">
                <h2 className="font-heading text-3xl font-extrabold text-[#0B3B82]">
                  Hai bisogno di aiuto?
                </h2>

                <p className="mt-4 leading-8 text-slate-700">
                  Per richieste rapide sui punti vendita, sul volantino o sulle
                  offerte attive, contattaci anche via WhatsApp.
                </p>

                <a
                  href={`https://wa.me/39${companyInfo.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center rounded-xl bg-green-500 px-6 py-3.5 font-heading text-sm font-extrabold text-white transition hover:opacity-90"
                >
                  Scrivici su WhatsApp
                </a>
              </div>

              <div className="mi-card p-6">
                <h3 className="text-2xl font-bold text-[#0B3B82]">
                  Dove trovarci
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Consulta la pagina dedicata ai punti vendita per trovare il
                  Market Ingross più vicino a te.
                </p>
                <a
                  href="/punti-vendita"
                  className="mt-6 inline-block rounded-xl border border-[#0B3B82] px-5 py-3 font-semibold text-[#0B3B82] transition hover:bg-blue-50"
                >
                  Vai ai punti vendita
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
