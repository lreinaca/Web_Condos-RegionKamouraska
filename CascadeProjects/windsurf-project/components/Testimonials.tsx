const items = [
  { name: "María", text: "Una calma increíble. Despertar con el río fue inolvidable." },
  { name: "Javier", text: "Diseño cuidado y silencio total. Volveremos." },
  { name: "Ana", text: "Perfecto para recargar energías y desconectar del ruido." },
];

export function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((t) => (
        <figure key={t.name} className="bg-white border rounded-lg p-6">
          <blockquote className="text-gray-800">“{t.text}”</blockquote>
          <figcaption className="mt-3 text-sm text-gray-600">— {t.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
