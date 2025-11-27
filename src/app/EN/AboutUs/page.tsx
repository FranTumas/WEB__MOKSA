import { Card } from "@/Component/card";
import { PrimaryButton } from "@/Component/buttons/PrimaryButton";
import { SecondaryButton } from "@/Component/buttons/SecondaryButton";
import { UploadCvSection } from "@/Component/UploadCvSection";

export const metadata = {
  title: "About Us — Moksa IT",
  description:
    "Team with 15+ years in SAP/OpenText consulting. Operation focused on results, quality and low risk.",
};

export default function NosotrosPage() {
  const kpis = [
    { k: "+20", t: "SAP projects" },
    { k: "0", t: "critical incidents at go-live" },
    { k: "-35%", t: "invoice cycle time reduction (VIM)" },
    { k: "9.1/10", t: "user satisfaction (NPS)" },
  ];

  const valores = [
    {
      title: "Results first",
      desc: "Every deliverable has a KPI and a clear impact hypothesis.",
    },
    {
      title: "Quality & maintainability",
      desc: "Clean ABAP and extensions with standards and peer reviews.",
    },
    {
      title: "Low risk",
      desc: "Short iterations, feature flags and reversibility.",
    },
    {
      title: "Collaboration",
      desc: "Business, finance and IT aligned on goals and metrics.",
    },
    {
      title: "Transparency",
      desc: "Timeline, scope and assumptions made clear from kickoff.",
    },
    {
      title: "Continuous improvement",
      desc: "Retro + hardening post go-live based on real learning.",
    },
  ];

  const timeline = [
    {
      y: "2012–2016",
      h: "First SAP OpenText implementations (LATAM)",
      d: "VIM and Content Server projects; AP-focused operation.",
    },
    {
      y: "2017–2021",
      h: "Expansion and optimization",
      d: "Projects in Europe, practice standardization and KPI dashboards.",
    },
    {
      y: "2022–2024",
      h: "S/4HANA & touchless",
      d: "Migrations, performance improvements and more end-to-end automation.",
    },
    {
      y: "2025+",
      h: "Scale & product",
      d: "Supplier Portal and applied analytics for AP operations.",
    },
  ];

  const team = [
    {
      name: "Sebastian Rossi",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
    {
      name: "Gonzalo Tejada",
      links: { linkedin: "https://www.linkedin.com/company/moksa-it/" },
    },
  ];

  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hi%20Moksa%20IT%2C%20I%27d%20like%20to%20talk%20about%20a%20SAP%20or%20VIM%20project.";

  return (
    <main className="bg-white text-neutral-900">
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Who We Are</h1>
        <p className="mt-3 text-neutral-600 max-w-3xl">
          We are a team with 15+ years of experience in SAP OpenText implementations
          across the Americas and Europe. We help Finance and IT{" "}
          <strong>automate Accounts Payable</strong>, improve traceability and reduce
          cycle times with safe, measurable deliveries.
        </p>

        {/* KPIs */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((x) => (
            <div
              key={x.t}
              className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="text-2xl font-extrabold">{x.k}</div>
              <div className="text-xs text-neutral-500 mt-1">{x.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Purpose */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">Our Purpose</h2>
            <p className="mt-2 text-neutral-600">
              Reduce manual work, improve data quality and accelerate month-end closing{" "}
              <em>with zero friction</em>. We do this through clear processes,
              maintainable code and metrics that matter to the business.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Values</h2>
          <p className="mt-2 text-neutral-600">
            How we work and what you can expect every day.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v) => (
              <Card key={v.title}>
                <div className="h-10 w-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                  ✓
                </div>
                <div className="mt-4 font-semibold">{v.title}</div>
                <p className="mt-2 text-sm text-neutral-600">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Journey</h2>
          <p className="mt-2 text-neutral-600">
            Milestones that shaped how we deliver today.
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
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Our Team</h2>
          <p className="mt-2 text-neutral-600">
            Led by functional and technical specialists.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {team.map((m) => (
              <Card key={m.name}>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-neutral-100 shrink-0" />
                  <div>
                    <div className="font-semibold">{m.name}</div>
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

      {/* Careers */}
      <section className="mt-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-10 shadow-sm text-center">
            <h3 className="text-3xl font-extrabold tracking-tight">
              Want to work at Moksa IT?
            </h3>

            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We are adding talent for SAP, ABAP and OpenText projects. We look for
              curious, responsible people eager to learn and grow in a dynamic team
              with focus on quality, clear processes and measurable deliverables.
            </p>

            <ul className="mt-8 space-y-2 text-base text-neutral-700 max-w-md mx-auto text-left leading-relaxed">
              <li>• Experience or interest in SAP (ABAP, VIM, Fiori, integrations).</li>
              <li>• Analytical and problem-solving skills.</li>
              <li>• Strong communication and teamwork.</li>
              <li>• Technical English (not mandatory).</li>
            </ul>

            <UploadCvSection />
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