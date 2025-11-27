import { Card } from "@/Component/card";

type KPI = { label: string; note: string };
type CaseItem = { tag: string; title: string; desc: string; kpis: KPI[] };

const cases: CaseItem[] = [
  {
    tag: "VIM / OpenText",
    title: "Automatización de ciclo de facturas",
    desc:
      "Rediseño de flujos y reglas con OCR integrado. Tableros de métricas para operación y finanzas.",
    kpis: [
      { label: "-35% tiempo de ciclo", note: "recepción → contabilización" },
      { label: "+18% touchless", note: "menos intervención manual" },
      { label: "98% precisión OCR", note: "en lotes estables" },
    ],
  },
  {
    tag: "ABAP / Extensiones",
    title: "Eliminación de tareas manuales repetitivas",
    desc:
      "BAPIs, jobs programados y OData para exponer datos a apps internas. Alertas y reintentos.",
    kpis: [
      { label: "-60% tiempo operativo", note: "cierres mensuales" },
      { label: "-40% errores", note: "por ingreso manual" },
      { label: "SLA < 4h", note: "incidencias P3" },
    ],
  },
  {
    tag: "S/4HANA",
    title: "Optimización post-migración",
    desc:
      "Ajustes de performance, aplicación de notas críticas y capacitación focalizada para key users.",
    kpis: [
      { label: "+30% performance", note: "reportes clave" },
      { label: "0 incidentes P1", note: "go-live y primer mes" },
      { label: "NPS 9.1/10", note: "satisfacción de usuarios" },
    ],
  },
];

export const metadata = {
  title: "Casos — Moksa IT",
  description:
    "Casos de éxito con impacto medible en tiempo, calidad y costos: VIM, ABAP y S/4HANA.",
};

export default function CasosPage() {
  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hola%20Moksa%20IT%2C%20quiero%20conversar%20sobre%20un%20proyecto%20SAP%20o%20VIM.";
  

  return (
    <main className="bg-white text-neutral-900">
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Casos de éxito</h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Proyectos con impacto tangible en Cuentas a Pagar y áreas relacionadas. Nuestra
          prioridad: entregar valor rápido, con riesgos controlados y métricas claras.
        </p>

        {/* Capacidades clave (cintillo) */}
        <div className="mt-6 flex flex-wrap gap-2 text-[12px]">
          {[
            "Automatización de facturas (VIM)",
            "ABAP limpio y mantenible",
            "Integraciones OData/APIs",
            "KPIs y tableros operativos",
            "Hardening post-migración S/4HANA",
          ].map((cap) => (
            <span
              key={cap}
              className="rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-3 py-1 font-medium text-[var(--color-accent)]"
            >
              {cap}
            </span>
          ))}
        </div>
      </section>

      {/* Grid de casos */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {cases.map((c) => (
              <Card key={c.title}>
                <div className="text-xs font-medium text-neutral-500">{c.tag}</div>
                <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-[var(--color-accent)]">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{c.desc}</p>

                <ul className="mt-4 grid gap-2">
                  {c.kpis.map((k) => (
                    <li key={k.label} className="flex items-start gap-2">
                      <span className="inline-flex shrink-0 items-center rounded-lg border border-neutral-200 px-2 py-1 text-xs font-semibold">
                        {k.label}
                      </span>
                      <span className="text-xs text-neutral-500">{k.note}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Logos/partners placeholder (opcional) */}
          <div className="mt-12 rounded-2xl border border-neutral-200 bg-white p-6">
            <p className="text-xs text-neutral-500">Algunos clientes y partners</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 opacity-70">
              {["Cliente A", "Cliente B", "Partner C", "Partner D", "Cliente E", "Partner F"].map(
                (n) => (
                  <div
                    key={n}
                    className="h-10 rounded-lg border border-neutral-200/70 bg-neutral-50 flex items-center justify-center text-xs text-neutral-400"
                  >
                    {n}
                  </div>
                )
              )}
            </div>
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
