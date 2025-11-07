import Link from "next/link";
import { useEffect, useState } from "react";
import translations from "@/lib/i18n";

export function Hero() {
  const [t, setT] = useState(translations['es']);
  useEffect(() => {
    const path = typeof window !== 'undefined' ? window.location.pathname : '/';
    const seg = path.split('/').filter(Boolean);
    const locale = seg[0] && translations[seg[0]] ? seg[0] : 'es';
    setT(translations[locale]);
  }, []);
  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center">
      <img
        src="/images/cabain.JPG"
        className="object-cover absolute inset-0 w-full h-full"
        style={{ objectPosition: "center 60%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 md:from-black/50 to-black/10" />
      <div className="safe-max relative">
        <div className="max-w-2xl text-white pt-24">
          <h1 className="h1 mb-4">{t.hero.title}</h1>
          <p className="p text-white/90 mb-8">{t.hero.subtitle}</p>
          <div className="flex gap-4">
            <Link href="/alojamientos" className="btn bg-white text-gray-900 hover:bg-gray-100">{t.hero.cta1}</Link>
            <Link href="/contacto" className="btn-outline border-white text-white hover:bg-white/10">{t.hero.cta2}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
