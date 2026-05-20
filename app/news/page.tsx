import Image from "next/image";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const newsItems = [
	{
		category: "Carne e macelleria",
		title: "Quali sono i tagli della carne?",
		text: "Guida semplice per scegliere il taglio giusto in base alla ricetta.",
		href: "/news/quali-sono-i-tagli-della-carne",
		videoId: null,
		image: "/images/news/tagli-carne-card.png",
		location: "Rubrica Market Ingross Consiglia",
		date: "2026-05-20",
		volantino: "/images/news/la-carne-spiegata-semplice.png",
		assetLabel: "Guida illustrativa",
	},
	{
		category: "Nuova apertura",
		title: "Nuova apertura Market Ingross a Ragusa",
		text: "Scopri il nuovo punto vendita Market Ingross a Ragusa.",
		href: "/news/nuova-apertura-ragusa",
		videoId: null,
		location: "Ragusa",
		date: "2025-12-04",
		volantino: "/volantino/aperture/ragusa.pdf",
		assetLabel: "Volantino",
	},
	{
		category: "Nuova apertura",
		title: "Nuova apertura Market Ingross a Vittoria",
		text: "Scopri il nuovo punto vendita Market Ingross a Vittoria.",
		href: "/news/nuova-apertura-vittoria",
		videoId: null,
		location: "Vittoria",
		date: "2025-11-20",
		volantino: "/volantino/aperture/vittoria.pdf",
		assetLabel: "Volantino",
	},
	{
		category: "Nuova apertura",
		title: "Nuova apertura Market Ingross a Agrigento",
		text: "Scopri il nuovo punto vendita Market Ingross a Agrigento.",
		href: "/news/nuova-apertura-agrigento",
		videoId: "q7lQH4Gwl0g",
		location: "Agrigento",
		date: "2024-11-28",
		volantino: "/volantino/aperture/agrigento.pdf",
		assetLabel: "Volantino",
	},
	{
		category: "Nuova apertura",
		title: "Nuova apertura Market Ingross a Canicattì",
		text: "Scopri il nuovo punto vendita Market Ingross a Canicattì.",
		href: "/news/nuova-apertura-canicatti",
		videoId: "jUOc9wwItko",
		location: "Canicattì",
		date: "2024-03-14",
		volantino: "/volantino/aperture/canicatti.pdf",
		assetLabel: "Volantino",
	},
	{
		category: "Nuova apertura",
		title: "Nuova apertura Market Ingross a Gela",
		text: "Grande apertura del nuovo punto vendita Market Ingross in Via Enrico Mattei.",
		href: "/news/nuova-apertura-gela",
		videoId: "HzyDMsfo7_E",
		location: "Gela",
		date: "2023-03-18",
		volantino: "/volantino/aperture/gela.pdf",
		assetLabel: "Volantino",
	},
	{
		category: "Nuova apertura",
		title: "Nuova apertura Market Ingross a Rosolini",
		text: "Scopri il nuovo punto vendita Market Ingross a Rosolini.",
		href: "/news/nuova-apertura-rosolini",
		videoId: "I-NxVznQlaw",
		location: "Rosolini",
		date: "2020-07-23",
		volantino: null, // non presente
		assetLabel: "Volantino",
	},
	{
		category: "Nuova apertura",
		title: "Nuova apertura Market Ingross a Ispica",
		text: "Scopri il nuovo punto vendita Market Ingross a Ispica.",
		href: "/news/nuova-apertura-ispica",
		videoId: "KtlobI7l5UI",
		location: "Ispica",
		date: "2022-04-08",
		volantino: null, // non presente
		assetLabel: "Volantino",
	},
	{
		category: "Nuova apertura",
		title: "Nuova apertura Market Ingross a Castelvetrano",
		text: "Scopri il nuovo punto vendita Market Ingross a Castelvetrano.",
		href: "/news/nuova-apertura-castelvetrano",
		videoId: "_UfEoBG3-zA",
		location: "Castelvetrano",
		date: "2025-11-13",
		volantino: "/volantino/aperture/castelvetrano.pdf",
		assetLabel: "Volantino",
	},
]
// Ordina dalla più recente alla più vecchia
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
						<div className="grid gap-6 [direction:rtl] md:grid-cols-2 xl:grid-cols-3">
							{newsItems.map((item) => (
								<article
									key={item.title}
									className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm transition [direction:ltr] hover:-translate-y-1 hover:shadow-lg"
								>
									<a href={item.href} className="block">
										{item.image ? (
											<div className="relative aspect-video w-full overflow-hidden bg-slate-100">
												<Image
													src={item.image}
													alt={item.title}
													fill
													className="object-cover"
												/>
											</div>
										) : item.videoId ? (
											<div className="aspect-video w-full overflow-hidden bg-black">
												<iframe
													className="w-full h-full"
													src={`https://www.youtube.com/embed/${item.videoId}`}
													title={item.title}
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
													allowFullScreen
												/>
											</div>
										) : (
											<div className="aspect-video w-full flex items-center justify-center bg-slate-200 text-slate-400 text-3xl">
												<span>Video non disponibile</span>
											</div>
										)}
										<div className="p-6">
											<span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-600">
												{item.category}
											</span>
											<h2 className="mt-4 text-2xl font-bold text-[#0B3B82]">
												{item.title}
											</h2>
											<p className="mt-3 leading-7 text-slate-600">{item.text}</p>
											<div className="mt-5 flex flex-wrap items-center gap-3">
												<span className="inline-block font-semibold text-[#EF3D32]">
												Guarda la news →
												</span>
											</div>
										</div>
									</a>
									{item.volantino && (
										<div className="px-6 pb-6">
											<a
												href={item.volantino}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-block rounded bg-[#f4d51f] px-4 py-2 text-xs font-bold text-[#063b78] shadow hover:bg-[#ffe066]"
											>
												{item.assetLabel ?? "Volantino"}
											</a>
										</div>
									)}
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
