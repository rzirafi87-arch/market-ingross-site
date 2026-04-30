import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { companyInfo } from "@/data/stores";
import { mainNavLinks } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer className="bg-[#082F6A] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
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

          <p className="mt-4 text-xs leading-5 text-white/70">
            San Giorgio Retail Srl
            <br />
            P.IVA IT02623700842
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold">Navigazione</h3>
          <ul className="mt-4 space-y-2 text-white/75">
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
          <h3 className="font-heading text-lg font-bold">Area legale</h3>
          <ul className="mt-4 space-y-2 text-white/75">
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-white">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold">Contatti</h3>
          <ul className="mt-4 space-y-2 text-white/75">
            <li>{companyInfo.email}</li>
            <li>{companyInfo.generalPhone}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold">Seguici</h3>
          <ul className="mt-4 space-y-3 text-white/80">
            <li>
              <a
                href={`https://wa.me/39${companyInfo.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
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
                rel="noreferrer"
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
                rel="noreferrer"
                className="inline-flex items-center gap-3 hover:text-white"
              >
                <FaInstagram className="text-lg text-pink-300" />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
        © 2026 Market Ingross - Tutti i diritti riservati
      </div>
    </footer>
  );
}
