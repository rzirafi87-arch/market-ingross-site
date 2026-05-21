import { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Scacce ragusane: il sapore autentico della tradizione iblea",
  description:
    "Ricetta tradizionale delle scacce ragusane con pomodoro e formaggio: impasto semplice, sfoglia sottile e gusto autentico della cucina iblea.",
  keywords: [
    "scacce ragusane",
    "Ragusa",
    "ricetta siciliana",
    "focaccia ripiena",
    "sapori di casa",
    "Market Ingross",
  ],
  openGraph: {
    title: "Scacce ragusane: il sapore autentico della tradizione iblea",
    description:
      "Una ricetta simbolo della cucina ragusana: semplice, rustica e ricca di sapore.",
    url: "/news/scacce-ragusane",
    type: "article",
  },
};

const ingredientiImpasto = [
  "500 g di farina",
  "250 ml circa di acqua tiepida",
  "10 g di lievito di birra",
  "2 cucchiai di olio extravergine d'oliva",
  "sale",
];

const ingredientiRipieno = [
  "300 g di passata di pomodoro",
  "250 g di caciocavallo, primo sale o formaggio simile",
  "olio extravergine d'oliva",
  "sale",
  "basilico, facoltativo",
  "cipolla, facoltativa",
];

const preparazione = [
  "Sciogli il lievito nell'acqua tiepida e uniscilo alla farina.",
  "Aggiungi l'olio e il sale, poi impasta fino a ottenere un composto morbido ed elastico.",
  "Lascia riposare l'impasto per il tempo necessario a farlo lievitare.",
  "Nel frattempo prepara il ripieno: versa la passata di pomodoro in una ciotola e condiscila con un filo d'olio, sale e, se vuoi, basilico oppure cipolla tagliata sottile.",
  "Taglia il formaggio a pezzetti piccoli.",
  "Quando l'impasto e pronto, dividilo in piu parti e stendilo molto sottile.",
  "Distribuisci sopra la salsa di pomodoro e il formaggio.",
  "Ripiega la sfoglia piu volte su se stessa, formando una specie di rettangolo o rotolo schiacciato.",
  "Sistema le scacce su una teglia e cuocile in forno fino a quando saranno ben dorate.",
  "Lasciale intiepidire leggermente e servile a fette.",
];

export default function ScacceRagusanePage() {
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
                Scacce ragusane: il sapore autentico della tradizione iblea
              </h1>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Ci sono ricette che raccontano un territorio ancora prima di essere assaggiate.
                Le scacce ragusane sono una di queste: il profumo del pomodoro, il gusto del formaggio
                e la consistenza di una sfoglia sottile e morbida raccontano subito la cucina siciliana.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Per il nostro punto vendita di Ragusa, la scelta non poteva che cadere su una delle
                specialita piu rappresentative della tradizione locale. Le scacce sono semplici,
                sostanziose, genuine e ricche di carattere.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Sono una sorta di focaccia ripiena, sottile e arrotolata, preparata con farina,
                acqua, olio e lievito, poi farcita con ingredienti saporiti. La versione classica
                con pomodoro e formaggio e la piu riconoscibile, ma esistono molte varianti.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                La loro forza sta nella semplicita: impasto steso sottile, pochi ingredienti,
                pieghe successive e cottura fino a ottenere una superficie dorata fuori e morbida dentro.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Sono perfette a pranzo, a cena, come merenda salata o per un buffet.
                Pratiche, buone e facili da condividere, uniscono tradizione e versatilita.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Da Market Ingross Ragusa trovi tutto il necessario per prepararle:
                farina, passata di pomodoro, formaggi, olio extravergine d'oliva,
                lievito e prodotti da dispensa.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Ingredienti</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Per circa 4-6 persone:</p>

                <p className="mt-4 text-base font-bold leading-8 text-slate-700">Per l'impasto</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {ingredientiImpasto.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="mt-4 text-base font-bold leading-8 text-slate-700">Per il ripieno</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {ingredientiRipieno.map((item) => (
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
                  Se vuoi un sapore ancora piu ricco, puoi aggiungere un po' di cipolla al pomodoro.
                  Le scacce sono ottime anche il giorno dopo, quindi sono perfette da preparare in anticipo.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Sapori di Casa Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa ricetta e dedicata al nostro punto vendita di Ragusa.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Le Scacce ragusane sono una specialita semplice, rustica e irresistibile:
                  una ricetta perfetta per portare in tavola il gusto autentico della tradizione iblea
                  con ingredienti genuini e facili da trovare ogni giorno da Market Ingross.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Guida illustrativa
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La guida illustrativa delle Scacce ragusane sara collegata qui appena disponibile.
                </p>
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
