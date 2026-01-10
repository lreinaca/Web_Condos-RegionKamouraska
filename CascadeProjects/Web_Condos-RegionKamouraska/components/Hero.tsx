"use client";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center">
      <img
        src="/images/cabain.JPG"
        className="object-cover absolute inset-0 w-full h-full"
        style={{ objectPosition: "center 60%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 md:from-black/50 to-black/10" />
      <div className="safe-max relative">
        <div className="max-w-2xl text-white pt-24 animate-fade-in-up">
          <h1 className="h1 mb-4">Vue et nature sur le Lac Saint-Pierre</h1>
          <p className="p text-white/90 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Nature, calme et confort dans des chalets et condos avec vue sur le Saint-Laurent.</p>
          <div className="flex gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link href="/alojamientos" className="btn bg-white text-gray-900 hover:bg-gray-100">Voir les logements</Link>
            <Link href="/contacto" className="btn-outline border-white text-white hover:bg-white/10">Réserver</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
