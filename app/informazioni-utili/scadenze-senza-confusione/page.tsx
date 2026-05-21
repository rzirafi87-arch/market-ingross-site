import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Come leggere le scadenze alimentari: da consumare entro e preferibilmente entro",
  description:
    "Guida semplice per capire la differenza tra â€œda consumare entroâ€ e â€œda consumarsi preferibilmente entroâ€, conservare bene gli alimenti e ridurre gli sprechi.",
  keywords: [
    "scadenze alimentari",
    "da consumare entro",
    "preferibilmente entro",
    "etichetta alimentare",
    "sicurezza alimentare",
    "Market Ingross Consiglia",
    "spreco alimentare",
  ],
  openGraph: {
    title: "Come leggere le scadenze alimentari: da consumare entro e preferibilmente entro",
    description:
      "Guida semplice per capire la differenza tra â€œda consumare entroâ€ e â€œda consumarsi preferibilmente entroâ€, conservare bene gli alimenti e ridurre gli sprechi.",
    url: "/informazioni-utili/scadenze-senza-confusione",
    type: "article",
  },
};

const erroriDaEvitare = [
  "confondere le due diciture",
  "mangiare un prodotto fresco dopo â€œda consumare entroâ€",
  "buttare subito un prodotto secco solo perchÃ© ha superato â€œpreferibilmente entroâ€",
  "non controllare come conservare il prodotto",
  "lasciare i freschi fuori dal frigo",
  "dimenticare prodotti aperti senza sapere quando sono stati aperti",
  "non mettere davanti le scadenze piÃ¹ vicine",
];

export default function ScadenzeSenzaConfusionePage() {
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
                <span aria-hidden="true">â†</span>
                Torna a Consigli per la spesa
              </Link>
            </div>
            <article className="mi-panel rounded-[32px] p-6 lg:p-10 lg:px-12">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-[#EF3D32]">
                Market Ingross Consiglia â€¢ Etichette e scadenze
              </p>
              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Come leggere le scadenze: â€œda consumare entroâ€ e â€œpreferibilmente entroâ€
              </h1>
              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Quando fai la spesa, sulle confezioni puoi trovare due frasi molto importanti: <b>â€œDa consumare entroâ€</b> e <b>â€œDa consumarsi preferibilmente entroâ€</b>. Sembrano simili, ma non significano la stessa cosa.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                La regola piÃ¹ facile Ã¨ questa: <b>â€œDa consumare entroâ€ riguarda la sicurezza. â€œPreferibilmente entroâ€ riguarda la qualitÃ .</b>
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Capire questa differenza aiuta a fare una spesa piÃ¹ sicura e anche a buttare meno cibo.
              </p>
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">1. Cosa significa â€œda consumare entroâ€</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La frase â€œda consumare entroâ€ Ã¨ la piÃ¹ delicata. Vuol dire che il prodotto deve essere consumato entro quella data. Dopo quella data, il prodotto non dovrebbe essere mangiato, anche se sembra ancora buono.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  PerchÃ©? PerchÃ© alcuni alimenti possono diventare rischiosi senza cambiare subito odore, colore o sapore.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>carne fresca</li>
                  <li>pesce fresco</li>
                  <li>pollo</li>
                  <li>latte fresco</li>
                  <li>prodotti freschi pronti</li>
                  <li>alcuni latticini freschi</li>
                  <li>insalate pronte</li>
                  <li>alimenti molto deperibili</li>
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: se leggi â€œda consumare entroâ€, rispetta quella data. Non usare solo naso e occhi, perchÃ© alcuni rischi non si vedono.
                </p>
              </section>
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">2. Cosa significa â€œda consumarsi preferibilmente entroâ€</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La frase â€œda consumarsi preferibilmente entroâ€ Ã¨ diversa. In questo caso si parla soprattutto di qualitÃ . Vuol dire che fino a quella data il prodotto mantiene meglio gusto, profumo, consistenza, croccantezza, colore, caratteristiche normali.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>pasta</li>
                  <li>riso</li>
                  <li>biscotti</li>
                  <li>crackers</li>
                  <li>farina</li>
                  <li>conserve</li>
                  <li>scatolame</li>
                  <li>passata</li>
                  <li>caffÃ¨</li>
                  <li>tÃ¨</li>
                  <li>prodotti secchi</li>
                  <li>prodotti a lunga conservazione</li>
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: se leggi â€œpreferibilmente entroâ€, controlla bene il prodotto prima di buttarlo.
                </p>
              </section>
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">3. La differenza spiegata semplice</h2>
                <div className="mt-3 flex flex-col gap-4 md:flex-row">
                  <div className="flex-1 rounded-xl bg-[#ffeaea] p-4">
                    <h3 className="font-bold text-[#EF3D32]">Cartello rosso</h3>
                    <p className="mt-2 text-base leading-8 text-slate-700">
                      <b>Da consumare entro</b><br />
                      Vuol dire: â€œDopo questa data, non mangiarmi.â€<br />
                      Ãˆ una questione di sicurezza.
                    </p>
                  </div>
                  <div className="flex-1 rounded-xl bg-[#fff7c7] p-4">
                    <h3 className="font-bold text-[#0B3B82]">Cartello giallo</h3>
                    <p className="mt-2 text-base leading-8 text-slate-700">
                      <b>Da consumarsi preferibilmente entro</b><br />
                      Vuol dire: â€œDopo questa data potrei essere meno buono.â€<br />
                      Ãˆ una questione di qualitÃ .
                    </p>
                  </div>
                </div>
              </section>
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">4. Come controllare un prodotto</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Quando un prodotto ha superato la data â€œpreferibilmente entroâ€, devi controllarlo bene. Guarda la confezione, lâ€™odore, il colore, la consistenza, il sapore (solo se tutto il resto sembra normale) e se Ã¨ stato conservato correttamente.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>la confezione</li>
                  <li>lâ€™odore</li>
                  <li>il colore</li>
                  <li>la consistenza</li>
                  <li>il sapore, solo se tutto il resto sembra normale</li>
                  <li>se Ã¨ stato conservato correttamente</li>
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Non consumare un prodotto se: la confezione Ã¨ gonfia, il barattolo Ã¨ ammaccato in modo importante, il tappo fa rumori strani allâ€™apertura, ci sono muffe, lâ€™odore Ã¨ cattivo, il colore Ã¨ cambiato molto, il prodotto perde liquidi strani.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: se qualcosa ti sembra strano, non rischiare.
                </p>
              </section>
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">5. La conservazione conta tantissimo</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La data vale solo se il prodotto Ã¨ stato conservato bene. Se una confezione dice â€œconservare in frigoriferoâ€, allora deve stare davvero in frigo. Se invece resta molte ore al caldo, la data non basta piÃ¹ a garantire che sia sicuro.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: la scadenza funziona solo se conservi bene il prodotto.
                </p>
              </section>
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">6. Dopo lâ€™apertura cambia tutto</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Molti prodotti hanno una data scritta sulla confezione chiusa. Ma dopo lâ€™apertura bisogna leggere anche frasi come: dopo lâ€™apertura conservare in frigo, consumare entro pochi giorni dallâ€™apertura, richiudere bene la confezione, conservare lontano da fonti di calore, non ricongelare dopo lo scongelamento.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Esempio semplice: una salsa chiusa puÃ² durare a lungo. Ma una volta aperta, spesso va messa in frigo e consumata entro meno tempo.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: confezione aperta = leggi di nuovo lâ€™etichetta.
                </p>
              </section>
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">7. Come evitare sprechi</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Per buttare meno cibo, usa la regola: prima scade, prima si usa. Quando sistemi la spesa: metti davanti i prodotti che scadono prima, metti dietro quelli con data piÃ¹ lunga, controlla il frigo una volta a settimana, crea una zona â€œda consumare primaâ€, usa gli avanzi in ricette semplici.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Esempio: hai due yogurt. Uno scade il 10, uno scade il 18. Metti davanti quello che scade il 10. CosÃ¬ lo vedi prima e lo consumi prima.
                </p>
              </section>
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">8. Prodotti freschi: piÃ¹ attenzione</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Con i prodotti freschi bisogna stare piÃ¹ attenti. Esempi: carne, pesce, pollo, latte fresco, latticini freschi, piatti pronti, alimenti giÃ  cotti da banco frigo. Questi prodotti devono stare in frigo e vanno consumati rispettando le indicazioni.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: fresco e delicato = controlla bene data e frigo.
                </p>
              </section>
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">9. Prodotti secchi: piÃ¹ attenzione alla qualitÃ </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  I prodotti secchi o a lunga conservazione spesso hanno il termine minimo di conservazione, cioÃ¨ â€œpreferibilmente entroâ€. Esempi: pasta, riso, biscotti, farina, cereali, scatolame, conserve, olio, caffÃ¨. In questi casi, se la confezione Ã¨ integra e il prodotto Ã¨ stato conservato bene, bisogna valutare qualitÃ , odore, aspetto e indicazioni in etichetta.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: se Ã¨ secco e ben conservato, controlla prima di buttare.
                </p>
              </section>
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">10. Surgelati: attenzione alla catena del freddo</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  I surgelati hanno bisogno di restare freddi. Quando fai la spesa: prendili alla fine, usa una borsa termica se possibile, mettili subito nel freezer quando arrivi a casa, non ricongelare un prodotto scongelato se lâ€™etichetta dice di non farlo.
                </p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: il surgelato deve restare freddo.
                </p>
              </section>
              <section className="mt-8 rounded-2xl bg-[#0B3B82] px-5 py-4 text-white">
                <p className="text-lg font-black">Schema facile</p>
                <div className="mt-2 flex flex-col gap-4 md:flex-row">
                  <div className="flex-1 rounded-xl bg-[#ffeaea] p-4">
                    <h3 className="font-bold text-[#EF3D32]">Da consumare entro</h3>
                    <ul className="mt-2 list-disc pl-6 text-base leading-8">
                      <li>riguarda la sicurezza</li>
                      <li>si trova spesso sui freschi</li>
                      <li>va rispettato</li>
                      <li>dopo la data Ã¨ meglio non mangiare il prodotto</li>
                    </ul>
                    <p className="mt-2 text-base leading-8 text-slate-700">Esempi: carne, pesce, pollo, latte fresco, prodotti molto delicati.</p>
                  </div>
                  <div className="flex-1 rounded-xl bg-[#fff7c7] p-4">
                    <h3 className="font-bold text-[#0B3B82]">Da consumarsi preferibilmente entro</h3>
                    <ul className="mt-2 list-disc pl-6 text-base leading-8">
                      <li>riguarda la qualitÃ </li>
                      <li>si trova spesso sui prodotti secchi o a lunga conservazione</li>
                      <li>dopo la data il prodotto puÃ² perdere gusto o consistenza</li>
                      <li>controlla confezione, odore, aspetto e conservazione</li>
                    </ul>
                    <p className="mt-2 text-base leading-8 text-slate-700">Esempi: pasta, riso, biscotti, caffÃ¨, conserve, scatolame.</p>
                  </div>
                </div>
              </section>
              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Errori da evitare</h2>
                <ul className="mt-3 list-disc pl-6 text-base leading-8 text-slate-700">
                  {erroriDaEvitare.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Regola facile finale</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Da consumare entro = sicurezza.<br />Preferibilmente entro = qualitÃ .<br />Prima scade, prima si usa.<br />Se hai dubbi, non rischiare.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Quattro frasi semplici per leggere le scadenze senza confusione.
                </p>
              </section>
              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Consiglio Market Ingross</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Quando fai la spesa da Market Ingross, controlla sempre le date sui prodotti freschi e sistema subito in frigo ciÃ² che deve stare al freddo. A casa, metti davanti i prodotti che scadono prima. CosÃ¬ fai una spesa piÃ¹ ordinata, piÃ¹ sicura e butti meno cibo.
                </p>
              </section>
              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Nota importante</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa guida Ã¨ informativa. In caso di dubbi su alimenti freschi, bambini, gravidanza, anziani, allergie o salute, chiedi sempre a un medico o a un professionista.
                </p>
              </section>
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Guida illustrativa</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Una versione visuale della guida, utile da consultare rapidamente anche da smartphone.</p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                  <Image
                    src="/images/news/consigli-per-la-spesa/guida illustrativa/scadenze-senza-confusione.png"
                    alt="Guida illustrativa Scadenze senza confusione"
                    width={1600}
                    height={2200}
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className="font-heading mb-4 text-xl font-extrabold text-[#0B3B82]">Video guida (reel)</h3>
                  <video controls preload="metadata" className="w-full rounded-xl">
                    <source src="/video/news/consigli-per-la-spesa/scadenze-senza-confusione.mp4" type="video/mp4" />
                    Il tuo browser non supporta il video.
                  </video>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/video/news/consigli-per-la-spesa/scadenze-senza-confusione.mp4"
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

