import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";

const outputDir = path.join(process.cwd(), "public", "docs");
const outputFile = path.join(outputDir, "la-carne-spiegata-semplice.pdf");

fs.mkdirSync(outputDir, { recursive: true });

const doc = new PDFDocument({
  size: "A4",
  margin: 40,
  info: {
    Title: "La carne spiegata semplice",
    Author: "Market Ingross",
    Subject: "Guida ai tagli della carne",
  },
});

doc.pipe(fs.createWriteStream(outputFile));

const colors = {
  blue: "#0B3B82",
  red: "#EF3D32",
  green: "#0D7A3A",
  light: "#F8FAFC",
  text: "#1E293B",
  gray: "#64748B",
};

function sectionBox(y, borderColor, title, lines) {
  const x = 40;
  const w = 515;
  const h = 140;

  doc.save();
  doc.roundedRect(x, y, w, h, 12).lineWidth(1.5).stroke(borderColor);

  doc
    .font("Helvetica-Bold")
    .fillColor(borderColor)
    .fontSize(18)
    .text(title, x + 16, y + 14, { width: w - 32 });

  doc
    .font("Helvetica")
    .fillColor(colors.text)
    .fontSize(12)
    .text(lines.join("\n"), x + 16, y + 44, {
      width: w - 32,
      lineGap: 3,
    });

  doc.restore();
}

doc
doc
doc
doc

// Header con logo centrato
const logoPath = path.join(process.cwd(), "public", "images", "logo", "market-ingross-logo.png");
doc.image(logoPath, doc.page.width / 2 - 70, 24, { width: 140 });

doc
  .font("Helvetica-Bold")
  .fillColor(colors.green)
  .fontSize(16)
  .text("MARKET INGROSS CONSIGLIA", 0, 90, { align: "center", width: doc.page.width });

doc
  .font("Helvetica-Bold")
  .fillColor(colors.red)
  .fontSize(34)
  .text("LA CARNE", 0, 116, { align: "center", width: doc.page.width });

doc
  .font("Helvetica-Bold")
  .fillColor(colors.green)
  .fontSize(34)
  .text("SPIEGATA SEMPLICE", 0, 156, { align: "center", width: doc.page.width });

doc
  .font("Helvetica")
  .fillColor(colors.text)
  .fontSize(14)
  .text("Scegliere il taglio giusto è facile: basta sapere cosa vuoi cucinare.", 0, 200, {
    align: "center",
    width: doc.page.width,
  });

let yStart = 230;
sectionBox(yStart, colors.green, "1) Per cotture veloci", [
  "Tagli consigliati: filetto, controfiletto, costata, lombata, fesa, noce, scamone.",
  "Perfetti per: bistecca, fettina, padella, griglia.",
  "Regola facile: carne tenera = cottura veloce.",
]);

sectionBox(yStart + 152, colors.red, "2) Per cotture lente", [
  "Tagli consigliati: muscolo, reale, spalla, cappello del prete, punta di petto, biancostato.",
  "Perfetti per: spezzatino, bollito, brasato, ragu, brodo.",
  "Regola facile: carne più dura = cottura lenta = più sapore.",
]);


const tableY = 456;
doc.roundedRect(40, tableY, 515, 174, 12).lineWidth(1.5).stroke(colors.blue);
doc.rect(40, tableY, 515, 34).fill(colors.blue);
doc
  .font("Helvetica-Bold")
  .fillColor("#FFFFFF")
  .fontSize(15)
  .text("3) La scelta facile", 56, tableY + 10);

doc
  .font("Helvetica-Bold")
  .fillColor(colors.blue)
  .fontSize(11)
  .text("RICETTA", 56, tableY + 44)
  .text("CARNE CONSIGLIATA", 210, tableY + 44);

const rows = [
  ["Bistecca", "filetto, controfiletto, costata"],
  ["Fettina", "fesa, noce, scamone"],
  ["Spezzatino", "muscolo, reale, spalla"],
  ["Ragu", "macinato o tagli da cottura lunga"],
  ["Bollito", "biancostato, punta di petto, muscolo"],
  ["Griglia", "costata, salsiccia, hamburger, pollo ben cotto"],
];

let rowY = tableY + 62;
for (const [recipe, meat] of rows) {
  doc
    .moveTo(52, rowY - 6)
    .lineTo(543, rowY - 6)
    .lineWidth(0.5)
    .stroke("#CBD5E1");

  doc
    .font("Helvetica-Bold")
    .fillColor(colors.text)
    .fontSize(11)
    .text(recipe, 56, rowY);

  doc
    .font("Helvetica")
    .fillColor(colors.text)
    .fontSize(11)
    .text(meat, 210, rowY, { width: 330 });

  rowY += 22;
}

doc.roundedRect(40, 644, 250, 90, 12).lineWidth(1.3).stroke("#F59E0B");
doc
  .font("Helvetica-Bold")
  .fillColor("#B45309")
  .fontSize(19)
  .text("RICORDA", 56, 660);
doc
  .font("Helvetica")
  .fillColor(colors.text)
  .fontSize(12)
  .text("Non tutti i tagli sono uguali. Alcuni sono buoni con cottura breve, altri danno il meglio con cottura lunga.", 56, 686, {
    width: 220,
  });

doc.roundedRect(305, 644, 250, 90, 12).lineWidth(1.3).stroke(colors.blue);
doc
  .font("Helvetica-Bold")
  .fillColor(colors.blue)
  .fontSize(19)
  .text("SICUREZZA", 321, 660);
doc
  .font("Helvetica")
  .fillColor(colors.text)
  .fontSize(12)
  .text("Tieni la carne cruda separata dagli altri alimenti. Lava mani, coltello e tagliere dopo ogni contatto.", 321, 686, {
    width: 220,
  });

doc.roundedRect(40, 746, 515, 52, 12).lineWidth(1.4).stroke(colors.green);
doc
  .font("Helvetica-Bold")
  .fillColor(colors.green)
  .fontSize(15)
  .text("Consiglio Market Ingross", 56, 764);
doc
  .font("Helvetica")
  .fillColor(colors.text)
  .fontSize(12)
  .text("Al banco macelleria puoi chiedere il taglio giusto per la tua ricetta.", 240, 766, {
    width: 300,
    align: "right",
  });

doc
  .font("Helvetica-Bold")
  .fillColor(colors.gray)
  .fontSize(10)
  .text("Market Ingross - Il Re del Risparmio", 40, 812, { align: "center", width: 515 });

doc.end();
console.log(`PDF generato: ${outputFile}`);
