"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Flyer } from "@/data/flyers";
import { getPromoDateLabel } from "../../lib/flyers";

const topOffers = [
	{
		id: 1,
		image: "/images/offers/top/offerta-1.jpg",
		alt: "Offerta 1",
	},
	{
		id: 2,
		image: "/images/offers/top/offerta-2.jpg",
		alt: "Offerta 2",
	},
	{
		id: 3,
		image: "/images/offers/top/offerta-3.jpg",
		alt: "Offerta 3",
	},
	{
		id: 4,
		image: "/images/offers/top/offerta-4.jpg",
		alt: "Offerta 4",
	},
];

export function FlyerSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [currentFlyer, setCurrentFlyer] = useState<Flyer | null>(null);

	const flyerDates = currentFlyer
		? getPromoDateLabel(currentFlyer)
		: "Promozioni attive";

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % topOffers.length);
		}, 3000);

		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		let isMounted = true;

		async function loadCurrentFlyer() {
			try {
				const response = await fetch("/api/flyers?store=all", {
					cache: "no-store",
				});

				if (!response.ok) return;

				const data = await response.json();

				if (isMounted) {
					setCurrentFlyer(data.current ?? null);
				}
			} catch (error) {
				console.error(error);
			}
		}

		loadCurrentFlyer();

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<section id="volantino" className="bg-transparent py-16 lg:py-20">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				<div className="mb-10 max-w-3xl">
					<div className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#EF3D32]">
						Volantino attivo
					</div>

					<h2 className="font-heading mt-3 text-4xl font-extrabold leading-[0.96] tracking-[-0.03em] text-[#0B3B82] md:text-5xl">
						4 Offerte Top
					</h2>

					<p className="mt-4 text-lg leading-8 text-slate-700">
						Una selezione delle offerte principali del volantino Market Ingross.
					</p>

					<div className="mt-5 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
						{flyerDates}
					</div>
				</div>

				<div className="grid items-start gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
					{/* SINISTRA */}
					<div className="mi-card p-4">
						<div className="mb-4 font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-[#0B3B82]">
							Offerte in Evidenza
						</div>

						<div className="grid grid-cols-2 gap-3">
							{topOffers.map((offer, index) => {
								const isActive = index === activeIndex;

								return (
									<button
										key={offer.id}
										type="button"
										onClick={() => setActiveIndex(index)}
										className={`overflow-hidden rounded-2xl border bg-white text-left transition duration-300 ${
											isActive
												? "border-[#EF3D32] ring-2 ring-[#EF3D32]/20"
												: "border-slate-200 hover:border-[#0B3B82]/25"
										}`}
									>
										<div className="relative aspect-[3/4] w-full bg-slate-100">
											<Image
												src={offer.image}
												alt={offer.alt}
												fill
												className="object-cover"
											/>
										</div>
									</button>
								);
							})}
						</div>
					</div>

					{/* DESTRA */}
					<div className="mi-card p-5">
						<div className="mb-5 flex items-start justify-between gap-4">
							<div>
								<div className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#EF3D32]">
									Promo in evidenza
								</div>

								<h3 className="font-heading mt-2 text-[1.9rem] font-extrabold leading-tight tracking-[-0.03em] text-[#0B3B82] md:text-[2.25rem]">
									Le Migliori Offerte del Momento
								</h3>
							</div>

							<div className="font-heading rounded-full bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-500">
								{activeIndex + 1} / {topOffers.length}
							</div>
						</div>

								<div className="rounded-[24px] bg-white/35 p-4 backdrop-blur-[1px]">
							<div className="mx-auto max-w-[520px] overflow-hidden rounded-[22px] bg-white shadow-sm ring-1 ring-black/5">
								<div
									className="flex transition-transform duration-700 ease-out"
									style={{ transform: `translateX(-${activeIndex * 100}%)` }}
								>
									{topOffers.map((offer) => (
										<div
											key={offer.id}
											className="relative aspect-[4/5] min-w-full bg-white"
										>
											<Image
												src={offer.image}
												alt={offer.alt}
												fill
												priority={offer.id === 1}
												className="object-contain p-4"
											/>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="mt-6 flex justify-center lg:justify-end">
							<Link
								href="/volantino"
								className="font-heading rounded-xl bg-[#EF3D32] px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.04em] text-white transition hover:opacity-90"
							>
								Apri il volantino
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
