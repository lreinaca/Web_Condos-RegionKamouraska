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
      {items.map(({ icon: Icon, title, text }, index) => (
        <div 
          key={title} 
          className="bg-white border rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group animate-fade-in-up"
          style={{animationDelay: `${index * 0.1}s`}}
        >
          <Icon className="text-forest-600 group-hover:scale-110 transition-transform" />
          <h3 className="h3 mt-3 mb-1 group-hover:text-forest-600 transition-colors">{title}</h3>
          <p className="text-gray-700 text-sm">{text}</p>
        </div>
      ))}
    </div>
  );
}
