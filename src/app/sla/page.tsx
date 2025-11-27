import { Card } from "@/Component/card";
import { PrimaryButton } from "@/Component/buttons/PrimaryButton";
import { SecondaryButton } from "@/Component/buttons/SecondaryButton";

export const metadata = {
  title: "SLA — Moksa IT",
  description:
    "Niveles de servicio y tiempos de respuesta. Proceso claro de soporte y evolución continua.",
};

export default function SLAPage() {
  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hola%20Moksa%20IT%2C%20quisiera%20consultar%20sobre%20un%20SLA%20de%20soporte%20SAP%20o%20VIM.";
  const CALENDLY = "https://calendly.com/tuusuario/30min"; // reemplazar
  const EMAIL =
    "mailto:srossi@moksait.com, gtejada@moksait.com?subject=Consulta%20SLA%20Moksa%20IT&body=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20SLA...";

  return (
    <main className="bg-white text-neutral-900">
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Acuerdos de servicio (SLA)</h1>
        <p className="mt-3 max-w-3xl text-neutral-600">
          Definimos tiempos predecibles y un proceso de atención simple. Niveles de criticidad,
          canales, métricas y responsabilidades quedan claros desde el día uno.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-[12px]">
          {[
            "Atención N1/N2",
            "Ventana hábil 9–18 AR",
            "Escalamiento técnico",
            "Tablero de métricas",
            "Post go-live hardening",
          ].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-3 py-1 font-medium text-[var(--color-accent)]"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      {/* Cobertura & Canales */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Cobertura y canales</h2>
          <p className="mt-2 text-neutral-600">
            Modalidad estándar. Horarios y alcances pueden ajustarse por contrato/SOW.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Horario</div>
              <div className="mt-1 font-semibold">Lunes a Viernes</div>
              <p className="mt-2 text-sm text-neutral-600">9:00–18:00 (GMT-3). Días hábiles de Argentina.</p>
            </Card>
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Canales</div>
              <div className="mt-1 font-semibold">Email / WhatsApp / Portal</div>
              <p className="mt-2 text-sm text-neutral-600">Ticket por email, canal directo para urgencias.</p>
            </Card>
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Cobertura</div>
              <div className="mt-1 font-semibold">N1 y N2</div>
              <p className="mt-2 text-sm text-neutral-600">Funcional y técnico (ABAP, VIM, integraciones).</p>
            </Card>
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Reportes</div>
              <div className="mt-1 font-semibold">KPIs mensuales</div>
              <p className="mt-2 text-sm text-neutral-600">Tickets, tiempos y tendencias por criticidad.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Criticidad (Incidentes) */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Niveles de criticidad — Incidentes</h2>
          <p className="mt-2 text-neutral-600">
            Tiempos objetivo para <strong>primer contacto</strong> y <strong>respuesta</strong>.
            Resolución dependerá del diagnóstico y alcance.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200 bg-white">
            <table className="w-full text-sm">
              <thead className="text-left text-neutral-500">
                <tr>
                  <th className="p-4">Criticidad</th>
                  <th className="p-4">Definición</th>
                  <th className="p-4">Primer contacto</th>
                  <th className="p-4">Respuesta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr>
                  <td className="p-4 font-medium">Muy Alta (P1)</td>
                  <td className="p-4">Corte productivo, impacto masivo, sin workaround.</td>
                  <td className="p-4">1 hora</td>
                  <td className="p-4">4 horas</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Alta (P2)</td>
                  <td className="p-4">Impacto alto con workaround parcial.</td>
                  <td className="p-4">2 horas</td>
                  <td className="p-4">8 horas</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Media (P3)</td>
                  <td className="p-4">Funcionalidad afectada para un grupo acotado.</td>
                  <td className="p-4">4 horas</td>
                  <td className="p-4">16 horas</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Baja (P4)</td>
                  <td className="p-4">Consulta o incidencia menor sin impacto operativo.</td>
                  <td className="p-4">8 horas</td>
                  <td className="p-4">24 horas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Evolutivos / Mejoras */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Evolutivos y mejoras</h2>
          <p className="mt-2 text-neutral-600">
            Cambios planificados fuera de incidentes (ajustes, performance, nuevas reglas, etc.).
          </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200 bg-white">
          <table className="w-full text-sm">
            <thead className="text-left text-neutral-500">
              <tr>
                <th className="p-4">Prioridad</th>
                <th className="p-4">Primer contacto</th>
                <th className="p-4">Propuesta de solución</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              <tr>
                <td className="p-4 font-medium">Muy Alta</td>
                <td className="p-4">4 horas</td>
                <td className="p-4">3 días</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Alta</td>
                <td className="p-4">1 día</td>
                <td className="p-4">5 días</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Media</td>
                <td className="p-4">2 días</td>
                <td className="p-4">6 días</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-neutral-500">
          Tiempos de referencia; se ajustan por contrato/SOW según complejidad y ventanas de cambio.
        </p>
        </div>
      </section>

      {/* Proceso de atención */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Proceso</h2>
          <p className="mt-2 text-neutral-600">Ruta de un ticket desde la recepción hasta el cierre.</p>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { p: "01", t: "Recepción", d: "Ticket por email/portal con evidencia y criticidad." },
              { p: "02", t: "Categorización", d: "Funcional/técnico, impacto y prioridad." },
              { p: "03", t: "Asignación", d: "N1/N2 + escalamiento si aplica." },
              { p: "04", t: "Seguimiento", d: "Actualizaciones y workaround si es necesario." },
              { p: "05", t: "Cierre", d: "Validación con usuario, documentación y métricas." },
            ].map((s) => (
              <Card key={s.p}>
                <div className="text-xs text-neutral-500">Paso {s.p}</div>
                <div className="mt-1 font-semibold">{s.t}</div>
                <p className="mt-2 text-sm text-neutral-600">{s.d}</p>
              </Card>
            ))}
          </ol>
        </div>
      </section>

      {/* RACI + Alcance */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Alcance */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Alcance</h2>
              <p className="mt-2 text-neutral-600">
                Qué incluye el SLA estándar y qué queda fuera (a presupuestar como evolutivo).
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <Card>
                  <div className="font-semibold">Incluye</div>
                  <ul className="mt-2 text-sm text-neutral-600 space-y-1">
                    <li>• Atención N1/N2 (funcional y técnico)</li>
                    <li>• Incidentes en VIM/ABAP/SAP relacionados</li>
                    <li>• Workarounds y fixes menores</li>
                    <li>• Monitoreo post go-live (hardening)</li>
                    <li>• Reporte mensual de KPIs</li>
                  </ul>
                </Card>
                <Card>
                  <div className="font-semibold">Excluye</div>
                  <ul className="mt-2 text-sm text-neutral-600 space-y-1">
                    <li>• Nuevas funcionalidades de gran alcance</li>
                    <li>• Proyectos de migración/upgrade</li>
                    <li>• Integraciones de terceros no existentes</li>
                    <li>• Cambios fuera de ventana acordada</li>
                    <li>• Soporte 24x7 (opcional a contratar)</li>
                  </ul>
                </Card>
              </div>
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
