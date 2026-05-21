import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Come sistemare la spesa in frigo: guida semplice",
  description:
    "Una guida semplice per capire dove mettere carne, pesce, latticini, frutta, verdura e avanzi nel frigorifero.",
  keywords: [
    "frigo",
    "frigorifero",
    "conservazione alimenti",
    "sicurezza alimentare",
    "spesa",
    "Market Ingross Consiglia",
  ],
  openGraph: {
    title: "Come sistemare la spesa in frigo: guida semplice",
    description:
      "Una guida semplice per capire dove mettere carne, pesce, latticini, frutta, verdura e avanzi nel frigorifero.",
    url: "/news/come-sistemare-la-spesa-in-frigo",
    type: "article",
  },
};

export default function FrigoOrdinatoPage() {
  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <section className="bg-[var(--mi-card-soft)] py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="mb-6">
              <Link
                href="/news/consigli-per-la-spesa"
                className="mi-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black text-[#003b7a] transition hover:-translate-x-1"
              >
                <span aria-hidden="true">â†</span>
                Torna a Consigli per la spesa
              </Link>
            </div>

            <article className="mi-panel rounded-[32px] p-6 lg:p-10 lg:px-12">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-[#EF3D32]">
                Market Ingross Consiglia â€¢ Sicurezza alimentare
              </p>

              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Come sistemare la spesa in frigo
              </h1>

              <p className="mt-3 text-lg font-semibold text-slate-700 md:text-xl">
                Il frigo ordinato: dove mettere gli alimenti
              </p>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Quando torni dal supermercato, non basta mettere tutto in frigo â€œa casoâ€.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Il frigorifero Ã¨ come un piccolo armadio del freddo. Ogni alimento ha il suo posto migliore.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">Se sistemi bene la spesa:</p>
              <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                <li>il cibo dura meglio;</li>
                <li>eviti cattivi odori;</li>
                <li>riduci gli sprechi;</li>
                <li>tieni separati alimenti crudi e cotti;</li>
                <li>fai una spesa piÃ¹ sicura.</li>
              </ul>
              <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                Crudo in basso. Cotto in alto. Freschi ben chiusi. Scadenze davanti.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">1. Prima cosa: il frigo deve essere freddo</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il frigorifero serve a rallentare la crescita dei batteri. Per questo deve essere abbastanza freddo.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  La FDA consiglia di tenere il frigorifero a 40Â°F o meno, cioÃ¨ circa 4Â°C o meno, e il congelatore a 0Â°F, cioÃ¨ circa -18Â°C.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: se il frigo non Ã¨ abbastanza freddo, gli alimenti freschi si rovinano prima.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Per controllare meglio, puoi usare un piccolo termometro da frigo.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">2. Ripiano alto: cibi giÃ  pronti e avanzi</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Nel ripiano alto puoi mettere gli alimenti che sono giÃ  cotti o giÃ  pronti.</p>
                <p className="mt-4 text-base leading-8 text-slate-700">Esempi:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>avanzi giÃ  cotti;</li>
                  <li>piatti pronti;</li>
                  <li>sughi giÃ  cotti;</li>
                  <li>alimenti aperti da consumare presto;</li>
                  <li>yogurt o dessert giÃ  confezionati, se lo spazio Ã¨ adatto.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  PerchÃ© in alto? PerchÃ© cosÃ¬ sono lontani dai liquidi della carne o del pesce crudo.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Gli alimenti giÃ  cotti o pronti da mangiare non devono stare sotto carne cruda o pesce crudo: in questo modo si evita che eventuali liquidi cadano sopra alimenti che poi mangerai senza ricuocere.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">3. Ripiano centrale: latte, yogurt, formaggi e salumi</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Nel ripiano centrale puoi mettere prodotti freschi confezionati o da tenere ben chiusi.</p>
                <p className="mt-4 text-base leading-8 text-slate-700">Esempi:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>latte;</li>
                  <li>yogurt;</li>
                  <li>formaggi;</li>
                  <li>salumi;</li>
                  <li>ricotta;</li>
                  <li>mozzarella;</li>
                  <li>prodotti freschi aperti.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">Consiglio semplice: quando apri una confezione, richiudila bene o mettila in un contenitore.</p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">Regola facile: aperto non significa abbandonato. Se un alimento Ã¨ aperto, va protetto.</p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">4. Ripiano basso: carne e pesce crudi</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Carne e pesce crudi devono stare nella parte bassa del frigo.</p>
                <p className="mt-4 text-base leading-8 text-slate-700">Esempi:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>carne fresca;</li>
                  <li>pollo;</li>
                  <li>hamburger;</li>
                  <li>macinato;</li>
                  <li>salsiccia;</li>
                  <li>pesce fresco;</li>
                  <li>molluschi e crostacei crudi.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">Devono stare in un contenitore chiuso, su un piatto o vassoio, lontani da cibi giÃ  pronti, meglio ancora nel ripiano piÃ¹ basso.</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Le indicazioni di sicurezza alimentare consigliano di tenere carne e pollame crudi nel ripiano piÃ¹ basso, cosÃ¬ i liquidi non contaminano cibi giÃ  pronti o cotti.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">Regola facile: la carne cruda non deve mai stare sopra il cibo giÃ  pronto.</p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">5. Cassetti: frutta e verdura</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">I cassetti in basso sono pensati per frutta e verdura.</p>
                <p className="mt-4 text-base leading-8 text-slate-700">Puoi mettere:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>insalata;</li>
                  <li>carote;</li>
                  <li>zucchine;</li>
                  <li>finocchi;</li>
                  <li>pomodori se li conservi in frigo;</li>
                  <li>frutta delicata;</li>
                  <li>verdure fresche.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">Attenzione perÃ²: frutta e verdura non devono stare insieme a carne o pesce crudi.</p>
                <p className="mt-3 text-base leading-8 text-slate-700">Se sono sporche di terra, meglio pulirle o metterle in un sacchetto separato.</p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">Regola facile: frutta e verdura stanno nei cassetti, separate dal crudo.</p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">6. Sportello del frigo: prodotti meno delicati</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Lo sportello Ã¨ la parte che cambia temperatura piÃ¹ spesso. Ogni volta che apri il frigo, lo sportello prende aria calda.</p>
                <p className="mt-4 text-base leading-8 text-slate-700">Quindi nello sportello Ã¨ meglio mettere prodotti meno delicati.</p>
                <p className="mt-4 text-base leading-8 text-slate-700">Esempi:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>acqua;</li>
                  <li>bibite;</li>
                  <li>salse;</li>
                  <li>condimenti;</li>
                  <li>prodotti che sullâ€™etichetta indicano conservazione in frigo dopo lâ€™apertura.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">Evita, se possibile, di mettere nello sportello alimenti molto delicati se hanno bisogno di freddo costante.</p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">7. Non mettere il cibo caldo direttamente in frigo</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Se hai cucinato qualcosa, non metterlo bollente nel frigo. Il cibo troppo caldo puÃ² alzare la temperatura interna e disturbare gli altri alimenti.</p>
                <p className="mt-4 text-base leading-8 text-slate-700">Meglio fare cosÃ¬:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>lascia intiepidire il cibo;</li>
                  <li>mettilo in un contenitore pulito;</li>
                  <li>chiudilo bene;</li>
                  <li>mettilo in frigo appena possibile.</li>
                </ul>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  La FDA ricorda che gli alimenti non devono restare troppo a lungo fuori dal frigo, perchÃ© nella zona di temperatura non sicura i batteri possono crescere piÃ¹ velocemente.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">Regola facile: non bollente, ma nemmeno dimenticato fuori.</p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">8. Le scadenze davanti</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Quando sistemi la spesa, metti davanti i prodotti che scadono prima.</p>
                <p className="mt-4 text-base leading-8 text-slate-700">Esempio: se hai comprato due yogurt, uno che scade prima e uno che scade dopo, metti davanti quello che scade prima.</p>
                <p className="mt-4 text-base leading-8 text-slate-700">CosÃ¬ lo vedi subito e lo consumi prima.</p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">Regola facile: prima scade, prima si usa.</p>
                <p className="mt-3 text-base leading-8 text-slate-700">Questa regola aiuta a buttare meno cibo.</p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">9. Non riempire troppo il frigo</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Un frigo troppo pieno raffredda peggio. Lâ€™aria fredda deve riuscire a girare.</p>
                <p className="mt-4 text-base leading-8 text-slate-700">Se metti troppe cose una sopra lâ€™altra:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>alcuni alimenti si raffreddano meno;</li>
                  <li>dimentichi cosa hai comprato;</li>
                  <li>aumentano gli sprechi;</li>
                  <li>si creano cattivi odori.</li>
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">Regola facile: il frigo deve respirare. Non serve che sia vuoto, ma neanche troppo pieno.</p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">10. Usa contenitori chiusi</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">I contenitori aiutano a tenere il frigo piÃ¹ ordinato.</p>
                <p className="mt-4 text-base leading-8 text-slate-700">Sono utili per:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>avanzi;</li>
                  <li>formaggi aperti;</li>
                  <li>salumi aperti;</li>
                  <li>verdure tagliate;</li>
                  <li>piatti giÃ  pronti;</li>
                  <li>alimenti con odore forte.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">Meglio scrivere anche la data, se puoi. Esempio: â€œRagÃ¹ â€” aperto lunedÃ¬â€. CosÃ¬ sai da quanto tempo Ã¨ in frigo.</p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Schema facile: dove mettere cosa</h2>
                <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-left text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-4 py-3 font-bold">Zona del frigo</th>
                        <th className="px-4 py-3 font-bold">Cosa mettere</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-slate-200">
                        <td className="px-4 py-3 font-semibold text-[#0B3B82]">Ripiano alto</td>
                        <td className="px-4 py-3 text-slate-700">Cibi giÃ  cotti e pronti: avanzi, piatti pronti, alimenti giÃ  cotti.</td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="px-4 py-3 font-semibold text-[#0B3B82]">Ripiano centrale</td>
                        <td className="px-4 py-3 text-slate-700">Prodotti freschi confezionati: latte, yogurt, formaggi, salumi, mozzarella, ricotta.</td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="px-4 py-3 font-semibold text-[#0B3B82]">Ripiano basso</td>
                        <td className="px-4 py-3 text-slate-700">Carne e pesce crudi: pollo, macinato, carne fresca, pesce fresco. Sempre chiusi e separati.</td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="px-4 py-3 font-semibold text-[#0B3B82]">Cassetti</td>
                        <td className="px-4 py-3 text-slate-700">Frutta e verdura: insalata, carote, zucchine, frutta fresca, verdure.</td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="px-4 py-3 font-semibold text-[#0B3B82]">Sportello</td>
                        <td className="px-4 py-3 text-slate-700">Prodotti meno delicati: acqua, bibite, salse, condimenti.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Errori da evitare</h2>
                <ul className="mt-3 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>mettere carne cruda sopra gli avanzi;</li>
                  <li>lasciare confezioni aperte;</li>
                  <li>dimenticare alimenti in fondo al frigo;</li>
                  <li>riempire troppo i ripiani;</li>
                  <li>mettere cibo caldo direttamente in frigo;</li>
                  <li>non controllare le scadenze;</li>
                  <li>mischiare alimenti crudi e cotti;</li>
                  <li>lasciare frutta e verdura sporche vicino ad altri alimenti.</li>
                </ul>
              </section>

              <section className="mt-8 rounded-2xl bg-[#0B3B82] px-5 py-4 text-white">
                <p className="text-lg font-black">Regola facile finale</p>
                <p className="mt-2 text-base">Alto: cibi cotti.</p>
                <p className="text-base">Centro: latticini e freschi.</p>
                <p className="text-base">Basso: carne e pesce crudi.</p>
                <p className="text-base">Cassetti: frutta e verdura.</p>
                <p className="text-base">Sportello: salse e bevande.</p>
                <p className="mt-3 text-sm opacity-90">Se ricordi questa regola, il frigo diventa piÃ¹ ordinato e la spesa dura meglio.</p>
              </section>

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Consiglio Market Ingross</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Quando fai la spesa da Market Ingross, appena arrivi a casa sistema prima i prodotti freschi:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>carne;</li>
                  <li>pesce;</li>
                  <li>latte;</li>
                  <li>yogurt;</li>
                  <li>formaggi;</li>
                  <li>surgelati.</li>
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">Poi controlla le scadenze e metti davanti quello che va consumato prima.</p>
                <p className="mt-3 text-base leading-8 text-slate-700">Un frigo ordinato ti aiuta a mangiare meglio, risparmiare e buttare meno cibo.</p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Nota importante</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa guida Ã¨ informativa. In caso di dubbi su conservazione, allergie, gravidanza, bambini o salute, chiedi sempre a un medico o a un professionista.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Guida illustrativa
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Una versione visuale della guida, utile da consultare rapidamente anche da smartphone.
                </p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                  <Image
                    src="/images/news/consigli-per-la-spesa/guida illustrativa/come-sistemare-la-spesa-in-frigo.png"
                    alt="Guida illustrativa Come sistemare la spesa in frigo"
                    width={1600}
                    height={2200}
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className="font-heading mb-4 text-xl font-extrabold text-[#0B3B82]">Video guida (reel)</h3>
                  <video controls preload="metadata" className="w-full rounded-xl">
                    <source src="/video/news/consigli-per-la-spesa/il-frigo-ordinato.mp4" type="video/mp4" />
                    Il tuo browser non supporta il video.
                  </video>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/video/news/consigli-per-la-spesa/il-frigo-ordinato.mp4"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-xl bg-[#EF3D32] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#d73329]"
                  >
                    Guarda il reel
                  </a>
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

