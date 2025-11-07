"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const langs = [
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
  ];

  const [value, setValue] = useState("es");

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const lng = params.get("lng") || "es";
      setValue(lng);
    } catch (e) {
      setValue("es");
    }
  }, []);

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const lng = e.target.value;
    // navigate preserving pathname but setting ?lng=
    const base = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("lng", lng);
    // replace history (client navigation)
    window.location.href = `${base}?${searchParams.toString()}`;
  }

  return (
    <div className="language-switcher inline-block">
      <label htmlFor="lang-select" className="sr-only">
        Select language
      </label>
      <select
        id="lang-select"
        value={value}
        onChange={onChange}
        className="border rounded px-2 py-1"
        aria-label="Language selector"
      >
        {langs.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}
