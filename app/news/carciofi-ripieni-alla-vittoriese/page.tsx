import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Carciofi ripieni alla vittoriese: il gusto semplice della cucina di casa",
  description:
    "Ricetta tradizionale di Vittoria con carciofi ripieni al pangrattato, formaggio, aglio e prezzemolo: semplice, rustica e profumata.",
  keywords: [
    "carciofi ripieni",
    "Vittoria",
    "ricetta siciliana",
    "carciofi ammuddicati",
    "Sapori di Casa",
    "Market Ingross",
  ],
  openGraph: {
    title: "Carciofi ripieni alla vittoriese: il gusto semplice della cucina di casa",
    description:
      "Una ricetta semplice e tradizionale del territorio di Vittoria, perfetta come secondo o contorno ricco.",
    url: "/news/carciofi-ripieni-alla-vittoriese",
    type: "article",
  },
};

const ingredientiBase = [
  "8 carciofi",
  "150 g di pangrattato",
  "80 g di formaggio grattugiato",
  "2 spicchi d'aglio",
  "prezzemolo fresco",
  "olio extravergine d'oliva",
  "sale",
  "pepe",
  "1 limone",
];

const ingredientiExtra = [
  "pezzetti di caciocavallo o primo sale",
  "un pizzico di peperoncino",
  "qualche cucchiaio di acqua o brodo per la cottura",
];

const preparazione = [
  "Pulisci i carciofi eliminando le foglie esterne più dure e tagliando le punte.",
  "Aprili delicatamente con le mani e strofinali con il limone, così non si anneriscono.",
  "In una ciotola prepara il ripieno mescolando pangrattato, formaggio grattugiato, aglio tritato, prezzemolo, sale, pepe e olio extravergine d'oliva.",
  "Farcisci i carciofi inserendo il composto tra le foglie e anche al centro.",
  "Disponili in pentola o in una teglia, vicini tra loro, aggiungendo un filo d'olio e un po' d'acqua sul fondo.",
  "Cuoci lentamente, con coperchio o in forno, fino a quando i carciofi diventano morbidi e il ripieno risulta ben dorato.",
  "Servili caldi oppure tiepidi.",
];

export default function CarciofiRipieniVittoriesePage() {
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
                Carciofi ripieni alla vittoriese: il gusto semplice della cucina di casa
              </h1>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Ci sono ricette che sanno di domenica, di cucina lenta e di famiglia.
                I carciofi ripieni alla vittoriese, chiamati in molte case anche carciofi ammuddicati,
                appartengono proprio a questa categoria: piatti semplici, genuini e profondamente legati
                alla tradizione del territorio.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Per il nostro punto vendita di Vittoria, questa scelta e perfetta perche racconta una cucina
                concreta, fatta di ingredienti comuni ma messi insieme con intelligenza e gusto.
                Il protagonista e il carciofo, arricchito con un ripieno profumato di pangrattato,
                formaggio, aglio, prezzemolo e olio extravergine d'oliva.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                E una ricetta che rappresenta bene l'anima della cucina del sud-est siciliano:
                niente ingredienti complicati, niente passaggi difficili, ma tanto sapore.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Il termine ammuddicati richiama proprio la presenza della mollica o del pangrattato,
                usato per farcire il cuore dei carciofi. E una soluzione antica e molto siciliana:
                ingredienti semplici della dispensa che diventano un piatto completo e buono.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                I carciofi ripieni sono perfetti come secondo piatto, contorno ricco o piatto unico leggero.
                La preparazione richiede un po' di pazienza, ma non e difficile: il risultato e rustico,
                elegante e pieno di profumo.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Da Market Ingross Vittoria puoi trovare tutto il necessario per preparare i carciofi ripieni:
                carciofi freschi, pangrattato, formaggio grattugiato, olio extravergine d'oliva,
                aglio, prezzemolo, limoni e prodotti da dispensa.
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
                  Per una versione ancora più ricca, puoi aggiungere al ripieno qualche pezzetto di caciocavallo.
                  Se invece vuoi un gusto più fresco, completa con qualche goccia di limone prima di servire.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Sapori di Casa Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa ricetta e dedicata al nostro punto vendita di Vittoria.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  I Carciofi ripieni alla vittoriese sono un piatto semplice, genuino e pieno di tradizione:
                  perfetto per portare in tavola un sapore autentico della nostra Sicilia con ingredienti
                  facili da trovare ogni giorno da Market Ingross.
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
                    src="/images/news/ricette/guida illustrativa/carciofi-ripieni.png"
                    alt="Guida illustrativa Carciofi ripieni alla vittoriese"
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
