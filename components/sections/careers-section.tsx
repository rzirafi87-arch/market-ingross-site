export function CareersSection() {
	return (
		<section className="bg-transparent py-16 text-slate-900 lg:py-20">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				<div className="mi-card p-8 md:flex md:items-center md:justify-between md:gap-10">
					<div className="max-w-3xl">
						<div className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#F7C51E]">
							Lavora con noi
						</div>

						<h2 className="font-heading mt-3 text-4xl font-extrabold leading-[0.96] tracking-[-0.03em] text-[#0B3B82] md:text-5xl">
							Entra nel team Market Ingross
						</h2>

						<p className="mt-4 max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
							Siamo sempre alla ricerca di persone motivate, dinamiche e
							orientate al cliente, pronte a crescere insieme a noi.
						</p>
					</div>

					<div className="mt-6 md:mt-0 md:shrink-0">
						<a
							href="/lavora-con-noi"
							className="font-heading inline-flex rounded-xl bg-[#EF3D32] px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.04em] text-white transition hover:opacity-90"
						>
							Invia candidatura
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
