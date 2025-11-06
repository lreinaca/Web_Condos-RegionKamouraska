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
        <h1 className="h2 mb-2">Kamouraska: calma y horizonte</h1>
        <p className="p max-w-2xl mb-10">Costa del San Lorenzo, cielos infinitos y gastronomía local. Senderos, kayak, miradores y noches de estrellas. Aquí el tiempo corre distinto.</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((src, i) => (
            <div key={i} className="relative h-64 rounded-md overflow-hidden">
              <Image src={src} alt="Entorno de Kamouraska" fill className="object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="h3 mb-2">Actividades</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Senderismo costero y miradores</li>
              <li>Kayak y paseos al atardecer</li>
              <li>Productos locales y cafés de pueblo</li>
              <li>Observación de estrellas</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="h3 mb-2">Consejos</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Trae calzado cómodo y capa para el viento</li>
              <li>Reserva actividades con antelación en temporada alta</li>
              <li>Respeta flora y fauna; llevamos un enfoque sostenible</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
