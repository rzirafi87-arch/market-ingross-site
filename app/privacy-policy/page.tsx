import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <section className="bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.08)] lg:p-12">
              <div className="mb-10">
                <span className="font-heading text-xs font-extrabold uppercase tracking-[0.18em] text-[#EF3D32]">
                  Area legale
                </span>

                <h1 className="font-heading mt-4 text-4xl font-extrabold leading-[0.96] tracking-[-0.03em] text-[#0B3B82] md:text-5xl">
                  Privacy Policy
                </h1>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Informativa sul trattamento dei dati personali ai sensi
                  dell’art. 13 del Regolamento UE 2016/679 ("GDPR").
                </p>
              </div>

              <div className="space-y-10 text-slate-700">
                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    1. Titolare del trattamento
                  </h2>
                  <div className="mt-4 leading-8">
                    <p>San Giorgio Retail Srl</p>
                    <p>P. IVA: IT03032170841</p>
                    <p>Via Campobello, 159</p>
                    <p>92027 – Licata (AG) – Italia</p>
                    <p>Sito web: marketingross.it</p>
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    2. Tipologia di dati raccolti
                  </h2>
                  <div className="mt-4 space-y-4 leading-8">
                    <p>
                      Attraverso il presente sito possono essere raccolti dati
                      personali forniti volontariamente dall’utente, come nome,
                      indirizzo e-mail, numero di telefono e contenuto del
                      messaggio inviato tramite modulo di contatto, WhatsApp o
                      altri recapiti presenti sul sito.
                    </p>
                    <p>
                      Possono inoltre essere raccolti dati di navigazione, quali
                      indirizzo IP, browser utilizzato, sistema operativo,
                      informazioni tecniche sul dispositivo, data e ora della
                      richiesta e pagine visitate.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    3. Finalità del trattamento
                  </h2>
                  <ul className="mt-4 list-disc space-y-3 pl-6 leading-8">
                    <li>rispondere alle richieste inviate dall’utente;</li>
                    <li>fornire assistenza o informazioni commerciali;</li>
                    <li>adempiere a obblighi di legge;</li>
                    <li>garantire la sicurezza del sito e prevenire abusi;</li>
                    <li>
                      effettuare analisi statistiche del traffico, ove previsto
                      e nel rispetto della normativa applicabile.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    4. Base giuridica del trattamento
                  </h2>
                  <div className="mt-4 space-y-4 leading-8">
                    <p>
                      Il trattamento si basa sull’esecuzione di misure
                      precontrattuali, sull’adempimento di obblighi di legge, sul
                      legittimo interesse del Titolare alla gestione tecnica e
                      alla sicurezza del sito e, ove richiesto, sul consenso
                      dell’utente.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    5. Modalita del trattamento
                  </h2>
                  <p className="mt-4 leading-8">
                    I dati sono trattati con strumenti informatici e telematici,
                    nel rispetto dei principi di liceità, correttezza,
                    trasparenza, minimizzazione e riservatezza, adottando misure
                    tecniche e organizzative adeguate a proteggerli.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    6. Destinatari dei dati
                  </h2>
                  <div className="mt-4 space-y-4 leading-8">
                    <p>
                      I dati personali non vengono diffusi. Possono tuttavia
                      essere trattati da soggetti che forniscono servizi tecnici,
                      informatici, hosting, manutenzione del sito, servizi di
                      posta elettronica, messaggistica o analisi del traffico,
                      nei limiti strettamente necessari alle finalità indicate.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    7. WhatsApp e canali di contatto
                  </h2>
                  <p className="mt-4 leading-8">
                    Se l’utente contatta il Titolare tramite WhatsApp o altri
                    canali di contatto indicati sul sito, i dati trasmessi
                    saranno trattati esclusivamente per gestire la richiesta e
                    fornire assistenza o informazioni richieste.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    8. Contenuti incorporati da altri siti
                  </h2>
                  <p className="mt-4 leading-8">
                    Il sito può incorporare contenuti o servizi di terze parti,
                    come mappe, social network, piattaforme video o widget
                    esterni. Tali contenuti possono raccogliere dati e utilizzare
                    cookie secondo le rispettive informative privacy.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    9. Cookie e strumenti di tracciamento
                  </h2>
                  <p className="mt-4 leading-8">
                    Il sito può utilizzare cookie tecnici necessari al corretto
                    funzionamento. L’eventuale utilizzo di cookie analytics o
                    strumenti equivalenti è disciplinato dalla Cookie Policy e,
                    ove richiesto, subordinato al consenso dell’utente.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    10. Trasferimento dei dati
                  </h2>
                  <p className="mt-4 leading-8">
                    Alcuni fornitori di servizi tecnici o digitali potrebbero
                    comportare trasferimenti di dati verso Paesi extra UE. In tal
                    caso il Titolare adotterà le garanzie previste dalla
                    normativa applicabile.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    11. Periodo di conservazione
                  </h2>
                  <p className="mt-4 leading-8">
                    I dati raccolti tramite modulo di contatto, e-mail o WhatsApp
                    sono conservati per il tempo necessario a gestire la
                    richiesta e, successivamente, nei limiti consentiti o
                    richiesti dalla normativa vigente.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    12. Diritti dell’interessato
                  </h2>
                  <div className="mt-4 space-y-4 leading-8">
                    <p>
                      L’utente può esercitare i diritti previsti dagli artt. 15 e
                      seguenti del GDPR, tra cui accesso, rettifica,
                      cancellazione, limitazione, opposizione e revoca del
                      consenso, ove applicabile.
                    </p>
                    <p>
                      Resta salvo il diritto di proporre reclamo al Garante per
                      la protezione dei dati personali.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                    13. Aggiornamenti
                  </h2>
                  <p className="mt-4 leading-8">
                    La presente informativa può essere aggiornata nel tempo. Gli
                    utenti sono invitati a consultarla periodicamente.
                  </p>
                  <p className="mt-4 font-semibold text-slate-800">
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
