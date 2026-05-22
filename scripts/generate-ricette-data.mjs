import fs from "node:fs";
import path from "node:path";
import XLSX from "xlsx";

const cwd = process.cwd();
const ricetteDir = path.join(cwd, "data", "ricette");
const excelPath = path.join(ricetteDir, "Calendario_Ricette_Market_Ingross.xlsx");
const jsonPath = path.join(ricetteDir, "calendario-ricette.json");
const tsPath = path.join(ricetteDir, "ricette.ts");

const VALUE_TYPES = "string | number | boolean | null";
const IT_MONTHS = [
  "gennaio",
  "febbraio",
  "marzo",
  "aprile",
  "maggio",
  "giugno",
  "luglio",
  "agosto",
  "settembre",
  "ottobre",
  "novembre",
  "dicembre",
];
const MONTH_INDEX_BY_NAME = new Map(IT_MONTHS.map((month, index) => [month, index]));

function slugifyHeader(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .replace(/_{2,}/g, "_");
}

function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value) {
  return normalizeText(value)
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stringifyCell(value) {
  if (value === undefined || value === null) {
    return null;
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
  }

  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return value;
  }

  const normalized = String(value).trim();
  return normalized.length > 0 ? normalized : null;
}

function readExcelRows(filePath) {
  const workbook = XLSX.readFile(filePath, {
    cellDates: true,
    raw: true,
    dense: true,
  });

  const sheetName = selectBestSheet(workbook);
  if (!sheetName) {
    throw new Error("Excel file does not contain a usable sheet.");
  }

  const sheet = workbook.Sheets[sheetName];
  const matrix = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    defval: null,
    raw: true,
    blankrows: false,
  });

  if (!Array.isArray(matrix) || matrix.length < 2) {
    throw new Error("Selected sheet does not contain data rows.");
  }

  const headerRow = matrix[0];
  const usedKeys = new Map();
  const headers = headerRow.map((item, index) => {
    const base = slugifyHeader(item) || `colonna_${index + 1}`;
    const count = usedKeys.get(base) ?? 0;
    usedKeys.set(base, count + 1);
    return count === 0 ? base : `${base}_${count + 1}`;
  });

  const rows = [];
  for (let rowIndex = 1; rowIndex < matrix.length; rowIndex += 1) {
    const row = matrix[rowIndex] ?? [];
    const entry = {};
    let hasValue = false;

    for (let colIndex = 0; colIndex < headers.length; colIndex += 1) {
      const key = headers[colIndex];
      const value = stringifyCell(row[colIndex]);
      entry[key] = value;
      if (value !== null) {
        hasValue = true;
      }
    }

    if (hasValue) {
      rows.push(entry);
    }
  }

  return {
    sheetName,
    headers,
    rows,
  };
}

function selectBestSheet(workbook) {
  const avoidName = /(readme|dashboard|istruzioni|notes?)/i;
  const preferredHeader = /(mese|settimana|data|ricetta|stato|slug|categoria)/i;

  let best = null;

  for (const name of workbook.SheetNames) {
    const sheet = workbook.Sheets[name];
    const matrix = XLSX.utils.sheet_to_json(sheet, {
      header: 1,
      defval: null,
      raw: true,
      blankrows: false,
    });

    if (!Array.isArray(matrix) || matrix.length < 2) {
      continue;
    }

    const headerRow = matrix[0] ?? [];
    const headers = headerRow
      .map((cell) => String(cell ?? "").trim())
      .filter(Boolean);
    const dataRows = matrix.slice(1).filter((row) =>
      Array.isArray(row) && row.some((cell) => stringifyCell(cell) !== null),
    ).length;

    if (headers.length === 0 || dataRows === 0) {
      continue;
    }

    let score = dataRows * Math.max(headers.length, 1);
    if (avoidName.test(name)) {
      score -= 1000;
    }

    const preferredHits = headers.filter((header) => preferredHeader.test(header)).length;
    score += preferredHits * 25;

    if (!best || score > best.score) {
      best = { name, score };
    }
  }

  return best?.name ?? null;
}

function writeOutputs(data) {
  fs.mkdirSync(ricetteDir, { recursive: true });

  const ricetteMonthBySlug = {};
  const ricetteMonthIndexBySlug = {};

  for (const row of data.rows) {
    const rawMonth = typeof row.mese === "string" ? row.mese : "";
    const rawRecipe = typeof row.ricetta === "string" ? row.ricetta : "";
    const monthName = normalizeText(rawMonth);
    const recipeSlug = slugify(rawRecipe);
    const monthIndex = MONTH_INDEX_BY_NAME.get(monthName);

    if (!recipeSlug || monthIndex === undefined) {
      continue;
    }

    if (ricetteMonthBySlug[recipeSlug] === undefined) {
      ricetteMonthBySlug[recipeSlug] = monthName;
      ricetteMonthIndexBySlug[recipeSlug] = monthIndex;
    }
  }

  fs.writeFileSync(jsonPath, `${JSON.stringify(data.rows, null, 2)}\n`, "utf8");

  const tsContent = [
    "// AUTO-GENERATED FILE. Do not edit manually.",
    `// Source: data/ricette/${path.basename(excelPath)}`,
    "",
    `export type RicettaRow = Record<string, ${VALUE_TYPES}>;`,
    "",
    `export const ricetteHeaders = ${JSON.stringify(data.headers, null, 2)} as const;`,
    "",
    `export const ricetteData: RicettaRow[] = ${JSON.stringify(data.rows, null, 2)};`,
    "",
    `export const ricetteMonthBySlug: Record<string, string> = ${JSON.stringify(ricetteMonthBySlug, null, 2)};`,
    "",
    `export const ricetteMonthIndexBySlug: Record<string, number> = ${JSON.stringify(ricetteMonthIndexBySlug, null, 2)};`,
    "",
    "export default ricetteData;",
    "",
  ].join("\n");

  fs.writeFileSync(tsPath, tsContent, "utf8");
}

function main() {
  if (!fs.existsSync(excelPath)) {
    throw new Error(`Excel file not found: ${excelPath}`);
  }

  const data = readExcelRows(excelPath);
  writeOutputs(data);

  console.log(`Ricette generated from ${path.relative(cwd, excelPath)}`);
  console.log(`- ${path.relative(cwd, jsonPath)}`);
  console.log(`- ${path.relative(cwd, tsPath)}`);
  console.log(`Imported rows: ${data.rows.length}`);
  console.log(`Selected sheet: ${data.sheetName}`);
}

main();
