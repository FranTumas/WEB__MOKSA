import { Card } from "@/Component/card";
import { UploadCvSection } from "@/Component/UploadCvSection";
import { FiCheckCircle } from "react-icons/fi";

export const metadata = {
  title: "About us — Moksa IT",
  description:
    "Team with 15+ years in SAP/OpenText consulting. Operation focused on results, quality and low risk.",
};

export default function NosotrosPage() {
  const kpis = [
    { k: "+20", t: "SAP projects" },
    { k: "0", t: "critical incidents at go-live" },
    { k: "-35%", t: "VIM cycle time" },
    { k: "9.1/10", t: "user satisfaction (NPS)" },
  ];

  const valores = [
    {
      title: "Results first",
      tag: "Business impact",
      desc: "Every delivery has an associated KPI and a clear hypothesis about its impact on the business.",
    },
    {
      title: "Quality & maintainability",
      tag: "Code & design",
      desc: "Clean ABAP and extensions, with standards, reviews and solid documentation.",
    },
    {
      title: "Low risk",
      tag: "Execution",
      desc: "Short iterations, feature flags, controlled environments and reversibility.",
    },
    {
      title: "Collaboration",
      tag: "Teams",
      desc: "Business, Finance and IT aligned on objectives, metrics and priorities.",
    },
    {
      title: "Transparency",
      tag: "Management",
      desc: "Timeline, scope, assumptions and risks explained from kickoff.",
    },
    {
      title: "Continuous improvement",
      tag: "Learning",
      desc: "Retro and post go-live hardening to incorporate real learnings.",
    },
  ];

  const timeline = [
    {
      y: "2012–2016",
      h: "First SAP OpenText implementations (LATAM)",
      d: "VIM and Content Server projects focused on Accounts Payable and document traceability.",
    },
    {
      y: "2017–2021",
      h: "Expansion & optimization",
      d: "Cases in Europe, standardization of practices and operational KPI dashboards.",
    },
    {
      y: "2022–2024",
      h: "S/4HANA & touchless",
      d: "Migrations, performance improvements and more end-to-end automation of the invoice cycle.",
    },
    {
      y: "2025+",
      h: "Scale & product",
      d: "Supplier Portal and analytics applied to the Accounts Payable operation.",
    },
  ];

  const team = [
    {
      name: "Sebastian Ariel Rossi",
      role: "Co-founder",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
    {
      name: "Gonzalo Daniel Tejada",
      role: "Co-founder",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
    {
      name: "Emanuel Fernández",
      role: "....",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
    {
      name: "Facundo Simón Gastiarena Albarengue",
      role: "....",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
    {
      name: "Jeronimo Juarez Tabares",
      role: "....",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
    {
      name: "Martin Ignacio Rossi",
      role: "....",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
    {
      name: "Francisco Tumas",
      role: "....",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
    {
      name: "Justo Vannoni",
      role: "....",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
  ];

  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hello%20Moksa%20IT%2C%20I%20would%20like%20to%20talk%20about%20a%20SAP%20or%20VIM%20project.";

  return (
    <main className="bg-white text-neutral-900">
      {/* Intro + KPIs */}
      <section className="border-t border-neutral-200 bg-white pt-16 pb-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
            About us
          </span>

          <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] lg:items-start">
            {/* Left column: main text */}
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight">
                Who we are
              </h1>

              <p className="mt-3 max-w-3xl text-neutral-600">
                We are a young team of professionals with more than 15 years of
                experience in SAP OpenText consulting and implementations in the
                Americas and Europe. We support Finance and IT in the{" "}
                <strong>
                  transformation and integration of the Accounts Payable function
                  with suppliers
                </strong>
                , bringing practical solutions that organize operations and
                strengthen the customer–supplier relationship.
              </p>

              <p className="mt-3 max-w-3xl text-neutral-600">
                Our focus is on <strong>automating Accounts Payable</strong>,
                improving data quality and reducing cycle times, with secure,
                measurable deliveries aligned with each company&apos;s business model.
              </p>

              {/* Focus chips */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-neutral-700">
                <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1">
                  SAP · OpenText · VIM
                </span>
                <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1">
                  Accounts Payable &amp; Suppliers
                </span>
                <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1">
                  15+ years of experience
                </span>
                <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1">
                  Projects in the Americas and Europe
                </span>
              </div>
            </div>

            {/* Right column: what defines us */}
            <aside className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-6 shadow-sm">
              <h2 className="text-sm font-semibold tracking-wide text-neutral-900 uppercase">
                What defines us
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                <li className="flex gap-2">
                  <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span>
                    <strong>End-to-end vision</strong> of the supplier payment
                    process, from invoice reception to payment control.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span>
                    <strong>Cross-industry experience</strong> with different
                    business models, always focused on order and traceability.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span>
                    <strong>Paperless digital transformation</strong>:
                    centralized content, protected sensitive information and
                    more agile processes.
                  </span>
                </li>
              </ul>
            </aside>
          </div>

          {/* KPIs */}
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {kpis.map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="text-2xl font-extrabold">{x.k}</div>
                <div className="mt-1 text-xs text-neutral-500">{x.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="border-t border-neutral-200 bg-neutral-50/70 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              Our <span className="text-indigo-600">purpose</span>
            </h2>

            <p className="mt-2 text-neutral-600 leading-relaxed">
              We want Accounts Payable to operate with{" "}
              <strong>fluidity, traceability and zero friction</strong>. Our
              purpose is to reduce manual work, improve information quality and
              accelerate financial closing without compromising governance.
            </p>

            <p className="mt-4 text-neutral-600 leading-relaxed">
              We achieve this through <strong>clear processes, smart
              automation</strong> and <strong>maintainable code</strong> designed
              to scale. Each implementation is measured with real KPIs that prove
              impact: fewer reprocesses, fewer errors and greater operational
              control.
            </p>

            <p className="mt-4 text-neutral-600 leading-relaxed">
              We believe in an operation where Finance and IT work from a single
              source of truth, and where AP moves from being a bottleneck to a{" "}
              <strong>strategic enabler</strong> for the business.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
            Culture &amp; values
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight">Values</h2>
          <p className="mt-2 text-neutral-600">
            How we work and what you can expect day-to-day when starting a
            project with us.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v) => (
              <Card key={v.title}>
                <div className="group relative flex h-full flex-col">
                  {/* Icon + title */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <FiCheckCircle className="text-lg" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-neutral-900">
                        {v.title}
                      </h3>
                      <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-indigo-500">
                        {v.tag}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                    {v.desc}
                  </p>

                  {/* Micro-claim on hover */}
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[var(--color-accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span>Present in every project</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-neutral-200 bg-neutral-50/70 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Our journey</h2>
          <p className="mt-2 text-neutral-600">
            Some milestones that shape the way we execute projects.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {timeline.map((t) => (
              <Card key={t.h}>
                <div className="text-xs font-semibold text-[var(--color-accent)]">
                  {t.y}
                </div>
                <div className="mt-1 font-semibold">{t.h}</div>
                <p className="mt-2 text-sm text-neutral-600">{t.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Team</h2>
          <p className="mt-2 text-neutral-600">
            Led by functional and technical specialists with experience in
            complex projects.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {team.map((m) => (
              <Card key={m.name}>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-neutral-100" />
                  <div>
                    <div className="font-semibold">{m.name}</div>
                    {m.role && (
                      <div className="mt-1 text-xs text-neutral-500">
                        {m.role}
                      </div>
                    )}
                    <div className="mt-3">
                      <a
                        href={m.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-[var(--color-accent)] underline underline-offset-4"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work at Moksa IT */}
      <section className="border-t border-neutral-200 bg-neutral-50/70 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-10 text-center shadow-sm">
            <h3 className="text-3xl font-extrabold tracking-tight">
              Want to work at Moksa IT?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
              We are adding talent for SAP, ABAP and OpenText projects. We are
              looking for curious, responsible people who want to learn and grow
              in a dynamic team focused on quality, clear processes and
              measurable deliveries.
            </p>

            <ul className="mx-auto mt-8 max-w-md list-none text-left text-base leading-relaxed text-neutral-700">
              <li>
                • Experience or interest in SAP (ABAP, VIM, Fiori, integrations).
              </li>
              <li>• Analytical and problem-solving skills.</li>
              <li>• Good communication and teamwork.</li>
              <li>• Technical English (not mandatory).</li>
            </ul>

            {/* CV upload (client component) */}
            <UploadCvSection />
          </div>
        </div>
      </section>

      {/* WhatsApp bubble */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Message on WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[var(--color-accent)] px-4 py-3 text-white shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
      >
        WhatsApp
      </a>
    </main>
  );
}
