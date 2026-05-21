import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Cosa tenere sempre in dispensa: guida salva-cena",
  description:
    "Una guida semplice per organizzare la dispensa e tenere in casa prodotti utili per preparare cene veloci, risparmiare tempo e ridurre gli sprechi.",
  keywords: [
    "dispensa",
    "spesa intelligente",
    "salva-cena",
    "anti-spreco",
    "organizzazione spesa",
    "Market Ingross Consiglia",
  ],
  openGraph: {
    title: "Cosa tenere sempre in dispensa: guida salva-cena",
    description:
      "Guida pratica per organizzare la dispensa con prodotti base utili, preparare cene veloci e ridurre gli sprechi.",
    url: "/informazioni-utili/dispensa-salva-cena",
    type: "article",
  },
};

const erroriDaEvitare = [
  "comprare tante cose senza usarle",
  "non controllare le scadenze",
  "lasciare prodotti aperti senza chiuderli bene",
  "mettere tutto in ordine casuale",
  "dimenticare prodotti in fondo alla dispensa",
  "comprare doppioni inutili",
  "non fare una lista prima della spesa",
  "non usare prima quello che scade prima",
];

export default function DispensaSalvaCenaPage() {
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
                Market Ingross Consiglia â€¢ Dispensa e organizzazione spesa
              </p>

              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Cosa tenere sempre in dispensa
              </h1>

              <p className="mt-3 text-lg font-semibold text-slate-700 md:text-xl">
                La dispensa salva-cena
              </p>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                A volte arriva l'ora di cena e non sai cosa cucinare. Magari sei
                tornato tardi dal lavoro, non hai avuto tempo di fare una spesa
                completa, oppure in frigo c'e poco.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                In questi casi, una dispensa ben organizzata puo salvarti la cena.
                Non deve essere piena di tutto: deve contenere pochi prodotti utili,
                semplici e facili da usare.
              </p>
              <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                Tieni in casa prodotti base. Controlla le scadenze. Usa prima
                quello che scade prima.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  1. Pasta, riso e cereali
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  La prima cosa da tenere in dispensa sono i prodotti base per
                  preparare un piatto veloce.
                </p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>pasta;</li>
                  <li>riso;</li>
                  <li>cous cous;</li>
                  <li>farro;</li>
                  <li>orzo;</li>
                  <li>polenta;</li>
                  <li>pane confezionato;</li>
                  <li>crackers;</li>
                  <li>grissini.</li>
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">Esempi semplici:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>pasta con tonno e pomodoro;</li>
                  <li>riso con legumi;</li>
                  <li>cous cous con verdure;</li>
                  <li>polenta con sugo;</li>
                  <li>crackers con formaggio o tonno.</li>
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: pasta, riso e cereali sono la base di tante cene veloci.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  2. Pomodoro e sughi semplici
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Il pomodoro e uno dei prodotti piu utili da avere sempre.</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>passata di pomodoro;</li>
                  <li>polpa di pomodoro;</li>
                  <li>pomodori pelati;</li>
                  <li>concentrato di pomodoro;</li>
                  <li>sugo pronto;</li>
                  <li>pesto;</li>
                  <li>salsa semplice.</li>
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">Con questi prodotti puoi preparare velocemente pasta al pomodoro, sugo con tonno, sugo con legumi e bruschette.</p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: con pasta e pomodoro hai gia una cena semplice.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">3. Legumi</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">I legumi sono versatili e comodi.</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>ceci;</li>
                  <li>fagioli;</li>
                  <li>lenticchie;</li>
                  <li>piselli;</li>
                  <li>fave secche;</li>
                  <li>legumi in scatola;</li>
                  <li>legumi secchi;</li>
                  <li>legumi surgelati.</li>
                </ul>
                <p className="mt-3 text-base leading-8 text-slate-700">I legumi in scatola sono piu rapidi; i secchi sono perfetti per zuppe e piatti tradizionali.</p>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: i legumi sono una scorta furba, saziano e si usano in tanti modi.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">4. Tonno, sgombro e prodotti in scatola</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Alcuni prodotti in scatola aiutano quando hai poco tempo.</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>tonno e sgombro;</li>
                  <li>sardine;</li>
                  <li>mais;</li>
                  <li>olive;</li>
                  <li>funghi;</li>
                  <li>carciofini;</li>
                  <li>legumi in scatola.</li>
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: le conserve aiutano, ma controlla sempre data e confezione.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">5. Olio, sale, spezie e condimenti</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">I condimenti trasformano un piatto normale in un piatto piu buono.</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>olio extravergine d'oliva;</li>
                  <li>sale e pepe;</li>
                  <li>origano, basilico, rosmarino;</li>
                  <li>aglio e cipolla;</li>
                  <li>aceto;</li>
                  <li>spezie semplici.</li>
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: i condimenti sono piccoli, ma fanno grande differenza.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">6. Farina, lievito e preparazioni semplici</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Se ti piace cucinare, puoi tenere anche:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>farina;</li>
                  <li>lievito;</li>
                  <li>pangrattato;</li>
                  <li>zucchero e cacao;</li>
                  <li>latte a lunga conservazione.</li>
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: farina, lievito e pangrattato aiutano quando vuoi preparare qualcosa con quello che hai gia.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">7. Pochi prodotti freschi da abbinare</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">La dispensa funziona ancora meglio con pochi prodotti base in frigo:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>uova;</li>
                  <li>formaggio grattugiato;</li>
                  <li>mozzarella;</li>
                  <li>yogurt e latte;</li>
                  <li>verdure.</li>
                </ul>
                <p className="mt-3 rounded-xl bg-[#fef3c7] px-4 py-3 font-bold text-[#0B3B82]">
                  Regola facile: dispensa + pochi freschi = cena pronta piu facilmente.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Esempi di cena salva-cena</h2>
                <ol className="mt-3 list-decimal pl-6 text-base leading-8 text-slate-700">
                  <li>Pasta tonno e pomodoro</li>
                  <li>Riso con legumi</li>
                  <li>Cous cous con ceci e verdure</li>
                  <li>Frittata con pane o insalata</li>
                  <li>Pasta aglio, olio e pangrattato</li>
                </ol>
              </section>

              <section className="mt-8 rounded-2xl bg-[#0B3B82] px-5 py-4 text-white">
                <p className="text-lg font-black">Come organizzare la dispensa</p>
                <p className="mt-2 text-base">Zona 1 - Primi piatti: pasta, riso, cous cous, cereali.</p>
                <p className="text-base">Zona 2 - Sughi e conserve: passata, pelati, sughi, tonno, legumi.</p>
                <p className="text-base">Zona 3 - Colazione e merenda: biscotti, cereali, fette biscottate.</p>
                <p className="text-base">Zona 4 - Condimenti: olio, sale, spezie, aceto, pangrattato.</p>
                <p className="text-base">Zona 5 - Prodotti da usare prima: metti qui quello che scade prima.</p>
              </section>

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Come evitare sprechi</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Prima scade, prima si usa. Metti davanti i prodotti con scadenza
                  piu vicina, dietro i nuovi, controlla la dispensa almeno una
                  volta al mese e usa prima i pacchi gia aperti.
                </p>
              </section>

              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Lista base della dispensa salva-cena</h2>
                <ul className="mt-3 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>Primi: pasta, riso, cous cous, farro o orzo, polenta.</li>
                  <li>Sughi e conserve: passata, pelati, tonno, legumi, mais, olive.</li>
                  <li>Condimenti: olio, sale, pepe, origano, spezie, aceto, pangrattato.</li>
                  <li>Prodotti utili: farina, lievito, latte UHT, crackers, grissini, fette biscottate.</li>
                  <li>Da abbinare al frigo: uova, formaggio, verdure, yogurt.</li>
                </ul>
              </section>

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Errori da evitare</h2>
                <ul className="mt-3 list-disc pl-6 text-base leading-8 text-slate-700">
                  {erroriDaEvitare.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Regola facile finale</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Tieni pochi prodotti base, organizzali per gruppo, metti davanti
                  le scadenze vicine e usa quello che hai prima di comprare altro.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Cosi la dispensa diventa davvero una dispensa salva-cena.
                </p>
              </section>

              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Consiglio Market Ingross</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Quando fai la spesa da Market Ingross, crea una piccola scorta
                  intelligente con prodotti semplici che usi davvero: pasta, riso,
                  legumi, passata, tonno, olio, farina e prodotti a lunga conservazione.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Una dispensa ordinata ti aiuta a preparare cene semplici,
                  risparmiare tempo e ridurre gli sprechi.
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
                    src="/images/news/consigli-per-la-spesa/guida illustrativa/la-dispensa-salva-cena.png"
                    alt="Guida illustrativa La dispensa salva-cena"
                    width={1600}
                    height={2200}
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className="font-heading mb-4 text-xl font-extrabold text-[#0B3B82]">Video guida (reel)</h3>
                  <video controls preload="metadata" className="w-full rounded-xl">
                    <source src="/video/news/consigli-per-la-spesa/la-dispensa-salva-cena.mp4" type="video/mp4" />
                    Il tuo browser non supporta il video.
                  </video>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/video/news/consigli-per-la-spesa/la-dispensa-salva-cena.mp4"
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

