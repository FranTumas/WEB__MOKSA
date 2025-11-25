"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Mapeo ES ↔ EN (ajustado según tus rutas)
const PATH_MAP: Record<string, string> = {
  "/": "/EN",
  "/EN": "/",

  "/nosotros": "/EN/AboutUs",
  "/EN/AboutUs": "/nosotros",

  "/servicios": "/EN/services",
  "/EN/services": "/servicios",

  "/casos": "/EN/cases",
  "/EN/cases": "/casos",

  "/contacto": "/EN/contact",
  "/EN/contact": "/contacto",

  "/sla": "/EN/sla",
  "/EN/sla": "/sla",
};

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname.startsWith("/EN");

  const esPath = isEnglish
    ? (PATH_MAP[pathname] ?? pathname.replace(/^\/EN/, "")) || "/"
    : pathname;

  const enPath = isEnglish
    ? pathname
    : PATH_MAP[pathname] ?? (pathname === "/" ? "/EN" : `/EN${pathname}`);

  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm">
      {/* ES */}
      <Link
        href={esPath}
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 transition ${
          !isEnglish
            ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
            : "border-neutral-300 text-neutral-600 hover:bg-neutral-50"
        }`}
      >
        <Image
          src="/ar.svg"
          alt="ES"
          width={18}
          height={18}
          className="rounded-full"
        />
        <span>ES</span>
      </Link>

      {/* EN */}
      <Link
        href={enPath}
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 transition ${
          isEnglish
            ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
            : "border-neutral-300 text-neutral-600 hover:bg-neutral-50"
        }`}
      >
        <Image
          src="/us.svg"
          alt="EN"
          width={18}
          height={18}
          className="rounded-full"
        />
        <span>EN</span>
      </Link>
    </div>
  );
}