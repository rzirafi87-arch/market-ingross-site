import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const newsItems = [
	{
		category: "Volantino",
		title: "Nuovo volantino della settimana",
		text: "Scopri tutte le offerte attive e i prodotti in promozione nei punti vendita Market Ingross.",
	},
	{
		category: "Reparti",
		title: "Più scelta nei reparti freschi",
		text: "Qualità, assortimento e convenienza ogni giorno per accompagnarti nella tua spesa.",
	},
	{
		category: "Territorio",
		title: "Market Ingross vicino ai clienti",
		text: "Promozioni, servizio e attenzione nei nostri punti vendita in Sicilia.",
	},
	{
		category: "Novità",
		title: "Nuove occasioni per la tua spesa",
		text: "Continuiamo a lavorare per offrirti un’esperienza di acquisto sempre più comoda e conveniente.",
	},
	{
		category: "Promozioni",
		title: "Offerte selezionate sui grandi marchi",
		text: "Ogni settimana trovi tante opportunità su prodotti confezionati, freschi e articoli per la casa.",
	},
	{
		category: "Store",
		title: "I punti vendita sempre più vicini",
		text: "Scopri dove trovarci e resta aggiornato sulle novità dei nostri negozi.",
	},
];

export default function NewsPage() {
	return (
		<div className="min-h-screen mi-page-bg text-slate-900">
			<SiteHeader />

			<main>
				<section className="bg-slate-50 py-16 lg:py-24">
					<div className="mx-auto max-w-7xl px-4 lg:px-8">
						<span className="text-sm font-semibold uppercase tracking-wide text-red-500">
							News e aggiornamenti
						</span>
						<h1 className="mt-3 text-4xl font-extrabold text-[#0B3B82] md:text-6xl">
							Novità dal mondo Market Ingross
						</h1>
						<p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
							Scopri novità, promozioni, iniziative e aggiornamenti dai nostri
							punti vendita in Sicilia.
						</p>
					</div>
				</section>

				<section className="bg-transparent py-16">
					<div className="mx-auto max-w-7xl px-4 lg:px-8">
						<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
							{newsItems.map((item) => (
								<article
									key={item.title}
										className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
								>
									<div className="h-48 bg-gradient-to-br from-slate-200 to-slate-100" />
									<div className="p-6">
										<span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-600">
											{item.category}
										</span>
										<h2 className="mt-4 text-2xl font-bold text-[#0B3B82]">
											{item.title}
										</h2>
										<p className="mt-3 leading-7 text-slate-600">{item.text}</p>
										<a
											href="#"
											className="mt-5 inline-block font-semibold text-[#EF3D32]"
										>
											Leggi di più →
										</a>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>
			</main>

			<SiteFooter />
		</div>
	);
}
