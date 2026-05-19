"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { mainNavLinks, utilityNavLinks } from "@/data/navigation";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUtilityOpen, setIsUtilityOpen] = useState(false);

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

        <div className="flex shrink-0 items-center gap-3 pr-4 lg:pr-0">
          {/* Menu Utility */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsUtilityOpen(!isUtilityOpen)}
              className="flex flex-col justify-center gap-1.5 rounded-lg bg-[#F7C51E] p-2.5 text-[#0B3B82] transition hover:opacity-90"
              aria-label="Menu utility"
              aria-expanded={isUtilityOpen}
            >
              <span className="h-1 w-5 bg-current rounded-full" />
              <span className="h-1 w-5 bg-current rounded-full" />
              <span className="h-1 w-5 bg-current rounded-full" />
            </button>

            {/* Dropdown Menu */}
            {isUtilityOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-white shadow-lg z-50 overflow-hidden">
                {utilityNavLinks.map((link) => (
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setIsUtilityOpen(false)}
                      className="block px-4 py-3 font-heading font-semibold text-[#0B3B82] transition hover:bg-[#F7C51E]/20 border-b border-gray-100 last:border-b-0"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsUtilityOpen(false)}
                      className="block px-4 py-3 font-heading font-semibold text-[#0B3B82] transition hover:bg-[#F7C51E]/20 border-b border-gray-100 last:border-b-0"
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="font-heading inline-flex items-center justify-center rounded-xl border border-white/30 px-4 py-2 text-sm font-bold tracking-[-0.01em] text-white"
            >
              Menu
            </button>
          </div>
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

          </div>
        </div>
      )}
    </header>
  );
}
