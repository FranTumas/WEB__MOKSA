import { Card } from "@/Component/card";

import Image from "next/image";
import Link from "next/link";

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

      {/* How we work (slider) */}
            <section
              id="como"
              className="border-t border-neutral-200 py-20 bg-neutral-50/70"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight">How we work</h2>
                  <p className="mt-2 text-neutral-600">
                    A clear and measurable process to ensure safe, traceable deliveries
                    aligned with your organization&apos;s goals.
                  </p>
                </div>
      
                <div className="mt-10">
                  <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 pb-4">
                    {[
                      {
                        id: "step-1",
                        step: "STEP 01",
                        title: "Discovery & objectives",
                        desc: "Interviews, analysis of current processes and definition of pain points and key metrics.",
                        bullets: [
                          "Workshops with business stakeholders",
                          "Process mapping and priorities",
                        ],
                        image: "/Relevamiento.jpg",
                      },
                      {
                        id: "step-2",
                        step: "STEP 02",
                        title: "Solution design",
                        desc: "We define architecture, effort, risks and the implementation roadmap.",
                        bullets: [
                          "Functional/technical architecture",
                          "Backlog and release plan",
                        ],
                        image: "/Diseño.jpg",
                      },
                      {
                        id: "step-3",
                        step: "STEP 03",
                        title: "Build & testing",
                        desc: "We configure, develop and test together with key users.",
                        bullets: [
                          "Configuration & ABAP",
                          "User Acceptance Testing (UAT)",
                        ],
                        image: "/Build.jpg",
                      },
                      {
                        id: "step-4",
                        step: "STEP 04",
                        title: "Go-live & support",
                        desc: "We support go-live and monitor results and improvements.",
                        bullets: ["Go-live plan", "Post-implementation support"],
                        image: "/Golive.jpg",
                      },
                    ].map((slide) => (
                      <article
                        key={slide.id}
                        id={slide.id}
                        className="relative h-[260px] sm:h-[320px] w-full shrink-0 snap-center overflow-hidden rounded-3xl bg-neutral-900 text-white"
                      >
                        {/* Background image */}
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover opacity-70"
                        />
      
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40" />
      
                        {/* Content */}
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
                 href={"/EN/AboutUs"}
                  className="rounded-lg border border-white/70 px-5 py-2 text-xs font-semibold tracking-wide uppercase transition hover:bg-white hover:text-neutral-900"
                >
                  + Info
                </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
      
                  {/* Navigation dots */}
                  <div className="mt-4 flex justify-center gap-2">
                    {["step-1", "step-2", "step-3", "step-4"].map((id, index) => (
                      <a
                        key={id}
                        href={`#${id}`}
                        aria-label={`Go to step ${index + 1}`}
                        className="h-2 w-2 rounded-full bg-neutral-300 hover:bg-[var(--color-accent)] transition"
                      />
                    ))}
                  </div>
                </div>
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