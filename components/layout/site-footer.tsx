import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { companyInfo } from "@/data/stores";
import { mainNavLinks } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer className="bg-[#082F6A] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div>
          <div className="font-heading text-2xl font-extrabold">
            Market Ingross
          </div>

          <p className="mt-4 leading-7 text-white/75">
            Il Re del Risparmio, ogni giorno vicino a te.
          </p>

          <p className="mt-4 text-sm leading-6 text-white/70">
            {companyInfo.companyName}
            <br />
            P.IVA {companyInfo.vatNumber}
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
