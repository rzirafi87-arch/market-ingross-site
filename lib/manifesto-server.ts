import fs from "fs";
import path from "path";

const BRAND_IMAGES_DIR = path.join(process.cwd(), "public", "images", "brand");
const MANIFESTO_PREFIX = "manifesto-6x3-";

type ManifestoAsset = {
  fileName: string;
  imagePath: string;
  startDate: string;
  endDate: string;
};

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

function toIsoDate(year: number, month: number, day: number): string {
  return `${year}-${pad(month)}-${pad(day)}`;
}

function getItalianTodayIso(referenceDate = new Date()): string {
  const formatter = new Intl.DateTimeFormat("it-IT", {
    timeZone: "Europe/Rome",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const parts = formatter.formatToParts(referenceDate);
  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  if (!year || !month || !day) {
    return toIsoDate(
      referenceDate.getUTCFullYear(),
      referenceDate.getUTCMonth() + 1,
      referenceDate.getUTCDate()
    );
  }

  return `${year}-${month}-${day}`;
}

function parseManifestoFileName(fileName: string, baseYear: number): ManifestoAsset | null {
  const match = fileName.match(/^manifesto-6x3-(\d{2})-(\d{2})-(\d{2})-(\d{2})\.(jpg|jpeg|png|webp)$/i);

  if (!match) return null;

  const [, startDayStr, startMonthStr, endDayStr, endMonthStr] = match;
  const startDay = Number(startDayStr);
  const startMonth = Number(startMonthStr);
  const endDay = Number(endDayStr);
  const endMonth = Number(endMonthStr);

  const startYear = baseYear;
  let endYear = baseYear;

  if (endMonth < startMonth) {
    endYear = baseYear + 1;
  }

  return {
    fileName,
    imagePath: `/images/brand/${fileName}`,
    startDate: toIsoDate(startYear, startMonth, startDay),
    endDate: toIsoDate(endYear, endMonth, endDay),
  };
}

function getManifestiFromDisk(referenceDate = new Date()): ManifestoAsset[] {
  if (!fs.existsSync(BRAND_IMAGES_DIR)) return [];

  const baseYear = referenceDate.getFullYear();
  const files = fs.readdirSync(BRAND_IMAGES_DIR);

  return files
    .filter((fileName) => fileName.toLowerCase().startsWith(MANIFESTO_PREFIX))
    .map((fileName) => parseManifestoFileName(fileName, baseYear))
    .filter((asset): asset is ManifestoAsset => asset !== null)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export function getActiveManifestoImageFromDisk(referenceDate = new Date()): string | null {
  const manifesti = getManifestiFromDisk(referenceDate);
  if (!manifesti.length) return null;

  const todayIso = getItalianTodayIso(referenceDate);

  const current = manifesti.find(
    (asset) => asset.startDate <= todayIso && asset.endDate >= todayIso
  );

  if (current) return current.imagePath;

  const next = manifesti.find((asset) => asset.startDate > todayIso);
  if (next) return next.imagePath;

  return manifesti[manifesti.length - 1]?.imagePath ?? null;
}
