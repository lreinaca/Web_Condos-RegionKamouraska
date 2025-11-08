const imgs = [
  {
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1920&auto=format&fit=crop",
    alt: "Orilla del río al amanecer en Kamouraska",
  },
  {
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1920&auto=format&fit=crop",
    alt: "Paisaje con praderas y cielo azul",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1920&auto=format&fit=crop",
    alt: "Bosque y senderos en otoño",
  },
  {
    src: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f8?q=80&w=1920&auto=format&fit=crop",
    alt: "Cabaña junto al río bajo el cielo",
  },
];

export function Carousel() {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 snap-x snap-mandatory pr-4">
        {imgs.map((img, i) => (
          <div key={i} className="relative h-64 w-[28rem] shrink-0 rounded-lg overflow-hidden snap-start">
            <picture>
              <source
                type="image/webp"
                srcSet={`${img.src.replace('auto=format', 'fm=webp')}`}
              />
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover absolute inset-0 w-full h-full"
                width={1920}
                height={1080}
                loading="lazy"
              />
            </picture>
          </div>
        ))}
      </div>
    </div>
  );
}
