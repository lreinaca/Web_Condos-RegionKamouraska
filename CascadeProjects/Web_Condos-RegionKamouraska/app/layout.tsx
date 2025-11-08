import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASticky } from "@/components/CTASticky";

export const metadata = {
  title: "Cabañas Kamouraska | Naturaleza, calma y comodidad",
  description:
    "Escapadas boutique en Kamouraska, Quebec. Cabañas y condos con vistas, naturaleza y descanso.",
  verificacion: {
    google: "XD3QfLHe1fHWGMs7GNLaOBkBIFEA9mAb0tg-rTzQl2M"
  }
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
