import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Pasta alla Norma: il profumo dell'estate siciliana in un piatto semplice",
  description:
    "Ricetta di giugno semplice e stagionale: Pasta alla Norma con melanzane, pomodoro, basilico e ricotta salata.",
  keywords: [
    "pasta alla norma",
    "ricetta siciliana",
    "melanzane",
    "ricotta salata",
    "sapori di casa",
    "Market Ingross",
  ],
  openGraph: {
    title: "Pasta alla Norma: il profumo dell'estate siciliana in un piatto semplice",
    description:
      "Un grande classico siciliano, semplice negli ingredienti ma ricco di gusto e tradizione.",
    url: "/news/pasta-alla-norma",
    type: "article",
  },
};

const ingredientiBase = [
  "320 g di pasta, meglio se rigatoni, maccheroni o penne",
  "2 melanzane",
  "500 g di passata o polpa di pomodoro",
  "1 spicchio d'aglio oppure poca cipolla",
  "basilico fresco",
  "ricotta salata grattugiata",
  "olio extravergine d'oliva",
  "olio per friggere le melanzane",
  "sale",
  "pepe",
];

const ingredientiExtra = [
  "peperoncino",
  "un pizzico di zucchero nel sugo, se il pomodoro e troppo acido",
];

const passaggi = [
  "Lava le melanzane e tagliale a fette, a listarelle o a cubetti.",
  "Se vuoi, mettile per qualche minuto con un po di sale per far perdere l'acqua in eccesso, poi asciugale bene.",
  "Friggi le melanzane in olio caldo fino a quando diventano dorate. Scolale su carta assorbente.",
  "In una padella prepara il sugo: fai rosolare leggermente aglio o cipolla con olio extravergine d'oliva, poi aggiungi la passata di pomodoro.",
  "Lascia cuocere il sugo lentamente, aggiungendo sale e qualche foglia di basilico.",
  "Cuoci la pasta in acqua salata e scolala al dente.",
  "Versa la pasta nella padella con il sugo e mescola bene.",
  "Aggiungi le melanzane fritte, altro basilico fresco e completa con ricotta salata grattugiata.",
  "Servi subito, calda e profumata.",
];

export default function PastaAllaNormaPage() {
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
                Giugno - Pasta alla Norma
              </h1>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Ci sono ricette che non hanno bisogno di presentazioni. Basta nominarle per pensare subito alla Sicilia,
                al profumo del pomodoro, al basilico fresco e alle melanzane fritte. La Pasta alla Norma e una di queste:
                un grande classico della cucina siciliana, semplice negli ingredienti ma ricco di gusto e tradizione.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                E una ricetta perfetta per il mese di giugno, quando le giornate si fanno piu calde e iniziano a tornare
                protagoniste le verdure estive. Le melanzane, il pomodoro, il basilico e la ricotta salata creano insieme
                un piatto colorato, profumato e molto riconoscibile.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                La Pasta alla Norma e una ricetta che parla di casa, di tavole siciliane e di pranzi estivi.
                E un piatto che sembra semplice, ma ha un equilibrio preciso: il dolce della melanzana,
                il sapore intenso del pomodoro, la freschezza del basilico e la nota sapida della ricotta salata.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Un classico che piace a tutti
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La forza della Pasta alla Norma e la sua immediatezza. Non servono ingredienti difficili
                  e non servono preparazioni complicate. Bastano pochi prodotti buoni e una cottura fatta con attenzione.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Le melanzane vengono tagliate e fritte fino a diventare morbide e dorate.
                  Il sugo di pomodoro cuoce lentamente con olio, aglio o cipolla, fino a diventare profumato.
                  La pasta viene scolata al dente e unita al sugo.
                  Alla fine arrivano le melanzane, il basilico e la ricotta salata grattugiata.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Il risultato e un primo piatto pieno, generoso e siciliano al cento per cento.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Perche e perfetta per Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa ricetta e ideale per la rubrica Sapori di Casa Market Ingross perche valorizza ingredienti
                  che fanno parte della spesa quotidiana e che, nel periodo estivo, diventano protagonisti dei reparti.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">Da Market Ingross puoi trovare facilmente:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>pasta;</li>
                  <li>melanzane;</li>
                  <li>passata o polpa di pomodoro;</li>
                  <li>basilico fresco;</li>
                  <li>olio extravergine d'oliva;</li>
                  <li>ricotta salata o formaggi da grattugiare;</li>
                  <li>sale, pepe e prodotti da dispensa.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  E anche una ricetta molto forte per i social: il piatto e bello da vedere,
                  colorato, riconoscibile e legato subito all'idea di Sicilia.
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
                  Per una Pasta alla Norma piu buona, scegli melanzane sode e lucide e usa un sugo di pomodoro semplice,
                  senza coprire troppo il sapore degli ingredienti.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La ricotta salata va aggiunta alla fine: cosi resta profumata e da al piatto il suo gusto tipico.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Sapori di Casa Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La Pasta alla Norma e una ricetta siciliana semplice, generosa e piena di profumo.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  E perfetta per il mese di giugno, quando le melanzane iniziano a diventare protagoniste
                  della cucina estiva.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Da Market Ingross trovi tutto quello che serve per prepararla: pasta, melanzane, pomodoro,
                  basilico, olio EVO, formaggi e prodotti da dispensa.
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
                    src="/images/news/ricette/guida illustrativa/pasta-norma.png"
                    alt="Guida illustrativa Pasta alla Norma"
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
