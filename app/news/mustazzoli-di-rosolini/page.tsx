import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Mustazzoli di Rosolini: il dolce antico che profuma di vino cotto e tradizione",
  description:
    "Ricetta tradizionale dei Mustazzoli di Rosolini con farina e vino cotto: un dolce rustico, antico e legato alle feste.",
  keywords: [
    "mustazzoli di Rosolini",
    "Rosolini",
    "ricetta siciliana",
    "vino cotto",
    "Sapori di Casa",
    "Market Ingross",
  ],
  openGraph: {
    title: "Mustazzoli di Rosolini: il dolce antico che profuma di vino cotto e tradizione",
    description:
      "Un dolce tradizionale di Rosolini, semplice e identitario, preparato con farina e vino cotto.",
    url: "/news/mustazzoli-di-rosolini",
    type: "article",
  },
};

const ingredientiBase = [
  "500 g di farina",
  "300/350 ml di mosto cotto o vino cotto",
  "cannella",
  "scorza d'arancia grattugiata, facoltativa",
  "miele, se non si trova il vino cotto",
  "poca acqua, solo se serve per ammorbidire l'impasto",
];

const ingredientiAggiuntivi = [
  "chiodi di garofano in polvere",
  "semi di sesamo",
  "mandorle tritate, solo per una variante piu ricca",
];

const preparazione = [
  "Scalda lentamente il vino cotto in una pentola, senza farlo bruciare.",
  "Aggiungi la cannella e, se vuoi, un po' di scorza d'arancia grattugiata.",
  "Versa la farina poco alla volta, mescolando con energia. Il composto deve diventare compatto e lavorabile.",
  "Quando l'impasto e pronto, lascialo intiepidire.",
  "Forma dei piccoli biscotti rustici, dalla forma allungata o irregolare.",
  "Sistemali su una teglia con carta forno.",
  "Cuoci in forno fino a quando diventano asciutti e compatti.",
  "Lasciali raffreddare bene prima di servirli.",
];

export default function MustazzoliDiRosoliniPage() {
  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <section className="bg-[var(--mi-card-soft)] py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="mb-6">
              <Link
                href="/news/ricette"
                className="mi-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black text-[#003b7a] transition hover:-translate-x-1"
              >
                <span aria-hidden="true">&lt;-</span>
                Torna a Ricette
              </Link>
            </div>

            <article className="mi-panel rounded-[32px] p-6 lg:p-10 lg:px-12">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-[#EF3D32]">
                Sapori di Casa Market Ingross - Ricette
              </p>

              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Mustazzoli di Rosolini: il dolce antico che profuma di vino cotto e tradizione
              </h1>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Ci sono dolci che non nascono per stupire con decorazioni elaborate, ma per raccontare una storia.
                I Mustazzoli di Rosolini appartengono proprio a questa famiglia di ricette: semplici, antiche,
                legate alla casa, alle feste e alla cucina di una volta.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Per il nostro punto vendita di Rosolini, questa ricetta e una scelta molto forte,
                perche porta gia nel nome il legame con il comune. Non parliamo di un dolce siciliano generico,
                ma di una preparazione che viene ricordata proprio come Mustazzoli di Rosolini.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                La particolarita di questi dolci sta nella loro essenzialita. In una testimonianza dedicata
                alla ricetta locale, i mustazzoli preparati a Rosolini vengono descritti come dolci
                non a base di mandorle, ma fatti soprattutto con farina e mosto cotto,
                chiamato anche vino cotto. In mancanza del mosto cotto, in passato si poteva usare il miele,
                ma come alternativa di necessita.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Il vino cotto e l'ingrediente che da carattere alla ricetta. Ha un profumo intenso,
                un colore scuro e un sapore dolce e profondo. Quando si unisce alla farina,
                crea un impasto semplice ma ricco di memoria. E uno di quei sapori che fanno pensare subito
                alle cucine di famiglia, alle mani infarinate e ai dolci preparati con pazienza.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                I mustazzoli sono tradizionalmente legati anche ai periodi di festa.
                Nella ricetta locale di Rosolini viene ricordato che si preparavano almeno una settimana
                prima di Natale, proprio perche erano dolci destinati ai giorni importanti,
                da conservare e condividere.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                La preparazione e semplice, ma richiede attenzione. Si scalda il vino cotto,
                si aggiunge la farina poco alla volta e si mescola fino a ottenere un composto compatto.
                In alcune versioni siciliane si aggiungono anche profumi come cannella,
                scorza d'arancia o spezie.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Il risultato e un dolce rustico, scuro, profumato e molto particolare.
                Non e un biscotto qualsiasi: e un piccolo pezzo di tradizione.
                Ha il sapore delle ricette povere, quelle nate con pochi ingredienti
                ma capaci di restare nella memoria.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                I Mustazzoli di Rosolini sono perfetti per la rubrica Sapori di Casa Market Ingross
                perche raccontano il territorio in modo diretto e riconoscibile.
                Sono dolci semplici, ma pieni di identita. E soprattutto permettono di valorizzare
                ingredienti da dispensa, facili da trovare e adatti a una spesa quotidiana:
                farina, miele, spezie, scorze d'agrumi e prodotti per dolci.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Da Market Ingross Rosolini puoi trovare molti degli ingredienti utili per prepararli:
                farina, miele, cannella, arance, prodotti da dispensa e ingredienti per dolci.
                Il vino cotto o mosto cotto, quando disponibile, resta l'elemento piu tradizionale della ricetta.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                I Mustazzoli di Rosolini sono dolci da preparare senza fretta.
                Non servono effetti speciali: servono ingredienti semplici, pazienza e voglia
                di portare in tavola un sapore antico.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Ingredienti</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Per circa 20 mustazzoli:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {ingredientiBase.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="mt-4 text-base leading-8 text-slate-700">A piacere:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {ingredientiAggiuntivi.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Preparazione</h2>
                <ol className="mt-3 list-decimal pl-6 text-base leading-8 text-slate-700">
                  {preparazione.map((step) => (
                    <li key={step} className="mb-2">
                      {step}
                    </li>
                  ))}
                </ol>
              </section>

              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Consiglio Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se vuoi un profumo ancora piu natalizio, aggiungi un pizzico di cannella
                  e scorza d'arancia. Sono dolci perfetti da preparare in anticipo e da servire
                  durante le feste o con un caffe.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Sapori di Casa Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa ricetta e dedicata al nostro punto vendita di Rosolini.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  I Mustazzoli di Rosolini sono dolci semplici, rustici e pieni di storia:
                  una ricetta che racconta la tradizione locale attraverso il profumo
                  del vino cotto e degli ingredienti di una volta.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Guida illustrativa
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Una versione visuale della ricetta, utile da consultare rapidamente anche da smartphone.
                </p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                  <Image
                    src="/images/news/ricette/guida illustrativa/mustazzoli.png"
                    alt="Guida illustrativa Mustazzoli di Rosolini"
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
