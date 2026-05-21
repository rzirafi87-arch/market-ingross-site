import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Pane nero cunzato: Castelvetrano in una fetta di Sicilia",
  description:
    "Pane nero di Castelvetrano condito con pomodori, formaggio, acciughe, olio e origano. Ricetta semplice e tipica.",
  keywords: [
    "pane nero cunzato",
    "pane nero di Castelvetrano",
    "ricetta siciliana",
    "Castelvetrano",
    "sapori di casa",
    "Market Ingross",
  ],
  openGraph: {
    title: "Pane nero cunzato: Castelvetrano in una fetta di Sicilia",
    description:
      "Pane nero di Castelvetrano condito con pomodori, formaggio, acciughe, olio e origano. Ricetta semplice e tipica.",
    url: "/news/pane-nero-cunzato",
    type: "article",
  },
};

const ingredienti = [
  "4 fette grandi di pane nero di Castelvetrano o pane casereccio siciliano",
  "4 pomodori maturi o pomodorini",
  "200 g di primo sale, tuma o caciocavallo",
  "8 filetti di acciughe",
  "olio extravergine dâ€™oliva",
  "origano",
  "sale",
  "pepe, facoltativo",
];

const ingredientiExtra = [
  "olive",
  "capperi",
  "basilico",
  "peperoncino",
];

const passaggi = [
  "Taglia il pane nero a fette grandi e spesse.",
  "Lava i pomodori e tagliali a pezzetti. Condiscili con olio extravergine dâ€™oliva, sale e origano.",
  "Sistema i pomodori sul pane.",
  "Aggiungi il formaggio tagliato a fette o a pezzetti.",
  "Completa con i filetti di acciughe e un altro filo dâ€™olio extravergine dâ€™oliva.",
  "Se vuoi, aggiungi olive, capperi o basilico.",
  "Lascia riposare qualche minuto prima di servire, cosÃ¬ il pane assorbe bene il condimento.",
];

export default function PaneNeroCunzatoPage() {
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
                <span aria-hidden="true">â†</span>
                Torna a Ricette
              </Link>
            </div>
            <article className="mi-panel rounded-[32px] p-6 lg:p-10 lg:px-12">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-[#EF3D32]">
                Sapori di Casa Market Ingross â€¢ Ricette
              </p>
              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Pane nero cunzato: Castelvetrano in una fetta di Sicilia
              </h1>
              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Ci sono ricette che non hanno bisogno di essere complicate per diventare speciali. A volte basta una fetta di pane buono, un filo dâ€™olio, qualche pomodoro maturo e il profumo dellâ€™origano per portare in tavola tutto il sapore della Sicilia.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Per il punto vendita di Castelvetrano, la ricetta scelta Ã¨ il pane nero cunzato, una preparazione semplice, genuina e ricca di identitÃ . Il protagonista Ã¨ il pane nero di Castelvetrano, uno dei prodotti piÃ¹ riconoscibili del territorio, famoso per il suo colore scuro, la crosta profumata e la presenza dei semi di sesamo.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Il pane nero non Ã¨ un pane qualsiasi. Racconta la storia dei grani antichi, dei forni tradizionali e delle famiglie che per anni hanno portato in tavola pagnotte grandi, rustiche e profumate. La sua forza sta nella semplicitÃ : farina, acqua, lievito naturale, sale e sesamo. Ma Ã¨ proprio questa semplicitÃ  a renderlo unico.
              </p>
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Ingredienti</h2>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {ingredienti.map((item) => (
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
                    <li key={passaggio} className="mb-2">{passaggio}</li>
                  ))}
                </ol>
              </section>
              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Consiglio Market Ingross</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Per un risultato ancora piÃ¹ buono, scegli pomodori maturi e un olio extravergine profumato. Se vuoi prepararlo per una cena veloce, puoi tagliare il pane a pezzi piÃ¹ piccoli e servirlo come antipasto o aperitivo.
                </p>
              </section>
              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Sapori di Casa Market Ingross</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa ricetta Ã¨ dedicata al nostro punto vendita di Castelvetrano.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il pane nero cunzato Ã¨ una ricetta semplice, rustica e piena di sapore: una fetta di Sicilia da preparare in pochi minuti con ingredienti genuini e facili da trovare ogni giorno da Market Ingross.
                </p>
              </section>
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Guida illustrativa</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Una versione visuale della ricetta, utile da consultare rapidamente anche da smartphone.</p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                  <Image
                    src="/images/news/ricette/guida illustrativa/pane-nero-cunzato.png"
                    alt="Guida illustrativa Pane nero cunzato"
                    width={1600}
                    height={2200}
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className="font-heading mb-4 text-xl font-extrabold text-[#0B3B82]">Video guida (reel)</h3>
                  <video controls preload="metadata" className="w-full rounded-xl">
                    <source src="/video/news/ricette/pane-nero-cunzato.mp4" type="video/mp4" />
                    Il tuo browser non supporta il video.
                  </video>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/video/news/ricette/pane-nero-cunzato.mp4"
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

