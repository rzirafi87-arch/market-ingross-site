const values = [
	{
		title: "Prezzi sempre competitivi",
		text: "Ogni giorno lavoriamo per offrirti il miglior rapporto qualità-prezzo.",
	},
	{
		title: "Qualità garantita",
		text: "Selezioniamo con cura i migliori prodotti per la tua spesa.",
	},
	{
		title: "Vicini a te",
		text: "8 punti vendita in Sicilia e un team sempre disponibile.",
	},
	{
		title: "Territorio e sostenibilità",
		text: "Sosteniamo le eccellenze locali e un futuro più sostenibile.",
	},
];

export function ValueSection() {
	return (
		<section className="bg-transparent py-16 lg:py-20">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				<div className="text-center">
					<div className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#EF3D32]">
						I nostri valori
					</div>

					<h2 className="font-heading mt-3 text-4xl font-extrabold leading-[0.96] tracking-[-0.03em] text-[#0B3B82] md:text-5xl">
						Convenienza, qualità, vicinanza
					</h2>

					<p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-700">
						Ogni giorno lavoriamo per offrirti un’esperienza di spesa semplice,
						conveniente e vicina alle esigenze delle famiglie.
					</p>
				</div>

				<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
					{values.map((value) => (
						<div
							key={value.title}
							className="mi-card-transparent p-6"
						>
							<div className="font-heading text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#EF3D32]">
								Market Ingross
							</div>

							<h3 className="font-heading mt-3 text-xl font-extrabold leading-tight tracking-[-0.02em] text-[#0B3B82]">
								{value.title}
							</h3>

							<p className="mt-3 leading-7 text-slate-700">{value.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
