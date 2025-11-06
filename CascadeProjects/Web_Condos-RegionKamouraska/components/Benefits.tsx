import { Mountain, Trees, CookingPot, Waves } from "lucide-react";

const items = [
  { icon: Waves, title: "Vistas al río", text: "Horizonte abierto sobre el San Lorenzo." },
  { icon: CookingPot, title: "Cocina equipada", text: "Todo lo necesario para comidas sencillas." },
  { icon: Trees, title: "Naturaleza", text: "Bosques, senderos y aire puro." },
  { icon: Mountain, title: "Desconexión", text: "Silencio, lectura y descanso profundo." },
];

export function Benefits() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="bg-white border rounded-lg p-6">
          <Icon className="text-forest-600" />
          <h3 className="h3 mt-3 mb-1">{title}</h3>
          <p className="text-gray-700 text-sm">{text}</p>
        </div>
      ))}
    </div>
  );
}
