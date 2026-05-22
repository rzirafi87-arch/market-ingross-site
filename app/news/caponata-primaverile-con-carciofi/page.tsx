import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Caponata primaverile con carciofi: la versione delicata di un grande classico siciliano",
  description:
    "Ricetta di maggio semplice e stagionale: caponata primaverile con carciofi, sedano, olive, capperi e tocco agrodolce.",
  keywords: [
    "caponata primaverile",
    "carciofi",
    "ricetta maggio",
    "sapori di casa",
    "Market Ingross",
  ],
  openGraph: {
    title: "Caponata primaverile con carciofi: la versione delicata di un grande classico siciliano",
    description:
      "Una variante fresca e leggera della caponata siciliana, perfetta per maggio.",
    url: "/news/caponata-primaverile-con-carciofi",
    type: "article",
  },
};

const ingredientiBase = [
  "6 carciofi",
  "2 coste di sedano",
  "1 cipolla",
  "80 g di olive verdi o nere denocciolate",
  "1 cucchiaio di capperi",
  "olio extravergine d'oliva",
  "2 cucchiai di aceto",
  "1 cucchiaio di zucchero",
  "sale",
  "pepe",
];

const ingredientiExtra = [
  "prezzemolo fresco",
  "pinoli",
  "uvetta",
  "qualche foglia di basilico",
  "succo di limone per i carciofi",
];

const passaggi = [
  "Pulisci i carciofi eliminando le foglie esterne piu dure, taglia le punte e dividili a spicchi.",
  "Mettili in acqua e limone per evitare che anneriscano.",
  "Lava il sedano e taglialo a pezzetti. Affetta finemente la cipolla.",
  "In una padella ampia fai rosolare la cipolla con un filo di olio extravergine d'oliva.",
  "Aggiungi il sedano e lascialo cuocere per qualche minuto.",
  "Unisci i carciofi scolati e fai insaporire a fuoco medio, mescolando con delicatezza.",
  "Aggiungi le olive e i capperi.",
  "In una ciotolina mescola l'aceto con lo zucchero, poi versalo nella padella.",
  "Lascia sfumare e continua la cottura finche le verdure diventano morbide ma ancora ben consistenti.",
  "Aggiusta di sale e pepe.",
  "Lascia riposare qualche minuto prima di servire. Se vuoi, completa con prezzemolo fresco tritato.",
];

export default function CaponataPrimaverileConCarciofiPage() {
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
                Maggio - Caponata primaverile con carciofi
              </h1>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Quando si pensa alla caponata, viene subito in mente uno dei piatti piu famosi della cucina siciliana:
                un mix di verdure, profumi mediterranei e quel gusto agrodolce che la rende inconfondibile.
                Ma la Sicilia ha anche il pregio di saper cambiare volto alle sue ricette seguendo le stagioni.
                Ed e proprio da questa idea che nasce la caponata primaverile con carciofi.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                E una variante piu fresca, piu leggera e perfetta per il mese di maggio, quando i carciofi sono ancora
                protagonisti della tavola insieme ad altre verdure di stagione. Al posto della classica melanzana estiva,
                qui troviamo ingredienti piu primaverili, capaci di dare al piatto un sapore delicato ma sempre ricco di personalita.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                La caponata primaverile conserva l'anima del piatto tradizionale: verdure cotte con cura, profumo di cipolla,
                presenza di olive e capperi, e quel tocco agrodolce che rende la ricetta cosi amata.
                Ma lo fa con una veste piu gentile, adatta ai mesi in cui si comincia a cercare una cucina meno pesante,
                pur restando piena di sapore.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Una versione delicata, ma con anima siciliana
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il protagonista di questa versione e il carciofo, ortaggio molto legato alla cucina siciliana.
                  Il suo gusto leggermente intenso si sposa benissimo con il sedano, la cipolla, le olive,
                  i capperi e una leggera nota di aceto e zucchero, che dona equilibrio senza coprire i sapori.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  E un piatto molto versatile. Puo essere servito come contorno, come antipasto,
                  come secondo vegetale oppure anche come piatto unico leggero accompagnato da pane buono.
                  Ed e una ricetta che si presta benissimo anche alla preparazione in anticipo,
                  perche il giorno dopo e spesso ancora piu buona.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Perche e perfetta per Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Per la rubrica Sapori di Casa Market Ingross, la caponata primaverile con carciofi e una proposta perfetta:
                  e siciliana, e stagionale, e bella da vedere e permette di valorizzare tanti ingredienti della spesa quotidiana.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Da Market Ingross puoi trovare tutto il necessario per prepararla: carciofi, sedano, cipolle,
                  olive, capperi, olio extravergine d'oliva, aceto, zucchero e prodotti da dispensa.
                  E una di quelle ricette che raccontano bene la Sicilia: semplice negli ingredienti,
                  ma ricca di profumo, colore e memoria.
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
                  Se vuoi una caponata ancora piu ricca, puoi aggiungere un piccolo cucchiaio di pinoli
                  o qualche uvetta, per richiamare ancora di piu la tradizione siciliana.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se invece preferisci un gusto piu delicato, tieni l'agrodolce leggero,
                  in modo che il sapore dei carciofi resti ben protagonista.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Sapori di Casa Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La caponata primaverile con carciofi e una ricetta semplice, elegante e stagionale,
                  perfetta per il mese di maggio.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Un modo diverso e raffinato per portare in tavola un grande classico siciliano,
                  con ingredienti genuini e facilmente reperibili durante la spesa di ogni giorno.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Da Market Ingross trovi tutto quello che serve per prepararla: verdure fresche,
                  olive, capperi, olio EVO e prodotti da dispensa.
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
                    src="/images/news/ricette/guida illustrativa/caponata-carciofi.png"
                    alt="Guida illustrativa Caponata primaverile con carciofi"
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
