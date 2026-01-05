
import Image from "next/image";
import { Card } from "@/Component/card";
import UploadCvSection from "@/Component/UploadCvSection";
import { FiCheckCircle } from "react-icons/fi";

export const metadata = {
  title: "Nosotros — Moksa IT",
  description:
    "Equipo con más de 15 años de experiencia en consultoría SAP/OpenText. Entregas enfocadas en resultados, calidad y bajo riesgo operativo.",
};

export default function AboutPage() {
  const kpis = [
    { k: "+20", t: "Proyectos SAP" },
    { k: "0", t: "incidentes críticos en go-live" },
    { k: "-35%", t: "tiempo del ciclo VIM" },
    { k: "9.1/10", t: "satisfacción del usuario (NPS)" },
  ];

  const values = [
    {
      title: "Resultados primero",
      tag: "Impacto en el negocio",
      desc: "Cada entrega está vinculada a un KPI y una hipótesis clara de impacto en el negocio.",
    },
    {
      title: "Calidad y mantenibilidad",
      tag: "Código y diseño",
      desc: "ABAP limpio y extensiones, siguiendo estándares, revisiones y documentación sólida.",
    },
    {
      title: "Bajo riesgo",
      tag: "Ejecución",
      desc: "Iteraciones cortas, feature flags, entornos controlados y capacidad de rollback.",
    },
    {
      title: "Colaboración",
      tag: "Equipos",
      desc: "Negocios, Finanzas y TI alineados en objetivos, métricas y prioridades.",
    },
    {
      title: "Transparencia",
      tag: "Gestión",
      desc: "Cronograma, alcance, supuestos y riesgos claramente explicados desde el inicio.",
    },
    {
      title: "Mejora continua",
      tag: "Aprendizaje",
      desc: "Retrospectivas post go-live y fortalecimiento para incorporar aprendizajes reales.",
    },
  ];

  const timeline = [
    {
      y: "2012–2016",
      h: "Primeras implementaciones SAP OpenText (LATAM)",
      d: "Proyectos VIM y Content Server enfocados en Cuentas por Pagar y trazabilidad documental.",
    },
    {
      y: "2017–2021",
      h: "Expansión y optimización",
      d: "Proyectos en Europa, estandarización de prácticas y tableros operativos basados en KPIs.",
    },
    {
      y: "2022–2024",
      h: "S/4HANA y touchless",
      d: "Migraciones, mejoras de rendimiento y automatización de extremo a extremo del procesamiento de facturas.",
    },
    {
      y: "2025+",
      h: "Escalabilidad y producto",
      d: "Portal de proveedores y analíticas aplicadas a las operaciones de Cuentas por Pagar.",
    },
  ];

  const team = [
    { name: "Sebastian Ariel Rossi", role: "Co-fundador", image: "/Team/seba-rossi.png" },
    { name: "Gonzalo Daniel Tejada", role: "Co-fundador", image: "/Team/gonza-tejada.jpeg" },
    { name: "Emanuel Fernández", role: "Consultor SAP / OpenText" },
    { name: "Facundo Simón Gastiarena Albarengue", role: "Consultor SAP / OpenText" },
    { name: "Martin Ochoa", role: "Consultor SAP / OpenText" },
    { name: "Jeronimo Juarez Tabares", role: "Consultor SAP / OpenText" },
    { name: "Martin Ignacio Rossi", role: "Consultor SAP / OpenText", image: "/Team/tincho-rossi.jpeg" },
    { name: "Francisco Tumas", role: "Consultor SAP / OpenText", image: "/Team/francisco-tumas.jpeg" },
    { name: "Justo Vannoni", role: "Consultor SAP / OpenText", image: "/Team/justo-vannoni.jpeg" },
  ];

  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hello%20Moksa%20IT%2C%20I’d%20like%20to%20discuss%20a%20SAP%20or%20VIM%20project.";

  return (
    <main className="bg-white text-neutral-900">

      {/* INTRO + KPIs */}
      <section className="border-t border-neutral-200 pt-16 pb-10">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Who we are
          </h1>

          <p className="mt-4 max-w-3xl text-neutral-600">
            Somos un equipo con más de 15 años de experiencia en consultoría SAP OpenText,
            enfocado en automatizar Cuentas por Pagar y mejorar las relaciones con proveedores
            a través de procesos claros y medibles.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {kpis.map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="text-2xl font-extrabold">{x.k}</div>
                <div className="mt-1 text-xs text-neutral-500">{x.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <Card key={v.title}>
              <div className="flex items-start gap-3">
                <FiCheckCircle className="mt-1 text-indigo-600" />
                <div>
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-indigo-500">
                    {v.tag}
                  </p>
                  <p className="mt-3 text-sm text-neutral-600">{v.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-4 space-y-8">
          {timeline.map((t) => (
            <div key={t.y} className="flex gap-6">
              <div className="shrink-0 rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-600">
                {t.y}
              </div>
              <div>
                <h3 className="font-semibold">{t.h}</h3>
                <p className="mt-1 text-sm text-neutral-600">{t.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <Card key={m.name}>
              <div className="flex items-center gap-4">
                {m.image && (
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="56px"
                      className="object-cover object-center"
                    />
                  </div>
                )}
                <div>
                  <div className="font-semibold">{m.name}</div>
                  <div className="mt-1 text-xs text-neutral-500">{m.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CAREERS */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h3 className="text-3xl font-extrabold">
            Queres trabajar en Moksa IT?
          </h3>
          <UploadCvSection />
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[var(--color-accent)] px-4 py-3 text-white shadow-lg"
      >
        WhatsApp
      </a>
    </main>
  );
}
