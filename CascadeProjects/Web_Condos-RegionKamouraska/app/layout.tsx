import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASticky } from "@/components/CTASticky";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const metadata = {
  title: "Cabañas Kamouraska | Naturaleza, calma y comodidad",
  description:
    "Escapadas boutique en Kamouraska, Quebec. Cabañas y condos con vistas, naturaleza y descanso.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="p-4">
          <LanguageSwitcher />
        </header>
        <Navbar />
        {children}
        <CTASticky />
        <Footer />
      </body>
    </html>
  );
}
