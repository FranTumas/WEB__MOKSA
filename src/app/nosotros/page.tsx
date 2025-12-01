import { Card } from "@/Component/card";
import { UploadCvSection } from "@/Component/UploadCvSection";
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
    },
    {
      name: "Gonzalo Daniel Tejada",
      role: "Co-fundador",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
    {
      name: "Emanuel Fernández",
      role: "....",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
    {
      name: "Facundo Simón Gastiarena Albarengue",
      role: "....",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
    {
      name: "Jeronimo Juarez Tabares",
      role: "....",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
    {
      name: "Martin Ignacio Rossi",
      role: "....",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
    
    {
      name: "Francisco Tumas",
      role: "....",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
    {
      name:"Justo Vannoni",
      role: "....",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    }
  ];

  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hola%20Moksa%20IT%2C%20quiero%20conversar%20sobre%20un%20proyecto%20SAP%20o%20VIM.";

  return (
    <main className="bg-white text-neutral-900">
      {/* Intro + KPIs */}
<section className="border-t border-neutral-200 bg-white pt-16 pb-10">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
      Nosotros
    </span>

    <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] lg:items-start">
      {/* Columna izquierda: texto principal */}
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight">
          Quiénes somos
        </h1>

        <p className="mt-3 max-w-3xl text-neutral-600">
          Somos un equipo de profesionales jóvenes con más de 15 años de
          experiencia en consultoría e implantaciones SAP OpenText en América
          y Europa. Acompañamos a Finanzas y TI en la{" "}
          <strong>transformación e integración del área de Cuentas a Pagar con los proveedores</strong>,
          acercando soluciones prácticas que ordenan la operación y mejoran la
          relación cliente–proveedor.
        </p>

        <p className="mt-3 max-w-3xl text-neutral-600">
          Nuestro foco está en <strong>automatizar Cuentas a Pagar</strong>,
          elevar la calidad del dato y reducir tiempos de ciclo, con entregas
          seguras, medibles y alineadas al modelo de negocio de cada compañía.
        </p>

        {/* Chips de foco */}
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-neutral-700">
          <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1">
            SAP · OpenText · VIM
          </span>
          <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1">
            Cuentas a Pagar &amp; Proveedores
          </span>
          <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1">
            +15 años de experiencia
          </span>
          <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1">
            Proyectos en América y Europa
          </span>
        </div>
      </div>

      {/* Columna derecha: qué nos define */}
      <aside className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-6 shadow-sm">
        <h2 className="text-sm font-semibold tracking-wide text-neutral-900 uppercase">
          Lo que nos define
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-neutral-700">
          <li className="flex gap-2">
            <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            <span>
              <strong>Visión de punta a punta</strong> del proceso de pago a
              proveedores, desde la recepción de facturas hasta el control del pago.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            <span>
              <strong>Experiencia transversal</strong> en distintas industrias
              y modelos de negocio, con foco en orden y trazabilidad.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            <span>
              <strong>Transformación digital sin papel</strong>: contenido
              centralizado, información sensible resguardada y procesos más ágiles.
            </span>
          </li>
        </ul>
      </aside>
    </div>

    {/* KPIs */}
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


      {/* Propósito */}
<section className="border-t border-neutral-200 bg-neutral-50/70 py-16">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold tracking-tight">
        Nuestro <span className="text-indigo-600">propósito</span>
      </h2>

      <p className="mt-2 text-neutral-600 leading-relaxed">
        Queremos que Cuentas a Pagar opere con <strong>fluidez, trazabilidad y cero fricción</strong>.
        Nuestro propósito es reducir el trabajo manual, mejorar la calidad de la información
        y acelerar los cierres financieros sin comprometer la gobernanza.
      </p>

      <p className="mt-4 text-neutral-600 leading-relaxed">
        Lo logramos mediante <strong>procesos claros, automatización inteligente</strong> y
        <strong>código mantenible</strong>, diseñado para escalar. Cada implementación se mide con
        KPIs reales que demuestran impacto: menos reprocesos, menos errores y más control
        operativo.
      </p>

      <p className="mt-4 text-neutral-600 leading-relaxed">
        Creemos en una operación donde Finanzas y TI trabajen sobre una misma verdad,
        y donde CxP pase de ser un cuello de botella a un <strong>habilitador estratégico</strong>
        para el negocio.
      </p>
    </div>
  </div>
</section>



      {/* Valores */}
<section className="border-t border-neutral-200 bg-white py-16">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
      Cultura &amp; valores
    </span>

    <h2 className="mt-4 text-3xl font-bold tracking-tight">Valores</h2>
    <p className="mt-2 text-neutral-600">
      Cómo trabajamos y qué podés esperar en el día a día al encarar un proyecto con nosotros.
    </p>

    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {valores.map((v) => (
        <Card key={v.title}>
          <div className="group relative flex h-full flex-col">
            {/* Icono + título */}
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <FiCheckCircle className="text-lg" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-neutral-900">
                  {v.title}
                </h3>
                <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-indigo-500">
                  {v.tag}
                </p>
              </div>
            </div>

            {/* Descripción */}
            <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
              {v.desc}
            </p>

            {/* Micro-claim al hover */}
            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[var(--color-accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              <span>Presente en cada proyecto</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Trayectoria */}
      <section className="border-t border-neutral-200 bg-neutral-50/70 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Trayectoria</h2>
          <p className="mt-2 text-neutral-600">
            Algunos hitos que moldean nuestra forma de ejecutar proyectos.
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
      <section className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Equipo</h2>
          <p className="mt-2 text-neutral-600">
            Liderado por especialistas funcionales y técnicos con experiencia en
            proyectos complejos.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {team.map((m) => (
              <Card key={m.name}>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-neutral-100" />
                  <div>
                    <div className="font-semibold">{m.name}</div>
                    {m.role && (
                      <div className="mt-1 text-xs text-neutral-500">
                        {m.role}
                      </div>
                    )}
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
      <section className="border-t border-neutral-200 bg-neutral-50/70 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-10 text-center shadow-sm">
            <h3 className="text-3xl font-extrabold tracking-tight">
              ¿Querés trabajar en Moksa IT?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Estamos sumando talento para proyectos SAP, ABAP y OpenText.
              Buscamos personas curiosas, responsables y con ganas de aprender y
              crecer en un equipo dinámico, con foco en calidad, procesos claros
              y entregas medibles.
            </p>

            <ul className="mx-auto mt-8 max-w-md list-none text-left text-base leading-relaxed text-neutral-700">
              <li>• Experiencia o interés en SAP (ABAP, VIM, Fiori, integraciones).</li>
              <li>• Capacidad de análisis y resolución de problemas.</li>
              <li>• Buena comunicación y trabajo en equipo.</li>
              <li>• Inglés técnico (no excluyente).</li>
            </ul>

            {/* Carga de CV (client component) */}
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
