"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MapPin, Menu, X } from "lucide-react";
import { mainNavLinks } from "@/data/navigation";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#003b7a]/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center gap-5 px-4 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Market Ingross - Home">
          <Image
            src="/images/logo/market-ingross-logo.png"
            alt="Market Ingross"
            width={120}
            height={120}
            priority
            className="h-16 w-auto object-contain"
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 xl:flex">
          {mainNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-heading whitespace-nowrap text-[12px] font-bold text-[#173454] transition hover:text-[#EF382F] 2xl:text-[13px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          <Link
            href="/punti-vendita"
            className="font-heading hidden items-center gap-2 rounded-xl bg-[#EF382F] px-5 py-3 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(239,56,47,0.24)] transition hover:-translate-y-0.5 hover:bg-[#d92e26] sm:inline-flex"
          >
            <MapPin size={17} strokeWidth={2.5} />
            Trova il tuo Market
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#003b7a]/15 text-[#003b7a] xl:hidden"
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-[#003b7a]/10 bg-white xl:hidden">
          <nav className="mx-auto grid max-w-[1500px] gap-1 px-4 py-4 lg:px-8">
            {mainNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading rounded-xl px-4 py-3 text-sm font-bold text-[#173454] transition hover:bg-[#f4f7fb] hover:text-[#EF382F]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/punti-vendita"
              onClick={() => setIsOpen(false)}
              className="font-heading mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#EF382F] px-5 py-3 text-sm font-extrabold text-white sm:hidden"
            >
              <MapPin size={17} />
              Trova il tuo Market
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
