import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Cosa comprare in gravidanza: guida semplice per la spesa",
  description:
    "Una guida semplice per capire cosa mettere nel carrello in gravidanza, quali alimenti lavare bene, cuocere bene, limitare o evitare.",
  keywords: [
    "gravidanza",
    "spesa sicura",
    "alimentazione in gravidanza",
    "sicurezza alimentare",
    "Market Ingross Consiglia",
  ],
  openGraph: {
    title: "Cosa comprare in gravidanza: guida semplice per la spesa",
    description:
      "Una guida semplice per capire cosa mettere nel carrello in gravidanza, quali alimenti lavare bene, cuocere bene, limitare o evitare.",
    url: "/news/spesa-sicura-in-gravidanza",
    type: "article",
  },
};

const listaSpesa = {
  freschi: [
    "frutta di stagione",
    "verdura di stagione",
    "insalata da lavare bene",
    "carne da cuocere bene",
    "pollo",
    "pesce da cuocere",
    "yogurt",
    "latte pastorizzato",
    "formaggi sicuri",
  ],
  dispensa: [
    "pasta",
    "riso",
    "pane",
    "cereali",
    "legumi secchi o in scatola",
    "olio extravergine",
    "passata di pomodoro",
    "tonno, rispettando i limiti consigliati",
    "frutta secca, se non ci sono allergie o controindicazioni personali",
  ],
  surgelati: [
    "verdure surgelate",
    "pesce surgelato",
    "minestrone",
    "legumi surgelati",
  ],
};

export default function SpesaSicuraGravidanza() {
  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <section className="bg-[var(--mi-card-soft)] py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="mb-6">
              <Link
                href="/news"
                className="mi-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black text-[#003b7a] transition hover:-translate-x-1"
              >
                <span aria-hidden="true">{"<-"}</span>
                Torna alle News
              </Link>
            </div>

            <article className="mi-panel rounded-[32px] p-6 lg:p-10 lg:px-12">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-[#EF3D32]">
                Market Ingross Consiglia {"•"} Gravidanza e famiglia
              </p>

              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Cosa comprare per la spesa in gravidanza
              </h1>

              <p className="mt-3 text-lg font-semibold text-slate-700 md:text-xl">
                La spesa sicura in gravidanza: guida semplice
              </p>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                In gravidanza la spesa deve essere semplice, buona e sicura.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Non serve mangiare {"\"per due\""}. Serve scegliere bene cosa mettere nel carrello.
              </p>
              <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                Lava bene. Cuoci bene. Conserva bene.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Quando un alimento e lavato bene, cotto bene e conservato bene, e piu sicuro.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Questa guida non sostituisce il medico. Serve solo per aiutarti a fare una spesa piu attenta e piu tranquilla.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  1. Cosa mettere nel carrello
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  In gravidanza puoi scegliere tanti alimenti semplici.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">Nel carrello puoi mettere:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {["frutta","verdura","pasta","riso","pane","cereali","legumi","latte pastorizzato","yogurt","formaggi sicuri","carne ben cotta","pollo ben cotto","uova ben cotte","pesce cotto","acqua"].map((v) => (
                    <li key={v}>{v};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">{"L'"}importante e fare attenzione a tre cose:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>lavare bene frutta e verdura;</li>
                  <li>cuocere bene carne, pesce e uova;</li>
                  <li>controllare bene le etichette.</li>
                </ul>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Il NHS spiega che in gravidanza molti alimenti sono sicuri, ma alcuni vanno evitati o trattati con piu attenzione, soprattutto per ridurre rischi legati a batteri come Listeria o a infezioni come toxoplasmosi.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  2. Frutta e verdura: si, ma ben lavate
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Frutta e verdura sono importanti. Puoi comprarle fresche, di stagione e variate.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">Esempi utili:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {["mele","pere","arance","banane","zucchine","carote","insalata","pomodori","finocchi","spinaci","broccoli"].map((v) => (
                    <li key={v}>{v};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Pero bisogna lavarle molto bene. Pensa alla frutta e alla verdura come a qualcosa che ha viaggiato: e stata raccolta, trasportata, toccata e sistemata. Prima di mangiarla, va pulita.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: se si mangia cruda, lavala con ancora piu attenzione.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Il NHS raccomanda di lavare accuratamente frutta, verdura e ingredienti per insalata, perche possono avere residui di terra che possono far stare male.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  3. Carne e pollo: devono essere ben cotti
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  In gravidanza la carne cruda o poco cotta va evitata. Quindi attenzione a:
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {["bistecca al sangue","carne poco cotta","hamburger poco cotto","salsiccia poco cotta","pollo non cotto bene","carne macinata cotta male"].map((v) => (
                    <li key={v}>{v};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  La carne deve essere cotta bene anche dentro. Questo e molto importante per pollo, hamburger, salsiccia e macinato.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: se dentro e ancora rosa o esce sangue, meglio cuocere ancora.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Il NHS indica che pollo, maiale e manzo possono essere consumati in gravidanza se sono ben cotti, senza tracce di rosa o sangue; consiglia invece di evitare carne cruda o poco cotta.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  4. Uova: meglio ben cotte
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Le uova sono utili in cucina. Si possono usare per:
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {["frittata","uova sode","pasta al forno","torte","polpette","impasti cotti"].map((v) => (
                    <li key={v}>{v};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  In gravidanza e meglio scegliere preparazioni in cui {"l'"}uovo e ben cotto. Attenzione a:
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {["uovo crudo","uovo poco cotto","creme con uova crude","maionese fatta in casa con uova crude","dolci non cotti con uova crude"].map((v) => (
                    <li key={v}>{v};</li>
                  ))}
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: albume e tuorlo ben cotti sono la scelta piu semplice.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Il NHS raccomanda di cuocere bene le uova, salvo specifiche eccezioni legate a sistemi di controllo britannici non applicabili in modo automatico al contesto italiano.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  5. Latte, yogurt e formaggi: controlla la parola pastorizzato
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Una parola importante da cercare e: <span className="font-extrabold text-[#0B3B82]">Pastorizzato</span>. Significa che il prodotto e stato trattato con calore per renderlo piu sicuro.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">In gravidanza sono generalmente piu semplici da scegliere:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {["latte pastorizzato","yogurt","formaggi confezionati sicuri","mozzarella da latte pastorizzato","ricotta da latte pastorizzato","formaggi duri o stagionati"].map((v) => (
                    <li key={v}>{v};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">Attenzione invece a:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {["latte crudo","formaggi da latte non pastorizzato","formaggi molli o erborinati se non ben cotti","prodotti senza etichetta chiara"].map((v) => (
                    <li key={v}>{v};</li>
                  ))}
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: se non sei sicura, leggi {"l'"}etichetta o chiedi al medico.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Il NHS segnala di evitare latte non pastorizzato e alcuni formaggi morbidi o erborinati se non cotti fino a essere ben caldi, perche possono contenere Listeria.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  6. Pesce: si, ma con attenzione
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Il pesce puo far parte della spesa in gravidanza. Sono scelte pratiche:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {["pesce cotto","pesce al forno","pesce in padella ben cotto","pesce surgelato cotto correttamente","pesce in scatola, rispettando le indicazioni di consumo","crostacei e molluschi solo se ben cotti"].map((v) => (
                    <li key={v}>{v};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">Meglio evitare:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {["pesce crudo","sushi con pesce crudo","molluschi crudi","crostacei crudi","pesci grandi predatori da limitare o evitare secondo le indicazioni sanitarie"].map((v) => (
                    <li key={v}>{v};</li>
                  ))}
                </ul>
                <div className="mt-4 rounded-2xl bg-[#fff7c7] p-4">
                  <p className="font-bold text-[#0B3B82]">Attenzione al tonno</p>
                  <p className="mt-2 text-base leading-7 text-slate-700">
                    Il tonno non va trattato come un alimento libero da mangiare senza limiti.
                    Il NHS consiglia in gravidanza di non superare 2 tranci di tonno oppure 4 scatolette medie di tonno a settimana, perche il tonno contiene piu mercurio rispetto ad altri pesci.
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    EFSA ricorda che i grandi pesci predatori, come squalo, pesce spada e alcuni tipi di tonno, possono accumulare piu mercurio nel tempo; per le donne in gravidanza spesso si consiglia di preferire pesci piu piccoli e con meno mercurio.
                  </p>
                </div>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: pesce si, ma cotto bene e scegliendo con attenzione.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  7. Cosa evitare o chiedere al medico
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  In modo semplice, in gravidanza bisogna fare piu attenzione a questi alimenti:
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {["carne cruda","carne poco cotta","pesce crudo","crostacei e molluschi crudi","uova crude","latte non pastorizzato","formaggi da latte non pastorizzato","pate","fegato e prodotti a base di fegato","frutta e verdura non lavate bene","alcol","troppa caffeina"].map((v) => (
                    <li key={v}>{v};</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Il NHS indica anche di non bere alcol in gravidanza e di limitare la caffeina a massimo 200 mg al giorno.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  8. Come sistemare la spesa quando arrivi a casa
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Dopo aver fatto la spesa, non lasciare tutto nelle buste troppo a lungo. Quando arrivi a casa:
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {["metti subito in frigo carne, pesce, latte, yogurt e formaggi","tieni carne e pesce crudi separati dagli altri alimenti","usa contenitori chiusi","lava bene mani, coltelli e taglieri","controlla le date di scadenza","non lasciare alimenti freschi al caldo"].map((v) => (
                    <li key={v}>{v};</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  La FDA, nella guida per donne in gravidanza, ricorda che la sicurezza alimentare e importante durante tutta la gravidanza e riassume le buone pratiche in quattro azioni semplici: Clean, Separate, Cook, Chill, cioe pulire, separare, cuocere e raffreddare/conservare al freddo.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  9. Lista spesa semplice per gravidanza
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Ecco una lista facile da usare.</p>
                <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-left text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-4 py-3 font-bold">Categoria</th>
                        <th className="px-4 py-3 font-bold">Prodotti</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-slate-200">
                        <td className="px-4 py-3 font-semibold text-[#0B3B82] align-top">Freschi</td>
                        <td className="px-4 py-3 text-slate-700">
                          <ul className="list-disc pl-4 space-y-1">
                            {listaSpesa.freschi.map((v) => <li key={v}>{v};</li>)}
                          </ul>
                        </td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="px-4 py-3 font-semibold text-[#0B3B82] align-top">Dispensa</td>
                        <td className="px-4 py-3 text-slate-700">
                          <ul className="list-disc pl-4 space-y-1">
                            {listaSpesa.dispensa.map((v) => <li key={v}>{v};</li>)}
                          </ul>
                        </td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="px-4 py-3 font-semibold text-[#0B3B82] align-top">Surgelati</td>
                        <td className="px-4 py-3 text-slate-700">
                          <ul className="list-disc pl-4 space-y-1">
                            {listaSpesa.surgelati.map((v) => <li key={v}>{v};</li>)}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  I surgelati sono comodi, ma vanno trasportati bene e cotti seguendo le indicazioni in confezione.
                </p>
              </section>

              <section className="mt-8 rounded-2xl bg-[#0B3B82] px-5 py-4 text-white">
                <p className="text-lg font-black">10. Regola facile finale</p>
                <p className="mt-2 text-base">Lava bene.</p>
                <p className="text-base">Cuoci bene.</p>
                <p className="text-base">Conserva bene.</p>
                <p className="text-base">Leggi {"l'"}etichetta.</p>
                <p className="mt-3 text-sm opacity-90">
                  Questa e la base per una spesa piu sicura in gravidanza. Non devi avere paura della spesa. Devi solo fare scelte piu attente.
                </p>
              </section>

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Consiglio Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Da Market Ingross puoi trovare tanti prodotti utili per una spesa semplice in gravidanza:
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {["frutta e verdura","pasta, riso e cereali","latte e yogurt","carne e pollo da cuocere bene","pesce","legumi","prodotti confezionati con etichette chiare"].map((v) => (
                    <li key={v}>{v};</li>
                  ))}
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Quando fai la spesa, controlla sempre le etichette e conserva bene i prodotti freschi appena arrivi a casa.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Nota importante
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa guida e informativa. In caso di dubbi chiedi sempre al medico, {"all'"}ostetrica o a un professionista sanitario.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Ogni gravidanza e diversa. Il medico puo darti indicazioni piu precise in base alla tua situazione personale.
                </p>
              </section>

              {/* Guida illustrativa */}
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Guida illustrativa
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa versione illustrata e pensata per essere vista rapidamente anche
                  da smartphone o condivisa come immagine singola.
                </p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                  <Image
                    src="/images/news/spesa-sicura-in-gravidanza-card.png"
                    alt="Guida illustrativa La spesa sicura in gravidanza"
                    width={1600}
                    height={2200}
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className="font-heading text-xl font-extrabold text-[#0B3B82] mb-4">Video guida (reel)</h3>
                  <video
                    controls
                    poster="/images/news/spesa-sicura-in-gravidanza-card.png"
                    className="w-full rounded-xl"
                  >
                    <source src="/videos/news/spesa-sicura-in-gravidanza.mp4" type="video/mp4" />
                    Il tuo browser non supporta il video.
                  </video>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="#"
                    aria-disabled="true"
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
