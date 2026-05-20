import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Cosa comprare in gravidanza: guida semplice per la spesa",
  description:
    "Una guida semplice per capire cosa mettere nel carrello in gravidanza, quali alimenti lavare bene, cuocere bene, limitare o evitare.",
  keywords: [
    "gravidanza",
    "spesa sicura",
    "alimentazione in gravidanza",
    "sicurezza alimentare",
    "Market Ingross Consiglia",
  ],
  openGraph: {
    title: "Cosa comprare in gravidanza: guida semplice per la spesa",
    description:
      "Una guida semplice per capire cosa mettere nel carrello in gravidanza, quali alimenti lavare bene, cuocere bene, limitare o evitare.",
    url: "/news/spesa-sicura-in-gravidanza",
    type: "article",
  },
};

export default function SpesaSicuraGravidanza() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-10 lg:px-0">
        <Link href="/news" className="mi-panel mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black text-[#003b7a] transition hover:-translate-x-1">
          <span aria-hidden="true">←</span> Torna alle News
        </Link>
        <article className="mi-panel rounded-[32px] p-6 lg:p-10 lg:px-12">
          <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-[#EF3D32] mb-2">
            Market Ingross Consiglia • Gravidanza e famiglia
          </p>
          <h1 className="font-heading mt-2 text-3xl font-extrabold text-[#0B3B82] md:text-5xl">
            Cosa comprare per la spesa in gravidanza
          </h1>
          <p className="mt-3 text-lg font-semibold text-slate-700 md:text-xl">
            La spesa sicura in gravidanza: guida semplice
          </p>
          <section className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
            <p>In gravidanza la spesa deve essere semplice, buona e sicura.</p>
            <p>Non serve mangiare “per due”.<br />Serve scegliere bene cosa mettere nel carrello.</p>
            <p className="font-bold text-[#0B3B82]">La regola più facile è questa:</p>
            <ul className="list-disc ml-6">
              <li>Lava bene.</li>
              <li>Cuoci bene.</li>
              <li>Conserva bene.</li>
            </ul>
            <p>Quando un alimento è lavato bene, cotto bene e conservato bene, è più sicuro.</p>
            <p className="text-sm text-slate-600">Questa guida non sostituisce il medico. Serve solo per aiutarti a fare una spesa più attenta e più tranquilla.</p>
          </section>

          <section className="mt-10 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">1. Cosa mettere nel carrello</h2>
            <p>In gravidanza puoi scegliere tanti alimenti semplici.</p>
            <p>Nel carrello puoi mettere:</p>
            <ul className="list-disc ml-6">
              <li>frutta;</li>
              <li>verdura;</li>
              <li>pasta;</li>
              <li>riso;</li>
              <li>pane;</li>
              <li>cereali;</li>
              <li>legumi;</li>
              <li>latte pastorizzato;</li>
              <li>yogurt;</li>
              <li>formaggi sicuri;</li>
              <li>carne ben cotta;</li>
              <li>pollo ben cotto;</li>
              <li>uova ben cotte;</li>
              <li>pesce cotto;</li>
              <li>acqua.</li>
            </ul>
            <p>L’importante è fare attenzione a tre cose:</p>
            <ul className="list-disc ml-6">
              <li>lavare bene frutta e verdura;</li>
              <li>cuocere bene carne, pesce e uova;</li>
              <li>controllare bene le etichette.</li>
            </ul>
            <p className="text-sm text-slate-600">Il NHS spiega che in gravidanza molti alimenti sono sicuri, ma alcuni vanno evitati o trattati con più attenzione, soprattutto per ridurre rischi legati a batteri come Listeria o a infezioni come toxoplasmosi.</p>
          </section>

          {/* ...continua con le altre sezioni come da traccia... */}

          <section className="mt-10 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="font-heading text-2xl font-extrabold text-[#0B3B82]">Nota importante</h2>
            <p>Questa guida è informativa.<br />In caso di dubbi chiedi sempre al medico, all’ostetrica o a un professionista sanitario.</p>
            <p>Ogni gravidanza è diversa.<br />Il medico può darti indicazioni più precise in base alla tua situazione personale.</p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
