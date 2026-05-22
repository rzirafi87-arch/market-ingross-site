import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Pesce intero, filetti, surgelato e in scatola: cosa scegliere",
  description:
    "Guida semplice per scegliere tra pesce intero, filetti, surgelato e pesce in scatola in base alla ricetta, al tempo e alla praticità.",
  keywords: [
    "pesce intero",
    "filetti",
    "pesce surgelato",
    "pesce in scatola",
    "pescheria",
    "Market Ingross Consiglia",
  ],
  openGraph: {
    title: "Pesce intero, filetti, surgelato e in scatola: cosa scegliere",
    description:
      "Una guida semplice per capire quale tipo di pesce comprare in base al tempo, alla ricetta e alla praticità.",
    url: "/informazioni-utili/pesce-intero-filetti-surgelato-scatola",
    type: "article",
  },
};

const pesceInteroVantaggi = [
  "puoi osservare meglio la freschezza",
  "è adatto a molte ricette tradizionali",
  "può avere più sapore in cottura",
];

const filettiVantaggi = [
  "sono più comodi",
  "richiedono meno tempo",
  "sono facili da porzionare",
  "spesso sono più semplici da cucinare",
];

const surgelatoVantaggi = [
  "dura più a lungo",
  "è già porzionato",
  "lo puoi tenere di scorta",
  "aiuta quando non hai tempo di fare la spesa",
];

const scatolaVantaggi = [
  "sta in dispensa",
  "dura a lungo",
  "è pronto all'uso",
  "aiuta quando hai poco tempo",
];

const erroriDaEvitare = [
  "scegliere solo in base al prezzo",
  "non controllare l'odore del pesce fresco",
  "non guardare i bordi dei filetti",
  "lasciare il surgelato troppo tempo fuori dal freezer",
  "ricongelare senza leggere l'etichetta",
  "lasciare una scatoletta aperta nella confezione originale",
  "esagerare sempre con lo stesso tipo di pesce",
  "non chiedere consiglio al banco quando hai dubbi",
];

export default function PesceInteroFilettiSurgelatoScatolaPage() {
  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <section className="bg-[var(--mi-card-soft)] py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="mb-6">
              <Link
                href="/news/consigli-per-la-spesa"
                className="mi-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black text-[#003b7a] transition hover:-translate-x-1"
              >
                <span aria-hidden="true">←</span>
                Torna a Consigli per la spesa
              </Link>
            </div>

            <article className="mi-panel rounded-[32px] p-6 lg:p-10 lg:px-12">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-[#EF3D32]">
                Market Ingross Consiglia • Pesce
              </p>

              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Pesce intero, filetti, surgelato e in scatola: cosa scegliere
              </h1>

              <p className="mt-3 text-lg font-semibold text-slate-700 md:text-xl">
                Pesce: quale scegliere?
              </p>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Quando compri il pesce, non trovi una sola scelta. Al banco o sugli scaffali puoi trovare
                pesce intero, filetti, pesce surgelato e pesce in scatola. Tutti possono essere utili:
                la cosa importante è capire quando conviene scegliere cosa.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                La regola più facile è questa: pesce intero = più controllo, filetti = più praticità,
                surgelato = più comodità, in scatola = dispensa salva-cena.
              </p>

              <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                Intero per controllare. Filetti per cucinare veloce. Surgelato per avere scorta.
                Scatola per salvare la cena.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Card articolo</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Una card pratica per riconoscere subito la scelta migliore in base al tempo e alla ricetta.
                </p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                  <Image
                    src="/images/news/consigli-per-la-spesa/card/scelta-pesce-card.png"
                    alt="Pesce: quale scegliere?"
                    width={1600}
                    height={900}
                    className="h-auto w-full rounded-xl object-contain"
                  />
                </div>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Guida illustrativa</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Una guida visuale per confrontare in modo semplice pesce intero, filetti, surgelato e in scatola.
                </p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                  <Image
                    src="/images/news/consigli-per-la-spesa/guida illustrativa/scelta-pesce.png"
                    alt="Guida illustrativa Pesce: quale scegliere?"
                    width={1600}
                    height={2200}
                    className="h-auto w-full rounded-xl"
                  />
                </div>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  1. Pesce intero: quando sceglierlo
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il pesce intero è utile quando vuoi vedere bene la freschezza. Puoi controllare occhi,
                  pelle, branchie, odore, carne e aspetto generale.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  È una buona scelta per pesce al forno, alla griglia, al cartoccio, brodo di pesce o zuppa.
                </p>
                <h3 className="mt-5 text-lg font-bold text-[#0B3B82]">Vantaggi</h3>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {pesceInteroVantaggi.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <h3 className="mt-5 text-lg font-bold text-[#0B3B82]">Attenzione</h3>
                <p className="mt-2 text-base leading-8 text-slate-700">
                  Richiede più lavoro: va pulito, va spinato, va porzionato e richiede più attenzione nel servirlo.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: scegli il pesce intero se vuoi controllare bene la freschezza e hai tempo per cucinarlo.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  2. Filetti: quando sceglierli
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  I filetti sono più pratici. Sono utili quando vuoi cucinare velocemente e senza troppe preparazioni.
                  Sono adatti per padella, forno, ricette veloci, piatti leggeri e porzioni già pronte.
                </p>
                <h3 className="mt-5 text-lg font-bold text-[#0B3B82]">Vantaggi</h3>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {filettiVantaggi.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <h3 className="mt-5 text-lg font-bold text-[#0B3B82]">Attenzione</h3>
                <p className="mt-2 text-base leading-8 text-slate-700">
                  Anche nei filetti devi controllare odore, colore, consistenza, bordi, eventuali spine,
                  data e conservazione.
                </p>
                <p className="mt-2 text-base leading-8 text-slate-700">
                  La FDA consiglia di scegliere filetti che non presentino scolorimento, scurimento o secchezza ai bordi
                  e con odore fresco e delicato.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: scegli i filetti quando vuoi praticità e cottura veloce.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  3. Pesce surgelato: quando sceglierlo
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il pesce surgelato è molto utile quando vuoi avere una scorta in freezer. Può essere comodo per
                  cene veloci, ricette programmate, famiglie, porzioni già pronte ed evitare sprechi.
                </p>
                <h3 className="mt-5 text-lg font-bold text-[#0B3B82]">Vantaggi</h3>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {surgelatoVantaggi.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <h3 className="mt-5 text-lg font-bold text-[#0B3B82]">Attenzione</h3>
                <p className="mt-2 text-base leading-8 text-slate-700">
                  Controlla sempre confezione integra, data, indicazioni di conservazione, temperatura del freezer,
                  modalità di scongelamento e istruzioni di cottura.
                </p>
                <p className="mt-2 text-base leading-8 text-slate-700">
                  La FDA raccomanda di comprare pesce solo se refrigerato o esposto su ghiaccio; dopo l'acquisto va messo
                  subito in frigo o freezer, e il pesce da usare entro due giorni va tenuto in frigo a circa 4°C o meno.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: scegli il surgelato quando vuoi comodità e una scorta pronta.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  4. Pesce in scatola: quando sceglierlo
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il pesce in scatola è molto pratico. Esempi: tonno, sgombro, sardine, salmone e acciughe.
                  È utile per pasta veloce, insalate, panini, bruschette, cous cous, riso freddo e cene improvvisate.
                </p>
                <h3 className="mt-5 text-lg font-bold text-[#0B3B82]">Vantaggi</h3>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {scatolaVantaggi.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <h3 className="mt-5 text-lg font-bold text-[#0B3B82]">Attenzione</h3>
                <p className="mt-2 text-base leading-8 text-slate-700">
                  Controlla data, confezione integra, sale, olio o liquido di conservazione e modalità di conservazione dopo l'apertura.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: scegli il pesce in scatola quando ti serve una soluzione veloce da dispensa.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  5. Attenzione a tonno e pesci grandi
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il tonno è comodo, ma non va consumato senza attenzione. Per donne in gravidanza, bambini e persone fragili
                  è meglio seguire le indicazioni del medico o di fonti sanitarie affidabili.
                </p>
                <p className="mt-2 text-base leading-8 text-slate-700">
                  EFSA ricorda che i pesci grandi predatori possono accumulare più mercurio nel tempo; per questo,
                  in alcune categorie di persone è consigliabile fare più attenzione alla scelta e alla quantità di pesce consumato.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: tonno e pesci grandi, buoni ma da consumare con equilibrio.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  6. Come scegliere in base alla ricetta
                </h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <h3 className="font-bold text-[#0B3B82]">Vuoi fare il pesce al forno?</h3>
                    <p className="mt-2 text-base leading-7 text-slate-700">Scegli pesce intero, filetti o tranci.</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <h3 className="font-bold text-[#0B3B82]">Vuoi una cena veloce?</h3>
                    <p className="mt-2 text-base leading-7 text-slate-700">Scegli filetti, pesce surgelato o tonno e sgombro in scatola.</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <h3 className="font-bold text-[#0B3B82]">Vuoi una ricetta tradizionale?</h3>
                    <p className="mt-2 text-base leading-7 text-slate-700">Scegli pesce intero, pesce da zuppa o pesce fresco al banco.</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <h3 className="font-bold text-[#0B3B82]">Vuoi una scorta?</h3>
                    <p className="mt-2 text-base leading-7 text-slate-700">Scegli pesce surgelato, tonno, sgombro, sardine o conserve.</p>
                  </div>
                </div>
              </section>

              <section className="mt-10 rounded-2xl bg-[#0B3B82] px-5 py-4 text-white">
                <p className="text-lg font-black">Schema facile: cosa scegliere</p>
                <p className="mt-2 text-base"><b>Pesce intero</b> - quando vuoi più controllo e ricette tradizionali.</p>
                <p className="text-base"><b>Filetti</b> - quando vuoi cucinare più velocemente.</p>
                <p className="text-base"><b>Surgelato</b> - quando vuoi una scorta pronta.</p>
                <p className="text-base"><b>In scatola</b> - quando vuoi una soluzione da dispensa.</p>
              </section>

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Errori da evitare</h2>
                <ul className="mt-3 list-disc pl-6 text-base leading-8 text-slate-700">
                  {erroriDaEvitare.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Regola facile finale</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Intero per controllare. Filetti per cucinare veloce. Surgelato per avere scorta.
                  Scatola per salvare la cena.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Con questa regola scegliere il pesce diventa molto più semplice.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Consiglio Market Ingross</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Da Market Ingross puoi scegliere il pesce in base a quello che devi preparare.
                  Se hai tempo e vuoi una ricetta tradizionale, scegli il pesce intero.
                  Se vuoi praticità, scegli i filetti.
                  Se vuoi una scorta, scegli il surgelato.
                  Se vuoi una soluzione veloce, tieni in dispensa tonno, sgombro o sardine.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  E se hai dubbi, chiedi al banco: ti aiutiamo a scegliere il prodotto più adatto alla tua ricetta.
                </p>
              </section>

              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Nota importante</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa guida è informativa. In caso di dubbi su gravidanza, bambini, anziani, allergie,
                  pesce crudo o salute, chiedi sempre a un medico o a un professionista.
                </p>
              </section>

            </article>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
