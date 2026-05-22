import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Frutta e verdura di stagione: guida mese per mese",
  description:
    "Guida semplice per scegliere frutta e verdura di stagione mese per mese, con idee pratiche per la spesa e la cucina.",
  keywords: [
    "frutta di stagione",
    "verdura di stagione",
    "ortofrutta",
    "spesa intelligente",
    "stagionalita",
    "Market Ingross Consiglia",
  ],
  openGraph: {
    title: "Frutta e verdura di stagione: guida mese per mese",
    description:
      "Guida pratica per scegliere frutta e verdura in base al periodo dell'anno, con idee semplici per la spesa e la tavola.",
    url: "/informazioni-utili/frutta-verdura-di-stagione",
    type: "article",
  },
};

const percheScegliereStagione = [
  "variare la spesa",
  "seguire i ritmi dell'anno",
  "preparare ricette piu adatte al periodo",
  "portare piu colori a tavola",
  "evitare di comprare sempre le stesse cose",
  "organizzare meglio il carrello",
];

const gennaioFrutta = ["arance", "mandarini", "clementine", "limoni", "kiwi", "mele", "pere"];
const gennaioVerdura = ["broccoli", "cavolfiori", "finocchi", "carciofi", "spinaci", "bietole", "radicchio", "cavolo", "zucca"];
const gennaioIdee = ["insalata di arance e finocchi", "pasta con broccoli", "minestra di verdure", "carciofi in padella"];

const febbraioFrutta = ["arance", "mandarini", "clementine", "limoni", "kiwi", "mele", "pere"];
const febbraioVerdura = ["broccoli", "cavolfiori", "finocchi", "carciofi", "spinaci", "bietole", "cicoria", "radicchio", "cavolo"];
const febbraioIdee = ["vellutata di cavolfiore", "finocchi gratinati", "pasta con cavolfiore", "spremuta di arance"];

const marzoFrutta = ["arance", "limoni", "kiwi", "mele", "pere", "fragole, verso fine mese se disponibili"];
const marzoVerdura = ["carciofi", "asparagi", "fave", "piselli", "spinaci", "bietole", "finocchi", "lattuga", "cipollotti"];
const marzoIdee = ["frittata con asparagi", "pasta con piselli", "fave fresche con pecorino", "insalata con lattuga e carote"];

const aprileFrutta = ["fragole", "limoni", "mele", "pere", "kiwi"];
const aprileVerdura = ["asparagi", "fave", "piselli", "carciofi", "lattuga", "rucola", "cipollotti", "spinaci", "bietole"];
const aprileIdee = ["pasta primavera", "insalata con fragole e rucola", "carciofi ripieni", "piselli in umido"];

const maggioFrutta = ["fragole", "ciliegie", "nespole", "albicocche", "limoni"];
const maggioVerdura = ["zucchine", "piselli", "fave", "asparagi", "lattuga", "rucola", "cetrioli", "carote", "cipollotti"];
const maggioIdee = ["zucchine in padella", "insalata fresca", "pasta con zucchine", "macedonia con fragole e ciliegie"];

const giugnoFrutta = ["ciliegie", "albicocche", "pesche", "nettarine", "melone", "anguria", "fragole, se ancora disponibili"];
const giugnoVerdura = ["pomodori", "zucchine", "melanzane", "peperoni", "cetrioli", "lattuga", "rucola", "fagiolini", "basilico"];
const giugnoIdee = ["insalata di pomodoro", "pasta alla Norma", "caponata", "zucchine grigliate"];

const luglioFrutta = ["anguria", "melone", "pesche", "albicocche", "prugne", "fichi, verso fine mese", "uva precoce, se disponibile"];
const luglioVerdura = ["pomodori", "melanzane", "zucchine", "peperoni", "cetrioli", "lattuga", "fagiolini", "basilico", "cipolle"];
const luglioIdee = ["caponata", "insalata di pomodoro", "pasta fredda", "verdure grigliate"];

const agostoFrutta = ["anguria", "melone", "pesche", "prugne", "fichi", "uva", "pere estive"];
const agostoVerdura = ["pomodori", "melanzane", "zucchine", "peperoni", "cetrioli", "fagiolini", "basilico", "lattuga"];
const agostoIdee = ["pasta con tenerumi", "gelo di anguria", "insalata di pomodoro e cipolla", "melanzane al forno"];

const settembreFrutta = ["uva", "fichi", "mele", "pere", "prugne", "melone, se ancora disponibile"];
const settembreVerdura = ["pomodori", "melanzane", "peperoni", "zucchine", "fagiolini", "bietole", "zucca, verso fine mese"];
const settembreIdee = ["pesto alla trapanese", "schiacciata con fichi", "verdure al forno", "insalata con uva e formaggio"];

const ottobreFrutta = ["mele", "pere", "uva", "fichi d'India", "castagne", "melagrane", "cachi"];
const ottobreVerdura = ["zucca", "funghi", "broccoli", "cavolfiori", "bietole", "spinaci", "finocchi", "radicchio"];
const ottobreIdee = ["pasta con zucca", "zuppa di verdure", "castagne", "finocchi al forno"];

const novembreFrutta = ["mele", "pere", "arance", "mandarini", "clementine", "kiwi", "cachi", "melagrane"];
const novembreVerdura = ["broccoli", "cavolfiori", "finocchi", "spinaci", "bietole", "cavolo", "zucca", "radicchio", "carciofi, se disponibili"];
const novembreIdee = ["minestra di verdure", "broccoli in padella", "finocchi gratinati", "insalata con melagrana"];

const dicembreFrutta = ["arance", "mandarini", "clementine", "limoni", "kiwi", "mele", "pere", "melagrane"];
const dicembreVerdura = ["broccoli", "cavolfiori", "finocchi", "spinaci", "bietole", "cavolo", "radicchio", "carciofi", "zucca"];
const dicembreIdee = ["insalata di arance", "pasta con broccoli", "verdure al forno", "zuppa calda"];

const invernoTipici = ["arance", "mandarini", "finocchi", "broccoli", "cavolfiori", "spinaci", "carciofi"];
const primaveraTipici = ["fragole", "asparagi", "piselli", "fave", "carciofi", "lattuga"];
const estateTipici = ["anguria", "melone", "pesche", "pomodori", "melanzane", "zucchine", "peperoni"];
const autunnoTipici = ["uva", "fichi", "mele", "pere", "zucca", "castagne", "funghi"];

const erroriDaEvitare = [
  "comprare sempre le stesse cose",
  "comprare troppa frutta matura insieme",
  "dimenticare prodotti delicati in frigo",
  "non controllare colore e consistenza",
  "comprare senza pensare a quando userai il prodotto",
  "buttare prodotti ancora utilizzabili",
  "ignorare la stagione",
];

function BloccoMese({
  titolo,
  descrizione,
  frutta,
  verdura,
  idee,
}: {
  titolo: string;
  descrizione: string;
  frutta: string[];
  verdura: string[];
  idee: string[];
}) {
  return (
    <section className="mt-10 border-t border-slate-200 pt-8">
      <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">{titolo}</h2>
      <p className="mt-3 text-base leading-8 text-slate-700">{descrizione}</p>

      <h3 className="mt-4 text-lg font-bold text-[#0B3B82]">Frutta</h3>
      <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
        {frutta.map((item) => (
          <li key={`${titolo}-f-${item}`}>{item};</li>
        ))}
      </ul>

      <h3 className="mt-4 text-lg font-bold text-[#0B3B82]">Verdura</h3>
      <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
        {verdura.map((item) => (
          <li key={`${titolo}-v-${item}`}>{item};</li>
        ))}
      </ul>

      <h3 className="mt-4 text-lg font-bold text-[#0B3B82]">Idee semplici</h3>
      <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
        {idee.map((item) => (
          <li key={`${titolo}-i-${item}`}>{item};</li>
        ))}
      </ul>
    </section>
  );
}

export default function FruttaVerduraDiStagionePage() {
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
                Market Ingross Consiglia - Frutta e verdura / Stagionalita
              </p>

              <h1 className="font-heading mt-3 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
                Frutta e verdura di stagione: guida mese per mese
              </h1>

              <p className="mt-3 text-lg font-semibold text-slate-700 md:text-xl">
                Frutta e verdura di stagione
              </p>

              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Mangiare frutta e verdura di stagione e una buona abitudine. Significa scegliere prodotti piu adatti
                al periodo dell'anno.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                La regola piu facile e questa: ogni stagione ha i suoi colori, ogni mese ha i suoi prodotti.
                Scegliere di stagione aiuta a fare una spesa piu semplice.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                Frutta e verdura di stagione spesso sono piu profumate, piu saporite e piu facili da trovare.
              </p>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Perche scegliere prodotti di stagione
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Scegliere frutta e verdura di stagione puo aiutarti a:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  {percheScegliereStagione.map((item) => (
                    <li key={item}>{item};</li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Non significa comprare solo prodotti di stagione. Significa usarli come guida semplice per scegliere meglio.
                </p>
              </section>

              <BloccoMese
                titolo="Gennaio"
                descrizione="A gennaio fa freddo. Sono molto utili agrumi, verdure da minestra e prodotti per piatti caldi."
                frutta={gennaioFrutta}
                verdura={gennaioVerdura}
                idee={gennaioIdee}
              />

              <BloccoMese
                titolo="Febbraio"
                descrizione="Febbraio e ancora un mese freddo."
                frutta={febbraioFrutta}
                verdura={febbraioVerdura}
                idee={febbraioIdee}
              />

              <BloccoMese
                titolo="Marzo"
                descrizione="A marzo inizia il passaggio verso la primavera."
                frutta={marzoFrutta}
                verdura={marzoVerdura}
                idee={marzoIdee}
              />

              <BloccoMese
                titolo="Aprile"
                descrizione="Aprile e un mese molto primaverile."
                frutta={aprileFrutta}
                verdura={aprileVerdura}
                idee={aprileIdee}
              />

              <BloccoMese
                titolo="Maggio"
                descrizione="Maggio porta piu colore."
                frutta={maggioFrutta}
                verdura={maggioVerdura}
                idee={maggioIdee}
              />

              <BloccoMese
                titolo="Giugno"
                descrizione="A giugno arriva l'estate."
                frutta={giugnoFrutta}
                verdura={giugnoVerdura}
                idee={giugnoIdee}
              />

              <BloccoMese
                titolo="Luglio"
                descrizione="Luglio e il mese dei prodotti estivi."
                frutta={luglioFrutta}
                verdura={luglioVerdura}
                idee={luglioIdee}
              />

              <BloccoMese
                titolo="Agosto"
                descrizione="Agosto e piena estate."
                frutta={agostoFrutta}
                verdura={agostoVerdura}
                idee={agostoIdee}
              />

              <BloccoMese
                titolo="Settembre"
                descrizione="Settembre e un mese di passaggio."
                frutta={settembreFrutta}
                verdura={settembreVerdura}
                idee={settembreIdee}
              />

              <BloccoMese
                titolo="Ottobre"
                descrizione="A ottobre arrivano i sapori d'autunno."
                frutta={ottobreFrutta}
                verdura={ottobreVerdura}
                idee={ottobreIdee}
              />

              <BloccoMese
                titolo="Novembre"
                descrizione="Novembre e un mese perfetto per zuppe e piatti caldi."
                frutta={novembreFrutta}
                verdura={novembreVerdura}
                idee={novembreIdee}
              />

              <BloccoMese
                titolo="Dicembre"
                descrizione="Dicembre porta agrumi e verdure invernali."
                frutta={dicembreFrutta}
                verdura={dicembreVerdura}
                idee={dicembreIdee}
              />

              <section className="mt-8 rounded-2xl bg-[#0B3B82] px-5 py-4 text-white">
                <p className="text-lg font-black">Schema facile per stagione</p>

                <p className="mt-3 text-base font-bold">Inverno</p>
                <p className="text-base">Colori: arancio, verde scuro, bianco.</p>
                <p className="text-base">Prodotti tipici: {invernoTipici.join(", ")}.</p>

                <p className="mt-3 text-base font-bold">Primavera</p>
                <p className="text-base">Colori: verde, rosso, giallo chiaro.</p>
                <p className="text-base">Prodotti tipici: {primaveraTipici.join(", ")}.</p>

                <p className="mt-3 text-base font-bold">Estate</p>
                <p className="text-base">Colori: rosso, giallo, viola, verde acceso.</p>
                <p className="text-base">Prodotti tipici: {estateTipici.join(", ")}.</p>

                <p className="mt-3 text-base font-bold">Autunno</p>
                <p className="text-base">Colori: arancio, marrone, viola, verde.</p>
                <p className="text-base">Prodotti tipici: {autunnoTipici.join(", ")}.</p>
              </section>

              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">
                  Come usare questa guida quando fai la spesa
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">Quando sei nel reparto ortofrutta, puoi fare cosi:</p>
                <ul className="mt-2 list-disc pl-6 text-base leading-8 text-slate-700">
                  <li>guarda il mese;</li>
                  <li>scegli 2 o 3 frutti di stagione;</li>
                  <li>scegli 2 o 3 verdure di stagione;</li>
                  <li>pensa a una ricetta semplice;</li>
                  <li>compra solo quello che pensi di usare davvero.</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-slate-700 font-semibold">Esempio facile</p>
                <p className="mt-2 text-base leading-8 text-slate-700">Se e luglio: pomodori, zucchine, melanzane, pesche, anguria.</p>
                <p className="mt-2 text-base leading-8 text-slate-700">
                  Con questi prodotti puoi preparare: pasta fredda, verdure grigliate, insalata, frutta fresca dopo cena.
                </p>
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
                  Guarda il mese. Scegli colori diversi. Compra quello che userai davvero.
                  Metti davanti i prodotti piu maturi.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Cosi la spesa diventa piu semplice, piu varia e piu intelligente.
                </p>
              </section>

              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Consiglio Market Ingross</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Nel reparto ortofrutta Market Ingross puoi scegliere ogni giorno prodotti freschi per la tua tavola.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Segui la stagione, scegli colori diversi e pensa gia a una ricetta semplice.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Cosi porti a casa prodotti piu adatti al periodo, riduci gli sprechi e prepari piatti piu facili.
                </p>
              </section>

              <section className="mt-10 rounded-2xl bg-[#fff7c7] p-5">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Nota importante</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Questa guida e informativa.
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  In caso di dubbi su gravidanza, bambini, anziani, allergie o salute, chiedi sempre a un medico
                  o a un professionista sanitario.
                </p>
              </section>

              <section className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Guida illustrativa</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Una versione visuale della guida, utile da consultare rapidamente anche da smartphone.
                </p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                  <Image
                    src="/images/news/consigli-per-la-spesa/guida illustrativa/frutta-verdura-stagione.png"
                    alt="Guida illustrativa Frutta e verdura di stagione"
                    width={1600}
                    height={2200}
                    className="h-auto w-full rounded-xl"
                  />
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
