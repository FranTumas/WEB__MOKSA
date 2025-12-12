/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from "@/Component/card";
import Image from "next/image";
import SupportProcessSlider from "@/Component/SupportProcessSlider";

export const metadata = {
  title: "SLA — Moksa IT",
  description:
    "Niveles de servicio, tiempos de respuesta y proceso de soporte para soluciones SAP y OpenText VIM.",
};

export default function SLAPage() {
  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hola%20Moksa%20IT%2C%20quisiera%20consultar%20sobre%20un%20SLA%20de%20soporte%20SAP%20o%20VIM.";
  const EMAIL =
    "mailto:info@moksait.com?subject=Consulta%20SLA%20Moksa%20IT&body=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20SLA...";

  return (
    <main className="bg-white text-neutral-900">
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
          SLA &amp; soporte
        </span>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">
          Acuerdos de servicio (SLA)
        </h1>
        <p className="mt-3 max-w-3xl text-neutral-600">
          Definimos tiempos objetivos y un proceso de atención simple y trazable.
          Niveles de criticidad, canales, métricas y responsabilidades quedan claros
          desde el día uno, y pueden ajustarse por contrato o SOW según la realidad
          de cada operación.
        </p>
      </section>

      {/* Cobertura & Canales */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Cobertura y canales
          </h2>
          <p className="mt-2 text-neutral-600">
            Modelo de soporte estándar. Horarios, alcances y modalidad pueden
            ampliarse o ajustarse por contrato/SOW.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Horario
              </div>
              <div className="mt-1 font-semibold">Lunes a viernes</div>
              <p className="mt-2 text-sm text-neutral-600">
                9:00–18:00 (GMT-3). Días hábiles de Argentina.
              </p>
            </Card>
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Canales
              </div>
              <div className="mt-1 font-semibold">Email / WhatsApp / Portal</div>
              <p className="mt-2 text-sm text-neutral-600">
                Registro de ticket por email/portal y canal directo para
                urgencias.
              </p>
            </Card>
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Cobertura
              </div>
              <div className="mt-1 font-semibold">N1 y N2</div>
              <p className="mt-2 text-sm text-neutral-600">
                Soporte funcional y técnico (ABAP, VIM, integraciones
                relacionadas).
              </p>
            </Card>
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Reportes
              </div>
              <div className="mt-1 font-semibold">KPIs mensuales</div>
              <p className="mt-2 text-sm text-neutral-600">
                Tickets, tiempos de atención y tendencias por criticidad.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Criticidad (Incidentes) */}
      <section className="border-t border-neutral-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Etiqueta + título */}
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
            SLA &amp; soporte
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight">
            Niveles de criticidad — Incidentes
          </h2>
          <p className="mt-2 max-w-3xl text-neutral-600 leading-relaxed">
            Tiempos objetivo para <strong>primer contacto</strong> y{" "}
            <strong>respuesta</strong> dentro de la ventana hábil. El tiempo de
            resolución dependerá del diagnóstico, alcance y ventanas de cambio
            disponibles.
          </p>

          {/* Tabla */}
          <div className="mt-8 overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <table className="w-full min-w-[720px] text-xs sm:text-sm">
              <thead className="border-b border-neutral-200 bg-neutral-50 text-neutral-500">
                <tr>
                  <th className="p-4 font-medium">Criticidad</th>
                  <th className="p-4 font-medium">Definición</th>
                  <th className="p-4 font-medium">Primer contacto</th>
                  <th className="p-4 font-medium">Respuesta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr className="hover:bg-neutral-50/80 transition-colors">
                  <td className="p-4 font-semibold text-[var(--color-accent)]">
                    Muy Alta (P1)
                  </td>
                  <td className="p-4">
                    Corte productivo, impacto masivo en la operación, sin workaround
                    disponible.
                  </td>
                  <td className="p-4 font-medium">1 hora</td>
                  <td className="p-4 font-medium">4 horas</td>
                </tr>
                <tr className="hover:bg-neutral-50/80 transition-colors">
                  <td className="p-4 font-semibold text-[var(--color-accent)]">
                    Alta (P2)
                  </td>
                  <td className="p-4">
                    Impacto alto con workaround parcial disponible. Afecta procesos
                    relevantes.
                  </td>
                  <td className="p-4 font-medium">2 horas</td>
                  <td className="p-4 font-medium">8 horas</td>
                </tr>
                <tr className="hover:bg-neutral-50/80 transition-colors">
                  <td className="p-4 font-semibold text-[var(--color-accent)]">
                    Media (P3)
                  </td>
                  <td className="p-4">
                    Funcionalidad afectada para un grupo acotado de usuarios o casos
                    específicos.
                  </td>
                  <td className="p-4 font-medium">4 horas</td>
                  <td className="p-4 font-medium">16 horas</td>
                </tr>
                <tr className="hover:bg-neutral-50/80 transition-colors">
                  <td className="p-4 font-semibold text-[var(--color-accent)]">
                    Baja (P4)
                  </td>
                  <td className="p-4">
                    Consulta o incidencia menor sin impacto operativo directo.
                  </td>
                  <td className="p-4 font-medium">8 horas</td>
                  <td className="p-4 font-medium">24 horas</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
            Horas consideradas como <strong>hábiles</strong> dentro de la ventana de
            soporte acordada.{" "}
            Los tiempos pueden ajustarse por contrato/SOW según la criticidad del
            negocio y la cobertura requerida.
          </p>
        </div>
      </section>

      {/* Evolutivos / Mejoras */}
      <section className="border-t border-neutral-200 bg-neutral-50/70 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Etiqueta */}
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
            Evolutivos
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight">
            Evolutivos y mejoras
          </h2>

          <p className="mt-2 max-w-3xl text-neutral-600 leading-relaxed">
            Cambios planificados fuera de incidentes: ajustes de reglas, nuevas
            validaciones, optimizaciones de performance y mejoras sobre flujos ya
            implementados.
          </p>

          {/* Cards de prioridad */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                level: "Muy Alta",
                hint: "Cambios urgentes que impactan procesos clave.",
                first: "4 horas",
                solution: "3 días",
              },
              {
                level: "Alta",
                hint: "Ajustes relevantes que mejoran la operación diaria.",
                first: "1 día",
                solution: "5 días",
              },
              {
                level: "Media",
                hint: "Mejoras incrementales y optimizaciones menores.",
                first: "2 días",
                solution: "6 días",
              },
            ].map((evo) => (
              <div
                key={evo.level}
                className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white px-5 py-6 shadow-sm"
              >
                <div className="text-xs font-semibold text-[var(--color-accent)]">
                  Prioridad
                </div>
                <h3 className="mt-1 text-lg font-semibold text-neutral-900">
                  {evo.level}
                </h3>

                <p className="mt-2 text-sm text-neutral-600 flex-1">
                  {evo.hint}
                </p>

                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wide text-neutral-500">
                      Primer contacto
                    </span>
                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                      {evo.first}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wide text-neutral-500">
                      Propuesta de solución
                    </span>
                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-800">
                      {evo.solution}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
            Tiempos expresados en días hábiles. Pueden ajustarse por contrato/SOW
            según complejidad, esfuerzo estimado y ventanas de cambio disponibles.
          </p>
        </div>
      </section>

      {/* Proceso de atención (SLIDER con imágenes) */}
      <SupportProcessSlider />

      {/* Alcance */}
      <section className="border-t border-neutral-200 bg-neutral-50/70 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-500">
              SLA estándar
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Alcance</h2>
            <p className="mt-2 text-neutral-600 leading-relaxed text-sm md:text-base">
              Qué actividades están incluidas en el SLA estándar y cuáles requieren
              estimación como proyecto o evolutivo, considerando esfuerzo técnico,
              impacto operativo, dependencias y ventanas de cambio.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Incluye */}
            <Card className="relative flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h3 className="mt-1 text-xl font-semibold text-neutral-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  ✔️
                </span>
                Incluye
              </h3>

              <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                Cobertura dentro del SLA
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-neutral-700">
                {[
                  "Atención N1/N2 (funcional y técnica)",
                  "Incidentes en VIM/ABAP/SAP existentes",
                  "Ajustes menores de configuración",
                  "Workarounds y fixes menores",
                  "Hardening post go-live",
                  "Reporte mensual de KPIs",
                  "Reuniones de seguimiento",
                  "Soporte en ambientes productivo y QA",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Excluye */}
            <Card className="relative flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h3 className="mt-1 text-xl font-semibold text-neutral-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                  ✖️
                </span>
                Excluye
              </h3>

              <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                Requiere estimación como evolutivo o proyecto
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-neutral-700">
                {[
                  "Nuevas funcionalidades end-to-end",
                  "Migraciones, upgrades o rollouts",
                  "Integraciones nuevas con terceros",
                  "Cambios masivos de datos maestros",
                  "Re-diseño completo de procesos",
                  "Desarrollo de reportes avanzados",
                  "Soporte fuera de horario o 24x7",
                  "Capacitaciones formales masivas",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
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