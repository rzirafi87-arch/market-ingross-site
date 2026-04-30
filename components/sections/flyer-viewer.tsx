"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  FaChevronLeft,
  FaChevronRight,
  FaFilePdf,
  FaSearchMinus,
  FaSearchPlus,
} from "react-icons/fa";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

type PdfLoadSuccess = {
  numPages: number;
};

type Spread = {
  left: number;
  right: number | null;
  isSingle: boolean;
  label: string;
};

type FlyerViewerProps = {
  pdfUrl: string;
};

function buildSpreads(totalPages: number): Spread[] {
  if (totalPages <= 0) return [];

  const spreads: Spread[] = [];

  spreads.push({
    left: 1,
    right: null,
    isSingle: true,
    label: "1",
  });

  for (let page = 2; page < totalPages; page += 2) {
    if (page + 1 < totalPages) {
      spreads.push({
        left: page,
        right: page + 1,
        isSingle: false,
        label: `${page}-${page + 1}`,
      });
    } else {
      spreads.push({
        left: page,
        right: null,
        isSingle: true,
        label: `${page}`,
      });
    }
  }

  if (totalPages > 1) {
    const alreadyIncluded = spreads.some(
      (spread) => spread.left === totalPages || spread.right === totalPages
    );

    if (!alreadyIncluded) {
      spreads.push({
        left: totalPages,
        right: null,
        isSingle: true,
        label: `${totalPages}`,
      });
    }
  }

  return spreads;
}

export function FlyerViewer({ pdfUrl }: FlyerViewerProps) {
  const [numPages, setNumPages] = useState(0);
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const [singlePageWidth, setSinglePageWidth] = useState(560);
  const [doublePageWidth, setDoublePageWidth] = useState(430);
  const [zoom, setZoom] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [currentMobilePage, setCurrentMobilePage] = useState(1);

  const viewerRef = useRef<HTMLDivElement>(null);

  const spreads = useMemo(() => buildSpreads(numPages), [numPages]);
  const currentSpread = spreads[currentSpreadIndex] ?? null;
  const mobileSpread = isMobile
    ? {
        left: currentMobilePage,
        right: null,
        isSingle: true,
        label: `${currentMobilePage}`,
      }
    : currentSpread;

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function updateWidth() {
      if (!viewerRef.current || !currentSpread) return;

      const containerWidth = viewerRef.current.clientWidth;

      if (currentSpread.isSingle) {
        const singleWidth = isMobile
          ? Math.min(containerWidth - 20, Math.floor(window.innerWidth * 0.7), 560)
          : Math.min(containerWidth - 44, 680);
        setSinglePageWidth(singleWidth > 240 ? singleWidth : 240);
      } else {
        const pageWidth = Math.min((containerWidth - 52) / 2, 420);
        setDoublePageWidth(pageWidth > 170 ? pageWidth : 170);
      }
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [currentSpread, isMobile]);

  useEffect(() => {
    if (!isMobile || !currentSpread) return;

    setCurrentMobilePage(currentSpread.left);
  }, [isMobile, currentSpread]);

  function onDocumentLoadSuccess({ numPages }: PdfLoadSuccess) {
    setNumPages(numPages);
    setCurrentSpreadIndex(0);
    setCurrentMobilePage(1);
  }

  function goPrev() {
    if (isMobile) {
      setCurrentMobilePage((prev) => Math.max(prev - 1, 1));
      return;
    }

    setCurrentSpreadIndex((prev) => Math.max(prev - 1, 0));
  }

  function goNext() {
    if (isMobile) {
      setCurrentMobilePage((prev) => Math.min(prev + 1, numPages));
      return;
    }

    setCurrentSpreadIndex((prev) => Math.min(prev + 1, spreads.length - 1));
  }

  function zoomOut() {
    setZoom((prev) => Math.max(0.7, Number((prev - 0.1).toFixed(1))));
  }

  function zoomIn() {
    setZoom((prev) => Math.min(2, Number((prev + 0.1).toFixed(1))));
  }

  function resetZoom() {
    setZoom(1);
  }

  const zoomPercent = Math.round(zoom * 100);
  const displayedSingleWidth = Math.round(singlePageWidth * zoom);
  const displayedDoubleWidth = Math.round(doublePageWidth * zoom * 1.05);
  const isAtStart = isMobile ? currentMobilePage <= 1 : currentSpreadIndex === 0;
  const isAtEnd = isMobile
    ? currentMobilePage >= numPages
    : currentSpreadIndex === spreads.length - 1;

  return (
    <div className="mx-auto w-full max-w-[980px]">
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="rounded-[30px] bg-white p-12 text-center text-lg font-medium text-slate-600 shadow-sm">
            Caricamento volantino...
          </div>
        }
        error={
          <div className="rounded-[30px] bg-white p-12 text-center text-lg font-medium text-red-600 shadow-sm">
            Errore nel caricamento del PDF.
          </div>
        }
      >
        <div className="mx-auto w-full max-w-[980px]">
          <div className="mx-auto w-full max-w-[960px] rounded-[30px] border border-black/10 bg-white p-4 shadow-[0_18px_45px_rgba(0,0,0,0.16)] md:p-6">
            <div
              ref={viewerRef}
              className={`relative flex items-center justify-center overflow-auto rounded-[26px] bg-slate-50 p-4 shadow-inner md:min-h-[560px] md:p-5 ${
                mobileSpread?.isSingle
                  ? "min-h-[520px]"
                  : "min-h-[520px]"
              }`}
            >
              <button
                onClick={goPrev}
                disabled={!currentSpread || isAtStart}
                className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/95 p-2.5 text-[#0B3B82] shadow-md ring-1 ring-black/5 transition hover:bg-[#0B3B82] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 sm:inline-flex sm:left-4 sm:p-3"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={goNext}
                disabled={!currentSpread || isAtEnd}
                className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/95 p-2.5 text-[#0B3B82] shadow-md ring-1 ring-black/5 transition hover:bg-[#0B3B82] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 sm:inline-flex sm:right-4 sm:p-3"
              >
                <FaChevronRight />
              </button>

              {!mobileSpread ? (
                <div className="text-slate-500">Caricamento pagine...</div>
              ) : mobileSpread.isSingle ? (
                <div className="flex w-full justify-center">
                  <div className="overflow-hidden rounded-[16px] bg-white shadow-xl ring-1 ring-black/5">
                    <Page
                      pageNumber={mobileSpread.left}
                      width={displayedSingleWidth}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex w-full items-start justify-center gap-0">
                  <div className="overflow-hidden rounded-l-[16px] bg-white shadow-xl ring-1 ring-black/5">
                    <Page
                      pageNumber={mobileSpread.left}
                      width={displayedDoubleWidth}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  </div>

                  <div className="relative z-10 w-[8px] self-stretch bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 shadow-inner md:w-[10px]" />

                  {mobileSpread.right && (
                    <div className="overflow-hidden rounded-r-[16px] bg-white shadow-xl ring-1 ring-black/5">
                      <Page
                        pageNumber={mobileSpread.right}
                        width={displayedDoubleWidth}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="mt-4 rounded-[22px] bg-white px-3 py-3 shadow-sm ring-1 ring-black/5 md:px-4 md:py-4">
              <div className="flex flex-col gap-3 md:gap-2.5">
                <div className="md:text-center">
                  <p className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">
                    Viewer volantino
                  </p>

                  <h2 className="font-heading mt-1 text-2xl font-extrabold leading-none text-[#0B3B82] md:text-xl lg:text-xl">
                    {mobileSpread
                      ? mobileSpread.isSingle
                        ? `Pagina ${mobileSpread.left}`
                        : `Pagine ${mobileSpread.left}-${mobileSpread.right}`
                      : "Caricamento..."}{" "}
                    <span className="text-slate-400">/ {numPages || "..."}</span>
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-2 md:justify-center">
                  <button
                    onClick={zoomOut}
                    disabled={zoom <= 0.7}
                    className="font-heading rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-[#0B3B82] transition hover:border-[#0B3B82] hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                    title="Riduci zoom"
                  >
                    <FaSearchMinus className="text-sm" />
                  </button>

                  <button
                    onClick={resetZoom}
                    className="font-heading rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2 text-sm font-bold text-[#0B3B82] transition hover:border-[#0B3B82]"
                    title="Reimposta zoom"
                  >
                    {zoomPercent}%
                  </button>

                  <button
                    onClick={zoomIn}
                    disabled={zoom >= 2}
                    className="font-heading rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-[#0B3B82] transition hover:border-[#0B3B82] hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                    title="Aumenta zoom"
                  >
                    <FaSearchPlus className="text-sm" />
                  </button>

                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-heading rounded-xl bg-[#EF3D32] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FaFilePdf className="text-sm" />
                      PDF
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-center gap-3 md:mt-2">
              <button
                onClick={goPrev}
                disabled={!currentSpread || isAtStart}
                className="font-heading rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-[#0B3B82] transition hover:border-[#0B3B82] hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span className="inline-flex items-center gap-2">
                  <FaChevronLeft className="text-xs" />
                  Precedente
                </span>
              </button>

              <div className="font-heading rounded-lg border border-slate-200 bg-slate-50/80 px-2.5 py-1.5 text-sm font-bold text-slate-600">
                {mobileSpread ? mobileSpread.label : "..."}
              </div>

              <button
                onClick={goNext}
                disabled={!currentSpread || isAtEnd}
                className="font-heading rounded-xl border border-[#0B3B82] px-4 py-2 text-sm font-semibold text-[#0B3B82] transition hover:bg-[#0B3B82] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span className="inline-flex items-center gap-2">
                  Successiva
                  <FaChevronRight className="text-xs" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </Document>
    </div>
  );
}
