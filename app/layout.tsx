import type { Metadata } from "next";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import { FloatingActions } from "@/components/layout/floating-actions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marketingross.it"),
  title: {
    default: "Market Ingross | Il Re del Risparmio",
    template: "%s | Market Ingross",
  },
  description:
    "Market Ingross: 9 supermercati in Sicilia, convenienza, qualità, reparti freschi e offerte ogni giorno.",
  openGraph: {
    title: "Market Ingross | Il Re del Risparmio",
    description:
      "Convenienza, qualità e vicinanza. Scopri volantini, reparti e punti vendita Market Ingross in Sicilia.",
    url: "https://marketingross.it",
    siteName: "Market Ingross",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.variable + " " + montserrat.variable + " font-body"}>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
