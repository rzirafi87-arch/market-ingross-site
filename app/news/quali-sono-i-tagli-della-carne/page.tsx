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
                <span aria-hidden="true">â†</span>
                Torna alle News
              </Link>
            </div>

            <article className="mi-panel rounded-[32px] p-6 lg:p-10 lg:px-12">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-[#EF3D32]">
                Market Ingross Consiglia â€¢ Carne e macelleria
              </p>

              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Quali sono i tagli della carne?
              </h1>

              <p className="mt-3 text-lg font-semibold text-slate-700 md:text-xl">
                La carne spiegata semplice
              </p>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Quando vai al banco macelleria trovi tanti tagli diversi e puÃ² sembrare
                complicato capire quale scegliere. In realtÃ  la logica Ã¨ semplice: alcuni
                tagli danno il meglio con cotture veloci, altri hanno bisogno di tempo e
                diventano morbidi proprio cuocendo lentamente.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Pensa alla carne come a una squadra: ogni taglio ha il suo ruolo.
                Conoscere questa differenza ti aiuta a spendere meglio e a ottenere un
                risultato piÃ¹ buono nel piatto.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Tagli per cottura veloce
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  I tagli piÃ¹ teneri sono perfetti quando vuoi cucinare in pochi minuti,
                  per esempio in padella o alla griglia. Qui rientrano filetto,
                  controfiletto, lombata, costata, scamone, noce e fesa.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Sono i tagli giusti per bistecche e fettine, cioÃ¨ per cotture rapide in
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
                  I tagli piÃ¹ saporiti, come reale, muscolo, cappello del prete, punta di
                  petto, biancostato, spalla e collo, all&apos;inizio possono sembrare piÃ¹
                  tenaci. Con una cottura lenta, perÃ², diventano morbidi e ricchi di gusto.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Sono perfetti per spezzatino, bollito, brasato, ragÃ¹ e brodo, cioÃ¨ per
                  ricette in cui la carne cuoce con calma in acqua, sugo o altri liquidi.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: cottura lenta = taglio saporito.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  I tagli della spalla, del petto e delle parti piÃ¹ lavorate sono spesso
                  consigliati per stufati, brasati e preparazioni lunghe con liquidi.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Il macinato e le carni bianche
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Il macinato Ã¨ pratico e versatile: va bene per polpette, hamburger, ragÃ¹,
                  ripieni e polpettoni. Proprio perchÃ© Ã¨ tritato, perÃ², va conservato con
                  attenzione e cotto bene, senza lasciarlo troppo tempo fuori dal frigo.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Pollo e tacchino sono carni bianche: sono leggeri, cuociono abbastanza
                  velocemente, piacciono anche ai bambini e vanno bene per tante ricette.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Devono essere sempre cotti completamente anche all&apos;interno. La Food
                  Standards Agency ricorda che pollo, tacchino e maiale devono essere ben
                  cotti, perchÃ© i batteri possono trovarsi anche dentro la carne.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Guida rapida per ricetta
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Se vuoi scegliere senza confusione, usa questa tabella: parti dalla
                  ricetta e individua subito il taglio piÃ¹ adatto.
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
                  e non appoggiare la carne cruda su piatti che userai per alimenti giÃ 
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
                  Guida illustrativa
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa versione illustrata Ã¨ pensata per essere vista rapidamente anche
                  da smartphone o condivisa come immagine singola.
                </p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                  <Image
                    src="/images/news/consigli-per-la-spesa/guida illustrativa/la-carne-spiegata-semplice.png"
                    alt="Guida illustrativa La carne spiegata semplice"
                    width={1600}
                    height={2200}
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className="font-heading text-xl font-extrabold text-[#0B3B82] mb-4">Video guida (reel)</h3>
                  <video
                    controls
                    preload="metadata"
                    className="w-full rounded-xl"
                  >
                    <source src="/video/news/consigli-per-la-spesa/la-carne-spiegata-semplice.mp4" type="video/mp4" />
                    Il tuo browser non supporta il video.
                  </video>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/video/news/consigli-per-la-spesa/la-carne-spiegata-semplice.mp4"
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
