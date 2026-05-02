import { companyInfo } from "@/data/stores";

export function CommunitySection() {
	return (
		<section className="bg-transparent py-16 lg:py-20">
			<div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-2 lg:px-8">
				<div className="mi-panel p-8">
					<div className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#EF3D32]">
						Community
					</div>

					<h3 className="font-heading mt-3 text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#0B3B82]">
						Entra nella Community
					</h3>

					<p className="mt-4 leading-8 text-slate-700">
						Iscriviti per ricevere in anteprima offerte, novità e aggiornamenti
						dal mondo Market Ingross.
					</p>

					<div className="mt-6 flex flex-col gap-3 sm:flex-row">
						<input
							type="email"
							placeholder="La tua email"
							className="w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-[#0B3B82]"
						/>

						<a
							href={`mailto:${companyInfo.email}?subject=Iscrizione%20Community%20Market%20Ingross`}
							className="font-heading inline-flex items-center justify-center rounded-xl bg-[#0B3B82] px-6 py-3 font-semibold text-white transition hover:opacity-90"
						>
							Iscriviti
						</a>
					</div>
				</div>

				<div className="mi-card-transparent p-8">
					<div className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#16A34A]">
						Assistenza rapida
					</div>

					<h3 className="font-heading mt-3 text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#0B3B82]">
						Hai bisogno di aiuto?
					</h3>

					<p className="mt-4 leading-8 text-slate-700">
						Per richieste rapide su punti vendita, offerte attive e volantino,
						contattaci direttamente su WhatsApp.
					</p>

					<div className="mt-6">
						<a
							href="https://wa.me/393394550009?text=Ciao%20Market%20Ingross%2C%20vorrei%20ricevere%20informazioni."
							target="_blank"
							rel="noreferrer"
							className="font-heading inline-flex items-center justify-center rounded-xl bg-[#22C55E] px-6 py-3 font-semibold text-white transition hover:opacity-90"
						>
							Scrivici su WhatsApp
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
