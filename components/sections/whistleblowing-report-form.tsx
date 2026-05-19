"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type FormState = {
  tipoUtente: string;
  sintesi: string;
  dettaglio: string;
  luogoFatti: string;
  quandoFatti: string;
  coinvolgimento: string;
  proveSupporto: "Si" | "No" | "";
  segnalatoAltrove: "Si" | "No" | "";
  risultatoAtteso: string;
};

type ApiSuccess = {
  receiptCode: string;
  status: string;
  mailtoHref: string;
  email: string;
};

const tipoUtenteOptions = [
  "Dipendente",
  "Altro",
  "Ex Dipendente",
  "Lavoratore Autonomo",
];

const coinvolgimentoOptions = [
  "Sono una vittima",
  "Sono coinvolto/a nei fatti",
  "Sono diretto/a testimone dei fatti in prima persona",
  "Mi è stato detto da un diretto testimone",
  "È una voce che ho sentito dire in giro",
];

const initialState: FormState = {
  tipoUtente: "",
  sintesi: "",
  dettaglio: "",
  luogoFatti: "",
  quandoFatti: "",
  coinvolgimento: "",
  proveSupporto: "",
  segnalatoAltrove: "",
  risultatoAtteso: "",
};

const fieldClassName =
  "w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0B3B82] focus:bg-white";

export function WhistleblowingReportForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ApiSuccess | null>(null);

  const statusLink = useMemo(() => {
    if (!result?.receiptCode) {
      return "";
    }

    return `/whistleblowing/stato?ricevuta=${encodeURIComponent(result.receiptCode)}`;
  }, [result?.receiptCode]);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setResult(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/whistleblowing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as ApiSuccess | { error?: string };

      if (!response.ok) {
        setError(payload.error ?? "Invio non riuscito. Riprova.");
        return;
      }

      const successPayload = payload as ApiSuccess;
      setResult(successPayload);

      if (typeof window !== "undefined") {
        window.location.href = successPayload.mailtoHref;
      }

      setForm(initialState);
    } catch {
      setError("Errore di rete durante l'invio. Riprova.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-4 md:grid-cols-3">
          <label className="md:col-span-1">
            <span className="mb-2 block text-sm font-bold text-slate-800">Tipo Utente *</span>
            <select
              className={fieldClassName}
              value={form.tipoUtente}
              onChange={(event) => updateField("tipoUtente", event.target.value)}
              required
            >
              <option value="">Seleziona</option>
              {tipoUtenteOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="md:col-span-1">
            <span className="mb-2 block text-sm font-bold text-slate-800">
              Descrivi in poche parole la tua segnalazione. *
            </span>
            <input
              className={fieldClassName}
              value={form.sintesi}
              onChange={(event) => updateField("sintesi", event.target.value)}
              required
            />
          </label>

          <label className="md:col-span-1">
            <span className="mb-2 block text-sm font-bold text-slate-800">
              Descrivi la tua segnalazione in dettaglio. *
            </span>
            <textarea
              className={`${fieldClassName} min-h-[74px]`}
              value={form.dettaglio}
              onChange={(event) => updateField("dettaglio", event.target.value)}
              required
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span className="mb-2 block text-sm font-bold text-slate-800">Dove sono avvenuti i fatti? *</span>
            <input
              className={fieldClassName}
              value={form.luogoFatti}
              onChange={(event) => updateField("luogoFatti", event.target.value)}
              required
            />
          </label>

          <label>
            <span className="mb-2 block text-sm font-bold text-slate-800">Quando sono avvenuti i fatti? *</span>
            <input
              className={fieldClassName}
              value={form.quandoFatti}
              onChange={(event) => updateField("quandoFatti", event.target.value)}
              required
            />
          </label>
        </div>

        <label>
          <span className="mb-2 block text-sm font-bold text-slate-800">
            Come sei coinvolto/a nel fatto segnalato? *
          </span>
          <select
            className={fieldClassName}
            value={form.coinvolgimento}
            onChange={(event) => updateField("coinvolgimento", event.target.value)}
            required
          >
            <option value="">Seleziona</option>
            {coinvolgimentoOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span className="mb-2 block text-sm font-bold text-slate-800">
              Hai delle prove a supporto della tua segnalazione? *
            </span>
            <select
              className={fieldClassName}
              value={form.proveSupporto}
              onChange={(event) =>
                updateField("proveSupporto", event.target.value as "Si" | "No" | "")
              }
              required
            >
              <option value="">Seleziona</option>
              <option value="Si">Sì</option>
              <option value="No">No</option>
            </select>
          </label>

          <label>
            <span className="mb-2 block text-sm font-bold text-slate-800">
              Hai segnalato i fatti ad altre organizzazioni o ad altri individui? *
            </span>
            <select
              className={fieldClassName}
              value={form.segnalatoAltrove}
              onChange={(event) =>
                updateField("segnalatoAltrove", event.target.value as "Si" | "No" | "")
              }
              required
            >
              <option value="">Seleziona</option>
              <option value="Si">Sì</option>
              <option value="No">No</option>
            </select>
          </label>
        </div>

        <label>
          <span className="mb-2 block text-sm font-bold text-slate-800">
            Qual è il risultato che vorresti ottenere con il nostro supporto? *
          </span>
          <textarea
            className={`${fieldClassName} min-h-[88px]`}
            value={form.risultatoAtteso}
            onChange={(event) => updateField("risultatoAtteso", event.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-[#0B3B82] px-6 py-3 text-sm font-black text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Invio in corso..." : "Invia"}
        </button>
      </form>

      {error && (
        <div className="rounded-xl border border-[#EF3D32]/30 bg-[#EF3D32]/10 px-4 py-3 text-sm text-[#7A1E1A]">
          {error}
        </div>
      )}

      {result && (
        <div className="rounded-2xl border border-emerald-300/70 bg-emerald-50 p-5 text-sm text-emerald-900">
          <p className="font-bold">Segnalazione registrata con successo.</p>
          <p className="mt-2">
            Codice ricevuta: <span className="font-black">{result.receiptCode}</span>
          </p>
          <p className="mt-2">
            Si è aperto il client email per l&apos;invio diretto a {result.email}. Dopo l&apos;invio,
            usa la ricevuta per controllare lo stato sul sito.
          </p>
          <div className="mt-3">
            <Link
              href={statusLink}
              className="inline-flex rounded-lg bg-emerald-700 px-4 py-2 font-semibold text-white"
            >
              Controlla stato ricevuta
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
