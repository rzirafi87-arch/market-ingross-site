import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Come lavare bene frutta e verdura: guida semplice",
  description:
    "Una guida semplice per lavare bene frutta e verdura con acqua corrente, senza sapone, evitando contaminazioni e sprechi.",
  keywords: [
    "lavare frutta",
    "lavare verdura",
    "sicurezza alimentare",
    "ortofrutta",
    "igiene in cucina",
    "Market Ingross Consiglia",
  ],
  openGraph: {
    title: "Come lavare bene frutta e verdura",
    description:
      "Guida pratica per lavare frutta e verdura in modo semplice e sicuro prima di mangiarle o cucinarle.",
    url: "/informazioni-utili/come-lavare-frutta-verdura",
    type: "article",
  },
};

const possibiliResidui = [
  "terra",
  "polvere",
  "piccoli residui",
  "batteri",
  "tracce lasciate dal trasporto o dalla manipolazione",
];

const esempiDaLavareAncheSeSbucci = [
  "melone",
  "anguria",
  "arance",
  "limoni",
  "avocado",
  "mango",
  "cetrioli",
  "carote",
  "patate",
];

const esempiBucciaDura = [
  "patate",
  "carote",
  "cetrioli",
  "mele",
  "pere",
  "meloni",
  "angurie",
  "zucchine",
];

const esempiDelicati = [
  "fragole",
  "mirtilli",
  "lamponi",
  "more",
  "insalata",
  "spinaci freschi",
  "basilico",
  "erbe aromatiche",
];

const usaPerAsciugare = [
  "carta da cucina",
  "un panno pulito",
  "una centrifuga per insalata",
  "uno scolapasta",
];

const controlliPreTagliato = [
  "data",
  "confezione integra",
  "odore",
  "colore",
  "liquidi strani",
  "conservazione in frigo",
];

const alimentiCrudi = [
  "carne",
  "pollo",
  "pesce",
  "liquidi di carne o pesce",
  "taglieri sporchi",
  "coltelli usati per crudo",
];

const erroriDaEvitare = [
  "mangiare frutta e verdura senza lavarle",
  "usare sapone o detersivo",
  "lavare tutto troppo presto e conservarlo bagnato",
  "tagliare melone o anguria senza lavare la buccia",
  "usare lo stesso tagliere del pollo crudo",
  "mettere insalata pulita vicino a carne o pesce crudi",
  "non asciugare i prodotti lavati",
  "non controllare frutta o verdura gia tagliata",
];

export default function ComeLavareFruttaVerduraPage() {
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
                Market Ingross Consiglia - Sicurezza alimentare / Frutta e verdura
              </p>

              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Come lavare bene frutta e verdura
              </h1>

              <p className="mt-3 text-lg font-semibold text-slate-700 md:text-xl">
                Frutta e verdura: lavale bene
              </p>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Frutta e verdura sono importanti nella spesa di tutti i giorni. Prima di mangiarle, pero,
                bisogna lavarle bene.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">Perche?</p>
              <p className="mt-2 text-base leading-8 text-slate-700 md:text-lg">Perche possono avere sopra:</p>
              <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                {possibiliResidui.map((item) => (
                  <li key={item}>{item};</li>
                ))}
              </ul>
              <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                Lava prima di mangiare. Usa acqua corrente. Strofina dove serve. Asciuga bene.
                Tieni separato dal crudo.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Non serve complicarsi la vita. Nella maggior parte dei casi, basta fare bene pochi gesti semplici.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                La FDA consiglia di lavare frutta e verdura sotto acqua corrente prima di mangiarle, tagliarle
                o cucinarle, anche quando si mangia solo la parte interna, come per meloni e agrumi.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">1. Lava le mani prima di iniziare</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Prima di lavare frutta e verdura, lava le mani. Sembra banale, ma e importante.
                  Se tocchi frutta e verdura con mani sporche, rischi di sporcarle di nuovo.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: mani pulite prima, frutta e verdura dopo.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">2. Usa acqua corrente</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Per lavare frutta e verdura usa acqua corrente. Non serve usare sapone, detersivo o prodotti strani.
                  Anzi, e meglio evitarli.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  FDA e USDA non raccomandano saponi, detergenti o lavaggi commerciali per frutta e verdura;
                  l'indicazione base e usare acqua corrente fredda.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: acqua si. Sapone no.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">3. Lava anche la buccia che non mangi</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  A volte pensiamo: se tolgo la buccia, non serve lavare. In realta e meglio lavare comunque,
                  perche quando tagli un melone, un'arancia o un avocado, il coltello puo portare lo sporco
                  dalla buccia alla parte interna.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">Esempi da lavare anche se li sbucci:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {esempiDaLavareAncheSeSbucci.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: prima lavi, poi tagli.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">4. Strofina i prodotti piu duri</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Alcuni prodotti hanno una buccia piu resistente. Puoi strofinarli con le mani o con una
                  spazzolina pulita.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">Esempi:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {esempiBucciaDura.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Per prodotti con buccia dura, come patate o meloni, si puo usare una spazzolina pulita senza sapone.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: buccia dura = strofina meglio.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">5. Lava delicatamente i prodotti fragili</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Fragole, frutti di bosco e insalata sono delicati. Non vanno schiacciati.
                  Meglio lavarli con attenzione poco prima di mangiarli.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">Esempi delicati:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {esempiDelicati.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: delicato = acqua leggera e mani gentili.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">6. Meglio lavare prima di mangiare, non troppo presto</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Non sempre conviene lavare tutto appena torni dalla spesa. Alcuni prodotti, se restano bagnati,
                  si rovinano prima.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>lava poco prima di mangiare;</li>
                  <li>lava poco prima di cucinare;</li>
                  <li>lava poco prima di tagliare.</li>
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Soprattutto per prodotti delicati, come verdure a foglia e frutti di bosco, e meglio lavarli
                  vicino al momento del consumo, perche l'umidita puo favorire deterioramento piu rapido.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: lava quando devi usare.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">7. Asciuga bene</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Dopo il lavaggio, asciuga frutta e verdura.</p>
                <p className="mt-3 text-base leading-8 text-slate-700">Puoi usare:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {usaPerAsciugare.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Asciugare aiuta a togliere acqua in eccesso e a conservare meglio la consistenza.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: lavato e asciutto e meglio di lavato e bagnato.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">8. Attenzione all'insalata in busta</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se sulla confezione c'e scritto gia lavata, pronta da mangiare, prelavata o ready to eat,
                  di solito non serve lavarla di nuovo, se l'etichetta dice chiaramente che e pronta al consumo.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Rilavarla puo aumentare il rischio di contaminazione in cucina, se lavello, mani o superfici
                  non sono puliti.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: se e gia lavata e pronta, leggi l'etichetta e segui le istruzioni.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">9. Frutta e verdura gia tagliata</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">La frutta e la verdura gia tagliata sono piu delicate.</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>macedonia pronta;</li>
                  <li>insalata pronta;</li>
                  <li>zucca tagliata;</li>
                  <li>verdure per minestrone;</li>
                  <li>frutta a pezzi.</li>
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">Controlla sempre:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {controlliPreTagliato.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: gia tagliato = piu attenzione al freddo.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">10. Tieni lontano da carne, pesce e pollo crudi</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Frutta e verdura non devono toccare alimenti crudi come:
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {alimentiCrudi.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Usa taglieri e coltelli puliti. Se hai tagliato carne o pesce crudo, lava bene tutto prima
                  di preparare insalata o frutta.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La FDA ricorda di evitare che i batteri di alimenti crudi passino ad alimenti pronti da mangiare,
                  lavando mani, taglieri, utensili e superfici dopo il contatto con crudo.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: crudo da una parte. Frutta e verdura pulite dall'altra.
                </p>
              </section>

              <section className="mt-8 rounded-2xl bg-[#0B3B82] px-5 py-4 text-white">
                <p className="text-lg font-black">Schema facile: come lavare</p>

                <p className="mt-3 text-base font-bold">Frutta con buccia liscia</p>
                <p className="text-base">Esempi: mele, pere, pesche, pomodori, peperoni.</p>
                <p className="text-base">Cosa fare: lava sotto acqua corrente, strofina con le mani, asciuga bene.</p>

                <p className="mt-3 text-base font-bold">Frutta con buccia dura</p>
                <p className="text-base">Esempi: melone, anguria, avocado, agrumi.</p>
                <p className="text-base">Cosa fare: lava prima di tagliare, strofina bene la buccia, usa una spazzolina pulita se serve.</p>

                <p className="mt-3 text-base font-bold">Verdure con terra</p>
                <p className="text-base">Esempi: patate, carote, finocchi, sedano, insalata.</p>
                <p className="text-base">Cosa fare: elimina la terra visibile, lava sotto acqua corrente, strofina dove serve, asciuga o scola bene.</p>

                <p className="mt-3 text-base font-bold">Frutti piccoli e delicati</p>
                <p className="text-base">Esempi: fragole, mirtilli, lamponi, more.</p>
                <p className="text-base">Cosa fare: lava poco prima di mangiare, usa acqua leggera, non schiacciare, asciuga delicatamente.</p>
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
                  Lava prima di mangiare. Usa acqua corrente. Non usare sapone.
                  Strofina dove serve. Asciuga bene. Tieni lontano dal crudo.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se ricordi queste regole, lavare frutta e verdura diventa molto semplice.
                </p>
              </section>

              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Consiglio Market Ingross</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Quando fai la spesa da Market Ingross, scegli frutta e verdura con calma.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  A casa, lavale bene prima di mangiarle o cucinarle, usa acqua corrente e tienile lontane
                  da carne, pollo e pesce crudi.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Cosi prepari piatti piu sicuri, piu puliti e piu tranquilli per tutta la famiglia.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Nota importante</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa guida e informativa.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  In caso di dubbi su gravidanza, bambini, anziani, allergie o salute, chiedi sempre a un medico
                  o a un professionista sanitario.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Guida illustrativa</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Una versione visuale della guida, utile da consultare rapidamente anche da smartphone.
                </p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                  <Image
                    src="/images/news/consigli-per-la-spesa/guida illustrativa/lavare-frutta-verdura.png"
                    alt="Guida illustrativa Lavare frutta e verdura"
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
