export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96)_0%,rgba(244,213,31,0.16)_42%,rgba(11,59,130,0.05)_100%)]" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="min-h-[42vh] rounded-[36px] border border-white/70 bg-white/45 px-7 py-14 shadow-[0_24px_70px_rgba(11,59,130,0.10)] backdrop-blur-sm sm:px-10 lg:px-14 lg:py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <h1 className="font-heading max-w-4xl text-5xl font-extrabold leading-[0.92] tracking-[-0.05em] text-[#0B3B82] md:text-7xl">
              Vivi <span className="text-[#f4d51f]">Market Ingross</span> ogni giorno
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              Persone, reparti freschi e convenienza quotidiana nei nostri punti vendita in Sicilia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
