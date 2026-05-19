import "server-only";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type WhistleblowingReportInput = {
  tipoUtente: string;
  sintesi: string;
  dettaglio: string;
  luogoFatti: string;
  quandoFatti: string;
  coinvolgimento: string;
  proveSupporto: "Si" | "No";
  segnalatoAltrove: "Si" | "No";
  risultatoAtteso: string;
};

export type WhistleblowingReport = WhistleblowingReportInput & {
  receiptCode: string;
  status: string;
  createdAt: string;
};

type ReportStore = {
  reports: WhistleblowingReport[];
};

const STORE_DIR = path.join(process.cwd(), "private", "whistleblowing");
const STORE_FILE = path.join(STORE_DIR, "reports.json");

async function readStore(): Promise<ReportStore> {
  try {
    const raw = await readFile(STORE_FILE, "utf-8");
    const parsed = JSON.parse(raw) as ReportStore;
    return {
      reports: Array.isArray(parsed.reports) ? parsed.reports : [],
    };
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === "ENOENT") {
      return { reports: [] };
    }
    throw error;
  }
}

async function writeStore(store: ReportStore) {
  await mkdir(STORE_DIR, { recursive: true });
  await writeFile(STORE_FILE, JSON.stringify(store, null, 2), "utf-8");
}

function generateReceiptCode() {
  const timePart = Date.now().toString(36).toUpperCase();
  const randomPart = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `WB-${timePart}-${randomPart}`;
}

export async function createWhistleblowingReport(
  input: WhistleblowingReportInput,
): Promise<WhistleblowingReport> {
  const store = await readStore();

  const report: WhistleblowingReport = {
    ...input,
    receiptCode: generateReceiptCode(),
    status: "Ricevuta generata",
    createdAt: new Date().toISOString(),
  };

  store.reports.unshift(report);
  await writeStore(store);

  return report;
}

export async function getWhistleblowingReportByReceipt(receiptCode: string) {
  const normalizedCode = receiptCode.trim().toUpperCase();
  const store = await readStore();

  return (
    store.reports.find(
      (report) => report.receiptCode.trim().toUpperCase() === normalizedCode,
    ) ?? null
  );
}
