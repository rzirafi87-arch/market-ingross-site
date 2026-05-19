import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import Link from "next/link";

export default function WhistleblowingPage() {
  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <section className="bg-[var(--mi-card-soft)] py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <div className="mi-panel rounded-[32px] p-8 lg:p-12">
              <div className="mb-10">
                <span className="font-heading text-xs font-extrabold uppercase tracking-[0.18em] text-[#EF3D32]">
                  Area legale
                </span>

                <h1 className="font-heading mt-4 text-4xl font-extrabold leading-[0.96] tracking-[-0.03em] text-[#0B3B82] md:text-5xl">
                  Whistleblowing
                </h1>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Piattaforma informativa del gruppo per la gestione delle
                  segnalazioni di illeciti, in forma anonima e riservata.
                </p>
              </div>

              <div className="space-y-10 text-slate-700">
                <section>
                  <p className="leading-8">
                    In ottemperanza alla normativa vigente in materia di
                    Whistleblowing, il Gruppo Market Ingross ha attivato un
                    canale dedicato che consente al segnalante di inviare, in
                    modo anonimo e riservato, segnalazioni relative a possibili
                    illeciti.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    Tipologie di segnalazioni
                  </h2>
                  <ol className="mt-4 list-decimal space-y-3 pl-6 leading-8">
                    <li>Illeciti amministrativi, contabili, civili o penali.</li>
                    <li>
                      Condotte illecite rilevanti ai sensi del decreto
                      legislativo 8 giugno 2001, n. 231.
                    </li>
                    <li>
                      Illeciti che rientrano nell&apos;ambito di applicazione degli
                      atti dell&apos;Unione europea o nazionali.
                    </li>
                    <li>
                      Atti od omissioni che ledono gli interessi finanziari
                      dell&apos;Unione europea.
                    </li>
                    <li>
                      Atti od omissioni riguardanti il mercato interno.
                    </li>
                  </ol>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    Ambito di utilizzo del canale
                  </h2>
                  <p className="mt-4 leading-8">
                    Il canale Whistleblowing non è destinato a segnalazioni
                    legate a interessi personali del dipendente o a questioni
                    riconducibili esclusivamente al proprio rapporto individuale
                    di lavoro. Tali comunicazioni saranno valutate, ove
                    applicabile, attraverso i canali ordinari previsti.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    Ricevuta della segnalazione
                  </h2>
                  <p className="mt-4 leading-8">
                    Al ricevimento della segnalazione via email verrà generata
                    automaticamente una ricevuta, che sarà inviata direttamente
                    al canale Whistleblowing del gruppo.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    Invia una segnalazione
                  </h2>
                  <div className="mt-4 rounded-2xl border border-[#0B3B82]/15 bg-white/80 p-6">
                    <p className="leading-8">
                      Puoi compilare il modulo dedicato per inviare la tua
                      segnalazione al canale Whistleblowing del gruppo.
                    </p>
                    <Link
                      href="/whistleblowing/invia-segnalazione"
                      className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#0B3B82] px-5 py-3 text-sm font-black text-white transition hover:scale-[1.02]"
                    >
                      Invia una segnalazione
                    </Link>
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    Controlla lo stato della segnalazione
                  </h2>
                  <div className="mt-4 rounded-2xl border border-[#0B3B82]/15 bg-white/80 p-6">
                    <p className="leading-8">
                      Inserisci il codice ricevuta per verificare lo stato della
                      tua segnalazione direttamente sul sito.
                    </p>

                    <form
                      action="/whistleblowing/stato"
                      method="get"
                      className="mt-4 flex flex-col gap-3 sm:flex-row"
                    >
                      <input
                        type="text"
                        name="ricevuta"
                        required
                        placeholder="Es. WB-ABC123-9XYZ"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0B3B82]"
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-xl bg-[#EF3D32] px-5 py-3 text-sm font-black text-white transition hover:scale-[1.02]"
                      >
                        Verifica stato
                      </button>
                    </form>
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    Tutela del segnalante
                  </h2>
                  <p className="mt-4 leading-8">
                    Il Gruppo Market Ingross assicura che la segnalazione di
                    illeciti o irregolarità non comporterà alcuna ritorsione nei
                    confronti del segnalante, nel rispetto della normativa
                    applicabile.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
