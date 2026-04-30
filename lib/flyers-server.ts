import fs from "fs";
import path from "path";
import type { Flyer, StoreSlug } from "@/data/flyers";

const FLYERS_DIR = path.join(process.cwd(), "private", "flyers");

const STORE_LABELS: Record<Exclude<StoreSlug, "all">, string> = {
  agrigento: "Agrigento",
  canicatti: "Canicattì",
  castelvetrano: "Castelvetrano",
  gela: "Gela",
  ispica: "Ispica",
  ragusa: "Ragusa",
  rosolini: "Rosolini",
  vittoria: "Vittoria",
};

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

function toIsoDate(year: number, month: number, day: number): string {
  return `${year}-${pad(month)}-${pad(day)}`;
}

function formatPromoLabel(startDay: number, startMonth: number, endDay: number, endMonth: number): string {
  return `Promozioni attive dal ${pad(startDay)}/${pad(startMonth)} al ${pad(endDay)}/${pad(endMonth)}`;
}

function normalizeStore(raw: string): StoreSlug | null {
  const cleaned = raw.toLowerCase().trim();

  if (cleaned === "generale") return "all";
  if (cleaned === "agrigento") return "agrigento";
  if (cleaned === "canicatti") return "canicatti";
  if (cleaned === "castelvetrano") return "castelvetrano";
  if (cleaned === "gela") return "gela";
  if (cleaned === "ispica") return "ispica";
  if (cleaned === "ragusa") return "ragusa";
  if (cleaned === "rosolini") return "rosolini";
  if (cleaned === "vittoria") return "vittoria";

  return null;
}

function parseFlyerFileName(fileName: string, baseYear: number): Flyer | null {
  const match = fileName.match(
    /^volantino-([a-z0-9-]+)-(\d{2})-(\d{2})-(\d{2})-(\d{2})\.pdf$/i
  );

  if (!match) return null;

  const [, rawStore, startDayStr, startMonthStr, endDayStr, endMonthStr] = match;

  const store = normalizeStore(rawStore);
  if (!store) return null;

  const startDay = Number(startDayStr);
  const startMonth = Number(startMonthStr);
  const endDay = Number(endDayStr);
  const endMonth = Number(endMonthStr);

  let startYear = baseYear;
  let endYear = baseYear;

  if (endMonth < startMonth) {
    endYear = baseYear + 1;
  }

  const startDate = toIsoDate(startYear, startMonth, startDay);
  const endDate = toIsoDate(endYear, endMonth, endDay);

  const idPrefix = store === "all" ? "generale" : store;
  const id = `${idPrefix}-${startYear}-${pad(startMonth)}-${pad(startDay)}`;

  const title =
    store === "all"
      ? "Volantino Market Ingross"
      : `Volantino ${STORE_LABELS[store]}`;

  const description =
    store === "all"
      ? "Promozioni valide in tutti i punti vendita aderenti."
      : `Offerte dedicate al punto vendita di ${STORE_LABELS[store]}.`;

  return {
    id,
    title,
    fileName,
    startDate,
    endDate,
    promoLabel: formatPromoLabel(startDay, startMonth, endDay, endMonth),
    stores: [store],
    description,
    priority: store === "all" ? 1 : 10,
  };
}

function sortFlyers(flyers: Flyer[]): Flyer[] {
  return [...flyers].sort((a, b) => {
    const priorityDiff = (b.priority ?? 0) - (a.priority ?? 0);
    if (priorityDiff !== 0) return priorityDiff;
    return b.startDate.localeCompare(a.startDate);
  });
}

export function getAllFlyersFromDisk(referenceDate = new Date()): Flyer[] {
  if (!fs.existsSync(FLYERS_DIR)) return [];

  const baseYear = referenceDate.getFullYear();

  const files = fs
    .readdirSync(FLYERS_DIR)
    .filter((file) => file.toLowerCase().endsWith(".pdf"));

  const flyers = files
    .map((file) => parseFlyerFileName(file, baseYear))
    .filter((item): item is Flyer => item !== null);

  return sortFlyers(flyers);
}

function isCurrentFlyer(flyer: Flyer, todayIso: string): boolean {
  return flyer.startDate <= todayIso && flyer.endDate >= todayIso;
}

function isFutureFlyer(flyer: Flyer, todayIso: string): boolean {
  return flyer.startDate > todayIso;
}

function getItalianTodayIso(referenceDate = new Date()): string {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Rome",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return formatter.format(referenceDate);
}

export function getCurrentFlyerForStoreFromDisk(
  store: StoreSlug,
  referenceDate = new Date()
): Flyer | null {
  const todayIso = getItalianTodayIso(referenceDate);
  const flyers = getAllFlyersFromDisk(referenceDate);

  if (store === "all") {
    return (
      flyers.find((flyer) => flyer.stores.includes("all") && isCurrentFlyer(flyer, todayIso)) ??
      null
    );
  }

  const exactStore = flyers.find(
    (flyer) =>
      flyer.stores.includes(store) &&
      !flyer.stores.includes("all") &&
      isCurrentFlyer(flyer, todayIso)
  );

  if (exactStore) return exactStore;

  return (
    flyers.find((flyer) => flyer.stores.includes("all") && isCurrentFlyer(flyer, todayIso)) ??
    null
  );
}

export function getNextFlyerForStoreFromDisk(
  store: StoreSlug,
  referenceDate = new Date()
): Flyer | null {
  const todayIso = getItalianTodayIso(referenceDate);
  const flyers = getAllFlyersFromDisk(referenceDate);

  if (store === "all") {
    return (
      flyers
        .filter((flyer) => flyer.stores.includes("all") && isFutureFlyer(flyer, todayIso))
        .sort((a, b) => a.startDate.localeCompare(b.startDate))[0] ?? null
    );
  }

  const exactStore = flyers
    .filter(
      (flyer) =>
        flyer.stores.includes(store) &&
        !flyer.stores.includes("all") &&
        isFutureFlyer(flyer, todayIso)
    )
    .sort((a, b) => a.startDate.localeCompare(b.startDate))[0];

  if (exactStore) return exactStore;

  return (
    flyers
      .filter((flyer) => flyer.stores.includes("all") && isFutureFlyer(flyer, todayIso))
      .sort((a, b) => a.startDate.localeCompare(b.startDate))[0] ?? null
  );
}

export function getFlyerByIdFromDisk(id: string, referenceDate = new Date()): Flyer | null {
  const flyers = getAllFlyersFromDisk(referenceDate);
  return flyers.find((flyer) => flyer.id === id) ?? null;
}
