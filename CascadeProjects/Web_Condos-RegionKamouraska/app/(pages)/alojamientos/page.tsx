"use client";
import Link from "next/link";

const units = [
  {
    name: "Condo 10F – Vue sur le Lac Saint-Pierre",
    slug: "condo-10f",
    capacity: "2-4 personnes",
    price: "à partir de 160 $/nuit",
    description: "Séjournez dans un véritable havre de paix au bord du Lac Saint-Pierre, à quelques minutes du charmant village de Kamouraska. Admirez la vue panoramique sur le lac, pratiquez le canot ou le kayak, et profitez de moments de détente mémorables, que vous soyez seul, en couple ou en famille. Une expérience unique pour se ressourcer et se reconnecter avec la nature.",
    features: ["Deux chambres", "Cuisine et salle de bains", "Balcon avec vue sur le lac", "Espaces extérieurs confortables"],
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1470&auto=format&fit=crop",
    alt: "Condo 10F avec vue panoramique sur le Lac Saint-Pierre",
  },
  {
    name: "Condo 10D – Kamouraska, Lac et nature",
    slug: "condo-10d",
    capacity: "2-4 personnes",
    price: "à partir de 170 $/nuit",
    description: "Condo charmant et paisible au bord de l'eau et près de Kamouraska. Vous aurez la possibilité de profiter d'un site bucolique, de faire des activités aquatiques et de visiter le village de Kamouraska et les environs.",
    features: ["Entre lac et nature", "Activités aquatiques", "Proche du village", "Cadre bucolique"],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1469&auto=format&fit=crop",
    alt: "Condo 10D paisible au bord de l'eau près de Kamouraska",
  },
  {
    name: "Condo 10B – Bord de l'eau près de Kamouraska",
    slug: "condo-10b",
    capacity: "2-4 personnes",
    price: "à partir de 160 $/nuit",
    description: "Condo charmant et paisible au bord de l'eau et près de Kamouraska. Vous aurez la possibilité de profiter d'un site bucolique, de faire des activités aquatiques et de visiter le village de Kamouraska et les environs.",
    features: ["Charme au bord de l'eau", "Nature et détente", "Activités aquatiques", "Proche de Kamouraska"],
    image:
      "https://images.unsplash.com/photo-1523419409543-8c4f62b63ca3?q=80&w=1470&auto=format&fit=crop",
    alt: "Condo 10B au bord de l'eau avec vue sur la nature",
  },
];

export default function AlojamientoPage() {
  return (
    <main className="section">
      <div className="safe-max">
        <h1 className="h2 mb-2">Hébergement</h1>
        <p className="p mb-10 max-w-2xl">Condos conçus pour le repos, avec des matériaux naturels, une lumière chaleureuse et des détails qui invitent au ralentissement.</p>

        <div className="grid gap-8 lg:grid-cols-1 max-w-4xl mx-auto">
          {units.map((u, index) => (
            <article 
              key={u.slug} 
              className="bg-white rounded-lg overflow-hidden shadow-sm border lg:flex lg:flex-row hover:shadow-xl transition-all duration-300 animate-fade-in-up group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                <picture>
                  <source type="image/webp" srcSet={u.image.replace('auto=format', 'fm=webp')} />
                  <img
                    src={u.image}
                    alt={u.alt || u.name}
                    className="object-cover absolute inset-0 w-full h-full hover-zoom"
                    width={1470}
                    height={980}
                    loading="lazy"
                  />
                </picture>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-forest-700 shadow-lg">
                  {u.price}
                </div>
              </div>
              <div className="p-6 lg:w-3/5">
                <h3 className="h3 mb-2 group-hover:text-forest-600 transition-colors">{u.name}</h3>
                <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {u.capacity}
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">{u.description}</p>
                <ul className="text-sm text-gray-700 mb-5 grid grid-cols-2 gap-2">
                  {u.features.map((f) => (
                    <li key={f} className="flex items-start">
                      <svg className="w-4 h-4 text-forest-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Link href="/contacto" className="btn">Réserver</Link>
                  <Link href={`#${u.slug}`} className="btn-outline">En savoir plus</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
