import { NextResponse } from "next/server";
import type { StoreSlug } from "@/data/flyers";
import {
  getAllFlyersFromDisk,
  getCurrentFlyerForStoreFromDisk,
  getNextFlyerForStoreFromDisk,
} from "@/lib/flyers-server";

function isStoreSlug(value: string | null): value is StoreSlug {
  return (
    value === "all" ||
    value === "agrigento" ||
    value === "canicatti" ||
    value === "castelvetrano" ||
    value === "gela" ||
    value === "ispica" ||
    value === "ragusa" ||
    value === "rosolini" ||
    value === "vittoria"
  );
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const storeParam = url.searchParams.get("store");
    const store: StoreSlug = isStoreSlug(storeParam) ? storeParam : "all";

    const flyers = getAllFlyersFromDisk();
    const current = getCurrentFlyerForStoreFromDisk(store);
    const next = getNextFlyerForStoreFromDisk(store);

    return NextResponse.json({
      store,
      flyers,
      current,
      next,
    });
  } catch (error) {
    console.error("Errore API elenco flyer:", error);

    return NextResponse.json(
      { error: "Errore interno durante il caricamento dei volantini" },
      { status: 500 }
    );
  }
}
