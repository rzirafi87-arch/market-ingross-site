import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Peperoni in agrodolce: il contorno siciliano che profuma d'estate",
  description:
    "Ricetta di giugno semplice e colorata: peperoni in agrodolce con cipolla, aceto e zucchero, perfetti come contorno o antipasto.",
  keywords: [
    "peperoni in agrodolce",
    "ricetta siciliana",
    "contorno estivo",
    "sapori di casa",
    "Market Ingross",
  ],
  openGraph: {
    title: "Peperoni in agrodolce: il contorno siciliano che profuma d'estate",
    description:
      "Una ricetta semplice e vivace della tradizione siciliana, perfetta per giugno.",
    url: "/news/peperoni-in-agrodolce",
    type: "article",
  },
};

const ingredientiBase = [
  "4 peperoni misti, rossi, gialli e verdi",
  "1 cipolla",
  "olio extravergine d'oliva",
  "3 cucchiai di aceto",
  "1 cucchiaio di zucchero",
  "sale",
  "pepe",
];

const ingredientiExtra = [
  "olive",
  "capperi",
  "basilico fresco",
  "prezzemolo",
  "pangrattato tostato",
];

const passaggi = [
  "Lava i peperoni, elimina semi e filamenti interni, poi tagliali a listarelle.",
  "Affetta la cipolla in modo sottile.",
  "In una padella ampia, scalda un filo di olio extravergine d'oliva e fai rosolare la cipolla a fuoco dolce.",
  "Aggiungi i peperoni e lascia cuocere lentamente, mescolando ogni tanto.",
  "Quando i peperoni iniziano ad ammorbidirsi, aggiungi sale e pepe.",
  "In una ciotolina mescola aceto e zucchero.",
  "Versa il composto sui peperoni e lascia sfumare per qualche minuto.",
  "Continua la cottura finche i peperoni diventano morbidi, lucidi e ben saporiti.",
  "Lasciali riposare qualche minuto prima di servirli.",
];

export default function PeperoniInAgrodolcePage() {
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
                Giugno - Peperoni in agrodolce
              </h1>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Ci sono piatti che portano subito in tavola il colore dell'estate. I peperoni in agrodolce
                sono uno di questi: una ricetta semplice, vivace e profumata, perfetta per il mese di giugno,
                quando i peperoni iniziano a diventare protagonisti della cucina di stagione.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                E una preparazione tipica della cucina siciliana e mediterranea, fatta con pochi ingredienti ma
                con un gusto molto riconoscibile. Il sapore dolce dei peperoni incontra la nota vivace dell'aceto
                e dello zucchero, creando quel contrasto agrodolce che in Sicilia ritroviamo in tante ricette tradizionali.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                I peperoni in agrodolce sono facili da preparare e molto versatili. Si possono servire come contorno,
                come antipasto, dentro un panino, accanto a carne o pesce, oppure su una fetta di pane tostato per una
                cena semplice e saporita.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Una ricetta colorata e semplice
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La bellezza di questa ricetta sta nella sua semplicita. I peperoni danno colore e dolcezza,
                  la cipolla aggiunge profumo, l'olio extravergine d'oliva lega gli ingredienti,
                  l'aceto da freschezza e lo zucchero ammorbidisce il sapore creando l'equilibrio tipico dell'agrodolce.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Il risultato e un piatto morbido, profumato e pieno di carattere. E buono appena fatto,
                  ma spesso diventa ancora piu gustoso dopo qualche ora di riposo.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Perche e perfetto per Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa ricetta e ideale per la rubrica Sapori di Casa Market Ingross perche valorizza ingredienti
                  semplici e molto presenti nella spesa quotidiana.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">Da Market Ingross puoi trovare tutto il necessario:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>peperoni rossi, gialli e verdi;</li>
                  <li>cipolle;</li>
                  <li>olio extravergine d'oliva;</li>
                  <li>aceto;</li>
                  <li>zucchero;</li>
                  <li>sale e pepe;</li>
                  <li>pane e prodotti da dispensa.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  E anche una ricetta molto bella da comunicare sui social,
                  perche i colori dei peperoni rendono subito la grafica vivace e appetitosa.
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
                  Per una versione ancora piu siciliana, puoi aggiungere olive e capperi verso fine cottura.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se vuoi dare una nota croccante, completa il piatto con un po di pangrattato tostato prima di servire.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Sapori di Casa Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  I peperoni in agrodolce sono una ricetta semplice, colorata e piena di gusto,
                  perfetta per il mese di giugno.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Un contorno siciliano facile da preparare, ideale per accompagnare tanti piatti
                  o per arricchire una cena estiva con pochi ingredienti.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Da Market Ingross trovi tutto quello che serve per prepararli: peperoni freschi,
                  cipolle, olio EVO, aceto, zucchero, pane e prodotti da dispensa.
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
                    src="/images/news/ricette/guida illustrativa/peperoni-agrodolce.png"
                    alt="Guida illustrativa Peperoni in agrodolce"
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
