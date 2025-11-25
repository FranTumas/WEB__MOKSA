"use client";

import { useState } from "react";
import { PrimaryButton } from "@/Component/buttons/PrimaryButton";
import { SecondaryButton } from "@/Component/buttons/SecondaryButton";

export default function ContactoPage() {
  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hi%20Moksa%20IT%2C%20I%27d%20like%20to%20ask%20about%20a%20SAP%20or%20VIM%20project.";
  const EMAIL =
    "mailto:srossi@moksait.com,gtejada@moksait.com?subject=Moksa%20IT%20enquiry";

  const [sending, setSending] = useState(false);

  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-14 pb-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Contact</h1>

        {/* Shortcuts */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton href={WHATSAPP} className="min-w-[220px]">
            Message on WhatsApp
          </PrimaryButton>
          <SecondaryButton href={EMAIL} className="min-w-[220px]">
            Send email
          </SecondaryButton>
        </div>

        {/* Contact details */}
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
      </section>

      {/* Form */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
            Tell us what you need
          </h2>
          <ul className="mt-6 space-y-1 text-sm text-neutral-600 flex flex-col items-center">
            <p className="mt-5 text-xs text-neutral-500 flex justify-center w-full">
              2–3 lines are enough for us to prepare a clear proposal.
            </p>
          </ul>

          <form
            action="https://formspree.io/f/xxxxxxxx" // Replace with your endpoint
            method="POST"
            onSubmit={() => setSending(true)}
            className="mt-8 grid gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            {/* Simple honeypot */}
            <input
              type="text"
              name="hp"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Name*</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email*</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Company</label>
                <input
                  name="company"
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <input
                  name="phone"
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Message*</label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="E.g.: We need to automate VIM in SAP S/4HANA to reduce invoice cycle times..."
                className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-xs text-neutral-500 inline-flex items-center gap-2">
                <input type="checkbox" required className="rounded border-neutral-300" />
                I agree to be contacted in response to my enquiry.
              </label>

              {/* Submit button styled like PrimaryButton */}
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30 disabled:opacity-70"
              >
                {sending ? "Sending…" : "Send"}
              </button>
            </div>

            <p className="mt-2 text-[11px] text-neutral-500">
              By submitting, you agree that we may use your information to respond to
              your enquiry. We don&apos;t send spam or share your data with third
              parties.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}