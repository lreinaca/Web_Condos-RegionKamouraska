import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">404 — Page non trouvée</h1>
        <p className="mb-6">Désolé, nous n'avons pas trouvé la page que vous cherchez. Essayez l'une des options suivantes :</p>
        <ul className="list-disc text-left mb-6 mx-auto max-w-sm">
          <li><Link href="/">Aller à l'accueil</Link></li>
          <li><Link href="/alojamientos">Voir l'hébergement</Link></li>
          <li><Link href="/contacto">Contacter</Link></li>
        </ul>
        <Link href="/" className="btn">Retour à l'accueil</Link>
      </div>
    </main>
  );
}
