import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { newsItems } from "@/data/news";

const categoryCards = [
	{
		title: "Ricette",
		subtitle: "Piatti tipici siciliani, tradizione e gusto di casa.",
		href: "/news/ricette",
		categoryKey: "ricette",
	},
	{
		title: "Consigli per la spesa",
		subtitle: "Guide pratiche per scegliere meglio e fare una spesa più sicura.",
		href: "/news/consigli-per-la-spesa",
		categoryKey: "consigli-spesa",
	},
	{
		title: "Le nostre aperture",
		subtitle: "Tutte le nuove aperture Market Ingross nei territori serviti.",
		href: "/news/aperture",
		categoryKey: "aperture",
	},
	{
		title: "Iniziative",
		subtitle: "Eventi, progetti e attività dedicate alla comunità.",
		href: "/news/iniziative",
		categoryKey: "iniziative",
	},
] as const;

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
						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
							{categoryCards.map((item) => {
								const count = newsItems.filter(
									(news) => news.categoryKey === item.categoryKey,
								).length;

								return (
									<Link
										key={item.title}
										href={item.href}
										className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg lg:p-5"
									>
										<h2 className="text-xl font-bold text-[#0B3B82]">{item.title}</h2>
										<div className="mt-3 flex items-center justify-between">
											<span className="text-sm font-semibold text-slate-500">{count} news</span>
											<span className="inline-block text-sm font-semibold text-[#EF3D32]">Apri sezione →</span>
										</div>
									</Link>
								);
							})}
						</div>
					</div>
				</section>
			</main>

			<SiteFooter />
		</div>
	);
}
