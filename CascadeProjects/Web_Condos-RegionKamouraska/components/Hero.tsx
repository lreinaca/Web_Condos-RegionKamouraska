import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center">
      <Image
        src="/images/cabain.JPG"
        alt="Paisaje de Kamouraska"
        fill
        priority
        sizes="100vw"
        quality={85}
        className="object-cover"
        style={{ objectPosition: "center 60%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 md:from-black/50 to-black/10" />
      <div className="safe-max relative">
        <div className="max-w-2xl text-white pt-24">
          <h1 className="h1 mb-4">Desconecta en Kamouraska</h1>
          <p className="p text-white/90 mb-8">Naturaleza, calma y comodidad en cabañas y condos con vistas al San Lorenzo.</p>
          <div className="flex gap-4">
            <Link href="/alojamientos" className="btn bg-white text-gray-900 hover:bg-gray-100">Ver alojamientos</Link>
            <Link href="/contacto" className="btn-outline border-white text-white hover:bg-white/10">Reservar</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
