import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Pasta co capuliatu: il gusto semplice e intenso della tradizione gelese",
  description:
    "Ricetta siciliana tradizionale: pasta co capuliatu, veloce e saporita, con pomodoro secco tritato, aglio, olio e prezzemolo.",
  keywords: [
    "pasta co capuliatu",
    "ricetta siciliana",
    "Gela",
    "sapori di casa",
    "Market Ingross",
  ],
  openGraph: {
    title: "Pasta co capuliatu: il gusto semplice e intenso della tradizione gelese",
    description:
      "Un primo piatto semplice, veloce e ricco di gusto che racconta la tradizione siciliana e il territorio di Gela.",
    url: "/news/pasta-co-capuliatu",
    type: "article",
  },
};

const ingredientiBase = [
  "320 g di pasta, meglio se spaghetti o linguine",
  "150 g di capuliatu oppure pomodori secchi tritati",
  "2 spicchi d'aglio",
  "olio extravergine d'oliva",
  "prezzemolo fresco",
  "sale",
  "pepe, facoltativo",
];

const ingredientiExtra = [
  "peperoncino",
  "pangrattato tostato",
  "pecorino grattugiato",
];

const passaggi = [
  "Metti a bollire l'acqua per la pasta e cuocila fino a quando sara al dente.",
  "Nel frattempo versa in una padella un filo generoso di olio extravergine d'oliva e fai rosolare leggermente l'aglio.",
  "Aggiungi il capuliatu, oppure i pomodori secchi tritati, e lascia insaporire per qualche minuto a fuoco dolce.",
  "Se vuoi, aggiungi anche un po' di peperoncino.",
  "Quando la pasta e pronta, scolala e versala nella padella con il condimento.",
  "Mescola bene e completa con prezzemolo fresco tritato.",
  "Servi subito, con un filo d'olio a crudo, e se ti piace aggiungi pangrattato tostato o una spolverata di pecorino.",
];

export default function PastaCoCapuliatuPage() {
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
                Pasta co capuliatu: il gusto semplice e intenso della tradizione gelese
              </h1>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Ci sono ricette che nascono dalla semplicita, ma riescono a lasciare un ricordo fortissimo.
                La pasta co capuliatu e una di queste. E un piatto della tradizione siciliana, molto legato
                anche al territorio di Gela, dove i sapori decisi, genuini e mediterranei fanno parte della
                cucina di ogni giorno.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Il protagonista di questa ricetta e il capuliatu, cioe il pomodoro secco tritato e condito,
                un ingrediente tipico della cucina siciliana. E un prodotto semplice, ma ricchissimo di gusto.
                Nasce dal sole, dal tempo e dalla pazienza: i pomodori vengono essiccati, conservati e poi
                lavorati fino a diventare un condimento profumato e saporito.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Bastano pasta, capuliatu, aglio, olio extravergine d'oliva e prezzemolo per creare un piatto
                pieno di carattere, dal sapore intenso e subito riconoscibile. E una ricetta veloce, pratica,
                molto saporita, perfetta quando hai poco tempo ma vuoi portare in tavola qualcosa di buono.
              </p>

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
                  Per un risultato ancora piu buono, usa un olio extravergine d'oliva profumato e un
                  capuliatu di qualita. Se vuoi dare ancora piu carattere al piatto, completalo con
                  pangrattato tostato: dona una nota croccante e ancora piu siciliana.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Sapori di Casa Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa ricetta e dedicata al nostro punto vendita di Gela.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La Pasta co capuliatu e un primo piatto semplice, veloce e ricco di gusto:
                  una ricetta della tradizione siciliana perfetta per portare in tavola i sapori autentici
                  del territorio con ingredienti genuini e facili da trovare ogni giorno da Market Ingross.
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
                    src="/images/news/ricette/pasta-co-capuliatu-card.png"
                    alt="Guida illustrativa Pasta co capuliatu"
                    width={1600}
                    height={2200}
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className="font-heading mb-4 text-xl font-extrabold text-[#0B3B82]">Video guida (reel)</h3>
                  <video controls preload="metadata" className="w-full rounded-xl">
                    <source src="/video/news/ricette/pasta-co-capuliatu.mp4" type="video/mp4" />
                    Il tuo browser non supporta il video.
                  </video>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/video/news/ricette/pasta-co-capuliatu.mp4"
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
