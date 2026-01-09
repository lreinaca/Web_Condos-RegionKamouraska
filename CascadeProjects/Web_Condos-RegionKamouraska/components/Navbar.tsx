import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b">
      <nav className="safe-max flex items-center justify-between h-16">
        <Link href="/" className="font-display text-xl">Chalets Kamouraska</Link>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/alojamientos">Hébergement</Link>
          <Link href="/experiencia">Expérience</Link>
          <Link href="/tarifas">Tarifs</Link>
          <Link href="/nosotros">À propos</Link>
          <Link href="/contacto" className="btn">Réserver</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contacto" className="sm:hidden btn">Réserver</Link>
        </div>
      </nav>
    </header>
  );
}
