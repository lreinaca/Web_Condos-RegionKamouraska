const items = [
  { name: "Marie", text: "Un calme incroyable. Se réveiller avec le fleuve était inoubliable." },
  { name: "Jean", text: "Design soigné et silence total. Nous reviendrons." },
  { name: "Anne", text: "Parfait pour recharger ses batteries et se déconnecter du bruit." },
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
