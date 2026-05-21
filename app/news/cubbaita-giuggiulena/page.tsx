import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Cubbaita di Ispica: il dolce croccante della tradizione siciliana",
  description:
    "Ricetta tradizionale siciliana della cubbaita (giuggiulena): sesamo, miele, zucchero e mandorle per un dolce croccante e profumato.",
  keywords: [
    "cubbaita",
    "giuggiulena",
    "ricetta siciliana",
    "Ispica",
    "dolci tradizionali",
    "Sapori di Casa",
    "Market Ingross",
  ],
  openGraph: {
    title: "Cubbaita di Ispica: il dolce croccante della tradizione siciliana",
    description:
      "Un dolce antico, croccante e genuino che racconta i sapori piu autentici della Sicilia.",
    url: "/news/cubbaita-giuggiulena",
    type: "article",
  },
};

const ingredienti = [
  "300 g di semi di sesamo",
  "200 g di miele",
  "100 g di zucchero",
  "100 g di mandorle",
  "scorza di limone, facoltativa",
];

const preparazione = [
  "Tosta i semi di sesamo in una padella antiaderente per qualche minuto, mescolando spesso, fino a quando diventano leggermente dorati e profumati.",
  "A parte, tosta anche le mandorle e tritale grossolanamente oppure lasciale intere, se preferisci.",
  "In una pentola fai sciogliere lentamente il miele insieme allo zucchero, mescolando con attenzione.",
  "Quando il composto e ben sciolto e amalgamato, aggiungi il sesamo tostato e le mandorle.",
  "Mescola rapidamente e versa il composto su una superficie rivestita con carta forno oppure leggermente unta.",
  "Stendi il tutto con delicatezza, aiutandoti con un cucchiaio o con un altro foglio di carta forno.",
  "Lascia raffreddare e, prima che diventi troppo duro, taglia la cubbaita in rettangoli o rombi.",
];

export default function CubbaitaGiuggiulenaPage() {
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
                Cubbaita di Ispica: il dolce croccante della tradizione siciliana
              </h1>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Ci sono dolci che non hanno bisogno di creme o decorazioni elaborate per farsi ricordare.
                Basta un morso per capire che racchiudono una storia antica, fatta di semplicita,
                festa e tradizione.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                La cubbaita, conosciuta in molte zone della Sicilia anche come giuggiulena,
                e uno di questi dolci. Per il nostro punto vendita di Ispica e una scelta perfetta:
                sesamo, miele, zucchero e mandorle sono ingredienti semplici ma capaci di creare
                un gusto unico, intenso e subito riconoscibile.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                E un dolce croccante, profumato e dorato che richiama le feste di paese,
                i mercatini e le antiche tradizioni di famiglia. Il nome cambia da zona a zona,
                ma il cuore della ricetta resta lo stesso.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Il contrasto tra semplicita della preparazione e forza del sapore la rende speciale:
                il sesamo dona una nota tostata, il miele rende il dolce piu avvolgente,
                mentre le mandorle aggiungono gusto e consistenza.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                E perfetta a fine pasto, come piccolo dolce, oppure da offrire durante le feste.
                E anche una ricetta ideale per raccontare la Sicilia in modo diverso,
                attraverso i dolci piu tradizionali e identitari.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Da Market Ingross Ispica trovi tutto il necessario per prepararla:
                sesamo, miele, zucchero, mandorle e prodotti da dispensa.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Ingredienti</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Per circa 6-8 porzioni:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {ingredienti.map((item) => (
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
                  Per renderla ancora piu profumata, puoi aggiungere un po' di scorza di limone.
                  Se vuoi una consistenza piu ricca, aumenta leggermente la quantita di mandorle.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Sapori di Casa Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa ricetta e dedicata al nostro punto vendita di Ispica.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La Cubbaita e un dolce antico, croccante e genuino, perfetto per raccontare
                  i sapori piu autentici della Sicilia con ingredienti semplici e facili da trovare
                  ogni giorno da Market Ingross.
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
                    src="/images/news/ricette/guida illustrativa/cubbaita.png"
                    alt="Guida illustrativa Cubbaita di Ispica"
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
