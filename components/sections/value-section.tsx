import { BadgeEuro, Leaf, MapPinned, ShieldCheck } from "lucide-react";

const values = [
  {
    title: "Prezzi sempre competitivi",
    text: "Convenienza quotidiana e attenzione al rapporto qualità-prezzo.",
    icon: BadgeEuro,
    accent: "bg-[#FFD51F] text-[#003B7A]",
  },
  {
    title: "Qualità garantita",
    text: "Selezioniamo con cura prodotti e reparti per la tua spesa.",
    icon: ShieldCheck,
    accent: "bg-[#EF382F] text-white",
  },
  {
    title: "Vicini a te",
    text: "9 punti vendita in Sicilia e un team sempre disponibile.",
    icon: MapPinned,
    accent: "bg-[#003B7A] text-white",
  },
  {
    title: "Territorio e sostenibilità",
    text: "Valorizziamo il territorio e promuoviamo scelte più responsabili.",
    icon: Leaf,
    accent: "bg-[#2ca56c] text-white",
  },
];

export function ValueSection() {
  return (
    <section className="bg-[#f6f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="mi-section-kicker">I nostri valori</p>
          <h2 className="mi-section-title mt-3 text-4xl sm:text-5xl">
            Convenienza, qualità, vicinanza
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Ogni giorno lavoriamo per rendere la spesa semplice, conveniente e vicina alle esigenze delle famiglie.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article
                key={value.title}
                className="rounded-[22px] border border-[#003B7A]/8 bg-white p-6 shadow-[0_12px_35px_rgba(0,43,91,0.06)]"
              >
                <span className={"inline-flex h-12 w-12 items-center justify-center rounded-full " + value.accent}>
                  <Icon size={22} strokeWidth={2.4} />
                </span>
                <h3 className="font-heading mt-5 text-lg font-extrabold text-[#003B7A]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{value.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
