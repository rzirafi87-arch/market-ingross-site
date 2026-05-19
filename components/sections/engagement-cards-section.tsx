"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Giulia M.",
    text: "Sempre forniti, personale gentile e offerte davvero convenienti.",
  },
  {
    name: "Salvatore R.",
    text: "Reparti freschi di qualita e tanta scelta. Bravi.",
  },
  {
    name: "Anna P.",
    text: "Pulito, ordinato e con prezzi imbattibili. Consigliatissimo.",
  },
];

export function EngagementCardsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="bg-transparent py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-4">
          <article className="mi-card p-6">
            <div className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#EF3D32]">
              Dicono di noi
            </div>

            <div className="mt-3 min-h-[124px]">
              <p className="text-sm leading-7 text-slate-700">"{activeTestimonial.text}"</p>
              <p className="font-heading mt-4 text-sm font-bold text-[#0B3B82]">
                {activeTestimonial.name}
              </p>
            </div>

            <div className="mt-4 flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    activeIndex === index ? "bg-[#EF3D32]" : "bg-slate-300"
                  }`}
                  aria-label={`Mostra recensione ${index + 1}`}
                />
              ))}
            </div>
          </article>

          <article className="mi-panel p-6">
            <div className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#EF3D32]">
              Community
            </div>

            <h3 className="font-heading mt-3 text-2xl font-extrabold leading-tight text-[#0B3B82]">
              Entra nella community
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-700">
              Ricevi in anteprima offerte, novita e aggiornamenti dal mondo
              Market Ingross.
            </p>

            <a
              href="mailto:info@marketingross.it?subject=Iscrizione%20Community%20Market%20Ingross"
              className="font-heading mt-5 inline-flex rounded-xl bg-[#0B3B82] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90"
            >
              Iscriviti
            </a>
          </article>

          <article className="mi-card-transparent p-6">
            <div className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#16A34A]">
              Assistenza rapida
            </div>

            <h3 className="font-heading mt-3 text-2xl font-extrabold leading-tight text-[#0B3B82]">
              Hai bisogno di aiuto?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-700">
              Per richieste su punti vendita, offerte e volantino, contattaci
              direttamente su WhatsApp.
            </p>

            <a
              href="https://wa.me/393394550009?text=Ciao%20Market%20Ingross%2C%20vorrei%20ricevere%20informazioni."
              target="_blank"
              rel="noreferrer"
              className="font-heading mt-5 inline-flex rounded-xl bg-[#22C55E] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90"
            >
              Scrivici su WhatsApp
            </a>
          </article>

          <article className="mi-card p-6">
            <div className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#EF3D32]">
              Lavora con noi
            </div>

            <h3 className="font-heading mt-3 text-2xl font-extrabold leading-tight text-[#0B3B82]">
              Entra nel team
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-700">
              Cerchiamo persone motivate e orientate al cliente, pronte a
              crescere insieme a noi.
            </p>

            <Link
              href="/lavora-con-noi"
              className="font-heading mt-5 inline-flex rounded-xl bg-[#EF3D32] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90"
            >
              Invia candidatura
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
