/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/en/page.tsx
// Moksa IT — Home (English version, uses global Navbar)

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { UploadCvSection } from "@/Component/UploadCvSection";

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
  const claim = "IT consulting and SAP services focused on results";

  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hi%20Moksa%20IT%2C%20I%27d%20like%20to%20ask%20about%20an%20SAP%20or%20VIM%20project.";
  const EMAIL =
    "mailto:srossi@moksait.com, gtejada@moksait.com?subject=Moksa%20IT%20inquiry&body=Hello%2C%20I%27m%20writing%20regarding%20...";

  const features = [
    {
      title: "SAP Implementations",
      desc: "S/4HANA, ECC and key modules with a strong process and business focus.",
    },
    {
      title: "ABAP & Extensions",
      desc: "Clean development, enhancements, BAPIs, RFC, OData and APIs.",
    },
    {
      title: "VIM / OpenText",
      desc: "Approval flows, KPIs and invoice automation.",
    },
  ];

  const cases: CaseItem[] = [
    {
      tag: "VIM / OpenText",
      title: "Invoice lifecycle automation",
      desc: "Redesign of flows, validation rules and metrics. OCR integration and workitem improvements.",
      kpis: [
        { label: "-35% cycle time", note: "from reception to posting" },
        { label: "+18% touchless", note: "more invoices without intervention" },
        { label: "98% OCR accuracy", note: "on stable batches" },
      ],
    },
    {
      tag: "ABAP / Extensions",
      title: "Eliminating repetitive manual tasks",
      desc: "BAPIs and scheduled jobs + OData to expose data to internal apps.",
      kpis: [
        { label: "-60% operating time", note: "in monthly closes" },
        { label: "-40% errors", note: "from manual data entry" },
        { label: "SLA < 4h", note: "for P3 incidents" },
      ],
    },
    {
      tag: "S/4HANA",
      title: "Post-migration optimization",
      desc: "Performance tuning, critical SAP notes and focused training for key users.",
      kpis: [
        { label: "+30% performance", note: "on key reports" },
        { label: "0 P1 incidents", note: "during go-live and first month" },
        { label: "NPS 9.1/10", note: "user satisfaction" },
      ],
    },
  ];

  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="relative min-h-[80vh]">
        {/* Background image */}
        <Image
          src="/hero-sap.jpg"
          alt="Modern city, digital transformation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Centered content */}
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            DIGITAL INNOVATION
          </h1>

          <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-neutral-100">
            THE VALUE OF TRANSFORMATION
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/EN/contact"
              className="rounded-full border border-white bg-white/90 px-8 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white"
            >
              Need more information?
            </Link>
            <Link
              href="/EN/services"
              className="rounded-full border border-white/70 px-8 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              View services
            </Link>
          </div>
        </div>
      </section>

      {/* About us */}
      <section id="nosotros" className="border-t border-neutral-200 py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
            {/* Text column */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
                About <span className="text-[var(--color-accent)]">Moksa IT</span>
              </h2>

              <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
                We are a young team with more than 15 years of experience in SAP and OpenText
                implementation consulting across the Americas and Europe, working with different
                business units to improve control and management of payments to vendors and
                digital transformation processes.
              </p>

              <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
                Our main commitment is to support the evolution of the Accounts Payable area and
                its vendors by bringing practical and dynamic solutions that make day-to-day
                operations easier, reduce risks and strengthen the customer–vendor relationship.
              </p>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/EN/contact"
                  className="inline-block rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
                >
                  Let&apos;s talk
                </Link>
              </div>
            </div>

            {/* Logo column */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-3xl border border-neutral-200/70 bg-white/70 shadow-sm px-6 py-6">
                <Image
                  src="/Moksa_vector.svg"
                  alt="Moksa IT logo"
                  width={320}
                  height={340}
                  className="object-contain max-w-[360px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">What services we offer</h2>
          <p className="mt-2 text-neutral-600">
            We support your SAP operation with a focus on efficiency, automation and scalability.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title}>
                <div className="h-10 w-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                  ✓
                </div>
                <div className="mt-4 font-semibold">{f.title}</div>
                <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/EN/services"
              className="group inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-neutral-200"
            >
              See all services
              <span className="inline-block pl-1 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="como" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">How we work</h2>
            <p className="mt-2 text-neutral-600">
              A clear and measurable process to ensure safe deliveries aligned with the business.
            </p>
          </div>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                paso: "01",
                titulo: "Assessment & objectives",
                desc: "We identify processes, pain points and key metrics.",
              },
              {
                paso: "02",
                titulo: "Solution design",
                desc: "We define architecture, effort and risks.",
              },
              {
                paso: "03",
                titulo: "Build & testing",
                desc: "We develop, test and validate with the business.",
              },
              {
                paso: "04",
                titulo: "Go-live & support",
                desc: "We support the go-live and monitor results.",
              },
            ].map((step) => (
              <Card key={step.paso}>
                <div className="text-xs text-neutral-500">Step {step.paso}</div>
                <div className="mt-1 font-semibold">{step.titulo}</div>
                <p className="mt-2 text-sm text-neutral-600">{step.desc}</p>
              </Card>
            ))}
          </ol>

          {/* Steps infographic */}
          <div className="mt-12">
            <div className="mt-12">
              <div className="mx-auto max-w-4xl">
                <figure className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
                  <div className="mt-10 flex justify-center">
                    <Image
                      src="/pasos.png"
                      alt="SAP project workflow in 4 stages"
                      width={1400}
                      height={360}
                      quality={100}
                      priority
                    />
                  </div>
                  <figcaption className="px-3 pb-3 sm:px-4 sm:pb-4 text-center text-xs text-neutral-500">
                    Our four-stage flow: analysis, design, build and go-live with support.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Services</h2>
            <p className="mt-2 text-neutral-600">
              Specialists in Vendor Invoice Management (VIM) by OpenText for SAP, flow optimization and
              paperless digital transformation.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">SAP · OpenText</div>
              <h3 className="mt-1 text-lg font-semibold">Vendor Invoice Management (VIM)</h3>
              <p className="mt-2 text-sm text-neutral-600">
                End-to-end automation of the invoice cycle: reception, validation, approval and posting,
                with KPI analytics.
              </p>
              <ul className="mt-4 text-sm space-y-1">
                <li>• Preconfigured rules, functions and actions</li>
                <li>• Full integration with SAP</li>
                <li>• Metrics and KPIs for operations</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Process</div>
              <h3 className="mt-1 text-lg font-semibold">Flow optimization</h3>
              <p className="mt-2 text-sm text-neutral-600">
                We organize scattered processes and unify the company&apos;s framework, centering operations
                on Accounts Payable.
              </p>
              <ul className="mt-4 text-sm space-y-1">
                <li>• Integration of satellite areas into the invoice flow</li>
                <li>• Reduced time and reprocessing</li>
                <li>• Improved traceability</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Paperless culture</div>
              <h3 className="mt-1 text-lg font-semibold">Digital transformation</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Transition to paperless flows, with content protection and data governance for sensitive
                information.
              </p>
              <ul className="mt-4 text-sm space-y-1">
                <li>• Centralized content</li>
                <li>• Compliance and auditability</li>
                <li>• Operational KPIs</li>
              </ul>
            </Card>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Outside SAP</div>
              <h3 className="mt-1 text-lg font-semibold">Non-SAP developments</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Web and mobile applications, document management and integrations. Innovative and scalable
                solutions to optimize processes and drive growth.
              </p>
            </Card>
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Own product</div>
              <h3 className="mt-1 text-lg font-semibold">Supplier Portal</h3>
              <p className="mt-2 text-sm text-neutral-600">
                In-house development (.NET + Angular): invoice submission, payment data publishing,
                self-registration and automatic internal approval workflows.
              </p>
            </Card>
          </div>

          <div className="mt-8">
            <Link
              href="/EN/services"
              className="group inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-neutral-200"
            >
              See all services
              <span className="inline-block pl-1 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capacidades" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Our capabilities</h2>
            <p className="mt-2 text-neutral-600">
              An agile and dynamic team, aligned to best practices and continuous improvement.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <h3 className="text-lg font-semibold">Development team</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Agile development with a strong focus on quality and speed.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Functional knowledge</h3>
              <p className="mt-2 text-sm text-neutral-600">
                15+ years of implementations in the Americas and Europe, understanding processes and
                business.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Response</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Ideas applied to continuous improvement in the customer–vendor and AP relationship.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Collaboration</h3>
              <p className="mt-2 text-sm text-neutral-600">
                We align the business model with best practices and end-to-end optimization.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="casos" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Success stories and results</h2>
            <p className="mt-2 text-neutral-600">
              Measurable impact in time, quality and costs. A few recent examples:
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {cases.map((c) => (
              <Card key={c.title}>
                <div className="text-xs font-medium text-neutral-500">{c.tag}</div>
                <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-[var(--color-accent)]">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{c.desc}</p>
                <ul className="mt-4 grid gap-2">
                  {c.kpis.map((k) => (
                    <li key={k.label} className="flex items-start gap-2">
                      <span className="inline-flex shrink-0 items-center rounded-lg border border-neutral-200 px-2 py-1 text-xs font-semibold">
                        {k.label}
                      </span>
                      <span className="text-xs text-neutral-500">{k.note}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/EN/cases"
              className="group inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-neutral-200"
            >
              See more cases
              <span className="inline-block pl-1 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="form" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center">Contact us</h2>
          <p className="mt-2 max-w-prose mx-auto text-center text-neutral-600 leading-relaxed">
            We reply within the same business day.
          </p>

          <form
            action="https://formspree.io/f/xxxxxxxx"
            method="POST"
            className="mt-8 mx-auto max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            {/* Fields */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Name</label>
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
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
              />
            </div>

            {/* Checkbox + button */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <label className="text-xs text-neutral-600 inline-flex items-center gap-2">
                <input type="checkbox" required className="rounded border-neutral-300" />
                I agree to be contacted regarding my inquiry.
              </label>

              <button
                className="self-end sm:self-auto rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 will-change-transform hover:brightness-110 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30 active:translate-y-0"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contacto" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Shall we talk about your project?</h2>

          <p className="mt-3 mx-auto max-w-[60ch] text-neutral-600 leading-relaxed tracking-[0.01em]">
            Tell us briefly about your challenge and we&apos;ll give you a clear proposal with scope
            and estimated timelines.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 will-change-transform hover:brightness-110 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30 min-w-[220px] active:translate-y-0"
            >
              Chat on WhatsApp
            </a>

            <a
              href={EMAIL}
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-neutral-200 min-w-[220px] active:translate-y-0"
            >
              Send an email
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
              <span>Buenos Aires, Argentina · Projects in LATAM &amp; Europe</span>
            </li>
          </ul>

          <ul className="mt-6 space-y-1 text-sm text-neutral-600 flex flex-col items-center">
            <p className="mt-5 text-xs text-neutral-500 flex justify-center w-full">
              Estimated response time: within the same business day.
            </p>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Frequently asked questions</h2>
          <p className="mt-2 mx-auto max-w-[65ch] text-neutral-600 leading-relaxed tracking-[0.01em]">
            Quick answers before taking the next step.
          </p>
        </div>

        <div className="mt-10 mx-auto max-w-3xl divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {[
            {
              q: "How long does a typical project take?",
              a: "It depends on the scope. A one-off support request can be resolved in days; an end-to-end project can take between 4 and 12 weeks depending on the module and integrations.",
            },
            {
              q: "Do you only work with SAP or also with other solutions?",
              a: "Our core is SAP (S/4HANA, ECC, ABAP, VIM), but we can integrate OCR, workflow apps, BI and external APIs.",
            },
            {
              q: "Can you work by hours, by project or with an SLA?",
              a: "Yes. Support by blocks of hours, fixed-scope projects or continuous evolution with monitored SLAs.",
            },
            {
              q: "Do you provide post go-live support?",
              a: "Yes. We support stabilization, refine KPIs and provide functional/technical support as needed.",
            },
            {
              q: "How do we move forward if I want to start?",
              a: "You share your challenge, we estimate the scope, propose a working model and start with a kickoff to define priorities and deliverables.",
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

      {/* Work at Moksa IT */}
      <section className="mt-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-10 shadow-sm text-center">
            <h3 className="text-3xl font-extrabold tracking-tight">
              Want to work at Moksa IT?
            </h3>

            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We are adding talent for SAP, ABAP and OpenText projects. We look for curious,
              responsible people who want to learn and grow in a dynamic team focused on quality,
              clear processes and measurable deliveries.
            </p>

            <ul className="mt-8 space-y-2 text-base text-neutral-700 max-w-md mx-auto text-left leading-relaxed">
              <li>• Experience or interest in SAP (ABAP, VIM, Fiori, integrations).</li>
              <li>• Strong analytical and problem-solving skills.</li>
              <li>• Good communication and teamwork.</li>
              <li>• Technical English (not mandatory).</li>
            </ul>

            {/* CV upload section */}
            <UploadCvSection />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <div>©️ {new Date().getFullYear()} Moksa IT. All rights reserved.</div>
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
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[var(--color-accent)] px-4 py-3 text-white shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
      >
        WhatsApp
      </a>
    </main>
  );
}