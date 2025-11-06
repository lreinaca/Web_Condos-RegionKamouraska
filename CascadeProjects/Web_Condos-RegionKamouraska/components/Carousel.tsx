import Image from "next/image";

const imgs = [
  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f8?q=80&w=1920&auto=format&fit=crop"
];

export function Carousel() {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 snap-x snap-mandatory pr-4">
        {imgs.map((src, i) => (
          <div key={i} className="relative h-64 w-[28rem] shrink-0 rounded-lg overflow-hidden snap-start">
            <Image src={src} alt="Kamouraska" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
