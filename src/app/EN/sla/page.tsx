import { Card } from "@/Component/card";
import { PrimaryButton } from "@/Component/buttons/PrimaryButton";
import { SecondaryButton } from "@/Component/buttons/SecondaryButton";

export const metadata = {
  title: "SLA — Moksa IT",
  description:
    "Service levels and response times. Clear support process and continuous improvement.",
};

export default function SLAPage() {
  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hi%20Moksa%20IT%2C%20I%27d%20like%20to%20ask%20about%20a%20support%20SLA%20for%20SAP%20or%20VIM.";
  const EMAIL =
    "mailto:srossi@moksait.com, gtejada@moksait.com?subject=Moksa%20IT%20SLA%20inquiry&body=Hello%2C%20I%27d%20like%20information%20about%20your%20SLA%20options...";

  return (
    <main className="bg-white text-neutral-900">
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Service Level Agreements (SLA)</h1>
        <p className="mt-3 max-w-3xl text-neutral-600">
          We define predictable timelines and a simple support process. Criticality levels,
          channels, metrics and responsibilities are clear from day one.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-[12px]">
          {[
            "N1/N2 support",
            "Business hours 9–18 AR",
            "Technical escalation",
            "Metrics dashboard",
            "Post go-live hardening",
          ].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-3 py-1 font-medium text-[var(--color-accent)]"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      {/* Coverage & Channels */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Coverage and channels</h2>
          <p className="mt-2 text-neutral-600">
            Standard modality. Schedules and scope can be adjusted by contract/SOW.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Schedule</div>
              <div className="mt-1 font-semibold">Monday to Friday</div>
              <p className="mt-2 text-sm text-neutral-600">
                9:00–18:00 (GMT-3). Business days in Argentina.
              </p>
            </Card>
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Channels</div>
              <div className="mt-1 font-semibold">Email / WhatsApp / Portal</div>
              <p className="mt-2 text-sm text-neutral-600">
                Ticket via email, direct channel for urgent cases.
              </p>
            </Card>
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Coverage</div>
              <div className="mt-1 font-semibold">N1 and N2</div>
              <p className="mt-2 text-sm text-neutral-600">
                Functional and technical support (ABAP, VIM, integrations).
              </p>
            </Card>
            <Card>
              <div className="text-xs font-semibold text-[var(--color-accent)]">Reporting</div>
              <div className="mt-1 font-semibold">Monthly KPIs</div>
              <p className="mt-2 text-sm text-neutral-600">
                Tickets, times and trends by criticality.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Criticality (Incidents) */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Criticality levels — Incidents
          </h2>
          <p className="mt-2 text-neutral-600">
            Target times for <strong>first contact</strong> and <strong>response</strong>.
            Resolution depends on diagnosis and scope.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200 bg-white">
            <table className="w-full text-sm">
              <thead className="text-left text-neutral-500">
                <tr>
                  <th className="p-4">Criticality</th>
                  <th className="p-4">Definition</th>
                  <th className="p-4">First contact</th>
                  <th className="p-4">Response</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr>
                  <td className="p-4 font-medium">Very High (P1)</td>
                  <td className="p-4">
                    Production outage, massive impact, no workaround.
                  </td>
                  <td className="p-4">1 hour</td>
                  <td className="p-4">4 hours</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">High (P2)</td>
                  <td className="p-4">
                    High impact with a partial workaround available.
                  </td>
                  <td className="p-4">2 hours</td>
                  <td className="p-4">8 hours</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Medium (P3)</td>
                  <td className="p-4">
                    Functionality affected for a limited group of users.
                  </td>
                  <td className="p-4">4 hours</td>
                  <td className="p-4">16 hours</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Low (P4)</td>
                  <td className="p-4">
                    Question or minor issue with no operational impact.
                  </td>
                  <td className="p-4">8 hours</td>
                  <td className="p-4">24 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enhancements / Improvements */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Enhancements and improvements</h2>
          <p className="mt-2 text-neutral-600">
            Planned changes outside of incidents (adjustments, performance, new rules, etc.).
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200 bg-white">
            <table className="w-full text-sm">
              <thead className="text-left text-neutral-500">
                <tr>
                  <th className="p-4">Priority</th>
                  <th className="p-4">First contact</th>
                  <th className="p-4">Solution proposal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr>
                  <td className="p-4 font-medium">Very High</td>
                  <td className="p-4">4 hours</td>
                  <td className="p-4">3 days</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">High</td>
                  <td className="p-4">1 day</td>
                  <td className="p-4">5 days</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Medium</td>
                  <td className="p-4">2 days</td>
                  <td className="p-4">6 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-neutral-500">
            Reference times; they can be adjusted in the contract/SOW depending on complexity and change windows.
          </p>
        </div>
      </section>

      {/* Support process */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Process</h2>
          <p className="mt-2 text-neutral-600">
            Ticket journey from reception to closure.
          </p>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                p: "01",
                t: "Reception",
                d: "Ticket via email/portal with evidence and criticality.",
              },
              {
                p: "02",
                t: "Categorization",
                d: "Functional/technical, impact and priority.",
              },
              {
                p: "03",
                t: "Assignment",
                d: "N1/N2 + escalation if required.",
              },
              {
                p: "04",
                t: "Follow-up",
                d: "Updates and workaround if needed.",
              },
              {
                p: "05",
                t: "Closure",
                d: "User validation, documentation and metrics.",
              },
            ].map((s) => (
              <Card key={s.p}>
                <div className="text-xs text-neutral-500">Step {s.p}</div>
                <div className="mt-1 font-semibold">{s.t}</div>
                <p className="mt-2 text-sm text-neutral-600">{s.d}</p>
              </Card>
            ))}
          </ol>
        </div>
      </section>

      {/* RACI + Scope */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* RACI */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight">RACI summary</h2>
              <p className="mt-2 text-neutral-600">
                Who is Responsible, Accountable, Consulted and Informed.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200 bg-white">
                <table className="w-full text-sm">
                  <thead className="text-left text-neutral-500">
                    <tr>
                      <th className="p-4">Activity</th>
                      <th className="p-4">R</th>
                      <th className="p-4">A</th>
                      <th className="p-4">C</th>
                      <th className="p-4">I</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    <tr>
                      <td className="p-4">Categorization and assignment</td>
                      <td className="p-4">Moksa</td>
                      <td className="p-4">Client lead</td>
                      <td className="p-4">Key users</td>
                      <td className="p-4">Stakeholders</td>
                    </tr>
                    <tr>
                      <td className="p-4">Technical diagnosis</td>
                      <td className="p-4">Moksa</td>
                      <td className="p-4">Client lead</td>
                      <td className="p-4">Client IT</td>
                      <td className="p-4">Operations</td>
                    </tr>
                    <tr>
                      <td className="p-4">Workaround / Fix</td>
                      <td className="p-4">Moksa</td>
                      <td className="p-4">Client lead</td>
                      <td className="p-4">Key users</td>
                      <td className="p-4">Operations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Scope */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Scope</h2>
              <p className="mt-2 text-neutral-600">
                What the standard SLA includes and what is out of scope (to be estimated as enhancements).
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <Card>
                  <div className="font-semibold">Includes</div>
                  <ul className="mt-2 text-sm text-neutral-600 space-y-1">
                    <li>• N1/N2 support (functional and technical)</li>
                    <li>• Incidents related to VIM/ABAP/SAP</li>
                    <li>• Workarounds and minor fixes</li>
                    <li>• Post go-live monitoring (hardening)</li>
                    <li>• Monthly KPI report</li>
                  </ul>
                </Card>
                <Card>
                  <div className="font-semibold">Excludes</div>
                  <ul className="mt-2 text-sm text-neutral-600 space-y-1">
                    <li>• New large-scope functionalities</li>
                    <li>• Migration/upgrade projects</li>
                    <li>• New third-party integrations</li>
                    <li>• Changes outside agreed windows</li>
                    <li>• 24x7 support (optional add-on)</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Would you like an SLA tailored to your operation?
          </h2>
          <p className="mt-2 text-neutral-600">
            We adjust schedules, metrics, coverage and dashboards to fit your reality.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton href={WHATSAPP}>Ask on WhatsApp</PrimaryButton>
            <SecondaryButton href={EMAIL}>Send an email</SecondaryButton>
            <SecondaryButton href="/EN/contact">See more options</SecondaryButton>
          </div>
          <ul className="mt-6 space-y-1 text-sm text-neutral-600 flex flex-col items-center">
            <p className="mt-5 text-xs text-neutral-500 flex justify-center w-full">
              *All times are target objectives and can be adjusted in the contract/SOW.
            </p>
          </ul>
        </div>
      </section>
    </main>
  );
}