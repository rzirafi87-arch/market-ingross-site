const news = [
	{
		title: "Nuovo volantino della settimana",
		text: "Scopri tutte le offerte attive nei nostri punti vendita.",
	},
	{
		title: "Più scelta nei reparti freschi",
		text: "Ogni giorno qualità e convenienza per la tua spesa.",
	},
	{
		title: "Market Ingross vicino al territorio",
		text: "Promozioni, servizio e attenzione per i clienti in Sicilia.",
	},
];

export function NewsSection() {
	return (
		<section className="bg-transparent py-16">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				<div className="text-center">
					<h2 className="text-4xl font-extrabold text-[#0B3B82]">
						Novità dal mondo Market Ingross
					</h2>
				</div>

				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{news.map((item) => (
						<div
							key={item.title}
							className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
						>
							<div className="h-44 bg-gradient-to-br from-slate-200 to-slate-100" />
							<div className="p-6">
								<h3 className="text-2xl font-bold text-[#0B3B82]">
									{item.title}
								</h3>
								<p className="mt-3 leading-7 text-slate-600">{item.text}</p>
								<a href="#" className="mt-5 inline-block font-semibold text-[#EF3D32]">
									Leggi di più →
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
