import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const ricette = [
  {
    ricetta: "Bistecca",
    carne: "filetto, controfiletto, costata, lombata, scamone",
    cottura: "Veloce",
  },
  {
    ricetta: "Spezzatino",
    carne: "muscolo, reale, spalla, cappello del prete",
    cottura: "Lenta",
  },
  {
    ricetta: "Ragu",
    carne: "macinato misto, macinato di bovino, tagli da cottura lunga",
    cottura: "Lenta",
  },
  {
    ricetta: "Bollito",
    carne: "biancostato, muscolo, punta di petto, reale",
    cottura: "Lunga in acqua",
  },
  {
    ricetta: "Fettine veloci",
    carne: "fesa, noce, scamone, girello",
    cottura: "Pochi minuti",
  },
];

export default function QualiTagliCarnePage() {
  return (
    <div className="min-h-screen mi-page-bg text-slate-900">
      <SiteHeader />

      <main>
        <section className="bg-[var(--mi-card-soft)] py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="mb-6">
              <Link
                href="/news"
                className="mi-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black text-[#003b7a] transition hover:-translate-x-1"
              >
                <span aria-hidden="true">←</span>
                Torna alle News
              </Link>
            </div>

            <article className="mi-panel rounded-[32px] p-6 lg:p-10 lg:px-12">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-[#EF3D32]">
                Market Ingross Consiglia • Carne e macelleria
              </p>

              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Quali sono i tagli della carne?
              </h1>

              <p className="mt-3 text-lg font-semibold text-slate-700 md:text-xl">
                La carne spiegata semplice
              </p>

              <div className="relative mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <Image
                  src="/images/news/tagli-carne-card.svg"
                  alt="La carne spiegata semplice"
                  width={1280}
                  height={720}
                  className="h-auto w-full"
                  priority
                />
              </div>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Quando vai al banco macelleria trovi tanti tagli diversi e puo sembrare
                complicato capire quale scegliere. In realta la logica e semplice: alcuni
                tagli danno il meglio con cotture veloci, altri hanno bisogno di tempo e
                diventano morbidi proprio cuocendo lentamente.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Pensa alla carne come a una squadra: ogni taglio ha il suo ruolo.
                Conoscere questa differenza ti aiuta a spendere meglio e a ottenere un
                risultato piu buono nel piatto.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Tagli per cottura veloce
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  I tagli piu teneri sono perfetti quando vuoi cucinare in pochi minuti,
                  per esempio in padella o alla griglia. Qui rientrano filetto,
                  controfiletto, lombata, costata, scamone, noce e fesa.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Sono i tagli giusti per bistecche e fettine, cioe per cotture rapide in
                  cui la carne resta succosa senza tempi lunghi.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: cottura veloce = taglio tenero.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Le guide internazionali sui tagli bovini collegano i tagli della zona
                  lombata e costata alle cotture brevi come griglia, padella e arrosto
                  rapido.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Tagli per cottura lenta
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  I tagli piu saporiti, come reale, muscolo, cappello del prete, punta di
                  petto, biancostato, spalla e collo, all&apos;inizio possono sembrare piu
                  tenaci. Con una cottura lenta, pero, diventano morbidi e ricchi di gusto.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Sono perfetti per spezzatino, bollito, brasato, ragu e brodo, cioe per
                  ricette in cui la carne cuoce con calma in acqua, sugo o altri liquidi.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: cottura lenta = taglio saporito.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  I tagli della spalla, del petto e delle parti piu lavorate sono spesso
                  consigliati per stufati, brasati e preparazioni lunghe con liquidi.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Il macinato e le carni bianche
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il macinato e pratico e versatile: va bene per polpette, hamburger, ragu,
                  ripieni e polpettoni. Proprio perche e tritato, pero, va conservato con
                  attenzione e cotto bene, senza lasciarlo troppo tempo fuori dal frigo.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Pollo e tacchino sono carni bianche: sono leggeri, cuociono abbastanza
                  velocemente, piacciono anche ai bambini e vanno bene per tante ricette.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Devono essere sempre cotti completamente anche all&apos;interno. La Food
                  Standards Agency ricorda che pollo, tacchino e maiale devono essere ben
                  cotti, perche i batteri possono trovarsi anche dentro la carne.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Guida rapida per ricetta
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se vuoi scegliere senza confusione, usa questa tabella: parti dalla
                  ricetta e individua subito il taglio piu adatto.
                </p>
                <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-left text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-4 py-3 font-bold">Ricetta</th>
                        <th className="px-4 py-3 font-bold">Carne consigliata</th>
                        <th className="px-4 py-3 font-bold">Cottura</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ricette.map((item) => (
                        <tr key={item.ricetta} className="border-t border-slate-200">
                          <td className="px-4 py-3 font-semibold text-[#0B3B82]">{item.ricetta}</td>
                          <td className="px-4 py-3 text-slate-700">{item.carne}</td>
                          <td className="px-4 py-3 text-slate-700">{item.cottura}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Attenzione alla sicurezza
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Quando compri carne fresca, mettila in frigo appena arrivi a casa e
                  tienila separata da frutta, verdura e cibi pronti. Usa contenitori chiusi
                  e non appoggiare la carne cruda su piatti che userai per alimenti gia
                  cotti. Dopo la manipolazione, lava sempre bene mani, coltelli e taglieri.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  NHS Inform consiglia di tenere la carne cruda separata dai cibi pronti,
                  conservare la carne cruda in basso nel frigo in contenitore chiuso e non
                  lavare la carne cruda.
                </p>
              </section>

              <section className="mt-8 rounded-2xl bg-[#0B3B82] px-5 py-4 text-white">
                <p className="text-lg font-black">Regola facile da ricordare</p>
                <p className="mt-2 text-base">Cottura veloce = taglio tenero</p>
                <p className="text-base">Cottura lenta = taglio saporito</p>
              </section>

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Consiglio Market Ingross
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Non sai quale carne scegliere? Chiedi al nostro banco macelleria. Ti
                  aiutiamo a trovare il taglio giusto per griglia, forno, padella,
                  spezzatino o ragu.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Guida PDF illustrativa
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Abbiamo preparato anche una versione monofoglio pronta da scaricare,
                  stampare e condividere in reparto.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="/docs/la-carne-spiegata-semplice.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-xl bg-[#0B3B82] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#082d63]"
                  >
                    Apri PDF
                  </a>
                  <a
                    href="/docs/la-carne-spiegata-semplice.pdf"
                    download
                    className="inline-flex rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
                  >
                    Scarica PDF
                  </a>
                </div>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <iframe
                    src="/docs/la-carne-spiegata-semplice.pdf#view=FitH"
                    title="PDF La carne spiegata semplice"
                    className="h-[720px] w-full"
                  />
                </div>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Reel breve Facebook/Instagram
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Script rapido da 20 secondi, gia pronto per registrazione verticale 9:16.
                </p>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-slate-600">
                    Scaletta video (20s)
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                    <li>0-3s: &quot;Sai scegliere la carne giusta per la tua ricetta?&quot;</li>
                    <li>3-8s: mostra tagli teneri: filetto, costata, lombata (testo: cottura veloce).</li>
                    <li>8-14s: mostra tagli saporiti: muscolo, reale, spalla (testo: cottura lenta).</li>
                    <li>14-17s: schermata regola: &quot;Veloce = tenero | Lenta = saporito&quot;.</li>
                    <li>17-20s: call to action: &quot;Passa al banco macelleria Market Ingross&quot;.</li>
                  </ul>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-slate-600">
                    Caption pronta
                  </p>
                  <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-700">
                    {`Sai quale carne scegliere per ogni ricetta?\n\nPer una cottura veloce scegli tagli teneri come filetto, costata e fesa.\nPer spezzatino, ragu e bollito scegli tagli piu saporiti come muscolo, reale e spalla.\n\nRegola facile:\nVeloce = tenero\nLenta = saporito\n\nPassa al banco macelleria Market Ingross: ti aiutiamo a scegliere il taglio giusto.\n\n#MarketIngross #Macelleria #Carne #SpesaIntelligente #ConsigliUtili #ReelItalia`}
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