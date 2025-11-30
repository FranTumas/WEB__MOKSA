import { Card } from "@/Component/card";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Servicios — Moksa IT",
  description:
    "VIM by OpenText para SAP, ABAP y optimización de flujos. Proceso claro y beneficios concretos.",
};

export default function ServiciosPage() {
  const beneficios = [
    { title: "Implementaciones SAP", desc: "S/4HANA, ECC y módulos clave con foco en negocio." },
    { title: "ABAP & Extensiones", desc: "BAPIs, jobs, OData/APIs y buenas prácticas." },
    { title: "VIM / OpenText", desc: "Automatización de facturas, workflows y KPIs." },
    { title: "Reducción de tiempos", desc: "-35% en ciclo de facturas con rediseño de flujo." },
    { title: "Calidad y control", desc: "Menos reprocesos, mayor trazabilidad y auditoría." },
    { title: "Time-to-value", desc: "Entregables iterativos, riesgos controlados." },
  ];

  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hola%20Moksa%20IT%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20un%20proyecto%20SAP%20o%20VIM.";

  return (
    <main className="bg-white text-neutral-900">
      {/* Encabezado + subnav local */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight">Servicios</h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Especialistas en Vendor Invoice Management (VIM) by OpenText para SAP, ABAP y optimización de flujos.
          Trabajamos con un proceso claro y beneficios medibles.
        </p>

        <div className="mt-6 text-sm text-neutral-600 flex flex-wrap gap-3">
          <a href="#servicios" className="rounded-xl border border-neutral-300 px-3 py-1 hover:bg-neutral-50">Servicios</a>
          <a href="#como" className="rounded-xl border border-neutral-300 px-3 py-1 hover:bg-neutral-50">Cómo trabajamos</a>
          <a href="#beneficios" className="rounded-xl border border-neutral-300 px-3 py-1 hover:bg-neutral-50">Beneficios</a>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Qué servicios ofrecemos</h2>
            <p className="mt-2 text-neutral-600">
              Soluciones para Cuentas a Pagar y áreas relacionadas, con foco en automatización, control y escalabilidad.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">SAP · OpenText</div>
              <h3 className="mt-1 text-lg font-semibold">Vendor Invoice Management (VIM)</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Automatización end-to-end de facturas: recepción, validación, aprobación, contabilización y KPIs.
              </p>
              <ul className="mt-4 text-sm space-y-1">
                <li>• Reglas y acciones preconfiguradas</li>
                <li>• Integración completa con SAP</li>
                <li>• Analítica operativa</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">ABAP</div>
              <h3 className="mt-1 text-lg font-semibold">Desarrollos & Extensiones</h3>
              <p className="mt-2 text-sm text-neutral-600">
                BAPIs, jobs, OData/APIs, performance y estándares de calidad para reducir tareas manuales.
              </p>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Proceso</div>
              <h3 className="mt-1 text-lg font-semibold">Optimización de flujos</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Menos tiempos y reprocesos, mayor trazabilidad y control en CxP y áreas satélite.
              </p>
            </Card>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Fuera de SAP</div>
              <h3 className="mt-1 text-lg font-semibold">Desarrollos no SAP</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Aplicaciones web/móviles, gestión documental e integraciones para potenciar procesos.
              </p>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Producto propio</div>
              <h3 className="mt-1 text-lg font-semibold">Portal de Proveedores</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Envío de facturas, datos de pago, autorregistro y workflows automáticos (.NET + Angular).
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos (versión slider) */}
      <section
        id="como"
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
      
          {/* Slider-like banners */}
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
                    "Backlog y plan de releases",
                  ],
                  image: "/Diseño.jpg",
                },
                {
                  id: "step-3",
                  step: "PASO 03",
                  title: "Build & pruebas",
                  desc: "Desarrollamos, configuramos y testeamos junto a usuarios clave.",
                  bullets: ["Configuración & ABAP", "Pruebas con usuarios (UAT)"],
                  image: "/Build.jpg",
                },
                {
                  id: "step-4",
                  step: "PASO 04",
                  title: "Go-live & soporte",
                  desc: "Acompañamos la salida productiva y monitoreamos resultados y mejoras.",
                  bullets: ["Plan de go-live", "Soporte post-implementación"],
                  image: "/Golive.jpg",
                },
              ].map((slide) => (
                <article
                  key={slide.id}
                  id={slide.id}
                  className="relative h-[260px] sm:h-[320px] w-full shrink-0 snap-center overflow-hidden rounded-3xl bg-neutral-900 text-white"
                >
                  {/* Imagen de fondo */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover opacity-70"
                  />
      
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />
      
                  {/* Contenido */}
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
            {/* Puntitos de navegación */}
            <div className="mt-4 flex justify-center gap-2">
              {["step-1", "step-2", "step-3", "step-4"].map((id, index) => (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-label={`Ir a paso ${index + 1}`}
                  className="h-2 w-2 rounded-full bg-neutral-300 hover:bg-[var(--color-accent)] transition"
                />
              ))}
            </div>
            </div>
          </div>
      </section> 
      {/* Beneficios */}
      <section id="beneficios" className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Beneficios</h2>
            <p className="mt-2 text-neutral-600">
              Resultados concretos para tu operación SAP.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b) => (
              <Card key={b.title}>
                <div className="h-10 w-10 rounded-xl bg-neutral-100 flex items-center justify-center">✓</div>
                <div className="mt-4 font-semibold">{b.title}</div>
                <p className="mt-2 text-sm text-neutral-600">{b.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* WhatsApp bubble */}
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
