/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/page.tsx

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import UploadCvSection from "@/Component/UploadCvSection";
import {
  FiLayers,
  FiCode,
  FiFileText,
  FiClock,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";
import {
  FiHeadphones,
  FiAlertTriangle,
  FiRefreshCcw,
  FiUsers
} from "react-icons/fi";
import { ClientsLogosSlider as ClientsSlider } from "@/Component/ClientsSlider";


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
    <div
      className={`${base} ${skin} ${className} hover:border-[var(--color-accent)]/30 group`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const brand = "Moksa IT";
  const claim = "Consultoría IT y servicios SAP orientados a resultados";

  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hola%20Moksa%20IT%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20un%20proyecto%20SAP%20o%20VIM.";
  const EMAIL =
    "mailto:info@moksait.com, info@moksait.com?subject=Consulta%20Moksa%20IT&body=Hola%2C%20les%20escribo%20por%20...";

  const features = [
    {
      title: "Implementaciones SAP",
      desc: "S/4HANA, ECC y módulos clave con enfoque en procesos, operación y adopción.",
    },
    {
      title: "ABAP & Extensiones",
      desc: "Desarrollo limpio, mejoras evolutivas, BAPIs, RFC, OData y APIs para integrar tu ecosistema.",
    },
    {
      title: "VIM / OpenText",
      desc: "Flujos de aprobación, KPIs y automatización del ciclo de documentos y comprobantes.",
    },
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
      desc: "BAPIs y jobs programados, más OData para exponer datos a apps internas y reportes.",
      kpis: [
        { label: "-60% tiempo operativo", note: "en cierres mensuales" },
        { label: "-40% errores", note: "por ingreso manual" },
        { label: "SLA < 4h", note: "en incidencias P3" },
      ],
    },
    {
      tag: "S/4HANA",
      title: "Optimización post-migración",
      desc: "Ajuste de performance, notas SAP críticas y capacitación focalizada para usuarios clave.",
      kpis: [
        { label: "+30% performance", note: "en reportes clave" },
        { label: "0 incidentes P1", note: "en go-live y primer mes" },
        { label: "NPS 9.1/10", note: "en satisfacción de usuarios" },
      ],
    },
  ];

  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="relative min-h-[80vh]">
        {/* Imagen de fondo */}
        <Image
          src="/hero-sap.jpg"
          alt="Ciudad moderna y transformación digital"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Contenido centrado */}
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            INNOVACIÓN DIGITAL
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-neutral-100 sm:text-base md:text-lg">
            Consultoría SAP con foco en eficiencia operativa y transformación digital.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contacto"
              className="rounded-full border border-white bg-white/90 px-8 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white"
            >
              ¿Necesitás información?
            </Link>
            <Link
              href="/servicios"
              className="rounded-full border border-white/70 px-8 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section
        id="nosotros"
        className="border-t border-neutral-200 bg-white py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            {/* Columna de texto */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
                Sobre <span className="text-[var(--color-accent)]">Moksa IT</span>
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                Somos un equipo joven con más de 15 años de experiencia en
                consultoría de implantación para soluciones SAP y OpenText en
                América y Europa, acompañando a distintas organizaciones en la
                mejora de su gestión, control y trazabilidad de información clave.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Nuestro compromiso es acompañar la evolución de los procesos
                relacionados con pagos, documentos y aprobaciones, acercando
                soluciones prácticas y dinámicas que faciliten la gestión diaria,
                reduzcan riesgos y fortalezcan la relación con socios y proveedores.
              </p>

              {/* CTA tipo “¿Hablamos?” */}
              <div className="mt-8">
                <Link
                  href="/contacto"
                  className="inline-block rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
                >
                  Contacto
                </Link>
              </div>
            </div>

            {/* Columna de imagen/logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-3xl border border-neutral-200/70 bg-white/70 px-6 py-6 shadow-sm">
                <Image
                  src="/Moksa_vector.svg"
                  alt="Logo de Moksa IT"
                  width={320}
                  height={340}
                  className="max-w-[360px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Capacidades */}
      <section id="capacidades" className="border-t border-neutral-200 py-20 bg-neutral-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Nuestras capacidades</h2>
            <p className="mt-2 text-neutral-600">
              Equipo ágil y dinámico, alineado a mejores prácticas y en mejora continua.
            </p>
          </div>

          {/* Slider-like banners */}
          <div className="mt-10">
            {/* contenedor scrollable */}
            <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 pb-4">
              {[
                {
                  id: "cap-1",
                  title: "EQUIPO DE DESARROLLO",
                  desc: "Desarrollo ágil con foco en calidad, velocidad y código mantenible para acompañar la evolución de tu solución SAP.",
                  image: "/EquipoDesarrollo.jpg",
                },
                {
                  id: "cap-2",
                  title: "CONOCIMIENTO FUNCIONAL",
                  desc: "Más de 15 años en implantaciones en América y Europa, entendiendo procesos, operación diaria y necesidades de seguimiento.",
                  image: "/ConocimientoFuncional.jpg",
                },
                {
                  id: "cap-3",
                  title: "RESPUESTA",
                  desc: "Ideas aplicadas a mejora continua, reduciendo desvíos y mejorando la interacción entre equipos internos y externos.",
                  image: "/Respuesta.jpg",
                },
                {
                  id: "cap-4",
                  title: "COLABORACIÓN",
                  desc: "Alineamos el modelo de negocio con mejores prácticas y una optimización integral de punta a punta.",
                  image: "/Colaboración.jpg",
                },
              ].map((slide) => (
                <article
                  key={slide.id}
                  id={slide.id}
                  className="relative h-[260px] sm:h-[320px] w-full shrink-0 snap-center overflow-hidden rounded-3xl bg-neutral-900 text-white"
                >
                  {/* imagen de fondo */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover opacity-70"
                  />

                  {/* overlay para oscurecer un poco */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* contenido */}
                  <div className="relative z-10 flex h-full flex-col justify-center px-8 sm:px-12">
                    <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                      {slide.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
                      {slide.desc}
                    </p>

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

            {/* puntitos de navegación (anclas a cada slide) */}
            <div className="mt-4 flex justify-center gap-2">
              {["cap-1", "cap-2", "cap-3", "cap-4"].map((id, index) => (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-label={`Ir a capacidad ${index + 1}`}
                  className="h-2 w-2 rounded-full bg-neutral-300 hover:bg-[var(--color-accent)] transition"
                />
              ))}
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
              Especialistas en Vendor Invoice Management (VIM) by OpenText para
              SAP, optimización de flujos y transformación digital sin papel.
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
                Automatización end-to-end del ciclo de facturas: recepción,
                validación, aprobación y contabilización, con analítica de KPIs.
              </p>
              <ul className="mt-4 space-y-1 text-sm">
                <li>• Reglas, funciones y acciones preconfiguradas</li>
                <li>• Integración completa con SAP</li>
                <li>• Métricas y KPIs para la operación</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Proceso
              </div>
              <h3 className="mt-1 text-lg font-semibold">
                Optimización de flujos
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Ordenamos procesos inorgánicos y unificamos el marco de trabajo
                para la compañía, estructurando la operación alrededor de un
                flujo claro de documentos y aprobaciones.
              </p>
              <ul className="mt-4 space-y-1 text-sm">
                <li>• Integración de áreas involucradas en el ciclo de facturas</li>
                <li>• Reducción de tiempos y reprocesos</li>
                <li>• Mejora de la trazabilidad de punta a punta</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Cultura sin papel
              </div>
              <h3 className="mt-1 text-lg font-semibold">
                Transformación digital
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Pasaje a flujos sin papel, con resguardo de contenido e
                información sensible y gobierno del dato.
              </p>
              <ul className="mt-4 space-y-1 text-sm">
                <li>• Contenido centralizado</li>
                <li>• Cumplimientos y auditoría</li>
                <li>• KPIs operativos</li>
              </ul>
            </Card>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Soluciones complementarias
              </div>
              <h3 className="mt-1 text-lg font-semibold">
                Evolución e integraciones
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Desarrollos, extensiones e integraciones que complementan el
                ecosistema SAP, mejoran la experiencia de los equipos y habilitan
                nuevos escenarios de consulta, carga y seguimiento de información.
              </p>
            </Card>
          </div>

          <div className="mt-8">
            <Link
              href="/servicios"
              className="group inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 hover:-translate-y-0.5_focus:outline-none focus:ring-4 focus:ring-neutral-200"
            >
              Ver todos los servicios
              <span className="inline-block pl-1 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
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
            image: "/Go-Live.jpg",
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

            


      {/* Soporte & SLA */}
<section id="sla" className="border-t border-neutral-200 bg-white py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="max-w-2xl">
      <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
        Soporte &amp; SLA
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight">
        Soporte y acuerdos de servicio (SLA)
      </h2>
      <p className="mt-2 text-neutral-600 text-sm md:text-base">
        Definimos tiempos y modalidades de atención claros para cada tipo de
        requerimiento, alineando expectativas y facilitando la gestión del día a día.
      </p>
    </div>

    {/* Tarjetas */}
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {[
        {
          icon: FiHeadphones,
          title: "Modelo de soporte",
          desc: "Combinamos soporte funcional y técnico en un modelo escalable que cubre consultas, incidentes y mejoras evolutivas.",
          bullets: [
            "Canales de contacto definidos",
            "Priorización según impacto",
            "Seguimiento hasta el cierre",
          ],
        },
        {
          icon: FiAlertTriangle,
          title: "Niveles de prioridad",
          desc: "Clasificamos los incidentes por criticidad para asegurar una respuesta alineada al impacto en la operación.",
          bullets: [
            "Crítico: atención inmediata y foco total",
            "Alto: impacto relevante, resolución en ventanas acotadas",
            "Medio y Bajo: seguimiento planificado y controlado",
          ],
        },
        {
          icon: FiRefreshCcw,
          title: "Ciclo de atención",
          desc: "Cada ticket sigue un flujo definido desde la recepción hasta el cierre, dejando trazabilidad y acuerdos claros.",
          bullets: [
            "Registro y categorización",
            "Asignación y análisis",
            "Propuesta de solución y validación",
            "Cierre documentado y lecciones aprendidas",
          ],
        },
      ].map((item) => {
        const Icon = item.icon;
        return (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)]/30 hover:shadow-lg"
          >
            {/* Glow de fondo */}
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-[var(--color-accent)]/15 via-indigo-400/10 to-transparent blur-2xl transition-transform duration-300 group-hover:scale-110" />

            {/* Contenido */}
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon className="text-lg" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900">
                  {item.title}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.desc}
              </p>

              <ul className="mt-4 space-y-1.5 text-sm text-neutral-600">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-[3px] inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  </div>
</section>



      {/* Experiencia en clientes */}
<section id="clientes" className="border-t border-neutral-200 bg-white py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="max-w-2xl">
      <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
        Experiencia
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight">
        Experiencia en clientes
      </h2>
      <p className="mt-2 text-neutral-600 text-sm md:text-base">
        Participamos en proyectos de distinta escala, desde implementaciones iniciales
        hasta optimizaciones sobre soluciones productivas, en organizaciones de diversos rubros.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {[
        {
          icon: FiTrendingUp,
          title: "Implementaciones y mejoras",
          desc: "Proyectos de implantación, evolución y estabilización de soluciones SAP y OpenText, con foco en adopción y resultados medibles.",
          bullets: [
            "Implementaciones end-to-end",
            "Mejoras post-go-live",
            "Optimización de performance",
          ],
        },
        {
          icon: FiUsers,
          title: "Equipos distribuidos",
          desc: "Trabajo integrado con equipos locales, regionales y globales, bajo modelos coordinados de trabajo.",
          bullets: [
            "Modelos colaborativos",
            "Alineación entre áreas",
            "Comunicación continua",
          ],
        },
        {
          icon: FiLayers,
          title: "Procesos críticos",
          desc: "Experiencia en procesos donde la trazabilidad y el control de información son claves para la operación.",
          bullets: [
            "Flujos sensibles al negocio",
            "Gobierno del dato",
            "Control y auditoría",
          ],
        },
      ].map((item) => {
        const Icon = item.icon;
        return (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)]/30 hover:shadow-lg"
          >
            {/* Glow */}
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full 
              bg-gradient-to-br from-[var(--color-accent)]/15 via-indigo-400/10 to-transparent 
              blur-2xl transition-transform duration-300 group-hover:scale-110"
            />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon className="text-lg" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900">
                  {item.title}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.desc}
              </p>

              <ul className="mt-4 space-y-1.5 text-sm text-neutral-600">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-[3px] inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>

    {/* Slider de clientes */}
    <ClientsSlider />
  </div>
</section>


      {/* Formulario */}
<section id="form" className="border-t border-neutral-200 py-20">
  <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-center text-3xl font-bold tracking-tight">
      Escribinos
    </h2>
    {/* FORMULARIO GOOGLE FORMS */}
    <form
      action="https://docs.google.com/forms/d/e/1FAIpQLSf5PVcOArhitpSeqhH_lxKbygEZnRrSpCQgdxyKFalDgycoRA/formResponse"
      method="POST"
      target="hidden_iframe"
      onSubmit={() => {
        setTimeout(() => {
          window.location.href = "/"; // redirige al Home
        }, 500);
      }}
      className="mx-auto mt-8 max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
    >
      {/* Campos */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Nombre */}
        <div>
          <label className="text-sm font-medium">Nombre</label>
          <input
            name="entry.1994300530"
            required
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            name="entry.1021242799"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
          />
        </div>
      </div>

      {/* Teléfono + Empresa */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Teléfono</label>
          <input
            name="entry.1785945974"
            type="tel"
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Empresa</label>
          <input
            name="entry.1002964135"
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
          />
        </div>
      </div>

      {/* Mensaje */}
      <div className="mt-4">
        <label className="text-sm font-medium">Mensaje</label>
        <textarea
          name="entry.149354678"
          required
          rows={6}
          className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
        />
      </div>

      {/* Checkbox + botón */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="inline-flex items-center gap-2 text-xs text-neutral-600">
          <input
            type="checkbox"
            required
            className="rounded border-neutral-300"
          />
          Acepto ser contactado para mi consulta.
        </label>

        <button
          type="submit"
          className="self-end rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30 active:translate-y-0 sm:self-auto"
        >
          Enviar
        </button>
      </div>
    </form>

    {/* IFRAME OCULTO PARA REDIRECCIÓN */}
    <iframe name="hidden_iframe" title="Hidden form submission iframe" style={{ display: "none" }}></iframe>
  </div>
</section>


      {/* CTA final */}
      <section id="contacto" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            ¿Hablamos de tu proyecto?
          </h2>

          <p className="mx-auto mt-3 max-w-[60ch] leading-relaxed tracking-[0.01em] text-neutral-600">
            Contanos brevemente tu desafío y te devolvemos una propuesta clara
            con alcance y tiempos estimados.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="min-w-[220px] inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30 active:translate-y-0"
            >
              Escribir por WhatsApp
            </a>
            <a
              href={EMAIL}
              className="min-w-[220px] inline-flex items-center justify-center rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-50 hover:border-neutral-400 focus:outline-none focus:ring-4 focus:ring-neutral-200 active:translate-y-0"
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
              <span>info@moksait.com</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span>📍</span>
              <span>
                Buenos Aires, Argentina · Proyectos en LATAM &amp; Europa
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="mx-auto mt-2 max-w-[65ch] leading-relaxed tracking-[0.01em] text-neutral-600">
            Respuestas rápidas antes de dar el siguiente paso.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {[
            {
              q: "¿Cuánto tarda un proyecto típico?",
              a: "Depende del alcance. Un soporte puntual puede resolverse en días; un proyecto end-to-end puede llevar entre 4 y 12 semanas según módulos, integraciones y dedicación disponible.",
            },
            {
              q: "¿Trabajan solo con SAP o también con otras soluciones?",
              a: "Nuestro foco es SAP (S/4HANA, ECC, ABAP, VIM) y OpenText, integrando soluciones complementarias cuando el caso lo requiere.",
            },
            {
              q: "¿Pueden trabajar por horas, por proyecto o con SLA?",
              a: "Sí. Podemos trabajar por bloques de horas, proyectos cerrados o evolución continua con acuerdos de servicio (SLA) monitoreados.",
            },
            {
              q: "¿Brindan acompañamiento post go-live?",
              a: "Sí. Acompañamos la estabilización, refinamos indicadores y brindamos soporte funcional/técnico según la necesidad de cada equipo.",
            },
            {
              q: "¿Cómo avanzamos si quiero comenzar?",
              a: "Nos contás el desafío, estimamos alcance, proponemos la modalidad y arrancamos con un kickoff para definir prioridades y entregables.",
            },
          ].map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                {f.q}
                <span className="transition text-neutral-400 group-open:rotate-180">
                  ⌄
                </span>
              </summary>
              <p className="mt-2 text-left text-sm leading-relaxed tracking-[0.005em] text-neutral-600">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Trabajar en Moksa IT */}
      <section className="mt-20">
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

            {/* Sección de carga de CV (client component) */}
            <UploadCvSection />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-neutral-500 sm:flex-row sm:px-6 lg:px-8">
          <div>
            © {new Date().getFullYear()} Moksa IT. Todos los derechos
            reservados.
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/company/moksa-it/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-[var(--color-accent)]"
            >
              <FaLinkedin className="text-lg" /> LinkedIn
            </a>
            <a
              href="https://github.com/moksa-it"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-[var(--color-accent)]"
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
