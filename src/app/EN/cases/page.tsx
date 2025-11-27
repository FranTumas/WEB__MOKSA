import { Card } from "@/Component/card";
import { PrimaryButton } from "@/Component/buttons/PrimaryButton";
import { SecondaryButton } from "@/Component/buttons/SecondaryButton";

type KPI = { label: string; note: string };
type CaseItem = { tag: string; title: string; desc: string; kpis: KPI[] };

const cases: CaseItem[] = [
  {
    tag: "VIM / OpenText",
    title: "Invoice cycle automation",
    desc:
      "Workflow redesign and rule optimization with integrated OCR. Real-time dashboards for operations and finance.",
    kpis: [
      { label: "-35% cycle time", note: "from receipt → posting" },
      { label: "+18% touchless", note: "less manual intervention" },
      { label: "98% OCR accuracy", note: "in stable batches" },
    ],
  },
  {
    tag: "ABAP / Extensions",
    title: "Elimination of repetitive manual tasks",
    desc:
      "BAPIs, scheduled jobs and OData services exposing data to internal apps. Alerts and automatic retries.",
    kpis: [
      { label: "-60% operational time", note: "monthly closing tasks" },
      { label: "-40% errors", note: "due to manual entries" },
      { label: "SLA < 4h", note: "for P3 incidents" },
    ],
  },
  {
    tag: "S/4HANA",
    title: "Post-migration optimization",
    desc:
      "Performance tuning, implementation of critical SAP Notes and focused training for key users.",
    kpis: [
      { label: "+30% performance", note: "on key reports" },
      { label: "0 P1 incidents", note: "go-live and first month" },
      { label: "NPS 9.1/10", note: "user satisfaction" },
    ],
  },
];

export const metadata = {
  title: "Case Studies — Moksa IT",
  description:
    "Success stories with measurable impact on time, quality and costs: VIM, ABAP and S/4HANA.",
};

export default function CasosPage() {
  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hi%20Moksa%20IT%2C%20I'd%20like%20to%20discuss%20a%20SAP%20or%20VIM%20project.";


  return (
    <main className="bg-white text-neutral-900">
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Case Studies</h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Projects with tangible impact on Accounts Payable and related areas. Our
          priority: deliver value fast, with controlled risk and clear metrics.
        </p>

        {/* Key capabilities */}
        <div className="mt-6 flex flex-wrap gap-2 text-[12px]">
          {[
            "Invoice automation (VIM)",
            "Clean & maintainable ABAP",
            "OData / API integrations",
            "Operational dashboards & KPIs",
            "S/4HANA post-migration hardening",
          ].map((cap) => (
            <span
              key={cap}
              className="rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-3 py-1 font-medium text-[var(--color-accent)]"
            >
              {cap}
            </span>
          ))}
        </div>
      </section>

      {/* Case grid */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
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

          {/* Clients/partners placeholder */}
          <div className="mt-12 rounded-2xl border border-neutral-200 bg-white p-6">
            <p className="text-xs text-neutral-500">Some clients and partners</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 opacity-70">
              {["Client A", "Client B", "Partner C", "Partner D", "Client E", "Partner F"].map(
                (n) => (
                  <div
                    key={n}
                    className="h-10 rounded-lg border border-neutral-200/70 bg-neutral-50 flex items-center justify-center text-xs text-neutral-400"
                  >
                    {n}
                  </div>
                )
              )}
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