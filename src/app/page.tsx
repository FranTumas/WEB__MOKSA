/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/page.tsx
// Moksa IT — Home combinado (sin navbar interna; usa la Navbar global del layout)

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

type CaseItem = {
  tag: string;
  title: string;
  desc: string;
  kpis: { label: string; note: string }[];
};

function Card({
  children,
  highlighted = false,
  className = "",
}: {
  children: React.ReactNode;
  highlighted?: boolean;
  className?: string;
}) {
  const base =
    "rounded-2xl p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 will-change-transform";
  const skin = highlighted
    ? "border border-neutral-900 bg-neutral-900 text-white"
    : "border border-neutral-200 bg-white";
  return (
    <div className={`${base} ${skin} ${className} hover:border-[var(--color-accent)]/30 group`}>
      {children}
    </div>
  );
}

export default function Home() {
  const brand = "Moksa IT";
  const claim = "Consultoría IT y servicios SAP orientados a resultados";

  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hola%20Moksa%20IT%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20un%20proyecto%20SAP%20o%20VIM.";
  const CALENDLY = "https://calendly.com/tuusuario/30min";
  const EMAIL =
    "mailto:srossi@moksait.com, gtejada@moksait.com?subject=Consulta%20Moksa%20IT&body=Hola%2C%20les%20escribo%20por%20...";

  const features = [
    { title: "Implementaciones SAP", desc: "S/4HANA, ECC y módulos clave con enfoque en procesos y negocio." },
    { title: "ABAP & Extensiones", desc: "Desarrollo limpio, mejoras, BAPIs, RFC, OData y APIs." },
    { title: "VIM / OpenText", desc: "Flujos de aprobación, KPIs y automatización de facturas." },
  ];

  const cases: CaseItem[] = [
    {
      tag: "VIM / OpenText",
      title: "Automatización de ciclo de facturas",
      desc: "Rediseño de flujos, reglas de validación y métricas. Integración con OCR y mejoras en workitems.",
      kpis: [
        { label: "-35% tiempo de ciclo", note: "de recepción a contabilización" },
        { label: "+18% touchless", note: "más facturas sin intervención" },
        { label: "98% precisión OCR", note: "en lotes estables" },
      ],
    },
    {
      tag: "ABAP / Extensiones",
      title: "Eliminación de tareas manuales repetitivas",
      desc: "BAPIs y jobs programados + OData para exponer datos a apps internas.",
      kpis: [
        { label: "-60% tiempo operativo", note: "en cierres mensuales" },
        { label: "-40% errores", note: "por ingreso manual" },
        { label: "SLA < 4h", note: "incidencias P3" },
      ],
    },
    {
      tag: "S/4HANA",
      title: "Optimización post-migración",
      desc: "Ajuste de performance, notas SAP críticas y capacitación focalizada para key users.",
      kpis: [
        { label: "+30% performance", note: "en reportes clave" },
        { label: "0 incidentes P1", note: "en go-live y primer mes" },
        { label: "NPS 9.1/10", note: "satisfacción de usuarios" },
      ],
    },
  ];

  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(65%_65%_at_50%_0%,rgba(99,102,241,0.12)_0%,transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          {/* Grid: texto izquierda / imagen derecha */}
          <div className="grid gap-10 items-center lg:grid-cols-[0.9fr_1.5fr]">
            {/* Texto */}
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-3 py-1 text-[11px] font-semibold text-[var(--color-accent)]">
                Moksa IT · SAP · ABAP · VIM
              </span>

              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05]">
                {claim}
              </h1>

              <p className="mt-6 max-w-xl text-lg text-neutral-600">
                Experiencia en S/4HANA, ABAP y VIM. Entregables claros, riesgos
                controlados y foco en valor para el negocio.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 will-change-transform hover:brightness-110 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30 active:translate-y-0"
                >
                  Hablar ahora
                </Link>
                <Link
                  href="/servicios"
                  className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-neutral-200 active:translate-y-0"
                >
                  Ver servicios
                </Link>
              </div>

              <div className="mt-8 text-xs text-neutral-500 space-x-3">
                <span>✓ Sin comisiones ocultas</span>
                <span>✓ Listo en días</span>
                <span>✓ Soporte post-lanzamiento</span>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative h-64 sm:h-[22rem] lg:h-[28rem] xl:h-[30rem]">
              <Image
                src="/hero-sap.jpg" // archivo en /public
                alt="Tablero SAP/VIM con métricas"
                fill
                priority
                sizes="(min-width:1280px) 55vw, (min-width:1024px) 58vw, 90vw"
                className="object-cover rounded-2xl shadow-2xl ring-1 ring-black/5 bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Qué servicios ofrecemos</h2>
          <p className="mt-2 text-neutral-600">
            Acompañamos tu operación SAP con foco en eficiencia, automatización y escalabilidad.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title}>
                <div className="h-10 w-10 rounded-xl bg-neutral-100 flex items-center justify-center">✓</div>
                <div className="mt-4 font-semibold">{f.title}</div>
                <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/servicios"
              className="group inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-neutral-200"
            >
              Ver todos los servicios
              <span className="inline-block pl-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="border-t border-neutral-200 py-20">
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div className="grid gap-8 lg:grid-cols-2 items-center">
      {/* Columna de texto */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Quiénes somos</h2>
        <p className="mt-3 text-neutral-600">
          Somos un equipo joven con más de 15 años de experiencia en consultoría de implantación para soluciones SAP OpenText en América y Europa, colaborando con distintas unidades de negocio para mejorar la gestión y control del pago a proveedores y procesos de transformación digital.
        </p>
        <p className="mt-3 text-neutral-500">
          Nuestro principal compromiso es brindar apoyo en la transformación e integración del área Cuentas a Pagar con proveedores, acercando soluciones prácticas y dinámicas que faciliten la gestión y mejoren la relación cliente–proveedor.
        </p>
      </div>

      {/* Columna de imagen/logo */}
      <div className="flex justify-center lg:justify-end">
  <Image
    src="/logo-moksa.png"
    alt="Logo de Moksa IT"
    width={320}     
    height={340}    
    className="object-contain max-w-[420px]" 
  />
</div>


    </div>
  </div>
</section>


      {/* Cómo trabajamos */}
      <section id="como" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Cómo trabajamos</h2>
            <p className="mt-2 text-neutral-600">Un proceso claro y medible para garantizar entregas seguras y alineadas al negocio.</p>
          </div>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { paso: "01", titulo: "Relevamiento & objetivos", desc: "Identificamos procesos, dolores y métricas clave." },
              { paso: "02", titulo: "Diseño de solución", desc: "Definimos arquitectura, esfuerzos y riesgos." },
              { paso: "03", titulo: "Build & pruebas", desc: "Desarrollamos, testeamos y validamos con el negocio." },
              { paso: "04", titulo: "Go-live & soporte", desc: "Acompañamos la salida y monitoreamos resultados." },
            ].map((step) => (
              <Card key={step.paso}>
                <div className="text-xs text-neutral-500">Paso {step.paso}</div>
                <div className="mt-1 font-semibold">{step.titulo}</div>
                <p className="mt-2 text-sm text-neutral-600">{step.desc}</p>
              </Card>
            ))}
          </ol>
          {/* Infografía de pasos */}
          <div className="mt-12">
<div className="mt-12">
  <div className="mx-auto max-w-4xl">
    <figure className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="mt-10 flex justify-center">
  <Image
    src="/pasos.png"
    alt="Flujo de trabajo SAP"
    width={1400}     // controla el tamaño visible (ajustá si querés)
    height={360}     // proporcional al nuevo archivo
    quality={100}    // sin compresió
    priority
  />
</div>
      {/* Caption opcional - si querés se puede eliminar */}
      <figcaption className="px-3 pb-3 sm:px-4 sm:pb-4 text-center text-xs text-neutral-500">
        Nuestro flujo en 4 etapas: análisis, diseño, desarrollo y go-live con soporte.
      </figcaption>
    </figure>
  </div>
</div>
</div>


        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Servicios</h2>
            <p className="mt-2 text-neutral-600">
              Especialistas en Vendor Invoice Management (VIM) by OpenText para SAP, optimización de flujos y transformación digital sin papel.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">SAP · OpenText</div>
              <h3 className="mt-1 text-lg font-semibold">Vendor Invoice Management (VIM)</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Automatización end-to-end del ciclo de facturas: recepción, validación, aprobación y contabilización, con analítica de KPI.
              </p>
              <ul className="mt-4 text-sm space-y-1">
                <li>• Reglas, funciones y acciones preconfiguradas</li>
                <li>• Integración completa con SAP</li>
                <li>• Métricas y KPIs para operación</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Proceso</div>
              <h3 className="mt-1 text-lg font-semibold">Optimización de flujos</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Ordenamos procesos inorgánicos y unificamos el marco de trabajo para la compañía, centrando la operación en CxP.
              </p>
              <ul className="mt-4 text-sm space-y-1">
                <li>• Integración de áreas satélite al flujo de facturas</li>
                <li>• Reducción de tiempos y reprocesos</li>
                <li>• Mejora de la trazabilidad</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Cultura sin papel</div>
              <h3 className="mt-1 text-lg font-semibold">Transformación digital</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Pasaje a flujos sin papel, con resguardo de contenido e información sensible y gobierno del dato.
              </p>
              <ul className="mt-4 text-sm space-y-1">
                <li>• Contenido centralizado</li>
                <li>• Cumplimientos y auditoría</li>
                <li>• KPIs operativos</li>
              </ul>
            </Card>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Fuera de SAP</div>
              <h3 className="mt-1 text-lg font-semibold">Desarrollos no SAP</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Aplicaciones web y móviles, gestión documental e integraciones. Soluciones innovadoras y escalables para optimizar procesos e impulsar crecimiento.
              </p>
            </Card>
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Producto propio</div>
              <h3 className="mt-1 text-lg font-semibold">Portal de Proveedores</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Desarrollo propio (.NET + Angular): envío de facturas, publicación de datos de pago, autorregistro y workflows automáticos de aprobación interna.
              </p>
            </Card>
          </div>

          <div className="mt-8">
            <Link
              href="/servicios"
              className="group inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-neutral-200"
            >
              Ver todos los servicios
              <span className="inline-block pl-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Capacidades */}
      <section id="capacidades" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Nuestras capacidades</h2>
            <p className="mt-2 text-neutral-600">Equipo ágil y dinámico, ajustado a mejores prácticas y en mejora continua.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card><h3 className="text-lg font-semibold">Equipo de desarrollo</h3><p className="mt-2 text-sm text-neutral-600">Desarrollo ágil, foco en resolver con calidad y velocidad.</p></Card>
            <Card><h3 className="text-lg font-semibold">Conocimiento funcional</h3><p className="mt-2 text-sm text-neutral-600">15+ años en implantaciones en América y Europa, entendiendo procesos y negocio.</p></Card>
            <Card><h3 className="text-lg font-semibold">Respuesta</h3><p className="mt-2 text-sm text-neutral-600">Ideas aplicadas a mejora continua en la relación cliente–proveedor y CxP.</p></Card>
            <Card><h3 className="text-lg font-semibold">Colaboración</h3><p className="mt-2 text-sm text-neutral-600">Alineamos el modelo de negocio con mejores prácticas y optimización integral.</p></Card>
          </div>
        </div>
      </section>

      {/* Casos */}
      <section id="casos" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Casos de éxito y resultados</h2>
            <p className="mt-2 text-neutral-600">Impacto medible en tiempo, calidad y costos. Algunos ejemplos recientes:</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {cases.map((c) => (
              <Card key={c.title}>
                <div className="text-xs font-medium text-neutral-500">{c.tag}</div>
                <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-[var(--color-accent)]">{c.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{c.desc}</p>
                <ul className="mt-4 grid gap-2">
                  {c.kpis.map((k) => (
                    <li key={k.label} className="flex items-start gap-2">
                      <span className="inline-flex shrink-0 items-center rounded-lg border border-neutral-200 px-2 py-1 text-xs font-semibold">{k.label}</span>
                      <span className="text-xs text-neutral-500">{k.note}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/casos"
              className="group inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-neutral-200"
            >
              Ver más casos
              <span className="inline-block pl-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="form" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center">Escribinos</h2>
          <p className="mt-2 max-w-prose mx-auto text-center text-neutral-600 leading-relaxed">
            Te respondemos en el mismo día hábil.
          </p>

          <form
            action="https://formspree.io/f/xxxxxxxx"
            method="POST"
            className="mt-8 mx-auto max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            {/* Campos */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Nombre</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium">Mensaje</label>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
              />
            </div>

            {/* Checkbox + botón */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <label className="text-xs text-neutral-600 inline-flex items-center gap-2">
                <input type="checkbox" required className="rounded border-neutral-300" />
                Acepto ser contactado para mi consulta.
              </label>

              <button
                className="self-end sm:self-auto rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 will-change-transform hover:brightness-110 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30 active:translate-y-0"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA final */}
      <section id="contacto" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">¿Hablamos de tu proyecto?</h2>

          <p className="mt-3 mx-auto max-w-[60ch] text-neutral-600 leading-relaxed tracking-[0.01em]">
            Contanos brevemente tu desafío y te devolvemos una propuesta clara con
            alcance y tiempos estimados.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 will-change-transform hover:brightness-110 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30 min-w-[220px] active:translate-y-0"
            >
              Escribir por WhatsApp
            </a>

            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-neutral-200 min-w-[220px] active:translate-y-0"
            >
              Agendar una llamada
            </a>

            <a
              href={EMAIL}
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-neutral-200 min-w-[220px] active:translate-y-0"
            >
              Enviar un email
            </a>
          </div>

          <ul className="mt-8 space-y-2 text-sm text-neutral-700">
            <li className="flex items-center justify-center gap-2">
              <span>📞</span>
              <span>+54 9 11 6046 2131 · +54 9 11 6354 6727</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span>📧</span>
              <span>srossi@moksait.com · gtejada@moksait.com</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span>📍</span>
              <span>Buenos Aires, Argentina · Proyectos en LATAM &amp; Europa</span>
            </li>
          </ul>

          <ul className="mt-6 space-y-1 text-sm text-neutral-600 flex flex-col items-center">
            <p className="mt-5 text-xs text-neutral-500 flex justify-center w-full">
              Tiempo estimado de respuesta: dentro del mismo día hábil.
            </p>
          </ul>
        </div>
      </section>

      

      {/* FAQ */}
      <section id="faq" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Preguntas frecuentes</h2>
          <p className="mt-2 mx-auto max-w-[65ch] text-neutral-600 leading-relaxed tracking-[0.01em]">
            Respuestas rápidas antes de dar el siguiente paso.
          </p>
        </div>

        <div className="mt-10 mx-auto max-w-3xl divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {[
            {
              q: "¿Cuánto tarda un proyecto típico?",
              a: "Depende del alcance. Un soporte puntual puede resolverse en días; un proyecto end-to-end puede llevar entre 4 y 12 semanas según módulo e integraciones.",
            },
            {
              q: "¿Trabajan solo con SAP o también con otras soluciones?",
              a: "Nuestro core es SAP (S/4HANA, ECC, ABAP, VIM), pero podemos integrar OCR, workflow apps, BI y APIs externas.",
            },
            {
              q: "¿Pueden trabajar por horas, por proyecto o con SLA?",
              a: "Sí. Soporte por bloques de horas, proyectos cerrados o evolución continua con SLA monitoreado.",
            },
            {
              q: "¿Brindan acompañamiento post go-live?",
              a: "Sí. Acompañamos estabilización, refinamos indicadores y brindamos soporte funcional/técnico según necesidad.",
            },
            {
              q: "¿Cómo avanzamos si quiero comenzar?",
              a: "Nos contás el desafío, estimamos alcance, proponemos modalidad y arrancamos con un kickoff para definir prioridades y entregables.",
            },
          ].map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                {f.q}
                <span className="text-neutral-400 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-neutral-600 text-left leading-relaxed tracking-[0.005em]">
                {f.a}
              </p>
            </details>
          ))}
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
        Estamos sumando talento para proyectos SAP, ABAP y OpenText.  
        Buscamos personas curiosas, responsables y con ganas de aprender  
        y crecer en un equipo dinámico con foco en calidad, procesos claros  
        y entregas medibles.
      </p>

      {/* LISTA: columna central */}
      <ul className="mt-8 space-y-2 text-base text-neutral-700 max-w-md mx-auto text-left leading-relaxed">
        <li>• Experiencia o interés en SAP (ABAP, VIM, Fiori, integraciones).</li>
        <li>• Capacidad de análisis y resolución de problemas.</li>
        <li>• Buena comunicación y trabajo en equipo.</li>
        <li>• Inglés técnico (no excluyente).</li>
      </ul>

      {/* BOTONES: mismo ancho que la lista */}
      <div className="mt-10 w-full max-w-md mx-auto flex flex-wrap justify-center gap-4">
        <a
          href="mailto:rrhh@moksait.com?subject=Postulación%20Laboral%20-%20Moksa%20IT"
          className="
            rounded-xl bg-[var(--color-accent)] px-7 py-3.5 
            text-base font-semibold text-white 
            hover:brightness-110 hover:shadow-md transition
          "
        >
          Enviar CV
        </a>

        <a
          href="https://wa.me/5491160462131?text=Hola%20Moksa%20IT%2C%20quiero%20postularme%20para%20trabajar%20con%20ustedes."
          target="_blank"
          className="
            rounded-xl border border-neutral-300 px-7 py-3.5 
            text-base font-semibold 
            hover:bg-neutral-50 hover:border-neutral-400 transition
          "
        >
          Contactar por WhatsApp
        </a>
      </div>

    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <div>© {new Date().getFullYear()} Moksa IT. Todos los derechos reservados.</div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/company/moksa-it/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[var(--color-accent)] transition"
            >
              <FaLinkedin className="text-lg" /> LinkedIn
            </a>
            <a
              href="https://github.com/moksa-it"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[var(--color-accent)] transition"
            >
              <FaGithub className="text-lg" /> GitHub
            </a>
          </div>
        </div>
      </footer>

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
