import { Card } from "@/Component/card";
import { PrimaryButton } from "@/Component/buttons/PrimaryButton";
import { SecondaryButton } from "@/Component/buttons/SecondaryButton";

export const metadata = {
  title: "Services — Moksa IT",
  description:
    "VIM by OpenText for SAP, ABAP and process optimization. Clear delivery process and tangible benefits.",
};

export default function ServiciosPage() {
  const beneficios = [
    {
      title: "SAP implementations",
      desc: "S/4HANA, ECC and key modules with a business-first approach.",
    },
    {
      title: "ABAP & extensions",
      desc: "BAPIs, jobs, OData/APIs and best practices.",
    },
    {
      title: "VIM / OpenText",
      desc: "Invoice automation, workflows and KPIs.",
    },
    {
      title: "Lead time reduction",
      desc: "-35% invoice cycle time with redesigned flows.",
    },
    {
      title: "Quality and control",
      desc: "Fewer reprocesses, better traceability and auditability.",
    },
    {
      title: "Time-to-value",
      desc: "Iterative deliverables with controlled risks.",
    },
  ];

  const pasos = [
    {
      paso: "01",
      titulo: "Discovery & objectives",
      desc: "Processes, pain points, stakeholders and KPIs.",
    },
    {
      paso: "02",
      titulo: "Solution design",
      desc: "Architecture, integrations, effort and risks.",
    },
    {
      paso: "03",
      titulo: "Build & testing",
      desc: "Development, QA/UAT and business validation.",
    },
    {
      paso: "04",
      titulo: "Go-live & support",
      desc: "Hypercare, metrics and continuous improvement.",
    },
  ];

  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hi%20Moksa%20IT%2C%20I%27d%20like%20to%20discuss%20a%20SAP%20or%20VIM%20project.";

  return (
    <main className="bg-white text-neutral-900">
      {/* Header + local subnav */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight">Services</h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Specialists in Vendor Invoice Management (VIM) by OpenText for SAP, ABAP and
          process optimization. We work with a clear delivery process and measurable
          benefits.
        </p>

        <div className="mt-6 text-sm text-neutral-600 flex flex-wrap gap-3">
          <a
            href="#servicios"
            className="rounded-xl border border-neutral-300 px-3 py-1 hover:bg-neutral-50"
          >
            Services
          </a>
          <a
            href="#como"
            className="rounded-xl border border-neutral-300 px-3 py-1 hover:bg-neutral-50"
          >
            How we work
          </a>
          <a
            href="#beneficios"
            className="rounded-xl border border-neutral-300 px-3 py-1 hover:bg-neutral-50"
          >
            Benefits
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">What we offer</h2>
            <p className="mt-2 text-neutral-600">
              Solutions for Accounts Payable and related areas, focused on automation,
              control and scalability.
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
                End-to-end invoice automation: capture, validation, approval, posting and
                KPIs.
              </p>
              <ul className="mt-4 text-sm space-y-1">
                <li>• Preconfigured rules and actions</li>
                <li>• Full integration with SAP</li>
                <li>• Operational analytics</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">ABAP</div>
              <h3 className="mt-1 text-lg font-semibold">Developments & extensions</h3>
              <p className="mt-2 text-sm text-neutral-600">
                BAPIs, jobs, OData/APIs, performance and quality standards to reduce
                manual work.
              </p>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Process</div>
              <h3 className="mt-1 text-lg font-semibold">Process optimization</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Shorter lead times and fewer reprocesses, with greater traceability and
                control in AP and satellite areas.
              </p>
            </Card>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Outside SAP
              </div>
              <h3 className="mt-1 text-lg font-semibold">Non-SAP developments</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Web/mobile applications, document management and integrations to boost
                your processes.
              </p>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Own product
              </div>
              <h3 className="mt-1 text-lg font-semibold">Supplier Portal</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Invoice submission, payment data, self-registration and automatic
                workflows (.NET + Angular).
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="como" className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">How we work</h2>
            <p className="mt-2 text-neutral-600">
              Iterative and measurable process with low risk for the business.
            </p>
          </div>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((s) => (
              <Card key={s.paso}>
                <div className="text-xs text-neutral-500">Step {s.paso}</div>
                <div className="mt-1 font-semibold">{s.titulo}</div>
                <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
              </Card>
            ))}
          </ol>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Benefits</h2>
            <p className="mt-2 text-neutral-600">
              Concrete results for your SAP operation.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b) => (
              <Card key={b.title}>
                <div className="h-10 w-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                  ✓
                </div>
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