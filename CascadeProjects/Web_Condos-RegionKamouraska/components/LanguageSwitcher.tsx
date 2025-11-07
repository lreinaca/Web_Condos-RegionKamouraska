"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const langs = ["es", "fr", "en"];
  return (
    <div className="language-switcher">
      {langs.map((l) => (
        // use query param `lng` so static export doesn't need Next i18n routing
        <Link key={l} href={`${pathname}?lng=${l}`} locale={false} className="mr-3">
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
