// src/components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

type NavLink = {
  href: string;      // usamos string simple para evitar UrlObject
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/casos", label: "Casos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/sla", label: "SLA" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <>
      {/* Topbar (opcional) */}
      <div className="bg-[var(--nav-bg)] border-b border-[var(--nav-border)] text-[13px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-center gap-2 text-white">
          <span className="font-medium">Disponibles para nuevos proyectos SAP</span>
          <Link
            href="/contacto"
            className="text-white/90 hover:text-white underline decoration-white/80 underline-offset-4"
          >
            Hablemos →
          </Link>
        </div>
      </div>

      {/* Navbar principal */}
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
          {/* Logo + Marca */}
          <Link href="/" className="flex items-center gap-2" style={{ color: "var(--nav-text)" }}>
            <Image
              src="/logo-moksa.png"   // poné tu archivo en /public
              alt="Moksa IT"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-base font-semibold tracking-tight">Moksa IT</span>
          </Link>

          {/* Navegación */}
          <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: "var(--nav-text)" }}>
            {NAV_LINKS.map((link: NavLink) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative hover:opacity-90 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-accent)] hover:after:w-full after:transition-all"
                style={{ color: "var(--nav-text)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/contacto"
            className="rounded-xl px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-4"
            style={{
              backgroundColor: "var(--color-accent)",
              boxShadow: "0 0 0 0 rgba(0,0,0,0)",
            }}
          >
            Empezar
          </Link>
        </div>
      </header>
    </>
  );
}
