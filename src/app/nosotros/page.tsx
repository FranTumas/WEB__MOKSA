/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from "@/Component/card";
import { PrimaryButton } from "@/Component/buttons/PrimaryButton";
import { SecondaryButton } from "@/Component/buttons/SecondaryButton";
import { UploadCvSection } from "@/Component/UploadCvSection";

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
    { k: "9.1/10", t: "satisfacción usuarios (NPS)" },
  ];

  const valores = [
    {
      title: "Resultados primero",
      desc: "Cada entrega tiene un KPI asociado y una hipótesis de impacto.",
    },
    {
      title: "Calidad y mantenibilidad",
      desc: "ABAP y extensiones limpias, con estándares y revisiones.",
    },
    {
      title: "Bajo riesgo",
      desc: "Iteraciones cortas, feature flags y reversibilidad.",
    },
    {
      title: "Colaboración",
      desc: "Negocio, finanzas y TI alineados en objetivos y métricas.",
    },
    {
      title: "Transparencia",
      desc: "Timeline, alcance y supuestos claros desde el kickoff.",
    },
    {
      title: "Mejora continua",
      desc: "Retro y hardening post go-live con aprendizaje real.",
    },
  ];

  const timeline = [
    {
      y: "2012–2016",
      h: "Primeras implantaciones SAP OpenText (LATAM)",
      d: "Proyectos VIM y Content Server; foco en Cuentas a Pagar.",
    },
    {
      y: "2017–2021",
      h: "Expansión y optimización",
      d: "Casos en Europa, estandarización de prácticas y tableros de KPIs.",
    },
    {
      y: "2022–2024",
      h: "S/4HANA & touchless",
      d: "Migraciones, mejoras de performance y más automatización end-to-end.",
    },
    {
      y: "2025+",
      h: "Escala y producto",
      d: "Portal de Proveedores y analítica aplicada a operación de CxP.",
    },
  ];

  const team = [
    {
      name: "Sebastian Rossi",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
    {
      name: "Gonzalo Tejada",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
  ];

  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hola%20Moksa%20IT%2C%20quiero%20conversar%20sobre%20un%20proyecto%20SAP%20o%20VIM.";
    

  return (
    <main className="bg-white text-neutral-900">
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Quiénes somos</h1>
        <p className="mt-3 text-neutral-600 max-w-3xl">
          Somos un equipo con 15+ años en implantaciones SAP OpenText en América y
          Europa. Ayudamos a Finanzas y TI a{" "}
          <strong>automatizar Cuentas a Pagar</strong>, mejorar la trazabilidad y
          reducir tiempos de ciclo, con entregas seguras y medibles.
        </p>

        {/* KPIs */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((x) => (
            <div
              key={x.t}
              className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="text-2xl font-extrabold">{x.k}</div>
              <div className="text-xs text-neutral-500 mt-1">{x.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Propósito */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">Nuestro propósito</h2>
            <p className="mt-2 text-neutral-600">
              Reducir el trabajo manual, elevar la calidad de la información y
              acelerar los cierres financieros <em>sin fricción</em>. Lo hacemos con
              procesos claros, código mantenible y métricas que importan al negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Valores</h2>
          <p className="mt-2 text-neutral-600">
            Cómo trabajamos y qué podés esperar en el día a día.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v) => (
              <Card key={v.title}>
                <div className="h-10 w-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                  ✓
                </div>
                <div className="mt-4 font-semibold">{v.title}</div>
                <p className="mt-2 text-sm text-neutral-600">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Trayectoria</h2>
          <p className="mt-2 text-neutral-600">
            Hitos que moldean nuestra forma de ejecutar.
          </p>

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

      {/* Equipo */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Equipo</h2>
          <p className="mt-2 text-neutral-600">
            Liderado por especialistas funcionales y técnicos.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {team.map((m) => (
              <Card key={m.name}>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-neutral-100 shrink-0" />
                  <div>
                    <div className="font-semibold">{m.name}</div>
                    <div className="mt-3">
                      <a
                        href={m.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-[var(--color-accent)] underline underline-offset-4"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trabajar en Moksa IT */}
      <section className="mt-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-10 shadow-sm text-center">
            <h3 className="text-3xl font-extrabold tracking-tight">
              ¿Querés trabajar en Moksa IT?
            </h3>

            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Estamos sumando talento para proyectos SAP, ABAP y OpenText. Buscamos
              personas curiosas, responsables y con ganas de aprender y crecer en un
              equipo dinámico con foco en calidad, procesos claros y entregas
              medibles.
            </p>

            <ul className="mt-8 space-y-2 text-base text-neutral-700 max-w-md mx-auto text-left leading-relaxed">
              <li>• Experiencia o interés en SAP (ABAP, VIM, Fiori, integraciones).</li>
              <li>• Capacidad de análisis y resolución de problemas.</li>
              <li>• Buena comunicación y trabajo en equipo.</li>
              <li>• Inglés técnico (no excluyente).</li>
            </ul>

            {/* Sección de carga de CV (client component) */}
            <UploadCvSection />
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
