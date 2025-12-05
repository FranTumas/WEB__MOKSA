import { Card } from "@/Component/card";
import Image from "next/image";
import Link from "next/link";
import {
  FiLayers,
  FiCode,
  FiFileText,
  FiClock,
  FiShield,
  FiTrendingUp,
  FiGlobe,
  FiSettings,
} from "react-icons/fi";

export const metadata = {
  title: "Servicios — Moksa IT",
  description:
    "VIM by OpenText para SAP, desarrollo ABAP y optimización de flujos. Proceso claro y beneficios medibles.",
};

export default function ServiciosPage() {
  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hola%20Moksa%20IT%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20un%20proyecto%20SAP%20o%20VIM.";

  return (
    <main className="bg-white text-neutral-900">
      {/* Intro Servicios */}
      <section
        id="services-intro"
        className="border-t border-neutral-200 bg-white py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header + layout */}
          <div className="grid gap-10 items-start lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
            {/* Columna izquierda: texto + chips */}
            <div>
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                Servicios SAP &amp; OpenText
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900">
                Servicios
              </h2>

              <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed text-neutral-700">
                Especialistas en Vendor Invoice Management (VIM) by OpenText
                para SAP, desarrollo ABAP y optimización de flujos. Trabajamos
                con un proceso claro y beneficios medibles sobre la operación de
                Cuentas a Pagar.
              </p>

              <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed text-neutral-600">
                Acompañamos desde la definición del alcance hasta el soporte
                post go-live, alineando procesos, equipos y tecnología para
                reducir tiempos, errores y riesgos operativos.
              </p>

              {/* Chips de navegación */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="#services"
                  className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-xs md:text-sm font-semibold text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] hover:shadow-md"
                >
                  Servicios
                </Link>
                <Link
                  href="#how"
                  className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-xs md:text-sm font-semibold text-neutral-700 transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
                >
                  Cómo trabajamos
                </Link>
                <Link
                  href="#benefits"
                  className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-xs md:text-sm font-semibold text-neutral-700 transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
                >
                  Beneficios
                </Link>
              </div>
            </div>

            {/* Columna derecha: mini-métricas */}
            <aside className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                {
                  icon: FiTrendingUp,
                  label: "20+ años en SAP & OpenText",
                  desc: "Experiencia en implantaciones, upgrades y evoluciones.",
                },
                {
                  icon: FiSettings,
                  label: "Foco en Cuentas a Pagar",
                  desc: "Procesos de facturas, aprobaciones, KPIs y control operativo.",
                },
                {
                  icon: FiGlobe,
                  label: "Proyectos en LATAM & Europa",
                  desc: "Modelos multi-país, monedas, idiomas y normativas locales.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white/60 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <Icon className="text-lg" />
                      </div>
                      <h3 className="text-sm font-semibold text-neutral-900">
                        {item.label}
                      </h3>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </aside>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="services" className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Qué ofrecemos</h2>
            <p className="mt-2 text-neutral-600">
              Soluciones para Cuentas a Pagar y áreas relacionadas, con foco en
              automatización, control y escalabilidad.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                SAP · OpenText
              </div>
              <h3 className="mt-1 text-lg font-semibold">
                Vendor Invoice Management (VIM)
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Automatización end-to-end del ciclo de facturas: captura,
                validación, aprobación, contabilización y KPIs.
              </p>
              <ul className="mt-4 text-sm space-y-1">
                <li>• Reglas y acciones preconfiguradas</li>
                <li>• Integración completa con SAP</li>
                <li>• Analítica operativa</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                ABAP
              </div>
              <h3 className="mt-1 text-lg font-semibold">
                Desarrollos & extensiones
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                BAPIs, jobs, OData/APIs, performance y estándares de calidad
                para reducir trabajo manual.
              </p>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Proceso
              </div>
              <h3 className="mt-1 text-lg font-semibold">
                Optimización de procesos
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Menores tiempos de ciclo y menos reprocesos, con mayor
                trazabilidad y control en CxP y áreas satélite.
              </p>
            </Card>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Fuera de SAP
              </div>
              <h3 className="mt-1 text-lg font-semibold">
                Desarrollos no-SAP
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Aplicaciones web/mobile, gestión documental e integraciones para
                potenciar tus procesos.
              </p>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Producto propio
              </div>
              <h3 className="mt-1 text-lg font-semibold">Portal de Proveedores</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Presentación de facturas, datos de pago, auto-gestión y flujos
                automáticos (.NET + Angular).
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS (slider) */}
      <section
        id="how"
        className="border-t border-neutral-200 py-20 bg-neutral-50/70"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">
              Cómo trabajamos
            </h2>
            <p className="mt-2 text-neutral-600">
              Un proceso claro y medible para garantizar entregas seguras,
              trazables y alineadas a los objetivos de la organización.
            </p>
          </div>

          {/* Slider */}
          <div className="mt-10">
            <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 pb-4">
              {[
                {
                  id: "step-1",
                  step: "PASO 01",
                  title: "Relevamiento & objetivos",
                  desc: "Entrevistas, análisis de procesos actuales y definición de dolores y métricas clave.",
                  bullets: [
                    "Workshops con referentes del negocio",
                    "Mapa de procesos y prioridades",
                  ],
                  image: "/Relevamiento.jpg",
                },
                {
                  id: "step-2",
                  step: "PASO 02",
                  title: "Diseño de solución",
                  desc: "Definimos arquitectura, esfuerzos, riesgos y el roadmap de implementación.",
                  bullets: [
                    "Arquitectura funcional/técnica",
                    "Plan de releases & backlog",
                  ],
                  image: "/Diseño.jpg",
                },
                {
                  id: "step-3",
                  step: "PASO 03",
                  title: "Build & pruebas",
                  desc: "Configuramos, desarrollamos y testeamos junto a usuarios clave.",
                  bullets: [
                    "Configuración & ABAP",
                    "Pruebas con usuarios (UAT)",
                  ],
                  image: "/Build.jpg",
                },
                {
                  id: "step-4",
                  step: "PASO 04",
                  title: "Go-live & soporte",
                  desc: "Acompañamos la salida productiva y monitoreamos resultados y mejoras.",
                  bullets: ["Plan de go-live", "Soporte post-implementación"],
                  image: "/Go-Live.jpg",
                },
              ].map((slide) => (
                <article
                  key={slide.id}
                  id={slide.id}
                  className="relative h-[260px] sm:h-[320px] w-full shrink-0 snap-center overflow-hidden rounded-3xl bg-neutral-900 text-white"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover opacity-70"
                  />

                  <div className="absolute inset-0 bg-black/40" />

                  <div className="relative z-10 flex h-full flex-col justify-center px-8 sm:px-12">
                    <span className="text-xs font-semibold tracking-[0.12em] uppercase text-neutral-200">
                      {slide.step}
                    </span>
                    <h3 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
                      {slide.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
                      {slide.desc}
                    </p>

                    <ul className="mt-3 flex flex-wrap gap-2 text-xs sm:text-sm">
                      {slide.bullets.map((b) => (
                        <li
                          key={b}
                          className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm"
                        >
                          ✓&nbsp;{b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <Link
                        href={"/nosotros"}
                        className="rounded-lg border border-white/70 px-5 py-2 text-xs font-semibold tracking-wide uppercase transition hover:bg-white hover:text-neutral-900"
                      >
                        + Info
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Puntitos */}
            <div className="mt-4 flex justify-center gap-2">
              {["step-1", "step-2", "step-3", "step-4"].map((id, index) => (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-label={`Ir al paso ${index + 1}`}
                  className="h-2 w-2 rounded-full bg-neutral-300 hover:bg-[var(--color-accent)] transition"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section
        id="benefits"
        className="border-t border-neutral-200 bg-neutral-50/70 py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900">
              Beneficios
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Resultados concretos para tu operación SAP: menos reprocesos, más
              trazabilidad y decisiones sobre datos confiables.
            </p>
          </div>

          {/* Grid de beneficios */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: FiLayers,
                label: "Implementaciones SAP",
                desc: "S/4HANA, ECC y módulos clave con foco en negocio.",
              },
              {
                icon: FiCode,
                label: "ABAP & Extensiones",
                desc: "BAPIs, jobs, OData/APIs y buenas prácticas de desarrollo.",
              },
              {
                icon: FiFileText,
                label: "VIM / OpenText",
                desc: "Automatización de facturas, workflows y KPIs operativos.",
              },
              {
                icon: FiClock,
                label: "Reducción de tiempos",
                desc: "-35% en ciclo de facturas con rediseño de flujo.",
              },
              {
                icon: FiShield,
                label: "Calidad y control",
                desc: "Menos reprocesos, mayor trazabilidad y auditoría.",
              },
              {
                icon: FiTrendingUp,
                label: "Time-to-value",
                desc: "Entregables iterativos, riesgos controlados y valor rápido.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.label}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)]/30 hover:shadow-lg"
                >
                  <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br from-[var(--color-accent)]/15 via-indigo-400/10 to-transparent blur-2xl transition-transform duration-300 group-hover:scale-110" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <Icon className="text-lg" />
                      </div>
                      <h3 className="text-base font-semibold text-neutral-900">
                        {item.label}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {item.desc}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[var(--color-accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                      <span>Beneficio clave para tu operación</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Burbuja WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[var(--color-accent)] px-4 py-3 text-white shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
      >
        WhatsApp
      </a>
    </main>
  );
}
