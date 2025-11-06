import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="safe-max py-10 text-sm text-gray-600 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
        <p>© {new Date().getFullYear()} Cabañas Kamouraska</p>
        <div className="flex gap-6">
          <Link href="/contacto">Contacto</Link>
          <Link href="/tarifas">Políticas</Link>
          <a href="#" aria-label="Instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
