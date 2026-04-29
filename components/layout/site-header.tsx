"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { mainNavLinks } from "@/data/navigation";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#EF3D32] shadow-sm">
      <div className="mx-auto flex h-28 max-w-7xl items-stretch justify-between px-0 lg:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center justify-center pl-4 lg:pl-0"
        >
          <Image
            src="/images/logo/market-ingross-logo.png"
            alt="Market Ingross"
            width={220}
            height={220}
            priority
            className="h-[7.5rem] w-auto object-contain"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-[15px] font-bold tracking-[-0.01em] text-white transition hover:text-yellow-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 pr-4 lg:flex lg:pr-0">
          <Link
            href="/volantino"
            className="font-heading rounded-xl bg-[#F7C51E] px-5 py-3 text-sm font-extrabold tracking-[-0.01em] text-[#0B3B82] transition hover:opacity-90"
          >
            Sfoglia il volantino
          </Link>

          <Link
            href="/punti-vendita"
            className="font-heading rounded-xl bg-[#082F6A] px-5 py-3 text-sm font-bold tracking-[-0.01em] text-white transition hover:opacity-90"
          >
            Trova il punto vendita
          </Link>
        </div>

        <div className="flex items-center pr-4 lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="font-heading inline-flex items-center justify-center rounded-xl border border-white/30 px-4 py-2 text-sm font-bold tracking-[-0.01em] text-white"
          >
            Menu
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#d9342a] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading rounded-xl px-3 py-3 text-sm font-semibold tracking-[-0.01em] text-white transition hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-2 flex flex-col gap-2">
              <Link
                href="/volantino"
                onClick={() => setIsOpen(false)}
                className="font-heading rounded-xl bg-[#F7C51E] px-4 py-3 text-center text-sm font-bold tracking-[-0.01em] text-[#0B3B82]"
              >
                Sfoglia il volantino
              </Link>

              <Link
                href="/punti-vendita"
                onClick={() => setIsOpen(false)}
                className="font-heading rounded-xl bg-[#082F6A] px-4 py-3 text-center text-sm font-bold tracking-[-0.01em] text-white"
              >
                Trova il punto vendita
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
