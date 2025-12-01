"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/Component/LanguageSwitcher"; // ajustá si tu ruta es distinta

type NavLink = {
  key: string;
  esLabel: string;
  enLabel: string;
  esHref: string;
  enHref: string;
};

const NAV_LINKS: NavLink[] = [
  {
    key: "home",
    esLabel: "Inicio",
    enLabel: "Home",
    esHref: "/",
    enHref: "/EN",
  },
  {
    key: "services",
    esLabel: "Servicios",
    enLabel: "Services",
    esHref: "/servicios",
    enHref: "/EN/services",
  },
  {
    key: "about",
    esLabel: "Nosotros",
    enLabel: "About",
    esHref: "/nosotros",
    enHref: "/EN/AboutUs",
  },
  {
    key: "sla",
    esLabel: "SLA",
    enLabel: "SLA",
    esHref: "/sla",
    enHref: "/EN/sla",
  },
  {
    key: "contact",
    esLabel: "Contacto",
    enLabel: "Contact",
    esHref: "/contacto",
    enHref: "/EN/contact",
  },
];

export function Navbar() {
  const pathname = usePathname() || "/";

  // Detecto inglés sin importar mayúsculas/minúsculas
  const isEnglish = pathname.toLowerCase().startsWith("/en");

  const homeHref = isEnglish ? "/EN" : "/";
  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur"
      style={
        {
          backgroundColor: "var(--nav-bg)",
          borderColor: "var(--nav-border)",
          color: "var(--nav-text)",
        } as CSSProperties
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
       {/* Logo */}
<Link
  href={homeHref}
  className="flex items-center gap-2 shrink-0"
  style={{ color: "var(--nav-text)" }}
>
  <Image
    src="/Moksa_vector_blanco-04.svg"
    alt="Moksa IT"
    width={220}
    height={220}
    className="h-20 w-auto object-contain md:h-24"
  />
</Link>


        {/* Navegación */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm"
          style={{ color: "var(--nav-text)" }}
        >
          {NAV_LINKS.map((link) => {
            const href = isEnglish ? link.enHref : link.esHref;
            const label = isEnglish ? link.enLabel : link.esLabel;

            return (
              <Link
                key={link.key}
                href={href}
                className="relative hover:opacity-90 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-accent)] hover:after:w-full after:transition-all"
                style={{ color: "var(--nav-text)" }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Idioma + CTA */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

        </div>
      </div>
    </header>
  );
}