import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Mostarda d’uva: il dolce profumo della vendemmia a Canicattì",
  description:
    "Ricetta siciliana tradizionale: mostarda d’uva (mustata) con mosto, mandorle, cannella. Dolce tipico della vendemmia a Canicattì.",
  keywords: [
    "mostarda d'uva",
    "mustata",
    "ricetta siciliana",
    "vendemmia",
    "Canicattì",
    "sapori di casa",
    "Market Ingross",
  ],
  openGraph: {
    title: "Mostarda d’uva: il dolce profumo della vendemmia a Canicattì",
    description:
      "Dolce siciliano antico a base di mosto d’uva, mandorle e cannella. Ricetta tipica della vendemmia a Canicattì.",
    url: "/news/mostarda-uva",
    type: "article",
  },
};

const ingredienti = [
  "1 litro di mosto d’uva",
  "80/100 g di amido per dolci, farina o semola rimacinata",
  "80/100 g di mandorle tritate o noci",
  "cannella in polvere",
  "1 stecca di cannella, facoltativa",
  "scorza d’arancia, facoltativa",
];

const passaggi = [
  "Versa il mosto d’uva in una pentola e fallo scaldare lentamente.",
  "A parte, sciogli l’amido o la farina con un po’ di mosto freddo, mescolando bene per evitare grumi.",
  "Aggiungi questo composto nella pentola con il resto del mosto e continua a mescolare.",
  "Cuoci a fuoco basso fino a quando la crema diventa densa.",
  "Aggiungi cannella, mandorle o noci tritate.",
  "Versa la mostarda nelle formine o in piccoli contenitori e lasciala raffreddare.",
  "Quando sarà fredda, potrai gustarla al cucchiaio o tagliarla a fette, secondo la consistenza ottenuta.",
];

export default function MostardaUvaPage() {
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
                Sapori di Casa Market Ingross • Ricette
              </p>
              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Mostarda d’uva: il dolce profumo della vendemmia a Canicattì
              </h1>
              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Ci sono sapori che arrivano in tavola solo in certi momenti dell’anno. La mostarda d’uva, in Sicilia chiamata anche mustata, è uno di questi. È un dolce semplice, antico, preparato con il mosto d’uva, cioè il succo dell’uva appena pigiata, prima che diventi vino.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Per il punto vendita di Canicattì, questa ricetta è una scelta naturale. Canicattì è infatti fortemente legata alla coltivazione dell’uva, in particolare all’Uva da Tavola di Canicattì IGP, un prodotto riconosciuto e rappresentativo del territorio.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                La mostarda d’uva racconta proprio questo legame: il rapporto tra la terra, la vendemmia, la famiglia e la cucina di casa. Non è una torta e non è una crema normale. È più simile a un budino rustico, compatto e profumato, preparato con mosto, farina o amido, cannella e frutta secca.
              </p>
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Ingredienti</h2>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {ingredienti.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Preparazione</h2>
                <ol className="mt-3 list-decimal pl-6 text-base leading-8 text-slate-700">
                  {passaggi.map((passaggio) => (
                    <li key={passaggio} className="mb-2">{passaggio}</li>
                  ))}
                </ol>
              </section>
              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Consiglio Market Ingross</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Per renderla ancora più profumata, puoi aggiungere un po’ di cannella sopra prima di servirla. Se vuoi una versione più ricca, usa mandorle tostate tritate grossolanamente.
                </p>
              </section>
              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Sapori di Casa Market Ingross</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa ricetta è dedicata al nostro punto vendita di Canicattì, città legata alla tradizione dell’uva e ai sapori della vendemmia.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La Mostarda d’uva è un dolce semplice, antico e profumato: una ricetta che porta in tavola il gusto autentico della Sicilia.
                </p>
              </section>
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Guida illustrativa</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Una versione visuale della ricetta, utile da consultare rapidamente anche da smartphone.</p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                  <Image
                    src="/images/news/ricette/mostarda-uva.png"
                    alt="Guida illustrativa Mostarda d’uva"
                    width={1600}
                    height={2200}
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className="font-heading mb-4 text-xl font-extrabold text-[#0B3B82]">Video guida (reel)</h3>
                  <video controls preload="metadata" className="w-full rounded-xl">
                    <source src="/video/news/ricette/mostarda-uva.mp4" type="video/mp4" />
                    Il tuo browser non supporta il video.
                  </video>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/video/news/ricette/mostarda-uva.mp4"
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
