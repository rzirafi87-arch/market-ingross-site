import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Come conservare carne e pollo in frigo: guida semplice",
  description:
    "Una guida semplice per conservare carne e pollo in frigo in modo piu sicuro: dove metterli, come separarli, quando congelarli e quali errori evitare.",
  keywords: [
    "carne",
    "pollo",
    "frigo",
    "conservazione alimenti",
    "sicurezza alimentare",
    "macelleria",
    "Market Ingross Consiglia",
  ],
  openGraph: {
    title: "Come conservare carne e pollo in frigo: guida semplice",
    description:
      "Guida pratica per conservare meglio carne e pollo dopo la spesa ed evitare errori comuni in cucina.",
    url: "/informazioni-utili/come-conservare-carne-pollo-in-frigo",
    type: "article",
  },
};

const daMettereSubitoInFrigo = [
  "carne fresca",
  "pollo",
  "tacchino",
  "macinato",
  "salsiccia",
  "hamburger",
  "fettine",
  "bistecche",
  "carne per spezzatino",
];

const nonMettereSopra = [
  "insalata",
  "frutta",
  "formaggi",
  "yogurt",
  "piatti gia cotti",
  "avanzi",
  "salumi gia pronti",
];

const erroriDaEvitare = [
  "lasciare carne e pollo nelle buste troppo a lungo",
  "mettere carne cruda sopra cibi gia pronti",
  "lasciare la confezione aperta",
  "lavare il pollo crudo",
  "usare lo stesso tagliere per pollo crudo e insalata",
  "dimenticare il macinato in frigo",
  "congelare quando il prodotto e gia vecchio",
  "scongelare per tante ore fuori dal frigo",
  "non lavare mani, coltelli e taglieri",
];

export default function ComeConservareCarnePolloPage() {
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
                Market Ingross Consiglia • Carne e macelleria / Sicurezza alimentare
              </p>

              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Come conservare carne e pollo in frigo
              </h1>

              <p className="mt-3 text-lg font-semibold text-slate-700 md:text-xl">
                Carne e pollo in frigo
              </p>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Quando compri carne o pollo, il lavoro non finisce alla cassa. Appena arrivi a casa,
                devi sistemarli bene.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Carne e pollo sono alimenti freschi e delicati. Se non vengono conservati nel modo giusto,
                possono rovinarsi prima e contaminare altri alimenti.
              </p>
              <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                Subito in frigo. Sempre ben chiusi. Sempre in basso. Sempre separati dagli altri alimenti.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  1. Appena arrivi a casa, mettili in frigo
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Carne e pollo non devono restare troppo tempo nelle buste.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">Quando torni dalla spesa, metti subito in frigo:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {daMettereSubitoInFrigo.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Il frigorifero deve essere abbastanza freddo. La FDA consiglia di mantenere il frigo a
                  4 gradi C o meno per rallentare la crescita dei batteri negli alimenti freschi.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: prima sistemi i freschi, meglio e.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  2. Carne e pollo devono stare in basso
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il posto migliore per carne e pollo crudi e la parte bassa del frigo.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">Non mettere carne cruda sopra:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {nonMettereSopra.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  La carne, il pollo e il pesce crudi devono stare nella parte piu bassa del frigo,
                  cosi si riduce il rischio che i loro liquidi tocchino alimenti gia pronti.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: crudo in basso. Cotto e pronto in alto.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  3. Tienili sempre ben chiusi
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">La carne e il pollo non devono restare aperti nel frigo.</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>nella confezione originale, se integra;</li>
                  <li>in un contenitore chiuso;</li>
                  <li>su un piatto coperto;</li>
                  <li>in un sacchetto alimentare ben chiuso.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Se la confezione perde liquidi, mettila dentro un contenitore.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: la carne cruda non deve toccare il frigo. Deve stare protetta.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  4. Non lavare il pollo crudo
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Lavare il pollo crudo puo essere un errore: l'acqua puo schizzare su lavello,
                  mani, utensili e superfici, diffondendo batteri.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  La sicurezza si ottiene soprattutto con una cottura corretta e con la pulizia
                  di mani, taglieri e utensili.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: il pollo non si lava. Si cuoce bene.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  5. Usa taglieri e utensili separati
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Per evitare contaminazioni, usa strumenti separati per crudo e pronto.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>un tagliere per carne e pollo crudi;</li>
                  <li>un tagliere per verdure, pane e alimenti pronti;</li>
                  <li>coltelli lavati bene;</li>
                  <li>mani lavate bene;</li>
                  <li>superfici pulite.</li>
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: crudo da una parte. Cotto e pronto dall'altra.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  6. Quanto tempo puo stare in frigo?
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  I tempi cambiano in base a prodotto, freschezza, confezione e temperatura del frigo.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>pollo crudo: meglio consumarlo entro poco tempo;</li>
                  <li>carne macinata: meglio consumarla presto;</li>
                  <li>fettine e bistecche: seguire sempre la data in etichetta;</li>
                  <li>carne confezionata: seguire data e istruzioni;</li>
                  <li>carne gia cotta: contenitore chiuso e consumo entro pochi giorni.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  FoodSafety.gov riporta che il pollo crudo in frigo si conserva in genere 1-2 giorni,
                  mentre il pollo cotto circa 3-4 giorni. La regola piu sicura resta leggere sempre
                  l'etichetta.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: carne e pollo freschi non sono prodotti da dimenticare in frigo.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  7. Quando congelare
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se sai che non cucinerai carne o pollo entro poco tempo, conviene congelarli.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>quando il prodotto e ancora fresco;</li>
                  <li>prima della data di scadenza;</li>
                  <li>in confezioni adatte al freezer;</li>
                  <li>dividendo le porzioni;</li>
                  <li>scrivendo la data.</li>
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: congela prima, non quando il prodotto e gia al limite.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  8. Come scongelare
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Evita di lasciare carne e pollo per molte ore a temperatura ambiente.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>scongela in frigorifero;</li>
                  <li>usa un contenitore;</li>
                  <li>tieni lontano da cibi pronti;</li>
                  <li>segui le indicazioni in etichetta;</li>
                  <li>cuoci bene dopo lo scongelamento.</li>
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: scongela piano e in sicurezza.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  9. Attenzione alla carne macinata
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il macinato e molto comodo per ragu, polpette, hamburger, polpettoni e ripieni,
                  ma e anche piu delicato.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Non lasciarlo troppo tempo in frigo e cuocilo bene.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: macinato = usare presto e cuocere bene.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  10. Controlla sempre odore, colore e confezione
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Prima di cucinare, controlla sempre il prodotto.</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>cattivo odore;</li>
                  <li>colore strano;</li>
                  <li>superficie molto viscida;</li>
                  <li>confezione gonfia;</li>
                  <li>liquidi strani;</li>
                  <li>data superata;</li>
                  <li>prodotto lasciato troppo tempo fuori dal frigo.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">Se hai dubbi, e meglio non rischiare.</p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: quando qualcosa sembra strano, non usarlo.
                </p>
              </section>

              <section className="mt-8 rounded-2xl bg-[#0B3B82] px-5 py-4 text-white">
                <p className="text-lg font-black">Schema facile: cosa fare appena arrivi a casa</p>
                <p className="mt-2 text-base">1. Tira fuori prima i freschi.</p>
                <p className="text-base">2. Metti carne e pollo in basso.</p>
                <p className="text-base">3. Tieni tutto chiuso.</p>
                <p className="text-base">4. Leggi la data.</p>
                <p className="text-base">5. Se non cucini presto, congela.</p>
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
                  Subito in frigo. In basso. Ben chiusi. Separati. Cotti bene.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se ricordi queste cinque cose, carne e pollo sono conservati meglio e la cucina e piu sicura.
                </p>
              </section>

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Consiglio Market Ingross</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Quando fai la spesa da Market Ingross, sistema subito carne e pollo appena arrivi a casa.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Mettili nella parte bassa del frigo, ben chiusi e separati dagli altri alimenti.
                  Se non li cucini entro poco tempo, dividili in porzioni e congelali quando sono ancora freschi.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Cosi eviti sprechi, risparmi tempo e cucini con piu tranquillita.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Nota importante</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa guida e informativa. In caso di dubbi su conservazione, bambini, gravidanza,
                  anziani, allergie o salute, chiedi sempre a un medico o a un professionista.
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
                    src="/images/news/consigli-per-la-spesa/guida illustrativa/carne-pollo-frigo.png"
                    alt="Guida illustrativa Carne e pollo in frigo"
                    width={1600}
                    height={2200}
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className="font-heading mb-4 text-xl font-extrabold text-[#0B3B82]">Video guida (reel)</h3>
                  <p className="text-base leading-8 text-slate-700">
                    Il reel dedicato verra aggiunto in questa sezione non appena caricato.
                  </p>
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
