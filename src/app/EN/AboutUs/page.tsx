import Image from "next/image";
import { Card } from "@/Component/card";
import UploadCvSection from "@/Component/UploadCvSection";
import { FiCheckCircle } from "react-icons/fi";

export const metadata = {
  title: "About Us — Moksa IT",
  description:
    "Team with 15+ years of experience in SAP/OpenText consulting. Delivery focused on results, quality, and low operational risk.",
};

export default function AboutPage() {
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
      desc: "Every delivery is tied to a KPI and a clear hypothesis of business impact.",
    },
    {
      title: "Quality & maintainability",
      tag: "Code & design",
      desc: "Clean ABAP and extensions, following standards, reviews, and solid documentation.",
    },
    {
      title: "Low risk",
      tag: "Execution",
      desc: "Short iterations, feature flags, controlled environments, and rollback capability.",
    },
    {
      title: "Collaboration",
      tag: "Teams",
      desc: "Business, Finance, and IT aligned on goals, metrics, and priorities.",
    },
    {
      title: "Transparency",
      tag: "Management",
      desc: "Timeline, scope, assumptions, and risks clearly explained from kickoff.",
    },
    {
      title: "Continuous improvement",
      tag: "Learning",
      desc: "Post go-live retrospectives and hardening to incorporate real learnings.",
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
      h: "Expansion and optimization",
      d: "Projects across Europe, practice standardization, and KPI-driven operational dashboards.",
    },
    {
      y: "2022–2024",
      h: "S/4HANA & touchless",
      d: "Migrations, performance improvements, and end-to-end automation of invoice processing.",
    },
    {
      y: "2025+",
      h: "Scale and product",
      d: "Supplier Portal and analytics applied to Accounts Payable operations.",
    },
  ];

  const team = [
    {
      name: "Sebastian Ariel Rossi",
      role: "Co-founder",
      image: "/Team/seba-rossi.png",
    },
    {
      name: "Gonzalo Daniel Tejada",
      role: "Co-founder",
      image: "/Team/gonza-tejada.jpeg",
    },
    {
      name: "Emanuel Fernández",
      role: "SAP/OpenText Consultant",
    },
    {
      name: "Facundo Simón Gastiarena Albarengue",
      role: "SAP/OpenText Consultant",
    },
    {
      name: "Martin Ochoa",
      role: "SAP/OpenText Consultant",
    },
    {
      name: "Jeronimo Juarez Tabares",
      role: "SAP/OpenText Consultant",
    },
    {
      name: "Martin Ignacio Rossi",
      role: "SAP/OpenText Consultant",
      image: "/Team/tincho-rossi.jpeg",
    },
    {
      name: "Francisco Tumas",
      role: "SAP/OpenText Consultant",
      image: "/Team/francisco-tumas.jpeg",
    },
    {
      name: "Justo Vannoni",
      role: "SAP/OpenText Consultant",
      image: "/Team/justo-vannoni.jpeg",
    },
  ];

  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hello%20Moksa%20IT%2C%20I’d%20like%20to%20discuss%20a%20SAP%20or%20VIM%20project.";

  return (
    <main className="bg-white text-neutral-900">
      {/* INTRO */}
      <section className="border-t border-neutral-200 bg-white pt-16 pb-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
            About us
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight">
            Who we are
          </h1>

          <p className="mt-4 max-w-3xl text-neutral-600">
            We are a team with over 15 years of experience in SAP OpenText
            consulting, focused on automating Accounts Payable and improving
            supplier relationships through clear, measurable processes.
          </p>

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

      {/* VALUES */}
      <section className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Values</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v) => (
              <Card key={v.title}>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <FiCheckCircle />
                  </div>
                  <div>
                    <h3 className="font-semibold">{v.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-indigo-500">
                      {v.tag}
                    </p>
                    <p className="mt-3 text-sm text-neutral-600">{v.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Timeline</h2>

          <div className="mt-10 space-y-6">
            {timeline.map((t) => (
              <div key={t.y} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="font-semibold text-indigo-600">{t.y}</div>
                <h3 className="mt-2 text-lg font-bold">{t.h}</h3>
                <p className="mt-2 text-sm text-neutral-600">{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Team</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <Card key={m.name}>
                <div className="flex items-start gap-4">
                  {m.image && (
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 flex items-center justify-center">
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        sizes="56px"
                        className="object-cover object-center"
                      />
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="border-t border-neutral-200 bg-neutral-50/70 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-10 text-center shadow-sm">
            <h3 className="text-3xl font-extrabold">
              Want to work at Moksa IT?
            </h3>
            <UploadCvSection />
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[var(--color-accent)] px-4 py-3 text-white shadow-lg"
      >
        WhatsApp
      </a>
    </main>
  );
}
