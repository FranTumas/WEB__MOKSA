import { Card } from "@/Component/card";

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

  const pasos = [
    { paso: "01", titulo: "Relevamiento & objetivos", desc: "Procesos, dolores, stakeholders y KPIs." },
    { paso: "02", titulo: "Diseño de solución", desc: "Arquitectura, integraciones, esfuerzo y riesgos." },
    { paso: "03", titulo: "Build & pruebas", desc: "Desarrollo, QA/UAT y validaciones de negocio." },
    { paso: "04", titulo: "Go-live & soporte", desc: "Acompañamiento, métricas y mejora continua." },
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

      {/* Cómo trabajamos */}
      <section id="como" className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Cómo trabajamos</h2>
            <p className="mt-2 text-neutral-600">
              Proceso iterativo, medible y con bajo riesgo para el negocio.
            </p>
          </div>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((s) => (
              <Card key={s.paso}>
                <div className="text-xs text-neutral-500">Paso {s.paso}</div>
                <div className="mt-1 font-semibold">{s.titulo}</div>
                <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
              </Card>
            ))}
          </ol>
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
