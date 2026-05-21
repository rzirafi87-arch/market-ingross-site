import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Come capire se il pesce è fresco: guida semplice",
  description:
    "Una guida semplice per riconoscere il pesce fresco: odore, occhi, carne, branchie, pelle e conservazione dopo la spesa.",
  keywords: [
    "pesce fresco",
    "pescheria",
    "sicurezza alimentare",
    "conservazione pesce",
    "Market Ingross Consiglia",
  ],
  openGraph: {
    title: "Come capire se il pesce è fresco: guida semplice",
    description:
      "Una guida pratica per osservare il pesce al banco con pochi segnali facili da ricordare.",
    url: "/informazioni-utili/come-capire-se-il-pesce-e-fresco",
    type: "article",
  },
};

const segnaliPesceFresco = [
  "odore delicato di mare",
  "occhi chiari e lucidi",
  "carne soda e compatta",
  "branchie rosse o rosate",
  "pelle lucida e umida",
];

const erroriDaEvitare = [
  "comprare pesce con odore forte",
  "ignorare occhi spenti o opachi",
  "scegliere filetti con bordi secchi o scuri",
  "lasciare il pesce troppo tempo fuori dal frigo",
  "mettere pesce crudo vicino ad alimenti pronti",
  "usare lo stesso tagliere senza lavarlo",
  "mangiare molluschi con guscio rotto",
  "sottovalutare il pesce crudo in gravidanza, per bambini, anziani o persone fragili",
];

export default function ComeCapirePesceFrescoPage() {
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
                Come capire se il pesce è fresco
              </h1>

              <p className="mt-3 text-lg font-semibold text-slate-700 md:text-xl">
                Pesce fresco: come riconoscerlo
              </p>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Quando compri il pesce, la prima cosa da fare è guardarlo bene.
                Il pesce fresco di solito ha un aspetto vivo, pulito e brillante.
                Non deve avere un odore forte o sgradevole.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                La regola più facile è questa: guarda gli occhi, senti l'odore,
                controlla la carne e osserva le branchie. Non serve essere esperti:
                basta conoscere alcuni segnali semplici.
              </p>

              <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                Odore leggero. Occhi lucidi. Carne soda. Branchie rosse. Subito in frigo.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  1. L'odore: deve essere delicato
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il pesce fresco non deve puzzare. Deve avere un odore leggero, delicato, di mare.
                  Se senti un odore forte, acido, cattivo o simile all'ammoniaca, meglio fare attenzione.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: pesce fresco = odore leggero. Odore forte = attenzione.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  2. Gli occhi: chiari e lucidi
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Nel pesce intero, gli occhi sono molto importanti. Dovrebbero essere chiari,
                  lucidi, pieni e non troppo infossati o opachi.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: occhio lucido = buon segnale. Occhio spento = attenzione.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  3. La carne: soda e compatta
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La carne del pesce fresco deve essere soda. Se la tocchi leggermente, deve tornare in forma.
                  Nei filetti, la carne dovrebbe apparire compatta e non secca.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Attenzione se vedi carne molle, bordi secchi, colore spento, parti scure strane,
                  liquido eccessivo o superficie viscida.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: carne soda = buon segnale. Carne molle o secca = attenzione.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  4. Le branchie: rosse o rosate
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Nel pesce intero, anche le branchie aiutano. Dovrebbero essere rosse o rosate,
                  umide e senza cattivo odore.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: branchie rosse o rosate = buon segnale.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  5. La pelle: lucida e umida
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La pelle del pesce fresco dovrebbe essere brillante, lucida, umida e con colori vivi,
                  non secca e non opaca.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: pelle brillante = pesce più invitante.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  6. I filetti: cosa guardare
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se compri filetti, non puoi controllare occhi e branchie. Allora guarda odore, colore,
                  compattezza, bordi, liquidi nella confezione e data di conservazione.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Un filetto fresco dovrebbe avere un odore delicato e una carne compatta.
                  Se i bordi sono secchi, scuri o molto rovinati, meglio fare attenzione.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: nel filetto guarda odore, colore e bordi.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  7. Crostacei e molluschi
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Anche crostacei e molluschi devono essere scelti con attenzione.
                  Per gamberi e scampi: odore delicato, colore normale, carne compatta e niente odori forti.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Per cozze, vongole e altri molluschi vivi: guscio integro, guscio chiuso,
                  odore di mare e confezione o etichetta chiara.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: guscio rotto o aperto che non si chiude = meglio evitare.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  8. Pesce fresco, ma sempre ben conservato
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Anche un pesce buono deve essere conservato bene. Al banco dovrebbe essere in frigo,
                  su ghiaccio, coperto o protetto, separato da altri alimenti e mantenuto freddo.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: il pesce deve restare freddo.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  9. Dopo la spesa: subito in frigo
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Quando arrivi a casa, il pesce non deve restare a lungo nelle buste.
                  Mettilo subito in frigo, tienilo ben chiuso, separalo dagli altri alimenti e consumalo presto.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: pesce comprato = pesce subito al freddo.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  10. Attenzione al pesce crudo
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il pesce crudo richiede molta attenzione. Per bambini, anziani, donne in gravidanza
                  e persone con difese immunitarie basse, è meglio essere ancora più prudenti.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: se hai dubbi, scegli pesce ben cotto.
                </p>
              </section>

              <section className="mt-8 rounded-2xl bg-[#0B3B82] px-5 py-4 text-white">
                <p className="text-lg font-black">Schema facile: i 5 segnali del pesce fresco</p>
                <p className="mt-2 text-base">1. Odore delicato</p>
                <p className="text-base">2. Occhi lucidi</p>
                <p className="text-base">3. Carne soda</p>
                <p className="text-base">4. Branchie rosse o rosate</p>
                <p className="text-base">5. Pelle brillante</p>
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
                  Odore leggero. Occhi lucidi. Carne soda. Branchie rosse. Subito in frigo.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se ricordi questi cinque segnali, scegliere il pesce diventa molto più semplice.
                </p>
              </section>

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Consiglio Market Ingross</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Quando passi dal reparto pescheria Market Ingross, guarda il pesce con calma.
                  Controlla odore, occhi, colore e consistenza. E, se hai dubbi, chiedi al banco:
                  ti aiutiamo a scegliere il prodotto più adatto alla tua ricetta.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Appena arrivi a casa, metti subito il pesce in frigo e consumalo presto.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Nota importante</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa guida è informativa. In caso di dubbi su gravidanza, bambini, anziani,
                  allergie, pesce crudo o salute, chiedi sempre a un medico o a un professionista.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Guida illustrativa
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Una versione visuale della guida, utile da consultare rapidamente anche da smartphone.
                </p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                  <Image
                    src="/images/news/consigli-per-la-spesa/guida illustrativa/pesce-fresco.png"
                    alt="Guida illustrativa Pesce fresco: come riconoscerlo"
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
