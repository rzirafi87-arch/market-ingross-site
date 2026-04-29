import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { getFlyerByIdFromDisk } from "@/lib/flyers-server";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;

    const flyer = getFlyerByIdFromDisk(id);

    if (!flyer) {
      return NextResponse.json(
        { error: `Volantino non trovato per id: ${id}` },
        { status: 404 }
      );
    }

    const filePath = path.join(process.cwd(), "private", "flyers", flyer.fileName);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: `PDF non trovato: ${flyer.fileName}` },
        { status: 404 }
      );
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${flyer.fileName}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Errore API flyer:", error);

    return NextResponse.json(
      { error: "Errore interno durante il caricamento del volantino" },
      { status: 500 }
    );
  }
}