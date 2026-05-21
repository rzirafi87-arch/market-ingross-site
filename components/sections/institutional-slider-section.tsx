"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    title: "Il nostro sorriso, ogni giorno",
    text: "Nei nostri punti vendita trovi persone vere, reparti curati e convenienza quotidiana.",
    button: { label: "Scopri i reparti", href: "/reparti" },
    image: "/images/brand/manifesto-6x3.jpg",
    alt: "Manifesto pubblicitario Market Ingross 6x3"
  },
  {
    title: "Fresco, qualità e convenienza",
    text: "Ortofrutta, macelleria, pescheria e gastronomia selezionate ogni giorno.",
    button: { label: "Vedi i reparti", href: "/reparti" },
    image: "/images/departments/ortofrutta.png",
    alt: "Reparto fresco Market Ingross"
  },
  {
    title: "Le offerte cambiano, il risparmio resta",
    text: "Sfoglia il volantino e scopri le promozioni disponibili nei punti vendita Market Ingross.",
    button: { label: "Sfoglia il volantino", href: "/volantino" },
    image: "/images/offers/prezzi-shock-1.png",
    alt: "Offerte Market Ingross"
  },
  {
    title: "8 punti vendita in Sicilia",
    text: "Da Agrigento a Ragusa, il risparmio Market Ingross è sempre vicino a te.",
    button: { label: "Trova il punto vendita", href: "/punti-vendita" },
    image: "/images/stores/mappa-sicilia-market-ingross-v2.png",
    alt: "Mappa punti vendita Market Ingross in Sicilia"
  }
];

export function InstitutionalSliderSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (idx: number) => setCurrent(idx);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(nextSlide, 4500);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current]);

  return (
    <section className="relative z-10 mx-auto mb-16 max-w-7xl px-4 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="font-heading text-4xl font-extrabold text-white md:text-5xl">
          Vivi <span className="text-[#FFD22E]">Market Ingross</span> ogni giorno
        </h2>
        <p className="mt-3 text-lg text-white/90 max-w-2xl mx-auto">
          Persone, <span className="text-[#FFD22E]">reparti freschi</span> e <span className="text-[#FFD22E]">convenienza quotidiana</span> nei nostri punti vendita in Sicilia.
        </p>
      </div>
      <div className="relative h-[340px] overflow-hidden rounded-3xl shadow-xl md:h-[420px]">
        {slides.map((slide, idx) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
            aria-hidden={idx !== current}
          >
            <div className="relative flex h-full items-center justify-center">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover rounded-3xl"
                style={{ filter: 'brightness(0.55)' }}
                priority={idx === 0}
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0B3B82]/90 to-[#003b7a]/80" />
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
                <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-3">
                  {slide.title.split(/(sorriso|Fresco|offerte|punti vendita)/i).map((part, i) =>
                    ["sorriso", "Fresco", "offerte", "punti vendita"].some(word => part.toLowerCase().includes(word)) ?
                      <span key={i} className="text-[#FFD22E]">{part}</span> : part
                  )}
                </h3>
                <p className="mb-6 text-lg text-white/90 max-w-xl">
                  {slide.text.split(/(persone|reparti|convenienza|risparmio|Sicilia)/i).map((part, i) =>
                    ["persone", "reparti", "convenienza", "risparmio", "Sicilia"].some(word => part.toLowerCase().includes(word)) ?
                      <span key={i} className="text-[#FFD22E]">{part}</span> : part
                  )}
                </p>
                <Link
                  href={slide.button.href}
                  className="inline-block rounded-xl bg-[#EF3D32] px-6 py-3 font-heading text-base font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#FFD22E] hover:text-[#0B3B82]"
                >
                  {slide.button.label}
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* Frecce laterali */}
        <button
          aria-label="Slide precedente"
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#0B3B82]/80 p-2 text-white hover:bg-[#FFD22E] hover:text-[#0B3B82] transition"
          onClick={prevSlide}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button
          aria-label="Slide successiva"
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#0B3B82]/80 p-2 text-white hover:bg-[#FFD22E] hover:text-[#0B3B82] transition"
          onClick={nextSlide}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        </button>
        {/* Pallini */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Vai alla slide ${idx + 1}`}
              className={`h-3 w-3 rounded-full border-2 border-white transition ${idx === current ? 'bg-[#FFD22E] border-[#FFD22E]' : 'bg-white/40'}`}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
