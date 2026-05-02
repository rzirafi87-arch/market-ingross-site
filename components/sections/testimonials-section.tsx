const testimonials = [
	{
		name: "Giulia M.",
		text: "Sempre forniti, personale gentile e offerte davvero convenienti.",
	},
	{
		name: "Salvatore R.",
		text: "Reparti freschi di qualità e tanta scelta. Bravi.",
	},
	{
		name: "Anna P.",
		text: "Pulito, ordinato e con prezzi imbattibili. Consigliatissimo.",
	},
];

export function TestimonialsSection() {
	return (
		<section className="bg-transparent py-16">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				<div className="text-center">
					<h2 className="font-heading text-4xl font-extrabold text-[#0B3B82]">
						Dicono di noi
					</h2>
				</div>

				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{testimonials.map((item) => (
						<div key={item.name} className="mi-card rounded-3xl p-6">
							<div className="h-14 w-14 rounded-full bg-slate-200" />
							<p className="mt-4 leading-7 text-slate-600">“{item.text}”</p>
							<div className="font-heading mt-4 font-bold text-[#0B3B82]">{item.name}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
