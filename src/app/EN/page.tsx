/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/page.tsx

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import UploadCvSection from "@/Component/UploadCvSection";
import {
  FiHeadphones,
  FiAlertTriangle,
  FiRefreshCcw,
  FiUsers
, FiLayers, FiTrendingUp
} from "react-icons/fi";



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
  const claim = "IT consulting and SAP services focused on results";

  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hello%20Moksa%20IT%2C%20I%27d%20like%20to%20ask%20about%20a%20SAP%20or%20VIM%20project.";
  const EMAIL =
    "mailto:info@moksait.com?subject=Inquiry%20Moksa%20IT&body=Hi%2C%20I%27m%20writing%20about%20...";

  const features = [
    {
      title: "SAP Implementations",
      desc: "S/4HANA, ECC and key modules with a focus on processes, operations and adoption.",
    },
    {
      title: "ABAP & Extensions",
      desc: "Clean development, evolutionary enhancements, BAPIs, RFC, OData and APIs to integrate your ecosystem.",
    },
    {
      title: "VIM / OpenText",
      desc: "Approval workflows, KPIs and automation of the document and invoice lifecycle.",
    },
  ];

  const cases: CaseItem[] = [
    {
      tag: "VIM / OpenText",
      title: "Invoice lifecycle automation",
      desc: "Redesign of workflows, validation rules and metrics. OCR integration and workitem improvements.",
      kpis: [
        { label: "-35% cycle time", note: "from reception to posting" },
        { label: "+18% touchless", note: "more invoices without manual intervention" },
        { label: "98% OCR accuracy", note: "on stable batches" },
      ],
    },
    {
      tag: "ABAP / Extensions",
      title: "Eliminating repetitive manual tasks",
      desc: "BAPIs and background jobs, plus OData to expose data to internal apps and reports.",
      kpis: [
        { label: "-60% operating time", note: "in month-end closings" },
        { label: "-40% errors", note: "caused by manual entry" },
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
          alt="Modern city and digital transformation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Centered content */}
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            DIGITAL INNOVATION
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-neutral-100 sm:text-base md:text-lg">
            SAP consulting focused on operational efficiency and digital transformation.
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
      <section
        id="nosotros"
        className="border-t border-neutral-200 bg-white py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            {/* Text column */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
                About <span className="text-[var(--color-accent)]">Moksa IT</span>
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                We are a young team with over 15 years of experience in SAP and
                OpenText implementation consulting across the Americas and Europe,
                helping organizations improve the way they manage, control and trace
                key information.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Our commitment is to support the evolution of processes related to
                payments, documents and approvals, bringing practical and dynamic
                solutions that simplify day-to-day operations, reduce risk and
                strengthen relationships with partners and suppliers.
              </p>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/EN/contact"
                  className="inline-block rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
                >
                  Contact us
                </Link>
              </div>
            </div>

            {/* Logo column */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-3xl border border-neutral-200/70 bg-white/70 px-6 py-6 shadow-sm">
                <Image
                  src="/Moksa_vector.svg"
                  alt="Moksa IT logo"
                  width={320}
                  height={340}
                  className="max-w-[360px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our capabilities (slider) */}
      <section
        id="capacidades"
        className="border-t border-neutral-200 py-20 bg-neutral-50/70"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Our capabilities</h2>
            <p className="mt-2 text-neutral-600">
              An agile, dynamic team aligned with best practices and continuous
              improvement.
            </p>
          </div>

          {/* Slider-like banners */}
          <div className="mt-10">
            <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 pb-4">
              {[
                {
                  id: "cap-1",
                  title: "DEVELOPMENT TEAM",
                  desc: "Agile development focused on quality, speed and maintainable code to support the evolution of your SAP solution.",
                  image: "/EquipoDesarrollo.jpg",
                },
                {
                  id: "cap-2",
                  title: "FUNCTIONAL EXPERTISE",
                  desc: "Over 15 years of implementations across the Americas and Europe, understanding processes, daily operations and follow-up needs.",
                  image: "/ConocimientoFuncional.jpg",
                },
                {
                  id: "cap-3",
                  title: "RESPONSE",
                  desc: "Ideas applied to continuous improvement, reducing deviations and improving interaction between internal and external teams.",
                  image: "/Respuesta.jpg",
                },
                {
                  id: "cap-4",
                  title: "COLLABORATION",
                  desc: "We align the business model with best practices and an end-to-end optimization approach.",
                  image: "/Colaboración.jpg",
                },
              ].map((slide) => (
                <article
                  key={slide.id}
                  id={slide.id}
                  className="relative h-[260px] sm:h-[320px] w-full shrink-0 snap-center overflow-hidden rounded-3xl bg-neutral-900 text-white"
                >
                  {/* background image */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover opacity-70"
                  />

                  {/* dark overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* content */}
                  <div className="relative z-10 flex h-full flex-col justify-center px-8 sm:px-12">
                    <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                      {slide.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
                      {slide.desc}
                    </p>

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

            {/* navigation dots */}
            <div className="mt-4 flex justify-center gap-2">
              {["cap-1", "cap-2", "cap-3", "cap-4"].map((id, index) => (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-label={`Go to capability slide ${index + 1}`}
                  className="h-2 w-2 rounded-full bg-neutral-300 hover:bg-[var(--color-accent)] transition"
                />
              ))}
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
              Specialists in Vendor Invoice Management (VIM) by OpenText for SAP,
              workflow optimization and paperless digital transformation.
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
                End-to-end automation of the invoice lifecycle: reception,
                validation, approval and posting, with KPI analytics.
              </p>
              <ul className="mt-4 space-y-1 text-sm">
                <li>• Preconfigured rules, functions and actions</li>
                <li>• Full integration with SAP</li>
                <li>• Metrics and KPIs for operations</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Process
              </div>
              <h3 className="mt-1 text-lg font-semibold">Workflow optimization</h3>
              <p className="mt-2 text-sm text-neutral-600">
                We structure disjointed processes and align the company&apos;s operating
                model around a clear document and approval flow.
              </p>
              <ul className="mt-4 space-y-1 text-sm">
                <li>• Integration of all areas involved in the invoice cycle</li>
                <li>• Reduced lead times and reprocessing</li>
                <li>• End-to-end traceability</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Paperless culture
              </div>
              <h3 className="mt-1 text-lg font-semibold">Digital transformation</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Moving to paperless workflows, with secure content storage, protection of
                sensitive information and data governance.
              </p>
              <ul className="mt-4 space-y-1 text-sm">
                <li>• Centralized content</li>
                <li>• Compliance and auditability</li>
                <li>• Operational KPIs</li>
              </ul>
            </Card>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">
                Complementary solutions
              </div>
              <h3 className="mt-1 text-lg font-semibold">
                Evolution and integrations
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Developments, extensions and integrations that complement the SAP
                ecosystem, improve the experience of your teams and enable new ways of
                entering, viewing and tracking information.
              </p>
            </Card>
          </div>

          <div className="mt-8">
            <Link
              href="/EN/services"
              className="group inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-neutral-200"
            >
              View all services
              <span className="inline-block pl-1 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
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
                  image: "/Go-Live.jpg",
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

      {/* Support & SLA */}
<section id="sla" className="border-t border-neutral-200 bg-white py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    {/* Header */}
    <div className="max-w-2xl">
      <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
        Support &amp; SLA
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight">
        Support and Service Level Agreements (SLA)
      </h2>
      <p className="mt-2 text-neutral-600 text-sm md:text-base">
        We define clear response times and support models for each type of request,
        aligning expectations and making day-to-day management easier.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {[
        {
          icon: FiHeadphones,
          title: "Support model",
          desc: "We combine functional and technical support with a scalable model that covers questions, incidents and evolutionary improvements.",
          bullets: [
            "Defined contact channels",
            "Prioritization based on impact",
            "Follow-up until closure",
          ],
        },
        {
          icon: FiAlertTriangle,
          title: "Priority levels",
          desc: "We classify incidents by criticality to ensure a response aligned with their impact on operations.",
          bullets: [
            "Critical: immediate attention and full focus",
            "High: relevant impact, resolution in controlled windows",
            "Medium & Low: planned and controlled follow-up",
          ],
        },
        {
          icon: FiRefreshCcw,
          title: "Support lifecycle",
          desc: "Each ticket follows a defined workflow from reception to closure, ensuring traceability and clear agreements.",
          bullets: [
            "Logging and categorization",
            "Assignment and analysis",
            "Solution proposal and validation",
            "Documented closure and lessons learned",
          ],
        },
      ].map((item) => {
        const Icon = item.icon;
        return (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)]/30 hover:shadow-lg"
          >
            {/* Glow effect */}
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-[var(--color-accent)]/15 via-indigo-400/10 to-transparent blur-2xl transition-transform duration-300 group-hover:scale-110" />

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
  </div>
</section>
 {/* Client Experience */}
<section id="clientes" className="border-t border-neutral-200 bg-white py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="max-w-2xl">
      <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
        Experience
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight">
        Client experience
      </h2>
      <p className="mt-2 text-neutral-600 text-sm md:text-base">
        We participate in projects of different scales—from initial implementations
        to optimization of productive SAP and OpenText solutions—across multiple industries.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {[
        {
          icon: FiTrendingUp,
          title: "Implementations and improvements",
          desc: "Implementation, evolution and stabilization of SAP and OpenText solutions, with a strong focus on adoption and measurable results.",
          bullets: [
            "End-to-end implementations",
            "Post-go-live improvements",
            "Performance optimization",
          ],
        },
        {
          icon: FiUsers,
          title: "Distributed teams",
          desc: "Collaboration with local, regional and global teams, aligning requirements under shared working models.",
          bullets: [
            "Collaborative workflows",
            "Cross-area alignment",
            "Continuous communication",
          ],
        },
        {
          icon: FiLayers,
          title: "Critical processes",
          desc: "Experience in processes where traceability and information control are key for operations and decision-making.",
          bullets: [
            "Business-critical workflows",
            "Data governance",
            "Control & auditability",
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
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full 
              bg-gradient-to-br from-[var(--color-accent)]/15 via-indigo-400/10 to-transparent 
              blur-2xl transition-transform duration-300 group-hover:scale-110" />

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
  </div>
</section>

      {/* Contact form */}
<section id="form" className="border-t border-neutral-200 py-20">
  <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-center text-3xl font-bold tracking-tight">
      Contact us
    </h2>
    <p className="mx-auto mt-2 max-w-prose text-center leading-relaxed tracking-[0.01em] text-neutral-600">
      We usually reply within the same business day.
    </p>

    {/* GOOGLE FORMS FORM */}
    <form
      action="https://docs.google.com/forms/d/e/1FAIpQLSf5PVcOArhitpSeqhH_lxKbygEZnRrSpCQgdxyKFalDgycoRA/formResponse"
      method="POST"
      target="hidden_iframe"
      onSubmit={() => {
        setTimeout(() => {
          window.location.href = "/EN"; // o la ruta que quieras como "home" en EN
        }, 500);
      }}
      className="mx-auto mt-8 max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
    >
      {/* Fields */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            name="entry.1994300530" // Full name
            required
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            name="entry.1021242799" // Email
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
          />
        </div>
      </div>

      {/* Phone + Company */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Phone</label>
          <input
            name="entry.1785945974" // Phone
            type="tel"
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Company</label>
          <input
            name="entry.1002964135" // Company
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mt-4">
        <label className="text-sm font-medium">Message</label>
        <textarea
          name="entry.149354678" // Message
          required
          rows={6}
          className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
        />
      </div>

      {/* Checkbox + button */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="inline-flex items-center gap-2 text-xs text-neutral-600">
          <input
            type="checkbox"
            required
            className="rounded border-neutral-300"
          />
          I agree to be contacted regarding my inquiry.
        </label>

        <button
          type="submit"
          className="self-end rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30 active:translate-y-0 sm:self-auto"
        >
          Send
        </button>
      </div>
    </form>

    {/* Hidden iframe for redirect */}
    <iframe name="hidden_iframe" title="Hidden form submission frame" style={{ display: "none" }}></iframe>
  </div>
</section>


      {/* Final CTA */}
      <section id="contacto" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Shall we talk about your project?
          </h2>

          <p className="mx-auto mt-3 max-w-[60ch] leading-relaxed tracking-[0.01em] text-neutral-600">
            Tell us briefly about your challenge and we&apos;ll get back to you with a
            clear proposal including scope and estimated timelines.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="min-w-[220px] inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30 active:translate-y-0"
            >
              Write on WhatsApp
            </a>
            <a
              href={EMAIL}
              className="min-w-[220px] inline-flex items-center justify-center rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-50 hover:border-neutral-400 focus:outline-none focus:ring-4 focus:ring-neutral-200 active:translate-y-0"
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
              <span>info@moksait.com</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span>📍</span>
              <span>Buenos Aires, Argentina · Projects in LATAM &amp; Europe</span>
            </li>
          </ul>

          
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-2 max-w-[65ch] leading-relaxed tracking-[0.01em] text-neutral-600">
            Quick answers before taking the next step.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {[
            {
              q: "How long does a typical project take?",
              a: "It depends on the scope. A small support request can be resolved in days, while an end-to-end project may take between 4 and 12 weeks depending on modules, integrations and available dedication.",
            },
            {
              q: "Do you only work with SAP or also with other solutions?",
              a: "Our core is SAP (S/4HANA, ECC, ABAP, VIM) and OpenText, integrating additional solutions when needed.",
            },
            {
              q: "Can you work by hours, by project or with SLAs?",
              a: "Yes. We can work with hourly packs, fixed-price projects or continuous evolution with monitored Service Level Agreements (SLAs).",
            },
            {
              q: "Do you provide post go-live support?",
              a: "Yes. We support stabilization, refine indicators and provide functional/technical support according to each team’s needs.",
            },
            {
              q: "How do we get started?",
              a: "You share your challenge, we estimate scope, propose a work model and start with a kickoff to define priorities and deliverables.",
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

      {/* Work with us */}
      <section className="mt-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-10 text-center shadow-sm">
            <h3 className="text-3xl font-extrabold tracking-tight">
              Want to work at Moksa IT?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
              We are adding talent for SAP, ABAP and OpenText projects. We look for
              people who are curious, responsible and eager to learn and grow in a
              dynamic team focused on quality, clear processes and measurable deliveries.
            </p>

            <ul className="mx-auto mt-8 max-w-md list-none text-left text-base leading-relaxed text-neutral-700">
              <li>• Experience or interest in SAP (ABAP, VIM, Fiori, integrations).</li>
              <li>• Strong analytical and problem-solving skills.</li>
              <li>• Good communication and teamwork.</li>
              <li>• Technical English (nice to have, not mandatory).</li>
            </ul>

            {/* CV upload (client component) */}
            <UploadCvSection />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-neutral-500 sm:flex-row sm:px-6 lg:px-8">
          <div>© {new Date().getFullYear()} Moksa IT. All rights reserved.</div>
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
        aria-label="Write on WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[var(--color-accent)] px-4 py-3 text-white shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
      >
        WhatsApp
      </a>
    </main>
  );
}
