import Image from "next/image";

const photos = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1470&auto=format&fit=crop"
];

export default function ExperienciaPage() {
  return (
    <main className="section">
      <div className="safe-max">
        <h1 className="h2 mb-2">Kamouraska : calme et horizon</h1>
        <p className="p max-w-2xl mb-10">Côte du Saint-Laurent, ciels infinis et gastronomie locale. Sentiers, kayak, points de vue et nuits étoilées. Ici, le temps passe différemment.</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((src, i) => (
            <div key={i} className="relative h-64 rounded-md overflow-hidden">
              <Image src={src} alt="Environnement de Kamouraska" fill className="object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="h3 mb-2">Activités</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Randonnée côtière et points de vue</li>
              <li>Kayak et promenades au coucher du soleil</li>
              <li>Produits locaux et cafés de village</li>
              <li>Observation des étoiles</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="h3 mb-2">Conseils</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Apportez des chaussures confortables et une veste coupe-vent</li>
              <li>Réservez les activités à l'avance en haute saison</li>
              <li>Respectez la flore et la faune ; nous avons une approche durable</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
