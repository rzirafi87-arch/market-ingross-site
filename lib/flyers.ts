import type { Flyer } from "@/data/flyers";

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

export function formatLongDate(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00`);
  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

export function getPromoDateLabel(flyer: Flyer): string {
  if (flyer.promoLabel) return flyer.promoLabel;

  const start = new Date(`${flyer.startDate}T00:00:00`);
  const end = new Date(`${flyer.endDate}T00:00:00`);

  return `Promozioni attive dal ${pad(start.getDate())}/${pad(
    start.getMonth() + 1
  )} al ${pad(end.getDate())}/${pad(end.getMonth() + 1)}`;
}
