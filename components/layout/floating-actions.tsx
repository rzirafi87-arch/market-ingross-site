"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 350);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Torna su"
          className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#ef382f] bg-[#ffeb00] text-[#003b7a] shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition hover:scale-105 hover:bg-[#ffd22e] md:bottom-6 md:left-6"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={3} />
        </button>
      )}

      <a
        href="https://wa.me/390922891711"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scrivici su WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(0,0,0,0.28)] transition hover:scale-105 hover:bg-[#1ebe5d] md:bottom-6 md:right-6"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={2.8} />
      </a>
    </>
  );
}
