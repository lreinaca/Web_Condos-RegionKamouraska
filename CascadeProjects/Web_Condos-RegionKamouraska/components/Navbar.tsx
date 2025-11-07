import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b">
      <nav className="safe-max flex items-center justify-between h-16">
        <Link href="/" className="font-display text-xl">Cabañas Kamouraska</Link>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/alojamientos">Alojamiento</Link>
          <Link href="/experiencia">Experiencia</Link>
          <Link href="/tarifas">Tarifas</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/contacto" className="btn">Reservar</Link>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/contacto" className="sm:hidden btn">Reservar</Link>
        </div>
      </nav>
    </header>
  );
}
