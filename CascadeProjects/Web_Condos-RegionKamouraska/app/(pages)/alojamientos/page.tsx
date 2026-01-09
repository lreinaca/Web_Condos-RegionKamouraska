"use client";
import Link from "next/link";

const units = [
  {
    name: "Chalet Rivière",
    slug: "chalet-riviere",
    capacity: "2-3 personnes",
    price: "à partir de 160 $/nuit",
    features: ["Vue sur le fleuve", "Terrasse privée", "Cuisine équipée"],
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1470&auto=format&fit=crop",
    alt: "Chalet avec vue sur le fleuve à Kamouraska",
  },
  {
    name: "Condo Forêt",
    slug: "condo-foret",
    capacity: "4 personnes",
    price: "à partir de 190 $/nuit",
    features: ["Entouré de pins", "Foyer", "Coin lecture"],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1469&auto=format&fit=crop",
    alt: "Condo au milieu de la forêt avec foyer",
  },
  {
    name: "Chalet Horizon",
    slug: "chalet-horizon",
    capacity: "2 personnes",
    price: "à partir de 170 $/nuit",
    features: ["Vue dégagée", "Bain spa", "Déjeuner local"],
    image:
      "https://images.unsplash.com/photo-1523419409543-8c4f62b63ca3?q=80&w=1470&auto=format&fit=crop",
    alt: "Chalet avec horizon dégagé et bain spa",
  },
];

export default function AlojamientoPage() {
  return (
    <main className="section">
      <div className="safe-max">
        <h1 className="h2 mb-2">Hébergement</h1>
        <p className="p mb-10 max-w-2xl">Chalets et condos conçus pour le repos, avec des matériaux naturels, une lumière chaleureuse et des détails qui invitent au ralentissement.</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((u) => (
            <article key={u.slug} className="bg-white rounded-lg overflow-hidden shadow-sm border">
                <div className="relative h-56">
                <picture>
                  <source type="image/webp" srcSet={u.image.replace('auto=format', 'fm=webp')} />
                  <img
                    src={u.image}
                    alt={u.alt || u.name}
                    className="object-cover absolute inset-0 w-full h-full"
                    width={1470}
                    height={980}
                    loading="lazy"
                  />
                </picture>
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
                  <Link href="/contacto" className="btn">Réserver</Link>
                  <Link href={`#`} className="btn-outline">Voir détails</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
