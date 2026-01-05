import Image from "next/image";
import { Card } from "@/Component/card";
import UploadCvSection from "@/Component/UploadCvSection";
import { FiCheckCircle } from "react-icons/fi";

export const metadata = {
  title: "Nosotros — Moksa IT",
  description:
    "Equipo con 15+ años en consultoría SAP/OpenText. Operación enfocada en resultados, calidad y bajo riesgo.",
};

export default function NosotrosPage() {
  const kpis = [
    { k: "+20", t: "proyectos SAP" },
    { k: "0", t: "incidentes críticos en go-live" },
    { k: "-35%", t: "tiempo de ciclo en VIM" },
    { k: "9.1/10", t: "satisfacción de usuarios (NPS)" },
  ];

  const valores = [
    {
      title: "Resultados primero",
      tag: "Impacto en negocio",
      desc: "Cada entrega tiene un KPI asociado y una hipótesis clara de impacto en el negocio.",
    },
    {
      title: "Calidad y mantenibilidad",
      tag: "Código & diseño",
      desc: "ABAP y extensiones limpias, con estándares, revisiones y buena documentación.",
    },
    {
      title: "Bajo riesgo",
      tag: "Ejecución",
      desc: "Iteraciones cortas, feature flags, entornos controlados y reversibilidad.",
    },
    {
      title: "Colaboración",
      tag: "Equipos",
      desc: "Negocio, Finanzas y TI alineados en objetivos, métricas y prioridades.",
    },
    {
      title: "Transparencia",
      tag: "Gestión",
      desc: "Timeline, alcance, supuestos y riesgos explicados desde el kickoff.",
    },
    {
      title: "Mejora continua",
      tag: "Aprendizaje",
      desc: "Retro y hardening post go-live para incorporar aprendizajes reales.",
    },
  ];

  const timeline = [
    {
      y: "2012–2016",
      h: "Primeras implantaciones SAP OpenText (LATAM)",
      d: "Proyectos VIM y Content Server con foco en Cuentas a Pagar y trazabilidad de documentos.",
    },
    {
      y: "2017–2021",
      h: "Expansión y optimización",
      d: "Casos en Europa, estandarización de prácticas y tableros de KPIs para la operación.",
    },
    {
      y: "2022–2024",
      h: "S/4HANA & touchless",
      d: "Migraciones, mejoras de performance y mayor automatización end-to-end del ciclo de facturas.",
    },
    {
      y: "2025+",
      h: "Escala y producto",
      d: "Portal de Proveedores y analítica aplicada a la operación de Cuentas a Pagar.",
    },
  ];

  const team = [
    { name: "Sebastian Ariel Rossi", role: "Co-fundador", image: "/Team/seba-rossi.png" },
    { name: "Gonzalo Daniel Tejada", role: "Co-fundador", image: "/Team/gonza-tejada.jpeg" },
    { name: "Emanuel Fernández", role: "Consultor SAP/OpenText" },
    { name: "Facundo Simón Gastiarena Albarengue", role: "Consultor SAP/OpenText" },
    { name: "Martin Ochoa", role: "Consultor SAP/OpenText" },
    { name: "Jeronimo Juarez Tabares", role: "Consultor SAP/OpenText" },
    { name: "Martin Ignacio Rossi", role: "Consultor SAP/OpenText", image: "/Team/tincho-rossi.jpeg" },
    { name: "Francisco Tumas", role: "Consultor SAP/OpenText", image: "/Team/francisco-tumas.jpeg" },
    { name: "Justo Vannoni", role: "Consultor SAP/OpenText", image: "/Team/justo-vannoni.jpeg" },
  ];

  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hola%20Moksa%20IT%2C%20quiero%20conversar%20sobre%20un%20proyecto%20SAP%20o%20VIM.";

  return (
    <main className="bg-white text-neutral-900">

      {/* INTRO + KPIs */}
      <section className="border-t border-neutral-200 pt-16 pb-10">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-extrabold">Quiénes somos</h1>
          <p className="mt-4 max-w-3xl text-neutral-600">
            Somos un equipo con más de 15 años de experiencia en consultoría SAP OpenText.
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpis.map((x) => (
              <div key={x.t} className="rounded-2xl border p-6 text-center">
                <div className="text-2xl font-extrabold">{x.k}</div>
                <div className="text-xs text-neutral-500">{x.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="border-t py-16">
        <div className="mx-auto max-w-6xl px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valores.map((v) => (
            <Card key={v.title}>
              <div className="flex gap-3">
                <FiCheckCircle className="text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="text-xs uppercase text-indigo-500">{v.tag}</p>
                  <p className="mt-2 text-sm text-neutral-600">{v.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-t py-16">
        <div className="mx-auto max-w-6xl px-4 space-y-8">
          {timeline.map((t) => (
            <div key={t.y} className="flex gap-6">
              <div className="shrink-0 rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-600">
                {t.y}
              </div>
              <div>
                <h3 className="font-semibold">{t.h}</h3>
                <p className="text-sm text-neutral-600">{t.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPO */}
      <section className="border-t py-16">
        <div className="mx-auto max-w-6xl px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <Card key={m.name}>
              <div className="flex items-center gap-4">
                {m.image && (
                  <div className="relative h-14 w-14 overflow-hidden rounded-xl border">
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
                  <div className="text-xs text-neutral-500">{m.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* TRABAJAR */}
      <section className="border-t bg-neutral-50 py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h3 className="text-3xl font-extrabold">¿Querés trabajar en Moksa IT?</h3>
          <UploadCvSection />
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 rounded-full bg-[var(--color-accent)] px-4 py-3 text-white shadow-lg"
      >
        WhatsApp
      </a>
    </main>
  );
}
