import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Pasta primavera siciliana con piselli, asparagi e zucchine",
  description:
    "Ricetta di maggio semplice e stagionale: pasta primavera siciliana con piselli, asparagi e zucchine.",
  keywords: [
    "pasta primavera siciliana",
    "ricetta maggio",
    "piselli asparagi zucchine",
    "sapori di casa",
    "Market Ingross",
  ],
  openGraph: {
    title: "Pasta primavera siciliana: il piatto semplice che profuma di maggio",
    description:
      "Un primo piatto leggero, colorato e facile da preparare con le verdure di stagione.",
    url: "/news/pasta-primavera-con-piselli-asparagi-e-zucchine",
    type: "article",
  },
};

const ingredientiBase = [
  "320 g di pasta, meglio se penne, fusilli o mezze maniche",
  "150 g di piselli freschi o surgelati",
  "1 mazzetto di asparagi",
  "2 zucchine",
  "1 cipolla piccola",
  "olio extravergine d'oliva",
  "sale",
  "pepe",
  "formaggio grattugiato",
];

const ingredientiExtra = [
  "basilico fresco",
  "prezzemolo",
  "scorza di limone grattugiata",
  "qualche cucchiaio di acqua di cottura della pasta",
];

const passaggi = [
  "Lava le zucchine e tagliale a rondelle o a piccoli cubetti.",
  "Pulisci gli asparagi eliminando la parte piu dura del gambo, poi tagliali a pezzetti.",
  "Trita finemente la cipolla e falla rosolare in padella con un filo di olio extravergine d'oliva.",
  "Aggiungi gli asparagi e lasciali cuocere qualche minuto.",
  "Unisci le zucchine e i piselli, poi aggiungi un pizzico di sale e lascia cuocere tutto a fuoco medio.",
  "Nel frattempo cuoci la pasta in acqua salata.",
  "Quando la pasta e al dente, scolala e trasferiscila nella padella con le verdure.",
  "Aggiungi un po' di acqua di cottura per rendere il condimento piu cremoso.",
  "Completa con formaggio grattugiato, pepe e, se vuoi, basilico fresco o prezzemolo.",
  "Servi subito, con un filo d'olio a crudo.",
];

export default function PastaPrimaveraSicilianaPage() {
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
                <span aria-hidden="true">←</span>
                Torna a Ricette
              </Link>
            </div>

            <article className="mi-panel rounded-[32px] p-6 lg:p-10 lg:px-12">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-[#EF3D32]">
                Sapori di Casa Market Ingross - Ricette
              </p>

              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Maggio - Pasta primavera siciliana con piselli, asparagi e zucchine
              </h1>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Maggio e il mese in cui la tavola comincia a cambiare colore. Le giornate diventano
                piu luminose, le verdure fresche tornano protagoniste e cresce la voglia di piatti
                piu leggeri, semplici e profumati.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                La pasta primavera siciliana con piselli, asparagi e zucchine e una ricetta perfetta
                per questo periodo. E un primo piatto facile, genuino e colorato, pensato per portare
                in tavola il sapore delle verdure di stagione senza complicare la cucina di tutti i giorni.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                E il classico piatto che funziona bene per tutta la famiglia: buono per il pranzo,
                adatto a una cena leggera e perfetto anche per chi vuole mangiare piu verdure senza
                rinunciare al gusto.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Una ricetta semplice, ma piena di colore
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La forza di questa pasta sta nella semplicita. I piselli danno dolcezza,
                  gli asparagi aggiungono un sapore piu deciso e primaverile, le zucchine rendono
                  il piatto morbido e delicato. La cipolla crea una base profumata e l'olio
                  extravergine d'oliva lega tutto con il gusto tipico della cucina mediterranea.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Il risultato e una pasta cremosa ma leggera, colorata e molto invitante.
                  E una ricetta che racconta bene la primavera siciliana: pochi ingredienti,
                  verdure fresche, profumi semplici e tanta voglia di portare in tavola qualcosa di buono.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Perche e perfetta per Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa ricetta e ideale per la rubrica Sapori di Casa Market Ingross perche unisce
                  tradizione, stagionalita e spesa quotidiana. Non e un piatto complicato da ristorante:
                  e una ricetta che puoi leggere sul sito e pensare subito "questa la posso fare oggi".
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Da Market Ingross trovi facilmente tutti gli ingredienti principali: pasta,
                  piselli freschi o surgelati, asparagi, zucchine, cipolle, olio extravergine d'oliva,
                  formaggio grattugiato, basilico o prezzemolo e prodotti da dispensa.
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
                  Per rendere la pasta ancora piu profumata, puoi aggiungere alla fine un po' di
                  scorza di limone grattugiata. Dara freschezza al piatto senza coprire il sapore
                  delle verdure. Per una versione piu ricca, puoi aggiungere anche cubetti di primo sale
                  o una spolverata di ricotta salata.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Sapori di Casa Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La pasta primavera siciliana con piselli, asparagi e zucchine e una ricetta semplice,
                  fresca e colorata, perfetta per il mese di maggio.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Un primo piatto facile da preparare, ideale per portare in tavola le verdure di stagione
                  con il gusto genuino della cucina di casa. Da Market Ingross trovi gli ingredienti giusti
                  per prepararla ogni giorno: pasta, verdure fresche, olio extravergine d'oliva, formaggi e
                  prodotti da dispensa.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Sapori di Casa Market Ingross. Ricette semplici, stagionali e siciliane per la tua spesa quotidiana.
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
                    src="/images/news/ricette/guida illustrativa/pasta-primavera.png"
                    alt="Guida illustrativa Pasta primavera siciliana"
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
