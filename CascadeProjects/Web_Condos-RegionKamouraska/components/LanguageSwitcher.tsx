"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { translations } from "@/lib/i18n";

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  // strip leading locale if present
  const segments = pathname.split("/").filter(Boolean);
  let rest = "/" + segments.slice( (translations[segments[0]] ? 1 : 0) ).join("/");
  if (rest === "/") rest = "/";

  const langs = ["es", "fr", "en"];
  return (
    <div className="language-switcher">
      {langs.map((l) => (
        <Link key={l} href={(l === "es" ? "" : `/${l}`) + rest} locale={false} className="mr-3">
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
