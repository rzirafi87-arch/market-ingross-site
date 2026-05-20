import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Maccu di fave: il sapore antico della tradizione agrigentina",
  description:
    "Ricetta tradizionale siciliana: il maccu di fave agrigentino, semplice e genuino, con ingredienti facili da trovare.",
  keywords: [
    "maccu di fave",
    "ricetta siciliana",
    "tradizione agrigentina",
    "sapori di casa",
    "Market Ingross",
  ],
  openGraph: {
    title: "Maccu di fave: il sapore antico della tradizione agrigentina",
    description:
      "Un piatto antico della tradizione contadina siciliana, preparato con fave secche, finocchietto e olio extravergine d'oliva.",
    url: "/news/maccu-di-fave",
    type: "article",
  },
};

const ingredientiBase = [
  "500 g di fave secche sgusciate",
  "1 cipolla",
  "2 carote",
  "1 costa di sedano",
  "finocchietto selvatico o finocchietto fresco",
  "olio extravergine d'oliva",
  "sale",
  "pepe",
  "acqua quanto basta",
];

const ingredientiExtra = ["crostini di pane", "pasta corta", "peperoncino"];

const passaggi = [
  "Metti le fave secche in ammollo la sera prima, cosi diventeranno piu morbide e cuoceranno meglio.",
  "Il giorno dopo scolale e mettile in una pentola con cipolla, carote e sedano tagliati a pezzi. Aggiungi acqua fino a coprire bene gli ingredienti e lascia cuocere lentamente.",
  "Quando le fave iniziano a diventare morbide, aggiungi il finocchietto. Continua la cottura fino a quando le fave si sfaldano e diventano cremose.",
  "Mescola bene con un cucchiaio di legno oppure frulla leggermente se vuoi ottenere una crema piu liscia.",
  "Servi il maccu caldo con un filo di olio extravergine d'oliva, un po' di pepe e, se vuoi, qualche crostino di pane.",
];

export default function MaccuDiFavePage() {
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
                <span aria-hidden="true">←</span>
                Torna alle News
              </Link>
            </div>

            <article className="mi-panel rounded-[32px] p-6 lg:p-10 lg:px-12">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-[#EF3D32]">
                Sapori di Casa Market Ingross • Ricette
              </p>

              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Maccu di fave: il sapore antico della tradizione agrigentina
              </h1>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Ci sono ricette che non hanno bisogno di effetti speciali per raccontare un territorio.
                Bastano pochi ingredienti, una pentola sul fuoco e il profumo buono della cucina di casa.
                Il maccu di fave e una di queste: un piatto semplice, antico e profondamente siciliano,
                legato alla tradizione contadina e alla memoria delle famiglie.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Ad Agrigento, dove la cucina conserva ancora il valore delle cose genuine, il maccu di fave
                rappresenta una ricetta povera solo all'apparenza. In realta e un piatto ricco di storia,
                di sapore e di significato.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Il nome "maccu" richiama una crema densa e rustica, ottenuta dalla lunga cottura delle fave.
                Proprio questa semplicita rende speciale la ricetta: ogni ingrediente ha il suo ruolo,
                ogni profumo racconta qualcosa.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Come si prepara</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La preparazione comincia dalle fave secche, lasciate in ammollo per ammorbidirsi.
                  Poi si cuociono lentamente con cipolla, carota e sedano. Durante la cottura,
                  il piatto prende corpo e diventa cremoso. Il finocchietto aggiunge il profumo tipico
                  della cucina siciliana, mentre un filo di olio extravergine completa il tutto.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Il maccu di fave puo essere servito caldo come crema, con crostini di pane,
                  oppure usato come base per un primo piatto con pasta corta.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Ingredienti</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Per 4 persone:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {ingredientiBase.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="mt-4 text-base leading-8 text-slate-700">A piacere:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {ingredientiExtra.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Preparazione</h2>
                <ol className="mt-3 list-decimal pl-6 text-base leading-8 text-slate-700">
                  {passaggi.map((passaggio) => (
                    <li key={passaggio} className="mb-2">
                      {passaggio}
                    </li>
                  ))}
                </ol>
              </section>

              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Consiglio Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Per una versione ancora piu ricca, puoi aggiungere pasta corta e trasformare il maccu
                  in un primo piatto completo. E anche un ottimo modo per non sprecare nulla e portare
                  in tavola una ricetta buona anche il giorno dopo.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Sapori di Casa Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa ricetta e dedicata al nostro punto vendita di Agrigento.
                  Una ricetta semplice, antica e genuina, per riscoprire i sapori della nostra Sicilia
                  con ingredienti facili da trovare ogni giorno da Market Ingross.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Da Market Ingross Agrigento puoi trovare tutto il necessario per portare in tavola
                  questa ricetta della tradizione: legumi, verdure fresche, olio, pane, pasta e prodotti da dispensa.
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
                    src="/images/news/ricette/maccu-di-fave.png"
                    alt="Guida illustrativa Maccu di fave"
                    width={1600}
                    height={2200}
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className="font-heading mb-4 text-xl font-extrabold text-[#0B3B82]">Video guida (reel)</h3>
                  <video controls preload="metadata" className="w-full rounded-xl">
                    <source src="/video/news/ricette/maccu-di-fave.mp4" type="video/mp4" />
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
