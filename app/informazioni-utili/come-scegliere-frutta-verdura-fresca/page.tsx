import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Come scegliere frutta e verdura fresca: guida semplice",
  description:
    "Una guida semplice per scegliere frutta e verdura fresca: colore, profumo, consistenza, stagione, ammaccature e conservazione dopo la spesa.",
  keywords: [
    "frutta fresca",
    "verdura fresca",
    "ortofrutta",
    "spesa intelligente",
    "Market Ingross Consiglia",
  ],
  openGraph: {
    title: "Come scegliere frutta e verdura fresca",
    description:
      "Guida pratica per riconoscere frutta e verdura fresca con segnali semplici: colore, profumo, consistenza, stagione e conservazione.",
    url: "/informazioni-utili/come-scegliere-frutta-verdura-fresca",
    type: "article",
  },
};

const esempiColore = [
  "insalata verde e non ingiallita",
  "carote arancioni e sode",
  "pomodori rossi e non troppo molli",
  "zucchine verdi e compatte",
  "mele senza troppe macchie scure",
  "agrumi con buccia sana",
];

const profumoBuono = [
  "le fragole devono avere un profumo dolce",
  "il melone deve avere un profumo delicato",
  "il basilico deve profumare",
  "gli agrumi devono sapere di fresco",
  "le erbe aromatiche devono avere odore vivo",
];

const odoriAttenzione = [
  "odore acido",
  "odore di muffa",
  "odore troppo forte o strano",
  "profumo assente in prodotti che di solito profumano molto",
];

const prodottiSodi = [
  "mele",
  "pere non troppo mature",
  "carote",
  "zucchine",
  "finocchi",
  "cetrioli",
  "peperoni",
];

const prodottiMorbidiMaturi = [
  "pesche",
  "albicocche",
  "fichi",
  "avocado",
  "melone",
  "cachi",
];

const segnaliDaEvitare = [
  "muffa",
  "parti molto molli",
  "liquidi",
  "buccia rotta",
  "macchie scure estese",
  "odore cattivo",
  "foglie marce",
];

const esempiStagione = [
  "arance e finocchi in inverno",
  "fragole in primavera",
  "pomodori e melanzane in estate",
  "zucca e castagne in autunno",
];

const controlliPreTagliato = [
  "data",
  "confezione integra",
  "colore",
  "presenza di liquidi strani",
  "odore",
  "conservazione in frigo",
];

const delicatiSopra = [
  "fragole",
  "pesche",
  "albicocche",
  "fichi",
  "insalata",
  "erbe aromatiche",
  "pomodori maturi",
];

const pesantiSotto = [
  "patate",
  "cipolle",
  "mele",
  "arance",
  "finocchi",
  "carote",
];

const inSpesa = [
  "usa sacchetti separati",
  "non mettere carne o pesce sopra frutta e verdura",
  "tieni separati i prodotti freschi",
  "non lasciare tutto troppo tempo al caldo",
  "sistema prima i prodotti piu delicati",
];

const aCasa = [
  "sistema subito i prodotti piu delicati",
  "metti in frigo quelli che devono stare al freddo",
  "non lavare tutto subito se non lo consumi",
  "lava frutta e verdura prima di mangiarla",
  "togli prodotti rovinati per non far rovinare gli altri",
  "controlla spesso il cassetto del frigo",
];

const erroriDaEvitare = [
  "scegliere solo in base alla forma perfetta",
  "ignorare odori strani",
  "comprare troppi prodotti maturi tutti insieme",
  "mettere frutta delicata sotto prodotti pesanti",
  "lasciare prodotti gia tagliati fuori dal frigo",
  "mettere frutta e verdura vicino a carne o pesce crudi",
  "lavare tutto subito e poi conservarlo bagnato",
  "dimenticare prodotti rovinati nel cassetto del frigo",
];

export default function ComeScegliereFruttaVerduraFrescaPage() {
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
                Market Ingross Consiglia - Frutta e verdura
              </p>

              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Come scegliere frutta e verdura fresca
              </h1>

              <p className="mt-3 text-lg font-semibold text-slate-700 md:text-xl">
                Frutta e verdura fresca: come sceglierla
              </p>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Quando compri frutta e verdura, non devi scegliere solo quella piu bella.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Devi guardare alcuni segnali semplici: colore, profumo, consistenza, stagione e conservazione.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Questi piccoli controlli ti aiutano a portare a casa prodotti piu buoni, piu adatti alla ricetta
                e spesso anche a ridurre gli sprechi.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">1. Guarda il colore</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il colore e uno dei primi segnali da osservare. Frutta e verdura fresche di solito hanno colori vivi e naturali.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {esempiColore.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: colore vivo = buon segnale. Colore spento o parti marce = attenzione.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">2. Senti il profumo</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Molti prodotti freschi hanno un profumo leggero e naturale.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {profumoBuono.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">Attenzione se senti:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {odoriAttenzione.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: profumo buono = prodotto piu invitante. Odore strano = meglio evitare.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">3. Controlla la consistenza</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">La consistenza cambia in base al prodotto.</p>
                <p className="mt-3 text-base leading-8 text-slate-700">Alcuni prodotti devono essere sodi:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {prodottiSodi.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">Altri possono essere piu morbidi quando sono maturi:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {prodottiMorbidiMaturi.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: sodo non significa sempre acerbo. Molle non significa sempre maturo.
                  Bisogna conoscere il prodotto.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">4. Attenzione ad ammaccature e muffe</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Piccole imperfezioni possono essere normali. Una mela leggermente segnata puo essere ancora buona.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">Pero bisogna fare attenzione a:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {segnaliDaEvitare.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  La FDA consiglia di evitare frutta e verdura con ammaccature o danni visibili e di assicurarsi
                  che i prodotti gia tagliati siano refrigerati o esposti su ghiaccio.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: un piccolo segno puo andare bene. Muffa o marcio no.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">5. Scegli in base a quando la userai</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Non tutta la frutta deve essere pronta da mangiare subito. Se devi mangiarla oggi, scegli prodotti piu maturi.
                  Se devi consumarla tra qualche giorno, scegli prodotti un po meno maturi.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>banane gialle se le mangi subito;</li>
                  <li>banane piu verdi se vuoi tenerle qualche giorno;</li>
                  <li>pomodori maturi per il sugo di oggi;</li>
                  <li>pomodori piu sodi se li userai dopo.</li>
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: compra maturo per oggi. Compra piu sodo per i prossimi giorni.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">6. Scegli prodotti di stagione</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La frutta e la verdura di stagione spesso sono piu adatte al periodo.
                  Di solito sono piu profumate, piu saporite, piu facili da trovare e spesso piu convenienti.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {esempiStagione.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: la stagione aiuta a scegliere meglio.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">7. Frutta e verdura gia tagliata</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La frutta e la verdura gia tagliata sono comode, ma vanno trattate con piu attenzione.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>macedonia pronta;</li>
                  <li>verdure tagliate;</li>
                  <li>insalata pronta;</li>
                  <li>minestrone pronto;</li>
                  <li>zucca gia pulita.</li>
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">Controlla sempre:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {controlliPreTagliato.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  La CDC raccomanda che frutta e verdura pretagliate siano refrigerate o tenute su ghiaccio,
                  perche una volta tagliate diventano piu delicate.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: gia tagliato = piu comodo, ma piu delicato.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  8. Non mischiare prodotti delicati con prodotti pesanti
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Quando fai la spesa, non schiacciare frutta e verdura delicate.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">Metti sopra:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {delicatiSopra.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">Metti sotto:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {pesantiSotto.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: delicato sopra. Pesante sotto.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">9. Come portarli a casa</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Durante la spesa:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {inSpesa.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  La CDC consiglia di tenere frutta e verdura separate da carne, pollame e pesce crudi,
                  sia nel carrello sia nelle borse, per evitare contaminazioni.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: frutta e verdura lontane da carne e pesce crudi.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">10. A casa: cosa fare</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Quando arrivi a casa:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {aCasa.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  La CDC raccomanda di sciacquare frutta e verdura prima di mangiarle; e meglio farlo appena prima dell'uso,
                  perche lavarle troppo presto puo favorire un deterioramento piu rapido.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: lava prima di mangiare, non sempre appena compri.
                </p>
              </section>

              <section className="mt-8 rounded-2xl bg-[#0B3B82] px-5 py-4 text-white">
                <p className="text-lg font-black">Schema facile: cosa guardare</p>
                <p className="mt-2 text-base">Colore: deve essere vivo e naturale.</p>
                <p className="text-base">Profumo: deve essere fresco, non strano.</p>
                <p className="text-base">Consistenza: deve essere adatta al prodotto.</p>
                <p className="text-base">Ammaccature: piccoli segni ok, muffa no.</p>
                <p className="text-base">Stagione: aiuta a trovare prodotti piu buoni e convenienti.</p>
                <p className="text-base">Uso: maturo per oggi, piu sodo per i prossimi giorni.</p>
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
                  Colore vivo. Profumo fresco. Consistenza giusta. Niente muffa. Stagione e uso.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se ricordi questi segnali, scegliere frutta e verdura diventa molto piu semplice.
                </p>
              </section>

              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Consiglio Market Ingross</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Nel reparto ortofrutta Market Ingross scegli con calma.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Guarda colore, profumo e consistenza. Scegli prodotti piu maturi se li userai subito,
                  piu sodi se li userai nei giorni successivi.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Cosi fai una spesa piu intelligente, riduci gli sprechi e porti a casa prodotti piu adatti alle tue ricette.
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
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Guida illustrativa
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Una versione visuale della guida, utile da consultare rapidamente anche da smartphone.
                </p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                  <Image
                    src="/images/news/consigli-per-la-spesa/guida illustrativa/frutta-verdura-fresca.png"
                    alt="Guida illustrativa Frutta e verdura fresca"
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
