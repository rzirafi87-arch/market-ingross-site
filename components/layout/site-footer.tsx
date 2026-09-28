import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { companyInfo } from "@/data/stores";
import { mainNavLinks } from "@/data/navigation";

export function SiteFooter() {
  const whatsappHref =
    "https://wa.me/393394550009?text=Ciao%20Market%20Ingross%2C%20vorrei%20ricevere%20informazioni.";

  return (
    <footer className="bg-[#032b5c] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo/market-ingross-logo.png"
              alt="Market Ingross"
              width={110}
              height={110}
              className="h-20 w-auto rounded-xl bg-[#FFD51F] p-1"
            />
            <p className="font-heading mt-5 text-lg font-extrabold">
              Il tuo supermercato di fiducia in Sicilia.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
              9 supermercati, convenienza quotidiana, reparti freschi e un servizio vicino alle famiglie.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Market Ingross"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <FaWhatsapp />
              </a>
              <a
                href={companyInfo.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Market Ingross"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <FaFacebookF />
              </a>
              <a
                href={companyInfo.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Market Ingross"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-extrabold">Navigazione</h3>
            <ul className="mt-5 space-y-2 text-sm text-white/70">
              {mainNavLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-extrabold">Informazioni</h3>
            <ul className="mt-5 space-y-2 text-sm text-white/70">
              <li>
                <a href={"mailto:" + companyInfo.email} className="transition hover:text-white">
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="transition hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="transition hover:text-white">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/whistleblowing" className="transition hover:text-white">
                  Whistleblowing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-extrabold">Gruppo</h3>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="rounded-2xl bg-white p-3">
                <Image
                  src="/images/brand/roli-holding-logo-transparent.png"
                  alt="RO.LI Holding"
                  width={145}
                  height={90}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="rounded-2xl bg-[#FFE500] p-3">
                <Image
                  src="/images/brand/gruppo-vege-logo.png"
                  alt="Gruppo VéGé"
                  width={145}
                  height={90}
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Market Ingross. Tutti i diritti riservati.</span>
          <span>Un insegna del Gruppo Rocchetta.</span>
        </div>
      </div>
    </footer>
  );
}
