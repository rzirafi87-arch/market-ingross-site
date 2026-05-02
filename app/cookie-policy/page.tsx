import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function CookiePolicyPage() {
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
                  Cookie Policy
                </h1>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Informazioni sull’utilizzo dei cookie e di eventuali strumenti
                  di tracciamento presenti sul sito.
                </p>
              </div>

              <div className="space-y-10 text-slate-700">
                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    1. Cosa sono i cookie
                  </h2>
                  <p className="mt-4 leading-8">
                    I cookie sono piccoli file di testo che i siti visitati
                    inviano al dispositivo dell’utente, dove vengono memorizzati
                    per essere poi ritrasmessi agli stessi siti alle visite
                    successive.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    2. Cookie tecnici
                  </h2>
                  <p className="mt-4 leading-8">
                    Questo sito utilizza cookie tecnici necessari al corretto
                    funzionamento delle pagine, alla navigazione e alla fruizione
                    dei contenuti. Tali cookie non richiedono il consenso
                    dell’utente.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    3. Cookie analytics
                  </h2>
                  <p className="mt-4 leading-8">
                    Il sito può utilizzare strumenti di analisi statistica del
                    traffico per comprendere, in forma aggregata, l’utilizzo del
                    sito stesso. Ove necessario, tali strumenti saranno attivati
                    solo previo consenso dell’utente.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    4. Cookie di terze parti
                  </h2>
                  <p className="mt-4 leading-8">
                    Il sito può integrare contenuti o servizi di terze parti,
                    come mappe, social network, piattaforme video o strumenti di
                    messaggistica, che possono installare cookie propri. Per
                    maggiori dettagli si rinvia alle informative dei rispettivi
                    fornitori.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    5. Gestione delle preferenze
                  </h2>
                  <p className="mt-4 leading-8">
                    L’utente può gestire le preferenze sui cookie tramite il
                    banner dedicato, ove presente, oppure attraverso le
                    impostazioni del proprio browser.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    6. Titolare del trattamento
                  </h2>
                  <div className="mt-4 leading-8">
                    <p>San Giorgio Retail Srl</p>
                    <p>P. IVA: IT03032170841</p>
                    <p>Via Campobello, 159</p>
                    <p>92027 – Licata (AG) – Italia</p>
                  </div>
                </section>

                <section>
                  <p className="font-semibold text-slate-800">
                    Ultimo aggiornamento: 24/04/2026
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
