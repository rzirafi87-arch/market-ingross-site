import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Come leggere un'etichetta alimentare: guida semplice",
  description:
    "Una guida semplice per capire ingredienti, allergeni, valori nutrizionali, peso, scadenza e conservazione sulle etichette alimentari.",
  keywords: [
    "etichetta alimentare",
    "ingredienti",
    "allergeni",
    "valori nutrizionali",
    "scadenza",
    "sicurezza alimentare",
    "Market Ingross Consiglia",
  ],
  openGraph: {
    title: "Come leggere un'etichetta alimentare: guida semplice",
    description:
      "Guida pratica per leggere le informazioni piu importanti sulle confezioni: ingredienti, allergeni, date, conservazione e valori nutrizionali.",
    url: "/informazioni-utili/come-leggere-etichetta-alimentare",
    type: "article",
  },
};

const allergeniComuni = [
  "latte",
  "uova",
  "pesce",
  "crostacei",
  "frutta a guscio",
  "arachidi",
  "soia",
  "glutine",
  "sedano",
  "senape",
  "sesamo",
  "lupini",
  "molluschi",
  "solfiti",
];

const puntiNutrizionali = [
  "energia",
  "grassi",
  "grassi saturi",
  "carboidrati",
  "zuccheri",
  "proteine",
  "sale",
];

const erroriDaEvitare = [
  "guardare solo la foto",
  "guardare solo il prezzo",
  "non leggere gli allergeni",
  "non controllare la data",
  "non leggere come conservare dopo l'apertura",
  "confrontare prodotti senza guardare il peso",
  "pensare che 'light' significhi sempre 'migliore'",
  "ignorare la lista ingredienti",
];

export default function EtichettaFacilePage() {
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
                Market Ingross Consiglia • Etichette e scadenze
              </p>

              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Come leggere un'etichetta alimentare
              </h1>

              <p className="mt-3 text-lg font-semibold text-slate-700 md:text-xl">Etichetta facile</p>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Quando compri un prodotto confezionato, l'etichetta e come una piccola carta d'identita.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">Ti dice che prodotto e, cosa contiene, se ci sono allergeni, quanto pesa, quando scade, come conservarlo e quali valori nutrizionali ha.</p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Leggere l'etichetta non deve essere difficile.
              </p>
              <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                Prima guarda cosa contiene. Poi guarda quando scade. Poi guarda come conservarlo.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                In Europa le informazioni alimentari sono disciplinate dal Regolamento UE 1169/2011,
                che definisce le regole su ingredienti, allergeni, quantita, date e valori nutrizionali.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">1. Il nome del prodotto</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La prima cosa da guardare e il nome: ti aiuta a capire cosa stai comprando davvero.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>"succo" non e sempre uguale a "bevanda alla frutta";</li>
                  <li>"yogurt" non e sempre uguale a "dessert al latte";</li>
                  <li>"formaggio" non e sempre uguale a "preparazione alimentare".</li>
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: non guardare solo la foto. Leggi anche il nome del prodotto.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">2. La lista ingredienti</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La lista ingredienti e una delle parti piu importanti: il primo ingrediente e quello presente in maggiore quantita.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se il primo ingrediente e "farina", la farina e principale. Se il primo ingrediente e "zucchero", significa che lo zucchero e molto presente.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: leggi i primi 3 ingredienti.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">3. Gli allergeni</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Gli allergeni sono ingredienti che possono creare problemi a chi e allergico o intollerante.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {allergeniComuni.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  In etichetta devono essere evidenziati chiaramente, ad esempio in grassetto o con carattere diverso.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: se hai allergie o intolleranze, cerca subito gli ingredienti evidenziati.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">4. La data: scadenza o preferibilmente entro</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  "Da consumare entro" riguarda la sicurezza, soprattutto nei prodotti freschi e delicati.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  "Da consumarsi preferibilmente entro" riguarda soprattutto la qualita: dopo la data il prodotto puo perdere caratteristiche, ma non e automaticamente pericoloso.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: "da consumare entro" = sicurezza. "preferibilmente entro" = qualita.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">5. I valori nutrizionali</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La tabella nutrizionale mostra di solito i valori per 100 g o 100 ml.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {puntiNutrizionali.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  In modo semplice: controlla zuccheri, grassi saturi e sale; valuta anche le proteine.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: confronta sempre i prodotti sui valori per 100 g.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">6. Il peso netto</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il peso netto ti dice quanto prodotto c'e davvero nella confezione: 500 g, 1 kg, 250 ml, 1 litro.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: non guardare solo il prezzo della confezione, guarda anche la quantita.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">7. Come conservare il prodotto</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  L'etichetta spiega dove e come tenere il prodotto: luogo fresco e asciutto, frigorifero, consumo entro pochi giorni dopo apertura, non ricongelare.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: dopo aver aperto un prodotto, leggi sempre come conservarlo.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">8. Origine o provenienza</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Su alcuni prodotti trovi indicazioni su Paese di origine, luogo di allevamento, produzione o confezionamento.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: se vuoi sapere da dove arriva un prodotto, cerca "origine" o "provenienza".
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">9. Lotto di produzione</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il lotto identifica un gruppo di prodotti realizzati nello stesso momento o stabilimento.
                  E utile soprattutto in caso di richiami e controlli.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: il lotto serve a riconoscere esattamente quel prodotto.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">10. Le frasi pubblicitarie</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Parole come "light", "ricco di fibre" o "senza zuccheri aggiunti" possono essere utili,
                  ma da sole non bastano.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Controlla sempre ingredienti, valori nutrizionali, quantita e conservazione.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: le scritte grandi attirano l'occhio, la lista ingredienti dice la verita.
                </p>
              </section>

              <section className="mt-8 rounded-2xl bg-[#0B3B82] px-5 py-4 text-white">
                <p className="text-lg font-black">Schema facile: cosa guardare prima</p>
                <ol className="mt-2 list-decimal pl-5 text-base leading-8">
                  <li>Nome del prodotto</li>
                  <li>Ingredienti</li>
                  <li>Allergeni</li>
                  <li>Data</li>
                  <li>Conservazione</li>
                  <li>Valori nutrizionali</li>
                  <li>Peso netto</li>
                </ol>
              </section>

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Errori da evitare</h2>
                <ul className="mt-3 list-disc pl-6 text-base leading-8 text-slate-700">
                  {erroriDaEvitare.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Esempio pratico</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Hai in mano una confezione di biscotti: leggi il nome, guarda i primi ingredienti,
                  controlla allergeni e data, verifica il peso, confronta zuccheri/grassi saturi/sale
                  e leggi come conservarli dopo l'apertura.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Cosi non scegli solo in base alla foto, ma in base alle informazioni vere.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Regola facile finale</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Guarda il nome. Leggi gli ingredienti. Controlla allergeni e data. Guarda come conservarlo.
                  Confronta i valori per 100 g.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa e la base per leggere un'etichetta senza confusione.
                </p>
              </section>

              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Consiglio Market Ingross</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Quando fai la spesa da Market Ingross, prenditi qualche secondo per leggere l'etichetta.
                  Ti aiuta a scegliere meglio, evitare sprechi e conservare correttamente i prodotti a casa.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se hai allergie, intolleranze o dubbi sulla salute, chiedi sempre consiglio a un medico
                  o a un professionista.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Nota importante</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa guida e informativa. In caso di dubbi su allergie, intolleranze, bambini,
                  gravidanza, anziani o salute, chiedi sempre a un medico o a un professionista.
                </p>
              </section>

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
                    src="/images/news/consigli-per-la-spesa/etichetta-facile.png"
                    alt="Guida illustrativa Etichetta facile"
                    width={1600}
                    height={2200}
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className="font-heading mb-4 text-xl font-extrabold text-[#0B3B82]">Video guida (reel)</h3>
                  <video
                    controls
                    preload="metadata"
                    className="w-full rounded-xl"
                  >
                    <source src="/video/news/consigli-per-la-spesa/etichetta-facile.mp4" type="video/mp4" />
                    Il tuo browser non supporta il video.
                  </video>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/video/news/consigli-per-la-spesa/etichetta-facile.mp4"
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
