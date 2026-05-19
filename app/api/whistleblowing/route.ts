import { NextResponse } from "next/server";
import {
  createWhistleblowingReport,
  getWhistleblowingReportByReceipt,
  type WhistleblowingReportInput,
} from "@/lib/whistleblowing";

const WHISTLEBLOWING_EMAIL = "whistleblowing@inserire-mail.it";

function textOrEmpty(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asYesNo(value: unknown): "Si" | "No" | null {
  return value === "Si" || value === "No" ? value : null;
}

function buildMailtoLink(report: {
  receiptCode: string;
  tipoUtente: string;
  sintesi: string;
  dettaglio: string;
  luogoFatti: string;
  quandoFatti: string;
  coinvolgimento: string;
  proveSupporto: "Si" | "No";
  segnalatoAltrove: "Si" | "No";
  risultatoAtteso: string;
}) {
  const subject = `Segnalazione Whistleblowing - ${report.receiptCode}`;
  const body = [
    `Codice ricevuta: ${report.receiptCode}`,
    "",
    `Tipo utente: ${report.tipoUtente}`,
    `Sintesi: ${report.sintesi}`,
    `Dettaglio: ${report.dettaglio}`,
    `Dove sono avvenuti i fatti: ${report.luogoFatti}`,
    `Quando sono avvenuti i fatti: ${report.quandoFatti}`,
    `Coinvolgimento: ${report.coinvolgimento}`,
    `Prove a supporto: ${report.proveSupporto}`,
    `Segnalato ad altre organizzazioni/individui: ${report.segnalatoAltrove}`,
    `Risultato atteso: ${report.risultatoAtteso}`,
  ].join("\n");

  return `mailto:${WHISTLEBLOWING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<WhistleblowingReportInput>;

    const tipoUtente = textOrEmpty(payload.tipoUtente);
    const sintesi = textOrEmpty(payload.sintesi);
    const dettaglio = textOrEmpty(payload.dettaglio);
    const luogoFatti = textOrEmpty(payload.luogoFatti);
    const quandoFatti = textOrEmpty(payload.quandoFatti);
    const coinvolgimento = textOrEmpty(payload.coinvolgimento);
    const proveSupporto = asYesNo(payload.proveSupporto);
    const segnalatoAltrove = asYesNo(payload.segnalatoAltrove);
    const risultatoAtteso = textOrEmpty(payload.risultatoAtteso);

    if (
      !tipoUtente ||
      !sintesi ||
      !dettaglio ||
      !luogoFatti ||
      !quandoFatti ||
      !coinvolgimento ||
      !proveSupporto ||
      !segnalatoAltrove ||
      !risultatoAtteso
    ) {
      return NextResponse.json(
        { error: "Compila tutti i campi obbligatori." },
        { status: 400 },
      );
    }

    const report = await createWhistleblowingReport({
      tipoUtente,
      sintesi,
      dettaglio,
      luogoFatti,
      quandoFatti,
      coinvolgimento,
      proveSupporto,
      segnalatoAltrove,
      risultatoAtteso,
    });

    return NextResponse.json({
      receiptCode: report.receiptCode,
      status: report.status,
      mailtoHref: buildMailtoLink(report),
      email: WHISTLEBLOWING_EMAIL,
    });
  } catch {
    return NextResponse.json(
      { error: "Errore durante l'invio della segnalazione." },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const receiptCode = textOrEmpty(searchParams.get("ricevuta"));

  if (!receiptCode) {
    return NextResponse.json(
      { error: "Codice ricevuta mancante." },
      { status: 400 },
    );
  }

  const report = await getWhistleblowingReportByReceipt(receiptCode);

  if (!report) {
    return NextResponse.json(
      { error: "Ricevuta non trovata." },
      { status: 404 },
    );
  }

  return NextResponse.json({
    receiptCode: report.receiptCode,
    status: report.status,
    createdAt: report.createdAt,
  });
}
