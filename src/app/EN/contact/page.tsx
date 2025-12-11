"use client";

import { PrimaryButton } from "@/Component/buttons/PrimaryButton";
import { SecondaryButton } from "@/Component/buttons/SecondaryButton";

export default function ContactoPage() {
  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hi%20Moksa%20IT%2C%20I%27d%20like%20to%20ask%20about%20a%20SAP%20or%20VIM%20project.";
  const EMAIL =
    "mailto:info@moksait.com?subject=Moksa%20IT%20enquiry";


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
            <span>info@moksait.com</span>
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
    <iframe name="hidden_iframe" title="Hidden form redirect" style={{ display: "none" }}></iframe>
  </div>
</section>

    </main>
  );
}