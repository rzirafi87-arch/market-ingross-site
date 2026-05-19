export default function NuovaAperturaRagusaPage() {
  return (
    <main className="min-h-screen bg-[#f4d51f] px-4 py-12">
      <section className="mx-auto max-w-5xl rounded-[32px] bg-white p-6 shadow-xl md:p-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-600">
          News e aperture
        </p>
        <h1 className="mb-4 text-3xl font-extrabold text-[#063b78] md:text-5xl">
          Nuova apertura Market Ingross a Ragusa
        </h1>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-700">
          Grande apertura del nuovo punto vendita Market Ingross a Ragusa. Scopri il nostro supermercato.
        </p>
        <div className="overflow-hidden rounded-[24px] shadow-lg">
          <div className="aspect-video w-full flex items-center justify-center bg-slate-200 text-slate-400 text-3xl">
            <span>Video non disponibile</span>
          </div>
        </div>
        <div className="mt-8 rounded-2xl bg-[#fff7c7] p-5">
          <h2 className="mb-2 text-2xl font-extrabold text-[#063b78]">
            Punto vendita di Ragusa
          </h2>
          <p className="text-slate-700">📍 Ragusa</p>
          <p className="mt-2 text-slate-700">
            Ti aspettiamo con tante offerte, reparti freschi e tutto il risparmio Market Ingross.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/punti-vendita"
            className="rounded-xl bg-[#063b78] px-6 py-3 font-bold text-white shadow-md transition hover:scale-105"
          >
            Trova il punto vendita
          </a>
        </div>
        <div className="mt-8 text-sm text-slate-500">Data apertura: 04/12/2025</div>
      </section>
    </main>
  );
}