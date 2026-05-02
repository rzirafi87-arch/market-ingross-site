export function FeatureStrip() {
  const features = [
    {
      title: "Offerte ogni settimana",
      description: "Nuove promozioni tutte le settimane.",
    },
    {
      title: "Reparti freschi",
      description: "Qualità e freschezza ogni giorno.",
    },
    {
      title: "Community e WhatsApp",
      description: "Offerte e assistenza sempre a portata di mano.",
    },
  ];

  return (
    <section className="bg-transparent py-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="mi-card-gold p-6"
            >
              <h3 className="font-heading text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#0B3B82]">
                {feature.title}
              </h3>
              <p className="mt-3 text-slate-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
