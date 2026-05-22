"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

type InstitutionalSlide = {
  title: string;
  text: string;
  button: { label: string; href: string } | null;
  image: string;
  alt: string;
  layout?: "split-left-image" | "split-right-image";
  buttonPosition?: "bottom-right";
  imageClassName?: string;
  imagePanelClassName?: string;
  imageFilter?: string;
  overlayClassName?: string;
  cornerLabel?: string;
};

const slides: InstitutionalSlide[] = [
  {
    title: "Il nostro sorriso, ogni giorno",
    text: "Nei nostri punti vendita trovi persone vere, reparti curati e convenienza quotidiana.",
    button: null,
    image: "/images/brand/noi-amiamo-lo-sport-2026.png",
    alt: "Valori e comunità Market Ingross",
    layout: "split-left-image",
    imageClassName: "object-contain p-10 md:p-16"
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
    image: "/images/offers/volantino%20header.jpg",
    alt: "Titolo e offerte del volantino Market Ingross",
    layout: "split-right-image",
    imageClassName: "object-contain object-center p-4 md:p-6",
    imagePanelClassName:
      "relative h-[220px] rounded-2xl border border-[#0B3B82]/12 bg-white shadow-[0_14px_34px_rgba(11,59,130,0.14)] md:h-[300px]",
    imageFilter: "drop-shadow(0 16px 28px rgba(11,59,130,0.22))",
    cornerLabel: "Volantino attivo"
  },
  {
    title: "8 punti vendita in Sicilia",
    text: "Da Castelvetrano a Rosolini, il risparmio Market Ingross è sempre vicino a te.",
    button: { label: "Trova il punto vendita", href: "/punti-vendita" },
    image: "/images/stores/mappa-sicilia-market-ingross-v2.png",
    alt: "Mappa punti vendita Market Ingross in Sicilia",
    layout: "split-left-image",
    imageClassName: "object-contain p-4 md:p-6",
    imageFilter: "brightness(0.95) saturate(1.02)",
    overlayClassName: "bg-gradient-to-br from-white/14 to-[#0B3B82]/24"
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
        <h2 className="font-heading text-4xl font-extrabold text-[#0B3B82] md:text-5xl">
          <span className="text-[#EF3D32]">Vivi</span>{" "}
          <span className="text-[#FFD22E]">Market Ingross</span>{" "}
          ogni giorno
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-[#0B3B82]">
          <span className="text-[#EF3D32]">Persone</span>,{" "}
          <span className="text-[#FFD22E]">reparti freschi</span> e{" "}
          <span className="text-[#FFD22E]">convenienza quotidiana</span> nei nostri punti vendita in Sicilia.
        </p>
      </div>
      <div className="relative h-[340px] overflow-hidden rounded-3xl shadow-xl md:h-[420px]">
        {slides.map((slide, idx) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
            aria-hidden={idx !== current}
          >
            {slide.layout === "split-left-image" || slide.layout === "split-right-image" ? (
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#dfe8f6] to-[#cdd9ef] px-12 py-6 md:px-16 md:py-8">
                <div className="grid h-full items-center gap-5 md:grid-cols-[1fr_1.15fr] md:gap-8">
                  <div
                    className={`${slide.layout === "split-right-image" ? "md:order-2" : "md:order-1"} ${slide.imagePanelClassName ?? "relative h-[220px] overflow-hidden rounded-2xl border border-[#0B3B82]/10 bg-white shadow-sm md:h-[300px]"}`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 768px) 82vw, 44vw"
                      className={slide.imageClassName ?? "object-contain p-3 md:p-5"}
                      style={{ filter: slide.imageFilter ?? 'none' }}
                      priority={idx === 0}
                    />
                  </div>

                  <div
                    className={`relative z-10 flex flex-col items-start justify-center text-left ${slide.layout === "split-right-image" ? "md:order-1" : "md:order-2"}`}
                  >
                    <h3 className="font-heading mb-3 text-2xl font-extrabold text-[#0B3B82] md:text-4xl">
                      {slide.title.split(/(Sicilia|punti vendita)/i).map((part, i) =>
                        ["Sicilia", "punti vendita"].some((word) => part.toLowerCase().includes(word.toLowerCase())) ?
                          <span key={i} className="text-[#FFD22E]">{part}</span> : part
                      )}
                    </h3>
                    <p className="mb-6 max-w-xl text-lg leading-8 text-[#1F3557]">
                      {slide.text}
                    </p>
                    {slide.button && (
                      <Link
                        href={slide.button.href}
                        className="inline-block rounded-xl bg-[#EF3D32] px-6 py-3 font-heading text-base font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#FFD22E] hover:text-[#0B3B82]"
                      >
                        {slide.button.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative flex h-full items-center justify-center">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  className={`rounded-3xl ${slide.imageClassName ?? "object-cover"}`}
                  style={{ filter: slide.imageFilter ?? 'brightness(0.55)' }}
                  priority={idx === 0}
                />
                <div className={`absolute inset-0 rounded-3xl ${slide.overlayClassName ?? "bg-gradient-to-br from-[#0B3B82]/90 to-[#003b7a]/80"}`} />
                {slide.cornerLabel && (
                  <div className="absolute right-5 top-5 z-20 rounded-full border border-white/20 bg-[#FFD22E] px-4 py-1.5 font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-[#0B3B82] shadow">
                    {slide.cornerLabel}
                  </div>
                )}
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
                  {slide.button && slide.buttonPosition !== "bottom-right" && (
                    <Link
                      href={slide.button.href}
                      className="inline-block rounded-xl bg-[#EF3D32] px-6 py-3 font-heading text-base font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#FFD22E] hover:text-[#0B3B82]"
                    >
                      {slide.button.label}
                    </Link>
                  )}
                </div>

                {slide.button && slide.buttonPosition === "bottom-right" && (
                  <div className="absolute bottom-5 right-5 z-20 md:bottom-8 md:right-8">
                    <Link
                      href={slide.button.href}
                      className="inline-block rounded-xl bg-[#EF3D32] px-6 py-3 font-heading text-base font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#FFD22E] hover:text-[#0B3B82]"
                    >
                      {slide.button.label}
                    </Link>
                  </div>
                )}
              </div>
            )}
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
