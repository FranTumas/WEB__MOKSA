/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { Card } from "@/Component/card";

export const metadata = {
  title: "SLA — Moksa IT",
  description:
    "Service levels, response times and support process for SAP and OpenText VIM solutions.",
};

export default function SLAPage() {
  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hello%20Moksa%20IT%2C%20I%20would%20like%20to%20inquire%20about%20an%20SLA%20for%20SAP%20or%20VIM%20support.";
  const EMAIL =
    "mailto:info@moksait.com?subject=Moksa%20IT%20SLA%20Inquiry&body=Hello%2C%20I%20would%20like%20information%20about%20your%20SLA...";

  return (
    <main className="bg-white text-neutral-900">
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
          SLA &amp; Support
        </span>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">
          Service Level Agreements (SLA)
        </h1>
        <p className="mt-3 max-w-3xl text-neutral-600">
          We define objective timelines and a simple, traceable support process.
          Criticality levels, channels, metrics, and responsibilities are clear
          from day one and can be adjusted through contract or SOW depending on
          each operation’s needs.
        </p>
      </section>

      {/* Coverage & Channels */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Coverage and channels</h2>
          <p className="mt-2 text-neutral-600">
            Standard support model. Hours, scope, and modality may be extended
            or adjusted through contract/SOW.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Hours
              </div>
              <div className="mt-1 font-semibold">Monday to Friday</div>
              <p className="mt-2 text-sm text-neutral-600">
                9:00–18:00 (GMT-3). Business days in Argentina.
              </p>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Channels
              </div>
              <div className="mt-1 font-semibold">Email / WhatsApp / Portal</div>
              <p className="mt-2 text-sm text-neutral-600">
                Ticket creation via email/portal and a direct channel for urgent cases.
              </p>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Coverage
              </div>
              <div className="mt-1 font-semibold">N1 and N2</div>
              <p className="mt-2 text-sm text-neutral-600">
                Functional and technical support (ABAP, VIM, related integrations).
              </p>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Reports
              </div>
              <div className="mt-1 font-semibold">Monthly KPIs</div>
              <p className="mt-2 text-sm text-neutral-600">
                Tickets, response times, and trends by criticality.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Criticality (Incidents) */}
<section className="border-t border-neutral-200 bg-white py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
      SLA &amp; Support
    </span>

    <h2 className="mt-4 text-3xl font-bold tracking-tight">
      Criticality levels — Incidents
    </h2>

    <p className="mt-2 max-w-3xl text-neutral-600 leading-relaxed">
      Target times for <strong>first contact</strong> and{" "}
      <strong>response</strong> within the support window.  
      Resolution time will depend on diagnosis, scope, and available change windows.
    </p>

    {/* Table */}
    <div className="mt-8 overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <table className="w-full min-w-[720px] text-xs sm:text-sm">
        <thead className="border-b border-neutral-200 bg-neutral-50 text-neutral-500">
          <tr>
            <th className="p-4 font-medium">Criticality</th>
            <th className="p-4 font-medium">Definition</th>
            <th className="p-4 font-medium">First contact</th>
            <th className="p-4 font-medium">Response</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-neutral-100">
          <tr className="hover:bg-neutral-50/80 transition-colors">
            <td className="p-4 font-semibold text-[var(--color-accent)]">
              Very High (P1)
            </td>
            <td className="p-4">
              Production outage, massive operational impact, no workaround available.
            </td>
            <td className="p-4 font-medium">1 hour</td>
            <td className="p-4 font-medium">4 hours</td>
          </tr>

          <tr className="hover:bg-neutral-50/80 transition-colors">
            <td className="p-4 font-semibold text-[var(--color-accent)]">
              High (P2)
            </td>
            <td className="p-4">
              High impact with partial workaround available. Affects relevant processes.
            </td>
            <td className="p-4 font-medium">2 hours</td>
            <td className="p-4 font-medium">8 hours</td>
          </tr>

          <tr className="hover:bg-neutral-50/80 transition-colors">
            <td className="p-4 font-semibold text-[var(--color-accent)]">
              Medium (P3)
            </td>
            <td className="p-4">
              Functionality affected for a limited group of users or specific cases.
            </td>
            <td className="p-4 font-medium">4 hours</td>
            <td className="p-4 font-medium">16 hours</td>
          </tr>

          <tr className="hover:bg-neutral-50/80 transition-colors">
            <td className="p-4 font-semibold text-[var(--color-accent)]">
              Low (P4)
            </td>
            <td className="p-4">
              Minor inquiry or incident with no direct operational impact.
            </td>
            <td className="p-4 font-medium">8 hours</td>
            <td className="p-4 font-medium">24 hours</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
      Hours considered as <strong>business hours</strong> within the agreed support window.{" "}
      Times may be adjusted through contract/SOW depending on business criticality and required coverage.
    </p>
  </div>
</section>

{/* Evolutives / Enhancements */}
<section className="border-t border-neutral-200 bg-neutral-50/70 py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
      Enhancements
    </span>

    <h2 className="mt-4 text-3xl font-bold tracking-tight">
      Enhancements and improvements
    </h2>

    <p className="mt-2 max-w-3xl text-neutral-600 leading-relaxed">
      Planned changes outside incidents: rule adjustments, new validations, 
      performance optimizations, and improvements on already implemented flows.
    </p>

    {/* Priority Cards */}
    <div className="mt-8 grid gap-6 sm:grid-cols-3">
      {[ 
        { level: "Very High", hint: "Urgent changes impacting key processes.", first: "4 hours", solution: "3 days" },
        { level: "High", hint: "Relevant adjustments improving daily operations.", first: "1 day", solution: "5 days" },
        { level: "Medium", hint: "Incremental improvements and minor optimizations.", first: "2 days", solution: "6 days" },
      ].map((evo) => (
        <div
          key={evo.level}
          className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white px-5 py-6 shadow-sm"
        >
          <div className="text-xs font-semibold text-[var(--color-accent)]">
            Priority
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
                First contact
              </span>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                {evo.first}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wide text-neutral-500">
                Solution proposal
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
      Times expressed in business days. May be adjusted through contract/SOW
      depending on complexity, estimated effort, and available change windows.
    </p>
  </div>
</section>

{/* Support Process (IMAGE SLIDER) */}
<section className="border-t border-neutral-200 bg-neutral-50/60 py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <h2 className="text-3xl font-bold tracking-tight">
      Support Process
    </h2>
    <p className="mt-2 max-w-2xl leading-relaxed text-neutral-600">
      Standard ticket workflow from intake to closure, with control and
      traceability at every stage.
    </p>

    {(() => {
      const steps = [
        {
          id: "proc-1",
          p: "01",
          t: "Intake",
          d: "Ticket submission via email or portal, including evidence, criticality, and requester information.",
          image: "/Recepción.jpg",
        },
        {
          id: "proc-2",
          p: "02",
          t: "Categorization",
          d: "Functional and technical classification. Impact and priority are defined.",
          image: "/Categorizacion.jpg",
        },
        {
          id: "proc-3",
          p: "03",
          t: "Assignment",
          d: "Assignment to N1/N2 support and technical escalation when required.",
          image: "/Asignacion.jpg",
        },
        {
          id: "proc-4",
          p: "04",
          t: "Follow-up",
          d: "Periodic updates, workaround implementation when applicable, and full traceability.",
          image: "/Seguimiento.jpg",
        },
        {
          id: "proc-5",
          p: "05",
          t: "Closure",
          d: "User validation, documentation, and registration for reporting and metrics.",
          image: "/Cierre.jpg",
        },
      ];

      return (
        <>
          {/* Slider */}
          <div className="mt-10">
            <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {steps.map((s, idx) => (
                <article
                  key={s.id}
                  id={s.id}
                  className="group relative shrink-0 snap-center overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ width: "min(420px, calc(100vw - 3rem))" }}
                >
                  {/* Image */}
                  <div className="relative h-40 w-full">
                    <Image
                      src={s.image}
                      alt={s.t}
                      fill
                      sizes="(max-width: 640px) 90vw, 420px"
                      className="object-cover"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-[11px] font-semibold tracking-widest uppercase text-indigo-600">
                      Step {s.p}
                    </div>

                    <div className="mt-1 text-base font-semibold text-neutral-900">
                      {s.t}
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {s.d}
                    </p>

                    <div className="mt-4 h-1 w-6 rounded-full bg-[var(--color-accent)]/70" />
                  </div>
                </article>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="mt-4 flex justify-center gap-2">
              {steps.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  aria-label={`Go to step ${i + 1}`}
                  className="h-2 w-2 rounded-full bg-neutral-300 transition hover:bg-[var(--color-accent)]"
                />
              ))}
            </div>
          </div>
        </>
      );
    })()}
  </div>
</section>


{/* Scope */}
<section className="border-t border-neutral-200 bg-neutral-50/70 py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="mb-10 max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-500">
        Standard SLA
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight">Scope</h2>
      <p className="mt-2 text-neutral-600 leading-relaxed text-sm md:text-base">
        Which activities are included in the standard SLA and which require
        estimation as a project or enhancement, considering technical effort,
        operational impact, dependencies, and change windows.
      </p>
    </div>

    {/* Grid */}
    <div className="grid gap-8 lg:grid-cols-2">

      {/* Includes */}
      <Card className="relative flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">

        <h3 className="mt-1 text-xl font-semibold text-neutral-900 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
            ✔️
          </span>
          Includes
        </h3>

        <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
          Covered by SLA
        </p>

        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-neutral-700">
          {[
            "N1/N2 support (functional and technical)",
            "Incidents in existing VIM/ABAP/SAP components",
            "Minor configuration adjustments",
            "Workarounds and minor fixes",
            "Post go-live hardening",
            "Monthly KPI reporting",
            "Follow-up meetings",
            "Support in production and QA environments",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              {item}
            </li>
          ))}
        </ul>
      </Card>

      {/* Excludes */}
      <Card className="relative flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">

        <h3 className="mt-1 text-xl font-semibold text-neutral-900 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600">
            ✖️
          </span>
          Excludes
        </h3>

        <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
          Requires estimation as enhancement or project
        </p>

        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-neutral-700">
          {[
            "New end-to-end functionalities",
            "Migrations, upgrades or rollouts",
            "New integrations with third parties",
            "Mass changes to master data",
            "Complete process redesign",
            "Advanced report development",
            "After-hours or 24/7 support",
            "Large-scale formal trainings",
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
        aria-label="Contact via WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[var(--color-accent)] px-4 py-3 text-white shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
      >
        WhatsApp
      </a>
    </main>
  );
}
