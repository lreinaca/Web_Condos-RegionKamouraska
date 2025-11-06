import Link from "next/link";

export function CTASticky() {
  return (
    <div className="fixed bottom-5 right-5 sm:right-8 z-40">
      <Link href="/contacto" className="btn shadow-lg">Reservar</Link>
    </div>
  );
}
