import { Mountain, Trees, CookingPot, Waves } from "lucide-react";

const items = [
  { icon: Waves, title: "Vue sur le fleuve", text: "Horizon ouvert sur le Saint-Laurent." },
  { icon: CookingPot, title: "Cuisine équipée", text: "Tout le nécessaire pour des repas simples." },
  { icon: Trees, title: "Nature", text: "Forêts, sentiers et air pur." },
  { icon: Mountain, title: "Déconnexion", text: "Silence, lecture et repos profond." },
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
