 
import { Card } from "@/Component/card";
import Image from "next/image";
import Link from "next/link";
import {
  FiLayers,
  FiCode,
  FiFileText,
  FiClock,
  FiShield,
  FiTrendingUp,
  FiGlobe,
  FiSettings,
} from "react-icons/fi";

export const metadata = {
  title: "Services — Moksa IT",
  description:
    "OpenText VIM for SAP, ABAP development and workflow optimization. Clear process and measurable benefits.",
};

export default function ServicesPage() {
  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hello%20Moksa%20IT%2C%20I%20would%20like%20to%20ask%20about%20a%20SAP%20or%20VIM%20project.";

  return (
    <main className="bg-white text-neutral-900">
      {/* Intro Services */}
      <section
        id="services-intro"
        className="border-t border-neutral-200 bg-white py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header + layout */}
          <div className="grid gap-10 items-start lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
            {/* Left column: text + chips */}
            <div>
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                SAP &amp; OpenText Services
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900">
                Services
              </h2>

              <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed text-neutral-700">
                Specialists in Vendor Invoice Management (VIM) by OpenText for
                SAP, ABAP development and workflow optimization. We work with a
                clear process and measurable benefits for your Accounts Payable
                operation.
              </p>

              <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed text-neutral-600">
                We support you from scope definition through post–go-live
                support, aligning processes, teams and technology to reduce
                time, errors and operational risks.
              </p>

              {/* Navigation chips */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="#services"
                  className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-xs md:text-sm font-semibold text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] hover:shadow-md"
                >
                  Services
                </Link>
                <Link
                  href="#how"
                  className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-xs md:text-sm font-semibold text-neutral-700 transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
                >
                  How we work
                </Link>
                <Link
                  href="#benefits"
                  className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-xs md:text-sm font-semibold text-neutral-700 transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
                >
                  Benefits
                </Link>
              </div>
            </div>

            {/* Right column: mini-metrics */}
            <aside className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                {
                  icon: FiTrendingUp,
                  label: "15+ years in SAP & OpenText",
                  desc: "Experience in implementations, upgrades and evolutionary work.",
                },
                {
                  icon: FiSettings,
                  label: "Accounts Payable focus",
                  desc: "Invoice processes, approvals, KPIs and operational control.",
                },
                {
                  icon: FiGlobe,
                  label: "Projects in LATAM & Europe",
                  desc: "Multi-country models, currencies, languages and local rules.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white/60 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <Icon className="text-lg" />
                      </div>
                      <h3 className="text-sm font-semibold text-neutral-900">
                        {item.label}
                      </h3>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </aside>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">What we offer</h2>
            <p className="mt-2 text-neutral-600">
              Solutions for Accounts Payable and related areas, focused on
              automation, control and scalability.
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
                End-to-end invoice automation: capture, validation, approval,
                posting and KPIs.
              </p>
              <ul className="mt-4 text-sm space-y-1">
                <li>• Preconfigured rules and actions</li>
                <li>• Full integration with SAP</li>
                <li>• Operational analytics</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                ABAP
              </div>
              <h3 className="mt-1 text-lg font-semibold">
                Developments & extensions
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                BAPIs, jobs, OData/APIs, performance and quality standards to
                reduce manual work.
              </p>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Process
              </div>
              <h3 className="mt-1 text-lg font-semibold">
                Process optimization
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Shorter lead times and fewer reprocesses, with greater
                traceability and control in AP and satellite areas.
              </p>
            </Card>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Outside SAP
              </div>
              <h3 className="mt-1 text-lg font-semibold">
                Non-SAP developments
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Web/mobile applications, document management and integrations to
                boost your processes.
              </p>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Own product
              </div>
              <h3 className="mt-1 text-lg font-semibold">Supplier Portal</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Invoice submission, payment data, self-registration and
                automatic workflows (.NET + Angular).
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW WE WORK (slider) */}
      <section
        id="how"
        className="border-t border-neutral-200 py-20 bg-neutral-50/70"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">How we work</h2>
            <p className="mt-2 text-neutral-600">
              A clear and measurable process to ensure safe, traceable
              deliveries aligned with your organization’s goals.
            </p>
          </div>

          {/* Slider */}
          <div className="mt-10">
            <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 pb-4">
              {[
                {
                  id: "step-1",
                  step: "STEP 01",
                  title: "Discovery & objectives",
                  desc: "Interviews, current process analysis and definition of pain points and key metrics.",
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
                    "Release plan & backlog",
                  ],
                  image: "/Diseño.jpg",
                },
                {
                  id: "step-3",
                  step: "STEP 03",
                  title: "Build & testing",
                  desc: "We configure, develop and test jointly with key users.",
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
                  desc: "We accompany the productive start and monitor results and improvements.",
                  bullets: ["Go-live plan", "Post-implementation support"],
                  image: "/Golive.jpg",
                },
              ].map((slide) => (
                <article
                  key={slide.id}
                  id={slide.id}
                  className="relative h-[260px] sm:h-[320px] w-full shrink-0 snap-center overflow-hidden rounded-3xl bg-neutral-900 text-white"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover opacity-70"
                  />

                  <div className="absolute inset-0 bg-black/40" />

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
                        href={"/EN/about"}
                        className="rounded-lg border border-white/70 px-5 py-2 text-xs font-semibold tracking-wide uppercase transition hover:bg-white hover:text-neutral-900"
                      >
                        + Info
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Dots */}
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

      {/* BENEFITS */}
      <section
        id="benefits"
        className="border-t border-neutral-200 bg-neutral-50/70 py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900">
              Benefits
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Concrete results for your SAP operation: fewer reprocesses, more
              traceability and decisions based on reliable data.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: FiLayers,
                label: "SAP Implementations",
                desc: "S/4HANA, ECC and key modules with business focus.",
              },
              {
                icon: FiCode,
                label: "ABAP & Extensions",
                desc: "BAPIs, jobs, OData/APIs and clean development patterns.",
              },
              {
                icon: FiFileText,
                label: "VIM / OpenText",
                desc: "Invoice automation, workflows and operational KPIs.",
              },
              {
                icon: FiClock,
                label: "Time reduction",
                desc: "-35% invoice cycle time with redesigned workflows.",
              },
              {
                icon: FiShield,
                label: "Quality & control",
                desc: "Reduced rework, increased traceability and auditability.",
              },
              {
                icon: FiTrendingUp,
                label: "Time-to-value",
                desc: "Iterative deliverables, controlled risks and quick wins.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.label}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)]/30 hover:shadow-lg"
                >
                  <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br from-[var(--color-accent)]/15 via-indigo-400/10 to-transparent blur-2xl transition-transform duration-300 group-hover:scale-110" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <Icon className="text-lg" />
                      </div>
                      <h3 className="text-base font-semibold text-neutral-900">
                        {item.label}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {item.desc}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[var(--color-accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                      <span>Key benefit for your operation</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp bubble */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Write on WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[var(--color-accent)] px-4 py-3 text-white shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
      >
        WhatsApp
      </a>
    </main>
  );
}
