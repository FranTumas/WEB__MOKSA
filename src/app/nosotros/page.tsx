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
    {
      name: "Sebastian Ariel Rossi",
      role: "Co-fundador",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
      image: "/Team/seba-rossi.png",
    },
    {
      name: "Gonzalo Daniel Tejada",
      role: "Co-fundador",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
      image: "/Team/gonza-tejada.jpeg",
    },
    {
      name: "Emanuel Fernández",
      role: "Consultor SAP",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
      
    },
    {
      name: "Facundo Simón Gastiarena Albarengue",
      role: "Consultor SAP",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
      
    },
    {
      name: "Martin Ochoa",
      role: "Consultor SAP",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
      
    },
    {
      name: "Jeronimo Juarez Tabares",
      role: "Consultor SAP",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
     
    },
    {
      name: "Martin Ignacio Rossi",
      role: "Consultor SAP",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
     
    },
    {
      name: "Francisco Tumas",
      role: "Consultor SAP",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
      image: "/Team/francisco-tumas.jpeg",
    },
    {
      name: "Justo Vannoni",
      role: "Consultor SAP",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
      image: "/Team/justo-vannoni.jpeg",
    },
  ];

  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hola%20Moksa%20IT%2C%20quiero%20conversar%20sobre%20un%20proyecto%20SAP%20o%20VIM.";

  return (
    <main className="bg-white text-neutral-900">

      {/* INTRO + KPIs */}
      <section className="border-t border-neutral-200 bg-white pt-16 pb-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
            Nosotros
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight">
            Quiénes somos
          </h1>

          <p className="mt-4 max-w-3xl text-neutral-600">
            Somos un equipo con más de 15 años de experiencia en consultoría SAP
            OpenText, enfocados en automatizar Cuentas a Pagar y mejorar la
            relación con proveedores mediante procesos claros y medibles.
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

      {/* VALORES */}
      <section className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Valores</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v) => (
              <Card key={v.title}>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <FiCheckCircle />
                  </div>
                  <div>
                    <h3 className="font-semibold">{v.title}</h3>
                    <p className="mt-1 text-xs text-indigo-500 uppercase tracking-wide">
                      {v.tag}
                    </p>
                    <p className="mt-3 text-sm text-neutral-600">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TRAYECTORIA */}
      <section className="border-t border-neutral-200 bg-neutral-50/70 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Trayectoria</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {timeline.map((t) => (
              <Card key={t.h}>
                <div className="text-xs font-semibold text-[var(--color-accent)]">
                  {t.y}
                </div>
                <div className="mt-1 font-semibold">{t.h}</div>
                <p className="mt-2 text-sm text-neutral-600">{t.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Equipo</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <Card key={m.name}>
                <div className="flex items-start gap-4">
                  {m.image && (
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div>
                    <div className="font-semibold">{m.name}</div>
                    <div className="mt-1 text-xs text-neutral-500">
                      {m.role}
                    </div>
                    <a
                      href={m.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-[var(--color-accent)] underline underline-offset-4"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TRABAJAR */}
      <section className="border-t border-neutral-200 bg-neutral-50/70 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-10 text-center shadow-sm">
            <h3 className="text-3xl font-extrabold">
              ¿Querés trabajar en Moksa IT?
            </h3>

            <UploadCvSection />
          </div>
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
