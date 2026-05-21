"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const heroSlides = [
  {
    type: "text" as const,
    title: "Vivi Market Ingross ogni giorno",
    text: "Persone, reparti freschi e convenienza quotidiana nei nostri punti vendita in Sicilia.",
  },
  {
    type: "image" as const,
    image: "/images/brand/manifesto-6x3.jpg",
    alt: "Manifesto pubblicitario Market Ingross 6x3",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current]);

  return (
    <section className="relative overflow-hidden pt-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96)_0%,rgba(244,213,31,0.16)_42%,rgba(11,59,130,0.05)_100%)]" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="min-h-[42vh] rounded-[36px] border border-white/70 bg-white/45 px-7 py-14 shadow-[0_24px_70px_rgba(11,59,130,0.10)] backdrop-blur-sm sm:px-10 lg:px-14 lg:py-20">
          <div className="mx-auto w-full max-w-5xl">
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-[28px] shadow-[0_16px_40px_rgba(11,59,130,0.18)]">
              {heroSlides.map((slide, index) => (
                <div
                  key={`hero-slide-${index}`}
                  className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "z-10 opacity-100" : "z-0 opacity-0"}`}
                  aria-hidden={index !== current}
                >
                  {slide.type === "image" ? (
                    <>
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        priority={index === 0}
                        className="object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#0B3B82]/20 to-transparent" />
                    </>
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-white px-6 text-center">
                      <h1 className="font-heading max-w-4xl text-5xl font-extrabold leading-[0.92] tracking-[-0.05em] text-[#0B3B82] md:text-7xl">
                        Vivi <span className="text-[#D1A800]">Market Ingross</span> ogni giorno
                      </h1>

                      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1F3557] md:text-xl">
                        {slide.text}
                      </p>
                    </div>
                  )}
                </div>
              ))}

              <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Vai alla slide hero ${index + 1}`}
                    onClick={() => setCurrent(index)}
                    className={`h-3 w-3 rounded-full border-2 border-[#0B3B82]/60 transition ${
                      index === current ? "bg-[#FFD22E] border-[#FFD22E]" : "bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-5 flex justify-center">
              <Link
                href="/volantino"
                className="inline-flex rounded-xl bg-[#EF3D32] px-6 py-3 font-heading text-sm font-extrabold uppercase tracking-[0.04em] text-white shadow-md transition hover:bg-[#FFD22E] hover:text-[#0B3B82]"
              >
                APRI IL VOLANTINO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
