export default function NuovaAperturaAgrigentoPage() {
  return (
    <main className="min-h-screen bg-[#f4d51f] px-4 py-12">
      <section className="mx-auto max-w-5xl rounded-[32px] bg-white p-6 shadow-xl md:p-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-600">
          News e aperture
        </p>
        <h1 className="mb-4 text-3xl font-extrabold text-[#063b78] md:text-5xl">
          Nuova apertura Market Ingross a Agrigento
        </h1>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-700">
          Grande apertura del nuovo punto vendita Market Ingross a Agrigento. Guarda il video della nuova apertura e scopri il nostro supermercato.
        </p>
        <div className="overflow-hidden rounded-[24px] shadow-lg">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/q7lQH4Gwl0g"
            title="Market Ingross - Nuova apertura Agrigento"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="mt-8 rounded-2xl bg-[#fff7c7] p-5">
          <h2 className="mb-2 text-2xl font-extrabold text-[#063b78]">
            Punto vendita di Agrigento
          </h2>
          <p className="text-slate-700">📍 Agrigento</p>
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
          <a
            href="/volantino/aperture/agrigento.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white shadow-md transition hover:scale-105"
          >
            Sfoglia il volantino
          </a>
        </div>
        <div className="mt-8 text-sm text-slate-500">Data apertura: 28/11/2024</div>
      </section>
    </main>
  );
}