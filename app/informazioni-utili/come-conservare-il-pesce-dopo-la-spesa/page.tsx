import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Come conservare il pesce dopo la spesa: guida semplice",
  description:
    "Una guida semplice per conservare il pesce dopo la spesa: subito in frigo, ben chiuso, separato dagli altri alimenti e da consumare presto.",
  keywords: [
    "pesce",
    "conservare pesce",
    "pesce in frigo",
    "sicurezza alimentare",
    "freezer",
    "Market Ingross Consiglia",
  ],
  openGraph: {
    title: "Come conservare il pesce dopo la spesa: guida semplice",
    description:
      "Guida pratica per conservare meglio il pesce appena acquistato, evitare errori comuni e cucinare con piu tranquillita.",
    url: "/informazioni-utili/come-conservare-il-pesce-dopo-la-spesa",
    type: "article",
  },
};

const daMettereSubitoAlFreddo = [
  "pesce fresco",
  "filetti",
  "crostacei",
  "molluschi",
  "prodotti da banco pescheria",
  "confezioni refrigerate",
];

const nonMettereVicino = [
  "insalata",
  "frutta",
  "formaggi",
  "yogurt",
  "salumi",
  "piatti gia cotti",
  "avanzi",
  "alimenti che mangerai senza cuocere",
];

const segnaliDaNonIgnorare = [
  "odore forte",
  "odore acido",
  "odore di ammoniaca",
  "colore strano",
  "carne molle",
  "superficie viscida",
  "confezione gonfia",
  "liquidi strani",
  "data superata",
];

const categoriePiuDelicate = [
  "donne in gravidanza",
  "bambini",
  "anziani",
  "persone con difese immunitarie basse",
  "persone con problemi di salute",
];

const erroriDaEvitare = [
  "lasciare il pesce nelle buste troppo a lungo",
  "metterlo nello sportello del frigo",
  "lasciarlo aperto",
  "metterlo vicino a cibi gia pronti",
  "farlo gocciolare su altri alimenti",
  "dimenticarlo in frigo",
  "scongelarlo per troppe ore fuori dal frigo",
  "ricongelarlo senza leggere l'etichetta",
  "usare lo stesso tagliere per pesce crudo e alimenti pronti",
  "ignorare odore forte o confezione gonfia",
];

export default function ComeConservarePesceDopoSpesaPage() {
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
                Market Ingross Consiglia • Pesce / Sicurezza alimentare
              </p>

              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Come conservare il pesce dopo la spesa
              </h1>

              <p className="mt-3 text-lg font-semibold text-slate-700 md:text-xl">
                Pesce in frigo: come conservarlo
              </p>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Il pesce e un alimento buono, leggero e molto utile in cucina. Pero e anche un alimento delicato.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Quando lo compri, non basta portarlo a casa. Bisogna sistemarlo subito nel modo giusto.
              </p>
              <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                Subito al freddo. Ben chiuso. Separato. Da consumare presto.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  1. Appena arrivi a casa, mettilo subito in frigo
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il pesce non deve restare troppo tempo nelle buste della spesa.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">Appena arrivi a casa, sistema subito:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {daMettereSubitoAlFreddo.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  La FDA consiglia di mettere il pesce in frigo, su ghiaccio o in freezer subito dopo l'acquisto.
                  Se lo usi entro 2 giorni, va conservato in un frigorifero pulito a 4 C o meno.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: pesce comprato = pesce subito al freddo.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">2. Il frigo deve essere freddo</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il frigorifero deve mantenere bene la temperatura. Per gli alimenti freschi e delicati,
                  il freddo e molto importante.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">Cosa fare:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>tieni il frigo a circa 4 C o meno;</li>
                  <li>non lasciare lo sportello aperto troppo a lungo;</li>
                  <li>non mettere il pesce nello sportello;</li>
                  <li>usa un termometro da frigo, se puoi.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  FoodSafety.gov indica 40 F (circa 4 C) come temperatura massima per la conservazione
                  in frigorifero; il freezer deve stare a circa -18 C o meno.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: il pesce deve stare dove fa davvero freddo.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">3. Tienilo ben chiuso</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Il pesce non deve restare aperto nel frigo.</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>nella confezione originale, se e integra;</li>
                  <li>in un contenitore chiuso;</li>
                  <li>su un piatto coperto;</li>
                  <li>in un sacchetto alimentare ben chiuso.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Se perde liquidi, mettilo dentro un contenitore. Cosi eviti cattivi odori e tieni il frigo piu pulito.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: il pesce non deve girare libero nel frigo.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">4. Separalo dagli altri alimenti</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il pesce crudo deve stare separato dagli alimenti gia pronti.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">Non metterlo vicino a:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {nonMettereVicino.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  La FDA ricorda che, quando si prepara pesce fresco o scongelato, e importante evitare
                  che i batteri del pesce crudo passino ad alimenti pronti da mangiare.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Consiglia anche di lavare bene mani, taglieri, piatti, utensili e piani di lavoro
                  dopo il contatto con alimenti crudi.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: pesce crudo da una parte, cibo pronto dall'altra.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">5. Dove metterlo nel frigo</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Il posto migliore e la parte bassa del frigo.</p>
                <p className="mt-3 text-base leading-8 text-slate-700">Meglio ancora se:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>e dentro un contenitore;</li>
                  <li>e su un vassoio;</li>
                  <li>e lontano da cibi pronti;</li>
                  <li>non puo perdere liquidi su altri alimenti.</li>
                </ul>
                <section className="mt-6 rounded-2xl bg-[#0B3B82] px-5 py-4 text-white">
                  <p className="text-lg font-black">Schema semplice</p>
                  <p className="mt-2 text-base">In alto: cibi cotti e pronti.</p>
                  <p className="text-base">Al centro: latticini e freschi confezionati.</p>
                  <p className="text-base">In basso: carne, pollo e pesce crudi.</p>
                  <p className="text-base">Cassetti: frutta e verdura.</p>
                </section>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: il pesce crudo va in basso e ben chiuso.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">6. Consumalo presto</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il pesce fresco non e un prodotto da dimenticare in frigo. In generale, e meglio cucinarlo presto.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se pensi di non usarlo entro poco tempo, valuta di congelarlo.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  La FDA indica che, se il pesce deve essere usato entro 2 giorni dall'acquisto,
                  puo stare in frigorifero a 4 C o meno; altrimenti va avvolto bene e conservato in freezer.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: pesce fresco = meglio consumarlo presto.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  7. Se non lo cucini presto, congelalo
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il freezer e utile quando non riesci a cucinare subito il pesce.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">Meglio congelarlo:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>quando e ancora fresco;</li>
                  <li>in porzioni;</li>
                  <li>ben chiuso;</li>
                  <li>con un sacchetto adatto al freezer;</li>
                  <li>scrivendo la data;</li>
                  <li>seguendo eventuali indicazioni in etichetta.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Non aspettare che il pesce sia gia al limite.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: congela prima, non all'ultimo momento.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">8. Come scongelare il pesce</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Lo scongelamento e importante.</p>
                <p className="mt-3 text-base leading-8 text-slate-700">Meglio scongelare il pesce:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>in frigorifero;</li>
                  <li>dentro un contenitore;</li>
                  <li>separato dagli altri alimenti;</li>
                  <li>seguendo l'etichetta;</li>
                  <li>cucinandolo bene dopo lo scongelamento.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  La FDA consiglia di scongelare il pesce gradualmente in frigorifero durante la notte.
                  Se serve scongelarlo piu velocemente, si puo sigillare in un sacchetto e immergerlo
                  in acqua fredda, oppure usare il microonde solo se poi viene cucinato subito.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: scongela piano e in sicurezza.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  9. Non lasciare il pesce fuori dal frigo
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il pesce non deve restare a temperatura ambiente per troppo tempo.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">Evita di lasciarlo:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>sul tavolo;</li>
                  <li>nel lavello;</li>
                  <li>in auto;</li>
                  <li>nelle buste della spesa;</li>
                  <li>vicino a fonti di calore.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  La FDA consiglia di non lasciare pesce o altri alimenti deperibili fuori dal frigo
                  per piu di 2 ore, o piu di 1 ora quando la temperatura e molto alta.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: fuori dal frigo il pesce deve stare il meno possibile.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">10. Attenzione a odore e aspetto</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Prima di cucinarlo, controlla sempre.</p>
                <p className="mt-3 text-base leading-8 text-slate-700">Fai attenzione se noti:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {segnaliDaNonIgnorare.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  La FDA segnala che odori acidi, rancidi, di pesce forte o di ammoniaca
                  sono segnali da non ignorare, sia sul pesce crudo sia su quello cotto.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: se qualcosa ti sembra strano, non rischiare.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  11. Cotto e crudo non devono stare insieme
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se cucini il pesce e poi lo conservi, non rimetterlo vicino al pesce crudo.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">Usa:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>contenitore pulito;</li>
                  <li>coperchio;</li>
                  <li>posate pulite;</li>
                  <li>ripiano separato;</li>
                  <li>mani lavate.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Non usare lo stesso piatto del pesce crudo per servire il pesce cotto, se non e stato lavato bene.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: crudo e cotto non si mischiano.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">12. Pesce crudo: piu attenzione</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Il pesce crudo richiede molta prudenza.</p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Per alcune persone e meglio evitarlo o chiedere consiglio al medico, soprattutto:
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {categoriePiuDelicate.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  La FDA indica che donne in gravidanza, bambini, anziani e persone con sistema
                  immunitario indebolito dovrebbero evitare pesce o molluschi crudi o poco cotti.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: se hai dubbi, scegli pesce ben cotto.
                </p>
              </section>

              <section className="mt-8 rounded-2xl bg-[#0B3B82] px-5 py-4 text-white">
                <p className="text-lg font-black">Schema facile: cosa fare dopo la spesa</p>
                <p className="mt-2 text-base">1. Mettilo subito al freddo: frigo o freezer appena arrivi a casa.</p>
                <p className="text-base">2. Tienilo ben chiuso: confezione integra, contenitore o sacchetto alimentare.</p>
                <p className="text-base">3. Separalo dagli altri alimenti: soprattutto da cibi gia pronti, frutta e verdura.</p>
                <p className="text-base">4. Consumalo presto: il pesce fresco e delicato.</p>
                <p className="text-base">5. Se non lo usi, congelalo: meglio quando e ancora fresco.</p>
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
                  Subito al freddo. Ben chiuso. Separato. Da consumare presto. Se hai dubbi, non rischiare.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa e la regola piu semplice per conservare meglio il pesce dopo la spesa.
                </p>
              </section>

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Consiglio Market Ingross</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Quando acquisti il pesce da Market Ingross, sistemalo subito appena arrivi a casa.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Tienilo in frigo nella parte bassa, ben chiuso e separato dagli altri alimenti.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se non lo cucini presto, dividilo in porzioni e congelalo quando e ancora fresco.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Cosi eviti sprechi, tieni il frigo piu ordinato e cucini con piu tranquillita.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Nota importante</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa guida e informativa. In caso di dubbi su gravidanza, bambini, anziani,
                  allergie, pesce crudo o salute, chiedi sempre a un medico o a un professionista sanitario.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Guida illustrativa</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Una versione visuale della guida, utile da consultare rapidamente anche da smartphone.
                </p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                  <Image
                    src="/images/news/consigli-per-la-spesa/guida illustrativa/pesce-frigo.png"
                    alt="Guida illustrativa Pesce in frigo: come conservarlo"
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