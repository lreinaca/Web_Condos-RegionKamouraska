import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASticky } from "@/components/CTASticky";

export const metadata: Metadata = {
  title: "Cabañas Kamouraska | Naturaleza, calma y comodidad",
  description:
    "Escapadas boutique en Kamouraska, Quebec. Cabañas y condos con vistas, naturaleza y descanso.",
  openGraph: {
    title: "Cabañas Kamouraska",
    description:
      "Escapadas boutique en Kamouraska, Quebec. Cabañas y condos con vistas, naturaleza y descanso.",
    type: "website",
    locale: "es_ES",
    url: "https://example.com",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <CTASticky />
        <Footer />
      </body>
    </html>
  );
}
