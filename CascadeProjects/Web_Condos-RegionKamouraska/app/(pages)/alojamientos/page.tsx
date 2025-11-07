import Link from "next/link";
import { useEffect, useState } from "react";
import translations from "@/lib/i18n";

const units = [
  {
    name: "Cabaña Río",
    slug: "cabana-rio",
    capacity: "2-3 huéspedes",
    price: "desde $160/noche",
    features: ["Vistas al río", "Terraza privada", "Cocina equipada"],
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1470&auto=format&fit=crop",
  },
  {
    name: "Condo Bosque",
    slug: "condo-bosque",
    capacity: "4 huéspedes",
    price: "desde $190/noche",
    features: ["Rodeado de pinos", "Chimenea", "Área de lectura"],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1469&auto=format&fit=crop",
  },
  {
    name: "Cabaña Horizonte",
    slug: "cabana-horizonte",
    capacity: "2 huéspedes",
    price: "desde $170/noche",
    features: ["Vistas abiertas", "Baño spa", "Desayuno local"],
    image:
      "https://images.unsplash.com/photo-1523419409543-8c4f62b63ca3?q=80&w=1470&auto=format&fit=crop",
  },
];

export default function AlojamientoPage() {
  const [t, setT] = useState<any>(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lng = params.get('lng') || 'es';
    import('@/lib/i18n').then((mod) => {
      const map = mod.default || mod.translations || {};
      setT(map[lng] || map['es']);
    });
  }, []);
  if (!t) return null;

  return (
    <main className="section">
      <div className="safe-max">
        <h1 className="h2 mb-2">{t.alojamientos.title}</h1>
        <p className="p mb-10 max-w-2xl">{t.alojamientos.description}</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((u) => (
            <article key={u.slug} className="bg-white rounded-lg overflow-hidden shadow-sm border">
                <div className="relative h-56">
                <img src={u.image} className="object-cover absolute inset-0 w-full h-full" />
              </div>
              <div className="p-5">
                <h3 className="h3 mb-1">{u.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{u.capacity} • {u.price}</p>
                <ul className="text-sm text-gray-700 mb-4 list-disc pl-5">
                  {u.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Link href="/contacto" className="btn">Reservar</Link>
                  <Link href={`#`} className="btn-outline">Ver detalles</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
