import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">404 — Página no encontrada</h1>
        <p className="mb-6">Lo sentimos, no pudimos encontrar la página que buscas. Prueba una de las siguientes opciones:</p>
        <ul className="list-disc text-left mb-6 mx-auto max-w-sm">
          <li><Link href="/">Ir al inicio</Link></li>
          <li><Link href="/alojamientos">Ver alojamientos</Link></li>
          <li><Link href="/contacto">Contactar</Link></li>
        </ul>
        <Link href="/" className="btn">Volver al inicio</Link>
      </div>
    </main>
  );
}
