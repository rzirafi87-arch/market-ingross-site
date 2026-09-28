import Link from "next/link";
import { MessageCircle, UsersRound } from "lucide-react";

export function EngagementCardsSection() {
  return (
    <section id="servizi" className="bg-[#f6f8fb] py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 lg:grid-cols-2 lg:px-8">
        <article className="relative overflow-hidden rounded-[26px] border border-[#22c55e]/15 bg-[linear-gradient(120deg,#effdf5_0%,#ffffff_100%)] p-7 shadow-[0_14px_40px_rgba(0,43,91,0.06)] sm:p-9">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#22c55e]/10" />
          <div className="relative">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#22c55e] text-white">
              <MessageCircle size={23} />
            </span>
            <p className="font-heading mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#169447]">
              Assistenza clienti
            </p>
            <h3 className="font-heading mt-2 text-3xl font-black text-[#003B7A]">
              Hai bisogno di aiuto?
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-600">
              Per informazioni su punti vendita, offerte e volantini puoi contattarci direttamente su WhatsApp.
            </p>
            <a
              href="https://wa.me/393394550009?text=Ciao%20Market%20Ingross%2C%20vorrei%20ricevere%20informazioni."
              target="_blank"
              rel="noreferrer"
              className="font-heading mt-6 inline-flex rounded-xl bg-[#22c55e] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#18a84c]"
            >
              Scrivici su WhatsApp
            </a>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-[26px] bg-[#FFD51F] p-7 shadow-[0_14px_40px_rgba(0,43,91,0.08)] sm:p-9">
          <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-white/30" />
          <div className="relative">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#003B7A] text-white">
              <UsersRound size={23} />
            </span>
            <p className="font-heading mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#7d5d00]">
              Lavora con noi
            </p>
            <h3 className="font-heading mt-2 text-3xl font-black text-[#003B7A]">
              Entra nel team Market Ingross
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-7 text-[#173454]">
              Cerchiamo persone motivate, orientate al cliente e pronte a crescere insieme alla nostra rete.
            </p>
            <Link
              href="/lavora-con-noi"
              className="font-heading mt-6 inline-flex rounded-xl bg-[#EF382F] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#d92e26]"
            >
              Scopri le posizioni aperte
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
