import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Cibi da evitare o limitare in gravidanza: guida semplice",
  description:
    "Guida semplice per capire quali alimenti evitare o limitare in gravidanza: crudo, poco cotto, latte non pastorizzato, alcol, tonno e caffeina.",
  keywords: [
    "gravidanza",
    "alimentazione in gravidanza",
    "cibi da evitare",
    "spesa sicura",
    "Market Ingross Consiglia",
  ],
  openGraph: {
    title: "Cibi da evitare o limitare in gravidanza",
    description:
      "Guida pratica per una spesa piu sicura in gravidanza, in modo semplice e non allarmistico.",
    url: "/informazioni-utili/cibi-da-evitare-limitare-in-gravidanza",
    type: "article",
  },
};

const carneAttenzione = [
  "bistecca al sangue",
  "hamburger poco cotto",
  "salsiccia poco cotta",
  "pollo non ben cotto",
  "carne macinata non cotta bene",
  "carpaccio",
  "tartare",
  "carne cruda in generale",
];

const salumiCrudi = [
  "salame",
  "prosciutto crudo",
  "speck",
  "bresaola",
  "chorizo",
  "pancetta non cotta",
  "altri salumi crudi o stagionati",
];

const pesceCrudo = [
  "sushi con pesce crudo",
  "sashimi",
  "tartare di pesce",
  "carpaccio di pesce",
  "ostriche crude",
  "cozze crude",
  "vongole crude",
  "crostacei crudi",
];

const pesciDaLimitare = ["tonno", "pesce spada", "squalo", "marlin", "pesci grandi predatori"];

const uovaCrude = [
  "uova crude",
  "uova poco cotte",
  "creme con uova crude",
  "maionese fatta in casa con uova crude",
  "tiramisu con uova crude",
  "mousse con uova crude",
  "impasti crudi con uova",
];

const latteFormaggiAttenzione = [
  "latte crudo",
  "latte non pastorizzato",
  "formaggi da latte non pastorizzato",
  "formaggi molli con crosta fiorita, se non ben cotti",
  "formaggi erborinati molli, se non ben cotti",
];

const evitaPateFegato = [
  "pate di carne",
  "pate di pesce",
  "pate vegetali",
  "fegato",
  "prodotti a base di fegato",
];

const fruttaVerduraAttenzione = [
  "insalata non lavata",
  "verdure crude con terra",
  "frutta mangiata con la buccia",
  "erbe aromatiche",
  "prodotti gia tagliati conservati male",
];

const caffeinaFonti = ["caffe", "te", "cola", "energy drink", "cioccolato", "alcune bevande"];

const prontiAttenzione = [
  "piatti pronti da banco frigo",
  "insalate pronte",
  "prodotti gia tagliati",
  "salse fresche",
  "tramezzini",
  "prodotti con creme",
  "alimenti lasciati fuori frigo",
];

const controllaSempre = [
  "data",
  "confezione integra",
  "odore",
  "colore",
  "conservazione in frigo",
  "istruzioni in etichetta",
];

const daEvitareSchema = [
  "carne cruda o poco cotta",
  "pesce crudo",
  "molluschi crudi",
  "uova crude o poco cotte",
  "latte non pastorizzato",
  "formaggi non sicuri o non ben cotti",
  "pate",
  "fegato e prodotti a base di fegato",
  "alcol",
];

const daLimitareSchema = [
  "tonno",
  "pesci grandi",
  "caffeina",
  "prodotti molto salati o molto zuccherati",
  "alimenti pronti se non conservati bene",
];

const daControllareSchema = [
  "frutta e verdura crude",
  "insalate",
  "prodotti gia tagliati",
  "piatti pronti",
  "formaggi",
  "salumi",
  "prodotti freschi da banco frigo",
];

const erroriDaEvitare = [
  "mangiare carne poco cotta",
  "consumare pesce crudo senza chiedere consiglio",
  "usare uova crude in creme fatte in casa",
  "bere latte crudo o non pastorizzato",
  "non leggere le etichette dei formaggi",
  "esagerare con tonno e pesci grandi",
  "non lavare bene frutta e verdura",
  "lasciare prodotti freschi fuori dal frigo",
  "bere alcol solo un po senza consultare il medico",
  "seguire consigli trovati online senza verificarli con un professionista",
];

export default function CibiNoGravidanzaPage() {
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
                <span aria-hidden="true">←</span>
                Torna a Consigli per la spesa
              </Link>
            </div>

            <article className="mi-panel rounded-[32px] p-6 lg:p-10 lg:px-12">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-[#EF3D32]">
                Market Ingross Consiglia - Gravidanza e famiglia / Sicurezza alimentare
              </p>

              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Cibi da evitare o limitare in gravidanza
              </h1>

              <p className="mt-3 text-lg font-semibold text-slate-700 md:text-xl">
                Gravidanza: cosa evitare o limitare
              </p>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                In gravidanza non bisogna avere paura della spesa. Bisogna solo fare piu attenzione ad alcuni alimenti.
              </p>
              <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                Crudo no. Poco cotto no. Non pastorizzato no. Pesci grandi con attenzione. Alcol no.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Molti cibi si possono mangiare tranquillamente, se sono lavati bene, cotti bene e conservati bene.
                Questa guida serve per aiutarti a fare una spesa piu sicura, ma non sostituisce il medico.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">1. Carne cruda o poco cotta</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">In gravidanza e meglio evitare carne cruda o poco cotta. Fai attenzione a:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {carneAttenzione.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Il NHS indica che carne come pollo, maiale e manzo puo essere consumata in gravidanza se ben cotta,
                  senza tracce di rosa o sangue; invece la carne cruda o poco cotta va evitata per il rischio di toxoplasmosi.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: se dentro e rosa o perde sangue, meglio cuocere ancora.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">2. Salumi crudi e carni stagionate</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Alcuni salumi e carni stagionate non sono cotti. Esempi:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {salumiCrudi.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Il NHS consiglia attenzione con carni stagionate fredde come salami, pepperoni, chorizo e prosciutto crudo,
                  a meno che non siano cotte bene.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: salume crudo = chiedi prima e non improvvisare.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">3. Pesce crudo e molluschi crudi</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">In gravidanza e meglio evitare pesce crudo o poco cotto. Fai attenzione a:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {pesceCrudo.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Il NHS indica che il pesce cotto e i crostacei/molluschi cotti si possono mangiare,
                  mentre i molluschi crudi vanno evitati perche possono contenere batteri, virus o tossine.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: pesce si, ma ben cotto.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">4. Tonno e pesci grandi: da limitare</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il pesce e un alimento utile, ma alcuni tipi vanno limitati. In gravidanza non bisogna esagerare con:
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {pesciDaLimitare.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Il NHS consiglia di limitare il tonno a non piu di 2 tranci oppure 4 scatolette medie a settimana,
                  e di evitare pesce spada, marlin e squalo in gravidanza.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: pesce piccolo e cotto spesso e una scelta piu semplice.
                  Tonno e pesci grandi: attenzione alle quantita.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">5. Uova crude o poco cotte</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Le uova vanno trattate con attenzione. Fai attenzione a:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {uovaCrude.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Nel contesto italiano, la regola semplice per il cliente resta: uova ben cotte e prodotti sicuri/confezionati.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: albume e tuorlo ben cotti sono la scelta piu semplice.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">6. Latte non pastorizzato e formaggi non sicuri</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  In gravidanza bisogna controllare bene latte e formaggi. Da evitare o controllare con attenzione:
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {latteFormaggiAttenzione.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Il NHS segnala di evitare latte non pastorizzato e alcuni formaggi molli o erborinati se non cotti
                  fino a essere ben caldi, perche possono contenere Listeria.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700 font-semibold">La parola importante da cercare e: pastorizzato.</p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: cerca pastorizzato e, se hai dubbi, chiedi al medico.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">7. Pate e fegato</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">In gravidanza e meglio evitare:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {evitaPateFegato.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Il NHS indica di evitare tutti i tipi di pate, anche vegetali, e fegato/prodotti a base di fegato.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: pate e fegato, meglio evitare in gravidanza.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">8. Frutta, verdura e insalata non lavate bene</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Frutta e verdura sono importanti, ma devono essere lavate bene. Fai attenzione a:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {fruttaVerduraAttenzione.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Il NHS raccomanda di lavare accuratamente frutta, verdura e ingredienti per insalata,
                  perche possono avere terra e causare malesseri.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: frutta e verdura si, ma ben lavate.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">9. Alcol</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">In gravidanza la scelta piu sicura e evitare l'alcol.</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>vino;</li>
                  <li>birra;</li>
                  <li>liquori;</li>
                  <li>cocktail;</li>
                  <li>amari;</li>
                  <li>bevande alcoliche in generale.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Il NHS indica che, se sei incinta o stai cercando una gravidanza, l'approccio piu sicuro e non bere alcol.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: in gravidanza, alcol no.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">10. Caffeina: da limitare</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">La caffeina non si trova solo nel caffe. Puo essere presente in:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {caffeinaFonti.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Il NHS indica un limite massimo di 200 mg di caffeina al giorno in gravidanza.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: caffe e bevande con caffeina, senza esagerare.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">11. Prodotti freschi e pronti: controlla sempre</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Alcuni prodotti pronti sono comodi, ma vanno controllati bene. Fai attenzione a:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {prontiAttenzione.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">Controlla sempre:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {controllaSempre.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  La FDA ricorda che la sicurezza alimentare in gravidanza e importante; le azioni base sono
                  pulire, separare, cuocere e raffreddare/conservare al freddo.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: fresco e pronto = controlla data, frigo ed etichetta.
                </p>
              </section>

              <section className="mt-8 rounded-2xl bg-[#0B3B82] px-5 py-4 text-white">
                <p className="text-lg font-black">Schema facile: cosa evitare o limitare</p>

                <p className="mt-3 text-base font-bold">Da evitare</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8">
                  {daEvitareSchema.map((item) => (
                    <li key={`evita-${item}`}>{item};</li>
                  ))}
                </ul>

                <p className="mt-3 text-base font-bold">Da limitare</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8">
                  {daLimitareSchema.map((item) => (
                    <li key={`limita-${item}`}>{item};</li>
                  ))}
                </ul>

                <p className="mt-3 text-base font-bold">Da controllare bene</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8">
                  {daControllareSchema.map((item) => (
                    <li key={`controlla-${item}`}>{item};</li>
                  ))}
                </ul>
              </section>

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Errori da evitare</h2>
                <ul className="mt-3 list-disc pl-6 text-base leading-8 text-slate-700">
                  {erroriDaEvitare.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Regola facile finale</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Crudo no. Poco cotto no. Non pastorizzato no. Alcol no. Tonno e caffeina con attenzione.
                  Se hai dubbi, chiedi al medico.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa e la regola piu semplice per fare una spesa piu sicura in gravidanza.
                </p>
              </section>

              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Consiglio Market Ingross</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Quando fai la spesa da Market Ingross, controlla sempre:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>etichette;</li>
                  <li>data di scadenza;</li>
                  <li>conservazione;</li>
                  <li>ingredienti;</li>
                  <li>indicazione pastorizzato;</li>
                  <li>prodotti da cuocere bene.</li>
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Scegli alimenti semplici, freschi e ben conservati.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  E in caso di dubbio, soprattutto in gravidanza, chiedi sempre al medico, all'ostetrica
                  o a un professionista sanitario.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Nota importante</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Questa guida e informativa.</p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  In caso di dubbi su gravidanza, alimentazione, allergie, farmaci o salute, chiedi sempre al medico,
                  all'ostetrica o a un professionista sanitario.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Ogni gravidanza e diversa. Il medico puo darti indicazioni piu precise in base alla tua situazione personale.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Guida illustrativa</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Una versione visuale della guida, utile da consultare rapidamente anche da smartphone.
                </p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                  <Image
                    src="/images/news/consigli-per-la-spesa/guida illustrativa/cibi-no-gravidanza.png"
                    alt="Guida illustrativa Cibi da evitare o limitare in gravidanza"
                    width={1600}
                    height={2200}
                    className="h-auto w-full rounded-xl"
                  />
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
