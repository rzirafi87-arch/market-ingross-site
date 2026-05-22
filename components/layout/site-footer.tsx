import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { companyInfo } from "@/data/stores";
import { mainNavLinks } from "@/data/navigation";

export function SiteFooter() {
  const whatsappHref =
    "https://wa.me/393394550009?text=Ciao%20Market%20Ingross%2C%20vorrei%20ricevere%20informazioni.";

  return (
    <footer className="bg-[#003b7a] text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-[1.35fr_1fr_1fr_1fr_1.35fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/images/logo/market-ingross-logo.png"
              alt="Market Ingross"
              width={86}
              height={86}
              className="h-16 w-auto rounded-xl bg-[#ffeb00] p-1 shadow-md"
            />

            <div>
              <h3 className="text-lg font-black text-white">Market Ingross</h3>
              <p className="text-xs font-semibold text-white/70">
                Il Re del Risparmio
              </p>
            </div>
          </div>

          <p className="max-w-xs text-sm leading-6 text-white/80">
            Il Re del Risparmio, ogni giorno vicino a te.
          </p>

          <div className="mt-5 inline-flex rounded-2xl bg-white p-3 shadow-md">
            <Image
              src="/images/brand/roli-holding-logo-transparent.png"
              alt="Roli Holding"
              width={180}
              height={180}
              className="h-auto w-[130px] object-contain opacity-95"
            />
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-black text-white">Navigazione</h4>
          <ul className="space-y-2 text-sm text-white/75">
            {mainNavLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-black text-white">Contatti</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li>
              <a href={`mailto:${companyInfo.email}`} className="hover:text-white">
                {companyInfo.email}
              </a>
            </li>
            <li className="pt-2">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-white">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/whistleblowing" className="hover:text-white">
                Whistleblowing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-black text-white">Seguici</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-white"
              >
                <FaWhatsapp className="text-xl text-green-400" />
                <span>WhatsApp</span>
              </a>
            </li>

            <li>
              <a
                href={companyInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-white"
              >
                <FaFacebookF className="text-lg text-blue-300" />
                <span>Facebook</span>
              </a>
            </li>

            <li>
              <a
                href={companyInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-white"
              >
                <FaInstagram className="text-lg text-pink-300" />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="footer-vege-card mx-auto mt-5">
            <Image
              src="/images/brand/gruppo-vege-logo.png"
              alt="Gruppo Vege"
              width={220}
              height={120}
              className="footer-vege-main-logo"
            />

            <div className="footer-vege-divider" />

            <div className="footer-vege-carousel">
              <div className="footer-vege-carousel-track">
                <div className="flex flex-col items-center justify-center rounded-xl bg-white px-2 py-1">
                  <Image
                    src="/images/brand/sostenibilita-vege-logo.png"
                    alt="Vege Sostenibilita"
                    width={130}
                    height={100}
                    className="footer-vege-small-logo"
                  />
                  <span className="mt-1 w-[72px] text-center text-[10px] font-black leading-none text-[#2f8f2f]">
                    Sostenibilità
                  </span>
                </div>
                <div className="rounded-xl bg-white px-2 py-1">
                  <Image
                    src="/images/brand/noi-amiamo-lo-sport-2026.png"
                    alt="Noi amiamo lo sport 2026"
                    width={130}
                    height={100}
                    className="footer-vege-small-logo"
                  />
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl bg-white px-2 py-1" aria-hidden>
                  <Image
                    src="/images/brand/sostenibilita-vege-logo.png"
                    alt=""
                    width={130}
                    height={100}
                    className="footer-vege-small-logo"
                  />
                  <span className="mt-1 w-[72px] text-center text-[10px] font-black leading-none text-[#2f8f2f]">
                    Sostenibilità
                  </span>
                </div>
                <div className="rounded-xl bg-white px-2 py-1">
                  <Image
                    src="/images/brand/noi-amiamo-lo-sport-2026.png"
                    alt=""
                    aria-hidden
                    width={130}
                    height={100}
                    className="footer-vege-small-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/60">
        © 2026 Market Ingross - Tutti i diritti riservati
      </div>
    </footer>
  );
}
