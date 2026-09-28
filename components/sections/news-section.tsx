import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const news = [
  {
    category: "Aperture",
    title: "La rete Market Ingross cresce",
    text: "Scopri i punti vendita, le aperture e tutte le novità della rete Market Ingross in Sicilia.",
    href: "/news/aperture",
    image: "/images/stores/gela_1-via-mattei.png",
  },
  {
    category: "Sapori di Casa",
    title: "Peperoni in agrodolce: il profumo dell'estate siciliana",
    text: "Una ricetta semplice, colorata e piena di gusto dalla rubrica Sapori di Casa.",
    href: "/news/peperoni-in-agrodolce",
    image: "/images/news/ricette/card/peperoni-agrodolce-card.png",
  },
  {
    category: "Market Ingross Consiglia",
    title: "Frutta e verdura di stagione, mese per mese",
    text: "Una guida pratica per scegliere meglio, rispettare la stagione e organizzare la spesa.",
    href: "/informazioni-utili/frutta-verdura-di-stagione",
    image: "/images/news/consigli-per-la-spesa/card/frutta-verdura-stagione-card.png",
  },
];

export function NewsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="mi-section-kicker">News e novità</p>
            <h2 className="mi-section-title mt-3 text-4xl leading-[1.02] sm:text-5xl">
              Sempre qualcosa di nuovo per te
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Aperture, iniziative, consigli e sapori siciliani: resta aggiornato sul mondo Market Ingross.
            </p>
            <Link
              href="/news"
              className="font-heading mt-7 inline-flex items-center gap-2 rounded-xl border-2 border-[#003B7A] px-5 py-3 text-sm font-extrabold text-[#003B7A] transition hover:bg-[#003B7A] hover:text-white"
            >
              Tutte le novità
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {news.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[22px] border border-[#003B7A]/10 bg-white shadow-[0_12px_35px_rgba(0,43,91,0.07)] transition hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="font-heading text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#EF382F]">
                    {item.category}
                  </p>
                  <h3 className="font-heading mt-2 text-lg font-extrabold leading-tight text-[#003B7A]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  <span className="font-heading mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold text-[#003B7A]">
                    Scopri di più <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
