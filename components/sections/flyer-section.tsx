"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Flyer } from "@/data/flyers";
import { topOffersData } from "@/data/top-offers";
import { getPromoDateLabel } from "../../lib/flyers";

export function FlyerSection() {
	const topOffers = topOffersData.items;
	const [activeIndex, setActiveIndex] = useState(0);
	const [currentFlyer, setCurrentFlyer] = useState<Flyer | null>(null);
	const activeOffer = topOffers[activeIndex] ?? topOffers[0];

	useEffect(() => {
		if (activeIndex >= topOffers.length) {
			setActiveIndex(0);
		}
	}, [activeIndex, topOffers.length]);

	const flyerDates = currentFlyer
		? getPromoDateLabel(currentFlyer)
		: "Promozioni attive";

	useEffect(() => {
		if (!topOffers.length) return;

		const timer = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % topOffers.length);
		}, 3000);

		return () => clearInterval(timer);
	}, [topOffers.length]);

	if (!topOffers.length) return null;

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
						{topOffers.length} Offerte Top
					</h2>

					<p className="mt-4 text-lg leading-8 text-slate-700">
						Una selezione delle offerte principali del volantino Market Ingross.
					</p>

					<div className="mt-5 inline-flex rounded-full border border-slate-200 bg-[var(--mi-card)] px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
						{flyerDates}
					</div>
				</div>

				<div className="grid items-start gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
					{/* SINISTRA */}
					<div className="mi-card p-4">
						<div className="mb-4 font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-[#0B3B82]">
							Articoli promo
						</div>

						<div className="grid grid-cols-2 gap-3">
							{topOffers.map((offer, index) => {
								const isActive = index === activeIndex;

								return (
									<button
										key={offer.id}
										type="button"
										onClick={() => setActiveIndex(index)}
										className={`relative overflow-hidden rounded-2xl border bg-white text-left transition duration-300 ${
											isActive
												? "border-[#EF3D32] ring-2 ring-[#EF3D32]/20"
												: "border-slate-200 hover:border-[#0B3B82]/25"
										}`}
									>
										<div className="relative aspect-[4/5] w-full bg-[var(--mi-card-soft)]">
											<Image
												src={offer.thumbnailImage}
												alt={offer.alt}
												fill
												sizes="(max-width: 1024px) 45vw, 140px"
												className="object-contain p-2"
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
									<div className="mi-panel mx-auto max-w-[520px] overflow-hidden rounded-[22px] bg-[var(--mi-card-soft)]">
										<div className="relative aspect-[4/5] w-full">
											<Image
												src={activeOffer.productImage}
												alt={activeOffer.alt}
												fill
												priority={activeIndex === 0}
												sizes="(max-width: 1024px) 88vw, 520px"
												className="object-contain p-4"
											/>
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
